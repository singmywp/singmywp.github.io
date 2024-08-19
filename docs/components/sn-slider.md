# Slider 滑动选择

## 基本使用

- 和内置 Slider 组件不同的是，本组件并非使用 Draw Api 绘制。大部分场景下，不会出现大量 Slider 联动的高性能需求，使用多 DOM 布局以更好满足用户个性化需求。
- 分为两个组件：`sn-slider` 和 `sn-slider-double`（双向 Slider）。

```vue
<template>
		<sn-slider v-model="value"></sn-slider>
</template>
```
**更多演示请下载 demo 查看**
### 属性

**sn-slider**

| 参数                 | 说明                           | 类型          | 默认值        | 可选值            |
| -------------------- | ------------------------------ | ------------- | ------------- | ----------------- |
| v-model              | 滑动选择器的当前值             | Number        | `0`           | -                 |
| vertical             | 是否为竖向滑动选择器           | Boolean       | `false`       | `true` \| `false` |
| min                  | 最小值                         | Number        | `0`           | -                 |
| max                  | 最大值                         | Number        | `100`         | -                 |
| step                 | 步长                           | Number        | `1`           | -                 |
| disabled             | 是否禁用滑动选择器             | Boolean       | `false`       | `true` \| `false` |
| activeColor          | 滑块容器条选中部分的颜色       | String        | `$primary`    | -                 |
| inactiveColor        | 滑块容器条未选中部分的颜色     | String        | `$infoActive` | -                 |
| thickness            | 滑块容器条的粗细               | String        | `20px`        | -                 |
| borderRadius         | 滑块容器条的圆角大小           | String        | `$circle`     | -                 |
| thumbBorderRadius    | 滑块的圆角大小                 | String        | `$circle`     | -                 |
| thumbBorder          | 滑块的边框                     | String        | -             | -                 |
| thumbSize            | 滑块的尺寸                     | String        | `10px`        | -                 |
| showValueText        | 是否在右侧/下方显示当前值文本  | Boolean       | `false`       | `true` \| `false` |
| valueTextWidth       | 当前值文本的宽度               | String        | `30px`        | -                 |
| customStyle          | 自定义滑块容器条样式           | UTSJSONObject | -             | -                 |
| customContainStyle   | 自定义滑块容器条的父元素的样式 | UTSJSONObject | -             | -                 |
| customThumbStyle     | 自定义滑块的样式               | UTSJSONObject | -             | -                 |
| customValueTextStyle | 自定义当前值文本样式           | UTSJSONObject | -             | -                 |
| customActiveStyle    | 自定义滑块容器条选中部分样式   | UTSJSONObject | -             | -                 |


**sn-slider-double**

| 参数    | 说明                   | 类型            | 默认值  | 可选值 |
| ------- | ---------------------- | --------------- | ------- | ------ |
| v-model | 双向滑动选择器的当前值 | Array\<Number\> | `[0,0]` | -      |

*其余属性同上*

## 事件

**sn-slider**

| 名称   | 类型                      | 说明           |
| :----- | :------------------------ | :------------- |
| change | `(value: number) => void` | 数据变化时触发 |

**sn-slider-double**

| 名称   | 类型                        | 说明             |
| :----- | :-------------------------- | :--------------- |
| change | `(value: number[]) => void` | 数据变化时触发。 |



<DemoPhone name="sn-slider" />
