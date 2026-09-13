# Drag  拖拽排序

## 基础用法

- 拖拽排序组件，通过 `v-model` 绑定数组数据，长按子项（默认 350ms）后即可拖动调整顺序，其余子项自动让位
- 子项必须使用 `sn-drag-item`，并通过 `index` 传入其在数据中的索引
- `mode="grid"` 切换为宫格模式，`column` 指定列数；`deletable` 开启底部删除区，将子项拖入后松手即可删除
- 为 `sn-drag-item` 提供 `handle` 插槽后，仅手柄可立即拖动，内容区保持正常交互

```vue
<template>
	<sn-drag v-model="list" @change="onChange">
		<sn-drag-item v-for="(item, index) in list" :key="item.id" :index="index">
			<view class="item">
				<text>{{ item.name }}</text>
			</view>
		</sn-drag-item>
	</sn-drag>
</template>
```

**更多演示请下载 demo 查看**

## 宫格模式与拖拽删除

```vue
<template>
	<sn-drag v-model="list" mode="grid" :column="3" deletable @delete="onDelete">
		<sn-drag-item v-for="(item, index) in list" :key="item.id" :index="index">
			<view class="grid-item">
				<text>{{ item.name }}</text>
			</view>
		</sn-drag-item>
	</sn-drag>
</template>
```

## 手柄拖动

提供 `handle` 插槽后，拖动不会占用内容区的点击交互（如开关、按钮），按住手柄可立即开始拖动，无需长按。

```vue
<template>
	<sn-drag v-model="list">
		<sn-drag-item v-for="(item, index) in list" :key="item.id" :index="index">
			<view class="item">
				<sn-switch v-model="item.enabled" />
				<text>{{ item.name }}</text>
			</view>
			<template #handle>
				<sn-icon name="menu-line" :size="22" color="$lineText" />
			</template>
		</sn-drag-item>
	</sn-drag>
</template>
```

## sn-drag 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的列表数据，排序或删除完成后自动更新 | any[] | `[]` | - |
| mode | 子项排列模式 | String | `column` | `column` \| `grid` |
| column | 宫格模式的列数（mode 为 `grid` 时生效） | Number | `3` | - |
| deletable | 是否启用拖拽删除（拖动时底部出现删除区） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用拖拽 | Boolean | `false` | `true` \| `false` |
| longPressTime | 长按触发拖拽的时长（毫秒） | Number | `350` | - |
| deleteBarHeight | 底部删除区高度 | String \| Number | `56px` | - |
| deleteText | 删除区默认文本 | String | `拖到此处删除` | - |
| deleteActiveText | 子项拖入删除区后的文本 | String | `松手删除` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| deleteClass | 自定义删除区样式类 | String | `''` | - |
| deleteStyle | 自定义删除区样式 | UTSJSONObject \| String | `''` | - |

## sn-drag-item 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| index | 子项在数据中的索引 | Number | `-（必填）` | - |
| disabled | 是否禁用该子项的拖拽 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义子项内容区样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 自定义子项内容区样式类 | String | `''` | - |
| handleClass | 自定义手柄样式类 | String | `''` | - |
| handleStyle | 自定义手柄样式 | UTSJSONObject \| String | `''` | - |

## 事件

**sn-drag 事件**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: any[]) => Void | 排序或删除提交时触发，携带新顺序的数据数组 |
| delete | (index: Number) => Void | 子项被拖入删除区松手删除时触发，携带被删除项索引 |
| drag-start | (index: Number) => Void | 开始拖拽时触发，携带子项索引 |
| drag-end | (from: Number, to: Number) => Void | 拖拽结束时触发，携带起始索引与目标索引；`to` 为 -1 表示该项被删除 |

**sn-drag-item 事件**

无

## 插槽

**sn-drag 插槽**

| 名称 | 说明 |
| --- | --- |
| default | 放置 sn-drag-item 子项 |

**sn-drag-item 插槽**

| 名称 | 说明 |
| --- | --- |
| default | 子项内容 |
| handle | 拖拽手柄，提供后仅手柄可立即拖动，内容区保持正常交互 |

<DemoPhone name="sn-drag" />
