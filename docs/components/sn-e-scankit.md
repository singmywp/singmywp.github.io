# Scankit  华为扫码

> [查看 sn-e-scankit 的 2.0 版本差异](/differences/components/sn-e-scankit)

## 基础用法

- 基于华为统一扫码服务（Scan Kit）封装的扩展插件，当前仅支持 Android 平台。Scan Kit 对复杂扫码场景（反光、暗光、污损、小码、大角度等）做了特定识别优化，扫码成功率较高。
- 包含两部分能力：
  - **扫码 API `scan`**：调用 Scan Kit 的 Default View Mode，弹出华为标准全屏扫码界面（支持相机扫码与导入图片扫码），扫完通过回调返回码值；
  - **码图生成组件 `sn-e-scankit-code`**：基于 `ScanUtil.buildBitmap` 将字符串转换为一维码 / 二维码（EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、ITF14、QR、DataMatrix、PDF417、Aztec），支持自定义前后景色、容错级别与 QR 中部 Logo。
- 相机与相册权限由插件内部申请：未授权时先弹出 `permTip` 说明弹窗，确认后请求系统权限，拒绝后跳转系统权限设置页。

## 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

> Web 端调用 `scan` 会提示平台不支持；Web 端 `sn-e-scankit-code` 渲染为空节点，请使用 `sn-qrcode` / `sn-barcode` 代替。

**更多演示请下载 demo 查看**

---

## scan()  一键扫码

### **弹出华为标准全屏扫码界面并返回识别结果**

调用华为 Scan Kit Default View Mode 进行扫码，支持相机扫码与导入图片扫码。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| configs | UTSJSONObject | 否 | `{}` | 扫码配置，字段见下表 |
| callback | (res: ScanResult) => Void | 是 | - | 扫码结果回调 |

`configs` 支持字段（蒸汽模式下类型化对象经桥接会降级，故此处传入 UTSJSONObject，插件内部解析字段）：

| 字段 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| scanTypes | string 数组 | `全部 14 种码` | 需要识别的码制式（`'QRCODE'` / `'EAN_13'` 等，见[下文类型](#scantype)），限定制式可提高扫码速度 |
| titleType | Number | `0` | 扫码界面标题：`0` = "扫描二维码/条码"，`1` = "扫描二维码" |
| permTip | String | `　 本应用正在请求您的相机、相册权限，仅用于条码、二维码识别，且通过系统途径读取数据，不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。` | 权限申请弹窗提示语，仅在权限未授予时弹出 |

### 返回值

无（结果经 `callback` 返回 `ScanResult`：`format` 为码值类型（text / url / telephone 等），`data` 为码值字符串）。

### 示例

```typescript
import { scan } from '@/uni_modules/sn-e-scankit'
import type { ScanResult } from '@/uni_modules/sn-e-scankit'

scan({}, (res: ScanResult) => {
	uni.showModal({
		title: '扫码结果',
		content: `格式：${res.format}\n内容：${res.data}`
	})
})

scan({ scanTypes: ['QRCODE'] }, (res: ScanResult) => {
	console.log(res.format, res.data)
})
```

---

# ScankitCode  华为码图

`sn-e-scankit-code` 将字符串转换为一维码 / 二维码码图。组件基于 `native-view` 绑定原生 ImageView，按自身尺寸实时生成高清码图，随尺寸变化自动重新生成。使用时需给组件**显式设置宽高**。

```vue
<template>
	<sn-e-scankit-code data="https://sinleui.pages.dev" type="QRCODE" style="width: 200px;height: 200px;"></sn-e-scankit-code>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| data | 需要编码的数据，内容变化时码图实时刷新 | String | `''` | - |
| type | 码图类型（`MULTI_FUNCTIONAL` 仅用于扫码识别，生成码图无效） | ScanType | `'QRCODE'` | 见[下文类型](#scantype) |
| margin | 码图边框宽度 | Number | `1` | - |
| bgColor | 码图背景色（具体色值，由原生 `Color.parseColor` 解析） | String | `'#ffffff'` | - |
| frontColor | 码图前景色 | String | `'#000000'` | - |
| qrErrorLevel | QR 码容错级别，仅对 QR 码生效 | String | `'M'` | `'L'` \| `'M'` \| `'Q'` \| `'H'` |
| qrLogo | QR 码中部 Logo 图片路径（支持项目内路径 / 绝对路径 / `file://`），仅 QR 码生效 | String | `''` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| refresh | - | - | 手动触发重新生成码图 |

---

# ScanType

```typescript
export type ScanType =
	| 'CODE_128'
	| 'CODE_39'
	| 'CODE_93'
	| 'CODABAR'
	| 'EAN_13'
	| 'EAN_8'
	| 'ITF_14'
	| 'UPC_A'
	| 'UPC_E'
	| 'QRCODE'
	| 'PDF_417'
	| 'AZTEC'
	| 'DATAMATRIX'
	| 'MULTI_FUNCTIONAL'

export type ScanTypes = ScanType[]

export type ScanTitleType = 0 | 1

export type ScanConfigs = {
	scanTypes?: ScanTypes | null
	titleType?: ScanTitleType | null
	permTip?: string | null
}

export type ScanResultFormat =
	| 'articleNumber'
	| 'contactDetail'
	| 'driverInfo'
	| 'emailContent'
	| 'eventInfo'
	| 'isbnNumber'
	| 'coordinate'
	| 'text'
	| 'sms'
	| 'telephone'
	| 'url'
	| 'wifiConnectInfo'

export type ScanResult = {
	format: ScanResultFormat
	data: string
}
```

## 环境要求

- HBuilderX 5.21+，uni-app x 蒸汽模式项目。
- 插件依赖 `com.huawei.hms:scanplus:2.12.0.301` 与华为 maven 仓 `https://developer.huawei.com/repo/`，依赖变更需重新打包自定义基座后生效。
- Scan Kit 不强制要求 `agconnect-services.json`；仅当应用在 AppGallery Connect 开通了相关服务并已放置该文件时，才需额外配置 AGC 插件。
- 请确保应用未关闭硬件加速（`hardwareAccelerated` 为 `true`），否则个别机型扫码界面可能黑屏。

<DemoPhone name="sn-e-scankit-code" />
