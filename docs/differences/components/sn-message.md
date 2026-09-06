# sn-message

> 旧版组件：无（v2 新增）

**旧版状态**：v1.1.6 无此组件，v2 新增。

**差异明细**：

- v2 新增全局消息条组件：多条消息依次排列成队列，自动消失，支持六方向弹出位置（`top-left` / `top` / `top-right` / `bottom-left` / `bottom` / `bottom-right`）
- 五种功能色类型（`info` / `primary` / `success` / `error` / `warning`）× 三种配色等级（`first` / `second` / `third`），默认图标随类型自动匹配
- 支持 `closable` 关闭按钮、`grouping` 相同内容合并计数、`duration` 自动关闭时长（`0` 表示不自动关闭）、`close(id)` 按 id 精确关闭与 `close()` 全部关闭
- `show()` 方法接收 `SnMessageParams` 参数并返回消息 `id`，组件属性作为参数默认值
- 样式扩展齐全：`customStyle` / `textStyle` / `iconStyle` / `closeStyle` / `badgeStyle` 及对应 externalClass
