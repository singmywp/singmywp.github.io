# DrawerList  抽屉长列表

## 基础用法

- 抽屉长列表组件，它与 Drawer 组件的底层实现机制完全不同，主要是为了解决 Drawer 内嵌长列表嵌套滚动与手势事件冲突的问题。它内置 `sn-list-view` 长列表，适合在 Drawer 中展示大量数据的场景（如播放列表、消息列表、评论区）。
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 通过 `ref` 调用 `open` / `close` 方法控制显隐；`list` 配置列表数据，配合作用域插槽渲染每一项（插槽暴露 `item` 与 `index`）。
- 滚动与拖拽智能切换：列表未滚动到顶部时可正常滚动内容；列表在顶部时继续下滑，面板跟随手势移动，松手超过 `slideHeight` 阈值或快速下滑即关闭，未达阈值回弹。Web 端同时支持鼠标拖拽。
- 面板仅支持底部滑出；`height` 支持百分比（如 `50%` 表示占视口高度一半）。
- 加载更多与下拉刷新：`loadmore` 开启加载更多（配合 `v-model:loadmore-status` 与 `@loadmore`），`refresher-enabled` 开启下拉刷新（配合 `v-model:refresher-triggered`），相关配置透传内部 `sn-list-view`。

```vue
<template>
	<sn-page>
		<sn-button text="打开抽屉列表" type="primary" @click="open"></sn-button>
		<sn-drawer-list ref="drawerRef" :list="items">
			<template v-slot:default="slotProps">
				<view class="item">
					<text class="item-text">{{ slotProps.item }}</text>
				</view>
			</template>
		</sn-drawer-list>
	</sn-page>
</template>

<script lang="uts" setup
const drawerRef = ref<SnDrawerListComponentPublicInstance | null>(null)
const items = ref<any[]>([])
for (let i = 1; i <= 50; i++) {
	items.push(`列表项目 ${i}`)
}

function open(): void {
	drawerRef.value?.$callMethod('open')
}
</script>
```

**更多演示请下载 demo 查看**

## 加载更多

开启 `loadmore` 后，列表滚动到底部触发 `loadmore` 事件，通过 `v-model:loadmore-status` 控制底部加载状态。

```vue
<template>
	<sn-drawer-list ref="drawerRef" :list="items" :loadmore="true"
		v-model:loadmore-status="loadmoreStatus" @loadmore="onLoadmore">
		<template v-slot:default="slotProps">
			<view class="item">
				<text class="item-text">{{ slotProps.item }}</text>
			</view>
		</template>
	</sn-drawer-list>
</template>

<script lang="uts" setup>

const drawerRef = ref<SnDrawerListComponentPublicInstance | null>(null)
const loadmoreStatus = ref<string>('loadmore')

function onLoadmore(): void {
	setTimeout((): void => {
		loadmoreStatus.value = 'nomore'
	}, 800)
}
</script>
```

## 抽屉面板属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| list | 列表数据数组 | `Array<any>` | `[]` | - |
| renderMode | 渲染模式，`v-if` 关闭后销毁内容，`v-show` 保留内容 | String | `v-if` | `v-if` \| `v-show` |
| showLine | 是否显示面板上的滑动指示条 | Boolean | `true` | `true` \| `false` |
| slideClose | 是否启用滑动关闭手势 | Boolean | `true` | `true` \| `false` |
| height | 面板高度，支持百分比 | String \| Number | `300px` | - |
| slideHeight | 滑动关闭阈值，面板下滑距离达到阈值则关闭 | String \| Number | `100px` | - |
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
| v-model:refresher-triggered | 下拉刷新状态绑定值 | Boolean | `false` | `true` \| `false` |
| v-model:loadmore-status | 加载更多状态绑定值 | String | `loadmore` | `loadmore` \| `loading` \| `nomore` |

## 透传 sn-list-view 属性

以下属性透传给内部 `sn-list-view`，用于控制列表滚动、回弹、下拉刷新与回到顶部等行为。

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| bounces | iOS 下是否支持回弹 | Boolean | `true` | `true` \| `false` |
| nested | 是否使用嵌套滚动模式 | Boolean | `false` | `true` \| `false` |
| customNestedScroll | 是否使用自定义嵌套滚动处理 | Boolean | `false` | `true` \| `false` |
| upperThreshold | 距顶部多远时触发 `scrolltoupper` 事件（px） | Number | `50` | - |
| lowerThreshold | 距底部多远时触发 `scrolltolower` 事件（px） | Number | `50` | - |
| scrollTop | 设置竖向滚动位置 | Number | `0` | - |
| scrollLeft | 设置横向滚动位置 | Number | `0` | - |
| showScrollbar | 是否显示滚动条 | Boolean | `true` | `true` \| `false` |
| scrollIntoView | 滚动到指定子元素（值为元素 id） | String | `''` | - |
| scrollWithAnimation | 滚动位置变化时是否使用滚动动画 | Boolean | `true` | `true` \| `false` |
| androidOverscroll | Android 下是否支持滚动越界 | Boolean | `false` | `true` \| `false` |
| androidScrollbarDraggable | 滚动条是否可拖拽（仅 Android） | Boolean | `false` | `true` \| `false` |
| enableBackToTop | 点击顶部状态栏回到顶部（仅 iOS） | Boolean | `false` | `true` \| `false` |
| scrollAnchoring | 是否开启滚动锚定（仅 Web） | Boolean | `false` | `true` \| `false` |
| nestedScrollChild | 嵌套滚动的子容器 id | String | `''` | - |
| listPadding | 列表内边距 | `Array<Number>` | `[]` | - |
| refresherEnabled | 是否开启下拉刷新 | Boolean | `false` | `true` \| `false` |
| refresherThreshold | 下拉刷新触发阈值（px） | Number | `45` | - |
| refresherMaxDragDistance | 下拉刷新最大拖拽距离（px），`0` 表示不限制 | Number | `0` | - |
| refresherBackground | 下拉刷新区域背景颜色，支持 `$` 简写 | String | `transparent` | - |
| refresherDefaultStyle | 下拉刷新默认样式 | String | `white` | `white` \| `black` \| `none` |
| enablePassive | 是否启用被动滚动模式（仅 Web 默认为 `true`，其余平台为 `false`） | Boolean | 见说明 | `true` \| `false` |
| backtop | 是否显示回到顶部按钮 | Boolean | `false` | `true` \| `false` |
| backtopTarget | 回到顶部滚动目标元素 id | String | `''` | - |
| backtopTop | 回到顶部按钮距顶部距离（px） | Number | `400` | - |
| backtopRight | 回到顶部按钮距右侧距离（px） | Number | `30` | - |
| backtopBottom | 回到顶部按钮距底部距离（px） | Number | `100` | - |
| loadmore | 是否开启加载更多 | Boolean | `false` | `true` \| `false` |
| loadmoreConfig | 加载更多样式配置 | [[SnLoadmoreParams]] | `{}` | - |
| refresherConfig | 下拉刷新样式配置 | [[SnRefresherParams]] | `{}` | - |
| listStyle | 自定义列表样式 | UTSJSONObject \| String | `''` | - |
| listClass | 列表外部类 | String | `''` | - |

:::type-fields SnLoadmoreParams

`sn-loadmore` / 列表加载更多的文案与样式配置：`loadmoreText`（加载前）、`nomoreText`（没有更多）、`loadingText`（加载中）、`textSize`、`textColor`、`iconSize`、`iconColor`、`lineColor`、`lineHeight`、`dashed`（线条虚线）、`disabled`。

:::
:::type-fields SnRefresherParams

下拉刷新区域文案与样式配置：`refreshText`（下拉中）、`refreshingText`（刷新中）、`textSize`、`textColor`、`icon`、`iconSize`、`iconColor`。

:::

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
| scrolltoupper | (ev: UniScrollToUpperEvent) => Void | 列表滚动到顶部时触发 |
| scrolltolower | (ev: UniScrollToLowerEvent) => Void | 列表滚动到底部时触发 |
| scroll | (ev: UniScrollEvent) => Void | 列表滚动时触发 |
| scrollend | (ev: UniScrollEvent) => Void | 列表滚动结束时触发 |
| refresherpulling | (ev: UniRefresherEvent) => Void | 下拉刷新被拉动时触发 |
| refresherrefresh | (ev: UniRefresherEvent) => Void | 下拉刷新被触发时触发 |
| refresherrestore | (ev: UniRefresherEvent) => Void | 下拉刷新被复位时触发 |
| refresherabort | (ev: UniRefresherEvent) => Void | 下拉刷新被中止时触发 |
| loadmore | () => Void | 列表滚动到底部且 `loadmore` 开启时触发 |
| click | () => Void | 列表区域被点击时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开抽屉 |
| close | - | - | 关闭抽屉 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 列表项内容的作用域插槽，暴露 `item`（当前项数据）与 `index`（当前项索引） |
| prefix | 列表上方的内容区，位于 sn-list-view 之前，不随列表滚动 |
| suffix | 列表下方的内容区，位于 sn-list-view 之后，不随列表滚动 |

<DemoPhone name="sn-drawer-list" />
