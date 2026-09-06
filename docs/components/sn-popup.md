# Popup  弹出层

> [查看 sn-popup 的 2.0 版本差异](/differences/components/sn-popup)

## 基础用法

- 通用弹出层容器：只负责遮罩、显隐与动画，UI 完全由插槽内容自定义（需要自带 UI 模板的弹层可用 Drawer、Modal 等组件）
- 弹出层类组件，必须放在 `sn-page` 中使用（作为 `sn-page` 的子节点或页面根节点），组件依赖 `sn-page` 注入的 CSS 变量
- 内置 5 个弹出方向动画，支持 `v-if` / `v-show` 两种渲染模式与自定义动画函数
- 通过 ref 绑定组件后调用 `open` / `close` 方法控制显隐

```vue
<template>
	<sn-page>
		<sn-button text="打开弹层" type="primary" @click="open"></sn-button>
		<sn-popup ref="popupEle" position="bottom">
			<view class="content">
				<sn-text text="底部弹层内容"></sn-text>
			</view>
		</sn-popup>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 自定义动画

`openAnimation` / `closeAnimation` 传入函数后完全接管默认动画，函数签名为 `(overlay: UniElement | null, content: UniElement | null, duration: number) => void`：`overlay` 为遮罩节点，`content` 为内容节点，`duration` 为本次动画时长（ms）。关闭动画用法相同。

```vue
<template>
	<sn-popup ref="popupEle" :ani-time="500" :open-animation="bounceOpenAnim">
		<view class="content">
			<sn-text text="弹跳进入"></sn-text>
		</view>
	</sn-popup>
</template>

<script lang="uts" setup>
	const bounceOpenAnim = (overlay: UniElement | null, content: UniElement | null, duration: number): void => {
		if (overlay != null) {
			overlay.animate(
				[{ opacity: '0' } as UniAnimationKeyframe, { opacity: '1' } as UniAnimationKeyframe],
				{ duration: duration, easing: 'ease-out', fill: 'forwards' }
			)
		}
		if (content != null) {
			content.animate(
				[
					{ transform: 'scale(0.6)' } as UniAnimationKeyframe,
					{ transform: 'scale(1.08)' } as UniAnimationKeyframe,
					{ transform: 'scale(1)' } as UniAnimationKeyframe
				],
				{ duration: duration, easing: 'ease-out', fill: 'forwards' }
			)
		}
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| position | 弹出位置，弹出动画随位置变化 | String | `center` | `center` \| `top` \| `bottom` \| `left` \| `right` |
| renderMode | 渲染方式，`v-if` 为首次打开时挂载节点，`v-show` 为初始即挂载仅切换显隐 | String | `v-if` | `v-if` \| `v-show` |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，`0` 关闭动画 | String \| Number | `$long` | `$long` \| `$normal` \| `$short` \| 数值 |
| preventBack | 是否阻止返回键关闭弹出层 | Boolean | `false` | `true` \| `false` |
| maskClose | 点击遮罩是否关闭弹出层 | Boolean | `true` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.4` | - |
| zIndex | 弹出层层级 | Number | `999` | - |
| overlayStyle | 自定义遮罩层（根节点）样式，后置覆盖默认遮罩样式 | UTSJSONObject \| String | `''` | - |
| customClass | 遮罩层（根节点）外部样式类 | String | `''` | - |
| customStyle | 自定义内容容器样式 | UTSJSONObject \| String | `''` | - |
| openAnimation | 自定义打开动画函数，传入后接管默认打开动画 | Function \| null | `null` | - |
| closeAnimation | 自定义关闭动画函数，传入后接管默认关闭动画 | Function \| null | `null` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| clickoverlay | () => Void | 点击遮罩时触发 |
| beforeenter | () => Void | 打开动画开始前触发 |
| enter | () => Void | 打开动画开始时触发 |
| afterenter | () => Void | 打开动画结束后触发 |
| beforeleave | () => Void | 关闭动画开始前触发 |
| leave | () => Void | 关闭动画开始时触发 |
| afterleave | () => Void | 关闭动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开弹出层；动画进行中重复调用会挂起，待动画结束后自动执行 |
| close | - | - | 关闭弹出层；动画进行中重复调用会挂起，待动画结束后自动执行 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |

<DemoPhone name="sn-popup" />
