# SliderDouble  双向滑动选择

> [查看 sn-slider-double 的 2.0 版本差异](/differences/components/sn-slider-double)

## 基础用法

- 双向（区间）滑动选择器，轨道上有两个滑块，`v-model` 绑定一个长度为 2 的数值数组表示区间 `[较小值, 较大值]`。
- 拖动需按住滑块，拖动结束时若两值交叉会自动交换排序，保证数组前项小于等于后项。
- 其余表现（竖向、范围步长、显示值文本、自定义样式等）与 `sn-slider` 一致。

```vue
<template>
	<sn-slider-double v-model="range"></sn-slider-double>
</template>

<script lang="uts" setup>
const range = ref<number[]>([20, 40])
</script>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定区间值（两项分别为区间两端，自动按序排列并夹取到 `[min, max]`） | Array\<Number\> | `[0, 0]` | - |
| vertical | 是否为竖向滑动选择器 | Boolean | `false` | `true` \| `false` |
| min | 最小值 | Number | `0` | - |
| max | 最大值 | Number | `100` | - |
| step | 步长，取值按步长取整 | Number | `1` | - |
| disabled | 是否禁用，禁用后轨道与激活条呈禁用色且不可交互 | Boolean | `false` | `true` \| `false` |
| activeColor | 激活部分（两滑块之间）颜色 | String | `$primary` | 任意色值或 `$` 主题色简写 |
| inactiveColor | 轨道未激活部分颜色 | String | `$infoActive` | 任意色值或 `$` 主题色简写 |
| thickness | 轨道粗细 | String \| Number | `20px` | - |
| borderRadius | 轨道圆角，留空时自动取轨道粗细的一半（全圆角） | String \| Number | `''` | - |
| thumbBorderRadius | 滑块圆角，留空时自动取滑块尺寸的一半（全圆角） | String \| Number | `''` | - |
| thumbBorder | 滑块边框（CSS border 值，如 `2px solid #ffffff`） | String | `''` | - |
| thumbSize | 滑块尺寸 | String \| Number | `10px` | - |
| showValueText | 是否在右侧/下方显示当前区间文本（格式如 `20 - 40`） | Boolean | `false` | `true` \| `false` |
| valueTextWidth | 区间文本宽度 | String \| Number | `30px` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| trackClass | 轨道的外部样式类 | String | `''` | - |
| trackStyle | 轨道自定义样式 | UTSJSONObject \| String | `''` | - |
| activeClass | 激活条的外部样式类 | String | `''` | - |
| activeStyle | 激活条自定义样式 | UTSJSONObject \| String | `''` | - |
| thumbClass | 滑块的外部样式类（两个滑块共用） | String | `''` | - |
| thumbStyle | 滑块自定义样式（两个滑块共用） | UTSJSONObject \| String | `''` | - |
| valueTextClass | 值文本的外部样式类 | String | `''` | - |
| valueTextStyle | 值文本自定义样式 | UTSJSONObject \| String | `''` | - |

绑定数组长度不为 2 时，组件会自动重置为 `[min, min]`。尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数）。

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Array\<Number\>) => Void | 拖动松手后触发，携带排序后的最终区间值（拖动过程中不触发，外部赋值不触发） |
