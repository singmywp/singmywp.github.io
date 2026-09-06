# Waterflow  瀑布流

> [查看 sn-waterflow 的 2.0 版本差异](/differences/components/sn-waterflow)

## 基础用法

- 数据驱动的瀑布流组件：App 端基于官方 `waterflow` 组件（`flow-item` 复用回收），Web 端为自研虚拟滚动瀑布流（动态测量条目高度，仅渲染可视区域及 `overscan` 范围内的条目）。
- 通过 `list` 属性传入数据数组，配合默认作用域插槽（参数 `item`、`index`）渲染每个卡片。
- 内置下拉刷新（`sn-refresher`）、加载更多（`sn-loadmore`）与回到顶部按钮（`sn-backtop`）。
- App 端条目按数据项 `type` 字段分组复用，内部保留了两个特殊 `type` 值：下拉刷新条目为 `2`、加载更多条目为 `6`，业务数据请避开。

```vue
<template>
	<sn-waterflow :list="items" :cross-axis-count="2" cross-axis-gap="10" main-axis-gap="12"
		refresher-enabled v-model:refresher-triggered="refresherTriggered"
		loadmore v-model:loadmore-status="loadmoreStatus" backtop
		@refresh="onRefresh" @loadmore="onLoadmore">
		<template v-slot:default="slotProps">
			<view class="flow-card" :style="cardStyle(slotProps.item)">
				<sn-text bold color="$primaryText">{{ flowTitle(slotProps.item) }}</sn-text>
			</view>
		</template>
	</sn-waterflow>
</template>

<script setup>
	type FlowItem = {
		title: string
		height: number
	}
	function flowTitle(item: any): string {
		return (item as FlowItem).title
	}
	function cardStyle(item: any): Map<string, any> {
		const styles = new Map<string, any>()
		styles.set('height', `${(item as FlowItem).height}px`)
		styles.set('background-color', 'var(--sn-primaryLight)')
		styles.set('border-radius', '10px')
		return styles
	}
</script>
```

**更多演示请下载 demo 查看**

> 插槽的 `item` 为 `any` 类型，对象的字段访问需在函数体内 `as` 强转后使用，不要直接在模板内访问属性。

## 自定义列数与响应式断点

- `cross-axis-count` 控制基础列数（最小为 1）。
- Web 端支持两种自适应方式：`col-width` 大于 0 时按容器宽度与列宽计算实际列数（不超过 `cross-axis-count`）；`breakpoints` 传入响应式断点数组（`minWidth` 容器最小宽度、`columns` 对应列数），取容器宽度匹配到的最后一项。

```vue
<template>
	<sn-waterflow :list="items" :cross-axis-count="3" cross-axis-gap="8" main-axis-gap="10"
		:col-width="140" :estimated-item-height="180" :overscan="200">
		<template v-slot:default="slotProps">
			<view class="flow-card">
				<sn-text :text="flowTitle(slotProps.item)"></sn-text>
			</view>
		</template>
	</sn-waterflow>
</template>
```

## 无限加载

- `loadmore` 开启后触底自动触发 `loadmore` 事件（App 端与 Web 端均为滚动接近底部时触发，触发距离由 `lower-threshold` 控制）。
- 无限滚动场景可将 `show-loadmore` 设为 `false` 隐藏底部加载状态条，加载逻辑照常生效。

```vue
<template>
	<sn-waterflow :list="items" :cross-axis-count="2" :lower-threshold="4000"
		loadmore :show-loadmore="false" v-model:loadmore-status="loadmoreStatus"
		@loadmore="onLoadmore">
		<template v-slot:default="slotProps">
			<view class="flow-card">
				<sn-text :text="flowTitle(slotProps.item)"></sn-text>
			</view>
		</template>
	</sn-waterflow>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| list | 列表数据数组，数据项可为任意对象，App 端支持 `type` 数字字段声明复用分组 | Array | `[]` | - |
| crossAxisCount | 列数 | Number | `2` | - |
| crossAxisGap | 列间距（支持 `$` 简写） | String \| Number | `10px` | - |
| mainAxisGap | 行间距（支持 `$` 简写） | String \| Number | `10px` | - |
| colWidth | 单列基准宽度（单位 px，Web 端生效；大于 0 时按容器宽度自适应实际列数，不超过 `crossAxisCount`） | Number | `0` | - |
| estimatedItemHeight | 条目预估高度（单位 px，Web 端虚拟滚动初始布局用，实际高度测量后自动修正） | Number | `280` | - |
| overscan | 虚拟滚动预渲染范围（单位 px，Web 端生效） | Number | `400` | - |
| breakpoints | 响应式断点数组（Web 端生效），每项含 `minWidth`（容器最小宽度）与 `columns`（对应列数） | SnWaterflowBreakpoint[] | `[]` | - |
| v-model:refresher-triggered | 绑定当前下拉刷新状态 | Boolean | `false` | `true` \| `false` |
| v-model:loadmore-status | 绑定加载更多组件状态，触底或点击加载更多时组件内部自动改写为 `loading`，由父组件在 `loadmore` 事件中更新加载结果 | String | `loadmore` | `loadmore` \| `loading` \| `nomore` |
| refresherEnabled | 是否开启下拉刷新 | Boolean | `false` | `true` \| `false` |
| refresherConfig | 下拉刷新组件配置（`refreshText`、`refreshingText`、`textSize`、`textColor`、`icon`、`iconSize`、`iconColor`） | [[SnRefresherParams]] | `{}` | - |
| refresherThreshold | 下拉刷新阈值（单位 px） | Number | `45` | - |
| refresherMaxDragDistance | 下拉最大拖拽距离（单位 px） | Number | `0` | - |
| refresherBackground | 下拉刷新区域背景颜色 | String | `transparent` | - |
| refresherDefaultStyle | 下拉刷新默认样式；开启下拉刷新时组件强制使用自定义刷新条 | String | `black` | `white` \| `black` \| `none` |
| loadmore | 是否开启加载更多 | Boolean | `true` | `true` \| `false` |
| showLoadmore | 是否显示底部加载状态条（为 `false` 时隐藏条目但加载逻辑照常生效） | Boolean | `true` | `true` \| `false` |
| loadmoreConfig | 加载更多组件配置（`loadmoreText`、`nomoreText`、`loadingText`、`textSize`、`textColor`、`iconSize`、`iconColor`、`lineHeight`、`lineColor`、`dashed`、`disabled`） | [[SnLoadmoreParams]] | `{}` | - |
| backtop | 是否内置回到顶部按钮 | Boolean | `false` | `true` \| `false` |
| backtopTarget | 内置回到顶部按钮的绑定目标（ref 名或元素 id） | String | `''` | - |
| backtopTop | 内置回到顶部按钮的显示阈值（滚动距离，单位 px） | Number | `400` | - |
| backtopRight | 内置回到顶部按钮距右边界距离（单位 px） | Number | `30` | - |
| backtopBottom | 内置回到顶部按钮距下边界距离（单位 px） | Number | `100` | - |
| bounces | 是否启用回弹效果（App 端） | Boolean | `true` | `true` \| `false` |
| associativeContainer | 关联的滚动容器（App 端嵌套滚动场景使用） | String | `''` | - |
| maxCrossAxisExtent | 单列最大宽度（单位 px，超过则自动增加列数；iOS / HarmonyOS 端生效） | String \| Number | `0` | - |
| upperThreshold | 距顶部多远时（单位 px）触发 `scrolltoupper` 事件 | Number | `50` | - |
| lowerThreshold | 距底部多远时（单位 px）触发 `scrolltolower` 事件并触发加载更多 | Number | `50` | - |
| scrollTop | 设置竖向滚动条位置 | Number | `0` | - |
| scrollLeft | 设置横向滚动条位置 | Number | `0` | - |
| scrollIntoView | 值应为某子元素 id（id 不能以数字开头），滚动到该元素 | String | `''` | - |
| scrollWithAnimation | 设置滚动条位置时是否使用滚动动画 | Boolean | `true` | `true` \| `false` |
| showScrollbar | 是否显示滚动条 | Boolean | `true` | `true` \| `false` |
| androidOverscroll | Android 端是否开启弹簧回弹效果 | Boolean | `false` | `true` \| `false` |
| androidScrollbarDraggable | Android 端滚动条是否可拖拽 | Boolean | `false` | `true` \| `false` |
| androidRefresherColor | Android 端下拉刷新默认样式颜色 | String | `''` | - |
| enableBackToTop | 点击状态栏回到顶部（iOS 端生效） | Boolean | `false` | `true` \| `false` |
| enablePassive | Web 端原生滚动监听是否使用 passive 模式 | Boolean | Web 端 `true`，其他端 `false` | `true` \| `false` |
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
| refresh | () => Void | 下拉刷新被触发时触发（下拉手势或调用 `refresh` 方法），App 端与 `refresherrefresh` 同步触发 |
| scrolltoupper | (e: UniScrollToUpperEvent) => Void | 滚动到顶部时触发，同时内部复位下拉刷新条（App 端） |
| scrolltolower | (e: UniScrollToLowerEvent) => Void | 滚动到底部时触发，开启 `loadmore` 时自动触发加载（App 端） |
| scroll | (e: UniScrollEvent) => Void | 滚动时触发（App 端） |
| scrollend | (e: UniScrollEvent) => Void | 滚动结束时触发（App 端） |
| refresherpulling | (e: UniRefresherEvent) => Void | 下拉刷新控件被下拉时触发（App 端） |
| refresherrefresh | (e: UniRefresherEvent) => Void | 下拉刷新被触发时触发（App 端） |
| refresherrestore | (e: UniRefresherEvent) => Void | 下拉刷新被复位时触发（App 端） |
| refresherabort | (e: UniRefresherEvent) => Void | 下拉刷新被中止时触发（App 端） |
| loadmore | () => Void | 触底或点击加载状态条时触发，仅在开启 `loadmore` 且状态为 `loadmore` 时生效，触发后状态自动变为 `loading`（App / Web 端均生效） |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollTo | top: Number, left: Number（默认 0） | - | 滚动到指定位置（单位 px），Web 端带平滑动画 |
| refresh | - | - | 主动触发下拉刷新，进入刷新中状态并置位 `refresher-triggered`，同时触发 `refresh` 事件 |
| stopRefresh | - | - | 结束下拉刷新，恢复可下拉状态并复位 `refresher-triggered` |
| loadMore | - | - | 主动触发一次加载更多（等同触底效果） |
| registerBacktop | update: (scrollTop: Number) => Void | - | 注册滚动位置更新回调，供 `sn-backtop` 绑定（一般无需手动调用） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 作用域插槽，渲染每一条数据，作用域参数：`item`（当前数据项）、`index`（当前索引）；App 端同 `type` 数据项共用此模板复用回收 |

<DemoPhone name="sn-waterflow" />
