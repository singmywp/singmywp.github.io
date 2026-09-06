# sn-page

> 旧版组件：sn-page.md

**旧版状态**：1.1.6 已提供，是可配置滚动参数（方向、阈值、回弹、下拉刷新等）的页面根容器。

**差异明细**：

- 新增属性：`title`（非空时自动渲染内置 sn-topbar 导航栏）、`showBack`（控制内置导航栏返回按钮）、`fillContent`（内容区填满剩余高度、禁用内置滚动）
- 移除属性：`scrollOn`、`scrollTop`、`scrollWithAnimation`、`direction`、`upperThreshold`、`lowerThreshold`、`padding`、`bounces`（内容区改为固定的内置纵向 scroll-view，不再暴露滚动配置）
- 类型或默认值变化：`bgColor` 类型 String→String，默认值 `$page`→`''`（空时自动取当前主题页面背景色）；`customStyle` 类型 UTSJSONObject→UTSJSONObject | String，默认值 `{}`→`''`
- 行为变化（核心新机制）：`onLoad` 时通过 `getCurrentPages()` 将原生页面 `navigationStyle` 设为 `custom`、`backgroundColorContent` 设为当前背景色，避免白屏闪烁；根节点注入全部主题颜色 CSS 变量（`--sn-*`）与动画时长变量（`--ani-time-short/normal/long`），弹出层类组件必须放在 `sn-page` 根节点下才能取到变量；`onPageShow` 时同步状态栏颜色；监听 `bgColor` 变化自动更新页面背景；内置内容区滚动时通知 sn-backtop 显隐
- 移除事件：旧版全部滚动、下拉刷新与嵌套滚动事件（`scroll`、`scrolltoupper`、`scrolltolower`、`scrollend`、`refresherpulling`、`refresherrefresh`、`refresherrestore`、`refresherabort`、`startnestedscroll`、`nestedprescroll`、`stopnestedscroll`）均不再对外触发
- 方法变化：`scrollTo` 参数由 `(x, y)` 变为 `(top, left)`（top 为纵向、left 为横向，Web 端平滑滚动）；新增 `registerBacktop`（供 sn-backtop 注册滚动回调）
- 新增事件、方法、插槽：方法 `registerBacktop`；插槽无差异（default 保留）
