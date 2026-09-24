# sn-form-item

**旧版状态**：v1 提供表单项 `sn-form-item`（配合 `sn-form` 使用），支持 `type`（`embed` 嵌入式 / `float` 浮动式）、`label` / `labelColor` / `labelSize` / `labelWidth`、`field`（字段名）、`rule`（[SnFormItemRule](/api/types/component#snformitemrule) 校验规则）、`required` 必填标，以及 `error` 插槽；内部通过 `useVerify` 与 `sn-form` 协作完成整表校验。

**删除结论**：v2 **已移除** `sn-form-item` 组件，拆分为 **`sn-form-field`** / **`sn-input-field`** / **`sn-textarea-field`** 三个组件。

**删除原因**：

- 旧版单个组件同时承担「表单项容器」与「具体输入控件适配」两种职责，`type` 的 `embed` / `float` 又叠加一层版式分支，组合出大量隐式行为，容易出现样式与校验行为不一致。
- 表单最常见的「标签 + 输入框 + 错误提示」组合需要开发者手写 `sn-form-item` + `sn-input` + 错误插槽，重复样板多。
- v2 按职责分层：`sn-form-field` 只做容器与校验注册，输入类组合开箱即用，边界更清晰。

**替代方案**：

- **`sn-form-field`**：通用表单项容器，承担旧版 `sn-form-item` 的容器职责，并大幅扩展版式能力。属性对应关系：

| 旧版 `sn-form-item` | 替代方案 `sn-form-field` |
| ------------------- | ------------------------ |
| `type`（`embed` / `float`） | `direction`（`horizontal` / `vertical`）与 `showBorder` 分别表达 |
| `label` | `label` |
| `labelColor` / `labelSize` | `labelColor` / `labelSize`（同样支持 `$` 简写） |
| `labelWidth` | `labelWidth` |
| `field` | `field`（非空且位于 `sn-form` 内时注册参与整表校验） |
| `rule`（`SnFormItemRule`） | `rule`（[SnFormItemRule](/api/types/component#snformitemrule)） |
| `required` | `required` |
| `error` 插槽 | `error` 属性 + `error` 插槽（`errorSize` / `errorColor` 可定制） |

- 新增能力：`labelAlign` / `labelJustify` / `contentAlign`（对齐控制）、`columnGap`（标签与内容间距）、`showBorder` / `borderColor` / `borderWidth` / `borderStyle` / `borderClass`（下划线）、`bgColor` / `borderRadius` / `padding`、以及 `labelStyle` / `labelClass` / `contentStyle` 等完整样式透传。

- **`sn-input-field`**：`sn-form-field` + `sn-input` 的成品组合，内置错误提示，一步到位：

```vue
<template>
	<sn-form v-model="form" @submit="onSubmit">
		<sn-input-field field="username" label="用户名" :rule="nameRule" required />
		<sn-input-field field="password" label="密码" type="password" required />
		<sn-button type="primary" text="提交" @click="form.submit()" />
	</sn-form>
</template>
```

- **`sn-textarea-field`**：`sn-form-field` + `sn-textarea` 的成品组合，额外内置字数统计。

- **事件更名**：旧版 `submited` 事件更名为 **`submit`**，校验失败时的回调语义不变。
