# useResolve

`$` 前缀动态尺寸解析与颜色简写解析。

2.0 起 Resolve 从 Utils 工具库迁移为钩子：组件收到尺寸类、颜色类 props 后，通过 `useResolve()` 获取解析函数进行处理。`$` 是唯一的"动态"标记——带 `$` 的值乘以对应全局乘数，不带 `$` 的值返回原始值。

```typescript
import { useResolve } from '@/uni_modules/sinle-ui'
```

## 获取方式

```typescript
const resolver = useResolve()
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| resolveColor | (val: string, defaultVal?: string) => string | 颜色解析：`$xxx` 自动转 `var(--sn-xxx)` CSS 变量，非 `$` 开头（如 `var(--sn-primary-text-dark)`、`#fff`、`rgba(...)`）原样返回；`val` 为空时使用 `defaultVal` |
| resolveSize | (val: string \| number, type: [[SnResolveType@api]], defaultVal?: string \| number) => string | 尺寸解析：`$16` 乘以对应乘数后加单位（`px` / `ms`），`16px`、`16` 等无 `$` 值原样返回；支持空格分隔的多段值（如 `'$16px $20px'`） |
| resolveSizeNum | (val: string \| number, type: [[SnResolveType@api]], defaultVal?: string \| number) => number | 同 `resolveSize`，但返回四舍五入后的数值 |

:::type-fields SnResolveType

| 可选值 | 备注 |
| :--- | :--- |
| `font` | 字号 |
| `radius` | 圆角 |
| `margin` | 外间距 |
| `padding` | 内间距 |
| `aniTime` | 动画时长 |

[useResolve](/api/hooks/use-resolve) 解析函数的解析类型，决定 `$xxx` 乘以哪个乘数

:::

## 解析规则

| 输入示例 | type | 输出（fontsizeFactor=1 时） | 说明 |
| :--- | :--- | :--- | :--- |
| `'$16'` | `'font'` | `16px` | 16 × 字号乘数 |
| `'16px'` | `'font'` | `16px` | 无 `$`，返回原始值 |
| `16` | `'font'` | `16px` | 数字，返回原始值 |
| `'$250'` | `'aniTime'` | `250ms` | 动画时长单位为 ms |
| `'$16px $20px'` | `'padding'` | `16px 20px` | 多段值逐段解析 |
| `'$primaryTextDark'` | —（resolveColor） | `var(--sn-primary-text-dark)` | 颜色简写 |

## 示例

### 直接观察解析结果

取自框架 demo 的 API 页，把各输入值的解析结果直接列出来对照：

```typescript
import { useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

type DemoItem = {
	name: string
	value: string
}

const resolveItems = computed<DemoItem[]>(() => {
	return [
		{ name: "resolveSize('$16', 'font')", value: resolver.resolveSize('$16', 'font') },
		{ name: "resolveSize('16px', 'font')", value: resolver.resolveSize('16px', 'font') },
		{ name: "resolveSize(16, 'font')", value: resolver.resolveSize(16, 'font') },
		{ name: "resolveSizeNum('$16', 'font')", value: resolver.resolveSizeNum('$16', 'font').toString() },
		{ name: "resolveSizeNum(16, 'font')", value: resolver.resolveSizeNum(16, 'font').toString() },
		{ name: "resolveColor('$primaryTextDark')", value: resolver.resolveColor('$primaryTextDark') },
		{ name: "resolveColor('#ff0000')", value: resolver.resolveColor('#ff0000') }
	]
})
```

```vue
<view v-for="(item, i) in resolveItems" :key="'v' + i" flatten>
	<sn-text font-size="$12" :color="nameColor" custom-style="flex:1;">{{ item.name }}</sn-text>
	<sn-text font-size="$12" :color="valueColor" custom-style="flex:1;text-align:right;">{{ item.value }}</sn-text>
</view>
```

### 组件内解析 props

框架组件（如 `sn-alert`）的标准写法：props 有值时解析用户值，为空时回退到按乘数计算的默认值。

```typescript
const resolver = useResolve()

const textSizeC = computed<string>(() => {
	if (props.textSize != null && props.textSize != '') {
		return resolver.resolveSize(props.textSize, 'font')
	}
	return `${Math.round(14 * $snui.fontsizeFactor)}px`
})

const borderRadiusC = computed<string>(() => {
	if (props.borderRadius != null && props.borderRadius != '') {
		return resolver.resolveSize(props.borderRadius, 'radius')
	}
	return `${Math.round(8 * $snui.radiusFactor)}px`
})

const iconSizeNum = computed<number>(() => {
	if (props.iconSize != null && props.iconSize != '') {
		return resolver.resolveSizeNum(props.iconSize, 'font')
	}
	return Math.round(16 * $snui.fontsizeFactor)
})
```

颜色类 props 通常再包一层回退逻辑：

```typescript
function resolveColor(propVal: string, fallback: string): string {
	if (propVal != '') {
		return resolver.resolveColor(propVal)
	}
	return fallback
}

const bgColorC = computed<string>(() => {
	return resolveColor(props.bgColor, getThemeColor(typeC.value, isDark.value ? '' : 'Light'))
})
```

### 使用要点

- 第二个参数 `type` 必填，取 `'font'` / `'radius'` / `'margin'` / `'padding'` / `'aniTime'`，决定 `$` 值乘以哪个乘数以及输出单位（`aniTime` 为 `ms`，其余为 `px`）。
- `resolveSize` 返回带单位字符串，可直接拼进 style；`resolveSizeNum` 返回四舍五入后的数值，用于需要在 JS 中继续计算的场景（如图标尺寸）。
- 带 `$` 的值只支持纯数字 + `px`/无单位，且不支持计算表达式；解析失败时原样返回输入值。
- 字符串含空格时按空格分段逐段解析，适用于 `'$16px $20px'` 这类简写值。
- `resolveColor` 仅处理 `$` 前缀（转 `var(--sn-xxx)`，下划线/驼峰会转为 kebab-case），`#fff`、`rgba(...)`、`var(...)` 等原样返回；`val` 为空时返回 `defaultVal`。
- 解析结果依赖全局乘数，必须放在 `computed` 中求值，否则乘数变化后不会更新。
