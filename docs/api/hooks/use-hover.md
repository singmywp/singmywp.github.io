# useHover

统一点击态（按下反馈）机制。组件的按下/抬起/过渡状态管理，替代旧版 `hover-class`。本 hook 为组件内部使用，也可用于自定义组件。

```typescript
import { useHover } from '@/uni_modules/sinle-ui'
```

## 参数

useHover(options: [UseHoverOptions](/api/types/api#usehoveroptions))，其中 `UseHoverOptions` 各字段为返回当前配置的**函数**：

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
| pressed | `Ref<boolean>` | 是否处于按下状态 |
| transitionDuration | `Ref<string>` | 当前过渡时长（如 `'150ms'`），绑定到节点 `transition-duration` |
| onTouchStart | (e: UniTouchEvent) => void | 绑定到节点 `@touchstart` |
| onTouchEnd | (e: UniTouchEvent) => void | 绑定到节点 `@touchend` |
| onTouchMove | (e: UniTouchEvent) => void | 绑定到节点 `@touchmove`，移动超过阈值自动取消点击态 |
| onTouchCancel | (e: UniTouchEvent) => void | 绑定到节点 `@touchcancel` |

## 示例

### 最小接入

将返回的事件处理器绑定到节点的触摸事件，根据 `pressed` 切换按下态样式；`transitionDuration` 绑定到节点 `transition-duration`（按下/抬起时自动在 `transTime` 与 `normalTime` 之间切换过渡时长）。

```vue
<template>
	<view
		class="demo-item"
		:style="itemStyle"
		@touchstart="hover.onTouchStart"
		@touchmove="hover.onTouchMove"
		@touchend="hover.onTouchEnd"
		@touchcancel="hover.onTouchCancel"
	>
		<text>{{ pressed ? '按住中' : '点击区域' }}</text>
	</view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useHover } from '@/uni_modules/sinle-ui'

const disabled = ref(false)

const hover = useHover({
	enabled: () => !disabled.value,
	startTime: () => 0,
	stayTime: () => 150,
	transTime: () => 150,
	normalTime: () => $snui.aniTimeShort
})

const pressed = hover.pressed

const itemStyle = computed(() => {
	return `transition-property: background-color, transform;
transition-duration: ${hover.transitionDuration.value};
background-color: ${pressed.value ? '#e8e8e8' : 'transparent'};
transform: ${pressed.value ? 'scale(0.97)' : 'scale(1)'};`
})
</script>
```

### 使用要点

- `enabled` 返回 `false` 时（如禁用态）按下态不生效，事件处理器仍可绑定，样式不受影响。
- `onTouchMove` 绑定后，手指移动超过阈值会自动取消按下态，适用于列表滚动等需要拦截滑动手势的场景。
- `pressed` 为响应式引用（`Ref<boolean>`），模板中使用时自动解包；绑定事件直接传 `hover.onTouchStart` 等即可，无需包裹箭头函数。
- `transitionDuration` 值为 `'150ms'` 形式的字符串，动态作用于 `transition-duration`，实现按下时快进、抬起时回弹过渡的效果。
