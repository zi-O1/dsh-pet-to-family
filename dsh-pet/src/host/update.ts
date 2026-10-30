/**
 * 插件自更新：查询 npm 最新版，并用当前 profile 的 pnpm 把本包升级到最新版。
 *
 * 为什么不让用户去 DSH 插件页点「更新」：那个按钮只给官方按需目录里的包生成
 * （installTarget 来自目录清单）；第三方 bundle 只能卸载后重装。本模块提供插件设置页自己的
 * 检查/更新入口，并显式绕过 pnpm 的 minimumReleaseAge（默认 24h）——否则刚发布的版本会被
 * pnpm 静默降级成上一个满足年龄的旧版（这正是另一台电脑装到 0.5.0 的常见原因）。
 *
 * 更新方式：优先复用 DSH pluginManager 服务的 profile.packageManager（Desktop 里是内置 pnpm），
 * 直接 `pnpm add dsh-pet-to-family@<latest> --save-exact`。不先卸载当前包：正在运行的宿主继续用
 * 旧模块，更新完成后由用户完全重启 DSH；这样设置页的请求不会在卸载自身时被掐断。
 *
 * @module dsh-pet/src/host/update
 */
import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

import type { UpdateStatus } from '../shared/update';

/** 官方与国内镜像；按顺序尝试，第一个有 latest 的胜出。 */
const REGISTRIES = [
  'https://registry.npmjs.org/',
  'https://registry.npmmirror.com/',
  'https://mirrors.cloud.tencent.com/npm/',
];

/** 单次 registry 查询的超时（ms）。 */
const CHECK_TIMEOUT_MS = 8_000;
/** 更新进程最长运行时间（ms）；超时后先 SIGTERM，再 SIGKILL。 */
const UPDATE_TIMEOUT_MS = 10 * 60 * 1000;
/** 保留给用户看的 pnpm 输出尾部长度。 */
const OUTPUT_TAIL = 2_000;

/** DSH pluginManager 服务里我们实际用到的字段（避免把 DSH 类型钉进本包）。 */
interface PluginManagerLike {
  pnpmCommand?: unknown;
  profile?: {
    dir?: unknown;
    packageManager?: {
      command?: unknown;
      args?: unknown;
      env?: unknown;
    };
  };
}

/** 解析后的 pnpm 调用方式。 */
export interface UpdateBackend {
  profileDir: string;
  command: string;
  args: string[];
  env: Record<string, string | undefined>;
  kind: 'plugin-manager' | 'pnpm';
}

/** 比较 x.y.z（允许 -pre / +build 后缀）；返回 <0 / 0 / >0。非数字段按 0。 */
export function compareVersions(a: string, b: string): number {
  const parse = (value: string): number[] => {
    const core = value.trim().replace(/^v/, '').split(/[+-]/, 1)[0] ?? '';
    return core.split('.').map((part) => {
      const n = Number.parseInt(part, 10);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    });
  };
  const left = parse(a);
  const right = parse(b);
  const length = Math.max(left.length, right.length);
  for (let i = 0; i < length; i += 1) {
    const diff = (left[i] ?? 0) - (right[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/** 读一个 package.json 的 version；读不到返回 undefined。 */
export function readPackageVersion(path: string): string | undefined {
  try {
    const parsed = JSON.parse(readFileSync(path, 'utf8')) as { version?: unknown };
    return typeof parsed.version === 'string' && parsed.version ? parsed.version : undefined;
  } catch {
    return undefined;
  }
}

/** 从包目录向上找 profile 根（有 pnpm-workspace.yaml 或 pnpm-lock.yaml 的那一级）。 */
export function findProfileRoot(start: string): string | undefined {
  let current = resolve(start);
  for (;;) {
    if (existsSync(join(current, 'pnpm-workspace.yaml')) || existsSync(join(current, 'pnpm-lock.yaml'))) {
      return current;
    }
    const parent = dirname(current);
    if (parent === current) return undefined;
    current = parent;
  }
}

/** 把 pluginManager 服务解析成可执行的 pnpm 调用；缺失时退回 PATH 上的 pnpm。 */
export function resolveUpdateBackend(
  manager: unknown,
  packageRoot: string,
  platform: NodeJS.Platform = process.platform,
): UpdateBackend | undefined {
  const pm = (manager && typeof manager === 'object' ? manager : undefined) as PluginManagerLike | undefined;
  const profileDir =
    (typeof pm?.profile?.dir === 'string' && pm.profile.dir) || findProfileRoot(packageRoot) || undefined;
  if (!profileDir) return undefined;

  const configured = pm?.profile?.packageManager;
  const command = typeof configured?.command === 'string' ? configured.command : '';
  if (command) {
    return {
      profileDir,
      command,
      args: Array.isArray(configured?.args) ? configured.args.map(String) : [],
      env: configured?.env && typeof configured.env === 'object' ? (configured.env as Record<string, string>) : {},
      kind: 'plugin-manager',
    };
  }

  const pnpmCommand = typeof pm?.pnpmCommand === 'string' ? pm.pnpmCommand : '';
  return {
    profileDir,
    command: pnpmCommand || (platform === 'win32' ? 'pnpm.cmd' : 'pnpm'),
    args: [],
    env: {},
    kind: pnpmCommand ? 'plugin-manager' : 'pnpm',
  };
}

/** 去掉 pnpm 输出里的 ANSI 控制序列。 */
export function stripAnsi(text: string): string {
  // eslint-disable-next-line no-control-regex -- 目的就是剥掉 ESC 开头的终端控制序列
  return text.replace(/\x1b\[[0-9;?]*[ -/]*[@-~]/g, '');
}

/** 从注册表读取 latest；按官方 → npmmirror → 腾讯云顺序尝试。 */
export async function fetchLatestVersion(
  fetchImpl: typeof fetch = fetch,
): Promise<{ version: string; registry: string }> {
  const errors: string[] = [];
  for (const registry of REGISTRIES) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), CHECK_TIMEOUT_MS);
    timer.unref?.();
    try {
      const response = await fetchImpl(`${registry}dsh-pet-to-family/latest`, {
        headers: { accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) {
        errors.push(`${registry} HTTP ${response.status}`);
        continue;
      }
      const body = (await response.json()) as { version?: unknown };
      if (typeof body.version === 'string' && /^\d+\.\d+\.\d+(?:[-+].*)?$/.test(body.version)) {
        return { version: body.version, registry };
      }
      errors.push(`${registry} 返回了非法版本号`);
    } catch (error) {
      errors.push(`${registry} ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      clearTimeout(timer);
    }
  }
  throw new Error(errors.join('；') || '没有可用的 npm registry');
}

/** 更新控制器：一个插件进程一份，设置页轮询 status()。 */
export interface UpdateController {
  check: (force?: boolean) => Promise<UpdateStatus>;
  start: () => Promise<{ ok: boolean; reason?: string; version?: string; message?: string }>;
  status: () => UpdateStatus;
}

/** 创建更新控制器。 */
export function createUpdateController(options: {
  packageRoot: string;
  manager: () => unknown;
  logger?: { info?: (message: string) => void; warn?: (message: string) => void };
  fetchImpl?: typeof fetch;
}): UpdateController {
  const current = readPackageVersion(join(options.packageRoot, 'package.json')) ?? '0.0.0';
  let latest: string | null = null;
  let registry: string | undefined;
  let checkError: string | undefined;
  let checkedAt = 0;
  let state: UpdateStatus['state'] = 'idle';
  let target: string | undefined;
  let installed: string | undefined;
  let message: string | undefined;
  let child: ReturnType<typeof spawn> | undefined;
  let timer: NodeJS.Timeout | undefined;
  let output = '';
  let settled = true;

  const backend = (): UpdateBackend | undefined => resolveUpdateBackend(options.manager(), options.packageRoot);

  const status = (): UpdateStatus => {
    const backendValue = backend();
    return {
      current,
      latest,
      hasUpdate: latest !== null && compareVersions(latest, current) > 0,
      registry,
      error: checkError,
      canApply: backendValue !== undefined,
      backend: backendValue?.kind ?? 'none',
      state,
      target,
      installed,
      message,
    };
  };

  const check = async (force = false): Promise<UpdateStatus> => {
    if (state === 'running') return status();
    if (!force && latest !== null && Date.now() - checkedAt < 60_000) return status();
    try {
      const found = await fetchLatestVersion(options.fetchImpl);
      latest = found.version;
      registry = found.registry;
      checkError = undefined;
      checkedAt = Date.now();
    } catch (error) {
      checkError = error instanceof Error ? error.message : String(error);
      latest = null;
    }
    return status();
  };

  const finish = (nextState: 'done' | 'error', text?: string): void => {
    if (settled) return;
    settled = true;
    if (timer) clearTimeout(timer);
    timer = undefined;
    child = undefined;
    state = nextState;
    message = text;
  };

  const start = async (): Promise<{ ok: boolean; reason?: string; version?: string; message?: string }> => {
    if (state === 'running') return { ok: false, reason: 'busy', message: '更新正在进行中' };
    const backendValue = backend();
    if (!backendValue) return { ok: false, reason: 'unsupported', message: '当前环境没有可用的 pnpm' };

    if (latest === null) await check();
    if (latest === null) return { ok: false, reason: 'check-failed', message: checkError ?? '检查最新版本失败' };
    if (compareVersions(latest, current) <= 0) {
      return { ok: false, reason: 'already-latest', version: current };
    }

    const requested = latest;
    target = requested;
    installed = undefined;
    state = 'running';
    message = undefined;
    output = '';
    settled = false;

    const args = [
      ...backendValue.args,
      'add',
      `dsh-pet-to-family@${requested}`,
      '--save-exact',
      // 用户主动点「更新」= 明确要求最新版：绕开 pnpm 默认 24h 的 minimumReleaseAge。
      '--config.minimumReleaseAge=0',
      '--config.minimumReleaseAgeStrict=false',
    ];
    try {
      child = spawn(backendValue.command, args, {
        cwd: backendValue.profileDir,
        env: {
          ...process.env,
          ...backendValue.env,
          NO_COLOR: '1',
          CI: '1',
        },
        stdio: ['ignore', 'pipe', 'pipe'],
        windowsHide: true,
        shell: /\.(?:cmd|bat)$/i.test(backendValue.command),
      });
    } catch (error) {
      finish('error', error instanceof Error ? error.message : String(error));
      return { ok: false, reason: 'spawn-failed', message };
    }

    const append = (chunk: Buffer | string): void => {
      output = `${output}${String(chunk)}`.slice(-OUTPUT_TAIL);
    };
    child.stdout?.on('data', append);
    child.stderr?.on('data', append);
    timer = setTimeout(() => {
      output = `${output}\n更新超时（${UPDATE_TIMEOUT_MS / 1000}s），已终止 pnpm`;
      child?.kill('SIGTERM');
      setTimeout(() => child?.kill('SIGKILL'), 5_000).unref?.();
    }, UPDATE_TIMEOUT_MS);
    timer.unref?.();

    child.once('error', (error) => {
      finish('error', error instanceof Error ? error.message : String(error));
      options.logger?.warn?.(`[dsh-pet] update failed: ${message ?? ''}`);
    });
    child.once('exit', (code, signal) => {
      if (settled) return;
      if (code === 0) {
        const installedPath = join(backendValue.profileDir, 'node_modules', 'dsh-pet-to-family', 'package.json');
        const actual = readPackageVersion(installedPath);
        if (actual && compareVersions(actual, requested) >= 0) {
          installed = actual;
          finish('done');
          options.logger?.info?.(`[dsh-pet] updated to ${actual}; restart DSH to load it`);
          return;
        }
        finish(
          'error',
          `pnpm 退出码为 0，但实际版本是 ${actual ?? '未知'}（期望 ${requested}）。请完全重启 DSH 后重试，或在终端执行 npm view dsh-pet-to-family version 检查。`,
        );
        return;
      }
      const detail = stripAnsi(output).trim();
      finish('error', `pnpm 退出码 ${String(code)}${signal ? `（${signal}）` : ''}${detail ? `：${detail}` : ''}`);
      options.logger?.warn?.(`[dsh-pet] update failed: ${message ?? ''}`);
    });

    return { ok: true, version: requested };
  };

  return { check, start, status };
}
