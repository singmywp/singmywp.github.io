# sn-line

**旧版状态**：旧版仅提供水平分割线，支持文本、虚线、点状及自定义宽度/高度/颜色等属性。

**差异明细**：

- 新增属性：
  - `direction`（`horizontal` / `vertical`，新增垂直分割线能力）
  - `length`（指定分割线长度：水平为宽度、垂直为高度）
  - `thickness`（分割线粗细，替代旧版 `height`）
- 更名：
  - `lineColor` → `color`
- 移除属性：
  - `width`、`height`（合并为 `length` + `thickness`）
  - `textColor`、`textSize`（文本颜色/大小不再提供 props，可通过 customStyle 之外的样式方案处理；旧版 `customTextStyle` 一并移除）
  - `borderRadius`（不再提供圆角属性）
  - `customTextStyle`
- 类型或默认值变化：
  - `margin`：`String`，默认 `10px 0` → `String | Number`，默认 `0`（水平作用于上下、垂直作用于左右，数值按 px 处理并乘间距乘数）
  - `customStyle`：`UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
  - `color`：默认由 `` `$line` `` 改为空字符串（空时取主题线条色）
- 行为变化：
  - `dot` 语义变化：由旧版"点状分割线"改为在分割线中间显示圆点"•"代替文本；
  - 带文本/圆点的分割线由独立节点渲染（左右两段线 + 中间文本），`customStyle` 仅对纯分割线模式生效；
  - 虚线通过 border 实现，透明背景绘制虚线边框。
- 新增事件、方法、插槽：无事件与方法；移除旧版 `default` 插槽（文本内容由 `text` 属性与 `dot` 提供）。
