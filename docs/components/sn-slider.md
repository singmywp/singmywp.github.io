# Slider  滑动选择

> [查看 sn-slider 的 2.0 版本差异](/differences/components/sn-slider)

## 基础用法

滑动选择器，通过拖动滑块在一个数值区间内选择数值。

- 支持横向与竖向、自定义范围与步长、显示当前值文本
- 绑定值会自动夹取到范围区间并按步长取整
- 点击轨道任意位置可快速定位到该处

::: info 区间选择
需要选择一个数值区间（双向滑块）时，请使用 `sn-slider-double`。
:::

```vue
<template>
	<sn-slider v-model="value"></sn-slider>
</template>

<script lang="uts" setup>
const value = ref<number>(30)
</script>
```

**更多演示请下载 demo 查看**

激活条保留真实圆角，滑块大于轨道粗细时允许滑块溢出显示。按下 thumb 时会显示一个浅灰半透明外圈，直径取 thumb 与轨道粗细中的较大值再加 `6px`（保证 thumb 嵌入轨道时外圈比轨道略大、清晰可见），外圈圆角在 thumb 圆角基础上同步外扩（thumb 为全圆角时外圈即为同心圆），松手后淡出；拖动过程中不重复测量轨道，激活条的宽度/高度与 thumb 的位置均通过 DOM 直写更新，thumb 与外圈的 transform 均强制使用 `0ms`。外圈的显隐过渡遵循 `--ani-time-*` 与 `aniTimeFactor`，设置 `show-glow` 为 `false` 可关闭该光晕。

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
| showGlow | 是否显示按下 thumb 时的拖拽光晕 | Boolean | `true` | `true` \| `false` |
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
