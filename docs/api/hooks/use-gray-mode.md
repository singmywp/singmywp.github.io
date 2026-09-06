# useGrayMode

哀悼置灰（灰度模式）状态与开关。开启后框架在页面根节点与全局弹窗上注入灰度滤镜，整个应用呈现黑白效果。

```typescript
import { useGrayMode } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| isGray | Ref\\<boolean\\> | 当前是否处于灰度模式 |
| setGrayMode | (val: boolean) => void | 设置灰度模式开关 |
| toggleGrayMode | () => void | 切换灰度模式 |

## 说明

- 灰度状态全局生效：`sn-page` 根节点与各 dialogPage（showToast / showModal / showActionsheet / showLoading）都会根据该状态注入 `grayscale` 滤镜。
- 一般在应用设置页提供开关（框架 demo 的设置页即如此实现），也可以由业务按需在特定日期自动开启。

## 示例

```vue
<script setup>
	const { isGray, toggleGrayMode } = useGrayMode()
</script>

<template>
	<sn-button :text="isGray ? '关闭灰度模式' : '开启灰度模式'" @click="toggleGrayMode" />
</template>
```
