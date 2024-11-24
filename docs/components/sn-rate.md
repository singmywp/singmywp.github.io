# Rate 评分组件
## 基础用法
- 普普通通的评分组件
```vue
<template>
	<sn-rate v-model="value"></sn-rate>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数          | 说明                       | 类型          | 默认值           | 可选值            |
| ------------- | -------------------------- | ------------- | ---------------- | ----------------- |
| vModel       | 当前选中的评分值           | Number        | `0`              | -                 |
| count         | 总评分数量                 | Number        | `5`              | -                 |
| readonly      | 是否为只读状态             | Boolean       | `false`          | `true` \| `false` |
| clearable     | 是否允许点击当前值清除评分 | Boolean       | `false`          | `true` \| `false` |
| allowHalf     | 是否允许半星评分           | Boolean       | `false`          | `true` \| `false` |
| spacing       | 图标之间的间距             | String        | `5px`            | -                 |
| inactiveColor | 未选中图标的颜色           | String        | `$infoDark`      | -                 |
| activeColor   | 选中图标的颜色             | String        | `$warning`       | -                 |
| icon          | 评分图标名称               | String        | `star-fill`      | -                 |
| iconSize      | 图标大小                   | String        | `$4`             | -                 |
| activeIcon    | 选中图标的名称             | String        | -                | -                 |
| halfIcon      | 半星图标的名称             | String        | `star-half-fill` | -                 |
| customStyle   | 自定义评分组件样式         | UTSJSONObject | `{}`             | -                 |


## 事件

| 事件名 | 类型                | 说明             |
| :----- | :------------------ | :--------------- |
| change | (v: Number)=>Void | 当前值变化时触发 |

<DemoPhone name="sn-rate" />