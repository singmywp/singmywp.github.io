# Float Board  浮动面板

> [查看 sn-float-board 的 2.0 版本差异](/differences/components/sn-float-board)

## 基础用法
- 固定吸附在屏幕四边之一的面板，始终显示，用户可通过手势拖拽在折叠与展开状态之间切换，松手后根据滑动距离自动归位
- 请注意区分 `sn-drawer` 和 `sn-float-board`：`sn-drawer` 是弹出层，需要调用方法才能显示；而 `sn-float-board` 则始终显示（可以把 `sn-drawer` 理解为关闭的浮动面板，`sn-float-board` 则是半开的浮动面板）
- 组件为 `fixed` 定位，不占据文档流空间，请在页面底部预留面板折叠后的空隙（如 `sn-gap`）

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
| bgColor | 浮动面板背景颜色，留空时使用主题 `infoActive` 色值 | String | `''` | - |
| lineColor | 指示条颜色，留空时使用主题 `lineText` 色值 | String | `''` | - |
| padding | 面板内容区内边距（传给内部 sn-view） | String | `25px 15px 10px 15px` | - |
| borderRadius | 面板圆角大小，留空时为随圆角乘数计算的默认圆角（四个直角侧自动贴合屏幕边缘） | String \| Number | `''` | - |
| aniTime | 展开/折叠动画时长，支持 `$` 动态时长语法，留空时使用 `$snui.aniTimeLong` | String \| Number | `''` | - |
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
