# Barcode  一维码

> [查看 sn-barcode 的 2.0 版本差异](/differences/components/sn-barcode)

## 基础用法

- 纯 Canvas 自绘的一维码组件（不依赖任何原生条形码库），跨平台可用
- 支持 CODE128 / CODE39 / CODE93 / CODABAR / EAN8 / EAN13 / UPC-A / UPC-E / ITF 共 9 种格式
- 支持旋转（正常 / 左转 / 右转 / 倒转）、条纹圆角、在下方显示编码文本
- 编码内容以 UTF-8 字节数计算，最大支持 300 字节，超出部分自动截断

```vue
<template>
	<sn-barcode value="SN-20260820" code-type="code128"></sn-barcode>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 条形码数据 | String | `SN-20260820` | - |
| codeType | 条形码格式 | [[SnBarcodeFormat]] | `code128` | `code128` \| `code39` \| `code93` \| `codabar` \| `ean8` \| `ean13` \| `upca` \| `upce` \| `itf` |
| width | 条码区域宽度，最小 48px | String \| Number | `280` | - |
| height | 条码区域高度，最小 24px | String \| Number | `96` | - |
| padding | 左右留白边距 | String \| Number | `8` | - |
| rotation | 旋转方向 | String | `N` | `N` 正常 \| `L` 左转 \| `R` 右转 \| `I` 倒转 |
| showValue | 是否在条码下方显示编码文本 | Boolean | `true` | `true` \| `false` |
| valueAlign | 编码文本对齐方式 | String | `center` | `left` \| `center` \| `right` |
| valueFontSize | 编码文本字体大小，最小 8px | String \| Number | `14` | - |
| valueSpacing | 编码文本与条码间距 | String \| Number | `8` | - |
| barColor | 条纹（前景）颜色，支持 `$` 主题色与 `var(--sn-*)` | String | `#111111` | - |
| backgroundColor | 背景颜色，支持 `$` 主题色与 `var(--sn-*)` | String | `transparent` | - |
| valueColor | 编码文本颜色，留空跟随 `barColor` | String | - | - |
| barShape | 条纹形状 | String | `flat` | `flat` \| `rounded` |
| barRadius | 条纹圆角（仅 `barShape=rounded` 生效） | String \| Number | `6` | - |
| moduleMinWidth | 最小模块宽（px），保证密集码型可辨认 | String \| Number | `1` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| codeStyle | 自定义条码画布样式 | UTSJSONObject \| String | - | - |
| valueStyle | 自定义编码文本样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点类名 | String | - | - |
| codeClass | 自定义条码画布类名 | String | - | - |
| valueClass | 自定义编码文本类名 | String | - | - |

:::type-fields SnBarcodeFormat

```typescript
type SnBarcodeFormat = 'code128' | 'code39' | 'code93' | 'codabar' | 'ean8' | 'ean13' | 'upca' | 'upce' | 'itf'
```

条码格式。

:::

## 类型

```typescript
type SnBarcodeFormat = 'code128' | 'code39' | 'code93' | 'codabar' | 'ean8' | 'ean13' | 'upca' | 'upce' | 'itf'
```

| 类型 | 字段 | 类型 | 描述 |
| --- | --- | --- | --- |
| [[SnBarcodeBarElement]] | width | number | 该元素的模块宽度 |
| | bar | boolean | 是否为条纹（`false` 为间隙） |
| [[SnBarcodeData]] | elements | [[SnBarcodeBarElement]][] | 条纹元素序列 |
| | totalModules | number | 总模块数 |
| | value | string | 实际编码的文本（可能被截断） |

:::type-fields SnBarcodeBarElement

条码单元：`width`（模块宽度）、`bar`（是否为条）。

:::
:::type-fields SnBarcodeData

条码绘制数据：`elements`（[SnBarcodeBarElement](/api/types/component#snbarcodebarelement)[]）、`totalModules`（总模块数）、`value`（编码内容）。

:::

<DemoPhone name="sn-barcode" />
