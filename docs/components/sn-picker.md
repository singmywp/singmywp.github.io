# Picker 选择器
## 基础用法
- 用于创建弹出式的选择器。
- 用于数据量较大或较复杂的数据选择。对于简单的数据选择推荐使用 `sn-select` 组件
- 支持多列选择，自定义标题、取消和确认按钮。
```vue
<template>
	<sn-picker ref="pickerEle" v-model="value" :data="data"></sn-picker>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                  | 说明                               | 类型                        | 默认值   | 可选值                        |
| --------------------- | ---------------------------------- | --------------------------- | -------- | ----------------------------- |
| v-model               | 当前选中的选项索引数组             | Array\<Number\>             | `[]`     | -                             |
| data                  | 选择器数据数组，每个子数组代表一列 | Array\<SnDataItem[][]\> | `[]`     | -                             |
| maskClose             | 是否可以通过点击蒙层关闭选择器     | Boolean                     | `true`   | `true` \| `false`             |
| height                | 选择器高度                         | String                      | `350px`  | -                             |
| title                 | 选择器标题                         | String                      | -        | -                             |
| titleAlign            | 标题对齐方式                       | String                      | `center` | `left` \| `center` \| `right` |
| titleColor            | 标题颜色                           | String                      | `$title` | -                             |
| titleSize             | 标题大小                           | String                      | `$3`     | -                             |
| cancelText            | 取消按钮文字                       | String                      | `取消`   | -                             |
| confirmText           | 确认按钮文字                       | String                      | `确定`   | -                             |
| cancelTextSize        | 取消按钮文字大小                   | String                      | `$3`     | -                             |
| confirmTextSize       | 确认按钮文字大小                   | String                      | `$3`     | -                             |
| showCancel            | 是否显示取消按钮                   | Boolean                     | `true`   | `true` \| `false`             |
| showConfirm           | 是否显示确认按钮                   | Boolean                     | `true`   | `true` \| `false`             |
| showClose             | 是否显示关闭按钮                   | Boolean                     | `true`   | `true` \| `false`             |
| columnSpacing         | 列之间的间距                       | String                      | `10px`   | -                             |
| actionSpacing         | 按钮之间的间距                     | String                      | `10px`   | -                             |
| itemHeight            | 选项高度                           | String                      | `50px`   | -                             |
| itemBorderRadius      | 选项圆角大小                       | String                      | -        | -                             |
| itemTextColor         | 选项文字颜色                       | String                      | -        | -                             |
| itemTextSize          | 选项文字大小                       | String                      | -        | -                             |
| activeItemTextColor   | 激活选项文字颜色                   | String                      | -        | -                             |
| disabled              | 是否禁用选择器                     | Boolean                     | `false`  | `true` \| `false`             |
| disabledItemTextColor | 禁用选项文字颜色                   | String                      | -        | -                             |


## 事件
| 名称    | 类型                    | 说明                                                         |
| ------- | ----------------------- | ------------------------------------------------------------ |
| change  | (v: Number[]) => Void | 选项改变时触发                                               |
| cancel  | () => Void            | 取消操作时触发                                               |
| confirm | () => Void            | 确认操作时触发（仅用户点击确认时选择的结果才会作为选择器的结果） |
| close   | () => Void            | 选择器关闭时触发                                             |
| open    | () => Void            | 选择器打开时触发                                             |

<DemoPhone name="sn-picker" />