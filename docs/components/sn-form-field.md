# FormField  表单项

## 基础用法

- 通用表单项容器基座：标签（左/上）+ 内容插槽 + 底部错误提示的布局外壳，是 `sn-input-field`、`sn-textarea-field` 等字段组件的容器基础。
- 内容区可放置原生 input 或任意 sn- 表单控件；横向布局时内容默认右对齐、纵向布局默认左对齐，可用 `content-align` 调整。
- 放在 `sn-form` 内并设置 `field` + `rule` 时自动注册参与整表校验；独立使用时仅作为布局容器，`field` / `rule` 不生效。
- 尺寸与颜色属性支持 `$` 简写（如 `label-size="$18"`、`bg-color="$front"`），随风格乘数与主题自动缩放换色。

```vue
<template>
	<sn-form-field label="昵称">
		<input class="demo-input" v-model="nickname" placeholder="请输入昵称" />
	</sn-form-field>
	<sn-form-field label="性别" required>
		<sn-radio-group v-model="gender">
			<sn-radio text="男" />
			<sn-radio text="女" />
		</sn-radio-group>
	</sn-form-field>
	<sn-form-field label="城市" show-border>
		<sn-select v-model="city" :data="cityOptions" width="140px" />
	</sn-form-field>
</template>

<script lang="uts" setup>
	const nickname = ref<string>('')
	const gender = ref<number>(0)
	const city = ref<number>(0)
	const cityOptions = ref<SnDataItem[]>([
		{ id: 'beijing', text: '北京' },
		{ id: 'shanghai', text: '上海' }
	] as SnDataItem[])
</script>
```

**更多演示请下载 demo 查看**

## 配合 sn-form 使用

设置 `field` 与 `rule` 后参与 `sn-form` 整表校验；校验取值为表单 `v-model` 对象中 `field` 对应的值，需把控件的 `v-model` 绑定到该字段，校验失败信息通过 `error` 属性展示。

```vue
<template>
	<sn-form v-model="formData">
		<sn-form-field field="gender" :rule="genderRule" label="性别" :error="getFieldError('gender')">
			<sn-radio-group v-model="(formData['gender'] as number)">
				<sn-radio text="男" />
				<sn-radio text="女" />
			</sn-radio-group>
		</sn-form-field>
	</sn-form>
</template>

<script lang="uts" setup>
	import type { SnFormItemRule } from '@/uni_modules/sinle-ui'

	const genderRule = ref<SnFormItemRule>({
		required: true,
		message: '请选择性别'
	} as SnFormItemRule)
</script>
```

输入类字段（文本、多行文本）建议直接使用 `sn-input-field` / `sn-textarea-field`，它们已内置标签、输入区与错误提示，无需再用 `sn-form-field` 包裹。

## 自定义错误提示

设置 `error` 属性在内容下方显示一行错误文字（对齐跟随 `content-align`）；也可使用 `error` 插槽完全自定义错误内容，优先级高于 `error` 属性。

```vue
<template>
	<sn-form-field label="自定义错误" content-align="left">
		<template #error>
			<sn-icon name="error-warning-line" :size="14" color="#f56c6c" />
			<sn-text font-size="$12" color="$error">请检查输入内容</sn-text>
		</template>
		<sn-switch v-model="value" />
	</sn-form-field>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| direction | 布局方向，horizontal 标签在左、vertical 标签在上 | String | `horizontal` | `horizontal` \| `vertical` |
| field | 表单字段名，非空且位于 sn-form 内时注册参与整表校验 | String | `''` | - |
| rule | 校验规则，配合 field 使用 | [[SnFormItemRule]] | `{}` | - |
| label | 标签文字 | String | `''` | - |
| labelSize | 标签字体大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| labelColor | 标签颜色 | String | `''`（默认主题 title 色） | - |
| labelWidth | 横向布局时标签宽度 | String \| Number | `''`（默认 80px × 间距乘数） | - |
| labelAlign | 标签文字水平对齐 | String | `left` | `left` \| `right` \| `center` |
| labelJustify | 标签在容器内的竖向对齐 | String | `center` | `top` \| `center` \| `bottom` |
| required | 是否必填，标签后追加红色 `*` 标记 | Boolean | `false` | `true` \| `false` |
| error | 错误提示文字（存在 error 插槽时不显示） | String | `''` | - |
| errorSize | 错误文字大小 | String \| Number | `''`（默认 12px × 字体乘数） | - |
| errorColor | 错误文字颜色 | String | `''`（默认主题 error 色） | - |
| columnGap | 标签与内容的间距 | String \| Number | `''`（默认 12px × 间距乘数） | - |
| contentAlign | 内容区水平对齐；为空时横向布局默认 right、纵向布局默认 left | String | `''` | `left` \| `center` \| `right` |
| showBorder | 是否显示底部下划线 | Boolean | `false` | `true` \| `false` |
| borderColor | 下划线颜色 | String | `''`（默认主题 line 色） | - |
| borderWidth | 下划线高度 | String \| Number | `1` | - |
| borderStyle | 下划线节点自定义样式 | UTSJSONObject \| String | `''` | - |
| borderClass | 下划线节点外部类 | String | `''` | - |
| bgColor | 背景颜色 | String | `''`（默认主题 front 色） | - |
| borderRadius | 圆角大小 | String \| Number | `''`（默认 8px × 圆角乘数） | - |
| padding | 内边距 | String | `10px 13px` | - |
| labelStyle | 标签节点自定义样式 | UTSJSONObject \| String | `''` | - |
| labelClass | 标签节点外部类 | String | `''` | - |
| errorStyle | 错误节点自定义样式 | UTSJSONObject \| String | `''` | - |
| errorClass | 错误节点外部类 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| containStyle | 内容区自定义样式 | UTSJSONObject \| String | `''` | - |

:::type-fields SnFormItemRule

`sn-form-item` 的 `rule` 属性校验规则。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 否 | 字段类型（如 `string` / `number` / `array` / `url` / `email` / `phone` 等） |
| required | Boolean | 否 | 是否必填 |
| message | String | 否 | 校验失败提示信息 |
| pattern | RegExp | 否 | 正则校验规则 |
| min | Number | 否 | 最小长度 |
| max | Number | 否 | 最大长度 |
| len | Number | 否 | 固定长度 |
| enum | any[] | 否 | 枚举校验，值须在列表内 |
| transform | (value: any) => any | 否 | 校验前对值进行转换 |
| valid | (value: any) => string | 否 | 自定义校验函数，返回非空字符串表示失败信息 |

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| verify | (value: any, callback: (res: SnFormItemVerifyResult) => Void) | - | 按 rule 校验当前表单项并回调结果；一般由 sn-form 自动调用，无需手动调用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 内容区，放置表单控件 |
| label | 自定义标签内容，替换 label 属性文字 |
| error | 自定义错误提示内容，替换 error 属性文字 |

<DemoPhone name="sn-form-field" />
