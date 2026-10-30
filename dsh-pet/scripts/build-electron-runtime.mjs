#!/usr/bin/env node
/**
 * 生成按平台拆分的 Electron 可选运行时包（dist-electron/dsh-pet-electron-<platform>-<arch>）。
 *
 * 每个包只放官方 electron.zip（约 140MB）与许可文件；npm 的 optionalDependencies + os/cpu
 * 会让用户只安装当前系统那一份。插件首次启动时把 zip 解压到 $DSH_HOME/electron，之后复用。
 * 不把 Electron.app 直接放进包：npm tar 对 macOS 符号链接/权限的保留行为不统一，zip 更稳。
 *
 * 用法：
 *   node scripts/build-electron-runtime.mjs                 # 全部 6 个平台
 *   node scripts/build-electron-runtime.mjs darwin-arm64    # 只构建指定平台
 *   npm publish dist-electron/dsh-pet-electron-darwin-arm64 --access public
 *
 * 产物在 .gitignore 里（dist-electron/），不提交；发布前可重复生成。
 * @module dsh-pet/scripts/build-electron-runtime
 */

import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { downloadArtifact } from '@electron/get';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'dist-electron');
const VERSION = process.env.DSH_PET_ELECTRON_VERSION || '43.3.0';
const MIRROR = process.env.DSH_PET_ELECTRON_MIRROR || 'https://npmmirror.com/mirrors/electron/';
const HOME = process.env.DSH_HOME || join(process.env.USERPROFILE || process.env.HOME || '', '.dsh');
const LICENSE_HOME = resolve(HOME, 'electron');

/** 支持的目标；Electron 官方发布这些平台/架构组合。 */
const TARGETS = [
  ['darwin', 'arm64'],
  ['darwin', 'x64'],
  ['win32', 'x64'],
  ['win32', 'arm64'],
  ['linux', 'x64'],
  ['linux', 'arm64'],
];

/** 只构建命令行点名的目标；不传则全部构建。 */
const requested = new Set(process.argv.slice(2).filter((arg) => !arg.startsWith('-')));
const selected = TARGETS.filter(([platform, arch]) => {
  const key = `${platform}-${arch}`;
  return requested.size === 0 || requested.has(key) || requested.has(`${platform}/${arch}`);
});
if (selected.length === 0) {
  console.error(`[electron-runtime] no matching target. available: ${TARGETS.map(([p, a]) => `${p}-${a}`).join(', ')}`);
  process.exit(1);
}

/** 读取本机 Electron 许可文件；没有时返回 undefined（zip 内仍自带完整许可）。 */
async function readLicense(name) {
  const path = join(LICENSE_HOME, name);
  return existsSync(path) ? readFile(path, 'utf8') : undefined;
}

/** 本机没有解压过 Electron 时的兜底 MIT 文本（与官方 LICENSE 一致）。 */
const ELECTRON_LICENSE_FALLBACK = `Copyright (c) Electron contributors
Copyright (c) 2013-2020 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;

const electronLicense = (await readLicense('LICENSE')) ?? ELECTRON_LICENSE_FALLBACK;
const chromiumLicense = (await readLicense('LICENSES.chromium.html')) ?? '';

for (const [platform, arch] of selected) {
  const name = `dsh-pet-electron-${platform}-${arch}`;
  const dir = join(OUT, name);
  console.log(`[electron-runtime] ${name}: downloading Electron v${VERSION} (${platform}-${arch}) ...`);
  const zip = await downloadArtifact({
    version: `v${VERSION}`,
    artifactName: 'electron',
    platform,
    arch,
    mirrorOptions: { mirror: MIRROR.replace(/\/$/, '') + '/' },
    downloadOptions: { quiet: true },
  });

  await rm(dir, { recursive: true, force: true });
  await mkdir(dir, { recursive: true });
  await copyFile(zip, join(dir, 'electron.zip'));

  const files = ['electron.zip', 'THIRD_PARTY_NOTICES.md'];
  if (electronLicense) {
    await writeFile(join(dir, 'LICENSE'), electronLicense, 'utf8');
    files.push('LICENSE');
  }
  if (chromiumLicense) {
    await writeFile(join(dir, 'LICENSES.chromium.html'), chromiumLicense, 'utf8');
    files.push('LICENSES.chromium.html');
  }

  const pkg = {
    name,
    version: VERSION,
    description: `Bundled Electron ${VERSION} runtime for dsh-pet-to-family (${platform}-${arch}).`,
    license: 'MIT',
    os: [platform],
    cpu: [arch],
    files,
    keywords: ['dsh', 'dsh-plugin', 'desktop-pet', 'electron-runtime'],
    homepage: 'https://github.com/zi-O1/dsh-pet-to-family#readme',
    repository: {
      type: 'git',
      url: 'git+https://github.com/zi-O1/dsh-pet-to-family.git',
      directory: 'dsh-pet',
    },
    bugs: { url: 'https://github.com/zi-O1/dsh-pet-to-family/issues' },
    publishConfig: { registry: 'https://registry.npmjs.org/', access: 'public' },
  };
  await writeFile(join(dir, 'package.json'), `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

  const notices = [
    '# Third-party notices',
    '',
    `This package contains the official Electron v${VERSION} runtime zip for ${platform}-${arch}.`,
    '',
    'Electron is licensed under the MIT License. Chromium and the other third-party components',
    'bundled with Electron are covered by the license files inside electron.zip:',
    '',
    '- `LICENSE`',
    '- `LICENSES.chromium.html`',
    '',
    'Electron project: https://www.electronjs.org/',
    'Electron license: https://github.com/electron/electron/blob/main/LICENSE',
    '',
  ].join('\n');
  await writeFile(join(dir, 'THIRD_PARTY_NOTICES.md'), notices, 'utf8');

  const zipSize = await stat(join(dir, 'electron.zip'));
  console.log(`[electron-runtime] ${name}: ready (${(zipSize.size / 1024 / 1024).toFixed(1)} MB)`);
}

console.log(`[electron-runtime] output: ${OUT}`);
console.log('[electron-runtime] publish each package with: npm publish <dir> --access public');
