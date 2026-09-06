# sn-table

> 旧版组件：无（v2 新增）

**旧版状态**：SinleUI 1.1.6 无表格组件，sn-table、sn-tr、sn-td 均为 v2 新增组件。

**差异明细**：

- 新增属性（sn-table）：`bordered`、`underline`、`height`、`borderColor`、`customStyle`、`customClass`
- 新增属性（sn-tr）：`customStyle`、`customClass`
- 新增属性（sn-td）：`width`、`fixed`、`customStyle`、`customClass`
- 新增事件（sn-table）：`scroll`、`scrolltoupper`、`scrolltolower`（仅 height 设置后的可滚动模式触发）
- 新增方法：无
- 新增插槽（sn-table）：`default`（表体）、`head`（固定表头）；sn-tr / sn-td 仅有默认插槽
- 行为要点：`height` 设置后启用固定表头与纵向滚动；sn-td 的 `width` 纯数字按比例分配、带单位为固定宽度；`fixed` 支持左 / 右固定列
