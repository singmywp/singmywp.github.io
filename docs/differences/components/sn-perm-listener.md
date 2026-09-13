# sn-perm-listener

> 旧版组件：sn-perm-listener.md（v1 为 UI 组件，v2 改为 API 插件 + sinle-ui 的 snu 权限 API）

**旧版状态**：v1 为 UI 组件 `<sn-perm-listener :data="permData">`，通过 `data` 属性（`Map<String, UTSJSONObject>`，每项 title / content / icon）配置权限说明，通过 `padding` / `position` / `maskOpacity` / `bgColor` / `iconSize` / `iconColor` / `contentSize` / `contentColor` / `titleSize` / `titleColor` / `customStyle` 等组件属性控制弹层样式，在系统授权弹窗出现时同步弹出说明弹窗。

**删除结论**：v2 **已移除 `sn-perm-listener` 组件标签形态**（组件目录已不存在），权限提示能力迁移为 **插件 API + sinle-ui 的 `snu` 权限 API**。

**删除原因**：

- 组件形态要求在每个需要提示的页面内摆放标签，依赖页面生命周期自动注册注销，页面多时需重复摆放，容易遗漏。
- 说明弹层需覆盖整个页面（含原生层），本质是全局弹层能力，挂在具体页面组件树内不符合其作用域，且受 `sn-page` 节点层级影响。
- 提升为 API 后可由应用统一配置一次样式与文案，无需逐页摆放标签。

**替代方案**：改用 `snu.setPermTips` / `snu.setPermTipsStyle` / `snu.registerPermListener` / `snu.unregisterPermListener` / `snu.hidePermTips`（底层插件同名方法可直接导入）。

**差异明细**：

- **形态变化（核心）**：v1 UI 组件 → v2 API 插件。v2 移除 `<sn-perm-listener>` 组件标签，改为插件底层方法 `registerPermListener` / `unregisterPermListener` / `setPermTips` / `setPermTipsStyle` / `hidePermTips`，并由 sinle-ui 以 `snu.setPermTips` / `snu.setPermTipsStyle` / `snu.registerPermListener` / `snu.unregisterPermListener` / `snu.hidePermTips` 封装对外。
- **移除**：v1 组件全部属性（`data`、`padding`、`position`、`maskOpacity`、`bgColor`、`iconSize`、`iconColor`、`contentSize`、`contentColor`、`titleSize`、`titleColor`、`customStyle`）。
- **新增**：`registerPermListener` 监听能力，回调 `onRequest`（发起申请时）/ `onConfirm`（系统弹窗弹出时）/ `onComplete`（完成时，返回权限名到 `grant` / `denied` 的映射）。
- **新增**：内容支持 HTML 富文本模式（`SnPermTipConfig.html`，Android 原生 TextView 渲染），同时设置 `html` 与 `title` / `content` / `icon` 时 HTML 优先。
- **新增**：样式改为 `setPermTipsStyle` 集中配置（`SnPermTipsStyleConfig`：position / bgColor / radius / padding / margin / titleColor / titleSize / contentColor / contentSize / iconColor / iconSize / spacing / maxWidth / aniTime），支持 `$主题色` 与 `$` 尺寸简写、动画时长，展示中可实时刷新。
- **行为变化**：`position` 可选值由 `top` \| `bottom` \| `left` \| `right` \| `center` 收敛为 `top` \| `bottom`。
- **行为变化**：`icon` 由图标名称（如 `image-circle-fill`）改为 24×24 viewBox 的 svg path d 值；颜色 / 字号独立配置更细化。
- **平台差异**：Android 端完整实现（原生 PopupWindow 弹层 + 渐隐缩放动画）；Web 端提供空实现（调用不报错、无效果），v1 仅 Android 生效。
