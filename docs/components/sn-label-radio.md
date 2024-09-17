# Label Radio 标签单选
## 基础用法
- 与 Radio 不同的是， 该组件只需提供数据，使用更简单
- 用于创建一组单选按钮，以标签形式展示。
```vue
<template>
	<sn-label-radio v-model="selectedValue" :data="data" ></sn-label-radio>
</template
```
**更多演示请下载 demo 查看**
## 属性
| 参数                | 说明                     | 类型                    | 默认值          | 可选值            |
| ------------------- | ------------------------ | ----------------------- | --------------- | ----------------- |
| v-model             | 当前选中值               | Number                  | `0`             | -                 |
| data                | 选项数据数组             | Array\<SnDataItem\[\]\> | `[]`            | -                 |
| disabled            | 是否禁用所有选项         | Boolean                 | ``false``       | `true` \| `false` |
| disabledItemBgColor | 禁用选项的背景颜色       | String                  | `$disabled`     | -                 |
| disabledTextColor   | 禁用选项的文本颜色       | String                  | `$disabledText` | -                 |
| disabledIconColor   | 禁用选项的图标颜色       | String                  | `$disabledText` | -                 |
| itemBgColor         | 选项背景颜色             | String                  | `$front`        | -                 |
| itemPadding         | 选项内边距               | String                  | `12px 20px`     | -                 |
| activeItemBgColor   | 激活时选项的背景颜色     | String                  | `$info`         | -                 |
| icon                | 选项图标                 | String                  | `check-line`    | -                 |
| iconPosition        | 图标位置                 | String                  | `left`          | `left` \| `right` |
| iconColor           | 图标颜色                 | String                  | -               | -                 |
| iconSize            | 图标大小                 | String                  | -               | -                 |
| textColor           | 选项文本颜色             | String                  | `$text`         | -                 |
| activeTextColor     | 选中时选项文本颜色       | String                  | `$primary`      | -                 |
| textSize            | 选项文本大小             | String                  | `$2`            | -                 |
| customStyle         | 自定义样式对象           | UTSJSONObject           | `{}`            | -                 |
| customItemStyle     | 自定义每个选项的样式对象 | UTSJSONObject           | `{}`            | -                 |
## 事件
| 名称   | 类型                      | 说明           |
| ------ | ------------------------- | -------------- |
| change | `(value: number) => void` | 选项改变时触发 |


<DemoPhone name="sn-label-radio" />  