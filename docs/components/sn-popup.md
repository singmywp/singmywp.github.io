# Popup  弹出层

> [查看 sn-popup 的 2.0 版本差异](/differences/components/sn-popup)

## 基础用法

通用弹出层容器，只负责遮罩、显隐与动画，内容完全由插槽自定义。

- 内置五个弹出方向的默认动画，并可为打开与关闭分别提供自定义动画
- 遮罩与内容独立分层，遮罩拦截点击穿透与滚动
- 不提供内置 UI 模板，需要模板化弹层可选用 Drawer、Modal 等组件

::: danger 必须放在 sn-page 下
本组件为弹出层，需直接放在 `sn-page` 根节点下（页面根节点或 `sn-page` 的直接子节点），否则页面的 `--sn-*`、`--ani-time-*` 变量不生效，颜色与动画异常。
:::

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

## 实现原理

弹层在首次打开后保留节点，通过 `visibility` 与 CSS 过渡完成显隐切换，默认动画不会逐次重建节点。

默认动画在透明准备阶段被关闭打断时，会立即隐藏弹层并释放层级，已过期的异步回调不会重新打开弹层。

每个弹层预留遮罩与内容两个层级，后打开弹层的遮罩高于已打开弹层的内容。遮罩阻止点击、触摸移动冒泡及默认滚动，Web 端同时阻止遮罩上的滚轮滚动；内容只阻止点击与触摸移动冒泡，不禁止内部滚动。

## 注意事项

弹层内使用 `scroll-view` 展示可变数量的内容时，按内容自然高度排布并设置最大高度；不要为短列表设置 `flex: 1`，否则会撑出无法点击遮罩的空白滚动区域。

## 自定义动画

`openAnimation` / `closeAnimation` 分别接管对应方向的默认动画，函数签名为 `(overlay: UniElement | null, content: UniElement | null, duration: number) => void`。组件不会获取回调内部创建的动画实例，因此回调需要自行保存并取消上一条动画。入场过程中 `close` 会立即调用关闭回调；关闭回调应先读取当前变换和透明度，再取消上一条动画，以当前样式作为退场首帧，不能把起点固定为 `scale(1)` 或 `opacity: 1`。

Android 的 `animate` 仅支持 `fill: 'forwards'`。为避免首帧显示终态再跳回起点，需要先通过 `customStyle` 或 `style.setProperty` 设置与入场首帧一致的样式，再创建动画；动画结束后取消动画并直写终态，释放 `fill: forwards` 对后续样式的覆盖。demo 的四种自定义动画均按此流程管理实例，页面卸载时取消剩余动画。

全屏根容器使用固定定位，随组件初始化创建并保留，不随打开操作条件挂载；内部通过 `template v-if` 延迟渲染遮罩和内容，避免 Android 多实例排障中观察到的动态 fixed 根 View 未附着窗口的路径。根容器不设置动画透明度；默认遮罩和内容使用绝对定位，在其内部独立动画，避免遮罩隐藏状态影响内容。居中弹层默认按内容实际宽高定位，动画函数可直接使用 `scale`、`rotate` 或 `translate`；在 `customStyle` 中明确传入 `position` 定位时，由开发者提供所需的 `top` / `left` / `right` / `bottom`。

各端内置入退场动画通过内容节点的位移/缩放与透明度过渡、遮罩淡入淡出实现；五种位置均按内容实际尺寸定位，顶部/底部仅占内容宽度，左右侧仅占内容高度，空白区域点击由遮罩处理。默认动画首次打开与隐藏后重开均经过透明准备阶段：恢复根容器可见，等待有效容器尺寸，再测量内容、设置定位偏移，并在布局提交后启动入场；不能只凭隐藏节点保留的 `offsetWidth` / `offsetHeight` 判定布局已就绪。关闭动画完成前两者保持挂载，默认动画关闭后仅隐藏节点。自定义动画在定位稳定后先建立动画再显示节点；自定义动画如需对内容淡入淡出，应直接在回调中操作 `content` 的透明度。

下方仅展示入场关键帧；包含动画实例清理和半程关闭衔接的完整用法见 popup demo。

```vue
<template>
	<sn-popup ref="popupEle" :ani-time="500" :open-animation="bounceOpenAnim" custom-style="transform: scale(0.6); opacity: 1;">
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

## 显隐诊断

当前 popup demo 带有用于定位 Android 多实例显隐问题的临时诊断日志，前缀为 `[sn-popup-diagnostic]`，统一经过框架 logger 输出。日志仅在 `pages/components/sn-popup` 页面且 `$snui.logging` 开启时采集；不修改弹层显隐、动画或层级行为。

日志记录实例 id、生命周期阶段、逻辑显隐、准备状态、层级栈与灰度配置，并在入场启动、入场完成和关闭完成后的 64ms 采样根容器、遮罩、内容及祖先节点的实际样式和位置尺寸；定位样式包括 `top` / `left` / `right` / `bottom`、`margin-left` / `margin-top`。`prepare-visible` 标记透明准备阶段。同步的打开阶段只记录状态，不主动测量节点，降低诊断对首次渲染时序的影响。页面卸载时清理采样定时器。

复现时保留两组日志：重新进入页面后首先打开目标弹层的正常日志，以及先打开关闭基础弹层，再打开自定义遮罩或嵌套弹层的异常日志。异常弹层打开后等待至少一秒再关闭，以保留 `afterenter-next-frame` 的节点采样。问题定位后应移除这组临时诊断。

Android 在 `afterenter-next-frame` 和 `afterleave-next-frame` 额外通过 `sinle-api` 的临时 `capturePopupNativeViewInfo` 接口采集实际原生 View。结果按 `native depth=N` 逐层输出，包含 `isAttachedToWindow`、`isShown`、原生 `visibility/alpha`、屏幕坐标、全局可见矩形、父链和裁剪配置；原生坐标为物理像素，不可直接与 UniElement 日志的逻辑像素比较。`status=no-native-view` 表示未获取到原生节点；只有原生挂载及父链结果才能进一步判断是否为节点脱离窗口、父容器隐藏或裁剪。采样只读，不改变 UI。

本轮 Android 异常日志中，根 View 的 `isAttachedToWindow=false`、`windowTokenIsNull=true`、`parentIndex=-1`，而内容在该根 View 内的位置正常，说明整棵弹层原生子树未附着窗口，不能把屏幕坐标 `(0,0)` 直接判为定位失效。常驻根容器改动仍需复测确认：打开后根 View 应附着窗口、拥有父链，且 `isShown=true`；正确的 CSS 样式与尺寸不能替代挂载状态检查。

原生诊断修改包含 Kotlin 混编，需由开发者重新运行 Android 项目完成联编。该接口仅供临时排障，不作为稳定业务 API，问题验证后应与临时日志一并移除。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| position | 弹出位置，弹出动画随位置变化 | String | `center` | `center` \| `top` \| `bottom` \| `left` \| `right` |
| renderMode | 内部遮罩与内容的渲染方式，`v-if` 为首次打开时挂载，`v-show` 为初始即挂载仅切换显隐；固定根容器始终常驻 | String | `v-if` | `v-if` \| `v-show` |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，`0` 关闭动画 | String \| Number | `$long` | `$long` \| `$normal` \| `$short` \| 数值 |
| preventBack | 是否阻止返回键关闭弹出层 | Boolean | `false` | `true` \| `false` |
| maskClose | 点击遮罩是否关闭弹出层 | Boolean | `true` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.4` | - |
| zIndex | 弹出层基础层级；打开时按栈内已有弹层自动抬升，内容层级为实际遮罩层级加 1 | Number | `999` | - |
| overlayStyle | 自定义遮罩层样式，后置覆盖默认遮罩样式 | UTSJSONObject \| String | `''` | - |
| customClass | 遮罩层外部样式类 | String | `''` | - |
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
| open | - | - | 打开弹出层；默认动画退场中立即反向入场，自定义动画退场中在收尾后重开 |
| close | - | - | 关闭弹出层；入场期间立即启动退场，自定义动画的当前帧衔接由关闭回调负责 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |

<DemoPhone name="sn-popup" />
