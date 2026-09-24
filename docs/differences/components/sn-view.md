# sn-view

**旧版状态**：基础视图容器，支持 loading / disabled 与少量外观属性，扩展了含 rotate / scale 在内的多种手势事件。
**差异明细**：

- 新增属性：`hoverStyle`（按下点击态样式）、`hoverStopPropagation`、`hoverStartTime`、`hoverStayTime`、`hoverTransTime`（点击态调节）；`loadingClass` / `loadingStyle`（加载指示器样式扩展）；`customClass`（根节点外部样式类）。
- 更名：无。
- 类型或默认值变化：
  - `aniTime` 默认值 `$normal` → `$250`；
  - `bgColor` 支持 `  - `bgColor`  简写；
  - `borderRadius` 类型 String → String | Number；
  - `margin`、`padding` 类型 String → String | Number；
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：`loading` 由"不载入默认插槽的组件"改为内容保留、覆盖半透明遮罩并在其中显示加载指示器（容器尺寸不变）；`disabled` 同样显示遮罩并整体变淡；`aniTime` 等尺寸/时长属性支持 `$` 前缀乘数语法。
- 新增事件、方法、插槽：无（保留原 default 插槽与全部指针/触摸事件）。
