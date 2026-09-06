# sn-e-scankit

> 旧版组件：sn-e-scankit.md 与 sn-e-scankit-code.md（v2 将扫码 API 与 sn-e-scankit-code 码图组件合并为一篇文档）

**旧版状态**：v1 提供扫码 API `scan`（华为 Scan Kit Default View Mode）与码图组件 `sn-e-scankit-code`，两篇独立文档，仅支持 Android。

**差异明细**：

- 行为变化：`scan()` 签名由 `scan(configs: ScanConfigs, callback)`（需 `{ } as ScanConfigs` 传类型化对象）改为 `scan(configs: UTSJSONObject, callback)`——修复蒸汽模式下类型化对象跨桥字段丢失导致 `scanTypes` / `titleType` 不生效的问题（v1.0.2）。
- 新增：`scan()` 未授权时弹出 `permTip` 说明弹窗、拒绝后跳转系统权限设置页的完整权限申请流程；并按 Android 版本动态申请相册读取权限（READ_MEDIA_IMAGES 等）。
- 新增：码图组件 props 变化（data / type / margin / bgColor / frontColor / qrErrorLevel / qrLogo）实时刷新码图；组件尺寸变化自动重新生成（v1.0.2 修复 props 不刷新问题）。
- 新增：`customStyle` / `customClass` 根节点样式属性、`refresh()` 对外方法。
- 新增：容错处理——自定义基座未集成 scanplus 依赖时不再崩溃，`scan()` 弹提示引导重打基座，码图组件静默降级（v1.0.1）。
- 新增：文档补充环境要求（HBuilderX 5.21+、scanplus 2.12.0.301 依赖与华为 maven 仓、硬件加速要求）。
- 类型：`titleType` 类型更名为 `ScanTitleType`；其余类型（ScanType / ScanTypes / ScanConfigs / ScanResultFormat / ScanResult）不变。
