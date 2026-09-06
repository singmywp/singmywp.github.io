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

```vue
<script setup>
	const customStyleText = useExternalStyle((): UTSJSONObject | string => props.customStyle)
</script>
```
