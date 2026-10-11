# Float Board  浮动面板

> [查看 sn-float-board 的 2.0 版本差异](/differences/components/sn-float-board)

## 基础用法

固定吸附在屏幕四边之一的浮动面板，始终显示。

- 通过手势拖拽在折叠与展开状态之间切换，松手后按滑动距离自动归位
- 组件为固定定位，不占据文档流空间

::: info 与 sn-drawer 的区别
`sn-drawer` 是弹出层，需要调用方法才能显示；`sn-float-board` 始终显示。可理解为：`sn-drawer` 是关闭的浮动面板，`sn-float-board` 是半开的浮动面板。
:::

::: info 预留空隙
组件不占据文档流空间，请在页面底部为面板折叠后的空隙预留位置（如使用 `sn-gap`）。
:::

```vue
<template>
	<sn-float-board>
		<sn-text text="Float Board 浮动面板"></sn-text>
	</sn-float-board>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| position | 浮动面板吸附的位置，非法值回退为 `bottom` | String | `bottom` | `top` \| `right` \| `bottom` \| `left` |
| showLine | 是否显示指示条 | Boolean | `true` | `true` \| `false` |
| maxWidth | 当 `position` 为 `left` \| `right` 且展开时浮动面板的宽度 | String | `300px` | - |
| minWidth | 当 `position` 为 `left` \| `right` 且折叠时浮动面板的宽度 | String | `50px` | - |
| maxHeight | 当 `position` 为 `top` \| `bottom` 且展开时浮动面板的高度 | String | `500px` | - |
| minHeight | 当 `position` 为 `top` \| `bottom` 且折叠时浮动面板的高度 | String | `50px` | - |
| slideHeight | 纵向滑动阈值，松手时滑动距离达到阈值则折叠或展开 | String | `100px` | - |
| slideWidth | 横向滑动阈值，松手时滑动距离达到阈值则折叠或展开 | String | `100px` | - |
| bgColor | 浮动面板背景颜色 | String | `$infoActive` | - |
| lineColor | 指示条颜色 | String | `$lineText` | - |
| padding | 面板内容区内边距（传给内部 sn-view） | String | `25px 15px 10px 15px` | - |
| borderRadius | 面板圆角大小，为随圆角乘数计算的默认圆角（四个直角侧自动贴合屏幕边缘） | String \| Number | - | - |
| aniTime | 展开/折叠动画时长，支持 `$` 动态时长语法 | String \| Number | `$long` | - |
| disabled | 是否禁用滑动手势 | Boolean | `false` | `true` \| `false` |
| zIndex | 面板层级 | Number | `999` | - |
| customStyle | 自定义浮动面板样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| unfold | () => Void | 展开浮动面板时触发 |
| fold | () => Void | 折叠浮动面板时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| unfold | - | - | 展开浮动面板 |
| fold | - | - | 折叠浮动面板 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 在浮动面板内部放置组件 |

<DemoPhone name="sn-float-board" />
