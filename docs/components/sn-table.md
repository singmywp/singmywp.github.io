# Table  表格

## 基础用法

- 表格由三部分配合组成：`sn-table` 为表格容器，`sn-tr` 为行，`sn-td` 为单元格；行必须包裹在 sn-table 内，单元格必须包裹在 sn-tr 内。
- 单元格 `width` 不带单位时按比例分配剩余宽度，带单位时为固定宽度。
- `bordered` 显示单元格边框，`underline` 显示行下边框，可配合 `borderColor` 自定义边框颜色。
- 在 sn-td 内嵌套 sn-tr 可实现多级表头。

```vue
<template>
	<sn-table>
		<sn-tr>
			<sn-td width="2"><text>ID</text></sn-td>
			<sn-td width="2"><text>姓名</text></sn-td>
			<sn-td width="3"><text>城市</text></sn-td>
		</sn-tr>
		<sn-tr>
			<sn-td width="2"><text>1</text></sn-td>
			<sn-td width="2"><text>张三</text></sn-td>
			<sn-td width="3"><text>广州</text></sn-td>
		</sn-tr>
	</sn-table>
</template>
```

**更多演示请下载 demo 查看**

## 固定表头与固定列

设置 `height` 后表格进入可滚动模式：表头通过 `#head` 插槽声明并固定在顶部，表体纵向滚动（滚动到底部会触发 `scrolltolower`，可用于加载更多）；此时可通过 sn-td 的 `fixed` 属性固定列（固定列不支持 flatten）。

```vue
<template>
	<sn-table height="240px" underline @scrolltolower="onLoadMore">
		<template #head>
			<sn-tr>
				<sn-td fixed width="90px"><text>ID</text></sn-td>
				<sn-td width="110px"><text>姓名</text></sn-td>
				<sn-td fixed="right" width="90px"><text>操作</text></sn-td>
			</sn-tr>
		</template>
		<sn-tr v-for="item in rows" :key="item.id">
			<sn-td fixed width="90px"><text>{{ item.id }}</text></sn-td>
			<sn-td width="110px"><text>{{ item.name }}</text></sn-td>
			<sn-td fixed="right" width="90px"><text>编辑</text></sn-td>
		</sn-tr>
	</sn-table>
</template>
```

## 属性

以下属性属于 **sn-table**：

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| bordered | 是否显示单元格边框 | Boolean | `false` | `true` \| `false` |
| underline | 是否显示行下边框（`bordered` 为 true 时以内边框为准） | Boolean | `false` | `true` \| `false` |
| height | 表格高度；设置后启用固定表头与纵向滚动模式 | String \| Number | `''` | - |
| borderColor | 边框颜色，支持 `$` 简写 | String | `$line` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点自定义样式类 | String | `''` | - |

## 事件

以下事件属于 **sn-table**（仅设置 `height` 进入可滚动模式后才会触发）：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| scroll | (ev: UniScrollEvent) => Void | 表格滚动时触发（含横向与纵向滚动） |
| scrolltoupper | (ev: UniScrollToUpperEvent) => Void | 纵向滚动到顶部时触发 |
| scrolltolower | (ev: UniScrollToLowerEvent) => Void | 纵向滚动到底部时触发，常用于加载更多 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 表体内容，放置 sn-tr |
| head | 表头内容，放置 sn-tr；仅在设置 `height`（可滚动模式）时渲染并固定在顶部 |

## sn-tr 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| customStyle | 行自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 行自定义样式类 | String | `''` | - |

sn-tr 的默认插槽用于放置 sn-td；位于 `#head` 插槽中的第一级行会自动添加表头背景色。

## sn-td 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 单元格宽度：Number 按 px；纯数字字符串（如 `"2"`）按比例分配剩余宽度；带单位字符串（如 `"90px"`）为固定宽度；百分比字符串按百分比；自动均分剩余宽度 | String \| Number | - | - |
| fixed | 是否固定列：`true` 或 `"left"` 固定在左侧，`"right"` 固定在右侧；仅设置 `height`（可滚动模式）时生效 | Boolean \| String | `false` | `true` \| `false` \| `left` \| `right` |
| customStyle | 单元格自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 单元格自定义样式类 | String | `''` | - |

sn-td 的默认插槽用于放置单元格内容。
