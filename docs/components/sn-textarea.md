# Textarea  文本域

> [查看 sn-textarea 的 2.0 版本差异](/differences/components/sn-textarea)

## 基础用法

- 基于 `textarea` 组件封装的多行文本输入域，通过 `v-model` 双向绑定输入内容。
- 通过 `height` 控制高度，`autoHeight` 开启后高度随内容自动增高。
- 内置聚焦激活态（边框/背景自动切换）、禁用与只读配色、加载状态、字数计数器。
- 设置 `maxlength` 后右下角显示 `已输入/最大字数` 计数器，可用 `counter` 插槽自定义。

```vue
<template>
	<sn-textarea v-model="text" :maxlength="50" placeholder="请输入内容"></sn-textarea>
</template>

<script lang="uts" setup>
const text = ref<string>('')
</script>
```

**更多演示请下载 demo 查看**

## 自动增高

设置 `autoHeight` 后初始高度由内容撑开，输入多行时自动增高，`height` 不再生效。

```vue
<template>
	<sn-textarea v-model="text" auto-height placeholder="自动增高"></sn-textarea>
</template>

<script lang="uts" setup>
const text = ref<string>('')
</script>
```

## 自定义样式

通过 `customStyle` 定制根容器，`inputStyle` 内联作用于文本域本体，计数器可用 `counterClass` / `counterStyle` 定制。

```vue
<template>
	<sn-textarea v-model="text" :maxlength="20" input-style="font-size: 18px; font-weight: bold;"
		counter-style="background-color: #ff6600; color: #fff;"
		placeholder="大字加粗 + 橙色计数器"></sn-textarea>
</template>

<script lang="uts" setup>
const text = ref<string>('')
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| name | 表单的控件名称，作为键值对的一部分与表单一同提交 | String | `''` | - |
| height | 文本域高度，`autoHeight` 开启时不生效 | String \| Number | `100px` | - |
| placeholder | 输入框为空时的占位符 | String | `''` | - |
| placeholderStyle | 占位符内联样式 | String | `''` | - |
| placeholderClass | 占位符外部类 | String | `''` | - |
| maxlength | 最大输入长度，`-1` 表示不限制；设置后右下角显示字数计数器 | String \| Number | `-1` | - |
| focus | 获取焦点 | Boolean | `false` | `true` \| `false` |
| autoFocus | 自动获取焦点，与 `focus` 相比只在首次生效 | Boolean | `false` | `true` \| `false` |
| autoHeight | 是否自动增高，开启后 `height` 不生效 | Boolean | `false` | `true` \| `false` |
| cursor | 指定聚焦时的光标位置，`-1` 表示不指定 | String \| Number | `-1` | - |
| cursorColor | 光标颜色 | String | `''` | - |
| cursorSpacing | 光标与键盘的距离（px） | String \| Number | `0` | - |
| selectionStart | 光标起始位置，自动聚焦时有效，需与 `selectionEnd` 搭配 | String \| Number | `-1` | - |
| selectionEnd | 光标结束位置，自动聚焦时有效，需与 `selectionStart` 搭配 | String \| Number | `-1` | - |
| confirmType | 键盘右下角按钮的文字 | String | `return` | `send` \| `search` \| `next` \| `go` \| `done` \| `return` |
| confirmHold | 点击键盘右下角按钮时是否保持键盘不收起 | Boolean | `false` | `true` \| `false` |
| holdKeyboard | 聚焦时点击页面不收起键盘 | Boolean | `false` | `true` \| `false` |
| adjustPosition | 键盘弹起时是否自动上推页面 | Boolean | `true` | `true` \| `false` |
| inputmode | 输入数据类型提示，提供键盘类型提示 | String | `text` | `none` \| `text` \| `decimal` \| `numeric` \| `tel` \| `search` \| `email` \| `url` |
| fixed | 是否为固定定位元素（textarea 原生属性，用于在固定区域内使用） | Boolean | `false` | `true` \| `false` |
| showConfirmBar | 是否显示键盘上方"完成"栏 | Boolean | `true` | `true` \| `false` |
| disabled | 是否禁用，禁用后不可输入且背景、文字使用禁用配色 | Boolean | `false` | `true` \| `false` |
| readonly | 是否只读，只读时颜色不变 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载中，右上角显示加载指示器（延迟 100ms 显示避免闪烁） | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部类 | String | `''` | - |
| loadingStyle | 加载指示器样式 | UTSJSONObject \| String | `''` | - |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| activeBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `true` | `true` \| `false` |
| borderColor | 边框颜色 | String | `'$line'` | - |
| activeBorderColor | 聚焦时的边框颜色 | String | `'$line'` | - |
| bgColor | 背景颜色 | String | `''`（默认主题 info 色） | - |
| activeBgColor | 聚焦时的背景颜色 | String | `''`（默认主题 info 色） | - |
| disabledBgColor | 禁用时的背景颜色 | String | `''`（默认主题 disabled 色） | - |
| textColor | 文本颜色 | String | `''`（默认主题 text 色，禁用时用 disabledText 色） | - |
| disabledTextColor | 禁用时的文本颜色 | String | `''`（默认主题 disabledText 色） | - |
| borderRadius | 圆角大小 | String \| Number | `''`（默认 8px × 圆角乘数） | - |
| borderWidth | 边框宽度 | String \| Number | `1px` | - |
| padding | 内边距 | String | `8px 13px` | - |
| textSize | 文本字体大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| textFont | 文本字体 | String | `''` | - |
| align | 文本对齐方式 | String | `left` | `left` \| `center` \| `right` |
| counterSize | 计数器字体大小 | String \| Number | `''`（默认 12px × 字体乘数） | - |
| counterColor | 计数器文本颜色 | String | `''`（默认主题 text 色） | - |
| counterBgColor | 计数器背景颜色 | String | `''`（默认主题 info 色） | - |
| inputStyle | 自定义文本域本体样式 | UTSJSONObject \| String | `''` | - |
| inputClass | 文本域本体的外部类 | String | `''` | - |
| counterClass | 计数器外部类 | String | `''` | - |
| counterStyle | 自定义计数器样式 | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| input | (event: UniInputEvent) => Void | 键盘输入时触发，`event.detail = { value, cursor }` |
| focus | (event: UniTextareaFocusEvent) => Void | 输入框聚焦时触发 |
| blur | (event: UniTextareaBlurEvent) => Void | 输入框失去焦点时触发 |
| confirm | (event: UniInputConfirmEvent) => Void | 点击键盘右下角按钮时触发 |
| linechange | (event: UniTextareaLineChangeEvent) => Void | 输入框行数变化时触发，`event.detail = { height, heightRpx, lineCount }` |
| keyboardheightchange | (event: UniInputKeyboardHeightChangeEvent) => Void | 键盘高度变化时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| counter | 替换内置的字数计数器（仅在设置了 `maxlength` 时渲染） |

<DemoPhone name="sn-textarea" />
