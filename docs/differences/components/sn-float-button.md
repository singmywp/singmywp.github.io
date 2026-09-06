# sn-float-button

> 旧版组件：sn-float-button.md（旧版文档标题误写为 Float Board）

**旧版状态**：1.1.6 已有浮动按钮，支持八方位预设、拖动与松手吸附；v2 保留全部属性，扩展类型并增强跨端拖拽与自适应能力。

**差异明细**：

- 更名：`vModel` → `v-model`（双向绑定写法规范化，类型与默认值不变）
- 类型或默认值变化：
  - `size`：String → String \| Number（默认值 `60px` 不变）
  - `iconSize`：String → String \| Number；默认值 `$6` → `''`（实际渲染 `30 × fontsizeFactor px`）
  - `aniTime`：String → String \| Number；默认值 `$long` → `''`（实际取 `$snui.aniTimeLong`）
  - `borderRadius`：String → String \| Number；默认值 `$circle` → `''`（实际渲染 `12000 × radiusFactor px`，仍为圆形）
  - `bgColor`：支持 `  - `bgColor` 简写；默认值由 `$front` 改为 `''`（为空时内部兜底取 `$front`）
  - `iconColor`：支持 `  - `iconColor` 简写；默认值由 `$text` 改为 `''`（为空时内部兜底取 `$text`）
  - `customStyle`：UTSJSONObject → UTSJSONObject \| String；默认值 `{}` → `''`
- 行为变化：
  - Web 端新增鼠标拖动支持（mousedown/mousemove/mouseup），此前仅支持触摸拖动
  - 新增窗口尺寸变化自适应：APP 端通过 UniResizeObserver、Web 端通过 resize 监听重新校正位置
  - 禁用状态下 Web 端显示 `not-allowed` 光标
  - `change` 事件回调携带当前位置坐标 `Array<Number>`，`click` 事件回调携带 `UniPointerEvent`（旧文档均为无参签名）
- 新增属性：无
- 移除属性：无
- 新增事件、方法、插槽：无（插槽仍仅有 default）
