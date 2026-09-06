# sn-gesture
> 旧版组件：sn-e-gesture.md
**旧版状态**：v1 为独立扩展插件 sn-e-gesture（仅 Android 原生手势，事件返回 UTSJSONObject），v2 更名收编为框架内置组件并改为 AlloyFinger 实现，跨平台可用。
**差异明细**：
- 更名：组件 `sn-e-gesture` → `sn-gesture`（由扩展组件收编为基础组件）
- 移除事件：`down`（按下）、`rotate`（旋转）、`showpress`（短按）
- 事件变化：事件返回类型由 `UTSJSONObject` → 具名类型（`SnPointerEvent` / `SnTouchEvent` / `SnScaleEvent` / `SnFlingEvent`），且 `SnPointerEvent` / `SnTouchEvent` 携带原始事件对象（`event` 字段），可阻止默认 / 冒泡（v1 因监听原生事件不支持）
- 新增属性：`customClass`、`customStyle`（v1 未提供任何属性）
- 行为变化：兼容平台由仅 Android 扩展为跨平台（Web / Android 均可用）；手势识别改由 AlloyFinger 实现（长按 750ms、双击窗口 250ms、滑动阈值 30px）
- 插槽：`default` 保留（与旧版一致）
