# Qrcode  二维码

> [查看 sn-qrcode 的 2.0 版本差异](/differences/components/sn-qrcode)

## 基础用法

- 纯 Canvas 自绘的二维码组件（不依赖任何原生二维码库），跨平台可用
- 支持自定义信息点 / 定位点 / 校准点 / 时序点的形状、缩放、圆角、颜色，支持定位点绘制图样（点阵 / 方框 / 圆角方框 / 圆环）
- 支持在二维码中央叠加 Logo 图片，支持指定二维码版本与掩码图样
- 编码内容以 UTF-8 字节数计算，最大支持 300 字节，超出部分自动截断（不会拆分多字节字符）

```vue
<template>
	<sn-qrcode value="https://sinleui.pages.dev"></sn-qrcode>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 二维码内容数据 | String | https://sinleui.pages.dev | - |
| size | 画板尺寸（宽高一致），最小 96px | String \| Number | `200` | - |
| padding | 留白边距（模块数） | Number | `2` | - |
| errorCorrectionLevel | 纠错等级 | [[QrEcLevel]] | `medium` | `low` \| `medium` \| `quartile` \| `high` |
| qrVersion | 二维码版本（1-40），0 表示自动选择 | Number | `0` | - |
| maskPattern | 掩码图样（0-7），-1 表示自动选择最优 | Number | `-1` | - |
| infoDotShape | 信息点形状 | [[QrModuleShape]] | `square` | `square` \| `rounded` \| `circle` \| `diamond` |
| locateDotShape | 定位点（点阵模式）形状 | [[QrModuleShape]] | `square` | `square` \| `rounded` \| `circle` \| `diamond` |
| locateDotPattern | 定位点绘制图样 | String | `dots` | `dots` \| `square` \| `rounded-square` \| `circle` |
| infoDotScale | 信息点缩放（0.1-1.3） | Number | `1` | - |
| locateDotScale | 定位点缩放（0.1-1.3） | Number | `1` | - |
| infoDotRadius | 信息点圆角系数（0-0.5） | Number | `0.22` | - |
| locateDotRadius | 定位点圆角系数（0-0.5） | Number | `0.28` | - |
| infoDotGap | 信息点间隙（0-0.6） | Number | `0` | - |
| infoDotColor | 信息点颜色 | String | `#111111` | - |
| locateDotColor | 定位点颜色，留空回退 `infoDotColor` | String | - | - |
| alignDotColor | 校准点颜色，留空依次回退 `locateDotColor`、`infoDotColor` | String | - | - |
| timingDotColor | 时序点颜色，留空回退 `infoDotColor` | String | - | - |
| backgroundColor | 背景颜色 | String | `#ffffff` | - |
| showBackground | 是否绘制背景层 | Boolean | `true` | `true` \| `false` |
| logoSrc | 中央 Logo 图片路径，留空不显示 | String | - | - |
| logoSize | Logo 尺寸，自动限制在画板的 16px ~ 45% 之间 | String \| Number | `52` | - |
| logoPadding | Logo 内边距，自动限制不超过尺寸的 1/3 | String \| Number | `8` | - |
| logoRadius | Logo 圆角 | String \| Number | `14` | - |
| logoBackgroundColor | Logo 背景颜色 | String | `#ffffff` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| backgroundStyle | 自定义背景层样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点类名 | String | - | - |
| backgroundClass | 自定义背景层类名 | String | - | - |

:::type-fields QrEcLevel

二维码纠错等级。

| 可选值 | 备注 |
| :--- | :--- |
| `low` | 低（约 7% 纠错） |
| `medium` | 中（约 15% 纠错） |
| `quartile` | 四分位（约 25% 纠错） |
| `high` | 高（约 30% 纠错） |

:::
:::type-fields QrModuleShape

二维码模块形状。

| 可选值 | 备注 |
| :--- | :--- |
| `square` | 方形 |
| `rounded` | 圆角方形 |
| `circle` | 圆形 |
| `diamond` | 菱形 |

:::

<DemoPhone name="sn-qrcode" />
