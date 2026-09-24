# Mention  提及输入框

## 基础用法

- 在 `sn-input` 基础上扩展的 @ 提及输入框，继承其全部属性与事件。
- 输入提及符号（默认 `@`，可通过 `mentionChar` 自定义）时触发 `mention` 事件，此时通常收起键盘并弹出选择面板。
- 在面板中选中后调用 `insertMention(name)` 方法，自动在提及符号处插入 `@name ` 标签并重新聚焦。
- 在标签后按退格键会整段删除标签并触发 `removemention` 事件；`beforeRemove` 可校验标签是否允许删除。

```vue
<template>
	<sn-mention ref="mentionRef" v-model="text" placeholder="输入 @ 选择好友" @mention="onMention"
		@removemention="onRemove"></sn-mention>
</template>

<script lang="uts" setup>
const text = ref<string>('')
const mentionRef = ref<SnMentionComponentPublicInstance | null>(null)

function onMention(): void {
	uni.hideKeyboard()
	openFriendPanel()
}

function onRemove(tag: string): void {
	console.log('已删除标签：@' + tag)
}

function selectFriend(name: string): void {
	mentionRef.value?.$callMethod('insertMention', name)
}
</script>
```

**更多演示请下载 demo 查看**

## 拦截标签删除

`beforeRemove` 返回 false 时，退格仅按普通字符删除，不触发 `removemention`；返回 true 时整段删除标签。

```vue
<template>
	<sn-mention ref="mentionRef" v-model="text" :before-remove="beforeRemove" @removemention="onRemove"></sn-mention>
</template>

<script lang="uts" setup>
const text = ref<string>('')
const mentionRef = ref<SnMentionComponentPublicInstance | null>(null)

function beforeRemove(tag: string): boolean {
	return isFriend(tag)
}

function onRemove(tag: string): void {
	console.log('已整段删除标签 @' + tag)
}
</script>
```

## 自定义提及符号

```vue
<template>
	<sn-mention ref="mentionRef" v-model="text" mention-char="#" placeholder="输入 # 触发话题提及"></sn-mention>
</template>

<script lang="uts" setup>
const text = ref<string>('')
const mentionRef = ref<SnMentionComponentPublicInstance | null>(null)
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| mentionChar | 触发提及的符号，设为空字符串时关闭提及功能 | String | `@` | - |
| beforeRemove | 删除标签前的校验函数，返回 false 则按普通字符删除 | ((tag: string) => boolean) \| null | `null` | - |
| name | 表单的控件名称，作为键值对的一部分与表单一同提交 | String | `''` | - |
| type | 输入框类型 | String | `text` | `text` \| `number` \| `digit` \| `tel` \| `idcard` \| `nickname` |
| password | 是否密码类型，为 true 时右侧显示明文/密文切换按钮 | Boolean | `false` | `true` \| `false` |
| placeholder | 输入框为空时的占位符 | String | `请输入内容，@选择` | - |
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
| controlled | 是否为受控属性 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用 | Boolean | `false` | `true` \| `false` |
| readonly | 是否只读 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载中，右侧显示加载指示器 | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部类 | String | `''` | - |
| loadingStyle | 加载指示器样式 | UTSJSONObject \| String | `''` | - |
| clearable | 是否显示清除按钮 | Boolean | `false` | `true` \| `false` |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `true` | `true` \| `false` |
| borderColor | 边框颜色 | String | `'$line'` | - |
| activeBorderColor | 聚焦时的边框颜色 | String | `'$line'` | - |
| bgColor | 背景颜色 | String | `'$info'` | - |
| activeBgColor | 聚焦时的背景颜色 | String | `'$info'` | - |
| disabledBgColor | 禁用时的背景颜色 | String | `$disabled` | - |
| textColor | 文本颜色 | String | `$text` | - |
| disabledTextColor | 禁用时的文本颜色 | String | `$disabledText` | - |
| iconColor | 前后置图标颜色 | String | `$text` | - |
| borderRadius | 圆角大小 | String \| Number | `$8` | - |
| borderWidth | 边框宽度 | String \| Number | `1px` | - |
| padding | 内边距 | String | `8px 12px` | - |
| textSize | 文本字体大小 | String \| Number | `$14` | - |
| textFont | 文本字体 | String | `''` | - |
| align | 文本对齐方式 | String | `left` | `left` \| `center` \| `right` |
| prefixIcon | 前置图标名称，存在 prefix 插槽时不显示 | String | `''` | - |
| suffixIcon | 后置图标名称，存在 suffix 插槽时不显示 | String | `''` | - |
| iconSize | 图标大小 | String \| Number | `$16` | - |
| containStyle | 自定义内部输入框容器样式 | UTSJSONObject \| String | `''` | - |
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
| mention | () => Void | 输入提及符号时触发，通常在此收起键盘并打开选择面板 |
| removemention | (tag: string) => Void | 整段删除一个提及标签时触发，参数为标签内容（不含提及符号） |
| change | (value: string) => Void | 绑定值变化时触发，参数为当前值 |
| input | (event: UniInputEvent) => Void | 键盘输入时触发 |
| focus | (event: UniInputFocusEvent) => Void | 输入框聚焦时触发 |
| blur | (event: UniInputBlurEvent) => Void | 输入框失去焦点时触发 |
| confirm | (event: UniInputConfirmEvent) => Void | 点击键盘右下角按钮时触发 |
| keyboardheightchange | (event: UniInputKeyboardHeightChangeEvent) => Void | 键盘高度变化时触发 |
| prefix-click | () => Void | 点击前置图标时触发 |
| suffix-click | () => Void | 点击后置图标时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| setFocus | val: boolean | - | 设置输入框聚焦状态 |
| insertMention | name: string | - | 在提及符号处插入 `@name` 标签并重新聚焦，一般由选择面板选中后调用 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| prefix | 自定义前置内容，透传给内部输入框，使用后前置图标不显示 |
| suffix | 自定义后置内容，透传给内部输入框，使用后后置图标不显示 |

<DemoPhone name="sn-mention" />
