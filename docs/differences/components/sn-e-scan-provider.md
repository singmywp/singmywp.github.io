# sn-e-scan-provider

> 旧版组件：sn-e-scan-provider.md

**旧版状态**：v1 为基于 MLKit 的扫码核心组件，提供 scanType / enableDing / enableZoom / initZoomScale / cameraPermTip 属性与 scanned 事件、5 个方法，仅支持 Android。

**差异明细**：

- 新增：`error` 事件（`SnScanProviderErrorImpl`，含 1602001 ~ 1602005 错误码），旧版无错误回调。
- 新增：`start` / `stop` 方法与 `autoStart` 属性（可关闭自动启动、手动控制相机开关；页面 onPageShow / onPageHide 自动启停）。
- 新增：`dingFileSrc` 属性（自定义扫码成功提示音音频路径，留空用内置提示音）。
- 新增：`customStyle` / `customClass` 根节点样式属性。
- 新增：`SnScanResult` 新增 `sourceWidth` / `sourceHeight` 字段（识别原图尺寸，按旋转方向修正）。
- 更名（取值）：`scanType` 可选值由 `qrCode` / `barCode` / `all` 改为 `'qrcode'` / `'barcode'` / `'all'`（全小写）。
- 更名：结果类型名加 `Sn` 前缀——`ScanResult`→`SnScanResult`、`ScanData`→`SnScanData`、`ScanDataPosition`→`SnScanDataPosition`、`ScanMode`→`SnScanMode`。
- 行为变化：迁移为 uni-app x 标准 UTS 插件组件，Android 原生逻辑以 Kotlin 编写（CameraX + ML Kit）。
- 行为变化：`initZoomScale` 会约束在 0 ~ 1；`getZoomRatio` 返回值由 `Number | null` 改为 Number（未启动时返回 `1`）。
- 行为变化：`setZoomRatio` 自动约束在相机支持的最小 / 最大变焦范围内（旧版说明为 0 ~ 1）。
