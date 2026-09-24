# sn-badge

**旧版状态**：徽标组件，支持数字 / 文本 / 浮点三种模式，必须包裹内容使用，颜色仅 bgColor / textColor 自定义。
**差异明细**：

- 新增属性：`type`（功能色，背景/文字色自动配套）、`show`（显隐控制）、`alwaysWrap`（始终保留包裹容器，显隐带过渡动画）、`badgeClass` / `textClass` / `containClass`（外部样式类）。
- 更名：`customTextStyle` → `textStyle`；`customDotStyle` → `dotStyle`；`customContainStyle` → `containStyle`。
- 类型或默认值变化：
  - `bgColor` 默认值 `$error` → 空（由 `type` 决定，默认 `error`）；
  - `textColor` 默认值 `#fff` → 空（自动取 `type` 对应文字色）；
  - `size` 默认值 `$1` → 空（默认字号 12×字体乘数、圆点 8×字体乘数）；
  - `customStyle` 等 style 类属性类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：default 插槽由必选变为可选，支持独立使用（徽标直接显示在文档流中）；数字为 0 且不显示时内容直出不产生包裹层（性能优化）；显隐切换带过渡动画（需 `always-wrap`）。
- 新增事件、方法：无。
- 新增插槽：`value`（完全自定义徽标内容，优先级最高）；default 说明由"必选"改为可选。
