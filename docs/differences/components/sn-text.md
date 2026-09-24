# sn-text

**旧版状态**：文本组件，通过 `mode` 提供 date / price / phone 等多种文本模式，属性较多（font、size、align、overflow、lineHeight 等）。
**差异明细**：

- 移除属性：`mode`（date / date-cn / price / price-upper / name / phone / phone-direct 等文本模式全部移除）、`font`、`align`、`overflow`、`decorationLine`、`space`、`decode`、`lineHeight`、`aniTime`、`encrypt`。
- 更名：`size` → `fontSize`；`customTextStyle` → `textClass`（并改为外部样式类，另有 externalStyle 风格的 `customStyle`）。
- 类型或默认值变化：
  - `type` 默认值 `info` → `text`，可选值改为 `title` | `text` | `text-light` | `primary` | `info` | `success` | `warning` | `error`（新增 `title`、`text-light`，移除纯色系中与正文重复的默认语义）；
  - `lines` 默认值 `-1` → `0`（`0` 表示不限制）；
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：新增默认插槽且优先于 `text` 属性；`fontSize`、`color` 支持 `$` 简写与乘数；多行截断在蒸汽模式下通过 `max-lines` 实现；加粗固定为 `font-weight: 600`。
- 新增事件、方法、插槽：新增 default 插槽；无事件、无方法。
