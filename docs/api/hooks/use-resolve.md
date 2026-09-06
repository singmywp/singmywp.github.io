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

| 可选值 |
| :--- |
| `font` \| `radius` \| `margin` \| `padding` \| `aniTime` |

[useResolve](/api/hooks/use-resolve) 解析函数的解析类型，决定 `$xxx` 乘以哪个乘数：`font` 字号、`radius` 圆角、`margin` 外间距、`padding` 内间距、`aniTime` 动画时长。

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

```vue
<script setup>
	import { useResolve } from '@/uni_modules/sinle-ui'

	const resolver = useResolve()

	const fontSizeC = computed<string>(() => resolver.resolveSize(props.fontSize, 'font'))
	const colorC = computed<string>(() => resolver.resolveColor(props.color, $snui.colors.text))
</script>
```
