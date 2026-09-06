# sn-notice-bar
> 旧版组件：sn-notice-bar.md
**旧版状态**：旧版已有通知栏组件，支持 scroll/swiper 两种模式、可关闭，颜色与字号通过独立 props（bgColor/textColor/iconColor 等）配置。
**差异明细**：
- 新增属性：`padding`（上下内边距，决定通知栏高度）、`textStyle`、`textClass`、`iconStyle`、`iconClass`、`closeStyle`、`closeClass`（外部样式/外部类，替代原独立颜色与字号 props）
- 移除属性：`bgColor`、`borderRadius`、`textColor`、`textSize`、`iconColor`、`iconSize`、`customTextStyle`、`customIconStyle`
- 更名：`customTextStyle`→`textStyle`、`customIconStyle`→`iconStyle`
- 类型或默认值变化：`speed`：Number→String \| Number（支持带 px 的字符串）；`customStyle`：UTSJSONObject→UTSJSONObject \| String；`texts` 默认值明确为 `[]`；其余原有属性（icon/speed/mode/swiperInterval/vertical/closable/disabled）默认值不变
- 行为变化：通知栏背景固定为 `$warningLight`、文本与图标颜色固定为 `$warning`，不再提供颜色类 props，需自定义时经 `text-style`/`icon-style` 覆盖；文本与图标大小固定为 14px/16px × fontsizeFactor；新增关闭按钮节点（`closable` 原有，现可用 `close-style`/`close-class` 定制）；滚动动画改为基于 UniElement DOM 动画实现，页面显示/隐藏与窗口尺寸变化时自动重新测量并续播
- 新增事件、方法、插槽：无（事件仍仅有 `close`，无新增方法与插槽）
