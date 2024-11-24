# Page 页面
## 基础用法
- 页面容器，是页面的根节点。使用页面容器可帮助您快速布局页面，无需手动管理滚动相关组件及事件。
- 支持动态修改页面背景色、全局背景色。
```vue
<template>
	<sn-page bgColor="#f0f0f0"></sn-page>
</template>
```
**更多演示请下载 demo 查看**

## 属性

| 参数                | 说明                                       | 类型          | 默认值     | 可选值                     |
| ------------------- | ------------------------------------------ | ------------- | ---------- | -------------------------- |
| scrollOn            | 是否开启滚动功能                           | Boolean       | `true`     | `true` \| `false`          |
| scrollTop           | 设置竖向滚动条位置                         | Number        | `0`        | -                          |
| scrollWithAnimation | 滚动是否使用动画                           | Boolean       | `true`     | `true` \| `false`          |
| direction           | 滚动方向（vertical 或 horizontal）         | String        | `vertical` | `vertical` \| `horizontal` |
| upperThreshold      | 距顶部/左边多远时，触发 scrolltoupper 事件 | Number        | `50`       | -                          |
| lowerThreshold      | 距底部/右边多远时，触发 scrolltolower 事件 | Number        | `50`       | -                          |
| bgColor             | 页面背景颜色                               | String        | `$page`    | -                          |
| padding             | 页面内边距                                 | String        | `0 15px`   | -                          |
| bounces             | 是否启用回弹效果                           | Boolean       | `true`     | `true` \| `false`          |
| customStyle         | 自定义页面样式                             | UTSJSONObject | `{}`       | -                          |


## 方法

| 名称     | 参数                     | 返回值 | 描述               |
| :------- | :----------------------- | :----- | :----------------- |
| scrollTo | `(x: number, y: number)` | -      | 滚动页面到指定位置 |

## 事件

| 名称              | 类型                                            | 说明                                                         |
| :---------------- | :---------------------------------------------- | :----------------------------------------------------------- |
| scrolltoupper     | (e: UniScrollToUpperEvent) => Void            | 滚动到顶部时触发                                             |
| scrolltolower     | (e: UniScrollToLowerEvent) => Void            | 滚动到底部时触发                                             |
| scroll            | (e: UniScrollEvent) => Void                   | 滚动时触发                                                   |
| scrollend         | (e: UniScrollEvent) => Void                   | 滚动结束时触发                                               |
| refresherpulling  | (event: UniRefresherEvent) => Void            | 下拉刷新控件被下拉                                           |
| refresherrefresh  | (event: UniRefresherEvent) => Void            | 下拉刷新被触发                                               |
| refresherrestore  | (event: UniRefresherEvent) => Void            | 下拉刷新被复位                                               |
| refresherabort    | (event: UniRefresherEvent) => Void            | 下拉刷新被中止                                               |
| startnestedscroll | (event: UniStartNestedScrollEvent) => Boolean | 子元素开始滚动时触发, return true表示与子元素开启滚动协商 默认return false! event = {node} |
| nestedprescroll   | (event: UniNestedPreScrollEvent) => Void      | 子元素滚动时触发，可执行event.consumed(x,y)告知子元素deltaX、deltaY各消耗多少。子元素将执行差值后的deltaX、deltaY滚动距离。不执行consumed(x,y)则表示父元素不消耗deltaX、deltaY。event = {deltaX, deltaY}。 |
| stopnestedscroll  | (event: UniStopNestedScrollEvent) => Void     | 子元素滚动结束或意外终止时触发                               |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 放置页面内容 |

<DemoPhone name="sn-page" />