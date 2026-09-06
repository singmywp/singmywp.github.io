# useTheme

获取与切换当前主题（亮色 / 暗色 / 自动跟随系统）。

```typescript
import { useTheme } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| theme | Ref\\<string\\> | 当前主题，`'light'` 或 `'dark'` |
| isDark | Ref\\<boolean\\> | 是否为暗色模式 |
| isLight | Ref\\<boolean\\> | 是否为亮色模式 |
| isAuto | Ref\\<boolean\\> | 是否跟随系统自动切换 |
| setTheme | (val: string) => void | 设置主题，同时关闭自动跟随 |
| setAutoTheme | (val: boolean) => void | 设置是否跟随系统自动切换 |
| toggleTheme | () => void | 在当前主题间切换，同时关闭自动跟随 |

## 示例

```vue
<script setup>
	const { isDark, toggleTheme } = useTheme()
</script>
```
