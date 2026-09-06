# sn-agreement

> 旧版组件：无（v2 新增）

**旧版状态**：旧版文档（SinleUI 1.1.6）中不存在该组件，为 SinleUI 2.0 新增组件。

**差异明细**：

- 新增属性：`text`、`links`、`disabled`、`fontSize`、`color`、`linkColor`、`boxSize`、`customStyle`、`customClass`、`boxStyle`、`boxClass`、`textStyle`、`textClass`、`linkStyle`、`linkClass`
- 新增 v-model：Boolean 类型的勾选状态
- 新增事件：`change`（勾选状态切换）、`open-link`（点击协议链接文本，回调参数为 `{ text: string, index: number }`）
- 无对外方法与插槽
