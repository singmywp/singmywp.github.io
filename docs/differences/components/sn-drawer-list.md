# sn-drawer-list

> 旧版组件：无（v2 新增）

**旧版状态**：v1.1.6 无此组件，v2 新增。

**差异明细**：

- v2 新增组合组件：由 `sn-drawer` 的抽屉形态与 `sn-list-view` 长列表组合而成，专用于底部抽屉内的长列表场景
- 相比 `sn-drawer` 的差异：面板固定从底部滑出（不提供 `position`、`width`、`slideWidth`），`height` 支持百分比；列表滚动到顶部后继续下滑自动切换为拖拽面板，列表未到顶部时正常滚动内容，滚动与关闭手势互不冲突
- 内部 `sn-list-view` 属性全量透传（滚动控制、回弹、下拉刷新、加载更多、回到顶部等），并提供 `v-model:refresher-triggered`、`v-model:loadmore-status` 两个双向绑定与 `scrolltoupper` / `scrolltolower` / `scroll` / `scrollend` / `refresher*` / `loadmore` / `click` 等列表事件透传
- 内容通过作用域插槽渲染（暴露 `item` 与 `index`），与 `sn-drawer` 的默认插槽不同
