# useExternalStyle

外部样式透传转字符串。将组件接收的 `UTSJSONObject | String` 外部样式（`customStyle`、`{语义}Style` 等）统一转为样式字符串。为内部使用，亦可复用。

从对应源文件导入：

```typescript
import { useExternalStyle } from '@/uni_modules/sinle-ui/core/private/use-external-style.uts'
```

## 参数与返回值

`useExternalStyle(source: () => UTSJSONObject | string)` 返回 `Ref<string>`，即转换后的 `key:value;` 拼接字符串。

- 参数 `source` 为返回透传样式的函数（通常为 `() => props.customStyle`），保证透传值变化时自动重新转换。
- 转换规则：字符串原样返回（判空后）；`UTSJSONObject` 逐字段转为 kebab-case 的 `key:value;` 片段并拼接，`null` 值字段跳过。

另提供独立工具函数 `externalStyleToText(style: UTSJSONObject | string): string`，即上述转换的非响应式版本。

## 示例

### 最小接入

框架组件（如 `sn-alert`）的标准写法：每个 externalStyle 类 prop 各调用一次，得到可直接绑定的样式字符串。

```typescript
import { useExternalStyle } from '../../core/private/use-external-style.uts'

const customStyleText = useExternalStyle((): UTSJSONObject | string => props.customStyle)
const textStyleText = useExternalStyle((): UTSJSONObject | string => props.textStyle)
const iconStyleText = useExternalStyle((): UTSJSONObject | string => props.iconStyle)
```

```vue
<view class="sn-alert" :class="customClass" :style="customStyleText">
	<text class="sn-alert-text" :class="textClass" :style="`${textStyleText}${textStyleC}`">{{ text }}</text>
</view>
```

### 与内部样式合并

透传结果作为后置覆盖与组件默认样式拼接，用户传入的同名字段优先级更高（后写的覆盖先写的）：

```typescript
const customStyleText = useExternalStyle((): UTSJSONObject | string => props.customStyle)

const rootStyleC = computed<string>(() => {
	return `padding-top:${Math.round(8 * $snui.paddingFactor)}px;
padding-bottom:${Math.round(8 * $snui.paddingFactor)}px;
${customStyleText.value}`
})
```

### 点击态样式

`sn-button` 中按下时才应用用户传入的 `hoverStyle`：

```typescript
const hoverStyleText = computed<string>(() => {
	if (!pressed.value || !hasHoverStyle.value) return ''
	return externalStyleToText(props.hoverStyle)
})
```

### 使用要点

- 参数必须写成**返回 props 的函数**（如 `() => props.customStyle`）而非直接传值，否则透传样式变化时不会重新转换。
- 仅适用于 externalStyle 类透穿样式（`customStyle`、`textStyle`、`iconStyle` 等）；组件自身内部样式应直接用 `computed` 构建 Map 或字符串，不要绕经本 hook。
- 转换规则：字符串判空后原样返回；`UTSJSONObject` 逐字段按**小驼峰转 kebab-case** 拼接为 `key:value;` 片段，`null` 值字段跳过。因此值需自带单位（如 `16px` 而非 `16`）。
- 非响应式场景可直接用 `externalStyleToText(style)`，无需在 `setup` 中调用 hook。
- 内部实现按平台分支：App 端经 `toMap()` 遍历，非 App 端用 `Object.keys`；写组件时无需关心该差异。
- 不要把它用于 `Map` 类型的值——组件对外的 `customStyle` / `{语义}Style` 只接受 `UTSJSONObject | String`。
