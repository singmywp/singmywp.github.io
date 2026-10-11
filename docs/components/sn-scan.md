# Scan  扫码

> [查看 sn-scan 的 2.0 版本差异](/differences/components/sn-scan)

## 基础用法

基于 `sn-e-scan-provider` 扩展插件重构的一体化扫码组件，内置完整扫码界面，支持二维码 / 条码识别。

- 内置导航栏、扫描线动效、提示文字、手电筒、相册入口与识别点
- 支持双击还原缩放、双指捏合缩放、相册图片识别、只扫一次与连续扫描
- 浮层相对组件自身区域定位，可整页使用，也可嵌入页面局部区域（如半屏扫码）

::: info 平台支持
- 当前在 **App 全平台**（Android / iOS / HarmonyOS）端渲染与生效，其余平台渲染为空视图
- **平台差异**：iOS 端由底层 `sn-scan-provider`（zcscan）拉起整页扫码界面，手电筒、手势缩放、初始缩放、识别间隔不生效（相机扫码由其整页界面接管）；HarmonyOS 端由 Scan Kit 自定义界面扫码实现，能力与 Android 端一致
:::

```vue
<template>
	<sn-scan />
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 扫码页面标题 | String | `扫一扫` | - |
| titleSize | 标题字体大小 | String \| Number | `$18` | - |
| titleColor | 标题颜色 | String | `#fff` | - |
| tip | 扫码提示文字；按 `scanType` 自动显示（二维码 / 条码 / 二维码或条码） | String | - | - |
| tipColor | 提示文字颜色，跟随 `titleColor` | String | - | - |
| tipSize | 提示文字字体大小 | String \| Number | `$14` | - |
| torchText | 手电筒提示文字 | String | `轻触点亮或关闭` | - |
| torchTextColor | 手电筒提示文字颜色 | String | `#fff` | - |
| torchTextSize | 手电筒提示文字字体大小 | String \| Number | `$12` | - |
| dotSize | 识别点大小 | String \| Number | `35px` | - |
| scanType | 扫码类型 | SnScanType | `all` | `qrcode` \| `barcode` \| `all` |
| lineAniTime | 扫描线动画时长（单位：ms） | String \| Number | `5000ms` | - |
| enableDing | 是否开启识别成功声音提示 | Boolean | `true` | `true` \| `false` |
| dingFileSrc | 自定义提示声音文件路径 | String | - | - |
| scanOnlyOnce | 是否只扫描一次（与 `continuous` 不可同为 `true`） | Boolean | `false` | `true` \| `false` |
| continuous | 是否连续扫描（与 `scanOnlyOnce` 不可同为 `true`） | Boolean | `false` | `true` \| `false` |
| continuousSleep | 连续扫描间隔时间（单位：ms） | Number | `2000` | - |
| showTorch | 是否显示手电筒按钮，iOS 端不生效 | Boolean | `true` | `true` \| `false` |
| showAlbum | 是否显示相册按钮 | Boolean | `true` | `true` \| `false` |
| showBackButton | 是否显示返回按钮 | Boolean | `true` | `true` \| `false` |
| showTitle | 是否显示标题（隐藏时导航栏两侧的占位按钮同步隐藏） | Boolean | `true` | `true` \| `false` |
| showTip | 是否显示提示文字 | Boolean | `true` | `true` \| `false` |
| showAni | 是否显示扫描线动效 | Boolean | `true` | `true` \| `false` |
| enableZoom | 是否允许手势缩放，iOS 端不生效 | Boolean | `true` | `true` \| `false` |
| initZoomScale | 初始缩放比例，iOS 端不生效 | Number | `0` | - |
| recognizeInterval | 识别间隔（单位：ms，取值 0 ~ 5000，为 `0` 时每帧识别），iOS 端不生效 | Number | `0` | - |
| cameraPermTip | 相机权限请求提示文案 | String | `相机权限默认文案` | - |
| albumPermTip | 相册权限请求提示文案 | String | `相册权限默认文案` | - |
| customDotStyle | 自定义识别点样式 | UTSJSONObject \| String | - | - |
| customDotIconStyle | 自定义识别点图标样式 | UTSJSONObject \| String | - | - |
| customTitleStyle | 自定义标题样式 | UTSJSONObject \| String | - | - |
| customTipStyle | 自定义提示文字样式 | UTSJSONObject \| String | - | - |
| customStyle | 自定义组件根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义组件根节点类名 | String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| button-click | (name: string) => Void | 点击界面按钮时触发，`name` 可选值为 `return`（返回）、`album`（相册）、`torch`（手电筒） |
| scanned | (res: SnScanResult) => Void | 扫码成功时触发，结构见下方类型 |
| goin | (value: string) => Void | 选择识别点时触发，`value` 为识别的文本数据 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| rescan | - | - | 重新开始扫描 |
| setTorchStatus | (value: boolean) | - | 设置手电筒开关状态 |
| scanImageByURI | (src: string) | - | 通过图片 URI 识别图片中的码 |
| setZoomRatio | (zoomRatio: number) | - | 设置相机缩放比例 |
| getZoomRatio | - | number | 获取当前相机缩放比例 |

## 类型

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
| data | SnScanData[] | 是 | 识别出的数据列表 |
| scanMode | SnScanMode | 是 | 识别来源：`camera` 相机 \| `image` 相册图片 |
| sourceWidth | number | 否 | 可选，识别源图宽度 |
| sourceHeight | number | 否 | 可选，识别源图高度 |

:::

`SnScanType`、`SnScanResult` 等类型由扩展插件 `sn-e-scan-provider` 导出；`SnScanParams` 为传参参数类型，由 SinleUI 框架导出（结构同上方属性表）。

<DemoPhone name="sn-scan" />
