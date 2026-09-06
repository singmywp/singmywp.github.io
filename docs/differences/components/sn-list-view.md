# sn-list-view
> 旧版组件：sn-list.md 与 sn-longlist.md（v2 由二者合并/重构为数据驱动的 sn-list-view）
**旧版状态**：v1.1.6 拆分为两个组件——`sn-list`（静态展示列表，子组件 `sn-list-item`/`sn-list-chat`，内置标题/头像/图标模板）与 `sn-longlist`（长列表容器，基于 `list-view` 回收复用，插槽内手动放置 `list-item`）；v2 合并重构为单一数据驱动组件。
**差异明细**：

**与 sn-longlist 的差异（滚动长列表能力继承）**

- 架构重构：插槽内手写 `list-item` 的静态子节点模式 → `list` 属性传数据数组 + 默认作用域插槽（`item`/`index`）渲染，条目按数据项 `type` 字段自动分组复用（内部保留 `type` 值：刷新条目 `2`、加载更多条目 `99998`）
- 新增属性：
  - `list`（列表数据数组，核心属性）
  - `direction`（滚动方向，支持横向滚动）
  - `scrollLeft`（横向滚动位置）
  - `nested`（嵌套滚动模式开关，蒸汽模式经 `associative-container="nested-scroll-view"` 实现）
  - `nestedScrollChild`（嵌套滚动子容器 id）
  - `scrollAnchoring`（滚动锚定）
  - `initialScrollBottom`（初始定位到底部，聊天类场景）
  - `androidOverscroll` / `androidScrollbarDraggable` / `androidRefresherColor`（Android 平台属性）
  - `enableBackToTop`（iOS 平台属性）
  - `enablePassive`（Web 端 passive 滚动监听）
  - `backtopTarget` / `backtopTop` / `backtopRight` / `backtopBottom`（内置回到顶部按钮细项配置）
  - `customClass`（根节点外部样式类）
  - `padding`（预留参数）
- 移除属性：无（原属性全部保留）
- 更名：`refresherTriggered` → `v-model:refresher-triggered`（属性 → 双向绑定）；`loadmoreStatus` → `v-model:loadmore-status`（属性 → 双向绑定）
- 类型或默认值变化：
  - `bounces` 默认值：`false` → `true`
  - `showScrollbar` 默认值：`false` → `true`
  - `refresherEnabled` 默认值：`false` → `true`
  - `refresherMaxDragDistance` 默认值：`100` → `0`
  - `backtop` 默认值：`true` → `false`
  - `loadmore` 默认值：`true` → `false`
  - `associativeContainer` 默认值：未设置 → `''`
  - `customStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - 加载更多由 `scrolltolower` 与底部状态条点击统一触发：先抛 `loadmore` 事件再置位 `loading`，父组件在事件中同步改写 `loadmore-status` 不会被 loading 状态拦截
  - 开启下拉刷新时强制使用自定义刷新条（内部 `refresher-default-style` 置 `none`），避免原生雪花样式与自定义样式叠加
  - 滚动到顶部时自动复位下拉刷新条（刷新中不打断）
- 新增事件、方法、插槽：
  - 新增事件：`click`
  - 新增方法：`scrollTo`（滚动到指定位置）、`setDirection`（同步设置滚动方向）、`registerBacktop`（注册滚动回调）、`startRefresh` / `stopRefresh`（主动开始/结束刷新）
  - 插槽变化：默认插槽 → 默认作用域插槽（参数 `item`、`index`）

**与 sn-list 的差异（静态展示列表）**

- 旧 `sn-list` / `sn-list-item` / `sn-list-chat`（标题、副标题、头像、图标、徽标等内置模板及配套二十余项样式属性）整体不再由本组件提供；如需静态列表项布局，v2 使用 `sn-cell` 复用实现，本组件聚焦数据驱动长列表场景
