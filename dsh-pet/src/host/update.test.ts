/**
 * 插件自更新的纯逻辑测试：版本比较、profile 根定位、pnpm 后端解析、registry 回退。
 *
 * 不启动真实 pnpm：apply() 的进程编排由设置页手动验收；这里钉住最容易回归的解析与检查逻辑。
 * 跑法：node --experimental-strip-types --test src/host/update.test.ts
 */
import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

import {
  compareVersions,
  createUpdateController,
  fetchLatestVersion,
  findProfileRoot,
  readPackageVersion,
  resolveUpdateBackend,
  stripAnsi,
} from './update.ts';

describe('compareVersions —— 语义版本数值比较', () => {
  test('主 / 次 / 补丁逐段比较，不受字符串字典序影响', () => {
    assert.ok(compareVersions('0.10.0', '0.9.9') > 0);
    assert.ok(compareVersions('0.6.0', '0.6.0') === 0);
    assert.ok(compareVersions('1.0.0', '0.99.99') > 0);
    assert.ok(compareVersions('0.5.0', '0.6.0') < 0);
  });

  test('允许 v 前缀与预发布后缀；后缀不参与数值比较', () => {
    assert.equal(compareVersions('v0.6.0', '0.6.0'), 0);
    assert.equal(compareVersions('0.6.0-beta.1', '0.6.0'), 0);
  });
});

describe('readPackageVersion —— 容错读取', () => {
  test('读 package.json 的 version', () => {
    const dir = mkdtempSync(join(tmpdir(), 'dsh-pet-update-version-'));
    try {
      writeFileSync(join(dir, 'package.json'), JSON.stringify({ version: '1.2.3' }));
      assert.equal(readPackageVersion(join(dir, 'package.json')), '1.2.3');
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  test('文件缺失 / 非法 JSON / version 非字符串 → undefined', () => {
    const dir = mkdtempSync(join(tmpdir(), 'dsh-pet-update-version-'));
    try {
      assert.equal(readPackageVersion(join(dir, 'missing.json')), undefined);
      writeFileSync(join(dir, 'bad.json'), '{');
      assert.equal(readPackageVersion(join(dir, 'bad.json')), undefined);
      writeFileSync(join(dir, 'number.json'), JSON.stringify({ version: 1 }));
      assert.equal(readPackageVersion(join(dir, 'number.json')), undefined);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe('findProfileRoot —— 从包目录向上找 profile', () => {
  test('命中最近的 pnpm-workspace.yaml / pnpm-lock.yaml', () => {
    const root = mkdtempSync(join(tmpdir(), 'dsh-pet-update-profile-'));
    try {
      const pkg = join(root, 'node_modules', 'dsh-pet-to-family');
      mkdirSync(pkg, { recursive: true });
      writeFileSync(join(root, 'pnpm-lock.yaml'), '');
      assert.equal(findProfileRoot(pkg), root);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  test('找不到 profile 标记 → undefined（不会一路退到 /）', () => {
    const root = mkdtempSync(join(tmpdir(), 'dsh-pet-update-profile-'));
    try {
      assert.equal(findProfileRoot(root), undefined);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

describe('resolveUpdateBackend —— 复用 DSH 的 pnpm', () => {
  test('优先使用 pluginManager.profile.packageManager（Desktop 内置 pnpm）', () => {
    const backend = resolveUpdateBackend(
      {
        profile: {
          dir: '/tmp/profile',
          packageManager: {
            command: '/electron',
            args: ['--expose-internals', '/pnpm.mjs'],
            env: { ELECTRON_RUN_AS_NODE: '1' },
          },
        },
      },
      '/tmp/profile/node_modules/dsh-pet-to-family',
      'darwin',
    );
    assert.deepEqual(backend, {
      profileDir: '/tmp/profile',
      command: '/electron',
      args: ['--expose-internals', '/pnpm.mjs'],
      env: { ELECTRON_RUN_AS_NODE: '1' },
      kind: 'plugin-manager',
    });
  });

  test('没有 packageManager 时退回 pnpmCommand / PATH pnpm', () => {
    const withCommand = resolveUpdateBackend(
      { pnpmCommand: '/custom/pnpm', profile: { dir: '/tmp/profile' } },
      '/tmp/profile/node_modules/dsh-pet-to-family',
      'linux',
    );
    assert.equal(withCommand?.command, '/custom/pnpm');
    assert.equal(withCommand?.kind, 'plugin-manager');

    const fallback = resolveUpdateBackend(
      { profile: { dir: '/tmp/profile' } },
      '/tmp/profile/node_modules/dsh-pet-to-family',
      'win32',
    );
    assert.equal(fallback?.command, 'pnpm.cmd');
    assert.equal(fallback?.kind, 'pnpm');
  });
});

describe('stripAnsi —— pnpm 诊断去色', () => {
  test('去掉 CSI 控制序列，保留正常文本', () => {
    assert.equal(stripAnsi('\u001b[31merror\u001b[0m: nope'), 'error: nope');
  });
});

describe('fetchLatestVersion —— registry 回退', () => {
  test('第一个 registry 404 时继续问下一个，并返回应答的 registry', async () => {
    const calls: string[] = [];
    const fakeFetch = (async (input: string | URL | Request) => {
      const url = String(input);
      calls.push(url);
      if (url.startsWith('https://registry.npmjs.org/')) {
        return new Response('not found', { status: 404 });
      }
      return new Response(JSON.stringify({ version: '0.7.0' }), {
        status: 200,
        headers: { 'content-type': 'application/json' },
      });
    }) as typeof fetch;
    const found = await fetchLatestVersion(fakeFetch);
    assert.equal(found.version, '0.7.0');
    assert.equal(found.registry, 'https://registry.npmmirror.com/');
    assert.equal(calls.length, 2);
  });

  test('全部失败时抛出带每个 registry 原因的错误', async () => {
    const fakeFetch = (async () => new Response('down', { status: 503 })) as typeof fetch;
    await assert.rejects(fetchLatestVersion(fakeFetch), /registry\.npmjs\.org.*HTTP 503/);
  });
});

describe('createUpdateController —— 状态与检查', () => {
  test('当前版本 / latest / hasUpdate 与缓存查询', async () => {
    const root = mkdtempSync(join(tmpdir(), 'dsh-pet-update-controller-'));
    try {
      writeFileSync(join(root, 'package.json'), JSON.stringify({ version: '0.6.0' }));
      writeFileSync(join(root, 'pnpm-lock.yaml'), '');
      let calls = 0;
      const fakeFetch = (async () => {
        calls += 1;
        return new Response(JSON.stringify({ version: '0.7.0' }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        });
      }) as typeof fetch;
      const controller = createUpdateController({ packageRoot: root, manager: () => undefined, fetchImpl: fakeFetch });
      const first = await controller.check();
      assert.equal(first.current, '0.6.0');
      assert.equal(first.latest, '0.7.0');
      assert.equal(first.hasUpdate, true);
      assert.equal(first.canApply, true);
      const second = await controller.check();
      assert.equal(second.latest, '0.7.0');
      assert.equal(calls, 1, '60 秒内命中缓存，不重复请求 registry');
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
