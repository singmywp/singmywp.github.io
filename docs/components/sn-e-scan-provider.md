# Scan Provider 扫码核心

* 本组件是 SinleUI 扫码插件的核心部分，负责摄像头预览、扫码解析等基础工作，并向外部提供接口。
* SinleUI 框架内置的 `sn-scan` 组件依赖此组件，故 HBuilderX 安装 SinleUI 插件时会自动安装此组件
* 如果你不满意内置的 `sn-scan` 的界面，可以参考 `sn-scan` 组件，对本组件进行再封装

```vue
<template>
	<sn-e-scan-provider></sn-e-scan-provider>
</template>
```

**更多演示请下载 demo 查看**

## 兼容性

| Web  | Android |
| :--- | :------ |
| ×    | √       |

## 方法

| 名称           | 参数                   | 返回值         | 描述                                       |
| :------------- | :--------------------- | :------------- | :----------------------------------------- |
| setTorchStatus | `(status : boolean)`   | -              | 设置手电筒开关状态                         |
| scanImageByURI | `(uri : string) `      | -              | 提供指定图片的 `URI` 来识别图片一/二维码码 |
| rescan         | -                      | -              | 扫描成功画面静止后使用此方法来重置摄像头   |
| setZoomRatio   | `(zoomRatio : number)` | -              | 设置画面缩放比例，范围为 0 ~ 1             |
| getZoomRatio   | -                      | Number \| null | 获取画面缩放比例                           |

## 事件

| 名称    | 类型                        | 说明                                              |
| :------ | :-------------------------- | :------------------------------------------------ |
| scanned | `(res: ScanResult) => void` | 扫码成功时触发。`res` 的结构及说明见[下文](#类型) |

## 类型

`sn-e-scan-provider` 和 `sn-scan` 的 `@scanned` 事件返回一个 `ScanResult` 对象 `res`

```typescript
type ScanMode = 'camera' | 'image'

type ScanDataPosition = {
	centerX: number,
	centerY: number
}

type ScanData = {
	value: string,
	position: ScanDataPosition
}

type ScanResult = {
	data: ScanData[],
	scanMode: ScanMode
}
```

`ScanResult` 及其相关的类型均在扩展插件 `sn-e-scan-provider` 导出，使用时根据路径导入即可。例如：

```typescript
import { ScanResult } from "@/uni_modules/sn-e-scan-provider"
```