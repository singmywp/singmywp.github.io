# sn-waterfall

**旧版状态**：v1 提供瀑布流容器 `sn-waterfall`，属性为 `col`（列数，默认 2）、`spacing`（子项间距）与 `customStyle`；子组件为 `sn-waterfall-item`。容器通过 `useResize` 监听尺寸、测量子项高度后分配列位置，需固定容器高度方可正常滚动。

**删除结论**：v2 **已移除** `sn-waterfall` 组件，更名重构为 **`sn-waterflow`**。

**删除原因**：

- 旧版由框架自行测量并绝对定位子项，条目高度变化时需整体重排，长列表场景性能与滚动流畅度不足。
- 传入手写 `sn-waterfall-item` 的写法与 `sn-longlist` 同类问题：子组件在特定情况下被渲染为普通 `view`，引发内存泄漏。
- Web 端缺乏虚拟滚动，条目较多时滚动卡顿。
- 属性过于精简（仅 `col` / `spacing`），无法覆盖响应式列数、下拉刷新、加载更多等实际需求。

**替代方案**：

- 使用 **`sn-waterflow`**，改为**数据驱动 + 作用域插槽**：

```vue
<template>
	<sn-waterflow :list="list" :cross-axis-count="2" cross-axis-gap="$10px" main-axis-gap="$10px">
		<template #default="{ item }">
			<sn-card :title="item.title">
				<sn-image :src="item.src" mode="widthFix" />
			</sn-card>
		</template>
	</sn-waterflow>
</template>
```

- 主要变化对照：

| 旧版 `sn-waterfall` | 替代方案 `sn-waterflow` |
| ------------------- | ----------------------- |
| 子项手写 `<sn-waterfall-item>` | `list` 数据 + 作用域插槽（App 端支持 `type` 分组复用回收） |
| `col` | `crossAxisCount`（下方新增 `colWidth` 可按容器宽度自适应列数） |
| `spacing`（行列间距合一） | `crossAxisGap`（列间距）+ `mainAxisGap`（行间距） |
| 需固定容器高度 | 无需手动指定高度 |
| — | 新增 `breakpoints`（响应式断点，按容器宽度切换列数）、`maxCrossAxisExtent`（单列最大宽度自动增列） |
| — | 新增 `v-model:refresher-triggered` / `v-model:loadmore-status` / `loadmore` / `backtop*` 等长列表配套能力 |
| — | 新增 `estimatedItemHeight` / `overscan`（Web 端虚拟滚动参数）、`scrollTop` / `lowerThreshold` 等滚动控制 |

- 关键差异：**Web 端 v2 启用虚拟滚动**，长列表滚动更流畅；**App 端基于官方内置 `waterflow` 封装**，复用原生能力而非自行定位。
- 条目内请尽量减少自定义组件层级以保持滚动性能。
