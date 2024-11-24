# Picker View 选择器容器
## 基础用法
- 本组件是基于官方 picker-view 的封装，扩展了禁用项功能和样式，使用更加方便快捷
```vue
<template>
	<sn-picker-view v-model="value" :data="data"></sn-picker-view>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                  | 说明                                   | 类型                        | 默认值                                               | 可选值            |
| --------------------- | -------------------------------------- | --------------------------- | ---------------------------------------------------- | ----------------- |
| v-model               | 当前选中的选项索引数组                 | Array\<Number\>             | `[]`                                                 | -                 |
| data                  | 选择器容器数据数组，每个子数组代表一列 | Array\<SnDataItem[][]\> | `[]`                                                 | -                 |
| disabled              | 是否禁用选择器容器                     | Boolean                     | `false`                                              | `true` \| `false` |
| height                | 选择器容器高度                         | String                      | `250px`                                              | -                 |
| itemHeight            | 选项高度                               | String                      | `50px`                                               | -                 |
| itemBorderRadius      | 选项圆角大小                           | String                      | `$normal`                                            | -                 |
| itemTextColor         | 选项文字颜色                           | String                      | `$textLight`（亮色模式）<br/>`$lineText`（暗黑模式） | -                 |
| itemTextSize          | 选项文字大小                           | String                      | `$2`                                                 | -                 |
| activeItemTextColor   | 激活选项文字颜色                       | String                      | `$text`                                              | -                 |
| disabledItemTextColor | 禁用选项文字颜色                       | String                      | `$disabledText`                                      | -                 |
| columnSpacing         | 列间距                                 | String                      | `10px`                                               | -                 |
| customStyle           | 自定义选择器容器样式                   | UTSJSONObject               | `{}`                                                 | -                 |
| customItemStyle       | 自定义选项样式                         | UTSJSONObject               | `{}`                                                 | -                 |
| customColumnStyle     | 自定义列样式                           | UTSJSONObject               | `{}`                                                 | -                 |
## 事件
| 名称   | 类型                   | 说明           |
| ------ | ---------------------- | -------------- |
| change | (v:Number[]) => Void | 选项改变时触发 |


<DemoPhone name="sn-picker-view" />