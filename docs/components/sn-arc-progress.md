# ArcProgress  环形进度

> [查看 sn-arc-progress 的 2.0 版本差异](/differences/components/sn-arc-progress)

## 基础用法

- 用于展示环形（圆弧）进度，基于 canvas 绘制，支持自定义起止角度、轨道与进度条粗细颜色。
- 通过 `v-model` 绑定进度值，值自动夹取到 `[min, max]` 区间，变化时以缓动动画平滑过渡到目标值。
- 默认在圆弧中心显示百分比文本，可通过 `value` 插槽完全自定义中心内容。
- 颜色、尺寸支持 `$` 前缀主题简写（如 `$primary`、`$20`），主题或风格变化时自动重绘。

```vue
<template>
	<sn-arc-progress v-model="value"></sn-arc-progress>
</template>
```

**更多演示请下载 demo 查看**

## 仪表盘进度

通过 `start-angle` 与 `end-angle` 定义圆弧区间（角度制，0° 为 3 点钟方向，顺时针为正），配合 `min`、`max` 可实现温度计、仪表盘等非 0-100 场景。

```vue
<template>
	<sn-arc-progress v-model="temperature" :min="16" :max="30" :start-angle="-180" :end-angle="0" stroke-color="$warning">
		<template v-slot:value="scope">
			<sn-text :text="`${scope.value} °C`" bold></sn-text>
		</template>
	</sn-arc-progress>
</template>
```

## 自定义中心内容

使用 `value` 插槽可替换中心默认的百分比文本，插槽作用域提供当前值 `value` 与百分比 `percent`。

```vue
<template>
	<sn-arc-progress v-model="percent" stroke-color="$success">
		<template v-slot:value="scope">
			<sn-text :text="`${scope.percent}%`" color="$success" bold></sn-text>
		</template>
	</sn-arc-progress>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值（进度值，自动夹取到 [min, max] 区间） | Number | `0` | - |
| size | 组件尺寸（宽高一致），支持 `$` 前缀动态尺寸 | String \| Number | `$200` | - |
| start-angle | 轨道起始角度（度，0° 为 3 点钟方向，顺时针为正） | Number | `-225` | - |
| end-angle | 轨道结束角度，与起始角度构成圆弧区间，区间 ≥ 360° 时绘制完整圆环 | Number | `45` | - |
| line-cap | 圆弧线端点样式，完整圆环时强制为 `butt` | String | `round` | `butt` \| `round` \| `square` |
| stroke-width | 进度条粗细，支持 `$` 前缀动态尺寸 | String \| Number | `$20` | - |
| stroke-color | 进度条颜色，支持 `$` 简写 | String | `$primary` | - |
| trail-width | 轨道粗细，支持 `$` 前缀动态尺寸 | String \| Number | `$20` | - |
| trail-color | 轨道颜色，支持 `$` 简写 | String | `$line` | - |
| min | 数值下限 | Number | `0` | - |
| max | 数值上限 | Number | `100` | - |
| show-value-text | 是否在中心显示百分比文本 | Boolean | `true` | `true` \| `false` |
| ani-time | 进度变化动画时长（ms），支持 `$` 前缀动态时长，传 `0` 关闭动画；为空时使用全局长动画时长 | String \| Number | `''` | - |
| custom-style | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| custom-class | 根节点外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 绑定值变化（夹取后）时触发 |
| finish | (value: Number) => Void | 进度动画结束（或无动画直接到位）时触发，参数为最终目标值 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| value | 自定义圆弧中心内容，替换默认百分比文本，作用域为 `{ value: Number, percent: Number }` |

<DemoPhone name="sn-arc-progress" />
