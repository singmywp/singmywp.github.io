# sn-tag

**旧版状态**：标签组件，支持 type / level 配色、可关闭、加载与禁用状态，样式属性较多。
**差异明细**：

- 新增属性：`loadingClass` / `loadingStyle`（加载指示器样式扩展）、`textClass` / `textStyle`（文本样式扩展）。
- 更名：`customTextStyle` → `textStyle`。
- 类型或默认值变化：
  - `borderRadius` 默认值 `$small` → 空（默认 8×圆角乘数）；
  - `disabledBgColor` 默认值 `$disabled` → 空（取主题禁用色）；
  - `textSize` 默认值 `$2` → 空（默认 12×字体乘数）；
  - `iconSize` 默认值 `$3` → 空（默认 13×字体乘数）；
  - `customStyle` 等 style 类属性类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：`iconColor` 为空时默认跟随文本颜色（旧版为独立默认色）；`loading` 时隐藏关闭按钮；`level="least"` 使用线条色边框；点击关闭按钮后标签从文档流中移除并触发 `close`；非法的 `type` / `level` 值自动回退为 `info` / `first`。
- 新增事件：`close`（旧版文档未列出事件）。
- 新增方法、插槽：无（保留 default 插槽）。
