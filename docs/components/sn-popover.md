# Popover  定位弹出层

## 基础用法

- 在指定屏幕坐标处弹出的轻量弹出层（v2 新增组件），常用于长按菜单、点击气泡等场景
- 弹出层类组件，必须放在 `sn-page` 中使用（作为 `sn-page` 的子节点或页面根节点），组件依赖 `sn-page` 注入的 CSS 变量
- 通过 ref 调用 `open(x, y)` 在坐标处弹出（支持 `offsetX` / `offsetY` 偏移），调用 `close` 关闭；也可用 `v-model:show` 双向绑定显示状态
- 内容靠近屏幕边缘时自动避让（与屏幕边缘保持 10px 间距），不会超出屏幕
- 支持 8 种内置动画与自定义动画函数，可通过 `overlay` 开启暗色遮罩；Web 端弹出期间自动锁定页面滚动

```vue
<template>
	<sn-page>
		<sn-button text="打开弹出层" type="primary" @click="open"></sn-button>
		<sn-popover ref="popoverEle">
			<view class="menu">
				<sn-cell title="复制" icon="file-copy-line" clickable @click="close"></sn-cell>
				<sn-cell title="粘贴" icon="clipboard-line" clickable @click="close"></sn-cell>
			</view>
		</sn-popover>
	</sn-page>
</template>

<script lang="uts" setup>

	const popoverEle = ref<SnPopoverComponentPublicInstance | null>(null)

	function open(): void {
		const info = uni.getWindowInfo()
		popoverEle.value?.$callMethod('open', Math.round(info.windowWidth / 2), Math.round(info.windowHeight / 2))
	}

	function close(): void {
		popoverEle.value?.$callMethod('close')
	}
</script>
```

**更多演示请下载 demo 查看**

## 长按弹出

典型场景：在触摸区域监听 `longpress` 事件，用触点坐标打开弹出层。

```vue
<template>
	<sn-view bg-color="$infoDark" border-radius="$16" custom-style="height: 220px;" @touchstart="onTouchStart" @longpress="onLongpress">
		<sn-text text="长按此区域触发弹层"></sn-text>
	</sn-view>
	<sn-popover ref="popoverEle">
		<view class="menu">
			<sn-cell title="复制" icon="file-copy-line" clickable @click="close"></sn-cell>
		</view>
	</sn-popover>
</template>

<script lang="uts" setup>
	import type { SnTouchEvent } from '@/uni_modules/sinle-ui'

	const popoverEle = ref<SnPopoverComponentPublicInstance | null>(null)
	let point = [0, 0]

	function onTouchStart(e: SnTouchEvent): void {
		if (e.touches.length > 0) {
			point = [e.touches[0].x, e.touches[0].y]
		}
	}

	function onLongpress(): void {
		popoverEle.value?.$callMethod('open', point[0], point[1])
	}

	function close(): void {
		popoverEle.value?.$callMethod('close')
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:show | 显示状态双向绑定，关闭时自动同步为 false | Boolean | `false` | `true` \| `false` |
| zIndex | 弹出层层级 | Number | `999` | - |
| overlay | 是否显示暗色遮罩 | Boolean | `false` | `true` \| `false` |
| overlayOpacity | 遮罩透明度（仅 `overlay` 为 true 时生效） | Number | `0.3` | - |
| overlayStyle | 自定义遮罩层样式 | UTSJSONObject \| String | `''` | - |
| overlayClass | 遮罩层外部样式类 | String | `''` | - |
| contentStyle | 弹出内容自定义样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 弹出内容外部样式类 | String | `''` | - |
| closeOnClickOverlay | 点击遮罩区域是否关闭弹出层 | Boolean | `true` | `true` \| `false` |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，`0` 关闭动画 | String \| Number | `200` | `$long` \| `$normal` \| `$short` \| 数值 |
| offsetX | 弹出坐标 X 方向偏移（px） | Number | `0` | - |
| offsetY | 弹出坐标 Y 方向偏移（px） | Number | `0` | - |
| animation | 内置动画类型 | String | `scale` | `fade` \| `scale` \| `slide-up` \| `slide-down` \| `slide-left` \| `slide-right` \| `zoom` \| `bounce` |
| openAnimation | 自定义打开动画函数，传入后 `animation` 不再生效 | Function \| null | `null` | - |
| closeAnimation | 自定义关闭动画函数，传入后 `animation` 不再生效 | Function \| null | `null` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| update:show | (value: boolean) => Void | 显示状态变化时触发（配合 `v-model:show` 使用） |
| clickoverlay | () => Void | 点击遮罩区域时触发 |
| beforeenter | () => Void | 打开动画开始前触发 |
| enter | () => Void | 打开动画开始时触发 |
| afterenter | () => Void | 打开动画结束后触发 |
| beforeleave | () => Void | 关闭动画开始前触发 |
| leave | () => Void | 关闭动画开始时触发 |
| afterleave | () => Void | 关闭动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | x: Number, y: Number | - | 在屏幕坐标 (x, y) 处打开弹出层（叠加 `offsetX` / `offsetY` 偏移） |
| close | - | - | 关闭弹出层 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |

<DemoPhone name="sn-popover" />
