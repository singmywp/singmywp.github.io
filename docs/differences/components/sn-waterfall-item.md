# sn-waterfall-item

**旧版状态**：v1 提供瀑布流条目 `sn-waterfall-item`（配合 `sn-waterfall` 使用），属性为 `index`（子项索引，不可重复）、`height`（子项高度，为空则自动计算）、`imgSrc`（图片路径）、`bgColor`、`padding`、`borderRadius`、`imgBorderRadius` 与 `customStyle` / `customImageStyle`；内部以 `mode="widthFix"` 的 `<image>` + `@load` 回调测量高度。

**删除结论**：v2 **已移除** `sn-waterfall-item` 组件，能力由 `sn-waterflow` 的作用域插槽承接。

**删除原因**：

- 条目需手写 `index` 且不可重复，与 `v-for` 的索引强耦合，出错时表现为布局错位而非报错，排查困难。
- `imgSrc` / `imgBorderRadius` / `bgColor` 等属性把「图片内容」硬编码进条目，实际业务中条目内容远不止一张图，几乎都需要插槽覆盖，属性封装价值低。
- 高度测量依赖 `<image>` 的 `@load` 回调，图片加载失败或非图片内容时高度回退逻辑不明确。
- 与容器同属旧版测量 + 绝对定位方案，一并随 `sn-waterfall` → `sn-waterflow` 重构而淘汰。

**替代方案**：

- 条目内容直接在 `sn-waterflow` 的作用域插槽内书写，组件自行按内容实测高度排布，无需声明索引与高度：

```vue
<template>
	<sn-waterflow :list="list" :cross-axis-count="2">
		<template #default="{ item, index }">
			<view class="flow-item">
				<sn-image :src="item.src" mode="widthFix" />
				<sn-text :text="item.title" font-size="$13" custom-style="padding: 8px;" />
			</view>
		</template>
	</sn-waterflow>
</template>

<style lang="scss">
	.flow-item {
		background-color: var(--sn-front);
		border-radius: $10px;
		overflow: hidden;
	}
</style>
```

- 属性对应关系：

| 旧版 `sn-waterfall-item` | 替代方案 |
| ------------------------ | -------- |
| `index` | 作用域插槽自动提供 `index`，无需手动声明 |
| `height` | 组件自动实测内容高度 |
| `imgSrc` | 在插槽内使用 `sn-image` 的 `src` |
| `bgColor` / `padding` / `borderRadius` | 插槽外层容器的样式 |
| `imgBorderRadius` | 插槽内 `sn-image` 的 `custom-style` |
| `customStyle` / `customImageStyle` | 插槽内元素的 `custom-style` 或外部类 |
