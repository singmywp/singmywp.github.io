# sn-loading
> 旧版组件：sn-loading.md
**旧版状态**：v1.1.6 已有加载组件，支持 icon / draw 两种模式、加载文本与基础样式定制。
**差异明细**：

- 新增属性：
  - `customClass`（根节点外部样式类）
  - `loadingClass`、`textClass`（加载指示器/文本节点外部样式类）
- 更名：`customLoadingStyle` → `loadingStyle`；`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `mode` 可选值：`icon` | `draw` → `icon` | `native`；默认值 `icon` → `native`
  - `iconSize` 默认值：`$5` → `$24`；`textSize` 默认值：`$3` → `$16`；两者类型 String → String | Number
  - `iconColor` / `textColor` 默认值改为空串（内部回退 `$primary` / `$primaryDark`，有效默认不变）；类型 String → String
  - `customStyle` / `loadingStyle` / `textStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - 原 draw 绘制模式更名为 `native`，改用官方内置 loading 组件实现（GPU 加速渲染，不受主线程繁忙影响，且 Web 端可用）
  - icon 模式的旋转动画改用 DOM 动画实现
- 新增事件、方法、插槽：无（default 插槽保留）
