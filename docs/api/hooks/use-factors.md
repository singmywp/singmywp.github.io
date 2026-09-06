# useFactors

响应式读取五个全局尺寸乘数（修改 `$snui.*Factor` 后自动更新）。

```typescript
import { useFactors } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| marginFactor | Ref\\<number\\> | 外间距乘数 |
| paddingFactor | Ref\\<number\\> | 内间距乘数 |
| radiusFactor | Ref\\<number\\> | 圆角乘数 |
| fontsizeFactor | Ref\\<number\\> | 字号乘数 |
| aniTimeFactor | Ref\\<number\\> | 动画时长乘数 |

## 示例

```vue
<script setup>
	const { fontsizeFactor, aniTimeFactor } = useFactors()
</script>
```
