# Barcode 条形码

* 支持 Android / Web 双端，Android 使用 Zxing 库，Web 使用 bwip-js 库，原生生成


```vue
<template>
    <sn-e-barcode data="6902094911850"></sn-e-barcode>
</template>
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| √    | √       |

## 属性

| 参数        | 说明                                                         | 类型    | 兼容性     | 默认值     | 可选值                                                       |
| ----------- | ------------------------------------------------------------ | ------- | ---------- | ---------- | ------------------------------------------------------------ |
| data        | 条形码数据                                                   | String  | √          | -          | -                                                            |
| margin      | 条形码内边距                                                 | Number  | √          | `1`        | -                                                            |
| format      | 条形码格式（不常见的格式部分设备可能不支持） 具体[见下](#格式) | String  | √          | `CODE_128` | `UPC_A` \|`UPC_E` \|`EAN_8` \|`EAN_13` \|`CODE_39` \|`CODE_93` \|`CODE_128` \|`ITF` \|`CODABAR` \|`DATA_MATRIX` \|`AZTEC` \|`PDF_417` \|`MAXICODE` \|`RSS_14` \|`RSS_EXPANDED` |
| bgColor     | 条形码背景颜色（Android 端有限制，必须为颜色名或完整不简写的 Hex 格式，不支持类似于 CSS 函数的用法） | String  | √          | `#ffffff`  | -                                                            |
| lineColor   | 条形码前景（线）的颜色，要求同 `bgColor`                     | String  | √          | `#000000`  | -                                                            |
| charset     | 条形码数据字符集                                             | String  | 仅 Android | `UTF-8`    | -                                                            |
| showText    | 是否在条形码下方显示数据文本                                 | Boolean | 仅 Web     | `false`    | `true` \| `false`                                            |
| textColor   | 数据文本颜色                                                 | String  | 仅 Web     | `#000000`  | -                                                            |
| textAlign   | 数据文本对齐方式                                             | String  | 仅 Web     | `center`   | `left` \| `center` \| `right`                                |
| textSize    | 数据文本字体大小                                             | String  | 仅 Web     | `12px`     | -                                                            |
| textXOffset | 数据文本横向偏移量                                           | String  | 仅 Web     | `0px`      | -                                                            |
| textYOffset | 数据文本纵向偏移量                                           | String  | 仅 Web     | `1px`      | -                                                            |
| textGap     | 数据文本字符间距                                             | String  | 仅 Web     | `0px`      | -                                                            |

## 格式

**Android 端**：支持 Zxing 的所有格式，所有格式均直接传递给 Zxing，如有报错请查看 Zxing 官方文档解决问题。

**Web 端**：除 `RSS_14`、`RSS_EXPANDED` 外，支持 Zxing 的所有格式



<DemoPhone name="sn-e-barcode" />