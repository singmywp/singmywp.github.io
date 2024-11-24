# Gesture 手势

:::info 扩展插件
本组件属于扩展插件，非框架内置，可根据需求自行下载

下载地址：https://ext.dcloud.net.cn/plugin?name=sn-e-gesture
:::

---

* `sn-e-gesture` 是 SinleUI 框架的手势库核心组件。

* 主要集成了一些 App 端原生手势事件（非 uni 内置事件），以便开发使用。

```vue
<template>
	<sn-e-gesture
			@scale="nativeGestureScaleEvent" 
			@click="nativeGesturePointerEvent"
			@longpress="nativeGestureTouchEvent" 
			@dbclick="nativeGesturePointerEvent" 
			@touchstart="nativeGestureTouchEvent"
			@touchmove="nativeGestureTouchEvent" 
			@touchend="nativeGestureTouchEvent" 
			@touchcancel="nativeGestureTouchEvent"
			@down="nativeGesturePointerEvent" 
			@showpress="nativeGestureTouchEvent" 
			@fling="nativeGestureFlingEvent"> 
    	<view></view>
  </sn-e-gesture>
</template>
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| ×    | √       |

## 事件

由于不同插件之间的类型冲突，`sn-e-gesture` 的事件均返回为 UTSJSONObject 对象，但其数据结构与对应的类型相同，将其作为 UTSJSONObject 对象使用即可。见下。

| 名称        | 类型                           | 说明                                                         |
| :---------- | :----------------------------- | :----------------------------------------------------------- |
| click       | (event: UTSJSONObject) => Void | 点击事件（`event` 结构同 [SnPointerEvent](/api/types/api#snpointerevent) ） |
| longpress   | (event: UTSJSONObject) => Void | 长按事件（`event` 结构同 [SnTouchEvent](/api/types/api#sntouchevent) ） |
| dbclick     | (event: UTSJSONObject) => Void | 双击事件（`event` 结构同 [SnPointerEvent](/api/types/api#snpointerevent) ） |
| touchstart  | (event: UTSJSONObject) => Void | 手指落下事件（`event` 结构同 [SnTouchEvent](/api/types/api#sntouchevent) ） |
| touchmove   | (event: UTSJSONObject) => Void | 手指移动事件（`event` 结构同 [SnTouchEvent](/api/types/api#sntouchevent) ） |
| touchend    | (event: UTSJSONObject) => Void | 手指抬起事件（`event` 结构同 [SnTouchEvent](/api/types/api#sntouchevent) ） |
| touchcancel | (event: UTSJSONObject) => Void | 触摸打断事件（`event` 结构同 [SnTouchEvent](/api/types/api#sntouchevent) ） |
| down        | (event: UTSJSONObject) => Void | 按下事件（`event` 结构同 [SnPointerEvent](/api/types/api#snpointerevent) ） |
| fling       | (event: UTSJSONObject) => Void | 滑动事件（`event` 结构同 [SnFlingEvent](/api/types/api#snflingevent) ） |
| scale       | (event: UTSJSONObject) => Void | 双指缩放事件（`event` 结构同 [SnScaleEvent](/api/types/api#snscaleevent) ） |



::: warning 注意

由于此组件监听原生事件，所以事件返回值都没有 `event` 属性，因此不支持阻止默认事件、阻止冒泡。

如需实现此效果，可包裹一层 `view`，在这个 `view` 上阻止默认事件、冒泡。

:::

## 插槽

| 名称    | 说明       |
| ------- | ---------- |
| default | 放置子组件 |