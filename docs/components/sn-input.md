# Input  输入框

> [查看 sn-input 的 2.0 版本差异](/differences/components/sn-input)

## 基础用法

- 基于 `input` 组件封装的输入框，通过 `v-model` 双向绑定输入内容。
- 内置聚焦激活态（边框/背景自动切换）、禁用与只读配色、加载状态、清除按钮、密码明文/密文切换。
- 通过 `prefixIcon` / `suffixIcon` 设置前后置图标，点击时触发 `prefix-click` / `suffix-click` 事件；也可用插槽自定义前后缀内容。
- 尺寸与颜色属性支持 `$` 简写（如 `border-radius="$16"`、`bg-color="$info"`），随风格乘数与主题自动缩放换色。

```vue
<template>
	<sn-input v-model="value" placeholder="请输入内容"></sn-input>
</template>

<script lang="uts" setup>
const value = ref<string>('')
</script>
```

**更多演示请下载 demo 查看**

## 密码输入

设置 `password` 后输入内容以密文显示，右侧自动出现明文/密文切换按钮，点击即可切换显示。

```vue
<template>
	<sn-input v-model="pwd" password placeholder="请输入密码"></sn-input>
</template>

<script lang="uts" setup>
const pwd = ref<string>('')
</script>
```

## 自定义样式

通过 `customStyle` 定制根容器，`inputStyle` 内联作用于输入框本体，前后图标可用 `prefixIconClass` / `suffixIconClass`（外部类）或 `prefixIconStyle` / `suffixIconStyle`（内联样式）定制。

```vue
<template>
	<sn-input v-model="value" input-style="font-size: 18px; font-weight: bold;"
		prefix-icon="search-line" prefix-icon-style="color: #f56c6c;"
		placeholder="大字加粗 + 红色图标"></sn-input>
</template>

<script lang="uts" setup>
const value = ref<string>('')
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| name | 表单的控件名称，作为键值对的一部分与表单一同提交 | String | `''` | - |
| type | 输入框类型 | String | `text` | `text` \| `number` \| `digit` \| `tel` \| `idcard` \| `nickname` |
| password | 是否密码类型，为 true 时右侧显示明文/密文切换按钮 | Boolean | `false` | `true` \| `false` |
| placeholder | 输入框为空时的占位符 | String | `''` | - |
| placeholderStyle | 占位符内联样式 | String | `''` | - |
| placeholderClass | 占位符外部类 | String | `''` | - |
| maxlength | 最大输入长度，`-1` 表示不限制 | String \| Number | `-1` | - |
| focus | 获取焦点 | Boolean | `false` | `true` \| `false` |
| autoFocus | 自动获取焦点，与 `focus` 相比只在首次生效 | Boolean | `false` | `true` \| `false` |
| cursor | 指定聚焦时的光标位置，`-1` 表示不指定 | String \| Number | `-1` | - |
| cursorColor | 光标颜色 | String | `$primary` | - |
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
| loading | 是否加载中，右侧显示加载指示器（延迟 100ms 显示避免闪烁） | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部类 | String | `''` | - |
| loadingStyle | 加载指示器样式 | UTSJSONObject \| String | `''` | - |
| clearable | 是否显示清除按钮（有内容且非禁用/只读时显示，点击清空） | Boolean | `false` | `true` \| `false` |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `true` | `true` \| `false` |
| borderColor | 边框颜色 | String | `'$line'` | - |
| activeBorderColor | 聚焦时的边框颜色 | String | `'$line'` | - |
| bgColor | 背景颜色 | String | `$info` | - |
| activeBgColor | 聚焦时的背景颜色 | String | `$info` | - |
| disabledBgColor | 禁用时的背景颜色 | String | `$disabled` | - |
| textColor | 文本颜色 | String | `$text` | - |
| disabledTextColor | 禁用时的文本颜色 | String | `$disabledText` | - |
| iconColor | 前后置图标颜色 | String | `$text` | - |
| borderRadius | 圆角大小 | String \| Number | `$8` | - |
| borderWidth | 边框宽度 | String \| Number | `1px` | - |
| padding | 内边距 | String | `8px 13px` | - |
| textSize | 文本字体大小 | String \| Number | `$14` | - |
| textFont | 文本字体 | String | `''` | - |
| align | 文本对齐方式 | String | `left` | `left` \| `center` \| `right` |
| prefixIcon | 前置图标名称，存在 prefix 插槽时不显示 | String | `''` | - |
| suffixIcon | 后置图标名称，存在 suffix 插槽时不显示 | String | `''` | - |
| iconSize | 图标大小 | String \| Number | `$16` | - |
| inputStyle | 自定义输入框本体样式 | UTSJSONObject \| String | `''` | - |
| inputClass | 输入框本体的外部类 | String | `''` | - |
| prefixIconStyle | 自定义前置图标样式 | UTSJSONObject \| String | `''` | - |
| prefixIconClass | 前置图标的外部类 | String | `''` | - |
| suffixIconStyle | 自定义后置图标样式 | UTSJSONObject \| String | `''` | - |
| suffixIconClass | 后置图标的外部类 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |

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

## 插槽

| 名称 | 说明 |
| --- | --- |
| prefix | 自定义前置内容，使用后前置图标不显示 |
| suffix | 自定义后置内容，使用后后置图标不显示 |

<DemoPhone name="sn-input" />
