# ScanKit  Code 华为码图

:::info 扩展插件
本组件属于扩展插件，非框架内置，可根据需求自行下载

下载地址：https://ext.dcloud.net.cn/plugin?name=sn-e-scankit
:::

---

* 此插件是扩展插件，基于[华为统一扫码服务（Scan Kit）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/service-introduction-0000001050041994)封装。Scan Kit支持将字符串转换为一维码或二维码，目前已支持的码制式为EAN-8、EAN-13、UPC-A、UPC-E、Codabar、Code 39、Code 93、Code 128、ITF14、QR、DataMatrix、PDF417、Aztec。您只需要提供字符串、码制式和码图尺寸要求，即可获得相应的码图。在生成QR码前，您还可以在固定区域上传图片，如厂家Logo，生成一些个性化的QR码。


``` vue
<template>
    <sn-e-scankit-code data="Hello, world!"
    style="width: 100px;height: 100px;"></sn-e-scankit-code>
</template>
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| ×    | √       |

## 属性

| 参数         | 说明                       | 类型              | 默认值    | 可选值                  |
| :----------- | :------------------------- | :---------------- | :-------- | :---------------------- |
| data         | 需要编码的数据             | String            | -         | -                       |
| type         | 码图类型                   | [ScanType](#类型) | `QRCODE`  | [见下](#类型)     |
| margin       | 码图边距                   | Number            | `1`       | -                       |
| bgColor      | 码图背景颜色               | String            | `#ffffff` | -                       |
| frontColor   | 码图前景颜色               | String            | `#000000` | -                       |
| qrErrorLevel | 二维码错误容错级别         | String            | `M`       | `L`\| `M` \| `Q` \| `H` |
| qrLogo       | 二维码中间的 Logo 图片路径 | String            | -         | -                       |

## 类型

```typescript
export type ScanType =
	| "CODE_128"
	| "CODE_39"
	| "CODE_93"
	| "CODABAR"
	| "EAN_13"
	| "EAN_8"
	| "ITF_14"
	| "UPC_A"
	| "UPC_E"
	| "QRCODE"
	| "PDF_417"
	| "AZTEC"
	| "DATAMATRIX"
	| "MULTI_FUNCTIONAL";
```

