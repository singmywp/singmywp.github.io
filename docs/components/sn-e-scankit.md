# ScanKit 华为扫码

* 此插件是扩展插件，基于[华为统一扫码服务（Scan Kit）](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/service-introduction-0000001050041994)封装。Scan Kit不仅在常规扫码场景有着优异表现，还对复杂扫码场景（如反光、暗光、污损、小码、大角度等）做了特定识别优化，如可以实现远距离码或小型码地自动缩放和检测，扫码成功率有大幅提升。

* 此插件提供最基础的 Default View 模式，支持相机扫码、导入图片扫码，不能自定义扫码界面，自由度较低。但使用方法相较于基于`Google MLKit` 的 `sn-scan` / `sn-e-scan-provider` 组件更为简单，且识别速度、准确率更是遥遥领先。

```typescript
import { scan, ScanConfigs, ScanResult } from '@/uni_modules/sn-e-scankit'

scan({} as ScanConfigs, (res: ScanResult)=>{
  uni.showModal({
    title: '扫码结果',
    content: `格式：${res.format}\n数据：${res.data}`
  })
})
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| ×    | √       |

## 方法

| 名称 | 参数                                                         | 返回值 | 描述 |
| :--- | :----------------------------------------------------------- | :----- | :--- |
| scan | `(configs : ScanConfigs, callback: (res: ScanResult) => void)` | -      | 扫码 |

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

export type ScanTypes = ScanType[];

export type titleType = 0 | 1

export type ScanConfigs = {
	/*
	*  扫码类型
	* 支持 14 种码式，默认全部支持
	*/
	scanTypes ?: ScanTypes | null,
	/*
	* 标题类型
	* 0表示设置扫码标题为“扫描二维码/条码”，1表示设置扫码标题为“扫描二维码”
	*/
	titleType ?: titleType | null,
	/*
	* 权限请求提示语
	*/
	permTip ?: string | null,
}

export type ScanResultFormat = 
	|'articleNumber' 
	|'contactDetail' 
	|'driverInfo'
	|'emailContent'
	|'eventInfo'
	|'isbnNumber'
	|'coordinate'
	|'text'
	|'sms'
	|'telephone'
	|'url'
	|'wifiConnectInfo';

export type ScanResult = {
  /*
  * 扫描结果格式
  */
	format : ScanResultFormat,
  /*
  * 扫描结果数据
  */
	data : string,
}
```

