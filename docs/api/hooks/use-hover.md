# useHover

统一点击态（按下反馈）机制。组件的按下/抬起/过渡状态管理，替代旧版 `hover-class`。本 hook 为组件内部使用，也可用于自定义组件。

```typescript
import { useHover } from '@/uni_modules/sinle-ui'
```

## 参数

`useHover(options: [UseHoverOptions](/api/types/api#usehoveroptions))`，其中 `UseHoverOptions` 各字段为返回当前配置的**函数**：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| enabled | () => boolean | 是否启用点击态（如禁用态返回 `false`） |
| startTime | () => number | 按下后进入点击态的延迟（ms） |
| stayTime | () => number | 抬起后点击态保留时长（ms） |
| transTime | () => number | 点击态过渡动画时长（ms） |
| normalTime | () => number | 常态过渡动画时长（ms） |

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| pressed | Ref\\<boolean\\> | 是否处于按下状态 |
| transitionDuration | Ref\\<string\\> | 当前过渡时长（如 `'150ms'`），绑定到节点 `transition-duration` |
| onTouchStart | (e: UniTouchEvent) => void | 绑定到节点 `@touchstart` |
| onTouchEnd | (e: UniTouchEvent) => void | 绑定到节点 `@touchend` |
| onTouchMove | (e: UniTouchEvent) => void | 绑定到节点 `@touchmove`，移动超过阈值自动取消点击态 |
| onTouchCancel | (e: UniTouchEvent) => void | 绑定到节点 `@touchcancel` |

## 示例

```vue
<script setup>
	const hover = useHover({
		enabled: () => !disabled.value,
		startTime: () => 0,
		stayTime: () => 0,
		transTime: () => 150,
		normalTime: () => $snui.aniTimeShort
	})
</script>
```
