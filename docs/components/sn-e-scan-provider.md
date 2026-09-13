# Scan Provider  扫码核心

> [查看 sn-e-scan-provider 的 2.0 版本差异](/differences/components/sn-e-scan-provider)

## 基础用法

- SinleUI 扫码插件的核心部分，基于 CameraX + ML Kit 实现，负责摄像头预览、扫码解析等基础工作，并向外部提供接口（仅支持 Android 平台）。
- 支持二维码、条形码、全格式识别；支持扫描结果识别点坐标返回；支持图片扫码（`scanImageByURI`）；支持手势缩放、双击对焦（并复位缩放）、手电筒；支持扫码成功提示音（默认提示音 / `ding-file-src` 自定义音频）。
- 摄像头扫码成功后画面会停止并释放相机资源，如需继续扫描请调用 `rescan()` 重新启动。
- 如果不满意内置 `sn-scan` 组件的界面，可以参考 `sn-scan` 对本组件进行再封装。
- 由于插件使用了第三方依赖，导入插件后**必须打包自定义基座**后运行。

```vue
<template>
	<sn-e-scan-provider ref="scanEle" scan-type="all" enable-zoom @scanned="onScanned" @error="onError"></sn-e-scan-provider>
</template>
<script lang="uts" setup>
import { SnScanResult } from '@/uni_modules/sn-e-scan-provider'

function onScanned(res: SnScanResult): void {
	console.log(res.data, res.scanMode)
}

function onError(err: SnScanProviderErrorImpl): void {
	console.log(err.errCode, err.errMsg)
}
</script>
```

## 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| scanType | 扫码类型 | SnScanType | `'all'` | `'qrcode'` \| `'barcode'` \| `'all'` |
| enableDing | 是否开启扫码成功提示音 | Boolean | `true` | `true` \| `false` |
| dingFileSrc | 自定义提示音音频路径，留空使用内置提示音 | String | `''` | - |
| enableZoom | 是否允许手势缩放（捏合缩放、双击对焦并复位缩放） | Boolean | `true` | `true` \| `false` |
| initZoomScale | 初始缩放比例（线性缩放，0 ~ 1） | Number | `0` | - |
| autoStart | 组件初始化后是否自动启动相机并请求权限 | Boolean | `true` | `true` \| `false` |
| cameraPermTip | 相机权限请求说明文案 | String | `　本应用正在请求您的相机权限，仅用于条码、二维码识别，且不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| scanned | (result: SnScanResult) => Void | 扫码成功时触发，`result` 结构见[下文类型](#类型) |
| error | (error: SnScanProviderErrorImpl) => Void | 扫码出错时触发（权限被拒、相机初始化失败、图片识别失败等），错误码见[下文错误码](#错误码) |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| start | - | - | 启动相机开始扫码（自动请求相机权限）；auto-start 为 false 时需手动调用 |  
| stop | - | - | 停止扫码并释放相机资源 |  
| rescan | - | - | 扫码成功画面静止后，重新启动相机继续扫描 |  
| setTorchStatus | (status: boolean) | - | 设置手电筒开关状态 |  
| scanImageByURI | (uri: String) | - | 识别指定图片中的一 / 二维码，相对路径会自动转为绝对路径 |  
| setZoomRatio | (zoomRatio: number) | - | 设置缩放比例，自动约束在相机支持的最小 / 最大变焦范围内 |  
| getZoomRatio | - | Number | 获取当前缩放比例，未启动相机时返回 1 |  

## 类型

`@scanned` 事件返回 `SnScanResult` 对象，相关类型均由本插件导出：

:::type-fields SnScanType

扫码类型。

| 可选值 | 备注 |
| :--- | :--- |
| `qrcode` | 二维码 |
| `barcode` | 一维码 |
| `all` | 两者均可识别 |

:::

:::type-fields SnScanMode

扫码来源模式。

| 可选值 | 备注 |
| :--- | :--- |
| `camera` | 相机扫码 |
| `image` | 相册图片识别 |

:::

:::type-fields SnScanDataPosition

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| centerX | number | 是 | 识别点在源图中的横向坐标 |
| centerY | number | 是 | 识别点在源图中的纵向坐标 |

:::

:::type-fields SnScanData

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | string | 是 | 识别出的文本数据 |
| position | SnScanDataPosition | 是 | 识别点位置 |

:::

:::type-fields SnScanResult

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| data | SnScanData[] | 是 | 识别结果数组 |
| scanMode | SnScanMode | 是 | 结果来源，`camera` 相机扫码 / `image` 图片识别 |
| sourceWidth | number | 否 | 本次识别原图宽度（已按旋转方向修正），可选 |
| sourceHeight | number | 否 | 本次识别原图高度（已按旋转方向修正），可选 |

:::

```typescript
import { SnScanResult } from '@/uni_modules/sn-e-scan-provider'
```

## 错误码

`@error` 事件返回 `SnScanProviderErrorImpl`（`UniError` 子类），错误码定义：

| 错误码 | 说明 |
| --- | --- |
| 1602001 | 相机权限被拒绝 |
| 1602002 | 相机初始化失败 |
| 1602003 | 图片扫码失败 |
| 1602004 | 无效的图片 URI |
| 1602005 | 内部错误 |
