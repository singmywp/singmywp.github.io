# TextareaField  标签文本域

## 基础用法

- 自带标签与多行文本域的字段组件，相当于"标签 + textarea + 错误提示"的一体化封装。
- 默认垂直布局（标签在上），`maxlength` 生效时右下角自动显示字数统计胶囊；`auto-height` 可由内容自动撑开高度。
- 放在 `sn-form` 内设置 `field` + `rule` 即参与整表校验，无需再包一层 `sn-form-field`。
- 尺寸与颜色属性支持 `$` 简写（如 `height="$120"`、`label-color="$primaryDark"`），随风格乘数与主题自动缩放换色。

```vue
<template>
	<sn-textarea-field v-model="value" label="商品评价" placeholder="说说你的使用感受" />
	<sn-textarea-field v-model="comment" label="评论" :maxlength="50" placeholder="最多 50 字" />
</template>

<script lang="uts" setup>
	const value = ref<string>('')
	const comment = ref<string>('')
</script>
```

**更多演示请下载 demo 查看**

## 高度与字数统计

默认高度 `100px`，`height` 可自定义；设置 `auto-height` 后高度由内容撑开（`height` 失效）。`maxlength` 限制最大字数并在右下角显示"当前字数/最大字数"计数器，可用 `counter` 插槽或 `counterSize` / `counterColor` / `counterBgColor` 等属性定制。

```vue
<template>
	<sn-textarea-field v-model="value1" label="动态高度" auto-height placeholder="输入多行试试，自动撑开" />
	<sn-textarea-field v-model="value2" direction="horizontal" label="吐槽" height="80px" :maxlength="200" placeholder="横向标签在左" />
</template>

<script lang="uts" setup>
	const value1 = ref<string>('')
	const value2 = ref<string>('')
</script>
```

## 配合 sn-form 使用

设置 `field` 与 `rule` 后直接参与 `sn-form` 整表校验，校验失败信息通过 `error` 属性展示。

```vue
<template>
	<sn-form ref="formRef" v-model="formData">
		<sn-textarea-field field="remark" :rule="remarkRule" v-model="(formData['remark'] as string)" label="备注" :error="getFieldError('remark')" :maxlength="100" placeholder="备注最多 100 字" />
	</sn-form>
	<sn-button text="提交" type="primary" custom-style="margin-top:16px;" @click="onFormSubmit" />
</template>

<script lang="uts" setup>
	import type { SnFormItemRule, SnFormItemVerifyResult, SnFormValidResult } from '@/uni_modules/sinle-ui'

	const formRef = ref<SnTextareaFieldComponentPublicInstance | null>(null)
	const formData = ref<UTSJSONObject>({
		remark: ''
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

	const remarkRule = ref<SnFormItemRule>({
		max: 100,
		message: '备注最多 100 字'
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
| direction | 布局方向，horizontal 标签在左、vertical 标签在上 | String | `vertical` | `horizontal` \| `vertical` |
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
| height | 文本域高度（开启 auto-height 后失效） | String \| Number | `100px` | - |
| placeholder | 文本域为空时的占位符 | String | `''` | - |
| placeholderStyle | 占位符内联样式 | String | `''` | - |
| placeholderClass | 占位符外部类 | String | `''` | - |
| maxlength | 最大输入长度，`-1` 表示不限制（生效时显示字数统计） | String \| Number | `-1` | - |
| focus | 获取焦点 | Boolean | `false` | `true` \| `false` |
| autoFocus | 自动获取焦点，与 `focus` 相比只在首次生效 | Boolean | `false` | `true` \| `false` |
| autoHeight | 是否自动增高，由内容撑开高度 | Boolean | `false` | `true` \| `false` |
| cursor | 指定聚焦时的光标位置，`-1` 表示不指定 | String \| Number | `-1` | - |
| cursorColor | 光标颜色 | String | `''` | - |
| cursorSpacing | 光标与键盘的距离（px） | String \| Number | `0` | - |
| selectionStart | 光标起始位置，自动聚焦时有效，需与 `selectionEnd` 搭配 | String \| Number | `-1` | - |
| selectionEnd | 光标结束位置，自动聚焦时有效，需与 `selectionStart` 搭配 | String \| Number | `-1` | - |
| confirmType | 键盘右下角按钮的文字 | String | `return` | - |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | Boolean | `false` | `true` \| `false` |
| holdKeyboard | 聚焦时点击页面不收起键盘 | Boolean | `false` | `true` \| `false` |
| adjustPosition | 键盘弹起时是否自动上推页面 | Boolean | `true` | `true` \| `false` |
| inputmode | 输入模式，影响键盘类型 | String | `text` | - |
| fixed | 是否为固定定位区域内的文本域（如 popup 内使用需开启） | Boolean | `false` | `true` \| `false` |
| showConfirmBar | 是否显示键盘上方的完成栏 | Boolean | `true` | `true` \| `false` |
| disabled | 是否禁用，禁用后不可输入且背景、文字使用禁用配色 | Boolean | `false` | `true` \| `false` |
| readonly | 是否只读，只读时颜色不变 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载中，右上角显示加载指示器（延迟 100ms 显示避免闪烁） | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部类 | String | `''` | - |
| loadingStyle | 加载指示器样式 | UTSJSONObject \| String | `''` | - |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `false` | `true` \| `false` |
| borderColor | 边框颜色 | String | `''`（默认透明） | - |
| activeBorderColor | 聚焦激活时的边框颜色 | String | `''`（默认主题 primary 色） | - |
| bgColor | 背景颜色 | String | `''`（默认主题 front 色） | - |
| activeBgColor | 聚焦时的背景颜色 | String | `''`（默认主题 front 色） | - |
| disabledBgColor | 禁用时的背景颜色 | String | `''`（默认主题 disabled 色） | - |
| textColor | 输入文字颜色 | String | `''`（默认主题 text 色） | - |
| disabledTextColor | 禁用时的文字颜色 | String | `''`（默认主题 disabledText 色） | - |
| borderRadius | 圆角大小 | String \| Number | `''`（默认 8px × 圆角乘数） | - |
| borderWidth | 边框宽度 | String \| Number | `2` | - |
| padding | 内边距 | String | `8px 13px` | - |
| textSize | 输入文字大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| textFont | 输入文字字体 | String | `''` | - |
| align | 输入文字对齐方式 | String | `left` | `left` \| `center` \| `right` |
| counterSize | 字数统计文字大小 | String \| Number | `''`（默认 12px × 字体乘数） | - |
| counterColor | 字数统计文字颜色 | String | `''`（默认主题 text 色） | - |
| counterBgColor | 字数统计背景颜色 | String | `''`（默认主题 info 色） | - |
| labelStyle | 标签节点自定义样式 | UTSJSONObject \| String | `''` | - |
| labelClass | 标签节点外部类 | String | `''` | - |
| errorStyle | 错误节点自定义样式 | UTSJSONObject \| String | `''` | - |
| errorClass | 错误节点外部类 | String | `''` | - |
| inputStyle | 自定义文本域本体样式 | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| counterClass | 字数统计节点外部类 | String | `''` | - |
| counterStyle | 字数统计节点自定义样式 | UTSJSONObject \| String | `''` | - |

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
| focus | (event: UniTextareaFocusEvent) => Void | 文本域聚焦时触发 |
| blur | (event: UniTextareaBlurEvent) => Void | 文本域失去焦点时触发 |
| confirm | (event: UniInputConfirmEvent) => Void | 点击键盘右下角按钮时触发 |
| linechange | (event: UniTextareaLineChangeEvent) => Void | 输入行数变化时触发 |
| keyboardheightchange | (event: UniInputKeyboardHeightChangeEvent) => Void | 键盘高度变化时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| verify | (value: any, callback: (res: SnFormItemVerifyResult) => Void) | - | 按 rule 校验当前表单项并回调结果；一般由 sn-form 自动调用，无需手动调用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| label | 自定义标签内容，替换 label 属性文字 |
| counter | 自定义字数统计内容，替换默认的计数胶囊 |
| error | 自定义错误提示内容，替换 error 属性文字 |

<DemoPhone name="sn-textarea-field" />
