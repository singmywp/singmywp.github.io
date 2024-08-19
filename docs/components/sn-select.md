# Select 选择框
## 基本使用
- 用于简单的数据选择。对于大量、复杂数据请使用 sn-picker 组件
```vue
<template>
  <sn-select v-model="value" :data="data"></sn-select>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数               | 说明                 | 类型                | 默认值         | 可选值            |
| ------------------ | -------------------- | ------------------- | -------------- | ----------------- |
| v-model            | 当前选中项的索引     | Number              | `0`            | -                 |
| data               | 选项数据源           | Array\<[SnDataItem](/api/types/components#sndataitem)\> | `[]`           | -                 |
| width              | 选择框宽度           | String              | `100px`        | -                 |
| bgColor            | 选择框背景颜色       | String              | `$front`       | -                 |
| activeBgColor      | 选中项背景颜色       | String              | `$infoActive`  | -                 |
| popBgColor         | 弹出层背景颜色       | String              | `$front`       | -                 |
| popActiveBgColor   | 弹出层选中项背景颜色 | String              | `$infoActive`  | -                 |
| textSize           | 选择框文本大小       | String              | `$3`           | -                 |
| textColor          | 选择框文本颜色       | String              | `$text`        | -                 |
| popTextSize        | 弹出层文本大小       | String              | `$2`           | -                 |
| popActiveTextColor | 弹出层选中项文本颜色 | String              | `$primaryDark` | -                 |
| popTextColor       | 弹出层文本颜色       | String              | `$text`        | -                 |
| borderRadius       | 选择框圆角大小       | String              | `$normal`      | -                 |
| maxHeight          | 弹出层最大高度       | String              | `500px`        | -                 |
| disabled           | 是否禁用选择框       | Boolean             | `false`        | `true` \| `false` |
| customPopStyle     | 自定义弹出层样式     | UTSJSONObject       | `{}`           | -                 |
| customPopTextStyle | 自定义弹出层文本样式 | UTSJSONObject       | `{}`           | -                 |
| customTextStyle    | 自定义选择框文本样式 | UTSJSONObject       | `{}`           | -                 |
| customStyle        | 自定义选择框样式     | UTSJSONObject       | `{}`           | -                 |
## 事件
| 名称   | 类型                      | 说明                                     |
| ------ | ------------------------- | ---------------------------------------- |
| change | `(value: number) => void` | 选中项变化时触发。`value` 即为选中项索引 |
<DemoPhone name="sn-select" />