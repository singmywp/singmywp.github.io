# sn-longlist

> 旧版组件：sn-longlist.md

**旧版状态**：v1 提供长列表容器 `sn-longlist`，在 `list-view` 上封装下拉刷新（`sn-refresher`）、加载更多（`sn-loadmore`）与回到顶部（`sn-backtop`）三件套，子组件为原生 `<list-item>`；属性涵盖 `refresher*` 系列、`loadmore` / `loadmoreStatus` / `loadmoreConfig`、`backtop`、`scrollTop` 等，并暴露 `scrollTo` 与 `registerBacktop` 方法。

**删除结论**：v2 **已移除** `sn-longlist` 组件，重构为 **`sn-list-view`**。

**删除原因**：

- 旧版把「滚动容器」与「子项容器」分离：父组件是 `sn-longlist`，子项必须手写原生 `<list-item>`。经实测，直接传入的 `list-item` / `flow-item` 在特定写法下会被渲染为普通 `view`，从而引发**内存泄漏**与滚动性能退化。
- 下拉刷新状态（`refresherTriggered`）与加载更多状态（`loadmoreStatus`）为单向 prop，父组件需自行监听事件后再回写，状态容易与真实滚动状态不同步。
- 旧版 `loadmore` 默认值为 `true`、`backtop` 默认值为 `true`，容器默认附带额外 UI，与「容器本身只是容器」的直觉不符。

**替代方案**：

- 使用 **`sn-list-view`**，改为**数据驱动 + 作用域插槽**渲染：

```vue
<template>
	<sn-list-view :list="list" v-model:refresher-triggered="refreshing"
		v-model:loadmore-status="loadmoreStatus" :loadmore="true" @loadmore="onLoadmore"
		@refresherrefresh="onRefresh">
		<template #default="{ item }">
			<sn-cell :title="item.title" :border="true" />
		</template>
	</sn-list-view>
</template>
```

- 主要变化对照：

| 旧版 `sn-longlist` | 替代方案 `sn-list-view` |
| ------------------ | ----------------------- |
| 子项手写 `<list-item>` | `list` 数据 + 作用域插槽（按数据项 `type` 分组复用回收） |
| `refresherTriggered`（单向 prop + 事件回写） | `v-model:refresher-triggered`（双向绑定） |
| `loadmoreStatus`（单向 prop + 事件回写） | `v-model:loadmore-status`（双向绑定） |
| `loadmore` 默认 `true` | `loadmore` 默认 `false`（需显式开启） |
| `backtop` 默认 `true` | `backtop` 默认 `false`（需显式开启） |
| `loadmoreConfig` / `refresherConfig` | 保留同名同结构配置 |
| 回到顶部仅可开关 | 新增 `backtopTarget` / `backtopTop` / `backtopRight` / `backtopBottom` 精细配置 |
| — | 新增 `direction`（滚动方向）、`bounces`、`nested` / `nestedScrollChild`、`scrollAnchoring`、`initialScrollBottom`、`crossAxisCount` 等 |

- 相关组件同步调整：下拉刷新态由 `sn-refresher` 表达、加载更多由 `sn-loadmore` 表达，二者仍可独立使用。
- 瀑布流的长列表场景请使用 `sn-waterflow`（同样为数据驱动 + 作用域插槽）。
