# Loadmore  加载更多

> [查看 sn-loadmore 的 2.0 版本差异](/differences/components/sn-loadmore)

## 基础用法

- 一般用于标识页面底部加载数据时的状态。
- 三种状态：`loadmore`（加载更多，点击触发 `loadmore` 事件）、`loading`（加载中）、`nomore`（没有更多）。
- 两侧线条支持实线与虚线（`dashed`）。

```vue
<template>
	<sn-loadmore @loadmore="onLoadmore"></sn-loadmore>
</template>
```

**更多演示请下载 demo 查看**

## 加载状态切换

配合列表加载流程切换 `status`：点击加载更多后进入加载中，数据加载完毕后标记为没有更多。

```vue
<template>
	<sn-loadmore :status="status" @loadmore="onLoadmore"></sn-loadmore>
</template>

<script setup>
	const status = ref<string>('loadmore')
	function onLoadmore(): void {
		status.value = 'loading'
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| status | 加载状态 | String | `loadmore` | `loadmore` \| `loading` \| `nomore` |
| loadmoreText | loadmore 状态显示的文本 | String | `加载更多` | - |
| nomoreText | nomore 状态显示的文本 | String | `没有更多了` | - |
| loadingText | loading 状态显示的文本 | String | `加载中` | - |
| textSize | 文本字体大小 | String \| Number | `$13` | - |
| iconSize | 加载指示器大小，与文本字号一致 | String \| Number | - | - |
| iconColor | 加载指示器颜色 | String | `$primary` | - |
| textColor | 文本颜色 | String | `$lineText` | - |
| lineColor | 两侧线条颜色 | String | `$line` | - |
| lineHeight | 两侧线条粗细 | String \| Number | `0.5px` | - |
| disabled | 是否禁用，禁用时 loadmore 状态点击不触发事件 | Boolean | `false` | `true` \| `false` |
| dashed | 两侧线条是否为虚线 | Boolean | `false` | `true` \| `false` |
| loadingClass | 自定义 loading 指示器节点外部样式类 | String | - | - |
| loadingStyle | 自定义 loading 指示器节点内联样式 | UTSJSONObject \| String | `border-color: <主题线条文本色>` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| loadmore | () => Void | 点击加载更多时触发（仅 status 为 `loadmore` 且未禁用时响应） |

<DemoPhone name="sn-loadmore" />
