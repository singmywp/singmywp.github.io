# Form  表单

> [查看 sn-form 的 2.0 版本差异](/differences/components/sn-form)

## 基础用法

- 用于数据收集与校验，`v-model` 绑定一个 `UTSJSONObject` 作为表单数据对象，其键对应表单项的 `field`。
- 表单项分三层配合：`sn-form` 负责数据收集与校验调度；`sn-input-field`（标签输入框）、`sn-textarea-field`（标签文本域）是自带输入控件与标签的字段组件，直接设置 `field` + `rule` 即参与校验；其余任意控件（单选、复选、步进器、滑块、选择器等）放入 `sn-form-field` 容器，同样通过 `field` + `rule` 注册校验。
- `sn-form` 本身不渲染表单项 UI，只做校验调度：校验失败时通过 `fail` 事件（或 `SnFormValidResult` 的 `fail` 回调）返回失败结果数组，由外部将提示文字传给表单项的 `error` 属性展示。

```vue
<template>
	<sn-form ref="formRef" v-model="formData">
		<sn-input-field field="name" :rule="nameRule" v-model="(formData['name'] as string)" label="姓名" :error="getFieldError('name')" placeholder="请输入中文姓名" clearable />
		<sn-input-field field="phone" :rule="phoneRule" v-model="(formData['phone'] as string)" label="手机号" :error="getFieldError('phone')" type="number" placeholder="请输入手机号" clearable />
		<sn-form-field field="gender" :rule="genderRule" label="性别" :error="getFieldError('gender')">
			<sn-radio-group v-model="(formData['gender'] as number)">
				<sn-radio text="男" />
				<sn-radio text="女" />
			</sn-radio-group>
		</sn-form-field>
	</sn-form>
	<sn-button text="提交" type="primary" custom-style="margin-top:16px;" @click="onSubmit" />
</template>

<script lang="uts" setup>
	import type { SnFormItemRule, SnFormItemVerifyResult, SnFormValidResult } from '@/uni_modules/sinle-ui'

	const formRef = ref<SnFormComponentPublicInstance | null>(null)
	const formData = ref<UTSJSONObject>({
		name: '',
		phone: '',
		gender: 0
	} as UTSJSONObject)
	const failResults = ref<SnFormItemVerifyResult[]>([])

	function getFieldError(field: string): string {
		const list = failResults.value
		for (let i = 0; i < list.length; i++) {
			if (list[i].field == field) {
				return list[i].message ?? ''
			}
		}
		return ''
	}

	const nameRule = ref<SnFormItemRule>({
		type: 'chinese',
		required: true,
		message: '请填写正确的中文姓名'
	} as SnFormItemRule)

	const phoneRule = ref<SnFormItemRule>({
		type: 'phone',
		required: true,
		message: '请填写正确的手机号'
	} as SnFormItemRule)

	const genderRule = ref<SnFormItemRule>({
		required: true,
		message: '请选择性别'
	} as SnFormItemRule)

	function onSubmit(): void {
		formRef.value?.$callMethod('submit', {
			success: () => {
				failResults.value = []
			},
			fail: (results: SnFormItemVerifyResult[]) => {
				failResults.value = results
			}
		} as SnFormValidResult)
	}
</script>
```

**更多演示请下载 demo 查看**

## 三层结构与配合方式

| 组件 | 职责 |
| --- | --- |
| sn-form | 数据容器与校验调度器：`v-model` 持有整个表单数据对象，收集所有注册的表单项并逐项校验 |
| sn-input-field / sn-textarea-field | 自带标签与输入控件（textarea）的字段组件：设置 `field` + `rule` 即参与校验，内部已实现标签布局与错误提示，**无需**再包一层 `sn-form-field` |
| sn-form-field | 通用表单项容器基座：标签 + 内容插槽 + 错误提示的布局外壳，内容区放任意控件，通过 `field` + `rule` 注册校验 |

配合要点：

- 表单项组件必须位于 `sn-form` 内部（`sn-form` 通过 provide/inject 收集子项），此时 `field` + `rule` 才会生效；独立使用时表单项仅作为普通布局/输入组件。
- 校验时 `sn-form` 从自身 `v-model` 对象中按 `field` 取值传给表单项校验，因此需把控件的 `v-model` 绑定到表单数据对象的对应字段，如 `v-model="(formData['gender'] as number)"`。
- 错误提示不会自动显示：把 `fail` 结果中对应字段的 `message` 赋给表单项的 `error` 属性即可（三类表单项组件都有 `error` 属性与 `error` 插槽）。
- 开启 `trigger-change` 后，表单数据每次变化都会自动执行一遍校验，适合"输入即反馈"场景，通过结果可触发 `pass` / `fail` 事件。

## 校验规则

每项校验规则是一个 `SnFormItemRule` 对象（可从 `@/uni_modules/sinle-ui` 导入）：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| type | String | 内置格式校验类型，为空时只做必填/长度等通用校验，可选值见下 |
| required | Boolean | 是否必填，`null`、空字符串、空数组视为空值 |
| message | String | 校验失败时的提示信息 |
| pattern | RegExp | 正则校验，仅对字符串值生效 |
| min | Number | 最小限制：字符串按长度比较，数字按数值比较 |
| max | Number | 最大限制：字符串按长度比较，数字按数值比较 |
| len | Number | 字符串长度必须等于该值（设置后对字符串的 min/max 不生效） |
| enum | any[] | `type` 为 `enum` 时的可选值列表 |
| transform | (value: any) => any | 校验前对值进行转换（如把字符串转数字），后续校验使用转换后的值 |
| valid | (value: any) => String | 自定义校验函数，返回非空字符串表示校验失败，内容即提示信息 |

`type` 可选值：`string`、`number`、`boolean`、`object`、`array`、`integer`、`float`、`enum`、`url`、`email`、`idcard`、`phone`、`landline`、`qqnumber`、`abc`、`chinese`、`carnumber`、`ipv4`、`ipv6`。格式类校验对空值不生效，空值校验交给 `required`。

```typescript
const adultRule = ref<SnFormItemRule>({
	type: 'integer',
	required: true,
	message: '请填写年龄',
	transform: (value: any): any => {
		if (value == null || value == '') {
			return null
		}
		return parseInt(value as string)
	},
	valid: (value: any): string => {
		if (typeof value == 'number' && value < 18) {
			return '必须年满 18 周岁'
		}
		return ''
	}
} as SnFormItemRule)
```

校验单项结果 `SnFormItemVerifyResult` 包含 `valid`（是否通过）、`message`（提示信息）、`field`（字段名）。提交回调类型 `SnFormValidResult` 包含 `success` 与 `fail`（携带失败结果数组）两个可选回调。

## 仅校验不提交

调用 `validate` 方法只做校验，通过与否都不会触发 `submit` 事件。

```vue
<template>
	<sn-form ref="formRef" v-model="formData">
		<sn-input-field field="age" :rule="ageRule" v-model="(formData['age'] as string)" label="年龄" type="number" />
	</sn-form>
	<sn-button text="仅校验" @click="onValidateOnly" />
</template>

<script lang="uts" setup>
	import type { SnFormValidResult } from '@/uni_modules/sinle-ui'

	const formRef = ref<SnFormComponentPublicInstance | null>(null)

	function onValidateOnly(): void {
		formRef.value?.$callMethod('validate', {
			success: () => {},
			fail: () => {}
		} as SnFormValidResult)
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 表单数据对象，键为表单项的 `field`，值为对应控件绑定的值；深度监听，变化时触发 change 事件 | UTSJSONObject | `{}` | - |
| triggerChange | 是否在表单数据变化时自动执行校验 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| submit | () => Void | 调用 submit 方法且校验通过后触发 |
| pass | () => Void | 校验通过时触发 |
| fail | (failResults: SnFormItemVerifyResult[]) => Void | 校验失败时触发，携带全部失败项的结果数组 |
| change | (value: UTSJSONObject) => Void | 表单数据变化时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| validate | (callback: [[SnFormValidResult]] \| null)，可省略 | - | 仅校验不提交：通过时触发 pass 事件并执行 success 回调，失败时触发 fail 事件并执行 fail 回调（携带失败结果数组） |
| submit | (callback: [[SnFormValidResult]] \| null)，可省略 | - | 校验通过后触发 submit 事件并执行 success 回调；失败时执行 fail 回调 |
| register | (item: SnFormItemData) | - | 注册表单项，由表单项组件自动调用，无需手动调用 |
| unregister | (field: String) | - | 注销表单项，由表单项组件自动调用，无需手动调用 |

:::type-fields SnFormValidResult

`sn-form` 的 `valid` 属性回调配置：`success`（全部通过回调）、`fail`（失败回调，入参为 `SnFormItemVerifyResult[]`）。

---

:::

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置 sn-input-field、sn-textarea-field、sn-form-field 等表单项组件 |

<DemoPhone name="sn-form" />
