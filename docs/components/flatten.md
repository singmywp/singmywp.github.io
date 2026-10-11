# 拍平元素

SinleUI 基于 uni-app x 蒸汽模式开发。为保证渲染性能，`sn-text`、`sn-icon` 等组件的根节点**默认拍平（flatten）**，因此它们不支持事件与部分样式；本页说明拍平的含义、限制与替代方案。

## 什么是拍平

拍平即不为元素创建独立的原生节点，而是把它直接绘制在父节点上：节点数量更少，渲染与内存开销更低。

- 元素更少：大量文本、图标与长列表场景收益明显
- 初始化属性：只在初始化时生效，运行时不支持动态切换
- 会向下传递：自定义组件的单根节点是 view / text / image 时，拍平会传递给该单根节点

## 不支持的功能

| 功能 | 说明 |
| :--- | :--- |
| 事件 | 不能绑定 `click`、`touch` 等事件，绑定后不会触发 |
| 截图 | 不能使用 `takeSnapshot` 截图 |
| 原生节点 | 无法获取原生 view 对象 |
| 图片动画 | image 拍平后，gif、webp 动画仅显示第一帧 |

## 不支持的样式

| 样式 | 说明 |
| :--- | :--- |
| `visibility` | 不支持 |
| `z-index` | 不支持，层级需由非拍平节点承担 |
| `background-image`、`background-clip` | 不支持 |
| `pointer-events` | 不支持 |
| `box-shadow` | 不支持 `inset` 与 `spreadRadius` |
| `display` | 值为 `fixed` 时存在缺陷，无法覆盖其它非 `fixed` 元素 |
| `transition` | 渲染类样式（如 `background-color`）的过渡动画不生效 |
| `transform`、`overflow`、`opacity` | view 拍平后存在缺陷：该 view 存在子元素时，这些样式不会作用于非拍平的子元素 |

以上是官方列出的拍平限制，完整清单见 [不支持拍平的 CSS 属性](https://doc.dcloud.net.cn/uni-app-x/css/#css-no-flatten-list)。

::: info 鸿蒙平台的性能前提

仅当至少两个相邻元素（父子或兄弟）同时拍平时才有性能收益，否则可能反而降低性能。

:::

## 组件中的拍平

框架中部分组件的根节点即为拍平节点，例如 `sn-text`、`sn-icon`、`sn-form`、`sn-gap`、`sn-radio-group` 等（`sn-line` 的部分分支同样拍平）。因此：

- 给这些组件绑定 `click`、`touch` 等原生事件不会触发；组件自身 emit 的事件（如表单的 `fail`、`pass`）不受影响
- `customStyle` 中的样式也须为拍平支持的样式
- 组件内部节点是否拍平，以组件源码为准

## 解决方案

`sn-text`、`sn-icon` 的根节点默认拍平，需要上述功能或样式时：

- **外裹 `view`**：把事件与样式挂在 `view` 上，拍平节点只负责绘制内容（推荐）
- **改用原生 `text`**：只需普通文本渲染时，直接用 `text` 组件替代 `sn-text`

```vue
<template>
	<view @click="onReset">
		<sn-text text="重置"></sn-text>
	</view>

	<view class="card-shadow" @click="onOpen">
		<sn-icon name="home-line"></sn-icon>
	</view>
</template>
```

## 参考

- [uni-app x 蒸汽模式：组件（拍平限制）](https://doc.dcloud.net.cn/uni-app-x/app-vapor.html#%E7%BB%84%E4%BB%B6)
- [uni-app x：不支持拍平的 CSS 属性](https://doc.dcloud.net.cn/uni-app-x/css/#css-no-flatten-list)
