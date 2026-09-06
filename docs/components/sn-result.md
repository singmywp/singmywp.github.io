# Result  结果页

> [查看 sn-result 的 2.0 版本差异](/differences/components/sn-result)

## 基础用法

- 用于展示操作结果，如成功、失败、警告等信息提示页。
- 通过 `mode` 切换五种结果类型，默认图标与图标颜色随模式自动匹配。
- 支持通过插槽自定义图标、标题、文本与操作区。

```vue
<template>
	<sn-result mode="success" title="支付成功" text="订单号：SN20260806001"></sn-result>
</template>
```

**更多演示请下载 demo 查看**

## 自定义图标

使用 `icon` 插槽可完全替换默认图标；若仅调整默认图标的大小与颜色，直接使用 `icon-size`、`icon-color` 属性即可。

```vue
<template>
	<sn-result mode="success" title="订单已完成" text="配送员正在派送中">
		<template #icon>
			<sn-icon name="truck-line" :size="34" color="#ffffff"></sn-icon>
		</template>
	</sn-result>
</template>
```

## 操作区

使用 `action` 插槽在结果页底部放置后续操作按钮。

```vue
<template>
	<sn-result mode="success" title="支付成功" text="¥ 128.00">
		<template #action>
			<sn-button text="返回首页" @click="backHome"></sn-button>
			<sn-button text="查看订单" level="second" @click="viewOrder"></sn-button>
		</template>
	</sn-result>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 结果页类型，决定默认图标与图标颜色 | String | `info` | `info` \| `primary` \| `success` \| `warning` \| `error` |
| title | 标题文本 | String | - | - |
| titleSize | 标题字体大小，默认 18px × 字体乘数 | String \| Number | - | - |
| titleColor | 标题颜色，默认主题文本色 | String | - | - |
| text | 文本内容 | String | - | - |
| textSize | 文本字体大小，默认 14px × 字体乘数 | String \| Number | - | - |
| textColor | 文本颜色，默认主题浅文本色 | String | - | - |
| iconSize | 图标大小，默认 56px × 字体乘数 | String \| Number | - | - |
| iconColor | 图标颜色，默认随 mode 使用对应功能色 | String | - | - |
| titleStyle | 自定义标题节点内联样式 | UTSJSONObject \| String | - | - |
| titleClass | 自定义标题节点外部样式类 | String | - | - |
| textStyle | 自定义文本节点内联样式 | UTSJSONObject \| String | - | - |
| textClass | 自定义文本节点外部样式类 | String | - | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| icon | 替换结果图标 |
| title | 替换结果标题 |
| text | 替换结果文本 |
| action | 放置操作按钮等后续操作内容 |

<DemoPhone name="sn-result" />
