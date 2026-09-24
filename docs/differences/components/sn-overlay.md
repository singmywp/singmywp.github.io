# sn-overlay

**旧版状态**：旧版已提供全屏遮罩层组件（6 个属性、3 个事件、open/close 方法、default 插槽）。

**差异明细**：

- 移除属性：`renderMode`（v2 中遮罩节点首次 open 时才挂载，不支持 v-show 渲染模式）
- 更名事件：`clickMask` → `click-mask`
- 默认值变化：`opacity` `0.3` → `0.4`
- 类型变化：`aniTime` String → String | Number（支持数值与 `$` 简写）；`bgColor` String → String，支持 `$` 简写主题色；`customStyle` UTSJSONObject → UTSJSONObject | String
- 行为变化：层级固定为 999（不可配置）；动画改为基于 UniElement DOM animate 的整体淡入淡出，`aniTime` 为 0 时瞬时显隐
- 方法、插槽无变化（`open` / `close`；`default`）
