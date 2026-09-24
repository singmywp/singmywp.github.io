# sn-e-blurview

**旧版状态**：v1 已有高斯模糊组件，仅支持 `radius` 属性与 default 插槽，Android 端统一使用原生 `blurview` 实现。

**差异明细**：

- 新增：`customStyle` 属性（根节点自定义样式，UTSJSONObject | String）。
- 新增：`customClass` 外部样式类（需经 `custom-class` 传入，蒸汽模式下不支持直接给组件标签写 class）。
- 新增：文档新增"实现机制"章节——按平台/引擎条件编译自动选择实现：Web 等非 APP 端与 Android 蒸汽模式 uniVersion >= 5.25 使用 CSS `backdrop-filter`；Android 非蒸汽（VDOM）使用 `blurview` + `RenderScriptBlur`；Android 蒸汽 uniVersion < 5.25 退化为普通 view（旧版 Android 一律走原生 blurview）。
- 行为变化：从旧版独立扩展插件迁移为 uni-app x 标准 UTS 插件组件，Android 原生逻辑以 Kotlin 编写（2.0.0）。
- 行为变化：`radius` 异常值（<=0）时回退为默认值 `15`。
