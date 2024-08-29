# Qrcode 二维码

* 支持 Android / Web 双端，Android 使用 Zxing 库，Web 使用 bwip-js 库，原生生成


```vue
<template>
    <sn-e-qrcode data="Hello, world!"></sn-e-qrcode>
</template>
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| √    | √       |

## 属性

| 参数       | 说明                                                         | 类型   | 兼容性     | 默认值    | 可选值                   |
| ---------- | ------------------------------------------------------------ | ------ | ---------- | --------- | ------------------------ |
| data       | 二维码数据                                                   | String | √          | -         | -                        |
| margin     | 二维码内边距                                                 | Number | √          | `1`       | -                        |
| errorLevel | 二维码纠错等级                                               | String | √          | `M`       | `L` \| `M` \| `Q` \| `H` |
| bgColor    | 二维码背景颜色（Android 端有限制，必须为颜色名或完整不简写的 Hex 格式，不支持类似于 CSS 函数的用法） | String | √          | `#ffffff` | -                        |
| dotColor   | 二维码前景（点）的颜色，要求同 `bgColor`                       | String | √          | `#000000` | -                        |
| charset    | 二维码数据字符集                                             | String | 仅 Android | `UTF-8`   | -                        |

<DemoPhone name="sn-e-qrcode" />