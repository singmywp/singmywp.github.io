# useFactors

响应式读取五个全局尺寸乘数（修改 `$snui.*Factor` 后自动更新）。

```typescript
import { useFactors } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| marginFactor | `Ref<number>` | 外间距乘数 |
| paddingFactor | `Ref<number>` | 内间距乘数 |
| radiusFactor | `Ref<number>` | 圆角乘数 |
| fontsizeFactor | `Ref<number>` | 字号乘数 |
| aniTimeFactor | `Ref<number>` | 动画时长乘数 |

## 示例

### 最小接入

取自框架 demo 的设置页：用 5 个 `sn-slider` 调节各乘数。乘数需放大 10 倍取整后再交给 slider（步进为 1），显示时再还原为一位小数。

```vue
<template>
	<sn-page title="设置" :show-back="true">
		<view class="slider-block" flatten>
			<view class="slider-label-row" flatten>
				<sn-text font-size="$13" color="$text" flatten>字体大小</sn-text>
				<sn-text bold font-size="$13" color="$primary" flatten>{{ fontsizeFactorText }}×</sn-text>
			</view>
			<sn-slider :model-value="fontsizeFactorInt" :min="6" :max="16" :step="1"
				active-color="$primary" inactive-color="$line" @change="onFontsizeChange" />
		</view>
		<view class="slider-block" flatten>
			<view class="slider-label-row" flatten>
				<sn-text font-size="$13" color="$text" flatten>圆角</sn-text>
				<sn-text bold font-size="$13" color="$primary" flatten>{{ radiusFactorText }}×</sn-text>
			</view>
			<sn-slider :model-value="radiusFactorInt" :min="0" :max="20" :step="1"
				active-color="$primary" inactive-color="$line" @change="onRadiusChange" />
		</view>
	</sn-page>
</template>

<script lang="uts" setup>
import { $snui, useFactors } from '@/uni_modules/sinle-ui/index.uts'

const { marginFactor, paddingFactor, fontsizeFactor, radiusFactor, aniTimeFactor } = useFactors()

const fontsizeFactorInt = computed<number>(() => Math.round(fontsizeFactor.value * 10))
const radiusFactorInt = computed<number>(() => Math.round(radiusFactor.value * 10))

function formatFactor(val: number): string {
	const i = Math.round(val * 10)
	return (i / 10).toString()
}

const fontsizeFactorText = computed<string>(() => formatFactor(fontsizeFactor.value))
const radiusFactorText = computed<string>(() => formatFactor(radiusFactor.value))

function onFontsizeChange(idx: number): void {
	$snui.fontsizeFactor = idx / 10
}

function onRadiusChange(idx: number): void {
	$snui.radiusFactor = idx / 10
}
</script>
```

### 动画速度档位

`aniTimeFactor` 是连续值，设置页通常将其映射为几档离散速度：

```typescript
const aniTimeFactorLabels = computed<string[]>(() => [t('settings.aniOff'), '×0.5', '×1', '×1.5', '×2'])

const aniTimeFactorIdx = computed<number>(() => {
	const val = aniTimeFactor.value
	if (val <= 0) return 0
	if (val <= 0.5) return 1
	if (val <= 1) return 2
	if (val <= 1.5) return 3
	return 4
})

const aniTimeFactorLabel = computed<string>(() => aniTimeFactorLabels.value[aniTimeFactorIdx.value])

function onAniTimeFactorChange(idx: number): void {
	const values = [0, 0.5, 1, 1.5, 2]
	$snui.aniTimeFactor = values[idx]
}
```

### 使用要点

- 五个乘数均为 `computed<number>`，在 `script` 中必须写 `.value`；模板中自动解包。
- 本 hook 只负责**读取**。写入请直接赋值 `$snui.fontsizeFactor` 等属性，赋值后本 hook 的返回值会自动更新。
- 乘数对应关系：`fontsizeFactor` 字号、`radiusFactor` 圆角、`marginFactor` 外间距、`paddingFactor` 内间距、`aniTimeFactor` 动画时长乘数（`0` 关闭动画、`1` 标准、`2` 慢速）。
- 组件内部固定设计值应写成 `Math.round(14 * $snui.fontsizeFactor)` 形式（框架统一用 `Math.round` 取整）；用户通过 props 传入的尺寸值则交给 [useResolve](/api/hooks/use-resolve) 的 `$` 语法处理，两者不要混用。
- 修改乘数会写入当前风格对象并自动持久化，应用重启后保持。
