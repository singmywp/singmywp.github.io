# Scan 扫码

::: tip 注意

本插件分为两部分：

* `sn-e-scan-provider`

  这是组件的核心部分，负责摄像头预览、扫码解析等基础工作，并向外部提供接口。

  该组件属于**扩展组件**，需前往插件市场单独下载

* `sn-scan`

  这是组件的界面部分，主要负责在界面中处理用户操作并调用相应的API。应当将该组件放置在独立的页面中，\<template\> 下只放这一个组件，并设置其 `flex: 1`。如果您有自定义界面的需求，可参考此组件源码实现，重写UI。
  
  该组件属于 SinleUI 基础组件的一部分，无需您额外下载。

:::

## 基础用法

* 该组件是 UI 组件，基于 `sn-e-scan-provider` 的基础上内置一套扫码界面，如果你对界面不满意，除了修改属性以外，还可以复制本组件或修改本组件源码，自行定义
* 由 uvue、ucss、uts 编写，而非 xml，自由度非常高，修改源码可以放置任意支持 uvue 的组件
* 如果你习惯使用 xml 自定义布局，可以考虑 [kux-mlkit-scancode](https://ext.dcloud.net.cn/plugin?name=kux-mlkit-scancode)，功能更强大
* 如果你希望使用更强大、更稳定的商用级的扫码功能，可以考虑接入华为的 [ScanKit](/components/sn-e-scankit) ，体验更好；或者 [mPaaS 扫一扫](https://help.aliyun.com/document_detail/52599.html?spm=a2c4g.52296.0.i0)，拥有与支付宝一致的扫码体验。

```vue
<template>
	<sn-scan />
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数               | 说明                                              | 类型          | 默认值                                                       | 可选值                         |
| ------------------ | ------------------------------------------------- | ------------- | ------------------------------------------------------------ | ------------------------------ |
| title              | 扫码页面标题                                      | String        | `扫一扫`                                                     | -                              |
| titleSize          | 标题字体大小                                      | String        | `$3+2`                                                       | -                              |
| titleColor         | 标题颜色                                          | String        | `#fff`                                                       | -                              |
| tip                | 扫码提示文字                                      | String        | `识别二维码/条码`                                            | -                              |
| tipColor           | 提示文字颜色                                      | String        | `#d6d6db`                                                    | -                              |
| tipSize            | 提示文字字体大小                                  | String        | `$2`                                                         | -                              |
| torchText          | 手电筒提示文字                                    | String        | `轻触点亮或关闭`                                             | -                              |
| torchTextColor     | 手电筒提示文字颜色                                | String        | `#fff`                                                       | -                              |
| torchTextSize      | 手电筒提示文字字体大小                            | String        | `$1`                                                         | -                              |
| dotSize            | 识别点大小                                        | String        | `35px`                                                       | -                              |
| scanType           | 扫码类型                                          | String        | `all`                                                        | `qrCode` \| `barCode` \| `all` |
| lineAniTime         | 扫描线动画时长                                    | String        | `5000ms`                                                       | -                              |
| enableDing         | 是否开启声音提示                                  | Boolean       | `true`                                                       | `true` \| `false`              |
| dingFileSrc        | 自定义声音文件路径                                | String        | -                                                            | -                              |
| scanOnlyOnce       | 是否只扫描一次（与 `continuous` 不可同为 `true`） | Boolean       | `false`                                                      | `true` \|`false`               |
| continuous         | 是否连续扫描（与 `scanOnlyOnce` 不可同为 `true`） | Boolean       | `false`                                                      | `true` \|`false`               |
| continuousSleep    | 连续扫描间隔时间（单位：ms）                      | Number        | `2000`                                                       | -                              |
| showTorch          | 是否显示手电筒按钮                                | Boolean       | `true`                                                       | `true` \|`false`               |
| showAlbum          | 是否显示相册按钮                                  | Boolean       | `true`                                                       | `true` \|`false`               |
| showBackButton     | 是否显示返回按钮                                  | Boolean       | `true`                                                       | `true` \|`false`               |
| showAni            | 是否显示动画                                      | Boolean       | `true`                                                       | `true` \|`false`               |
| enableZoom         | 是否允许缩放                                      | Boolean       | `true`                                                       | `true` \|`false`               |
| initZoomScale      | 初始缩放比例                                      | Number        | `0`                                                          | -                              |
| cameraPermTip      | 相机权限请求提示                                    | String        | `\u3000 本应用正在请求您的相机权限，仅用于条码、二维码识别，且不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。` | -                              |
| albumPermTip | 相册权限请求提示 | String | `\u3000 本应用正在请求您的相册权限，仅用于条码、二维码识别，且不会将任何数据上传至云端。如不提供此权限，则无法正常使用图片扫码功能。` | - |
| customDotStyle     | 自定义识别点样式                                  | UTSJSONObject | `{border: '2px solid #fff',background:$primary}`             | -                              |
| customDotIconStyle | 自定义识别点图标样式                              | UTSJSONObject | `{color:'#fff'}`                                             | -                              |
| customTitleStyle   | 自定义标题样式                                    | UTSJSONObject | -                                                            | -                              |
| customTipStyle     | 自定义提示文字样式                                | UTSJSONObject | -                                                            | -                              |
| customStyle        | 自定义组件样式                                    | UTSJSONObject | -                                                            | -                              |

## 事件

| 名称         | 类型                        | 说明                                                         |
| :----------- | :-------------------------- | :----------------------------------------------------------- |
| button-click | (name: String) => Void    | 点击界面按钮时触发，`name` 为点击按钮名称。可选值为：`return`（返回）、`album`（相册）、`torch`（手电筒） |
| scanned      | (res: ScanResult) => Void | 扫码成功时触发。`res` 的结构及说明见[下文](#类型)            |
| goin         | (value: String) => Void   | 选择识别点时触发，`value` 即为识别的文本数据                 |

## 方法

| 名称           | 参数                  | 返回值 | 描述              |
| -------------- | --------------------- | ------ | ----------------- |
| rescan         | -                     | -      | 重新扫描          |
| setTorchStatus | (value: Boolean)    | -      | 设置手电筒状态    |
| scanImageByURI | (src: String)       | -      | 通过 URI 扫描图片 |
| setZoomRatio   | (zoomRatio: Number)` | -      | 设置缩放比例      |
| getZoomRatio   | -                     | Number | 获取当前缩放比例  |

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



<DemoPhone name="sn-scan" />