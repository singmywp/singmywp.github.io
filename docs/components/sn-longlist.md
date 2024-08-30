# LongList 长列表

::: tip 提示

一次性初始化太多列表项，因为创建大量 vnode 耗时，会导致列表初始化变慢。此时推荐使用官方的扩展组件 uni-recycle-view 来解决初始化慢的问题，该组件内部会分批创建节点，自动实现节点复用。

:::

## 基础用法
- 用于显示大量同类信息。
- Longlist 本身只是容器，不预设任何样式。在 Android 端基于 recycle-view，性能优秀（设置固定的高度才支持高性能滚动）。
- 子组件为 `list-item`。
```vue
<template>
	<sn-longlist></sn-longlist>
</template>
```
## 属性
| 参数                     | 说明                                                         | 类型                                                         | 默认值        | 可选值                              |
| ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------- | ----------------------------------- |
| associativeContainer     | 关联的滚动容器。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | String                                                       | -             | -                                   |
| bounces                  | 是否启用回弹效果。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `false`       | `true` \| `false`                   |
| upperThreshold           | 距顶部/左边多远时（单位px），触发 scrolltoupper 事件。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Number                                                       | `50`          | -                                   |
| lowerThreshold           | 距底部/右边多远时（单位px），触发 scrolltolower 事件。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Number                                                       | `50`          | -                                   |
| scrollTop                | 设置竖向滚动条位置。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Number                                                       | `0`           | -                                   |
| showScrollbar            | 是否显示滚动条。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `false`       | `true` \| `false`                   |
| scrollIntoView           | 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素起始位置。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | String                                                       | -             | -                                   |
| scrollWithAnimation      | 是否在设置滚动条位置时使用滚动动画，设置 `false`没有滚动动画。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `true`        | `true` \| `false`                   |
| refresherEnabled         | 开启下拉刷新，暂时不支持 `scroll-x = true` 横向刷新。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `false`       | `true` \| `false`                   |
| refresherThreshold       | 设置下拉刷新阈值, 仅 `refresher-default-style = 'none'` 自定义样式下生效。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Number                                                       | `45`          | -                                   |
| refresherMaxDragDistance | 设置下拉最大拖拽距离（单位px）。                             | Number                                                       | `100`         | -                                   |
| refresherBackground      | 设置下拉刷新区域背景颜色，默认透明。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | String                                                       | `transparent` | -                                   |
| refresherTriggered       | 设置当前下拉刷新状态，`true` 表示下拉刷新已经被触发，`false` 表示下拉刷新未被触发。同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `false`       | -                                   |
| backtop                  | 是否显示回到顶部的按钮                                       | Boolean                                                      | `true`        | `true` \| `false`                   |
| loadmore                 | 是否显示加载更多的组件                                       | Boolean                                                      | `true`        | `true` \| `false`                   |
| refresherDefaultStyle    | 设置下拉刷新默认样式，`none` 表示不使用默认样式；App 端固定为 `none` | String                                                       | `white`       | `white` \| `black` \| `none`        |
| loadmoreStatus           | 加载更多组件的状态                                           | String                                                       | `loadmore`    | `loading` \| `nomore` \| `loadmore` |
| loadmoreConfig           | 加载更多组件的配置                                           | [SnLoadmoreParams](/api/types/components#snloadmoreparams)   | `{}`          | -                                   |
| refresherConfig          | 下拉刷新组件的配置                                           | [SnRefresherParams](/api/types/components#snrefresherparams) | `{}`          | -                                   |
| customNestedScroll       | 子元素是否开启嵌套滚动 将滚动事件与父元素协商处理同 [`list-view`](https://doc.dcloud.net.cn/uni-app-x/component/list-view.html#%E5%B1%9E%E6%80%A7)。 | Boolean                                                      | `false`       | `true` \| `false`                   |
| customStyle              | 自定义滚动列表样式                                           | UTSJSONObject                                                | `{}`          | -                                   |
## 插槽
| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 用于放置子组件 `list-item` |
## 事件
| 名称          | 类型                                 | 说明             |
| :------------ | :----------------------------------- | :--------------- |
| loadmore      | `() => void`                         | 加载更多时触发   |
| scrolltoupper | `(e: UniScrollToUpperEvent) => void` | 滚动到顶部时触发 |
| scrolltolower | `(e: UniScrollToLowerEvent) => void` | 滚动到底部时触发 |
| scroll        | `(e: UniScrollEvent) => void`        | 滚动时触发       |
| scrollend     | `(e: UniScrollEvent) => void`        | 滚动结束时触发   |

<DemoPhone name="sn-longlist" />