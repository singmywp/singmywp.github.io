# sn-e-toast

> 旧版组件：无（v2 新增文档；v1 曾存在 sn-e-toast 插件，v1.1.5 起移除并迁移至 sn-native，v2 以新形态回归）

**旧版状态**：v1 的 sn-e-toast 为原生轻提示插件，v1.1.5 变更中被移除，其 API 迁移至 sn-native 插件；v2 重新以 sn-e-toast 形态发布，作为 snu.showToast / snu.hideToast 的底层原生实现。

**差异明细**：

- 形态变化：v2 的 sn-e-toast 不再直接面向使用者暴露 API，仅内部暴露 `nativeShowToast` / `nativeHideToast`，由 sinle-ui 的 `snu.showToast()` / `snu.hideToast()` 包装调用；样式配置（主题色、尺寸乘数）由 sinle-ui 自动注入。
- 行为变化（API 层面）：v1 的 `snu.showToast()` 返回轻提示唯一标识符（string），`snu.hideToast(id)` 需传入 id；v2 的 `snu.showToast()` 无返回值，`snu.hideToast()` 无需参数，直接关闭当前轻提示。
- 新增（参数）：`SnShowToastConfig` 新增 `passThrough` 字段（手势透穿控制，默认透穿；v1 Utils 版 showToast 强制防穿透）与 `title` 字段（兼容 `uni.showToast` 写法）。
- 新增（能力）：弹出 / 消失均带渐隐 + 缩放动画；Android 端以 UTS + Kotlin 混编（PopupWindow）原生实现，v1 无原生端实现。
- 行为变化（默认值）：v2 背景色默认使用主题色 `$snui.colors.toast`（随亮暗主题），字号 / 图标大小 / 圆角 / 内边距默认值接入 `$` 尺寸乘数（`$14` / `$20` / `$12` / `'$12px $15px'`）。
