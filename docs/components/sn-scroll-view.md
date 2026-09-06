# ScrollView  滚动视图

> [查看 sn-scroll-view 的 2.0 版本差异](/differences/components/sn-scroll-view)

## 基础用法

- 基于 `scroll-view` 封装的通用滚动视图容器，内置下拉刷新（`sn-refresher`）、加载更多（`sn-loadmore`）与回到顶部按钮（`sn-backtop`）。
- 通过 `direction` 控制滚动方向（旧 `scroll-x` / `scroll-y` 写法已废弃），支持嵌套滚动。
- 内容直接写在默认插槽中，由使用者自行布局。

```vue
<template>
	<sn-scroll-view refresher-enabled v-model:refresher-triggered="refresherTriggered"
		loadmore v-model:loadmore-status="loadmoreStatus" backtop
		@refresherrefresh="onRefresh" @loadmore="onLoadmore">
		<view v-for="(item, index) in items" :key="index" class="scroll-item">
			<sn-text :text="item"></sn-text>
		</view>
	</sn-scroll-view>
</template>
```

**更多演示请下载 demo 查看**

## 横向滚动

设置 `direction="horizontal"` 即可横向滚动，容器内部主轴方向自动跟随切换。

```vue
<template>
	<sn-scroll-view direction="horizontal" :refresher-enabled="false" :loadmore="false">
		<view class="h-row">
			<view v-for="(item, index) in hItems" :key="index" class="h-item">
				<sn-text :text="item"></sn-text>
			</view>
		</view>
	</sn-scroll-view>
</template>
```

## 嵌套滚动

设置 `nested` 为 `true` 后组件与父级嵌套滚动容器关联（等同于 `associative-container="nested-scroll-view"`），并透传 `startnestedscroll` / `nestedprescroll` / `stopnestedscroll` 三个嵌套滚动协商事件。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| direction | 滚动方向 | String | `vertical` | `none` \| `horizontal` \| `vertical` |
| v-model:refresher-triggered | 绑定当前下拉刷新状态 | Boolean | `false` | `true` \| `false` |
| v-model:loadmore-status | 绑定加载更多组件状态，触底或点击加载更多时组件内部自动改写为 `loading`，由父组件在 `loadmore` 事件中更新加载结果 | String | `loadmore` | `loadmore` \| `loading` \| `nomore` |
| refresherEnabled | 是否开启下拉刷新 | Boolean | `true` | `true` \| `false` |
| refresherConfig | 下拉刷新组件配置（`refreshText`、`refreshingText`、`textSize`、`textColor`、`icon`、`iconSize`、`iconColor`） | [[SnRefresherParams]] | `{}` | - |
| refresherThreshold | 下拉刷新阈值（单位 px，仅自定义刷新样式下生效） | Number | `45` | - |
| refresherMaxDragDistance | 下拉最大拖拽距离（单位 px，App 端生效） | Number | `0` | - |
| refresherBackground | 下拉刷新区域背景颜色 | String | `transparent` | - |
| refresherDefaultStyle | 下拉刷新默认样式；开启下拉刷新时组件强制使用自定义刷新条 | String | `white` | `white` \| `black` \| `none` |
| loadmore | 是否开启加载更多（触底自动触发，底部显示加载状态条） | Boolean | `true` | `true` \| `false` |
| loadmoreConfig | 加载更多组件配置（`loadmoreText`、`nomoreText`、`loadingText`、`textSize`、`textColor`、`iconSize`、`iconColor`、`lineHeight`、`lineColor`、`dashed`、`disabled`） | [[SnLoadmoreParams]] | `{}` | - |
| backtop | 是否内置回到顶部按钮 | Boolean | `false` | `true` \| `false` |
| backtopTarget | 内置回到顶部按钮的绑定目标（ref 名或元素 id） | String | `''` | - |
| backtopTop | 内置回到顶部按钮的显示阈值（滚动距离，单位 px） | Number | `400` | - |
| backtopRight | 内置回到顶部按钮距右边界距离（单位 px） | Number | `30` | - |
| backtopBottom | 内置回到顶部按钮距下边界距离（单位 px） | Number | `100` | - |
| bounces | 是否启用回弹效果（App 端生效） | Boolean | `true` | `true` \| `false` |
| associativeContainer | 关联的滚动容器（App 端嵌套滚动场景使用） | String | `''` | - |
| nested | 是否开启嵌套滚动模式，为 `true` 时自动关联嵌套滚动容器 | Boolean | `false` | `true` \| `false` |
| customNestedScroll | 子元素是否开启嵌套滚动协商（仅 Android 端生效） | Boolean | `false` | `true` \| `false` |
| nestedScrollChild | 嵌套滚动的子容器元素 id | String | `''` | - |
| upperThreshold | 距顶部/左边多远时（单位 px）触发 `scrolltoupper` 事件 | Number | `50` | - |
| lowerThreshold | 距底部/右边多远时（单位 px）触发 `scrolltolower` 事件 | Number | `50` | - |
| scrollTop | 设置竖向滚动条位置 | Number | `0` | - |
| scrollLeft | 设置横向滚动条位置 | Number | `0` | - |
| scrollIntoView | 值应为某子元素 id（id 不能以数字开头），滚动到该元素 | String | `''` | - |
| scrollWithAnimation | 设置滚动条位置时是否使用滚动动画 | Boolean | `true` | `true` \| `false` |
| showScrollbar | 是否显示滚动条 | Boolean | `true` | `true` \| `false` |
| androidOverscroll | Android 端是否开启弹簧回弹效果 | Boolean | `false` | `true` \| `false` |
| androidScrollbarDraggable | Android 端滚动条是否可拖拽 | Boolean | `false` | `true` \| `false` |
| androidRefresherColor | Android 端下拉刷新默认样式颜色 | String | `''` | - |
| enableBackToTop | 点击状态栏回到顶部（iOS 端生效） | Boolean | `false` | `true` \| `false` |
| enablePassive | 是否开启 passive 滚动监听（仅 Web 端） | Boolean | Web 端 `true`，其他端 `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点外部样式类 | String | `''` | - |

:::type-fields SnRefresherParams

下拉刷新区域文案与样式配置：`refreshText`（下拉中）、`refreshingText`（刷新中）、`textSize`、`textColor`、`icon`、`iconSize`、`iconColor`。

:::
:::type-fields SnLoadmoreParams

`sn-loadmore` / 列表加载更多的文案与样式配置：`loadmoreText`（加载前）、`nomoreText`（没有更多）、`loadingText`（加载中）、`textSize`、`textColor`、`iconSize`、`iconColor`、`lineColor`、`lineHeight`、`dashed`（线条虚线）、`disabled`。

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| scrolltoupper | (e: UniScrollToUpperEvent) => Void | 滚动到顶部/左边时触发，同时内部复位下拉刷新条 |
| scrolltolower | (e: UniScrollToLowerEvent) => Void | 滚动到底部/右边时触发，开启 `loadmore` 时自动触发加载 |
| scroll | (e: UniScrollEvent) => Void | 滚动时触发 |
| scrollend | (e: UniScrollEvent) => Void | 滚动结束时触发（App 端） |
| refresherpulling | (e: UniRefresherEvent) => Void | 下拉刷新控件被下拉时触发 |
| refresherrefresh | (e: UniRefresherEvent) => Void | 下拉刷新被触发时触发，同时置位 `refresher-triggered` |
| refresherrestore | (e: UniRefresherEvent) => Void | 下拉刷新被复位时触发 |
| refresherabort | (e: UniRefresherEvent) => Void | 下拉刷新被中止时触发（App 端） |
| startnestedscroll | (e: UniStartNestedScrollEvent) => Void | 嵌套滚动开始时触发 |
| nestedprescroll | (e: UniNestedPreScrollEvent) => Void | 嵌套滚动预滚动协商时触发 |
| stopnestedscroll | (e: UniStopNestedScrollEvent) => Void | 嵌套滚动结束时触发 |
| loadmore | () => Void | 触底或点击加载状态条时触发，仅在开启 `loadmore` 且状态为 `loadmore` 时生效，触发后状态自动变为 `loading` |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollTo | top: Number, left: Number（默认 0） | - | 滚动到指定位置（单位 px），Web 端带平滑动画 |
| registerBacktop | update: (scrollTop: Number) => Void | - | 注册滚动位置更新回调，供 `sn-backtop` 绑定（一般无需手动调用） |
| startRefresh | - | - | 主动触发下拉刷新，进入刷新中状态并置位 `refresher-triggered` |
| stopRefresh | - | - | 结束下拉刷新，恢复可下拉状态并复位 `refresher-triggered` |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 滚动内容区域，放置任意内容 |

<DemoPhone name="sn-scroll-view" />
