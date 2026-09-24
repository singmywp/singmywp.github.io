# sn-form

**旧版状态**：旧版由 `sn-form` + `sn-form-item` 两个组件构成，`sn-form` 统一配置表单项样式（type/labelColor/labelSize/labelWidth/showError/showBorder）并通过 `submited` 事件与 `submit` 方法处理提交。

**差异明细**：

- 组件构成变化：`sn-form-item` 移除，由三类表单项组件替代——`sn-form-field`（通用表单项容器基座）、`sn-input-field`（标签输入框）、`sn-textarea-field`（标签文本域），标签布局与错误提示全部下沉到表单项组件内实现。
- 移除属性：`type`（embed/float 嵌入/浮动表单项样式，v2 无对应概念）、`labelColor`、`labelSize`、`labelWidth`（移至 sn-form-field / sn-input-field / sn-textarea-field 的同名属性）、`showError`（错误提示改由表单项组件的 `error` 属性控制，有错误信息即显示）、`showBorder`（表单项分割线移至 sn-form-field 的 `show-border` 下划线及 input/textarea-field 的边框属性）。
- 类型变化：`customStyle` 旧 `UTSJSONObject` → 新 `UTSJSONObject | String`。
- 更名事件：`submited` → `submit`。
- 新增事件：`pass`（校验通过时触发）、`fail`（校验失败时触发，携带 `SnFormItemVerifyResult[]`）。
- 新增方法：`validate`（仅校验不提交）、`register` / `unregister`（表单项注册/注销，由表单项组件自动调用）。
- 行为变化：错误提示不再由表单内部自动渲染，校验结果通过 `fail` 事件/回调交由外部传给表单项的 `error` 属性展示；`v-model` 深度监听，数据变化即触发 `change` 事件；`triggerChange` 属性保留（数据变化时自动校验）。
- 插槽：default 保留，用法不变（放置表单项组件）。
