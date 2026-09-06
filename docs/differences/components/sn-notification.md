# sn-notification

> 旧版组件：无（v2 新增）

**旧版状态**：v1.1.6 无此组件，v2 新增。

**差异明细**：

- v2 新增全局通知组件：带标题 + 内容 + 类型图标的通知卡片从页面顶部 / 底部弹出（`position`：`top` / `bottom`），多条通知自动排列成队列
- 五种功能色类型（`info` / `primary` / `success` / `error` / `warning`）× 三种配色等级（`first` / `second` / `third`），图标位于按类型与等级着色的圆角色块中，默认图标随类型自动匹配
- 支持 `show-progress` 剩余时间进度条（拖动时暂停）、`closable` 关闭按钮、`grouping` 相同标题 + 内容合并计数徽标
- 支持六方向之外的两方向队列位置；`draggable` 开启手势拖动：横向拖动跟手移动，超过 `dragThreshold`（默认 80px，支持卡片宽度百分比）向对应方向飞出关闭，未达阈值回弹；拖动期间自动关闭计时暂停，到期后在回弹后关闭；Web 端支持鼠标拖拽
- `show()` 方法接收 `SnNotificationParams` 参数（含 `showAction`）并返回通知 `id`，`close(id)` 精确关闭、`close()` 全部关闭
- 唯一插槽 `action`（右侧操作区，作用域暴露通知 `id`，需 `showAction: true` 时显示）；样式扩展齐全：`customStyle` / `titleStyle` / `contentStyle` / `iconStyle` / `closeStyle` / `badgeStyle` / `actionStyle` 及对应 externalClass
