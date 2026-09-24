# sn-menu

**旧版状态**：v1.1.6 无独立的菜单容器组件，仅有 `sn-menu-item` 菜单项子组件——以子组件方式逐项书写菜单项（或开启 `listMode` 嵌入 `list-view`），v2 将其重构为锚点定位、`items` 数组驱动的 `sn-menu` 组件，**旧 `sn-menu-item` 组件已移除**。

**差异明细**：

- 架构重构（子组件 → 选项驱动）：
  - v1：`sn-menu-item` 作为菜单型组件的子项，通过 `icon` / `text` 等 props 逐个书写，并支持 `default` / `header` / `body` / `footer` 四个插槽替换内容，`listMode` 为 `true` 时可作为 `list-view` 的子组件
  - v2：移除 `sn-menu-item`，由 `sn-menu` 的 `items` 属性（`Array<SnDataItem>`）数组驱动渲染，菜单项配置（`text` / `icon` / `value` / `color` / `disabled`）集中在数据中，不再提供插槽
- 移除属性（v1 `sn-menu-item` 的零散样式 props 不再逐项提供）：`listMode`、`icon`、`text`、`borderRadius`、`iconColor`、`iconSize`、`iconPosition`、`textColor`、`textSize`、`textAlign`、`padding`、`disabled`、`bgColor`、`activeBgColor`、`disabledBgColor`、`disabledTextColor`、`disabledIconColor`、`customIconStyle`、`customTextStyle`、`customStyle`（对应能力改由 `SnDataItem.color` / `disabled`、`cellStyle` / `cellClass` / `cellBorder`、`menuStyle` / `menuClass` 统一控制）
- 新增属性（v2 `sn-menu` 全部为新增）：`show`（v-model:show）、`target`（锚点选择器）、`align`（`left` / `center` / `right` 对齐）、`items`、`width`、`zIndex`、`showArrow`、`overlay`、`overlayOpacity`、`overlayStyle`、`overlayClass`、`menuStyle`、`menuClass`、`aniTime`、`cellStyle`、`cellClass`、`cellBorder`、`closeOnClickOverlay`
- 移除插槽：`default`、`header`、`body`、`footer`（v2 无插槽）
- 新增事件：`update:show`、`select`（点击菜单项，携带索引与选项数据）、`clickoverlay`、`beforeenter`、`enter`、`afterenter`、`beforeleave`、`leave`、`afterleave`
- 行为变化：
  - v1 `sn-menu-item` 只负责单项 UI，显隐与定位由宿主自行处理；v2 `sn-menu` 内置锚点定位（`target`）、下方空间不足时自动翻转到锚点上方弹出、三角箭头指向、遮罩与点击遮罩关闭、选中后自动关闭等完整弹出层逻辑
  - 菜单项内部复用 `sn-cell` 实现，按压态由 hover 机制驱动（`background-color: var(--sn-line)`）
- 方法：v2 无 `defineExpose` 方法，显隐完全由 `v-model:show` 控制
- v1 `listMode` 嵌入 `list-view` 的长列表菜单场景，v2 可改用 `sn-drawer-list`（抽屉长列表）等组件实现
