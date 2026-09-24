# sn-scan

**旧版状态**：v1 即为框架内置扫码界面组件（依赖 sn-e-scan-provider 扩展插件），v2 重构界面与手势交互，新增双击还原缩放与相册图片识别等能力。
**差异明细**：
- 更名：`scanType` 可选值 `qrCode` / `barCode` → `qrcode` / `barcode`
- 新增属性：`customClass`（String）
- 类型变化：`customDotStyle` / `customDotIconStyle` / `customTitleStyle` / `customTipStyle` / `customStyle` 旧 UTSJSONObject → 新 UTSJSONObject | String；`dingFileSrc` 类型声明为 String
- 默认值变化：`titleSize` 旧 `` `$3+2` `` → 新 ``（按 `18 × fontsizeFactor` 计算）；`tipSize` 旧 `` `$2` `` → 新 ``（按 `14 × fontsizeFactor`）；`torchTextSize` 旧 `` `$1` `` → 新 ``（按 `12 × fontsizeFactor`）；`tip` 旧 `` `识别二维码/条码` `` → 新 ``（留空按 `scanType` 动态显示）；`customDotStyle` 旧 `` `{border:'2px solid #fff', background:$primary}` `` → 新 ``
- 行为变化：新增双击还原缩放（双击将相机缩放恢复 1x）；新增相册图片识别（点相册按钮选图后识别）；自动请求相机 / 相册权限并在拒绝时引导跳转授权；返回 / 相册 / 手电筒按钮交互重构
- 类型变化：`ScanResult` 新增可选字段 `sourceWidth` / `sourceHeight`
- 平台：仅 App-Android 渲染并生效，其余平台渲染为空视图
- 事件、方法：无变化（`button-click` / `scanned` / `goin`；`rescan` / `setTorchStatus` / `scanImageByURI` / `setZoomRatio` / `getZoomRatio`）
