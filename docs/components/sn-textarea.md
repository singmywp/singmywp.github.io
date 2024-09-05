# Textarea 文本域

## 基本使用

- 用于创建一个可输入和展示多行文本的文本域。
- 支持自动高度、最大长度、禁用等功能。

```vue
<template>
	<sn-textarea v-model="text"></sn-textarea>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数               | 说明                                                         | 类型          | 默认值          | 可选值                                                       |
| ------------------ | ------------------------------------------------------------ | ------------- | --------------- | ------------------------------------------------------------ |
| vModel             | 文本域的值                                                   | String        | -               | -                                                            |
| name               | 表单的控件名称，作为键值对的一部分与表单(form组件)一同提交。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| height             | 文本域高度                                                   | String        | `100px`         | -                                                            |
| showBorder         | 是否显示边框                                                 | Boolean       | `true`          | `true` \| `false`                                            |
| borderColor        | 文本域边框颜色                                               | String        | -               | -                                                            |
| activeBorderColor  | 激活状态下的文本域边框颜色                                   | String        | -               | -                                                            |
| bgColor            | 文本域背景颜色                                               | String        | -               | -                                                            |
| activeBgColor      | 激活状态下的文本域背景颜色                                   | String        | -               | -                                                            |
| inputmode          | 是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。在符合条件的高版本webview里，uni-app的 web 和 app-vue 平台中可使用本属性。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`          | `none` \|` text` \|` decimal` \|` numeric` \|` tel` \|` search` \|` email` \|`url` |
| cursor             | 指定focus时的光标位置。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Number        | `0`             | -                                                            |
| cursorColor        | 指定光标颜色                                                 | String        | -               | -                                                            |
| cursorSpacing      | 指定光标与键盘的距离，单位 `px` 。取 input 距离底部的距离和 `cursorSpacing` 指定的距离的最小值作为光标与键盘的距离。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Number        | `0`             | -                                                            |
| selectionStart     | 光标起始位置，自动聚集时有效，需与 `selectionEnd` 搭配使用。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Number        | `-1`            | -                                                            |
| selectionEnd       | 光标结束位置，自动聚集时有效，需与 `selectionStart` 搭配使用。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Number        | `-1`            | -                                                            |
| placeholder        | 输入框为空时占位符。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| placeholderStyle   | 指定 placeholder 的样式。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| placeholderClass   | 指定 placeholder 的样式类，目前仅支持color,font-size和font-weight。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | String        | -               | -                                                            |
| autoHeight         | 是否自动增高，设置auto-height时，style.height不生效。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| confirmHold        | 点击键盘右下角按钮时是否保持键盘不收起。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| holdKeyboard       | focus时，点击页面的时候不收起键盘。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| adjustPosition     | 键盘弹起时，是否自动上推页面。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `true`          | `true` \| `false`                                            |
| activeBorder       | 是否在激活时显示边框                                         | Boolean       | `true`          | `true` \| `false`                                            |
| focus              | 是否自动获取焦点                                             | Boolean       | `false`         | `true` \| `false`                                            |
| disabled           | 是否禁用文本域                                               | Boolean       | `false`         | `true` \| `false`                                            |
| disabledTextColor  | 禁用状态下文本域文本颜色                                     | String        | `$disabledText` | -                                                            |
| disabledBgColor    | 禁用状态下文本域背景颜色                                     | String        | `$disabled`     | -                                                            |
| readonly           | 是否只读（只读与禁用的区别是：禁用时除不可点击外，颜色也有所变化） | Boolean       | `false`         | `true` \| `false`                                            |
| autoFocus          | 自动获取焦点，与`focus`属性对比，此属性只会首次生效。同 [`textarea`](https://doc.dcloud.net.cn/uni-app-x/component/textarea.html#%E5%B1%9E%E6%80%A7)。 | Boolean       | `false`         | `true` \| `false`                                            |
| borderRadius       | 文本域圆角大小                                               | String        | `$small`        | -                                                            |
| borderWidth        | 文本域边框宽度                                               | String        | `2px`           | -                                                            |
| padding            | 文本域内边距                                                 | String        | `8px 13px`      | -                                                            |
| maxlength          | 最大输入长度，0和正数为合法值，非法值的时候不限制最大长度    | Number        | `-1`            | -                                                            |
| textSize           | 文本字体大小                                                 | String        | -               | -                                                            |
| textColor          | 文本颜色                                                     | String        | -               | -                                                            |
| textFont           | 文本字体                                                     | String        | -               | -                                                            |
| align              | 文本对齐方式                                                 | String        | `left`          | `left` \| `right` \| `center`                                |
| counterSize        | 计数器字体大小                                               | String        | `$2`            | -                                                            |
| counterColor       | 计数器文本颜色                                               | String        | `$text`         | -                                                            |
| counterBgColor     | 计数器背景颜色                                               | String        | `$info`         | -                                                            |
| customCounterStyle | 自定义计数器样式                                             | UTSJSONObject | {}              | -                                                            |
| customContainStyle | 自定义容器样式                                               | UTSJSONObject | {}              | -                                                            |
| customStyle        | 自定义文本域样式                                             | UTSJSONObject | {}              | -                                                            |

## 事件

| 名称                 | 类型                                                 | 说明                                                         |
| -------------------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| input                | `(event: UniInputEvent) => void`                     | 当键盘输入时，触发 input 事件，`event.detail = {value, cursor}`， @input 处理函数的返回值并不会反映到 textarea 上 |
| confirm              | `  (event: UniInputConfirmEvent) => void`            | 点击完成时， 触发 confirm 事件，`event.detail = {value: value}` |
| blur                 | `(event: UniTextareaBlurEvent) => void `             | 输入框失去焦点时触发，`event.detail = {value, cursor}`         |
| focus                | `(event: UniTextareaFocusEvent) => void    `         | `输入框聚焦时触发，event.detail = { value, height }`，height 为键盘高度，在基础库 1.9.90 起支持 |
| keyboardheightchange | `(event: UniInputKeyboardHeightChangeEvent) => void` | 键盘高度发生变化的时候触发此事件，`event.detail = {height: height, duration: duration}` |
| linechange | `(event: UniTextareaLineChangeEvent) => void` | 输入框行数变化时调用，`event.detail = {height: 0, heightRpx: 0, lineCount: 0}` |

## 插槽

| 名称    | 说明             |
| :------ | :--------------- |
| counter | 替换内置的计字器 |

<DemoPhone name="sn-textarea" />