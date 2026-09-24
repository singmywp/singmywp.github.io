# Backtop  回到顶部

> [查看 sn-backtop 的 2.0 版本差异](/differences/components/sn-backtop)

## 基础用法

- 用于长页面或长列表：滚动超过阈值（`top`，单位 px）后，右下角浮现回到顶部按钮，点击后平滑滚动回顶部。
- 自动绑定滚动容器：直接放在 `sn-page`、`sn-scroll-view`、`sn-list-view`、`sn-waterflow` 的同级或父级下即可，无需额外配置；也可通过 `target` 显式指定绑定目标。
- 绑定 `sn-page`（页面级滚动）时按钮采用 `fixed` 定位，绑定容器内滚动时采用 `absolute` 定位。

```vue
<template>
	<sn-page>
		<sn-backtop></sn-backtop>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 绑定指定容器

`target` 可传滚动容器组件的 ref 名，或滚动容器元素的 id（Web 端也可传选择器）。为空时自动查找：先同级后父级。

```vue
<template>
	<sn-scroll-view ref="scrollRef" class="scroll-box">
		<sn-backtop target="scrollRef"></sn-backtop>
	</sn-scroll-view>
</template>
```

## 自定义样式

图标、形状、主题类型与等级、背景色、尺寸、位置、动画时长均可自定义；设置 `bg-color` 后覆盖 `type` 和 `level` 推导出的主题色。

```vue
<template>
	<sn-backtop type="warning" level="second" icon="arrow-up-line" size="60px" :right="90" :bottom="110"></sn-backtop>
	<sn-backtop type="info" shape="square" :right="160" :bottom="110"></sn-backtop>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| icon | 按钮内部图标 | String | `skip-up-line` | - |
| shape | 按钮形状 | String | `circle` | `circle` \| `square` |
| type | 主题样式类型 | String | `primary` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level | 等级，与 `type` 共同推导背景色和图标色 | String | `first` | `first` \| `second` \| `third` \| `least` |
| bgColor | 自定义背景颜色，设置后覆盖 `type` 和 `level` 的主题色 | String | `''` | - |
| iconColor | 图标颜色，按 `type` / `level` 配色矩阵推导 | String | - | - |
| iconSize | 图标大小（支持 `$` 简写） | String \| Number | `$20` | - |
| size | 按钮尺寸（支持 `$` 简写），圆形按钮圆角为尺寸的一半 | String \| Number | `50px` | - |
| zIndex | 按钮 `z-index` 层级 | Number | `991` | - |
| aniTime | 显示/隐藏过渡动画时长（支持 `$` 简写） | String \| Number | `$normal` | - |
| top | 滚动距离超过该值（单位 px）时显示按钮 | Number | `400` | - |
| right | 按钮距右边界距离（单位 px） | Number | `30` | - |
| bottom | 按钮距下边界距离（单位 px） | Number | `100` | - |
| disabled | 是否禁用，禁用时按钮变灰且不可点击 | Boolean | `false` | `true` \| `false` |
| target | 绑定目标：父作用域中滚动容器组件的 ref 名，或滚动容器元素 id/选择器；为空自动查找 | String | `''` | - |
| customStyle | 自定义按钮样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义按钮外部样式类 | String | `''` | - |
| externalStyle | 额外内联样式 | UTSJSONObject \| String | `''` | - |
| externalClass | 额外外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (e: UniPointerEvent) => Void | 点击按钮时触发（先执行回到顶部滚动，禁用时不触发） |

<DemoPhone name="sn-backtop" />
