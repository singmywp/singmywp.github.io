# Progress 进度条
## 基础用法
- 用于显示一个任务或过程的进度。
- 支持自定义颜色、高度、动画时间等属性。
```vue
<template>
	<sn-progress v-model="value"></sn-progress>
</template>
```
**更多演示请下载 demo 查看**


## 属性
| 参数              | 说明                           | 类型          | 默认值     | 可选值                |
| ----------------- | ------------------------------ | ------------- | ---------- | --------------------- |
| vModel           | 进度值，范围 0 ~ 100           | Number        | `0`        | -                     |
| showValueText     | 是否显示进度值文本             | Boolean       | `false`    | `true` \| `false`     |
| valueTextPosition | 进度值文本位置，可选内部或外部 | String        | `outside`  | `inside` \| `outside` |
| valueTextSize     | 进度值文本大小                 | String        | -          | -                     |
| valueTextWidth    | 进度值文本宽度                 | String        | `40px`     | -                     |
| height            | 进度条高度                     | String        | `6px`      | -                     |
| bgColor           | 进度条未激活部分颜色           | String        | `$line`    | -                     |
| activeColor       | 进度条激活部分颜色             | String        | `$primary` | -                     |
| textColor         | 进度值文本颜色                 | String        | -          | -                     |
| borderRadius      | 进度条圆角大小                 | String        | `$circle`  | -                     |
| aniTime           | 进度条动画时间                 | String        | `$normal`  | -                     |
| customStyle       | 自定义进度条样式               | UTSJSONObject | `{}`       | -                     |
| customTextStyle   | 自定义进度值文本样式           | UTSJSONObject | `{}`       | -                     |
| customActiveStyle | 自定义激活部分样式             | UTSJSONObject | `{}`       | -                     |


## 事件
| 名称   | 类型                      | 说明                 |
| :----- | :------------------------ | :------------------- |
| change | `(value: number) => void` | 进度变化时触发的事件 |


<DemoPhone name="sn-progress" />
