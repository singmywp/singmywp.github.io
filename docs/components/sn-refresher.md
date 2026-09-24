# Refresher  下拉刷新

> [查看 sn-refresher 的 2.0 版本差异](/differences/components/sn-refresher)

## 基础用法

- 自定义 `scroll-view`、`list-view` 等滚动容器下拉刷新样式的刷新条，也可单独使用。
- 两种显示状态：`refresh`（可下拉，显示图标 + 提示文本）、`refreshing`（刷新中，显示加载动画 + 刷新中文本）。
- 在 `refresh` 状态下点击刷新条同样会触发刷新。

```vue
<template>
	<sn-refresher status="refresh"></sn-refresher>
</template>
```

**更多演示请下载 demo 查看**

## 双向绑定与交互控制

通过 `v-model:refresher-triggered` 双向绑定刷新状态，点击刷新条触发 `refresh` 事件；也可通过 `startRefresh` / `stopRefresh` 方法主动控制。

```vue
<template>
	<sn-refresher ref="refresherRef" v-model:refresher-triggered="triggered"
		status="refresh" refresh-text="点击我触发刷新" @refresh="onRefresh"></sn-refresher>
</template>

<script setup>
	const refresherRef = ref<SnRefresherComponentPublicInstance | null>(null)
	const triggered = ref<boolean>(false)
	function onRefresh(triggeredVal: boolean): void {
		triggered.value = triggeredVal
		setTimeout(() => {
			refresherRef.value?.$callMethod('stopRefresh')
		}, 1500)
	}
</script>
```

## 自定义图标与文本

图标名称、颜色、大小与两种状态文本均可自定义，颜色、尺寸支持 `$` 简写。

```vue
<template>
	<sn-refresher status="refresh" icon="arrow-down-circle-line" refresh-text="我就是我，不一样的烟火~"
		text-color="$success" icon-color="$success"></sn-refresher>
	<sn-refresher status="refreshing" refreshing-text="努力刷新吖..." text-size="$14" icon-size="$18"
		text-color="$primary" icon-color="$primary" custom-style="margin-top:12px;"></sn-refresher>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:refresher-triggered | 绑定当前刷新状态，`true` 表示刷新已触发 | Boolean | `false` | `true` \| `false` |
| status | 显示状态 | String | `refresh` | `refresh` \| `refreshing` |
| icon | 未刷新状态下的图标名称 | String | `refresh-line` | - |
| refreshText | 未刷新状态下的文本提示 | String | `松开刷新` | - |
| refreshingText | 刷新中状态下的文本提示 | String | `刷新中` | - |
| textSize | 文本字体大小（支持 `$` 简写） | String \| Number | `$13` | - |
| iconSize | 图标大小（支持 `$` 简写） | String \| Number | `$14` | - |
| iconColor | 图标颜色（支持 `$` 简写） | String | `$lineText` | - |
| textColor | 文本颜色（支持 `$` 简写） | String | `$lineText` | - |
| hoverStopPropagation | 是否阻止点击态事件冒泡 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点外部样式类 | String | `''` | - |
| iconClass | 自定义图标节点外部样式类 | String | `''` | - |
| iconStyle | 自定义图标节点内联样式 | UTSJSONObject \| String | `''` | - |
| textClass | 自定义文本节点外部样式类 | String | `''` | - |
| textStyle | 自定义文本节点内联样式（默认带 6px 左边距） | UTSJSONObject \| String | `''` | - |
| loadingClass | 自定义刷新中加载动画节点外部样式类 | String | `''` | - |
| loadingStyle | 自定义刷新中加载动画节点内联样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| refresh | (triggered: boolean) => Void | `refresh` 状态下点击刷新条时触发，组件进入刷新中状态并置位 `refresher-triggered` |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| startRefresh | - | - | 主动开始刷新，切换到刷新中状态并置位 `refresher-triggered` |
| stopRefresh | - | - | 主动结束刷新，恢复可下拉状态并复位 `refresher-triggered` |

<DemoPhone name="sn-refresher" />
