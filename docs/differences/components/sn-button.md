# sn-button

**旧版状态**：旧版为基础按钮，提供 `type`/`level` 主题、镂空虚线（dashed 一体）、圆形按钮（round）、长按钮（long）及零散的颜色/文本样式 props。

**差异明细**：

- 新增属性：`size`、`shape`、`radius`、`icon`、`iconPosition`、`plain`、`loadingClass`、`loadingStyle`、`iconClass`、`iconStyle`、`textClass`、`textStyle`、`hoverStyle`、`hoverStopPropagation`、`hoverStartTime`、`hoverStayTime`、`hoverTransTime`、`customClass`
- 移除属性：`long`、`round`、`roundSize`、`borderRadius`、`padding`、`align`、`textColor`、`disabledTextColor`、`bgColor`、`activeBgColor`、`disabledBgColor`、`textSize`、`textFont`、`customTextStyle`
- 更名：`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `type` 默认值 `info` → `primary`
  - `customStyle` 类型 `UTSJSONObject` → `UTSJSONObject | String`，默认值 `{}` → `''`
- 行为变化：
  - 旧版 `dashed` 为"镂空且显示虚线边框"一体属性；v2 拆分为 `plain`（镂空透明背景 + 1px 边框）与 `dashed`（仅虚线边框样式）两个独立属性，虚线按钮需同时传 `plain` 与 `dashed`
  - 旧版圆形按钮由 `round` + `roundSize` 控制；v2 改为 `shape="circle"` 纯图标圆形按钮，尺寸由内边距与字号计算
  - 加载状态改为覆盖加载遮罩（带 100ms 延迟显示）并阻止点击，加载指示器颜色/样式可通过 `loadingStyle`/`loadingClass` 定制
  - 点击态改用统一的 `hover-style` 机制（支持 `hover-start-time`/`hover-stay-time`/`hover-trans-time`）
- 新增事件、方法、插槽：新增插槽 `body`（替换按钮整体内部内容）；事件 `click` 回调签名由 `(e: UniPointerEvent) => Void` 变为 `() => Void`
