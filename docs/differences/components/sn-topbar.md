# sn-topbar

**旧版状态**：1.1.6 已提供，是含标题、返回按钮、功能按钮与内置菜单的顶部导航栏。

**差异明细**：

- 新增属性：`statusBar`（是否预留系统状态栏高度）、`zIndex`（固定定位层级）、`titleStyle`（标题样式）、`titleClass`（标题外部类）、`hoverButtonStyle`（按钮按压态样式）、`buttonTextStyle`（按钮文字样式）、`buttonIconStyle`（按钮图标样式）
- 移除属性：`titleColor`、`titleFont`、`titleSize`、`menuBgColor`、`menuBorderRadius`、`activeMenuBgColor`、`boxShadow`、`border`、`borderRadius`、`buttonSize`、`buttonBgColor`、`customTitleStyle`、`customButtonStyle`、`customButtonIconStyle`、`customMenuStyle`（旧版菜单样式项随菜单改为内置 sn-menu 实现而移除）
- 更名：`customTitleStyle`→`titleStyle`、`customButtonStyle`→`buttonStyle`、`customButtonIconStyle`→`buttonIconStyle`
- 类型或默认值变化：`bgColor` 类型 String→String，默认值 `$page`→`''`（空时自动取当前主题页面背景色）；`height` 默认值 `$topbarHeight`→`''`（空时取全局 `$snui.topbarHeight`，APP 端内容区高度最大 48px）；`customStyle` 类型 UTSJSONObject→UTSJSONObject | String，默认值 `{}`→`''`
- 行为变化：返回按钮点击后除触发 `back` 事件外，页面栈大于 1 时组件内部自动执行 `uni.navigateBack()`；`fixed` 固定定位从根节点移入内部容器，并新增等高占位层避免内容被遮挡；标题字号固定为 18 × fontsizeFactor（旧版可用 titleSize/titleFont 定制）；返回/功能/菜单按钮统一为内置圆形 sn-button（旧版可配 buttonSize/buttonBgColor）；`menuButton` 为 true 或 `menuData` 非空时显示"更多"按钮，未配置菜单数据时点击触发 `featureclick`（item 仅含图标、index 为 -1）
- 事件更名：`button-click`→`featureclick`、`menu-click`→`menuselect`；新增 `back` 事件（旧文档未列出返回事件，v2 明确提供）
- 插槽：`header` / `default` / `footer` 保留；移除旧版 `menu` 插槽（菜单改由内置 sn-menu 实现，菜单项经 `menuData` 配置）
- 方法：无（旧版亦无对外方法）
