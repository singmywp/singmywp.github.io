# Stepper 步进器
## 基础用法
- 用于创建可增减数值的步进器。
- 可自定义步进器的样式、颜色、大小等。
- 支持长按快速增减。
```vue
<template>
	<sn-stepper v-model="value"></sn-stepper>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数               | 说明                     | 类型          | 默认值          | 可选值            |
| ------------------ | ------------------------ | ------------- | --------------- | ----------------- |
| modelValue         | 步进器的当前值           | Number        | `0`             | -                 |
| size               | 步进器按钮大小           | String        | `30px`          | -                 |
| spacing            | 按钮之间的间距           | String        | `2px`           | -                 |
| inputWidth         | 输入框宽度               | String        | `50px`          | -                 |
| textSize           | 文本大小                 | String        | `$2+1`          | -                 |
| textColor          | 文本颜色                 | String        | `$text`         | -                 |
| disabledTextColor  | 禁用状态文本颜色         | String        | `$disabledText` | -                 |
| inputBgColor       | 输入框背景颜色           | String        | `$info`         | -                 |
| inputActiveBgColor | 输入框激活背景颜色       | String        | `$info`         | -                 |
| buttonBgColor      | 按钮背景颜色             | String        | `$info`         | -                 |
| borderRadius       | 边框圆角                 | String        | `$small`        | -                 |
| min                | 最小值                   | Number        | `0`             | -                 |
| max                | 最大值                   | Number        | `NaN`           | -                 |
| step               | 步长                     | Number        | `1`             | -                 |
| longpress          | 是否开启长按连续增减功能 | Boolean       | `true`          | `true` \| `false` |
| disableInput       | 是否禁用输入框           | Boolean       | `false`         | `true` \| `false` |
| disabled           | 是否禁用整个步进器       | Boolean       | `false`         | `true` \| `false` |
| customStyle        | 自定义步进器样式         | UTSJSONObject | `{}`            | -                 |
## 事件
| 名称   | 类型                      | 说明           |
| :----- | :------------------------ | :------------- |
| change | (value: Number) => Void | 数据变化时触发 |

<DemoPhone name="sn-stepper" />