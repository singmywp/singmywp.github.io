# sn-countdown
> 旧版组件：sn-countdown.md
**旧版状态**：v1.1.6 已有倒计时组件，支持 time / format / autoplay / millisecond 与 start / pause / stop / reset 方法。
**差异明细**：

- 新增属性：
  - `selectable`（Boolean，默认 `false`，文本是否可选中复制）
  - `bold`（Boolean，默认 `false`，文本是否加粗）
  - `textClass`（String，默认 `''`，文本节点外部样式类）
- 类型或默认值变化：
  - `textSize`：类型 String → String | Number，默认值 `$2` → `''`（不传时默认 14px × 字体乘数）
  - `textColor`：默认值 `$text` → `''`（不传时默认主题文字色）
  - `customStyle`：类型 UTSJSONObject → UTSJSONObject | String，默认值 `{}` → `''`
- 行为变化：
  - 时间格式说明修正：不再参考 Day.js，实际支持的占位符为 `DD` / `HH` / `mm` / `ss`（缺省单位自动进位）及 `SSS` / `SS` / `S` 毫秒占位符
- 事件、方法、插槽：无变化（事件 `change` / `finish`，方法 `start` / `pause` / `reset` / `stop`，插槽 `default` 均与旧版一致）
