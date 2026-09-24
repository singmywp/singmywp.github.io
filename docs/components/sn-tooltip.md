# Tooltip  提示框

> [查看 sn-tooltip 的 2.0 版本差异](/differences/components/sn-tooltip)

## 基础用法

- 提示框，点击触发器后在附近弹出说明文字，常用于解释某个按钮或操作的用途
- 弹出层类组件，必须放在 `sn-page` 中使用（组件内部基于弹出层实现，依赖 `sn-page` 注入的 CSS 变量）
- 支持 12 个弹出方位，内容自动定位到触发器附近，靠近屏幕边缘时自动收进避免超出屏幕
- 点击触发器弹出，再次点击触发器或点击提示框外部（透明遮罩）关闭
- 未提供 `trigger` 插槽时，`default` 插槽内容或 `text` 文本自身充当触发器

```vue
<template>
	<sn-tooltip text="这是一个提示信息">
		<template #trigger>
			<sn-button type="primary" level="second" text="点我"></sn-button>
		</template>
	</sn-tooltip>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 提示文本内容 | String | `''` | - |
| position | 弹出方位（相对触发器） | String | `top-start` | `top-start` \| `top` \| `top-end` \| `bottom-start` \| `bottom` \| `bottom-end` \| `left-start` \| `left` \| `left-end` \| `right-start` \| `right` \| `right-end` |
| width | 提示框宽度，`$` 前缀按字体大小乘数缩放 | String \| Number | `''` | - |
| height | 提示框高度，`$` 前缀按字体大小乘数缩放 | String \| Number | `''` | - |
| borderRadius | 提示框圆角大小，`$` 前缀按圆角乘数缩放 | String \| Number | `12px` | - |
| padding | 提示框内边距，支持 `$` 前缀按间距乘数缩放 | String | `10px 10px` | - |
| bgColor | 提示框背景颜色，支持 `$` 简写主题色 | String | `$info` | - |
| boxShadow | 提示框阴影 | String | `0px 2px 10px 0px $infoDark` | - |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，`0` 关闭动画 | String \| Number | `$normal` | `$long` \| `$normal` \| `$short` \| 数值 |
| customStyle | 自定义组件根节点样式 | UTSJSONObject \| String | `''` | - |
| tooltipStyle | 提示框自定义样式 | UTSJSONObject \| String | `''` | - |
| tooltipClass | 提示框外部样式类 | String | `''` | - |
| triggerStyle | 触发器自定义样式 | UTSJSONObject \| String | `''` | - |
| triggerClass | 触发器外部样式类 | String | `''` | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| trigger | 触发器内容（如一个按钮），点击后弹出提示框 |
| default | 提示框内容；未提供 `trigger` 插槽时同时充当触发器 |

<DemoPhone name="sn-tooltip" />
