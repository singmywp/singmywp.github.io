# sn-transition

> 旧版组件：sn-transition.md

**旧版状态**：v1 提供过渡动画容器 `sn-transition`，通过 `show` 控制显隐、`placed` 控制隐藏时是否占位，内置 `fade` / `zoom` / `fadeZoom` / `fadeUp` / `fadeRight` / `fadeDown` / `fadeLeft` / `slideUp` / `slideRight` / `slideDown` / `slideLeft` 共 11 种 `mode`，并配套 `aniTime`、`timingFunction` 属性与 `beforeEnter` / `enter` / `afterEnter` / `beforeLeave` / `leave` / `afterLeave` / `transitionend` 事件。

**删除结论**：v2 **已移除** `sn-transition` 组件。

**删除原因**：

- 过渡动画本质是 `transition` 属性 + 起始/终止状态切换，UCSS 已原生支持 `transition`，单独封装一层容器组件属于重复建设。
- 旧版组件内部依赖 `v-show` + `Element.style.setProperty` 逐帧写入、并以固定 `60ms` `setTimeout` 触发进入动画，动画时序脆弱（首帧依赖延时、快速连续切换易丢帧）。
- v2 的统一动画方案为 `UniElement` DOM `animate` + `--ani-time-*` CSS 变量 + `aniTimeFactor` 全局调速，不再需要组件级的动画模式枚举，删除后可避免两套动画体系并存。

**替代方案**：

- 简单的显隐过渡：直接在内置 `<view>` 上写 `transition` 与条件样式：

```vue
<template>
	<view class="box" :style="show ? 'opacity:1;transform:translate(0,0);' : 'opacity:0;transform:translate(0,20px);'">
		<text>内容</text>
	</view>
</template>

<style lang="scss">
	.box {
		transition: opacity var(--ani-time-normal), transform var(--ani-time-normal);
	}
</style>
```

- 需要更复杂的动画编排（缓动曲线、关键帧序列、并发/串行控制）：使用 `UniElement` 的 DOM `animate` 方法（详见 [uni-app x UniElement 文档](https://doc.dcloud.net.cn/uni-app-x/api/dom/unielement.html)）。
- 需要「淡入淡出 + 位移」这类旧版 `mode` 的组合效果，等价于同时设置 `opacity` 与 `transform`，无需再记忆模式名。
- 「隐藏时是否占位」等价于 `display` / `visibility` 的选择：不占位用 `v-if` 或 `display: none`，占位用 `visibility: hidden`。
- 弹出层类组件（`sn-popup` / `sn-modal` / `sn-drawer` 等）已内置六段动画生命周期事件 `beforeenter` / `enter` / `afterenter` / `beforeleave` / `leave` / `afterleave`，可直接复用。
