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

参数、字段、默认值和操作说明见本仓库根目录的 **[README（人格灵魂、长期记忆与关系事件）](https://github.com/zi-O1/dsh-pet-to-family#-人格灵魂长期记忆与关系事件)**、**[消息接入（微信 / QQ 与通用 Webhook）](https://github.com/zi-O1/dsh-pet-to-family#-消息接入通用-webhook)** 与 **[CONFIG.md](https://github.com/zi-O1/dsh-pet-to-family/blob/main/CONFIG.md)**。

安装：npm 包名 `dsh-pet-to-family`（当前 npm 正式版 `0.4.1`；原生微信 / QQ 接入随 `0.5.0` 发布，未发布前请从仓库或本地安装包升级，安装源选官方源 `https://registry.npmjs.org/`）；GitHub 地址 `https://github.com/zi-O1/dsh-pet-to-family`（根兼容包）或 `https://github.com/zi-O1/dsh-pet-to-family#path:/dsh-pet`（插件子目录）。

本仓库：**<https://github.com/zi-O1/dsh-pet-to-family>**

基础项目与完整素材链：**<https://github.com/PC2005-cloud/dsh-pet>**

许可：代码 MIT；素材禁止商用；二创在公开渠道须署名（同上链接）。
