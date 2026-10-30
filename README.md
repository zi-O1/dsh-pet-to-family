# dsh-pet-to-family 🐾

<p align="center">
  <a href="https://www.npmjs.com/package/dsh-pet-to-family"><img alt="npm version" src="https://img.shields.io/npm/v/dsh-pet-to-family?label=npm&color=blue"></a>
  <a href="https://www.npmjs.com/package/dsh-pet-to-family"><img alt="npm monthly downloads" src="https://img.shields.io/npm/dm/dsh-pet-to-family?label=%E6%9C%88%E4%B8%8B%E8%BD%BD&color=brightgreen"></a>
  <a href="https://www.npmjs.com/package/dsh-pet-to-family"><img alt="total downloads" src="https://img.shields.io/npm/dt/dsh-pet-to-family?label=%E6%80%BB%E4%B8%8B%E8%BD%BD&color=success"></a>
  <a href="https://github.com/zi-O1/dsh-pet-to-family"><img alt="stars" src="https://img.shields.io/github/stars/zi-O1/dsh-pet-to-family?style=social"></a>
  <a href="https://github.com/zi-O1/dsh-pet-to-family/blob/main/LICENSE"><img alt="license" src="https://img.shields.io/github/license/zi-O1/dsh-pet-to-family?color=orange"></a>
  <a href="https://awesome-dsh-plugin.com"><img alt="awesome dsh plugin" src="https://awesome-dsh-plugin.com/badge.svg"></a>
  <a href="https://github.com/zi-O1/dsh-pet-to-family"><img alt="repo size" src="https://img.shields.io/github/repo-size/zi-O1/dsh-pet-to-family"></a>
  <a href="https://github.com/zi-O1/dsh-pet-to-family/issues"><img alt="issues" src="https://img.shields.io/github/issues/zi-O1/dsh-pet-to-family"></a>
  <img alt="platform" src="https://img.shields.io/badge/platform-DeepSeek%20Harness%20Web-8A2BE2">
  <img alt="assets" src="https://img.shields.io/badge/assets-dynamic%20animations-ff69b4">
</p>

一只住在 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 里的桌面宠物：待机呼吸、随机动作（打瞌睡、玩魔方、吃火锅……）、左右转向、屏幕漫游、点击 Q 弹、拖拽甩抛反弹、右键菜单点播——一百余个透明动画随时无缝衔接；还能跟随 DSH 会话事件切换工作状态动画、按档位播放余额动画 + 头顶气泡、碎碎念与对话聊天、用灵魂卡/长期记忆/关系事件形成连续人格、在纪念日主动开口、窗口失焦时弹系统通知。可多开同屏，能脱离浏览器住上**桌面**（透明置顶小窗），也能自己添加**全新宠物种类**（pet pack）。

这不是一个普通插件，而是**完整的三件套项目**：

```
① 提示词（配方）    →  ② 素材生成链（引擎）  →  ③ 插件（成品）
AI 生成动画的配方     源视频 → 透明动画的管线    运行在 DSH 里的宠物
```

任何人 clone 本仓库，都可以**从零生成自己的桌面宠物**——换角色、换动作、换风格，全流程可复现。

---

## 快速开始（安装插件）

装法取决于你在用哪个 DSH：

### 🪟 桌面应用（Electron 版）

直接在应用内「插件管理」页的安装框里填 `dsh-pet-to-family`（当前 npm 正式版 `0.7.0`），不用开终端；需要在终端里操作插件时，用桌面应用自带的那份 CLI。

也可以直接填 GitHub 仓库地址 `https://github.com/zi-O1/dsh-pet-to-family`（仓库根的兼容包指向 `dsh-pet/` 里已入库的构建产物，安装时不需要再构建）；如果安装器只认子目录，用 `https://github.com/zi-O1/dsh-pet-to-family#path:/dsh-pet`。安装源选 **npm 官方源**（`https://registry.npmjs.org/`）。

> 已安装旧包 `dsh-pet` 的 profile，请先在插件管理里卸载旧包，再安装 `dsh-pet-to-family`；用户数据仍在 `$DSH_HOME/dsh-pet/`，不会被清空。
>
> 当前 npm 正式版：`0.7.0`（`latest`），包含内置 Electron 平台包、默认仅桌面、版本与更新、原生微信 / QQ 接入、多机器人和 DSH session 模式。
>
> 维护者发新版本：`cd dsh-pet && npm publish --access public`（`publishConfig` 已固定为 npm 官方源）。

### 🌐 `dsh web`

> 以下命令都在你的**命令行终端**（PowerShell / CMD 等）中运行。前提是 DSH 环境已就绪：

```sh
# ① 前置要求：确认 Node.js 已安装
node -v

# ② 安装 DSH 启动器与 pnpm（已装可跳过；装完请重新打开终端）
npm install -g @deepseek-ai/dsh pnpm
dsh --version   # 验证 dsh 命令可用

# ③ 安装本插件（web 模式用 --profile web）
dsh plugin --profile web add dsh-pet-to-family
```

装完**重开桌面应用**（`dsh web` 用户则重启 `dsh web`）才生效——运行中的进程持有内存里的旧插件。宠物出现在界面右上角（默认配置角落，可在设置页修改）。

> **兼容性**：本插件当前在 dsh **`0.2.1-rc.2`** 下开发并测试（`dsh --version` 可查看你的版本）。建议使用相同版本；其他版本如遇问题欢迎反馈。

### 从源码安装（clone 本仓库后）

本仓库已跟踪 `lib/` 与 `runtime/electron-helper/shared-core.js` 构建产物，clone 后可以直接安装，不需要先构建；只有修改源码后才需要重新构建：

```sh
# ① clone 本仓库，进入插件目录
git clone https://github.com/zi-O1/dsh-pet-to-family.git
cd dsh-pet-to-family/dsh-pet

# ② 安装依赖
npm install

# ③ 构建（仅在修改源码后需要；完整 lib：tsdown → lib + 桌面共享核心 + 类型声明）
npm run build       # 已提交的 lib 可直接安装；改过 src/ 后再跑

# ④ 安装到 DSH（file: 指向**插件目录**——上面 cd 进去的那一层，用构建好的 lib）
#    --profile 填实际在用的那个：dsh web → web；
#    桌面应用（Electron 版）改用应用内「插件管理」安装，见上方快速开始
dsh plugin --profile web add file:D:/path/to/dsh-pet-to-family/dsh-pet
```

> 注：`npm run build`（即 `scripts/prepare.js`）才产出**完整可安装**的 lib——除 tsdown 构建外还构建桌面共享核心（`shared-core.js`）、生成类型声明并收敛发布 `files` 清单；裸 `tsdown` 构建会缺桌面运行时与类型。发布与打包（`npm publish` / `npm pack`）时由 `prepack` 自动调用它。本仓库已提交构建产物；修改 `src/` 后请重跑 `npm run build`，并把 `dsh-pet/lib/` 与 `dsh-pet/runtime/electron-helper/shared-core.js` 一起提交。

### 安装后你会看到什么

新安装的默认配置是 `display: "desktop"`（只在桌面显示，浏览器里默认不出现），并保留 `confineToScreen: false`（可以跨屏活动）。已有用户配置不会被强制迁移：之前写过 `display: "both"` 的仍然是两边都显示。

1. **npm 安装时带上当前平台的 Electron。** 主包通过可选依赖 `dsh-pet-electron-<platform>-<arch>` 发布官方 Electron 运行时；npm / pnpm 只会安装与当前系统、架构匹配的那一份（压缩后约 120MB），不需要再去 GitHub 或镜像站下载。
2. **首次启动只解压，不联网。** 插件把包内 `electron.zip` 解压到 `~/.dsh/electron`（约 350MB，之后复用），然后拉起桌面 Helper。桌面上会出现透明置顶小窗，浏览器里默认没有宠物。
3. **平台没有内置包时才回退在线下载。** 例如可选依赖被安装器跳过、或系统/架构暂未覆盖时，才会走原来的 npmmirror 下载；`DSH_PET_ELECTRON_PATH`、`DSH_PET_ELECTRON_MIRROR`、`DSH_PET_ELECTRON_VERSION` 仍然可用。
4. **想让浏览器也显示。** 两条路都行，改完即时生效：
   - **设置页**：选中该宠物 →「显示位置」下拉框 → 仅浏览器 / 仅桌面 / 两者都显示 / 都不显示；
   - **宠物右键**：菜单里的「显示位置」子菜单 → 仅网页 / 仅桌面 / 两者 / 都不（不用回设置页）。

想改人格、长期记忆或关系事件：右键宠物 →「桌宠设置」→「人格灵魂色彩」。桌面端会打开独立设置小窗，不打断 DSH 主界面；设置分组也可以在右键菜单里直接选。

> 桌面运行时缺失或解压失败**只影响桌面模式**：控制台会给出提示；此时可以设 `DSH_PET_ELECTRON_PATH` 指向现成可执行文件，或手动运行 `cd dsh-pet && npm run ensure:electron`。主包本身不携带 Electron 二进制，平台包由 `npm run electron:packages` 生成并单独发布。

### 更新到最新版

右键宠物 →「桌宠设置」→「版本与更新」：

- 打开设置页时自动查询 npm 最新版（官方源 → npmmirror → 腾讯云，依次回退）。
- 有新版时点「更新到最新版」。它复用当前 profile 的 pnpm 执行 `add dsh-pet-to-family@<latest> --save-exact --config.minimumReleaseAge=0`，完成后提示**完全退出并重新打开 DSH**。
- 更新不会先卸载当前插件，所以设置页不会在更新中途消失；当前进程仍跑旧代码，重启后才加载新版本。

> **为什么另一台电脑 npm 上已经是新版，装出来却是 0.5.0？**
> DSH 插件管理器沿用 pnpm 的供应链保护 `minimumReleaseAge`（默认 24 小时）：发布时间不足 24 小时的版本不会被自动选中，于是会落到上一个满足年龄的旧版。三条路解决：① 等 24 小时后再装；② 在插件页卸载后安装精确版本 `dsh-pet-to-family@0.7.0`；③ 用本插件的「版本与更新」按钮，它会显式绕过这个等待。

## 插件功能

- **纯粹的桌宠**：不做天气、监控等无关功能，不碰 DSH 内核；可选能力只有下面这些（余额 / 碎碎念 / 对话 / 工作状态 / 系统通知 / 人格灵魂与长期记忆）
- **动画链**：每个动画（含待机）播完即按权重选下一个（默认 idle 10 / turn 5 / move 5 + 分类权重，`config.jsonc` 可调），首尾相接
- **事件动画**：余额 / 碎碎念 / 工作状态按档位触发专属动画；档位支持候选数组——触发时档内随机、循环播放自动轮换，避免连播同一段
- **多开**：同时显示多个宠物，各自独立大小与位置（设置页「桌宠配置」添加/删除）
- **屏幕漫游**：朝朝向方向行走，先探测空间、不走出屏幕（多屏按各屏边界判定；设置页「锁定在当前屏幕」开启后只在当前所在那块屏内走）
- **点击 / 拖拽 / 甩抛**：点击有回应动画并 Q 弹挤压；拖拽过阻尼弹簧跟手，甩出即抛物线飞行、屏幕边缘反弹、落地摩擦停稳并 Q 弹一下；温柔放下原地停住；两端同一套纯函数物理与挤压曲线（`dsh-pet/src/shared/physics.ts`）
- **右键菜单**：「动作 → 分类 → 具体动画」任意点播（移动类动画点播会真实行走一段）；工具项——浏览器端：碎碎念 / 对话 / 桌宠设置 / 回到初始位置；桌面端：+ 打开网站、查看余额（余额启用时显示）、桌宠设置、重载配置（改完配置文件直接右键重载全部桌面宠物，不必回设置页点保存）
- **「打开网站」按宿主自动分派**：宠物宿主是 **DSH 桌面应用**时，该项自动变成「打开 DeepSeek Harness」——用应用自注册的 `dsh://open` 协议把桌面应用主窗口唤到前台（已运行则前置、未运行则拉起）；宿主是 `dsh web` / 独立模式时，仍是系统默认浏览器打开站点
- **朝向与落地**：全部动画可镜像（可朝左 / 朝右）；脚底线统一，宠物始终站在地面上
- **流畅切换**：双缓冲交叉淡入，切换无空白帧
- **余额展示**：按已用百分比分档播余额动画 + 头顶联想气泡（10 秒自动消失）；DeepSeek 显示账户余额，OpenCode Zen Go 与 Command Code 显示最紧迫的一个额度窗口；**未登记余额接口的服务商改为弹文字说明**（不静默）；按宠物独立开关
- **碎碎念与对话**：碎碎念按周期自动生成一句（说话动画 + 气泡，也可手动触发）；对话在右键弹输入框与宠物聊天，记忆持久化（浏览器 / 桌面共享同一份）
- **人格灵魂与长期连续性**：灵魂卡定义“它是谁”，动态状态记录情绪/关系，反思层把成功对话整理成长期记忆与关系事件；纪念日会在当天主动提醒（详见下方「人格灵魂、长期记忆与关系事件」）
- **微信 / QQ 原生接入**：插件自己连接微信 iLink（扫码）与 QQ 官方机器人（AppID + AppSecret），白名单联系人发消息时由桌宠回复，不依赖 dsh-im；另有通用 Webhook 接其他平台（详见下方「消息接入」）
- **一键搬家**：设置页「打包搬家啦」把配置、聊天记忆、灵魂状态、关系事件和 pet 配置打成 `.dshpet`；新电脑「我住进来喽」导入恢复
- **版本与更新**：设置页检查 npm 最新版，一键用当前 profile 的 pnpm 升级到最新版（显式绕过 `minimumReleaseAge`），并提示重启生效
- **工作状态联动**：监听 DSH 会话事件，切「思考 / 工作 / 整理 / 等待 / 成功 / 出错」档位动画 + 常驻气泡；目标多轮任务只在真正收尾轮庆祝
- **系统通知**：窗口失焦时弹系统 toast（对话完成 / 生成失败 / 输出截断 / 权限申请 / 用户选择）
- **桌面模式（可选）**：每只宠物开一个独立透明置顶局部小窗，与浏览器严格同行为、共用同一份素材与纯逻辑（见下节）
- **pet pack（额外宠物种类）**：`pet/` 下建 `种类名-config.json` + `种类名-animation/` 即新增独立动画池与素材的全新种类，多实例共享素材（见 [CONFIG.md](CONFIG.md) 的「方式四」）
- **自定义动画**：往 `main-animation/webm/` 放 VP9-Alpha 的 `.webm` 即为新动画，优先于包内素材
- **无障碍**：支持 `prefers-reduced-motion`（减少动效时跳过 Q 弹挤压与淡入切换）

## 🔌 对外接口（供其他插件调用）

桌宠不只自己玩，也**对外开放两条调用通道**，让别的插件或脚本能驱动它、读它的状态。

- **能做什么**：让它说一句指定的话、播一段指定动画、与它对话；读它当前说的话、工作状态、系统通知与余额
- **为什么开放**：桌宠不该只是个摆设——比如一个「女仆」插件巡检验完想说句话，就能让桌宠当它的「实体」开口；也方便任何人基于它做二次开发
- **通道一 · HTTP**：挂在 DSH 自己的 Web 服务上（前缀 `/dsh-pet-7340`，只监听本机、无鉴权），跨进程、脚本可直接调。动作类接口只回 `{ok}`，数据统一从 `GET /state` 读
- **通道二 · Cordis 服务**：客户端半侧在 DSH web 页面内注册，同页客户端插件用 `ctx.get('petApi7340')` 直接取，零网络、零端口；只在该页面实例内有效，方法与返回见 [`CORDIS.md`](CORDIS.md)

相关文件（HTTP 与 Cordis 各一套）：

- [`API.md`](API.md) —— HTTP 接口一览（每个接口一句话，功能预览）
- [`openapi.yaml`](openapi.yaml) —— 完整契约（OpenAPI 3.1，可直接导入 Swagger UI / Postman）
- [`CORDIS.md`](CORDIS.md) —— 对外 Cordis 服务（客户端半侧，页面内 `ctx.get('petApi7340')`，不走网络）
- [`tools/api-tester.html`](tools/api-tester.html) —— HTTP 侧示例：桌宠控制台，扮演第三方消费方，可直观试用（`node tools/api-tester.cjs` 启动）
- [`tools/cordis-probe`](tools/cordis-probe/README.md) —— Cordis 侧示例：扮演同页客户端插件，用 `ctx.get()` 消费服务

扩展做出来后欢迎分享：统一收录在 [PC2005-cloud/petE](https://github.com/PC2005-cloud/petE)——本项目的扩展收录仓库，每个扩展占一个目录、元信息写在 `plugin.json`，列表由流水线生成。想把自己的加进去，按仓库里的 `CONTRIBUTING.md` 提 PR 即可。安装：`dsh plugin --profile web add "github:PC2005-cloud/petE#path:/<扩展目录>"`。收录不代表对功能或安全性的审核，安装前请自行阅读代码。

## 兼容性

- **操作系统**：Windows / Linux / macOS 三端均可运行——浏览器 overlay 与桌面模式（Electron 透明置顶窗）行为完全一致；Electron 按平台内置为可选依赖（`electron.exe` / `Electron.app` / linux 单文件），缺失时自动回退下载，无需手动安装
- **无头 / 无桌面环境**：支持 Linux headless 等无图形会话——桌面模式自动检测显示环境（Linux 无 `DISPLAY` / `WAYLAND_DISPLAY` 时判定无显示、跳过桌面窗口，仅日志告警），浏览器 overlay 不受影响
- **浏览器**：浏览器 overlay 兼容 **Chromium 内核（Chrome / Edge 等）与 Firefox**——透明动画依赖 VP9-Alpha webm，三者均已实测透明确认；**不支持 Safari**（macOS 不认 webm alpha，透明渲染为黑底）——macOS 用 `.mov` 素材（GitHub Release `assets-mov`），下载放入即可（见「②.5 Safari/HEVC 兼容素材」）
- **多显示器**：支持多屏环境——跨屏漫游/抛掷以各屏工作区为界，异构缩放（各屏 DPI 不同）、任务栏条带、屏幕之间空洞均正确判定（横屏 / 竖屏 / 上下叠放皆可）；设置页「锁定在当前屏幕」可让宠物（抛掷与漫游）只在当前所在那块屏内活动

## 🪟 桌面模式（可选，脱离浏览器）

插件内建**双模式**：安装后默认会拉起**独立透明置顶小窗**——为每只桌面宠物各开一个局部窗口（跟随宠物移动，**不铺满屏幕**），与浏览器 overlay 严格同行为、功能完全对齐：

- **依赖**：npm 安装时按平台安装内置 Electron 可选包，首次启动解压到 `~/.dsh/electron/`；没有匹配的内置包时才在线下载（也可 `cd dsh-pet && npm run ensure:electron` 手动触发）；缺失时仅日志告警，不影响浏览器形态
- **开关 = 每只宠物的必填字段 `display`**：`web` = 仅浏览器 / `desktop` = 仅桌面（新安装默认）/ `both` = 两者 / `none` = 都不显示；桌面模式渲染 display 含 desktop 的**全部**宠物（多开同屏，与浏览器一致），设置页「桌宠配置」编辑即时生效
- 桌面端数据走独立进程管道，不依赖 DSH 的 HTTP 路由，不受 web 访问闸门影响
- 本地调试：`cd dsh-pet && npm run start:desktop -- http://127.0.0.1:3080/dsh-pet-7340/config`（无宿主时自动回落 HTTP 路径）

## 🧍 独立运行（完全不打开 DSH）

连 DSH 都不用开：插件的宿主半边跑在伪 ctx 上，由一个本机 HTTP 服务接管路由（**路由表仍是插件那一份**）。

```sh
npm install -g dsh-pet-to-family        # npm 官方源；dsh plugin add 装进 profile，bin 不在 PATH 上
dsh-pet-standalone            # http://127.0.0.1:3080/dsh-pet-7340/（bin 名保持兼容）（占用则顺延）
dsh-pet-standalone --check    # 只体检
dsh-pet-standalone --port 3100

npm run standalone   # 仓库里；已提交的 lib 可直接跑，改过源码后先 npm run build
```

- **能用**：动画链、点击/拖拽/甩抛、右键菜单、多开、自定义动画与表情包、pet pack。
- **不可用**：余额、碎碎念、对话、系统通知——返回带 `reason` 的结构化失败（见 [`API.md`](API.md)）。
- **配置**：与 DSH 同一份（`$DSH_HOME/dsh-pet/main-config.jsonc` → 包内默认）。
- **只显示 `display` 含 `desktop`/`both` 的实例**；端口默认 3080；`Ctrl+C` 或 `POST /shutdown` 退出。
- **与 DSH 内运行可同时开**，但共用 `%APPDATA%\dsh-pet-electron-helper`，可能互相踩缓存（仅告警）。

## ⚙️ 余额展示（Balance）

按 `eventsRefreshSec.balance`（秒）周期拉取当前服务商的余额/用量数据，每次刷新按档位触发一次余额动画，并在宠物头顶弹出**联想气泡**（随宠物大小等比缩放，10 秒自动消失）：

- **DeepSeek 官方（`deepseek-official`）**：气泡显示账户余额（如 `余额 ¥8.79`）；余额按 ¥20 满额折算成已用百分比，分 6 档播放动画（钱袋满溢 → 金袋叮当 → 钱袋如常 → 数金皱眉 → 袋空如洗 → 分文不剩）
- **OpenCode Zen Go（`opencode-go`）**：气泡显示 5h/周/月 三个额度窗口中最先告急的一个（如 `周额度已用 88%` / `2.5 天重置`），同样按已用百分比分档
- **Command Code（`commandcode`，含 GOAT 等套餐）**：气泡显示 5h/周/月 三个额度窗口中最先告急的一个（与 opencode 同一口径：剩余额度最少者，通常先报 5h）；套餐无窗口限制时只报月度窗
- **暂不支持的服务商**：未登记余额接口的服务商**不播档位动画，改为弹一句文字说明**——第一行「当前服务商暂不支持余额查询」，第二行报出当前 provider id（便于自查）；缺凭证 / 抓取失败同理（原因写在第二行）。自动轮询只在**原因变化**时弹一次（不反复打扰），手动 `/balance` 或桌面右键「查看余额」则每次都会弹
- **按宠物开关**：`pets[i].balanceEnabled`（必填布尔）控制该宠物是否触发余额动画/显示气泡
- **所需凭据**：对应 provider 的 API key（`deepseek-official` → `DEEPSEEK_API_KEY`；`opencode-go` → `OPENCODE_GO_API_KEY`；`commandcode` → `COMMANDCODE_API_KEY`），在 DSH 凭据中配置后启用；未匹配的服务商不触发动画，改为弹上面的文字说明气泡

## ⚙️ 碎碎念与对话

- **碎碎念**：`pets[i].whisperEnabled` 开启后，按 `eventsRefreshSec.whisper`（秒，默认 300）周期自动生成一句——每只宠物独立周期、独立文案；触发时随机抽 `events.whisper` 动画 + 头顶说话气泡（10 秒消失）。默认开启
- **手动触发**：右键菜单「碎碎念」随时来一句——不受 `whisperEnabled` 门控（该字段只关自动周期轮询）
- **对话**：右键菜单「对话」或 `/chat` 命令打开输入框，与宠物聊天——回复走碎碎念同款展示（说话动画 + 气泡）；记忆持久化在 `$DSH_HOME/dsh-pet/memory.json`，浏览器与桌面共享同一份；多宠物时先用 `/pet` 选择对话目标

## 📨 消息接入（通用 Webhook）

### 原生微信 / QQ（推荐，不依赖 dsh-im）

> 本节属于 **0.5.0**；如果插件管理里显示 0.4.1 或更旧，说明还是旧包，请在插件管理里升级到 0.7.0。

插件现在自带微信 iLink 与 QQ 官方机器人连接，不需要安装或启用 dsh-im。入口仍在「桌宠设置 → 消息接入（微信 / QQ）」。

> **不要同时用 dsh-im 和 pet 连接同一个微信 / QQ 机器人**：两边都会收消息，可能出现双回复、登录冲突或平台限流。迁移时先断开 dsh-im 里的对应机器人。
>
> 微信 iLink 不是个人微信的官方开放 API，存在平台条款与账号风险；QQ 请使用官方开放平台的机器人。

| 方式 | 谁连接平台 | 适合 | 需要 token |
| --- | --- | --- | --- |
| 原生微信 / QQ | pet 插件自己 | 微信 iLink、QQ 官方机器人 | 不需要 Webhook token |
| 通用 Webhook | 外部桥接器 | Telegram / Discord / 企业微信 / 公众号等 | 需要 bridge token |

#### 微信

1. 右键宠物 →「桌宠设置」→「消息接入（微信 / QQ）」。
2. 在「微信」下点「添加机器人」；每个机器人有独立 id、登录、模式和状态。
3. 点该卡片的「生成微信二维码」，用手机微信扫描并确认。
4. 选择回复方式：
   - **桌宠回复**：选择「用哪只桌宠回复」，消息会进入 pet 的人格 / 灵魂 / 记忆；
   - **DSH session 回复**：填写或选择要投递的 DSH session ID，消息进入该对话，回复直接发回微信。
5. 白名单可以留空：桌宠模式默认只放行登录的这个微信账号本人；要允许别人，就按「平台 | id | 名字」逐行填写。
6. 点「保存」。

微信凭据只保存在本机 `$DSH_HOME/dsh-pet/im-auth.json`（权限 0600），按机器人 id 隔离，不会回传给浏览器。

#### QQ

1. 在 [QQ 开放平台](https://q.qq.com/) 创建机器人，拿到 AppID 和 AppSecret。
2. 在「QQ」下点「添加机器人」；每张卡片填写自己的 AppID / AppSecret，点「绑定 QQ 机器人」。
3. 选择回复方式：
   - **桌宠回复**：选择回复宠物；
   - **DSH session 回复**：填写或选择固定 session ID；回复由该 session 产生，不弹桌宠气泡。
4. 私聊：把对方稳定 id 写进白名单。群聊：把群 openid 写进白名单，并打开「允许 QQ 群聊」；只有 @ 机器人的群消息才会处理。
5. 点「保存」。

QQ 手动绑定没有“登录账号”概念，所以默认不会自动放行某个人；请使用白名单。

#### 当前范围

- 每个平台可以接入**多个机器人**，每个机器人独立选择「桌宠回复」或「DSH session 回复」。
- session 模式是**一个机器人固定一个 session**；同一个机器人的消息在该 session 里排队。
- 只处理**文本**消息；图片、文件、语音暂不支持。
- 微信只处理私聊；QQ 支持私聊与被 @ 的群聊。
- 桌宠模式下，回复写入独立记忆桶：`im:wechat:<botId>:<id>` / `im:qq:<botId>:<id>`；session 模式直接使用指定 DSH session。
- 连接状态、收到/回复条数、断开按钮都在各自的机器人卡片里。
- 看不到这个分组：确认插件版本是 `0.5.0` 或更新，并完全退出、重新打开 DSH。

### 通用 Webhook（其他平台）

> 这一段是给 Telegram / Discord / 自建桥接器用的；微信 / QQ 请用上面的原生接入，不需要下面的 curl。
>
> **先说清楚：通用 Webhook 不是“在设置里扫码登录微信 / QQ”。**
>
> 它只提供一个本机 HTTP 接口：外部桥接器把消息转成 JSON 发进来，桌宠生成回复，桥接器再把 `reply` 发回平台。
> 通用 Webhook 本身不登录任何平台账号；平台连接由企业微信、公众号、QQ 官方机器人或其他外部桥接器负责。

整条链路是这样：

```text
微信 / QQ / 企业微信 / 其他平台
        ↓  你的桥接器（负责收消息、拿稳定 sender id）
POST http://127.0.0.1:<端口>/dsh-pet-7340/bridge/inbound
        ↓  桌宠用当前对话模型生成
   回复 reply（也可回调 replyUrl）
        ↓  你的桥接器
发回原来的聊天窗口
```

### 一、在设置页打开

右键宠物 →「桌宠设置」→「消息接入（微信 / QQ）」：

1. 打开「启用消息接入」（这是通用 Webhook 的开关；原生平台用上面的「启用此平台」）
2. 「用哪只桌宠回复」选择一只真实存在的宠物
3. 点「生成」创建 token；点「复制」保存好
4. 在「权限白名单」里逐行写允许触发的联系人：

   ```text
   wechat | wxid_abc123 | 张三
   qq | 123456789 | 李四
   ```

   - 第一列是平台标识，可自定义，但入站 JSON 的 `platform` 必须与它一致（大小写会转小写）
   - 第二列是平台内**稳定 id**，不是昵称；只有完全一致才放行
   - 第三列是显示名，可省略
   - 空白名单 = 谁都不回

5. 点「保存」。页面上会显示「入站地址」，通常类似：

   ```text
   http://127.0.0.1:3080/dsh-pet-7340/bridge/inbound
   ```

6. 如果想让回复同时出现在桌宠气泡，再打开「回复同时显示在桌面气泡」；不建议在多人聊天时打开

> **看不到这个分组？** 确认插件版本是 `0.5.0` 或更新，并完全退出、重新打开 DSH。只刷新页面不够，宿主路由要重启才加载。

### 二、先不接微信 / QQ，用 curl 自测

先确认接口、token、白名单都能打通，再去接平台。

1. 在白名单里加一条测试联系人：

   ```text
   test | me | 我
   ```

2. 保存设置。
3. 在终端执行（把 token 和端口换成你自己的）：

```bash
curl -s -X POST http://127.0.0.1:3080/dsh-pet-7340/bridge/inbound \
  -H 'Authorization: Bearer <你的 token>' \
  -H 'Content-Type: application/json' \
  -d '{
    "platform": "test",
    "senderId": "me",
    "senderName": "我",
    "messageId": "test-001",
    "text": "在吗？",
    "isGroup": false
  }'
```

成功时返回类似：

```json
{
  "ok": true,
  "reply": "在呢。",
  "petId": "main",
  "messageId": "test-001",
  "conversation": "bridge:test:me"
}
```

注意：

- `platform`、`senderId` 必须与白名单完全匹配
- `messageId` 每次测试要换一个新的；重复会返回 `duplicate: true`，这是正常的去重
- 生成端选中了表情包时会多一个 `image` 字段
- 默认不写桌面气泡，回复只出现在 HTTP 响应里；这是为了让桥接器自己发回聊天窗口

### 三、接真实平台：你需要一个桥接器

通用 Webhook 不负责登录微信 / QQ。你的桥接器至少要做四件事：

1. 收到平台消息，拿到稳定的发送者 id（不是昵称）
2. 把消息转成下面的 JSON，POST 到「入站地址」
3. 从响应里取 `reply`，发回平台原来的会话
4. 平台重试时复用同一个 `messageId`，让插件去重

桥接器转发时只需要这一段核心请求：

```js
const res = await fetch('http://127.0.0.1:3080/dsh-pet-7340/bridge/inbound', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer ' + process.env.DSH_PET_BRIDGE_TOKEN,
  },
  body: JSON.stringify({
    platform: 'wechat',
    senderId: stableSenderId,
    senderName: displayName,
    messageId: stableMessageId,
    text: messageText,
    isGroup: false,
  }),
});
const data = await res.json();
if (data.ok && data.reply) {
  await sendToPlatform(originalConversation, data.reply);
}
```

平台通道怎么选：

| 通道 | 需要什么 | 说明 |
| --- | --- | --- |
| 企业微信自建应用 | 应用回调 URL + 你自己的桥接器 | 官方通道，适合接收成员消息；群机器人 webhook 通常只能发、不能收 |
| 微信公众号 | 服务器配置 URL / Token + 桥接器 | 官方通道；平台发 XML，桥接器转成上面的 JSON |
| QQ 官方机器人 | 官方机器人 webhook / WebSocket + 桥接器 | 官方通道；不要把个人 QQ 号当机器人 |
| Telegram / Discord / Slack 等 | 对应平台的 bot + 桥接器 | 最容易自测，适合先跑通 |
| 个人微信 / QQ | 插件原生接入（见上）；或第三方协议桥接 | 微信原生走 iLink（非官方 API，有风险）；QQ 原生走官方机器人；通用 Webhook 自身不接管账号 |

如果你还没有桥接器，建议先用上面的 `curl` 把桌宠回复跑通，再找对应平台官方文档接“收消息”回调；本插件只负责最后一步的桌宠回复。

### 四、回复回调（可选，不是必须）

默认情况下，回复直接放在入站 HTTP 响应里，桥接器拿到后自己发回平台即可。

如果你的桥接器是异步处理、入站请求不方便等回复，可以在设置页填「回复回调地址」`replyUrl`。插件生成成功后会异步 POST 到该地址：

```json
{
  "platform": "wechat",
  "senderId": "wxid_abc123",
  "senderName": "张三",
  "messageId": "msg-20261028-001",
  "isGroup": false,
  "petId": "main",
  "conversation": "bridge:wechat:wxid_abc123",
  "reply": "在呢，今天还行，你呢？",
  "image": "可选：表情包名"
}
```

回调同样带 `Authorization: Bearer <token>` 与 `X-DSH-Pet-Bridge-Token`。回调失败只记日志，不影响入站响应。

### 五、群聊

默认**不回复群聊**。要开启：

1. 打开「允许群聊触发」
2. 在入站 JSON 里显式传 `"isGroup": true`
3. 白名单里加群消息对应的稳定 id

建议群聊保持 `writeSay: false`，否则桌宠会在桌面上频繁弹话。

### 六、设置项完整说明

设置页可完成全部配置，也可以手写 `$DSH_HOME/dsh-pet/main-config.jsonc` 的顶层 `bridge`：

| 字段 | 作用 | 默认 / 规则 |
| --- | --- | --- |
| `enabled` | 总开关 | `false`；关闭时入站端点直接拒绝 |
| `petId` | 用哪只桌宠回复 | 空；开启时必须填真实存在的宠物 id |
| `token` | 入站鉴权 token | 空；开启时 16–256 字符，设置页可一键生成 / 复制 |
| `whitelist` | 权限白名单 | `[]`；最多 200 条，每项 `{ platform, id, name? }`，只有 `platform + id` 完全匹配才放行 |
| `replyUrl` | 可选出站回调 | 空；填了之后插件会把回复 POST 过去，留空则只放在入站响应里 |
| `dedupeTtlSec` | 同一 `messageId` 去重窗口 | `600` 秒；`0` = 不去重 |
| `rateLimitPerMin` | 每个发送者每分钟上限 | `20`；`0` = 不限制 |
| `writeSay` | 回复是否同时写桌面气泡 | `false`，避免多人聊天时桌面频繁弹话 |
| `allowGroups` | 是否允许群聊触发 | `false`；群聊消息还必须显式带 `isGroup: true` |

### 七、常见问题

| 现象 | 原因 / 处理 |
| --- | --- |
| 设置页没有「消息接入」 | 装的是旧版（0.4.1 及以前）。升级到 0.7.0，完全重启 DSH |
| HTTP 401 `unauthorized` | token 没带、带错，或设置里重新生成后桥接器还在用旧 token |
| HTTP 403 `not-whitelisted` | `platform + senderId` 与白名单不完全一致；注意 id 不是昵称 |
| HTTP 403 `group-not-allowed` | 群聊消息带了 `isGroup: true`，但设置页没开「允许群聊触发」 |
| HTTP 429 `rate-limited` | 该发送者超过每分钟上限，调大 `rateLimitPerMin` 或等一分钟 |
| HTTP 413 `too-large` | 请求体超过 64 KiB；消息正文上限 2000 字 |
| `bridge-disabled` | 设置页没启用，或启用了但没保存 |
| `duplicate: true` | 同一个 `messageId` 重复到达；桥接器应停止重试 |
| `unknown-pet` | 设置的回复宠物被删了；重新选一只并保存 |
| `provider-missing` / `generate-error` | 当前没有可用对话模型 / 生成失败；检查 DSH 模型与凭据，桥接器可重试 |
| 外面访问不到 | 端点只监听 `127.0.0.1`；外部平台 webhook 需要你自己的内网穿透或反向代理，别把无鉴权端口暴露到公网 |

### 八、安全与隐私

- **token 等于回复权限**：不要发到群里、截图里或公网；怀疑泄露就在设置页重新生成并保存。
- **白名单为空 = 谁都不回**；未授权 / 非白名单 / 群聊未开启 / 重复 `messageId` / 超频都会被拒绝。
- **只监听本机**：外部平台 webhook 需要你自己做内网穿透或反向代理，不要把无鉴权的本机端口直接暴露到公网。
- **记忆隔离**：每个 `platform + senderId` 使用独立的 `bridge:<platform>:<senderId>` 记忆桶；灵魂状态仍按宠物 id 共享。消息正文会写入 `memory.json`，长期记忆会进入 `soul-state.json`。
- **日志**：只记录接入成功 / 回调失败等事件，不记录消息正文与 token。
- **去重窗口是进程内的**：DSH 重启后清空；桥接器仍应使用稳定的 `messageId`。

## 🧠 人格灵魂、长期记忆与关系事件

这一层让桌宠不只是“会背人设”，而是有稳定的内在设定、跨会话的状态和你们之间的关系时间线。没有灵魂卡或关闭 `chatSoulEnabled` 时，提示词与旧版逐字一致，不会偷偷改变原有行为。

### 灵魂卡（`soul`）

灵魂卡是条目级/实例级配置；完整字段见 [`CONFIG.md`](CONFIG.md#人格灵魂色彩soul)。最小示例：

```jsonc
"soul": {
  "identity": { "oneLine": "一只住在桌面角落的蓝毛小女仆" },
  "values": ["陪伴", "被记住"],
  "traits": { "温柔": 78, "嘴硬": 62 },
  "voice": { "tone": "亲近、轻微傲娇", "avoid": ["客服腔", "长篇大论"] },
  "relationshipSeed": { "stage": "初识", "trust": 30, "familiarity": 20 },
  "soulColor": { "primary": "#7aa7ff", "glow": "#a9c4ff" }
}
```

| 字段 | 作用 | 格式 / 默认 |
| --- | --- | --- |
| `identity` | 一句话灵魂 / 种类 / 角色 / 来处 / 自我认知 / 核心矛盾 | 对象，字符串字段 |
| `values` | 在意的东西 | 字符串数组（或 `{ name, note }`） |
| `traits` | 性格倾向，渲染取前 6 个 | 对象：名称 → 0–100 |
| `voice` | 语气 / 节奏 / 句长 / 用词 / 称呼 / 幽默 / 不要项 / 语气示例 | 对象；`avoid` 与 `examples` 为字符串数组 |
| `desires` / `fears` | 渴望 / 害怕 | 字符串数组（或 `{ name, note }`） |
| `boundaries` | 行为边界 | 字符串数组 |
| `relationshipSeed` | 关系起点 | `stage`（陌生/初识/熟悉/亲近/默契/羁绊）+ 信任/亲密/尊重/熟悉/张力（0–100） |
| `temperament` | 基线心情 / 情绪半衰期 / 精力 / 表达欲 | `baselineMood`、`moodHalfLifeHours`（1–168，默认 12）、`energy`、`expressiveness` |
| `soulColor` | 主色 / 辅色 / 光晕 / 阴影 / 描述 / 意象 | `primary` 等颜色只接受 `#rgb` 或 `#rrggbb`；主色缺失时依次回退 `glow` / `secondary`，都没有则用 `#7aa7ff`；主色用于对话窗描边、聚焦光晕与光标 |
| `examples` / `notes` | 额外语气示例 / 自由补充 | 字符串数组 / 字符串 |

- **条目级**：`main-config.jsonc` 顶层 `soul`；pet pack 在 `pet/<名>-config.json` 顶层 `soul`。
- **实例级**：`pets[].soul`，非空对象会**整张取代**所属条目的卡；留空 / `{}` = 跟随条目。
- **显式关闭**：条目级 `soul: {}` 表示这张卡没有内容，按“无灵魂卡”处理；设置页里实例留空则跟随条目。
- **默认卡**：包内 `assets/config.jsonc` 自带一张蓝毛小女仆示例卡；想换角色就改设置页的 JSON 或配置文件。
- **全局开关**：`chatSoulEnabled`（布尔，默认 `true`）。关闭后不读卡、不写 soul-state、不追加任何灵魂段；只影响 AI 提示词，设置页仍能查看卡。
- **语义版本**：卡字段支持 `camelCase` 和 `snake_case`；非法字段丢弃，字符串按上限截断，数值夹回合法区间。

### 动态状态与长期记忆

成功完成并写入记忆的对话会推进 `$DSH_HOME/dsh-pet/soul-state.json`；碎碎念只读状态，不推进关系。状态按宠物 id 分桶，主要字段：

| 字段 | 作用 | 规则 |
| --- | --- | --- |
| `mood` | 当前情绪 / 愉悦 / 唤醒 / 精力 / 原因 | 离线后按 `temperament.moodHalfLifeHours` 回落到基线 |
| `relationship` | 关系阶段 / 信任 / 亲密 / 尊重 / 张力 / 熟悉 / 互动次数 | 阶段由数值推导；信任等长期量不随时间衰减 |
| `lastExchange` | 最近一次对话（用户与宠物各截断约 300 字） | `chatMemoryRounds: 0` 时仍能接上一轮 |
| `memories[]` | 长期记忆：偏好 / 事件 / 约定 / 人物 / 日期 / 其他 | 单条 ≤ 200 字；最多 20 条；提示词取最近 10 条 |
| `relationshipEvents[]` | 关系事件：第一次 / 里程碑 / 约定 / 别扭 / 和好 / 日期 / 礼物 | 单条 ≤ 180 字；最多 30 条；提示词取最近 6 条 |
| `activeGoals[]` | 当前挂心的事 | 最多 5 条 |
| `selfNarrative` | 宠物对自己和这段关系的第一人称理解 | 反思层更新，≤ 600 字 |
| `lastReflectionAt` | 上次成功反思时间 | 用于节流 |
| `lastAnniversaryReminder` | 最近一次纪念日提醒的去重键 | 同一天不重复提醒 |

反思层在成功对话后运行：至少 3 次互动开始，之后每 6 次或间隔 12 小时再整理一次；使用当前对话模型，把最近对话整理成长期记忆、关系事件、挂心和自我叙事。反思失败只写日志，不影响已经返回的回复；它不会直接改关系数值。

### 关系事件与纪念日

- `relationshipEvents` 回答“我们之间发生过什么”，和“主人是什么样的人”的 `memories` 分开。
- 第一次互动、关系阶段变化会自动写入事件；老状态没有事件时，下一次互动会补一条“已经聊过 N 次”的里程碑。
- 设置页可手动添加 / 删除关系事件：类型可选第一次、里程碑、约定、别扭、和好、日期、礼物、其他；日期可选。
- `kind: "date"` 的事件按**每年同月同日**检查：每 30 分钟一拍，开启了自动碎碎念（`whisperEnabled`）的宠物当天会收到一次提醒；模型失败时用文本兜底。提醒只在该宠物开启自动碎碎念时发生。

### 设置入口与操作

- **入口**：右键宠物 →「桌宠设置」→ 选择一个设置分组；桌面端由 Helper 拉起独立 Electron 小窗，普通浏览器用同源 popup。窗口不会打断 DSH 主界面。
- **人格灵魂色彩**：修改全局开关、编辑当前宠物的实例卡 JSON、「预览当前注入」。
- **记忆管理**：「立即整理记忆」「清空长期记忆」「重置关系与情绪」；后两者只改 `soul-state.json`，不删除 `memory.json` 的聊天记录。
- **隐私**：`soul-state.json` 会保存最近对话片段、长期记忆和关系事件；不想保留时删除该文件即可重置连续性（聊天原文仍在 `memory.json`）。
- **事件管理**：关系事件列表可逐条删除；下方表单可添加事件（事件类型 / 内容 / 日期）。
- 完整配置字段、pet pack 覆盖规则与状态文件结构见 [`CONFIG.md`](CONFIG.md)。

### 新增 HTTP 接口

| 接口 | 作用 |
| --- | --- |
| `GET /dsh-pet-7340/soul?pet=` | 读灵魂卡、动态状态、长期记忆、关系事件与实际注入文本（只读） |
| `POST /dsh-pet-7340/soul/reflect?pet=` | 手动整理一次长期记忆 / 关系事件 / 自我叙事 |
| `POST /dsh-pet-7340/soul/reset?pet=` | `{scope:'state'｜'memories'}`：重置灵魂状态，或清空记忆与关系事件 |
| `POST /dsh-pet-7340/soul/event?pet=` | `{text,kind?,at?}`：手动添加关系事件 |
| `POST /dsh-pet-7340/soul/event/remove?pet=` | `{text}`：按正文删除关系事件 |
| `GET /dsh-pet-7340/settings-window` | 独立设置小窗 HTML |
| `GET /dsh-pet-7340/settings-window.js` | 独立设置小窗 React IIFE bundle |
| `POST /dsh-pet-7340/settings-window/open` | `{section?,lang?}`：popup 被桌面外壳拦截时，由宿主拉起独立设置进程 |
| `GET /dsh-pet-7340/move/export` | 下载 `.dshpet` 搬家包 |
| `POST /dsh-pet-7340/move/import` | 导入 `.dshpet` 搬家包；旧文件先备份 |

完整请求/响应契约见 [`openapi.yaml`](openapi.yaml) 与 [`API.md`](API.md)。

## 📦 搬家（一键打包 / 入住）

设置页切到「搬家」分组：

- **打包搬家啦**：下载一个 `dsh-pet-move-<时间>.dshpet` 文件。
- **我住进来喽**：在新环境选择这个文件导入；导入前会把当前旧文件备份到 `$DSH_HOME/dsh-pet/move-backup-<时间>/`。

搬家包包含：

| 内容 | 作用 |
| --- | --- |
| `main-config.jsonc` / `main-config.json` | 宠物列表、人设、动画池与播放权重、物理/字体/模型等全部偏好 |
| `memory.json` | 完整聊天记录（`chatMemoryRounds` 只影响进上下文，不影响存档） |
| `soul-state.json` | 情绪、关系、上次对话、长期记忆、关系事件、挂心、自我叙事、纪念日去重 |
| `pet/*.json` / `pet/*.jsonc` | pet pack 的配置文件（如果有） |

不包含：

- `standalone-ai.json`（可能含 API key，避免搬家包泄露凭证）
- `im-auth.json` / `im-state.json`（微信 / QQ 登录凭据与游标；新环境重新扫码或绑定）
- `main-animation/`、`pet/*-animation/`、表情包图片等自定义媒体素材
- 日志、Electron 缓存、插件本体

因此，「记忆与偏好」可以一键搬家；如果你还自定义了动画/表情包素材，请把对应素材目录一起复制到新电脑的 `$DSH_HOME/dsh-pet/` 下。

搬家包是一个带版本号的 JSON 文件（不是 zip），字段如下：

| 字段 | 作用 | 规则 |
| --- | --- | --- |
| `format` | 包类型 | 固定 `dsh-pet-move` |
| `version` | 包版本 | 当前固定 `1` |
| `exportedAt` | 导出时间 | ISO 时间 |
| `appVersion` | 导出时的插件版本 | 只作展示 |
| `files` | 文件名 → 文本内容 | 只允许 `main-config.jsonc`、`main-config.json`、`memory.json`、`soul-state.json`、`pet/<名称>.json` / `.jsonc` |

导入接口是 `POST /dsh-pet-7340/move/import`，请求体就是上面的 JSON；请求体上限 16 MB，单个文件上限 8 MB。导入会先备份旧文件到 `$DSH_HOME/dsh-pet/move-backup-<时间>/`，再覆盖白名单内的文件；`memory.json` / `soul-state.json` 必须是合法 JSON 对象，未知文件名或路径会被拒绝。

## ⚙️ 工作状态联动（Work Status）

`pets[i].workStatusEnabled` 开启后，宠物跟随 DSH 会话活动切「思考 / 工作 / 整理 / 等待 / 成功 / 出错」六档动画 + 头顶气泡：非终态动画循环播、气泡常驻；成功 / 出错播一遍、气泡 10 秒自动收起。

- **档位动画**：`animations.events.workStatus` 数组，索引即档位（勿在中间插入新档，只可追加末尾）
- **气泡文案**：`workStatusTexts` 每档可配多句随机，任务详情（todo）优先
- **档位候选数组**：任意档位槽位可写 `string | string[]`——数组 = 档内随机抽 1，循环播放自动轮换、避免连播同一段（余额 / 碎碎念档位同样适用）

## ⚙️ 配置（大小 / 位置 / 多开）

设置页可改大小、位置、边距、显示位置、余额开关、多开与物理参数，也可以编辑人格灵魂卡、查看/清空长期记忆与关系事件；配置文件则可以任意自由配置（动画池、播放权重、事件动画、刷新周期……）。

三种配置途径与「pet pack 额外宠物种类」的完整说明见 **[CONFIG.md](CONFIG.md)**。

## 运行效果

宠物实际运行在 DSH Web 界面中的样子：

<p>
  <img src="assets/screenshots/dsh-pet-running-1.png" width="380" alt="dsh-pet 运行效果 1" title="dsh-pet 运行效果 1">
  <img src="assets/screenshots/dsh-pet-running-2.png" width="380" alt="dsh-pet 运行效果 2" title="dsh-pet 运行效果 2">
  <img src="assets/screenshots/dsh-pet-running-3.png" width="380" alt="dsh-pet 运行效果 3" title="dsh-pet 运行效果 3">
  <img src="assets/screenshots/dsh-pet-running-4.png" width="380" alt="dsh-pet 运行效果 4" title="dsh-pet 运行效果 4">
  <img src="assets/screenshots/dsh-pet-running-5.png" width="380" alt="dsh-pet 运行效果 5" title="dsh-pet 运行效果 5">
  <img src="assets/screenshots/dsh-pet-running-6.png" width="380" alt="dsh-pet 运行效果 6" title="dsh-pet 运行效果 6">
  <img src="assets/screenshots/dsh-pet-running-7.png" width="380" alt="dsh-pet 运行效果 7" title="dsh-pet 运行效果 7">
  <img src="assets/screenshots/dsh-pet-running-8.png" width="380" alt="dsh-pet 运行效果 8" title="dsh-pet 运行效果 8">
</p>

## 效果预览

全部动画（640×360，插件实际播放用的资源）——GIF 预览存放于仓库 `dsh-pet/assets/preview/`（raw 直链渲染，文件名采用拼音便于跨平台）；完整透明视频见插件包 `dsh-pet/assets/webm/`（VP9-alpha，唯一发布格式）：

**待机 / 转向**

<p>
  <img src="dsh-pet/assets/preview/daiji-huxi-xiuxian.gif" width="160" alt="待机呼吸休闲" title="待机呼吸休闲">
  <img src="dsh-pet/assets/preview/dongzhangxiwang.gif" width="160" alt="东张西望" title="东张西望">
</p>

**移动**

<p>
  <img src="dsh-pet/assets/preview/pangxie-zoulu.gif" width="160" alt="螃蟹走路" title="螃蟹走路">
  <img src="dsh-pet/assets/preview/yuandi-piaofu-tabu.gif" width="160" alt="原地漂浮踏步" title="原地漂浮踏步">
  <img src="dsh-pet/assets/preview/yuandi-zuozhuan-benpao.gif" width="160" alt="原地左转奔跑" title="原地左转奔跑">
</p>

**小动作**

<p>
  <img src="dsh-pet/assets/preview/youxian-hengga.gif" width="160" alt="悠闲哼歌" title="悠闲哼歌">
  <img src="dsh-pet/assets/preview/chaoda-shenlanyao.gif" width="160" alt="超大伸懒腰" title="超大伸懒腰">
  <img src="dsh-pet/assets/preview/yuandi-qiaoji-zhuomian-hudong.gif" width="160" alt="原地敲击桌面互动" title="原地敲击桌面互动">
  <img src="dsh-pet/assets/preview/yuandi-zhongli-xiadun-yasuo.gif" width="160" alt="原地重力下蹲压缩" title="原地重力下蹲压缩">
  <img src="dsh-pet/assets/preview/haqian-liantian.gif" width="160" alt="哈欠连天" title="哈欠连天">
  <img src="dsh-pet/assets/preview/yuandi-xiaoqi-chenmian.gif" width="160" alt="原地小憩沉眠" title="原地小憩沉眠">
  <img src="dsh-pet/assets/preview/nvpu-quxi-liyi.gif" width="160" alt="女仆屈膝礼仪" title="女仆屈膝礼仪">
  <img src="dsh-pet/assets/preview/beixiayitiao-zhamao.gif" width="160" alt="被吓一跳" title="被吓一跳">
  <img src="dsh-pet/assets/preview/xiaofudu-yuandi-360du-xuanzhuan-zhanshi.gif" width="160" alt="小幅度原地360度旋转展示" title="小幅度原地360度旋转展示">
  <img src="dsh-pet/assets/preview/touchi-lingshi-bei-zhuazhu.gif" width="160" alt="偷吃零食被抓住" title="偷吃零食被抓住">
  <img src="dsh-pet/assets/preview/yong-jingyu-weiba-paidadi.gif" width="160" alt="用鲸鱼尾巴拍打地面" title="用鲸鱼尾巴拍打地面">
  <img src="dsh-pet/assets/preview/da-keshui-bei-jingxing.gif" width="160" alt="打瞌睡被惊醒" title="打瞌睡被惊醒">
  <img src="dsh-pet/assets/preview/zhao-jingzi.gif" width="160" alt="照镜子" title="照镜子">
  <img src="dsh-pet/assets/preview/zhengti-huanzhuang-shise.gif" width="160" alt="整体换装试色" title="整体换装试色">
  <img src="dsh-pet/assets/preview/qingkuai-jilu.gif" width="160" alt="轻快记录" title="轻快记录">
  <img src="dsh-pet/assets/preview/xie-daima.gif" width="160" alt="写代码" title="写代码">
  <img src="dsh-pet/assets/preview/yaoshan-naliang.gif" width="160" alt="摇扇纳凉" title="摇扇纳凉">
  <img src="dsh-pet/assets/preview/chenjian-shuaya.gif" width="160" alt="晨间刷牙" title="晨间刷牙">
</p>

**玩耍**

<p>
  <img src="dsh-pet/assets/preview/yuandi-zhuanxin-wan-mofang.gif" width="160" alt="原地专心玩魔方" title="原地专心玩魔方">
  <img src="dsh-pet/assets/preview/yuandi-dunxia-wan-wanju-qiche.gif" width="160" alt="原地蹲下玩玩具汽车" title="原地蹲下玩玩具汽车">
  <img src="dsh-pet/assets/preview/jingyu-tu-paopao-texiao.gif" width="160" alt="鲸鱼吐泡泡特效" title="鲸鱼吐泡泡特效">
  <img src="dsh-pet/assets/preview/yuandi-tiaoyue-zhuasui-touding-wupin.gif" width="160" alt="原地跳跃抓碎头顶物品" title="原地跳跃抓碎头顶物品">
  <img src="dsh-pet/assets/preview/wan-youxi-qijibaituai.gif" width="160" alt="玩游戏气急败坏" title="玩游戏气急败坏">
  <img src="dsh-pet/assets/preview/wan-shuiqiang.gif" width="160" alt="玩水枪" title="玩水枪">
  <img src="dsh-pet/assets/preview/xiaotiqin-yanzou.gif" width="160" alt="小提琴演奏" title="小提琴演奏">
  <img src="dsh-pet/assets/preview/lanjing-xianshi.gif" width="160" alt="蓝鲸现世" title="蓝鲸现世">
  <img src="dsh-pet/assets/preview/youya-nvpuwu.gif" width="160" alt="优雅女仆舞" title="优雅女仆舞">
  <img src="dsh-pet/assets/preview/qingkuai-yaobaiwu.gif" width="160" alt="轻快摇摆舞" title="轻快摇摆舞">
  <img src="dsh-pet/assets/preview/keai-zhaiwu.gif" width="160" alt="可爱宅舞" title="可爱宅舞">
  <img src="dsh-pet/assets/preview/chui-qiqiu.gif" width="160" alt="吹气球" title="吹气球">
  <img src="dsh-pet/assets/preview/dongwu-huanrao.gif" width="160" alt="动物环绕" title="动物环绕">
  <img src="dsh-pet/assets/preview/fang-fengzheng.gif" width="160" alt="放风筝" title="放风筝">
  <img src="dsh-pet/assets/preview/chai-liwu.gif" width="160" alt="拆礼物" title="拆礼物">
  <img src="dsh-pet/assets/preview/bian-gezi.gif" width="160" alt="变鸽子" title="变鸽子">
  <img src="dsh-pet/assets/preview/puke-moshu.gif" width="160" alt="扑克魔术" title="扑克魔术">
  <img src="dsh-pet/assets/preview/chou-tuoluo.gif" width="160" alt="抽陀螺" title="抽陀螺">
  <img src="dsh-pet/assets/preview/chui-dizi.gif" width="160" alt="吹笛子" title="吹笛子">
  <img src="dsh-pet/assets/preview/hudie-mifeng-huanrao-touding-kaihua.gif" width="160" alt="蝴蝶蜜蜂环绕头顶开花" title="蝴蝶蜜蜂环绕头顶开花">
  <img src="dsh-pet/assets/preview/lu-mao.gif" width="160" alt="撸猫" title="撸猫">
  <img src="dsh-pet/assets/preview/pingkong-shenghua.gif" width="160" alt="凭空生花" title="凭空生花">
  <img src="dsh-pet/assets/preview/qi-muma.gif" width="160" alt="骑木马" title="骑木马">
  <img src="dsh-pet/assets/preview/sanqiu-paojie.gif" width="160" alt="三球抛接" title="三球抛接">
  <img src="dsh-pet/assets/preview/ti-jianzi.gif" width="160" alt="踢毽子" title="踢毽子">
  <img src="dsh-pet/assets/preview/xiawuziqi.gif" width="160" alt="下五子棋" title="下五子棋">
  <img src="dsh-pet/assets/preview/dangqiuqian.gif" width="160" alt="荡秋千" title="荡秋千">
</p>

**吃什么**

<p>
  <img src="dsh-pet/assets/preview/chi-baifan.gif" width="160" alt="吃白饭" title="吃白饭">
  <img src="dsh-pet/assets/preview/dakou-chi-lingshi.gif" width="160" alt="大口吃零食" title="大口吃零食">
  <img src="dsh-pet/assets/preview/chi-token.gif" width="160" alt="吃Token" title="吃Token">
  <img src="dsh-pet/assets/preview/chi-zaocan.gif" width="160" alt="吃早餐" title="吃早餐">
  <img src="dsh-pet/assets/preview/chi-wucan.gif" width="160" alt="吃午餐" title="吃午餐">
  <img src="dsh-pet/assets/preview/chi-wancan.gif" width="160" alt="吃晚餐" title="吃晚餐">
  <img src="dsh-pet/assets/preview/chi-bingqilin-ronghua.gif" width="160" alt="吃冰淇淋融化" title="吃冰淇淋融化">
  <img src="dsh-pet/assets/preview/chi-dazhaxie.gif" width="160" alt="吃大闸蟹" title="吃大闸蟹">
  <img src="dsh-pet/assets/preview/chi-tanghulu.gif" width="160" alt="吃糖葫芦" title="吃糖葫芦">
  <img src="dsh-pet/assets/preview/chi-changshoumian.gif" width="160" alt="吃长寿面" title="吃长寿面">
  <img src="dsh-pet/assets/preview/chi-xigua.gif" width="160" alt="吃西瓜" title="吃西瓜">
  <img src="dsh-pet/assets/preview/shuan-huoguo.gif" width="160" alt="涮火锅" title="涮火锅">
</p>

**时节**

<p>
  <img src="dsh-pet/assets/preview/beiluoye-yanmo.gif" width="160" alt="被落叶淹没" title="被落叶淹没">
  <img src="dsh-pet/assets/preview/zhongqiu-shangyue-chi-yuebing.gif" width="160" alt="中秋赏月吃月饼" title="中秋赏月吃月饼">
  <img src="dsh-pet/assets/preview/duixueren.gif" width="160" alt="堆雪人" title="堆雪人">
  <img src="dsh-pet/assets/preview/fang-yanhua.gif" width="160" alt="放烟花" title="放烟花">
  <img src="dsh-pet/assets/preview/chi-zongzi.gif" width="160" alt="吃粽子" title="吃粽子">
  <img src="dsh-pet/assets/preview/chi-niangao.gif" width="160" alt="吃年糕" title="吃年糕">
  <img src="dsh-pet/assets/preview/chi-qingtuan.gif" width="160" alt="吃青团" title="吃青团">
  <img src="dsh-pet/assets/preview/chi-labazhou.gif" width="160" alt="吃腊八粥" title="吃腊八粥">
  <img src="dsh-pet/assets/preview/chi-chongyanggao.gif" width="160" alt="吃重阳糕" title="吃重阳糕">
  <img src="dsh-pet/assets/preview/shou-hongbao.gif" width="160" alt="收红包" title="收红包">
  <img src="dsh-pet/assets/preview/xie-fuzi.gif" width="160" alt="写福字" title="写福字">
  <img src="dsh-pet/assets/preview/chuanzhenqiqiao.gif" width="160" alt="穿针乞巧" title="穿针乞巧">
  <img src="dsh-pet/assets/preview/wu-shitou.gif" width="160" alt="舞狮头" title="舞狮头">
  <img src="dsh-pet/assets/preview/taotang-nanguadeng.gif" width="160" alt="讨糖南瓜灯" title="讨糖南瓜灯">
  <img src="dsh-pet/assets/preview/cha-zhuyu-shangju.gif" width="160" alt="插茱萸赏菊" title="插茱萸赏菊">
  <img src="dsh-pet/assets/preview/fanghedeng.gif" width="160" alt="放河灯" title="放河灯">
  <img src="dsh-pet/assets/preview/menghua-xiaoyouling.gif" width="160" alt="萌化小幽灵" title="萌化小幽灵">
  <img src="dsh-pet/assets/preview/zhuangdian-shengdanshu.gif" width="160" alt="装点圣诞树" title="装点圣诞树">
  <img src="dsh-pet/assets/preview/fang-kongmingdeng.gif" width="160" alt="放孔明灯" title="放孔明灯">
  <img src="dsh-pet/assets/preview/chitangyuan.gif" width="160" alt="吃汤圆" title="吃汤圆">
  <img src="dsh-pet/assets/preview/chijiaozi.gif" width="160" alt="吃饺子" title="吃饺子">
</p>

**文字**

<p>
  <img src="dsh-pet/assets/preview/shia-chishenme.gif" width="160" alt="是啊，吃什么" title="是啊，吃什么">
  <img src="dsh-pet/assets/preview/shendu-sikao-suisuinian.gif" width="160" alt="深度思考碎碎念" title="深度思考碎碎念">
</p>

**点击回应**

<p>
  <img src="dsh-pet/assets/preview/dianji-huiying-kaixin-yuedong.gif" width="160" alt="点击回应-开心跃动" title="点击回应-开心跃动">
  <img src="dsh-pet/assets/preview/dianji-huiying-haixiu-jingya.gif" width="160" alt="点击回应-害羞惊讶" title="点击回应-害羞惊讶">
  <img src="dsh-pet/assets/preview/dianji-huiying-aojiao-shengqi-ceshen-zhanshi.gif" width="160" alt="点击回应-傲娇生气" title="点击回应-傲娇生气">
  <img src="dsh-pet/assets/preview/dianji-huiying-naoyang-gegexiao.gif" width="160" alt="点击回应-挠痒咯咯笑" title="点击回应-挠痒咯咯笑">
  <img src="dsh-pet/assets/preview/dianji-huiying-yuanqi-huishou.gif" width="160" alt="点击回应-元气挥手" title="点击回应-元气挥手">
</p>

**拖拽**

<p>
  <img src="dsh-pet/assets/preview/beishubiao-tuozhuai-xuankong-fankui.gif" width="160" alt="被鼠标拖拽悬空反馈" title="被鼠标拖拽悬空反馈">
</p>

**余额事件**（按余额已用百分比分档，满格 → 告急 → 耗尽）

<p>
  <img src="dsh-pet/assets/preview/qian-dai-man-yi.gif" width="160" alt="余额-钱袋满溢" title="余额-钱袋满溢">
  <img src="dsh-pet/assets/preview/jin-dai-ding-dang.gif" width="160" alt="余额-金袋叮当" title="余额-金袋叮当">
  <img src="dsh-pet/assets/preview/qian-dai-ru-chang.gif" width="160" alt="余额-钱袋如常" title="余额-钱袋如常">
  <img src="dsh-pet/assets/preview/shu-jin-zhou-mei.gif" width="160" alt="余额-数金皱眉" title="余额-数金皱眉">
  <img src="dsh-pet/assets/preview/dai-kong-ru-xi.gif" width="160" alt="余额-袋空如洗" title="余额-袋空如洗">
  <img src="dsh-pet/assets/preview/fen-wen-bu-sheng.gif" width="160" alt="余额-分文不剩" title="余额-分文不剩">
</p>

**碎碎念说话动画**（碎碎念 / 对话回复触发，随机抽 1 段）

<p>
  <img src="dsh-pet/assets/preview/suisuinian-cazhuo-suisuinian.gif" width="160" alt="碎碎念-擦桌碎碎念" title="碎碎念-擦桌碎碎念">
  <img src="dsh-pet/assets/preview/suisuinian-fadai-suisuinian.gif" width="160" alt="碎碎念-发呆碎碎念" title="碎碎念-发呆碎碎念">
  <img src="dsh-pet/assets/preview/suisuinian-duiping-suisuinian.gif" width="160" alt="碎碎念-对屏碎碎念" title="碎碎念-对屏碎碎念">
</p>

**工作状态动画**（跟随 DSH 会话事件，六档：思考 / 工作 / 整理 / 等待 / 成功 / 出错）

<p>
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-sikao-maopao.gif" width="160" alt="工作状态-思考冒泡" title="工作状态-思考冒泡">
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-manglu-dianan.gif" width="160" alt="工作状态-忙碌点按" title="工作状态-忙碌点按">
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-qingdian-guidang.gif" width="160" alt="工作状态-清点归档" title="工作状态-清点归档">
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-yuandi-duobu-zhangwang.gif" width="160" alt="工作状态-原地踱步张望" title="工作状态-原地踱步张望">
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-queyue-qingzhu.gif" width="160" alt="工作状态-雀跃庆祝" title="工作状态-雀跃庆祝">
  <img src="dsh-pet/assets/preview/gongzuozhuangtai-chuitou-tanqi-maohan.gif" width="160" alt="工作状态-垂头叹气冒汗" title="工作状态-垂头叹气冒汗">
</p>

> 注：动画为透明背景；GIF 预览中透明部分显示为页面底色，实际 webm 播放为透明。

## 从零生成你自己的宠物

AI 提示词 → 绿幕视频 → 透明动画 → 插件，换角色、换动作、换风格，全流程可复现。

完整步骤见 **[MAKE-YOUR-OWN-PET.md](MAKE-YOUR-OWN-PET.md)**（提示词配方、素材链、Safari 兼容、发布）。

## 项目结构

只列代码与发布相关目录；素材链的 video / scripts / step / pr 见 [MAKE-YOUR-OWN-PET.md](MAKE-YOUR-OWN-PET.md) 的 ② 章节（gitignore 的本地目录不列）：

```
├── README.md  MAKE-YOUR-OWN-PET.md  CONFIG.md  API.md  CORDIS.md  openapi.yaml   # 说明 / 宠物制作指南 / 配置 / HTTP 接口 / Cordis 服务 / OpenAPI 规范
├── prompts/           # ① 动画生成提示词配方（绿幕规范 + 按秒分解）
├── assets/            # 仓库展示用截图
├── tools/             # 开发工具：API 调试页、cordis-probe mock 服务商、DPI 探针
├── .github/workflows/ # CI：Safari/HEVC 转码流水线（macOS runner，手动触发 → 发布 assets-mov Release）
├── dsh-pet/           # ③ 插件（可独立 npm 发布）
│   ├── src/
│   │   ├── host/       # 宿主半侧：配置 / 路由 / 余额 / 工作状态 / 灵魂反思
│   │   ├── client/     # 浏览器半侧：宠物渲染 / 动画链 / 设置页
│   │   ├── settings-window/ # 独立设置小窗入口（React IIFE）
│   │   ├── shared/     # 双端共用纯逻辑（物理 / 菜单 / 取数）
│   │   └── standalone/ # 独立模式 CLI（不依赖 DSH 直接跑桌宠）
│   ├── lib/            # 构建产物（已入库，支持 GitHub 直装；改源码后重建）
│   ├── runtime/        # 桌面模式运行壳（Electron 透明窗 / 独立设置进程）
│   ├── assets/         # webm 动画 / preview GIF / 字体 / 图标 / config.jsonc 默认配置
│   └── scripts/        # 构建、发布与开发脚本
└── LICENSE             # MIT
```

## 💬 反馈与发版节奏

欢迎提 [issue](https://github.com/zi-O1/dsh-pet-to-family/issues) 与 PR——bug、体验问题随时反馈。**新功能请先开 issue** 说明使用场景，由维护者判断是否实现、以及放在插件本体还是作为第三方扩展，不要在确认前直接提交实现 PR。与桌宠本身关系不大、或实现特别复杂的功能，通常不会进本体，而是通过现有接口由第三方扩展实现。动手前也请先翻一眼 [提交记录](https://github.com/zi-O1/dsh-pet-to-family/commits/main)，确认不是已经修掉的同款问题（有些问题可能已经在 `main` 上修好了，只是还没发版）。

- **小修不单独发版**：不影响使用的小 bug 与优化会**累计**到下一个版本一起发，避免版本更迭过于频繁。所以「`main` 上已经修了」不等于「你装的这版已经包含」——`latest` 没更新时，以 `main` 的提交记录为准。
- **想立刻用上未发布的修复**：按上面的「从源码安装」把插件指向本地仓库即可；注意**宿主半侧**的代码改动要**重开 DSH** 才生效（浏览器半侧刷新页面即可）。
- **报 bug 时请带上**：插件版本、`dsh` 版本、操作系统、复现步骤（有日志或截图更好）。

## 许可

- 代码：MIT
- 素材（动画/提示词/源视频）：允许开源使用，**禁止商用**
- **二次创作（二创）约定**：基于本项目的衍生 / 改版 / 换皮作品，在 **GitHub 仓库、产品官网等公开渠道**上须附上原作者 GitHub 地址：<https://github.com/PC2005-cloud/dsh-pet>
- **形象出处**：宠物形象为社区二创的 DeepSeek「大肥鱼」（鲸鱼娘），**非 DeepSeek 官方形象**；原型「溟月」出自 B 站 [@上善无形](https://space.bilibili.com/4456176)，DeepSeek 版（女仆鲸鱼娘）设计出自 B 站 [@ZipZipPipe](https://space.bilibili.com/4168597)
- **形象授权**：[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans)（署名 · 非商业 · 相同方式共享），[声明原文](https://www.bilibili.com/opus/1247156596114456581)：「大肥鱼是遵守CC BY-NC-SA 4.0协议的形象，不可以以任何形式商业化。若您非常喜爱该形象，希望其拥有实体，您可以自行定制。」
