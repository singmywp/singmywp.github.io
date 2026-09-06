# Stepper  步进器

> [查看 sn-stepper 的 2.0 版本差异](/differences/components/sn-stepper)

## 基础用法

- 由减按钮、数值输入框、加按钮组成的步进器，点击按钮或直接输入均可改变数值，`v-model` 双向绑定当前值。
- 支持范围与步长（`min` / `max` / `step`，`step` 支持小数）、长按连续增减（`longpress`）、禁用输入（`disable-input`）与整体禁用（`disabled`）。
- 输入框失焦或点键盘确认时提交输入：非法输入恢复为当前值，合法输入自动夹取到 `[min, max]` 并按 `step` 小数位格式化。

```vue
<template>
	<sn-stepper v-model="value"></sn-stepper>
</template>

<script lang="uts" setup>
const value = ref<number>(0)
</script>
```

**更多演示请下载 demo 查看**

## 范围与步长

`step` 为小数时输入框自动切换为小数键盘，并按小数位数格式化显示；`max` 不设置（默认 `NaN`）表示无上限：

```vue
<template>
	<sn-stepper v-model="value" :min="5" :max="25" :step="5"></sn-stepper>
	<sn-stepper v-model="value2" :min="0" :max="10" :step="0.5"></sn-stepper>
</template>
```

## 长按连续增减

`longpress` 默认开启：按住按钮 500ms 后开始连续增减（每 100ms 一步），到达边界自动停止：

```vue
<template>
	<sn-stepper v-model="value" :max="50"></sn-stepper>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定当前值 | Number | `0` | - |
| size | 按钮（及输入框）边长 | String \| Number | `30px` | - |
| spacing | 按钮与输入框之间的间距 | String \| Number | `2px` | - |
| inputWidth | 输入框宽度 | String \| Number | `50px` | - |
| textSize | 文本大小 | String \| Number | `$14` | - |
| textColor | 按钮符号与输入框文本颜色 | String | `$text` | 任意色值或 `$` 主题色简写 |
| inputTextColor | 输入框文本颜色，留空时取 `textColor` | String | `''` | 任意色值或 `$` 主题色简写 |
| disabledTextColor | 禁用状态文本颜色 | String | `$disabledText` | 任意色值或 `$` 主题色简写 |
| inputBgColor | 输入框背景颜色 | String | `$info` | 任意色值或 `$` 主题色简写 |
| inputActiveBgColor | 输入框聚焦激活背景颜色 | String | `$info` | 任意色值或 `$` 主题色简写 |
| disabledBgColor | 禁用状态输入框背景颜色，留空时取禁用色 | String | `''` | 任意色值或 `$` 主题色简写 |
| buttonBgColor | 按钮背景颜色，留空时为描边样式按钮 | String | `''` | 任意色值或 `$` 主题色简写 |
| borderRadius | 按钮、输入框圆角 | String \| Number | `$8` | - |
| min | 最小值 | Number | `0` | - |
| max | 最大值，`NaN` 表示无上限 | Number | `NaN` | - |
| step | 步长（支持小数，显示按其小数位格式化） | Number | `1` | - |
| longpress | 是否开启长按连续增减 | Boolean | `true` | `true` \| `false` |
| disableInput | 是否禁用输入框（仅能通过按钮增减） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用整个步进器 | Boolean | `false` | `true` \| `false` |
| placeholder | 输入框占位文本 | String | `''` | - |
| maxlength | 输入框最大输入长度，`-1` 表示不限制 | String \| Number | `-1` | - |
| showBorder | 输入框是否显示边框 | Boolean | `false` | `true` \| `false` |
| borderColor | 输入框边框颜色 | String | `''` | 任意色值或 `$` 主题色简写 |
| activeBorderColor | 输入框激活状态边框颜色 | String | `''` | 任意色值或 `$` 主题色简写 |
| borderWidth | 输入框边框宽度 | String \| Number | `2` | - |
| textFont | 输入框文本字体 | String | `''` | - |
| cursorColor | 输入框光标颜色 | String | `''` | 任意色值或 `$` 主题色简写 |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |

尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数）。

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 数值变化时触发，携带新值（按钮点击、长按连续增减、输入提交均会触发） |

<DemoPhone name="sn-stepper" />
