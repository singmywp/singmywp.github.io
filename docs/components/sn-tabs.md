# Tabs 标签页
## 基本使用
- 用于创建一个标签页组件，可以切换不同的标签页内容。
- 支持自定义样式和标签页内容。
```vue
<template>
	<sn-tabs v-model="value" :data="data"></sn-tabs>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                  | 说明                                         | 类型                                                      | 默认值          | 可选值            |
| --------------------- | -------------------------------------------- | --------------------------------------------------------- | --------------- | ----------------- |
| v-model               | 当前激活的标签页索引                         | Number                                                    | `0`             | -                 |
| scrollable            | 标签是否可滚动                               | Boolean                                                   | `false`         | `true` \| `false` |
| data                  | 标签页数据数组，每个对象包含 id 和 text 属性 | Array\<[SnTabParams](/api/types/components#sntabparams)\> | `[]`            | -                 |
| width                 | 标签宽度                                     | String                                                    | `100%`          | -                 |
| height                | 标签高度                                     | String                                                    | `40px`          | -                 |
| bgColor               | 标签背景颜色                                 | String                                                    | `$front`        | -                 |
| textColor             | 标签文本颜色                                 | String                                                    | `$title`        | -                 |
| textSize              | 标签文本大小                                 | String                                                    | `$2`            | -                 |
| disabledTextColor     | 禁用状态文本颜色                             | String                                                    | `$disabledText` | -                 |
| activeTextColor       | 激活状态文本颜色                             | String                                                    | `$primary`      | -                 |
| itemPadding           | 标签内边距                                   | String                                                    | `12px`          | -                 |
| lineColor             | 激活状态下的指示线颜色                       | String                                                    | `$primary`      | -                 |
| lineWidth             | 指示线宽度                                   | String                                                    | -               | -                 |
| lineHeight            | 指示线高度                                   | String                                                    | `2px`           | -                 |
| customStyle           | 自定义样式                                   | UTSJSONObject                                             | `{}`            | -                 |
| customItemStyle       | 自定义激活状态样式                           | UTSJSONObject                                             | `{}`            | -                 |
| customActiveItemStyle | 自定义样式                                   | UTSJSONObject                                             | `{}`            | -                 |
## 插槽
| 名称  | 说明                 |
| ----- | -------------------- |
| left  | 在标签页左侧放置内容 |
| right | 在标签页右侧放置内容 |
## 事件
| 名称   | 类型                      | 说明             |
| :----- | :------------------------ | :--------------- |
| change | `(value: number) => void` | 标签页切换时触发 |


<DemoPhone name="sn-tabs" />