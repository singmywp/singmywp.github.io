# sn-topbar

**旧版状态**：1.1.6 已提供，是含标题、返回按钮、功能按钮与内置菜单的顶部导航栏。

**差异明细**：

- 新增属性：`zIndex`（固定定位层级）、`customClass`（根节点外部类）、`titleStyle`（标题样式）、`titleClass`（标题外部类）、`hoverButtonStyle`（按钮按压态样式）、`buttonTextStyle`（按钮文字样式）、`buttonIconStyle`（按钮图标样式）、`blur` / `blurRadius` / `blurOpacity`（根容器背景模糊）；`statusBar` 控制是否向上覆盖状态栏区域并为内容预留状态栏高度（默认开启）
- 移除属性：`titleColor`、`titleFont`、`titleSize`、`menuBgColor`、`menuBorderRadius`、`activeMenuBgColor`、`boxShadow`、`border`、`borderRadius`、`buttonSize`、`buttonBgColor`、`customTitleStyle`、`customButtonStyle`、`customButtonIconStyle`、`customMenuStyle`（旧版菜单样式项随菜单改为内置 sn-menu 实现而移除）
- 更名：`customTitleStyle`→`titleStyle`、`customButtonStyle`→`buttonStyle`、`customButtonIconStyle`→`buttonIconStyle`
- 类型或默认值变化：`bgColor` 类型 String→String，默认值 `$page`→`''`（空时自动取当前主题页面背景色）；`height` 默认值 `$topbarHeight`→`''`（空时取全局 `$snui.topbarHeight`，Web 端在此值上 +8px、其他端直接使用该值）；`customStyle` 类型 UTSJSONObject→UTSJSONObject | String，默认值 `{}`→`''`
- 行为变化：返回按钮点击后除触发 `back` 事件外，页面栈大于 1 时组件内部自动执行 `uni.navigateBack()`；固定与非固定模式统一在根容器上设置定位，`statusBar` 为 true 时根容器背景向上覆盖状态栏区域并将内容下移状态栏高度，固定模式不再生成等高占位层；标题字号固定为 18 × fontsizeFactor（旧版可用 titleSize/titleFont 定制）；返回/功能/菜单按钮统一为内置圆形 sn-button（旧版可配 buttonSize/buttonBgColor）；`menuButton` 为 true 或 `menuData` 非空时显示"更多"按钮，未配置菜单数据时点击触发 `featureclick`（item 仅含图标、index 为 -1）
- 事件更名：`button-click`→`featureclick`、`menu-click`→`menuselect`；新增 `back` 事件（旧文档未列出返回事件，v2 明确提供）
- 插槽：`header` / `default` / `footer` 保留；移除旧版 `menu` 插槽（菜单改由内置 sn-menu 实现，菜单项经 `menuData` 配置）
- 方法：无（旧版亦无对外方法）

## 单层容器重构

固定与非固定模式统一使用唯一根容器，定位、背景色、背景模糊和自定义样式均作用于该容器。`statusBar` 为 true 时根容器向上覆盖状态栏区域并为内容预留状态栏高度；固定模式不再生成等高占位，使用方或 `sn-page` 负责内容间距。`blurOpacity` 仅在未显式传入 `bgColor` 时调整默认背景色透明度，不调整标题与按钮透明度。
