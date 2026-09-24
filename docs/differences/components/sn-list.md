# sn-list

**旧版状态**：v1 提供静态列表容器 `sn-list`，属性为 `showBorder`（列表项分割线）、`bgColor` 与 `customStyle`；子组件仅可为 `sn-list-item` 或 `sn-list-chat`，容器通过 `provide('showBorder')` + `defineExpose({ register })` 与子项协作，在 `onMounted` / `onUpdated` 中遍历子实例调用 `setOrder` 生成最后一项的边界处理。

**删除结论**：v2 **已移除** `sn-list` 组件（连同 `sn-list-item` / `sn-list-chat`）。

**删除原因**：

- 容器与子项的协作依赖「子组件实例注册 + `$callMethod` 反向调用」的 VDOM 时代写法，在 uni-app x 蒸汽模式下组件实例与样式隔离机制均已变化，该模式不再可靠。
- 列表项的排版、分割线、间距等能力已由通用单元格 `sn-cell` 统一承接，`sn-list` 作为一层纯容器已无必要。
- 列表背景色 / 圆角直接用父容器样式即可实现，封装为组件反而限制布局自由度。

**替代方案**：

- 用内置 `<view>` 作为列表容器，列表项一律改用 `sn-cell`，分割线由 `sn-cell` 的 `border` 属性控制：

```vue
<template>
	<view class="list">
		<sn-cell title="标题一" value="内容" :border="true" />
		<sn-cell title="标题二" value="内容" :border="true" />
		<sn-cell title="标题三" value="内容" :border="false" />
	</view>
</template>

<style lang="scss">
	.list {
		background-color: var(--sn-front);
		border-radius: $12px;
	}
</style>
```

- 旧版 `showBorder` → `sn-cell` 的 `border`（末项传 `false` 即可，无需再依赖容器遍历子项）。
- 旧版 `bgColor` / `customStyle` → 直接写在容器 `<view>` 的样式或类上。
- 需要点击态时使用 `sn-cell` 内置的 `hoverStyle` 机制，无需自行监听 `touchstart` / `mousedown`。
