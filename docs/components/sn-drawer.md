# Drawer  抽屉

> [查看 sn-drawer 的 2.0 版本差异](/differences/components/sn-drawer)

## 基础用法

- 抽屉组件，从屏幕四个方向滑出的半屏面板，常用于导航菜单、筛选、购物车等场景。如需内嵌使用滚动长列表请改用 **DrawerList**
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 通过 `ref` 调用 `open` / `close` 方法控制显隐；`position` 设置滑出方向（`top` / `right` / `bottom` / `left`），纵向方向使用 `height`，横向方向使用 `width`。
- 内置滑动关闭手势：按住面板向弹出方向滑动，超过阈值（`slideHeight` / `slideWidth`）即关闭，未达阈值回弹；Web 端同时支持鼠标拖拽。
- 与 `sn-popup` 的区别：`sn-popup` 只控制动画和显隐逻辑，UI 需要自己写；`sn-drawer` 是在 `sn-popup` 基础上封装了带背景、圆角与滑动指示条的成品面板。
- 与 `sn-float-board` 的区别：`sn-drawer` 需调用方法显示，`sn-float-board` 始终显示。
- 与 `sn-drawer-list` 的区别： `sn-drawer-list`  内嵌 `sn-list-view` 使用需传入列表数据，适用于内嵌长列表场景。不要在 `sn-drawer` 内嵌长列表，会出现严重的嵌套滚动问题。

```vue
<template>
	<sn-page>
		<sn-button text="打开抽屉" type="primary" @click="open"></sn-button>
		<sn-drawer ref="drawerRef" position="bottom" height="300px">
			<sn-text text="抽屉内容"></sn-text>
		</sn-drawer>
	</sn-page>
</template>

<script lang="uts" setup>

const drawerRef = ref<SnDrawerComponentPublicInstance | null>(null)

function open(): void {
	drawerRef.value?.$callMethod('open')
}
</script>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| position | 抽屉滑出的方向 | String | `bottom` | `top` \| `right` \| `bottom` \| `left` |
| renderMode | 渲染模式，`v-if` 关闭后销毁内容，`v-show` 保留内容 | String | `v-if` | `v-if` \| `v-show` |
| showLine | 是否显示面板上的滑动指示条 | Boolean | `true` | `true` \| `false` |
| slideClose | 是否启用滑动关闭手势 | Boolean | `true` | `true` \| `false` |
| width | 面板宽度，`position` 为 `left` \| `right` 时生效 | String \| Number | `300px` | - |
| height | 面板高度，`position` 为 `top` \| `bottom` 时生效 | String \| Number | `300px` | - |
| slideHeight | 纵向滑动关闭阈值，滑动距离达到阈值则关闭 | String \| Number | `100px` | - |
| slideWidth | 横向滑动关闭阈值，滑动距离达到阈值则关闭 | String \| Number | `100px` | - |
| bgColor | 面板背景颜色，支持 `$` 简写 | String | `$front` | - |
| lineColor | 滑动指示条颜色，支持 `$` 简写 | String | `$lineText` | - |
| padding | 面板内边距 | String | `25px 15px 10px 15px` | - |
| borderRadius | 面板圆角大小，支持 `$` 简写 | String \| Number | `$20` | - |
| aniTime | 显示 / 关闭动画时长（ms），支持 `$` 简写 | String \| Number | `$long` | - |
| preventBack | 显示时是否阻止页面返回事件 | Boolean | `false` | `true` \| `false` |
| maskClose | 是否启用点击遮罩关闭 | Boolean | `true` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.3` | - |
| zIndex | 弹出层层级 | Number | `999` | - |
| customStyle | 自定义面板样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| clickoverlay | () => Void | 点击遮罩时触发 |
| beforeenter | () => Void | 入场动画开始前触发 |
| enter | () => Void | 入场动画开始时触发 |
| afterenter | () => Void | 入场动画结束后触发 |
| beforeleave | () => Void | 离场动画开始前触发 |
| leave | () => Void | 离场动画开始时触发 |
| afterleave | () => Void | 离场动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开抽屉 |
| close | - | - | 关闭抽屉 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 抽屉面板内的内容 |

<DemoPhone name="sn-drawer" />
