# InputField  标签输入框

> [查看 sn-input-field 的 2.0 版本差异](/differences/components/sn-input-field)

## 基础用法

- 自带标签与输入区的字段组件，相当于"标签 + 输入框 + 错误提示"的一体化封装，移动端表单输入标配。
- 支持 `v-model` 双向绑定、密码明文/密文切换（`password`）、一键清空（`clearable`）、加载状态（`loading`）、禁用与只读配色。
- 放在 `sn-form` 内设置 `field` + `rule` 即参与整表校验，无需再包一层 `sn-form-field`。
- 尺寸与颜色属性支持 `$` 简写（如 `label-size="$18"`、`label-color="$primaryDark"`），随风格乘数与主题自动缩放换色。

```vue
<template>
	<sn-input-field v-model="value" label="用户账号" required placeholder="请输入账号" clearable />
	<sn-input-field v-model="pwd" label="密码" password placeholder="请输入密码" clearable />
</template>

<script lang="uts" setup>
	const value = ref<string>('')
	const pwd = ref<string>('')
</script>
```

**更多演示请下载 demo 查看**

## 布局与标签

`direction` 切换水平/垂直布局：horizontal 标签在左（默认），vertical 标签在上。`label-align` 控制标签文字水平对齐，`label-justify` 控制标签在容器内竖向对齐（top / center / bottom），`label-width` 与 `column-gap` 控制标签宽度与间距。

```vue
<template>
	<sn-input-field v-model="valueV" direction="vertical" label="商品名称" placeholder="请输入商品名称" clearable />
	<sn-input-field v-model="valueR" label="标签靠右" label-align="right" label-width="80px" placeholder="标签靠右" />
</template>

<script lang="uts" setup>
	const valueV = ref<string>('')
	const valueR = ref<string>('')
</script>
```

## 配合 sn-form 使用

设置 `field` 与 `rule` 后直接参与 `sn-form` 整表校验，校验失败信息通过 `error` 属性展示。

```vue
<template>
	<sn-form ref="formRef" v-model="formData">
		<sn-input-field field="username" :rule="userRule" v-model="(formData['username'] as string)" label="用户名" :error="getFieldError('username')" placeholder="4-16 位字母数字下划线" clearable />
		<sn-input-field field="phone" :rule="phoneRule" v-model="(formData['phone'] as string)" label="手机号" :error="getFieldError('phone')" type="number" :maxlength="11" clearable />
	</sn-form>
	<sn-button text="提交" type="primary" custom-style="margin-top:16px;" @click="onFormSubmit" />
</template>

<script lang="uts" setup>
	import type { SnFormItemRule, SnFormItemVerifyResult, SnFormValidResult } from '@/uni_modules/sinle-ui'

	const formRef = ref<SnInputFieldComponentPublicInstance | null>(null)
	const formData = ref<UTSJSONObject>({
		username: '',
		phone: ''
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

	const userRule = ref<SnFormItemRule>({
		pattern: /^[a-zA-Z0-9_]{4,16}$/,
		message: '用户名需为 4-16 位字母、数字或下划线'
	} as SnFormItemRule)

	const phoneRule = ref<SnFormItemRule>({
		type: 'phone',
		required: true,
		message: '请填写正确的手机号'
	} as SnFormItemRule)

	function onFormSubmit(): void {
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

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| direction | 布局方向，horizontal 标签在左、vertical 标签在上 | String | `horizontal` | `horizontal` \| `vertical` |
| label | 标签文字 | String | `''` | - |
| labelSize | 标签字体大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| labelColor | 标签颜色 | String | `''`（默认主题 title 色） | - |
| labelWidth | 横向布局时标签宽度 | String \| Number | `''`（默认 80px × 间距乘数） | - |
| labelAlign | 标签文字水平对齐 | String | `left` | `left` \| `right` \| `center` |
| labelJustify | 标签在容器内的竖向对齐 | String | `top` | `top` \| `center` \| `bottom` |
| required | 是否必填，标签后追加红色 `*` 标记 | Boolean | `false` | `true` \| `false` |
| error | 错误提示文字（存在 error 插槽时不显示） | String | `''` | - |
| errorSize | 错误文字大小 | String \| Number | `''`（默认 12px × 字体乘数） | - |
| errorColor | 错误文字颜色 | String | `''`（默认主题 error 色） | - |
| columnGap | 标签与内容的间距 | String \| Number | `''`（默认 12px × 间距乘数） | - |
| name | 表单的控件名称，作为键值对的一部分与表单一同提交 | String | `''` | - |
| field | 表单字段名，非空且位于 sn-form 内时注册参与整表校验 | String | `''` | - |
| rule | 校验规则，配合 field 使用 | [[SnFormItemRule]] | `{}` | - |
| type | 输入框类型 | String | `text` | `text` \| `number` \| `digit` \| `tel` \| `idcard` \| `nickname` |
| password | 是否密码类型，为 true 时右侧显示明文/密文切换按钮 | Boolean | `false` | `true` \| `false` |
| placeholder | 输入框为空时的占位符 | String | `''` | - |
| placeholderStyle | 占位符内联样式 | String | `''` | - |
| placeholderClass | 占位符外部类 | String | `''` | - |
| maxlength | 最大输入长度，`-1` 表示不限制 | String \| Number | `-1` | - |
| focus | 获取焦点 | Boolean | `false` | `true` \| `false` |
| autoFocus | 自动获取焦点，与 `focus` 相比只在首次生效 | Boolean | `false` | `true` \| `false` |
| cursor | 指定聚焦时的光标位置，`-1` 表示不指定 | String \| Number | `-1` | - |
| cursorColor | 光标颜色 | String | `''`（默认主题 primary 色） | - |
| cursorSpacing | 光标与键盘的距离（px） | String \| Number | `0` | - |
| selectionStart | 光标起始位置，自动聚焦时有效，需与 `selectionEnd` 搭配 | String \| Number | `-1` | - |
| selectionEnd | 光标结束位置，自动聚焦时有效，需与 `selectionStart` 搭配 | String \| Number | `-1` | - |
| confirmType | 键盘右下角按钮的文字 | String | `done` | `send` \| `search` \| `next` \| `go` \| `done` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | Boolean | `false` | `true` \| `false` |
| holdKeyboard | 聚焦时点击页面不收起键盘 | Boolean | `false` | `true` \| `false` |
| adjustPosition | 键盘弹起时是否自动上推页面 | Boolean | `true` | `true` \| `false` |
| controlled | 是否为受控属性（原生 input 的 controlled） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用，禁用后不可输入且背景、文字使用禁用配色 | Boolean | `false` | `true` \| `false` |
| readonly | 是否只读，只读时颜色不变 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载中，输入区右侧显示加载指示器（延迟 100ms 显示避免闪烁） | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部类 | String | `''` | - |
| loadingStyle | 加载指示器样式 | UTSJSONObject \| String | `''` | - |
| clearable | 是否显示清除按钮（有内容且非禁用/只读时显示，点击清空） | Boolean | `false` | `true` \| `false` |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `false` | `true` \| `false` |
| borderColor | 边框颜色 | String | `''`（默认透明） | - |
| activeBorderColor | 聚焦激活时的边框颜色 | String | `''`（默认主题 primary 色） | - |
| bgColor | 背景颜色 | String | `''`（默认主题 front 色） | - |
| activeBgColor | 聚焦时的背景颜色 | String | `''`（默认主题 front 色） | - |
| disabledBgColor | 禁用时的背景颜色 | String | `''`（默认主题 disabled 色） | - |
| textColor | 输入文字颜色 | String | `''`（默认主题 text 色） | - |
| disabledTextColor | 禁用时的文字颜色 | String | `''`（默认主题 disabledText 色） | - |
| iconColor | 前后置图标颜色 | String | `''`（默认主题 text 色） | - |
| borderRadius | 圆角大小 | String \| Number | `0px` | - |
| borderWidth | 边框宽度 | String \| Number | `2` | - |
| padding | 内边距 | String | `10px 13px` | - |
| textSize | 输入文字大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| textFont | 输入文字字体 | String | `''` | - |
| align | 输入文字对齐方式 | String | `left` | `left` \| `center` \| `right` |
| prefixIcon | 前置图标名称，存在 prefix 插槽时不显示 | String | `''` | - |
| suffixIcon | 后置图标名称，存在 suffix 插槽时不显示 | String | `''` | - |
| iconSize | 前后置图标大小 | String \| Number | `''`（默认 16px × 字体乘数） | - |
| labelStyle | 标签节点自定义样式 | UTSJSONObject \| String | `''` | - |
| labelClass | 标签节点外部类 | String | `''` | - |
| errorStyle | 错误节点自定义样式 | UTSJSONObject \| String | `''` | - |
| errorClass | 错误节点外部类 | String | `''` | - |
| inputStyle | 自定义输入框本体样式 | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| prefixIconStyle | 自定义前置图标样式 | UTSJSONObject \| String | `''` | - |
| prefixIconClass | 前置图标的外部类 | String | `''` | - |
| suffixIconStyle | 自定义后置图标样式 | UTSJSONObject \| String | `''` | - |
| suffixIconClass | 后置图标的外部类 | String | `''` | - |

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

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| input | (event: UniInputEvent) => Void | 键盘输入时触发，`event.detail = { value, cursor }` |
| focus | (event: UniInputFocusEvent) => Void | 输入框聚焦时触发 |
| blur | (event: UniInputBlurEvent) => Void | 输入框失去焦点时触发 |
| confirm | (event: UniInputConfirmEvent) => Void | 点击键盘右下角按钮时触发 |
| keyboardheightchange | (event: UniInputKeyboardHeightChangeEvent) => Void | 键盘高度变化时触发 |
| prefix-click | () => Void | 点击前置图标时触发 |
| suffix-click | () => Void | 点击后置图标时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| verify | (value: any, callback: (res: SnFormItemVerifyResult) => Void) | - | 按 rule 校验当前表单项并回调结果；一般由 sn-form 自动调用，无需手动调用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 自定义标签内容，替换 label 属性文字 |
| prefix | 自定义前置内容，使用后前置图标不显示 |
| suffix | 自定义后置内容，使用后后置图标不显示 |
| error | 自定义错误提示内容，替换 error 属性文字 |

<DemoPhone name="sn-input-field" />
