# Slider  滑动选择

> [查看 sn-slider 的 2.0 版本差异](/differences/components/sn-slider)

## 基础用法

- 通过拖动滑块在一个数值区间内选择数值，`v-model` 双向绑定当前值。
- 支持横向 / 竖向（`vertical`）、自定义范围与步长（`min` / `max` / `step`）、显示当前值文本。
- 拖动时通过直接操作 DOM 更新滑块与进度位置，拖动跟手流畅；点击轨道任意位置可快速定位到该处。
- 绑定值会自动夹取到 `[min, max]` 区间并按 `step` 取整。
- 需要选择一个数值区间（双向滑块）时，请使用 `sn-slider-double`。

```vue
<template>
	<sn-slider v-model="value"></sn-slider>
</template>

<script lang="uts" setup>
const value = ref<number>(30)
</script>
```

**更多演示请下载 demo 查看**

## 竖向滑动

`vertical` 为 `true` 时竖向显示，父容器需要给定高度：

```vue
<template>
	<view style="height: 200px;">
		<sn-slider v-model="value" vertical></sn-slider>
	</view>
</template>
```

## 显示当前值

开启 `show-value-text` 后会在组件右侧（竖向时为下方）显示当前值：

```vue
<template>
	<sn-slider v-model="value" show-value-text :min="10" :max="60" :step="5"></sn-slider>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定当前值（自动夹取到 `[min, max]` 并按 `step` 取整） | Number | `0` | - |
| vertical | 是否为竖向滑动选择器 | Boolean | `false` | `true` \| `false` |
| min | 最小值 | Number | `0` | - |
| max | 最大值 | Number | `100` | - |
| step | 步长，取值按步长取整 | Number | `1` | - |
| disabled | 是否禁用，禁用后轨道与激活条呈禁用色且不可交互 | Boolean | `false` | `true` \| `false` |
| activeColor | 激活部分（进度）颜色 | String | `$primary` | 任意色值或 `$` 主题色简写 |
| inactiveColor | 轨道未激活部分颜色 | String | `$infoActive` | 任意色值或 `$` 主题色简写 |
| thickness | 轨道粗细 | String \| Number | `20px` | - |
| borderRadius | 轨道圆角，自动取轨道粗细的一半（全圆角） | String \| Number | - | - |
| thumbBorderRadius | 滑块圆角，自动取滑块尺寸的一半（全圆角） | String \| Number | - | - |
| thumbBorder | 滑块边框（CSS border 值，如 `2px solid #ffffff`） | String | `''` | - |
| thumbSize | 滑块尺寸 | String \| Number | `10px` | - |
| showValueText | 是否在右侧/下方显示当前值文本 | Boolean | `false` | `true` \| `false` |
| valueTextWidth | 当前值文本宽度 | String \| Number | `30px` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| trackClass | 轨道的外部样式类 | String | `''` | - |
| trackStyle | 轨道自定义样式 | UTSJSONObject \| String | `''` | - |
| activeClass | 激活条的外部样式类 | String | `''` | - |
| activeStyle | 激活条自定义样式 | UTSJSONObject \| String | `''` | - |
| thumbClass | 滑块的外部样式类 | String | `''` | - |
| thumbStyle | 滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| valueTextClass | 值文本的外部样式类 | String | `''` | - |
| valueTextStyle | 值文本自定义样式 | UTSJSONObject \| String | `''` | - |

尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数），如 `thumb-size="$14"`。

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 拖动松手后触发，携带最终值（拖动过程中不触发，外部赋值不触发） |

<DemoPhone name="sn-slider" />
