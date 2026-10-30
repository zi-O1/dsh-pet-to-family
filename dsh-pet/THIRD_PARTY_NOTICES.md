# Third-party notices

## dsh-im (WeChat iLink protocol reference)

Parts of `src/host/im/weixin-api.ts` are adapted from the WeChat iLink API implementation in
[`xmanrui/dsh-im`](https://github.com/xmanrui/dsh-im), commit `e278ac7` (v5.7.0).

MIT License

Copyright (c) 2026 xmanrui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## @tencent-connect/qqbot-nodejs

QQ 官方机器人连接使用 [`@tencent-connect/qqbot-nodejs`](https://www.npmjs.com/package/@tencent-connect/qqbot-nodejs)
（MIT）。该依赖由 npm 安装，不复制其源码进本仓库。

## qrcode

设置页二维码由 [`qrcode`](https://www.npmjs.com/package/qrcode) 生成（MIT）。该依赖由 npm 安装。

## Electron runtime (optional platform packages)

For supported platforms, npm may install one of the optional packages
`dsh-pet-electron-<platform>-<arch>` (for example `dsh-pet-electron-darwin-arm64`).
Each contains the official Electron v43.3.0 runtime zip for that platform/architecture,
which is extracted to `$DSH_HOME/electron` on first launch. Electron is not bundled into
the main `dsh-pet-to-family` tarball; unsupported platforms fall back to downloading it.

Electron is licensed under the MIT License. Chromium and other third-party components
inside Electron are covered by `LICENSE` and `LICENSES.chromium.html` shipped in the
platform package and inside the Electron zip.

MIT License

Copyright (c) Electron contributors
Copyright (c) 2013-2020 GitHub Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
