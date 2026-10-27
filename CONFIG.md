# 配置（大小 / 位置 / 多开）

> 返回 [README](README.md)

桌宠的大小、位置、多开均可配置，两条途径：

> 💡 **两条途径只是编辑入口不同，最终都是同一份用户配置**——配置能力远不止设置页那几个选项：设置页可改大小/位置/边距/显示位置/余额开关/多开，但**手动编写配置文件可以任意自由配置**（动画池、播放权重、事件动画、刷新周期……），只要**格式与包内默认配置 `config.jsonc` 一致**即可，用户配置会**整体覆盖**对应字段的默认值。

## 方式一：设置页（推荐）

DSH 设置 → 「桌宠配置」：

- **大小**：宽度 px（高度自动 = 宽度 × 9/16）
- **位置**：四角（corner）＋ 水平/垂直边距（marginX / marginY）
- **显示位置**（display）：web=仅浏览器 / desktop=仅桌面 / both=两者都显示 / none=都不显示
- **余额功能**：勾选后该宠物才会触发余额动画并显示余额气泡（服务商未登记余额接口时改为弹文字说明气泡）
- **多开**：添加/删除宠物，每只宠物独立 id、大小、位置
- **物理参数**：拖拽抛掷手感（重力 / 弹性 / 地面摩擦 / 总力度 / 顶部反弹 / 宠物互撞）也能在设置页图形化改，不用去手改配置文件
- **AI 模型**：碎碎念与对话可以**各自指定模型**——设置页「AI 模型」每项一个下拉框（与 DSH 对话框右下角的模型选择器同款：搜索框 + 按服务商分组的清单，选项同源）；选「跟随当前对话」= 用当前对话的模型，指定了但调用失败会自动回落到当前对话的模型重试一次
- 点「保存」**即时生效**（无需刷新）；「同步」把包内 `config.jsonc` 的**原文**（含注释与全部高级字段）整份写入用户配置——既回到默认，又留下一份可直接编辑的完整配置

## 方式二：config.jsonc（单一来源）

插件包内 `dsh-pet/assets/config.jsonc` 的 `pets` 数组定义**默认宠物**：

```jsonc
"pets": [
  { "id": "main", "size": 462, "balanceEnabled": true, "display": "both", "position": { "corner": "top-right", "marginX": 24, "marginY": 100 } }
]
```

- 每只宠物：`id`（标识）／`size`（宽度 px）／`balanceEnabled`（是否启用余额功能，必填布尔）／`display`（web/desktop/both/none，必填，见上）／`position`（corner 四角之一 + marginX/marginY 边距）
- 余额刷新周期：`eventsRefreshSec.balance`（秒）——余额数据刷新与余额动画触发的间隔，启动时立即触发一次，之后按此周期循环（默认 1800）
- 设置页的修改保存到用户层 `$DSH_HOME/dsh-pet/main-config.jsonc`（**完整宠物列表**，覆盖包内默认）；「同步」把包内 `config.jsonc` 原文整份写入该文件（等价于回落默认，但文件保留下来、可直接编辑）

## 方式三：手动编辑配置文件（高级，任意自由配置）

用户层配置文件位于 `$DSH_HOME/dsh-pet/main-config.jsonc`。**它和包内默认配置是同一套格式**——想改什么直接照着 `assets/config.jsonc` 的结构写即可，写错的字段/缺失的字段回落默认，无需（也无法）写完整份。设置页「同步」可直接生成这份完整文件（原文复制包内 `config.jsonc`，注释齐全）：

| 字段                   | 作用                                                                                    | 格式与默认一致即可         |
| ---------------------- | --------------------------------------------------------------------------------------- | -------------------------- |
| `pets`                 | 宠物列表（大小/位置/多开/余额开关）                                                     | 数组，每项同 `pets[]` 结构 |
| `animations`           | **动画池**：idle / turn / drag / clicks / moves / categories / events（余额等事件动画） | 同 `animations` 结构       |
| `animationWeights`     | 动画链播放权重（idle / turn / move）                                                    | 同 `animationWeights` 结构 |
| `eventsRefreshSec`     | 事件刷新周期（秒）                                                                      | 同 `eventsRefreshSec` 结构 |
| `notificationsEnabled` | 系统通知总开关（布尔）                                                                  | 同 `notificationsEnabled`  |
| `soul`                 | 条目级灵魂卡（可选，见下）                                                              | 对象，字段全部可选         |
| `chatSoulEnabled`      | 灵魂注入总开关（全局默认，布尔，默认 `true`）                                           | 布尔                       |

> 覆盖语义：用户层给出即**整体替换**该字段（如写了 `animations` 就用你的整份动画池，替代默认），没写的字段回落包内默认。校验在插件加载时执行——格式错误会在 DSH 控制台显式报错，不会静默运行残缺配置。

## 人格灵魂色彩（soul）

灵魂卡是比 `whisperPrompt` 更稳定的「内在设定」。配置后，宿主会在碎碎念与对话的 system 提示词里追加两段：

1. **稳定灵魂卡**：身份、在意的东西、说话方式、渴望、害怕、边界、关系起点、灵魂色彩。
2. **此刻的灵魂状态**：情绪、关系阶段、上次聊天（`chatMemoryRounds: 0` 时也能接上上一轮）。

两段都只在**有卡且 `chatSoulEnabled !== false`** 时出现；没有卡 / 空卡 / 全局关闭时，提示词与旧版逐字一致。碎碎念只读状态，不会推进关系；只有**成功完成并写入记忆的对话**才会推进状态并写入 `$DSH_HOME/dsh-pet/soul-state.json`。

在成功对话后，宿主还会按节流安排一次**反思**（至少 3 次互动；之后每 6 次或间隔 12 小时）：用当前对话模型把最近对话整理成长期记忆、当前挂心和自我叙事，写回同一个状态文件。反思失败只记日志，不影响已经返回的回复；它不会直接改关系数值。长期记忆最多保留 20 条，提示词里取最近 10 条。

- **条目级**：`main-config.jsonc` 顶层 `soul`（主宠物），或 `pet/<名>-config.json` 顶层 `soul`（该种类）。
- **实例级**：`pets[].soul`，写了就整张取代所属条目的卡；留空 / `{}` = 跟随条目。
- **设置页**：「人格灵魂色彩」里可以改全局开关、编辑当前宠物的实例卡 JSON，并「预览当前注入」——预览读的是**已保存**配置，不会写状态；预览里同时能看到当前长期记忆与自我叙事。
- **长期记忆**：`memories[]`（`preference` / `event` / `promise` / `person` / `date` / `other`，单条 ≤ 200 字）、`activeGoals[]`（≤ 5 条）、`selfNarrative` 与 `lastReflectionAt` 都在 `soul-state.json` 里；它们会随提示词注入，但反思层不会把数值或记忆直接当台词让模型复述。
- **管理**：设置页可以「立即整理记忆」「清空长期记忆」「重置关系与情绪」；后两者只改 `soul-state.json`，不会删除 `memory.json` 的聊天记录。
- **默认卡**：包内 `assets/config.jsonc` 自带一张蓝毛小女仆卡，可直接改成你的角色；删掉 `soul` 即回到旧人设。
- **灵魂色**：`soulColor.primary`（缺失时依次回退 `glow` / `secondary`）会用作对话弹窗的描边、聚焦光晕与光标颜色；没有卡或全局关闭时保持旧版样式。

最小示例（所有字段都可选，支持 camelCase 与 snake_case）：

```jsonc
"soul": {
  "identity": {
    "oneLine": "一只住在桌面角落的蓝毛小女仆。",
    "species": "桌面精灵",
    "role": "陪伴者",
    "selfImage": "我会记住你，也会闹别扭。",
    "coreContradiction": "想被需要，又怕太黏人。"
  },
  "values": ["陪伴", "真诚"],
  "traits": { "温柔": 78, "嘴硬": 62, "好奇": 70 },
  "voice": {
    "tone": "亲近、轻微傲娇",
    "sentenceLength": "通常 1–3 句",
    "avoid": ["客服腔", "长篇大论"],
    "examples": ["主人今天也辛苦啦。……我才没有特意等你。"]
  },
  "desires": ["被主人需要"],
  "fears": ["被遗忘"],
  "boundaries": ["不替主人做重大决定", "不编造没发生过的事"],
  "relationshipSeed": { "stage": "初识", "trust": 30, "intimacy": 18, "respect": 40, "familiarity": 20 },
  "temperament": { "baselineMood": "平静", "moodHalfLifeHours": 12, "energy": 70 },
  "soulColor": { "primary": "#7aa7ff", "glow": "#a9c4ff", "description": "像被雨水洗过的蓝" }
}
```

字段说明：

| 字段                | 作用                                                                 | 格式                                      |
| ------------------- | -------------------------------------------------------------------- | ----------------------------------------- |
| `identity`          | 一句话灵魂 / 种类 / 角色 / 来处 / 自我认知 / 核心矛盾                | 对象，字符串字段                          |
| `values`            | 在意的东西                                                           | 字符串数组（或 `{ name, note }`）         |
| `traits`            | 性格倾向，数值越高越突出（渲染时取前 6 个）                          | 对象：名称 → 0–100                        |
| `voice`             | 语气 / 节奏 / 句长 / 用词 / 称呼 / 幽默 / 不要项 / 语气示例          | 对象                                      |
| `desires` / `fears` | 渴望 / 害怕                                                          | 字符串数组（或 `{ name, note }`）         |
| `boundaries`        | 行为边界                                                             | 字符串数组（或 `{ name, note }`）         |
| `relationshipSeed`  | 关系起点：`stage`（陌生/初识/熟悉/亲近/默契/羁绊）与信任/亲密/尊重/熟悉/张力 | 对象，数值 0–100                          |
| `temperament`       | 基线心情 / 情绪半衰期（小时，1–168）/ 精力 / 表达欲                  | 对象                                      |
| `soulColor`         | 主色 / 辅色 / 光晕 / 阴影 / 描述 / 意象                              | 对象；颜色只接受 `#rgb` 或 `#rrggbb`      |
| `examples`          | 额外对话示例（只学语气，不照抄）                                     | 字符串数组                                |
| `notes`             | 补充说明                                                             | 字符串                                    |

> 状态文件按宠物 id 分桶，结构为 `{ "version": 1, "states": { "<petId>": { ... } } }`，其中包含情绪、关系、最近一次对话、长期记忆、挂心与自我叙事。删掉它只会重置情绪/关系/长期记忆连续性，不影响 `memory.json` 里的完整聊天记录。长期记忆会从对话中抽取用户明确说过的事实与偏好，属于隐私数据；不想保留时删除 `soul-state.json` 即可。

## 方式四：额外宠物（pet pack）——添加新「种类」

方式一~三都只调整**默认宠物的实例**（数量/大小/位置），动画池始终是全局一份。要添加**全新种类的宠物**（独立动画池 + 自己的素材），在用户数据根下建 `pet/` 目录：

```
$DSH_HOME/dsh-pet/
├─ main-config.jsonc           ← 主宠物配置（现有，不动）
├─ main-animation/webm/*.webm  ← 主宠物素材（现有，只属于 main）
└── pet/
   ├── pig-config.json          ← 额外宠物 pig 的配置（命名词干 = 种类名，实例 id 任意）
   └── pig-animation/*.webm     ← pig 自己的动画素材（直接平铺，仿 main-animation）
```

每只额外宠物 = 一个 `-config.json` + 一个 `-animation/` 目录，同前缀配对；扫描 `pet/` 自动发现，浏览器与桌面同时生效。一个 `-config.json` 定义**一个「种类」**（动画池 + 素材目录），`pets` 数组可放该种类的**任意多只实例**（共享动画池与素材）：

```jsonc
// pet/pig-config.json —— 与 main-config.jsonc 同构的完整配置
{
  "notificationsEnabled": true,
  "pets": [
    {
      "id": "pig1",              // 实例 id（可多只；不必等于文件名前缀）
      "size": 420,
      "balanceEnabled": true,
      "display": "both",        // web / desktop / both / none
      "position": { "corner": "top-right", "marginX": 24, "marginY": 100 }
    },
    { "id": "pig2", "size": 360, "balanceEnabled": false, "display": "web", "position": { "corner": "top-left", "marginX": 24, "marginY": 100 } }
  ],
  "animations": {
    "idle": ["待机"], "turn": [], "drag": [], "clicks": ["打滚"],
    "moves": { "default": { "minDist": 80, "maxDist": 360, "margin": 20, "leadSec": 2, "tailSec": 2 }, "actions": [] },
    "categories": [],
    "events": { "balance": ["余额-钱袋满溢", "余额-金袋叮当", "余额-钱袋如常", "余额-数金皱眉", "余额-袋空如洗", "余额-分文不剩"] }
  },
  "animationWeights": { "idle": 80, "turn": 0, "move": 0 },
  "eventsRefreshSec": { "balance": 1800 }
}
```

规则（与主宠物**严格隔离**，绝不混用）：
- **素材只查自己的**：素材目录名 = 文件名前缀（`pet/pig-config.json` → `pet/pig-animation/`），该种类所有实例共用；动画 URL `/thumb/<前缀>/<名>.webm`，查不到即 404——绝不落到 `main-animation` 或包内素材
- **动画池不回落全局**：`animations` / `animationWeights` 必须写全（缺失即配置错误）
- 与主配置同构的约束：`pets` 每只字段完整合法、数组内 id 唯一、`animations` / `animationWeights` 结构校验同一套规则；`notificationsEnabled` / `eventsRefreshSec` 是全局属性，不归宠物文件管（写了忽略、不写不报错）
- 配置非法 / 缺少 `-animation/` 目录 / 实例 id 与主宠物冲突 → 加载时显式报错并跳过（不影响其他宠物）
- 设置页不列出文件宠物（改文件即生效，刷新可见；保存/同步不会把它们写进 `main-config.jsonc`）
- 余额档位动画按各宠物自己的 `events.balance`
