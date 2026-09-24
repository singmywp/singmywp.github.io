# sn-popup

**旧版状态**：旧版已提供基础弹出层组件（7 个属性、3 个事件、open/close 方法、default 插槽）。

**差异明细**：

- 新增属性：`zIndex`、`overlayStyle`、`openAnimation`、`closeAnimation`
- 新增外部样式类：`customClass`（`custom-class`，作用于根节点）
- 移除事件：`open`、`close`（整体的打开/关闭事件）
- 更名事件：`clickMask` → `clickoverlay`
- 新增事件：`beforeenter` / `enter` / `afterenter` / `beforeleave` / `leave` / `afterleave`，以动画生命周期细分打开与关闭过程
- 类型变化：`aniTime` String → String | Number（支持数值与 `$` 简写）；`customStyle` UTSJSONObject → UTSJSONObject | String
- 默认值变化：`maskOpacity` `0.3` → `0.4`
- 行为变化：内置动画改为基于 UniElement DOM animate 实现（遮罩淡入淡出 + 内容按位置滑入/缩放）；`customStyle` 的作用对象明确为内容容器节点（遮罩层样式由 `overlayStyle` 控制）；动画进行中调用 open/close 会挂起，待动画结束后自动执行
- 方法、插槽无变化（`open` / `close`；`default`）
