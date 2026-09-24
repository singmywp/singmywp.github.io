# sn-waterflow

**旧版状态**：v1.1.6 的 `sn-waterfall` 为插槽拼装式瀑布流（子组件 `sn-waterfall-item`，支持列数与间距配置），官方文档明确标注"不完善、不支持虚拟列表、不建议正式使用、正在重构中"；v2 更名为 `sn-waterflow` 并基于官方 `waterflow` 组件与 Web 端自研虚拟滚动完全重写。
**差异明细**：

- 更名：组件名 `sn-waterfall` → `sn-waterflow`；子组件 `sn-waterfall-item` 移除（由数据插槽替代）
- 架构重构：
  - 插槽内手写 `sn-waterfall-item`（`index`/`height`/`imgSrc` 等属性拼装卡片）→ `list` 属性传数据数组 + 默认作用域插槽（`item`/`index`）渲染任意卡片内容
  - App 端改用官方 `waterflow` 组件，条目按数据项 `type` 字段分组复用回收（内部保留 `type` 值：刷新条目 `2`、加载更多条目 `6`）
  - Web 端为自研虚拟滚动瀑布流：动态测量条目高度、仅渲染可视区域及 `overscan` 范围条目，支持触底加载与触摸下拉刷新
- 移除属性：
  - `sn-waterfall` 的 `col`、`spacing`、`customStyle` 旧属性随重构取消（`col`/`spacing` 语义由新属性承接，见下）
  - `sn-waterfall-item` 的 `index`、`height`、`imgSrc`、`bgColor`、`padding`、`borderRadius`、`imgBorderRadius`、`customStyle`、`customImageStyle` 整体移除（卡片样式经作用域插槽自行编写）
- 更名：`col` → `crossAxisCount`；`spacing`（子项单一间距）→ `crossAxisGap`（列间距）+ `mainAxisGap`（行间距），且支持 `$` 简写
- 新增属性：
  - `list`（列表数据数组，核心属性）
  - `colWidth`（Web 端按列宽自适应列数）、`breakpoints`（Web 端响应式断点）、`estimatedItemHeight` / `overscan`（Web 端虚拟滚动参数）
  - `maxCrossAxisExtent`（iOS / HarmonyOS 端单列最大宽度自动增列）
  - 内置能力开关与配置：`refresherEnabled`、`refresherConfig`、`refresherThreshold`、`refresherMaxDragDistance`、`refresherBackground`、`refresherDefaultStyle`、`loadmore`、`showLoadmore`、`loadmoreConfig`、`backtop`、`backtopTarget`、`backtopTop`、`backtopRight`、`backtopBottom`
  - 滚动控制：`bounces`、`associativeContainer`、`upperThreshold`、`lowerThreshold`、`scrollTop`、`scrollLeft`、`scrollIntoView`、`scrollWithAnimation`、`showScrollbar`、`androidOverscroll`、`androidScrollbarDraggable`、`androidRefresherColor`、`enableBackToTop`、`enablePassive`
  - `customClass`（根节点外部样式类）
- 新增双向绑定：`v-model:refresher-triggered`（刷新状态）、`v-model:loadmore-status`（加载状态，触底/点击时组件内部自动改写）
- 新增事件：`refresh`、`scrolltoupper`、`scrolltolower`、`scroll`、`scrollend`、`refresherpulling`、`refresherrefresh`、`refresherrestore`、`refresherabort`、`loadmore`（旧版无任何事件）
- 新增方法：`scrollTo`、`refresh`、`stopRefresh`、`loadMore`、`registerBacktop`
- 插槽变化：默认插槽 → 默认作用域插槽（参数 `item`、`index`）；移除 `sn-waterfall-item` 的 `default` 插槽
- 行为变化：旧版"不建议正式使用"的实验实现 → 生产可用的复用回收 + 虚拟滚动双端实现；触底自动触发加载更多并经 `loadmore-status` 管理加载状态
