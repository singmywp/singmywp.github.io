# Gesture  手势

> [查看 sn-gesture 的 2.0 版本差异](/differences/components/sn-gesture)

## 基础用法

- SinleUI 手势库组件，基于 AlloyFinger 实现，跨平台可用（Web / Android 均支持）
- 内置点击、双击、长按、手指落下 / 移动 / 抬起 / 打断、双指缩放、滑动（fling）等手势识别
- 事件回调均返回框架定义的具名类型（`SnPointerEvent` / `SnTouchEvent` / `SnScaleEvent` / `SnFlingEvent`），非 `UTSJSONObject`

```vue
<template>
	<sn-gesture @click="onClick" @scale="onScale" @fling="onFling">
		<view>内容</view>
	</sn-gesture>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点类名 | String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (event: [[SnPointerEvent@api]]) => Void | 单击事件 |
| dbclick | (event: [[SnPointerEvent@api]]) => Void | 双击事件（250ms 内两次点击且位移小于阈值） |
| longpress | (event: [[SnTouchEvent@api]]) => Void | 长按事件（按下 750ms 触发） |
| touchstart | (event: [[SnTouchEvent@api]]) => Void | 手指落下事件 |
| touchmove | (event: [[SnTouchEvent@api]]) => Void | 手指移动事件 |
| touchend | (event: [[SnTouchEvent@api]]) => Void | 手指抬起事件 |
| touchcancel | (event: [[SnTouchEvent@api]]) => Void | 触摸打断事件 |
| scale | (event: [[SnScaleEvent@api]]) => Void | 双指缩放事件 |
| fling | (event: [[SnFlingEvent@api]]) => Void | 滑动事件（位移超过阈值触发） |

:::type-fields SnPointerEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`click` \| `dbclick` \| `down` |
| x | Number | 是 | 点击点横坐标 |
| y | Number | 是 | 点击点纵坐标 |
| event | UniPointerEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

:::
:::type-fields SnTouchEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`touchstart` \| `touchend` \| `touchmove` \| `touchcancel` \| `longpress` \| `showpress` |
| touches | Array\<[SnTouch](/api/types/api#sntouch)\> | 是 | 多指触摸信息 |
| event | UniEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

:::
:::type-fields SnScaleEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| zoom | Number | 是 | 缩放倍数（相对上一次缩放事件） |

:::
:::type-fields SnFlingEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型 |  
| beginX | Number | 是 | 起始点横坐标 |  
| beginY | Number | 是 | 起始点纵坐标 |  
| endX | Number | 是 | 结束点横坐标 |  
| endY | Number | 是 | 结束点纵坐标 |  
| vX | Number | 是 | 横向速度 |  
| vY | Number | 是 | 纵向速度 |  

---

:::

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置手势监听区域内的内容 |

## 类型

| 类型 | 字段 | 类型 | 描述 |
| --- | --- | --- | --- |
| [[SnPointerEvent@api]] | type | string | 事件类型（`click` / `dbclick`） |
| | x | number | 触点横坐标 |
| | y | number | 触点纵坐标 |
| | event | UniPointerEvent | 原始指针事件 |
| [[SnTouch@api]] | x | number | 触点横坐标 |
| | y | number | 触点纵坐标 |
| | diffX | number | 本次移动横向位移 |
| | diffY | number | 本次移动纵向位移 |
| | direction | string | 移动方向：`none` \| `left` \| `right` \| `up` \| `down` |
| | id | number | 触点标识 |
| [[SnTouchEvent@api]] | type | string | 事件类型（`longpress` / `touchstart` / `touchmove` / `touchend` / `touchcancel`） |
| | touches | [[SnTouch@api]][] | 当前触点列表 |
| | event | UniEvent | 原始触摸事件 |
| [[SnScaleEvent@api]] | zoom | number | 缩放比例（两指距离相对初始距离的变化） |
| [[SnFlingEvent@api]] | type | string | 事件类型（`fling`） |
| | beginX | number | 起点横坐标 |
| | beginY | number | 起点纵坐标 |
| | endX | number | 终点横坐标 |
| | endY | number | 终点纵坐标 |
| | vX | number | 横向滑动速度 |
| | vY | number | 纵向滑动速度 |

:::type-fields SnTouch

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| x | Number | 是 | 触摸点横坐标 |
| y | Number | 是 | 触摸点纵坐标 |
| diffX | Number | 是 | 相对上一次触摸点的横向差值（正右负左） |
| diffY | Number | 是 | 相对上一次触摸点的纵向差值（正下负上） |
| direction | String | 是 | 手指移动方向 |
| id | Number | 是 | 手指 ID |

:::

<DemoPhone name="sn-gesture" />
