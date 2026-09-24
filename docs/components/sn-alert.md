# Alert  警告信息

> [查看 sn-alert 的 2.0 版本差异](/differences/components/sn-alert)

## 基础用法

- 用以在页面中展示重要的提示信息，五种功能色主题与浅色/深色两种显示效果
- 支持自定义图标（不传时按 `type` 自动选择默认图标）、文字居中、可关闭（closable），关闭后组件隐藏并触发 `close` 事件
- `bgColor`/`textColor`/`iconColor` 等颜色属性支持 `$` 简写，随心定制

```vue
<template>
	<sn-alert text="这是一条警告信息。"></sn-alert>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 警告信息文本内容（未提供默认插槽内容时显示） | String | `''` | - |
| icon | 左侧图标名，按 `type` 自动选择默认图标 | String | - | - |
| type | 警告信息主题样式类型 | String | `info` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| effect | 显示效果，`light` 为浅色，`dark` 为深色 | String | `light` | `light` \| `dark` |
| bgColor | 背景颜色，按 `type` 与 `effect` 取主题色（light 取 `{type}Light`，dark 取 `{type}`） | String | - | - |
| textColor | 文本颜色，按 `type` 与 `effect` 取主题配对色（`info` 类型取 `$text`） | String | - | - |
| textSize | 文本大小，支持 `$` 前缀按字体乘数缩放 | String \| Number | `$14` | - |
| iconColor | 图标颜色，同 `textColor` | String | - | - |
| iconSize | 图标大小，支持 `$` 前缀按字体乘数缩放 | String \| Number | `$16` | - |
| borderRadius | 圆角大小，支持 `$` 前缀按圆角乘数缩放 | String \| Number | `$8` | - |
| showIcon | 是否显示图标 | Boolean | `true` | `true` \| `false` |
| center | 文字是否居中显示 | Boolean | `false` | `true` \| `false` |
| closable | 是否显示关闭按钮，点击后组件隐藏并触发 `close` 事件 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| textClass | 文本外部样式类 | String | `''` | - |
| textStyle | 文本自定义样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 图标外部样式类 | String | `''` | - |
| iconStyle | 图标自定义样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| close | () => Void | 点击关闭按钮时触发（组件随即自行隐藏，如需重新显示可通过 `v-if` 控制组件重建） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换警告信息原有的文本内容，可以是任意组件 |
| icon | 替换左侧默认图标 |
| close | 替换右侧默认关闭按钮图标 |

<DemoPhone name="sn-alert" />
