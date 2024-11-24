# Input 输入框

## 基础用法

- 普普通通的输入框，在内置 `input` 组件上进一步扩展

```vue
<template>
	<sn-input v-model="value"></sn-input>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数            | 说明                               | 类型            | 默认值    | 可选值                                                   |
| --------------- | ---------------------------------- | --------------- | --------- | -------------------------------------------------------- |
| vModel     | 输入框文本内容                   | String      | -         | -                                                        |
| name | 表单的控件名称，作为键值对的一部分与表单(form组件)一同提交。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String | - | - |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 激活状态下是否显示边框 | Boolean | `true` | `true` \| `false` |
| borderColor | 输入框边框颜色 | String | `$line` | - |
| bgColor | 输入框背景颜色 | String | `$front` | - |
| textColor | 输入框文本颜色 | String | `$text` | - |
| iconColor | 输入框图标颜色 | String | `$text` | - |
| activeBorderColor | 激活状态下输入框边框颜色 | String | `$primary` | - |
| activeBgColor         | 激活状态下输入框背景颜色                                     | String        | `$front`        | -                                                            |
| disabledBgColor       | 禁用状态下输入框背景颜色                                     | String        | `$disabled`     | -                                                            |
| disabledTextColor     | 禁用状态下输入框文本颜色                                     | String        | `$disabledText` | -                                                            |
| cursor                | 指定focus时的光标位置。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Number        | `0`             | -                                                            |
| cursorColor           | 指定光标颜色                                                 | String        | -               | -                                                            |
| cursorSpacing         | 指定光标与键盘的距离，单位 `px` 。取 input 距离底部的距离和 `cursorSpacing` 指定的距离的最小值作为光标与键盘的距离。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Number        | `0`             | -                                                            |
| selectionStart        | 光标起始位置，自动聚集时有效，需与 `selectionEnd` 搭配使用。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Number        | `-1`            | -                                                            |
| selectionEnd          | 光标结束位置，自动聚集时有效，需与 `selectionStart` 搭配使用。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Number        | `-1`            | -                                                            |
| placeholder           | 输入框为空时占位符。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| placeholderStyle      | 指定 placeholder 的样式。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| placeholderClass      | 指定 placeholder 的样式类，目前仅支持color,font-size和font-weight。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| type                  | input的类型。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`          | `text` \|` number` \|` digit` \|`tel`                        |
| password              | 是否是密码类型                                               | Boolean       | `false`         | `true` \| `false`                                            |
| confirmHold           | 点击键盘右下角按钮时是否保持键盘不收起。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| holdKeyboard          | focus时，点击页面的时候不收起键盘。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| adjustPosition        | 键盘弹起时，是否自动上推页面。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `true`          | `true` \| `false`                                            |
| focus                 | 获取焦点。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| loading               | 是否加载中                                                   | Boolean       | `false`         | `true` \| `false`                                            |
| disabled              | 是否禁用输入框                                               | Boolean       | `false`         | `true` \| `false`                                            |
| readonly              | 是否只读（只读与禁用的区别是：禁用时除不可点击外，颜色也有所变化） | Boolean       | `false`         | `true` \| `false`                                            |
| confirmType           | 设置键盘右下角按钮的文字，仅在 type为text 时生效。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`          | `send` \|` search` \|` next` \|` go` \|`done`                |
| inputmode             | 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。在符合条件的高版本webview里，uni-app的 web 和 app-vue 平台中可使用本属性。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`          | `none` \|` text` \|` decimal` \|` numeric` \|` tel` \|` search` \|` email` \|`url` |
| autoFocus             | 自动获取焦点，与`focus`属性对比，此属性只会首次生效。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| clearable             | 是否显示清除按钮                                             | Boolean       | `false`         | `true` \| `false`                                            |
| borderRadius          | 输入框圆角大小                                               | String        | `$small`        | -                                                            |
| borderWidth           | 输入框边框宽度                                               | String        | `2px`           | -                                                            |
| prefixIcon            | 输入框前置图标                                               | String        | -               | -                                                            |
| suffixIcon            | 输入框后置图标                                               | String        | -               | -                                                            |
| iconSize              | 输入框图标字体大小                                           | String        | `$4`            | -                                                            |
| padding               | 输入框内边距                                                 | String        | `8px 13px`      | -                                                            |
| maxlength             | 最大输入长度，0和正数为合法值，非法值的时候不限制最大长度    | Number        | `-1`            | -                                                            |
| textSize              | 输入框文本字体大小                                           | String        | `$2`            | -                                                            |
| textFont              | 输入框文本字体                                               | String        | -               | -                                                            |
| align                 | 输入框文本对齐方式                                           | String        | `left`        | `left` \| `right` \| `center`                       |
| customStyle     | 自定义输入框样式                 | UTSJSONObject | `{}`      | -                                                        |
| customPrefixIconStyle | 自定义输入框前置图标样式 | UTSJSONObject | `{}` | - |
| customSuffixIconStyle | 自定义输入框后置图标样式 | UTSJSONObject | `{}` | - |
| customContainStyle | 自定义输入框容器样式 | UTSJSONObject | `{}` | - |

## 插槽

| 名称   | 说明                         |
| ------ | ---------------------------- |
| prefix | 替换输入框内部原有的前置图标 |
| suffix | 替换输入框内部原有的后置图标 |

## 事件

| 事件名               | 类型                                              | 说明                                                         |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| input                | (event: UniInputEvent)=>Void                    | 当键盘输入时，触发input事件，`event.detail = {value, cursor}`，处理函数可以直接 return 一个字符串，将替换输入框的内容。 |
| focus                | (event: UniInputFocusEven) => Void              | 输入框聚焦时触发，`event.detail = { value, height }`，height 为键盘高度 |
| blur                 | (event : UniInputBlurEvent)=>Void               | 输入框失去焦点时触发，`event.detail = {value: value}`        |
| keyboardheightchange | (event:UniInputKeyboardHeightChangeEvent)=>Void | 键盘高度发生变化的时候触发此事件，`event.detail = {height: height, duration: duration}` |
| confirm              | (event : UniInputConfirmEvent)=>Void            | 点击完成按钮时触发，`event.detail = {value: value}`          |
| suffix-click         | ()=>Void                                        | 点击后置图标时触发                                           |
| prefix-click         | ()=>Void                                        | 点击前置图标时触发                                           |

<DemoPhone name="sn-input" />