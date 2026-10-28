# dsh-pet-to-family 🐾

一只住在 DeepSeek Harness 里的桌面宠物，一百余个透明动画，可多开、能上桌面。

本仓库在基础桌宠之上新增了：

- **人格灵魂卡**：身份、在意的东西、说话方式、渴望、害怕、边界、关系起点与灵魂色
- **动态状态**：情绪、关系阶段、最近对话，持久化在 `soul-state.json`
- **长期记忆与反思**：成功对话后定期整理偏好、事件、约定与自我叙事
- **关系事件时间线**：第一次、里程碑、约定、别扭、和好、日期、礼物
- **纪念日提醒**：`kind: "date"` 的关系事件按每年同月同日主动提醒
- **独立设置小窗**：右键宠物 →「桌宠设置」，不打开 DSH 主设置页；支持手风琴、灵魂卡 JSON、记忆/事件管理与预览
- **一键搬家**：「打包搬家啦」导出配置/记忆/灵魂状态/关系事件，「我住进来喽」在新环境导入恢复
- **微信 / QQ 原生接入**：插件自己连接微信 iLink（扫码）与 QQ 官方机器人（AppID + AppSecret）；每平台可多机器人，每个机器人可选「桌宠回复」或「固定 DSH session 回复」，不依赖 dsh-im
- **通用 Webhook**：其他平台可用本机 HTTP 入口接入，token 鉴权、白名单、去重与限流默认开启

## 微信 / QQ 原生接入（0.5.0）

插件自己连接微信 iLink 与 QQ 官方机器人，不依赖 dsh-im。设置入口：右键宠物 →「桌宠设置」→「消息接入（微信 / QQ）」。

- **每平台多个机器人**：微信、QQ 各自维护机器人列表，每个机器人独立登录、白名单、模式和状态。
- **两种回复方式**：
  - `pet`：由桌宠回复，使用人格 / 灵魂 / 长期记忆，独立记忆桶 `im:<平台>:<botId>:<发送者>`；
  - `session`：投递到固定的 DSH 对话 session，由该 session 回复，不弹桌宠气泡。
- **微信**：点「添加机器人」→「生成二维码」→ 手机扫码 → 选模式 / 白名单 → 保存。
- **QQ**：在 QQ 开放平台创建机器人 → 填写 AppID / AppSecret → 绑定 → 选模式 / 白名单 → 保存。
- **一个机器人固定一个 session**；同一机器人的消息在 session 内排队。
- 只处理文本；微信只处理私聊，QQ 支持私聊与被 @ 的群聊。
- 凭据只保存在 `$DSH_HOME/dsh-pet/im-auth.json`（0600），不会回传浏览器。

> 不要同时用 dsh-im 和 pet 连接同一个微信 / QQ 机器人，否则可能双回复或登录冲突。
> 微信 iLink 不是个人微信官方开放 API，存在平台条款与账号风险；QQ 请使用官方开放平台机器人。

参数、字段、默认值和操作说明见本仓库根目录的 **[README（人格灵魂、长期记忆与关系事件）](https://github.com/zi-O1/dsh-pet-to-family#-人格灵魂长期记忆与关系事件)**、**[消息接入（微信 / QQ 与通用 Webhook）](https://github.com/zi-O1/dsh-pet-to-family#-消息接入通用-webhook)** 与 **[CONFIG.md](https://github.com/zi-O1/dsh-pet-to-family/blob/main/CONFIG.md)**。

安装：npm 包名 `dsh-pet-to-family`（当前 npm 正式版 `0.5.0`，包含原生微信 / QQ 接入、多机器人和 DSH session 模式；安装源选官方源 `https://registry.npmjs.org/`）；GitHub 地址 `https://github.com/zi-O1/dsh-pet-to-family`（根兼容包）或 `https://github.com/zi-O1/dsh-pet-to-family#path:/dsh-pet`（插件子目录）。

本仓库：**<https://github.com/zi-O1/dsh-pet-to-family>**

基础项目与完整素材链：**<https://github.com/PC2005-cloud/dsh-pet>**

许可：代码 MIT；素材禁止商用；二创在公开渠道须署名（同上链接）。
