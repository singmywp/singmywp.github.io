# CodeInput  验证码输入框

## 基础用法

- 验证码/短信码/支付密码输入框，由若干独立单元格组成，输入一位自动跳下一格，支持整段粘贴自动分配。
- `mode` 可选方格（box）与下划线（line）两种样式；`format` 限制输入字符并可自动弹出对应键盘。
- 当前激活单元格高亮并显示闪烁光标；`mask` 开启后以掩码图标占位，适合支付密码场景。
- 输入满 `length` 位时触发 `finish` 事件；对外提供 `focus` / `blur` / `clear` 方法。

```vue
<template>
	<sn-code-input v-model="code" :length="6" format="number" @finish="onFinish"></sn-code-input>
</template>

<script lang="uts" setup>
const code = ref<string>('')

function onFinish(value: string): void {
	console.log(value)
}
</script>
```

**更多演示请下载 demo 查看**

## 下划线模式与掩码

`mode="line"` 切换为底部横线风格；`mask` 开启后已输入的字符以掩码图标显示，事件回调仍返回真实值。

```vue
<template>
	<sn-code-input v-model="pwd" :length="6" format="number" mode="line" :mask="true"></sn-code-input>
</template>

<script lang="uts" setup>
const pwd = ref<string>('')
</script>
```

## 聚焦与清空

通过 ref 调用 `focus` / `clear` 方法，外部控制输入状态。

```vue
<template>
	<sn-code-input ref="codeRef" v-model="code" :length="4"></sn-code-input>
</template>

<script lang="uts" setup>
const code = ref<string>('')
const codeRef = ref<SnCodeInputComponentPublicInstance | null>(null)

function doFocus(): void {
	codeRef.value?.$callMethod('focus')
}

function doClear(): void {
	codeRef.value?.$callMethod('clear')
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| length | 验证码位数，最小为 1 | String \| Number | `6` | - |
| mode | 单元格样式 | String | `box` | `box` \| `line` |
| format | 允许输入的字符类型，`number` 时自动弹出数字键盘，非法字符会被自动过滤 | String | `mixed` | `mixed` \| `number` \| `letter` |
| mask | 是否以掩码图标显示已输入字符 | Boolean | `false` | `true` \| `false` |
| maskIcon | 掩码图标名称，`mask` 为 true 时生效 | String | `circle-fill` | - |
| size | 单个单元格尺寸，最小 20px | String \| Number | `40px` | - |
| space | 单元格间距 | String \| Number | `5px` | - |
| borderRadius | 单元格圆角大小 | String \| Number | `12px` | - |
| borderWidth | 单元格边框宽度 | String \| Number | `2` | - |
| textSize | 字符字体大小 | String \| Number | `$22` | - |
| textColor | 字符颜色 | String | `$text` | - |
| caretSize | 光标大小 | String \| Number | `$14` | - |
| caretColor | 光标颜色 | String | `$primary` | - |
| borderColor | 未填充单元格边框颜色 | String | `$line` | - |
| activeColor | 已填充与激活单元格的边框颜色 | String | `$primary` | - |
| bgColor | 单元格背景颜色 | String | `$front` | - |
| activeBgColor | 激活单元格背景颜色 | String | `$primaryLight` | - |
| focus | 是否自动聚焦 | Boolean | `false` | `true` \| `false` |
| adjustPosition | 键盘弹起时是否自动上推页面 | Boolean | `true` | `true` \| `false` |
| disabled | 是否禁用 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| itemStyle | 自定义单元格样式 | UTSJSONObject \| String | `''` | - |
| itemClass | 单元格外部类 | String | `''` | - |
| textStyle | 自定义字符样式 | UTSJSONObject \| String | `''` | - |
| textClass | 字符外部类 | String | `''` | - |
| caretStyle | 自定义光标样式 | UTSJSONObject \| String | `''` | - |
| caretClass | 光标外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| input | (event: UniInputEvent) => Void | 键盘输入时触发 |
| change | (value: string) => Void | 绑定值变化时触发，参数为当前值 |
| finish | (value: string) => Void | 输入满 `length` 位时触发，参数为完整验证码 |
| focus | (event: UniInputFocusEvent) => Void | 聚焦时触发 |
| blur | (event: UniInputBlurEvent) => Void | 失去焦点时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| focus | - | - | 使输入框聚焦，光标定位到末尾 |
| blur | - | - | 使输入框失去焦点 |
| clear | - | - | 清空输入内容并触发 `change` 事件 |

<DemoPhone name="sn-code-input" />
