# sn-countto
> 旧版组件：sn-countto.md
**旧版状态**：v1.1.6 已有数字滚动组件，支持 startVal / endVal / duration / decimals / separate / easing / autoplay 与 play / pause / stop / reset 方法。
**差异明细**：

- 新增属性：
  - `selectable`（Boolean，默认 `false`，文本是否可选中复制）
  - `bold`（Boolean，默认 `false`，文本是否加粗）
  - `textClass`（String，默认 `''`，文本节点外部样式类）
- 类型或默认值变化：
  - `textSize`：类型 String → String | Number，默认值 `$2` → `''`（不传时默认 14px × 字体乘数）
  - `textColor`：默认值 `$text` → `''`（不传时默认主题文字色）
  - `customStyle`：类型 UTSJSONObject → UTSJSONObject | String，默认值 `{}` → `''`
- 新增插槽：
  - `default`（旧文档未提供插槽，v2 可通过默认插槽接管内部文本渲染）
- 事件、方法：无变化（事件 `finish`，方法 `play` / `pause` / `reset` / `stop` 均与旧版一致）
