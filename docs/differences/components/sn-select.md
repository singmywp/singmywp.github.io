# sn-select

**旧版状态**：v1.1.6 已有，v2 重构了弹出层定位与选中态机制，属性体系按 `{语义}Style/Class` 规范重新设计。

**差异明细**：

- 移除属性：`activeBgColor`、`popActiveBgColor`（合并为 `selectedItemBgColor`）、`popTextSize`、`popTextColor`、`popActiveTextColor`（弹出层文字样式统一由 `itemTextStyle`/选中态控制）、`customPopStyle`、`customTextStyle`
- 更名：
  - `activeBgColor` / `popActiveBgColor` → `selectedItemBgColor`（选择框无背景，仅弹出层选项高亮）
  - `popActiveTextColor` → `selectedItemTextColor`
  - `customPopStyle` → `popStyle`
  - `customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `width`：String → String | Number
  - `aniTime`：String 默认 `$long` → String | Number 默认 `$200`
  - `textSize`：`$3` → `$14`
  - `borderRadius`：`$normal` → `$8`
  - 各样式类属性：UTSJSONObject → UTSJSONObject | String
- 新增属性：`selectedMode`（bg/check 两种选中态模式）、`checkIconColor`、`checkIconSize`、`maskOpacity`、`itemStyle`、`itemClass`、`itemBorder`、`itemHoverStyle`、`itemTextStyle`、`itemIconStyle`、`hoverStyle`、`hoverStartTime`、`hoverStayTime`、`hoverTransTime`、`textClass`、`popClass`
- 行为变化：
  - 弹出层从旧版居中弹出改为定位在选择框正下方（下方空间不足时自动翻转到上方），并带缩放淡入动画
  - 弹出层展开时自动滚动定位到当前选中项（scroll-into-view）
  - 新增按压态（useHover）机制，替代旧版 hover 表现
  - 禁用项点击无效；选择框禁用时整体半透明（opacity 0.5），Web 端鼠标为 not-allowed
