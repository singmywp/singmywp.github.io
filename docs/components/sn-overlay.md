# Overlay  遮罩层

> [查看 sn-overlay 的 2.0 版本差异](/differences/components/sn-overlay)

## 基础用法

- 全屏遮罩层，用于强调特定元素或拦截页面交互，常与弹出层、模态框搭配使用
- 弹出层类组件，必须放在 `sn-page` 中使用（作为 `sn-page` 的子节点或页面根节点），组件依赖 `sn-page` 注入的 CSS 变量
- 遮罩内插槽可放置任意内容，点击遮罩区域（默认）可关闭
- 通过 ref 绑定组件后调用 `open` / `close` 方法控制显隐，层级固定为 999

```vue
<template>
	<sn-page>
		<sn-button text="打开遮罩" type="primary" @click="open"></sn-button>
		<sn-overlay ref="overlayEle">
			<view class="content">
				<sn-text text="遮罩内容"></sn-text>
			</view>
		</sn-overlay>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| maskClose | 点击遮罩区域是否关闭遮罩层 | Boolean | `true` | `true` \| `false` |
| opacity | 遮罩层透明度 | Number | `0.4` | - |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，`0` 时瞬时显隐 | String \| Number | `$long` | `$long` \| `$normal` \| `$short` \| 数值 |
| bgColor | 遮罩背景颜色，支持 `$` 简写主题色 | String | `#000` | - |
| customStyle | 自定义遮罩根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| open | () => Void | 打开时触发 |
| close | () => Void | 关闭时触发 |
| click-mask | () => Void | 点击遮罩区域时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开遮罩层 |
| close | - | - | 关闭遮罩层 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 遮罩层内容 |

<DemoPhone name="sn-overlay" />
