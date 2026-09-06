# sn-pagination

> 旧版组件：无（v2 新增）

**旧版状态**：SinleUI 1.1.6 无分页器组件，sn-pagination 为 v2 新增组件。

**差异明细**：

- 新增属性：`pageCount`、`pageSlot`、`itemCount`、`simple`、`disabled`、`showQuickJumper`、`showPrevNext`、`buttonType`、`buttonLevel`、`size`、`gap`、`customStyle`、`customClass`、`pageClass`、`pageStyle`、`activePageClass`、`activePageStyle`、`buttonTextClass`、`buttonTextStyle`、`simpleTextClass`、`simpleTextStyle`、`jumperClass`、`jumperStyle`、`jumperInputClass`、`jumperInputStyle`
- 新增双向绑定：`v-model:page`（当前页码）、`v-model:page-size`（每页条数）
- 新增事件：无（页码变化仅通过 v-model 同步，无独立事件）
- 新增方法：无
- 新增插槽：`prefix`、`suffix`、`prev`、`next`、`goto`
