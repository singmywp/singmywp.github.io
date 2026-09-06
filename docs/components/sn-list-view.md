# ListView  长列表

> [查看 sn-list-view 的 2.0 版本差异](/differences/components/sn-list-view)

## 基础用法

- 数据驱动的长列表组件，基于官方 `list-view` 封装，条目按 `type` 分组复用回收，适合展示大量同类数据。
- 通过 `list` 属性传入数据数组，配合默认作用域插槽（参数 `item`、`index`）渲染每一条数据。
- 内置下拉刷新（`sn-refresher`）、加载更多（`sn-loadmore`）与回到顶部按钮（`sn-backtop`），可通过 `refresher-enabled`、`loadmore`、`backtop` 开关。

```vue
<template>
	<sn-list-view :list="items" refresher-enabled v-model:refresher-triggered="refresherTriggered"
		loadmore v-model:loadmore-status="loadmoreStatus" backtop
		@refresherrefresh="onRefresh" @loadmore="onLoadmore">
		<template v-slot:default="slotProps">
			<view class="list-item-inner">
				<sn-text font-size="$14" color="$text">{{ slotProps.item }}</sn-text>
			</view>
		</template>
	</sn-list-view>
</template>
```

**更多演示请下载 demo 查看**

## 数据复用与 type 分组

组件会根据数据项的 `type` 字段（数字）对条目分组，同 `type` 的条目在 App 端复用同一类节点，`type` 越少复用效果越好。未声明 `type` 的数据项默认归入 `0` 组。

```vue
<template>
	<sn-list-view :list="items">
		<template v-slot:default="slotProps">
			<view v-if="itemType(slotProps.item) == 1" class="item-card">
				<sn-text :text="itemTitle(slotProps.item)"></sn-text>
			</view>
			<view v-else class="item-line">
				<sn-text :text="itemTitle(slotProps.item)"></sn-text>
			</view>
		</template>
	</sn-list-view>
</template>

<script setup>
	type Item = {
		type: number
		title: string
	}
	function itemType(item: any): number {
		return (item as Item).type
	}
	function itemTitle(item: any): string {
		return (item as Item).title
	}
</script>
```

- 内部保留了两个特殊 `type` 值：下拉刷新条目为 `2`、加载更多条目为 `99998`，业务数据请避开这两个值。
- 不提供插槽内容时，默认渲染"条目 N"占位文本。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| list | 列表数据数组，数据项可为任意对象，支持 `type` 数字字段声明复用分组 | Array | `[]` | - |
| direction | 滚动方向 | String | `vertical` | `none` \| `horizontal` \| `vertical` |
| v-model:refresher-triggered | 绑定当前下拉刷新状态 | Boolean | `false` | `true` \| `false` |
| v-model:loadmore-status | 绑定加载更多组件状态，触底或点击加载更多时组件内部自动改写为 `loading`，由父组件在 `loadmore` 事件中更新加载结果 | String | `loadmore` | `loadmore` \| `loading` \| `nomore` |
| refresherEnabled | 是否开启下拉刷新 | Boolean | `true` | `true` \| `false` |
| refresherConfig | 下拉刷新组件配置（`refreshText`、`refreshingText`、`textSize`、`textColor`、`icon`、`iconSize`、`iconColor`） | [[SnRefresherParams]] | `{}` | - |
| refresherThreshold | 下拉刷新阈值（单位 px，仅自定义刷新样式下生效） | Number | `45` | - |
| refresherMaxDragDistance | 下拉最大拖拽距离（单位 px，App 端生效） | Number | `0` | - |
| refresherBackground | 下拉刷新区域背景颜色 | String | `transparent` | - |
| refresherDefaultStyle | 下拉刷新默认样式；开启下拉刷新时组件强制使用自定义刷新条 | String | `white` | `white` \| `black` \| `none` |
| loadmore | 是否开启加载更多（触底自动触发，底部显示加载状态条） | Boolean | `false` | `true` \| `false` |
| loadmoreConfig | 加载更多组件配置（`loadmoreText`、`nomoreText`、`loadingText`、`textSize`、`textColor`、`iconSize`、`iconColor`、`lineHeight`、`lineColor`、`dashed`、`disabled`） | [[SnLoadmoreParams]] | `{}` | - |
| backtop | 是否内置回到顶部按钮 | Boolean | `false` | `true` \| `false` |
| backtopTarget | 内置回到顶部按钮的绑定目标（ref 名或元素 id） | String | `''` | - |
| backtopTop | 内置回到顶部按钮的显示阈值（滚动距离，单位 px） | Number | `400` | - |
| backtopRight | 内置回到顶部按钮距右边界距离（单位 px） | Number | `30` | - |
| backtopBottom | 内置回到顶部按钮距下边界距离（单位 px） | Number | `100` | - |
| bounces | 是否启用回弹效果（App 端生效） | Boolean | `true` | `true` \| `false` |
| associativeContainer | 关联的滚动容器（App 端嵌套滚动场景使用） | String | `''` | - |
| nested | 是否开启嵌套滚动模式，为 `true` 时自动关联嵌套滚动容器（App 端生效） | Boolean | `false` | `true` \| `false` |
| customNestedScroll | 子元素是否开启嵌套滚动协商（仅 Android 端生效） | Boolean | `false` | `true` \| `false` |
| nestedScrollChild | 嵌套滚动的子容器元素 id | String | `''` | - |
| upperThreshold | 距顶部/左边多远时（单位 px）触发 `scrolltoupper` 事件 | Number | `50` | - |
| lowerThreshold | 距底部/右边多远时（单位 px）触发 `scrolltolower` 事件 | Number | `50` | - |
| scrollTop | 设置竖向滚动条位置 | Number | `0` | - |
| scrollLeft | 设置横向滚动条位置（App 端生效） | Number | `0` | - |
| scrollIntoView | 值应为某子元素 id（id 不能以数字开头），滚动到该元素 | String | `''` | - |
| scrollWithAnimation | 设置滚动条位置时是否使用滚动动画 | Boolean | `true` | `true` \| `false` |
| scrollAnchoring | 开启滚动锚定（App 端生效） | Boolean | `false` | `true` \| `false` |
| initialScrollBottom | 初始渲染时定位到底部（App 端生效，聊天类场景使用） | Boolean | `false` | `true` \| `false` |
| showScrollbar | 是否显示滚动条 | Boolean | `true` | `true` \| `false` |
| androidOverscroll | Android 端是否开启弹簧回弹效果 | Boolean | `false` | `true` \| `false` |
| androidScrollbarDraggable | Android 端滚动条是否可拖拽 | Boolean | `false` | `true` \| `false` |
| androidRefresherColor | Android 端下拉刷新默认样式颜色 | String | `''` | - |
| enableBackToTop | 点击状态栏回到顶部（iOS 端生效） | Boolean | `false` | `true` \| `false` |
| enablePassive | 是否开启 passive 滚动监听（仅 Web 端） | Boolean | Web 端 `true`，其他端 `false` | `true` \| `false` |
| padding | 预留参数（当前版本未启用） | Number[] | `[]` | - |
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
| refresherabort | (e: UniRefresherEvent) => Void | 下拉刷新被中止时触发 |
| loadmore | () => Void | 触底或点击加载状态条时触发，仅在开启 `loadmore` 且状态为 `loadmore` 时生效，触发后状态自动变为 `loading` |
| click | () => Void | 点击列表区域时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollTo | top: Number, left: Number（默认 0） | - | 滚动到指定位置（单位 px），Web 端带平滑动画 |
| setDirection | d: String | - | 同步设置滚动方向（`none` \| `horizontal` \| `vertical`），供手势组件同步禁滚/恢复滚动 |
| registerBacktop | update: (scrollTop: Number) => Void | - | 注册滚动位置更新回调，供 `sn-backtop` 绑定（一般无需手动调用） |
| startRefresh | - | - | 主动触发下拉刷新，进入刷新中状态并置位 `refresher-triggered` |
| stopRefresh | - | - | 结束下拉刷新，恢复可下拉状态并复位 `refresher-triggered` |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 作用域插槽，渲染每一条数据，作用域参数：`item`（当前数据项）、`index`（当前索引）；同 `type` 数据项共用此模板复用回收 |

<DemoPhone name="sn-list-view" />
