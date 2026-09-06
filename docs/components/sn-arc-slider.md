# ArcSlider  环形滑块

> [查看 sn-arc-slider 的 2.0 版本差异](/differences/components/sn-arc-slider)

## 基础用法

- 圆弧形态的滑动选择器，沿圆弧拖动圆点（dot）调整数值，`v-model` 双向绑定当前值。
- 通过 `start-angle` / `end-angle`（单位：度，0° 为正右方，顺时针为正）自定义弧的起止角度；设为 `0` 与 `360` 即为完整圆形轨道。
- 轨道（trail）、进度弧（stroke）与圆点均由 Canvas 绘制，颜色支持 `$` 主题色简写（内部会解析为当前主题实际色值，主题切换自动重绘）。
- `is-hue` 模式下轨道绘制为完整色环，取值按比例映射到 0° - 360° 色相，并通过 `v-model:color` 双向绑定对应颜色的 hex 值。
- 组件中间区域默认显示当前值（hue 模式显示颜色球与 hex 文本），可用 `value` 插槽完全自定义。

```vue
<template>
	<sn-arc-slider v-model="value"></sn-arc-slider>
</template>

<script lang="uts" setup>
const value = ref<number>(36)
</script>
```

**更多演示请下载 demo 查看**

## 范围与步长

```vue
<template>
	<sn-arc-slider v-model="temperature" :min="16" :max="30" :step="0.5" size="$180" stroke-color="$warning"></sn-arc-slider>
</template>
```

## 色环取色

`is-hue` 开启后，可直接给 `v-model:color` 绑定一个颜色值，组件会反推出对应的色相位置：

```vue
<template>
	<sn-arc-slider v-model="hue" v-model:color="color" is-hue size="$190" @color-change="onColorChange"></sn-arc-slider>
</template>

<script lang="uts" setup>
const hue = ref<number>(210)
const color = ref<string>('#0080FF')

function onColorChange(color: string): void {
	console.log(color)
}
</script>
```

## 自定义中间内容

通过 `value` 插槽替换中间区域，作用域参数：`value`（当前值）、`color`（当前颜色）、`hex`（hue 模式下的 hex 文本，非 hue 模式为空字符串）：

```vue
<template>
	<sn-arc-slider v-model="value">
		<template #value="{ value, color }">
			<sn-text :text="`${value}`" :color="color" bold></sn-text>
		</template>
	</sn-arc-slider>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定当前值（自动夹取到 `[min, max]` 并按 `step` 取整） | Number | `0` | - |
| v-model:color | hue 模式下绑定颜色值（hex），赋值会反推色相位置 | String | `''` | - |
| size | 组件尺寸（正方形边长） | String \| Number | `$200` | - |
| startAngle | 轨道起始角度（度，0° 为正右方，顺时针为正） | Number | `-225` | - |
| endAngle | 轨道结束角度 | Number | `45` | - |
| lineCap | 轨道端点形状（完整圆形轨道时强制为 `butt`） | String | `round` | `butt` \| `round` \| `square` |
| strokeWidth | 进度弧粗细 | String \| Number | `$20` | - |
| strokeColor | 进度弧颜色 | String | `$primary` | 任意色值或 `$` 主题色简写 |
| trailWidth | 轨道粗细 | String \| Number | `$20` | - |
| trailColor | 轨道颜色 | String | `$line` | 任意色值或 `$` 主题色简写 |
| dotSize | 圆点（滑块）直径 | String \| Number | `$12` | - |
| dotBgColor | 圆点背景颜色 | String | `$front` | 任意色值或 `$` 主题色简写 |
| dotBorderColor | 圆点描边颜色 | String | `$line` | 任意色值或 `$` 主题色简写 |
| dotBorderWidth | 圆点描边宽度，为 `0` 时不绘制描边 | String \| Number | `0` | - |
| min | 最小值 | Number | `0` | - |
| max | 最大值 | Number | `100` | - |
| step | 步长 | Number | `1` | - |
| isHue | 是否为色环模式（取值映射到 0° - 360° 色相，轨道绘制为完整色环） | Boolean | `false` | `true` \| `false` |
| showValueText | 是否显示中间默认内容（当前值；hue 模式为颜色球与 hex 文本） | Boolean | `true` | `true` \| `false` |
| disabled | 是否禁用，禁用后半透明且不响应拖动 | Boolean | `false` | `true` \| `false` |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数）。

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 拖动过程中值变化时实时触发，携带新值 |
| color-change | (color: String) => Void | hue 模式下拖动过程中颜色变化时实时触发，携带 hex 颜色值 |

`change` / `color-change` 在拖动过程中实时触发；`v-model` 与 `v-model:color` 则在松手时才提交最终值。

## 插槽

| 名称 | 说明 |
| --- | --- |
| value | 自定义组件中间区域内容，替换默认的值/颜色球显示。作用域参数：`value`（当前值）、`color`（当前颜色）、`hex`（hex 文本，非 hue 模式为空字符串） |

<DemoPhone name="sn-arc-slider" />
