# sn-slide-captcha

> 旧版组件：无（v2 新增）

**旧版状态**：旧版文档（SinleUI 1.1.6）中不存在该组件，为 SinleUI 2.0 新增组件。

**差异明细**：

- 新增属性：`mode`、`src`、`width`、`height`、`thumbSize`、`thumbRadius`、`tolerance`、`target`、`activeColor`、`trackColor`、`successColor`、`failColor`、`targetColor`、`hintText`、`successText`、`failText`、`disabled`、`customStyle`、`customClass`、`imageStyle`、`imageClass`、`trackStyle`、`trackClass`、`thumbStyle`、`thumbClass`、`fillStyle`、`fillClass`、`targetStyle`、`targetClass`、`textStyle`、`textClass`
- 新增事件：`success`（验证通过）、`fail`（验证失败）
- 新增方法：`reset`（复位并重新生成验证目标）
- 无插槽与 v-model
