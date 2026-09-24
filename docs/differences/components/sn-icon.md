# sn-icon

**旧版状态**：基于 Remix Icon 的字体图标组件，支持自定义图标字体名与逗号分隔的多图标显示。
**差异明细**：

- 移除属性：`font`（图标字体固定为内置 remixicon，不再可换）。
- 更名：无。
- 类型或默认值变化：
  - `size` 默认值 `-` → `$16`（支持 `$` 乘数简写）；
  - `color` 默认值 `-` → `var(--sn-text)`；
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：`name` 不再支持逗号分隔同时显示多个图标，仅渲染单个图标；图标数据内置为 Remix Icon 全量字体并在组件挂载时自动加载，无需手动引入。
- 新增事件、方法、插槽：新增属性 `iconClass`（根节点外部样式类）；无事件、无方法、无插槽。
