# View  视图容器

> [查看 sn-view 的 2.0 版本差异](/differences/components/sn-view)

## 基础用法

- 最基础的视图容器，用于包裹各种元素内容、搭建页面结构，用法与内置 `view` 组件类似。
- 在内置 `view` 的能力之上扩展了 loading 区域加载、disabled 区域禁用、点击态（`hover-style`）与丰富的手势事件。
- 通过 `bg-color`、`border-radius`、`padding`、`margin`、`box-shadow` 等属性快速设置外观。

```vue
<template>
	<sn-view bg-color="$primaryLight" border-radius="$16" padding="14px">
		<sn-text text="一个容器"></sn-text>
	</sn-view>
</template>
```

**更多演示请下载 demo 查看**

## 区域加载与禁用

- `loading` 为 `true` 时覆盖一层半透明遮罩并显示加载指示器，区域内容不可交互，容器尺寸保持不变。
- `disabled` 为 `true` 时屏蔽区域内所有组件的交互，区域整体变淡。

```vue
<template>
	<sn-view :loading="loading" padding="14px">
		<sn-text text="加载中的区域"></sn-text>
	</sn-view>
</template>
```

## 点击态

- 通过 `hover-style`（格式同 `custom-style`）设置按下时应用的样式，松开后平滑恢复。
- `hover-start-time` 控制按下后进入点击态的延迟，`hover-stay-time` 控制松开后点击态保留时长，`hover-trans-time` 控制过渡时长。

```vue
<template>
	<sn-view padding="18px" hover-style="transform:scale(0.95);">
		<sn-text text="按下轻微缩放"></sn-text>
	</sn-view>
</template>
```

## 手势事件

`sn-view` 支持按下（`down`）、单击（`click`）、双击（`dbclick`）、长按（`longpress`）、双指旋转（`rotate`）、双指缩放（`scale`）以及 `touchstart`、`touchmove`、`touchend`、`touchcancel` 触摸事件。

- 指针类事件回调参数为 [SnPointerEvent](/api/types/api#snpointerevent)，包含 `x`、`y` 与原始事件。
- 触摸类事件回调参数为 [SnTouchEvent](/api/types/api#sntouchevent)，其中的每个 `SnTouch` 额外携带 `diffX`、`diffY`（与上次的位移）和 `direction`（`up` / `down` / `left` / `right` / `none`），可直接用于滑动判断。

```vue
<template>
	<sn-view @touchmove="onTouchMove">
		<sn-text text="滑动的方向"></sn-text>
	</sn-view>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| loading | 是否区域加载状态，为 `true` 时覆盖遮罩并显示加载指示器，内容不可交互 | Boolean | `false` | `true` \| `false` |
| disabled | 是否区域禁用状态，为 `true` 时屏蔽区域内所有组件的交互 | Boolean | `false` | `true` \| `false` |
| bgColor | 背景颜色，支持 `$` 功能色简写 | String | - | - |
| borderRadius | 圆角大小，支持 `$` 简写 | String \| Number | - | - |
| margin | 外边距，支持 `$` 简写 | String \| Number | `0` | - |
| padding | 内边距，支持 `$` 简写 | String \| Number | `0` | - |
| boxShadow | 阴影，一般不要设置，uni-app x 的阴影在 App 端时有异常 | String | - | - |
| aniTime | 动画时长，`$` 开头时乘以动画时长乘数 | String \| Number | `$250` | - |
| hoverStyle | 按下时应用的样式，为空时不启用点击态 | UTSJSONObject \| String | - | - |
| hoverStopPropagation | 是否阻止点击态扩散到父节点 | Boolean | `false` | `true` \| `false` |
| hoverStartTime | 按下后进入点击态的延迟时间（ms） | Number | `50` | - |
| hoverStayTime | 手指松开后点击态保留时间（ms） | Number | `0` | - |
| hoverTransTime | 进入/退出点击态的过渡时长，取 `aniTime` | String \| Number | - | - |
| loadingStyle | 加载指示器的自定义样式 | UTSJSONObject \| String | - | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| loadingClass | 加载指示器的外部样式类 | String | - | - |
| customClass | 根节点的外部样式类 | String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| click | (event: [[SnPointerEvent@api]]) => Void | 点击事件 |
| dbclick | (event: [[SnPointerEvent@api]]) => Void | 双击事件（300ms 内连续点击两次） |
| down | (event: [[SnPointerEvent@api]]) => Void | 按下事件 |
| longpress | (event: [[SnTouchEvent@api]]) => Void | 长按事件 |
| touchstart | (event: [[SnTouchEvent@api]]) => Void | 手指落下事件 |
| touchmove | (event: [[SnTouchEvent@api]]) => Void | 手指移动事件 |
| touchend | (event: [[SnTouchEvent@api]]) => Void | 手指抬起事件 |
| touchcancel | (event: [[SnTouchEvent@api]]) => Void | 触摸打断事件 |
| rotate | (event: [[SnRotateEvent@api]]) => Void | 双指旋转事件，degree 为相对上一次旋转事件的角度增量（deg），顺时针为正 |
| scale | (event: [[SnScaleEvent@api]]) => Void | 双指缩放手势事件，zoom 为相对上一次缩放事件的倍数 |

:::type-fields SnPointerEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`click` \| `dbclick` \| `down` |
| x | Number | 是 | 点击点横坐标 |
| y | Number | 是 | 点击点纵坐标 |
| event | UniPointerEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

:::
:::type-fields SnRotateEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| degree | Number | 是 | 相对上一次旋转事件的角度增量（deg），顺时针为正 |

:::
:::type-fields SnScaleEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| zoom | Number | 是 | 缩放倍数（相对上一次缩放事件） |

:::
:::type-fields SnTouchEvent

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`touchstart` \| `touchend` \| `touchmove` \| `touchcancel` \| `longpress` \| `showpress` |
| touches | Array<[[SnTouch@api]]> | 是 | 多指触摸信息 |
| event | UniEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

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

:::

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| default | 在这里放置内容 |

<DemoPhone name="sn-view" />
