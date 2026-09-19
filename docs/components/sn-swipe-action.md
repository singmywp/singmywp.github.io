# Swipe Action  滑动操作

> [查看 sn-swipe-action 的 2.0 版本差异](/differences/components/sn-swipe-action)

## 基础用法

- 用于列表项的滑动操作：左滑露出右侧操作区（`right` 插槽），右滑露出左侧操作区（`left` 插槽）
- 操作区宽度由插槽内容自动决定，可放置任意自定义内容
- 左右操作区与主体内容自动等高：高度以**主体内容**为准，操作区不参与高度计算，插槽内容使用 `align-self: stretch` 即可铺满整行高度，无需手动设置高度
- 使用注意：请勿给 `left` / `right` 插槽的根节点设置 `height: 100%`，也无需为操作区指定高度，`align-self: stretch` 即可铺满
- 使用注意：插槽根节点请勿对 `height` / `width` 等布局属性开启过渡动画（`transition-property: all` 同样包含布局属性），布局变化时会触发异常的尺寸动画；如需过渡动画仅限 `background-color` 等非布局属性
- 同一页面多个滑动操作自动联动：打开一个自动收起其他，点击内容区收起全部
- Web 端支持鼠标按住拖动

```vue
<template>
	<sn-swipe-action>
		<view class="content">
			<text>滑动显示操作</text>
		</view>
		<template #right>
			<view class="action-button" @click="onEdit">编辑</view>
			<view class="action-button" @click="onDelete">删除</view>
		</template>
	</sn-swipe-action>
</template>

<style>
.content {
	padding: 14px;
	background-color: var(--sn-front);
}

.action-button {
	width: 60px;
	align-self: stretch;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
```

**更多演示请下载 demo 查看**

## 异步确认关闭

设置 `before-close` 后，在展开状态下点击主体内容时会先调用该回调，Promise resolve `true` 才会收起操作区。

```vue
<template>
	<sn-swipe-action :before-close="beforeClose">
		<view class="content">
			<text>确认后才会收起操作区</text>
		</view>
		<template #right>
			<view class="action-button" @click="onDelete">删除</view>
		</template>
	</sn-swipe-action>
</template>
```

## 主动控制

通过实例方法 `open` / `close` 控制展开与收起，`open` 参数为露出的操作区方向。

```vue
<template>
	<sn-swipe-action ref="action">
		<view class="content">
			<text>可编程控制的操作项</text>
		</view>
		<template #right>
			<view class="action-button" @click="onDelete">删除</view>
		</template>
	</sn-swipe-action>
</template>
<script lang="uts" setup>
	const action = ref<SnSwipeActionComponentPublicInstance | null>(null)

	function openLeft() {
		action.value?.$callMethod('open', 'left')
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| disabled | 是否禁用滑动操作 | Boolean | `false` | `true` \| `false` |
| threshold | 默认打开阈值：松手时滑过操作区宽度的该比例即吸附打开（openThreshold 为空时生效） | Number | `0.4` | - |
| openThreshold | 自定义打开阈值，支持百分比（如 `20%`）、像素（如 `60px`）或数字（按 px 处理）；为空时使用 threshold | String \| Number | `''` | - |
| beforeClose | 关闭前的确认回调，返回 Promise，resolve `true` 才会收起操作区；参数 direction 为当前露出的操作区方向 | (direction: string) => Promise&lt;boolean&gt; \| null | `null` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| open | (direction: string) => Void | 操作区打开时触发，direction 为露出的操作区方向：`left` 左侧（右滑）、`right` 右侧（左滑） |
| close | () => Void | 操作区关闭时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | direction: string | - | 打开指定方向的操作区（`left` 左侧 / `right` 右侧） |
| close | - | - | 关闭操作区 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 主体内容 |
| left | 左侧操作区（右滑露出） |
| right | 右侧操作区（左滑露出） |

<DemoPhone name="sn-swipe-action" />
