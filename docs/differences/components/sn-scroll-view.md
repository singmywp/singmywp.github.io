# sn-scroll-view
> 旧版组件：无（v2 新增组件）
**旧版状态**：v1.1.6 无此组件；v2 新增基于 `scroll-view` 封装的通用滚动视图容器，与 sn-list-view、sn-waterflow 共用同一套内置下拉刷新 / 加载更多 / 回到顶部机制。
**差异明细**：

- 新增组件，无旧版对应物。要点：
  - 通过 `direction` 属性控制滚动方向（`none` | `horizontal` | `vertical`），容器内部主轴方向自动跟随切换
  - 内置下拉刷新（`refresher-enabled` + `v-model:refresher-triggered` + `refresher-config`）、加载更多（`loadmore` + `v-model:loadmore-status` + `loadmore-config`）与回到顶部按钮（`backtop` 及 `backtop-*` 系列配置）
  - 支持嵌套滚动（`nested`、`associative-container`、`nested-scroll-child`）并透传 `startnestedscroll` / `nestedprescroll` / `stopnestedscroll` 三个协商事件
  - 暴露 `scrollTo`、`startRefresh` / `stopRefresh`、`registerBacktop` 方法
