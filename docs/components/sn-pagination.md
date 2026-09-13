# Pagination  分页器

## 基础用法

- 分页器，用于列表内容的分页导航。
- 通过 `v-model:page` 双向绑定当前页码，`pageCount` 指定总页数；也可传入 `itemCount`（数据总条数）配合 `pageSize` 自动计算总页数。
- 页码较多时自动显示省略号，`pageSlot` 控制实际展示的页码按钮数量。
- `disabled` 可整体禁用所有按钮与跳转输入框。

```vue
<template>
	<sn-pagination v-model:page="page" :page-count="20"></sn-pagination>
</template>

<script lang="uts" setup>
	const page = ref<number>(1)
</script>
```

**更多演示请下载 demo 查看**

## 快速跳转

开启 `showQuickJumper` 后显示跳转输入框，输入页码后回车或失焦生效，超出范围自动收敛。可通过 `goto` 插槽自定义输入框前的提示文字。

```vue
<template>
	<sn-pagination v-model:page="page" :page-count="100" show-quick-jumper>
		<template #goto>前往</template>
	</sn-pagination>
</template>
```

## 简单模式

`simple` 设为 true 时仅显示“当前页 / 总页数”，配合 `showQuickJumper` 可直接输入页码跳转。

```vue
<template>
	<sn-pagination v-model:page="page" :page-count="100" simple show-quick-jumper></sn-pagination>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:page | 当前页码 | Number | `1` | - |
| v-model:page-size | 每页条数，与 `itemCount` 配合自动计算总页数 | Number | `10` | - |
| pageCount | 总页数；取值不大于 1 时若 `itemCount` 大于 0，则按 `itemCount` / `pageSize` 向上取整自动计算 | String \| Number | `1` | - |
| pageSlot | 页码按钮最大显示数量（含省略号占位） | String \| Number | `5` | - |
| itemCount | 数据总条数，用于自动计算总页数 | String \| Number | `-1` | - |
| simple | 简单模式，仅显示“当前页 / 总页数” | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用 | Boolean | `false` | `true` \| `false` |
| showQuickJumper | 是否显示快速跳转输入框（回车或失焦生效） | Boolean | `false` | `true` \| `false` |
| showPrevNext | 是否显示上一页 / 下一页按钮 | Boolean | `true` | `true` \| `false` |
| buttonType | 页码按钮与翻页按钮的功能色类型 | String | `info` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| buttonLevel | 页码按钮与翻页按钮的等级 | String | `first` | `first` \| `second` \| `third` \| `least` |
| size | 页码按钮宽高（正方形），同时决定跳转输入框高度 | String \| Number | `$35` | - |
| gap | 按钮之间的间距 | String \| Number | `4` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点自定义样式类 | String | `''` | - |
| pageClass | 页码按钮与翻页按钮的自定义样式类 | String | `''` | - |
| pageStyle | 页码按钮与翻页按钮的自定义样式 | UTSJSONObject \| String | `''` | - |
| activePageClass | 当前页码按钮的自定义样式类 | String | `''` | - |
| activePageStyle | 当前页码按钮的自定义样式 | UTSJSONObject \| String | `''` | - |
| buttonTextClass | 页码、省略号与翻页按钮文字的自定义样式类 | String | `''` | - |
| buttonTextStyle | 页码、省略号与翻页按钮文字的自定义样式 | UTSJSONObject \| String | `line-height: 1;` | - |
| simpleTextClass | 简单模式文字的自定义样式类 | String | `''` | - |
| simpleTextStyle | 简单模式文字的自定义样式 | UTSJSONObject \| String | `''` | - |
| jumperClass | 跳转区域的自定义样式类 | String | `''` | - |
| jumperStyle | 跳转区域的自定义样式 | UTSJSONObject \| String | `''` | - |
| jumperInputClass | 跳转输入框的自定义样式类 | String | `''` | - |
| jumperInputStyle | 跳转输入框的自定义样式 | UTSJSONObject \| String | `''` | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| prefix | 分页器最前部的附加内容 |
| suffix | 分页器最后部的附加内容 |
| prev | 替换上一页按钮内容（默认为左箭头图标） |
| next | 替换下一页按钮内容（默认为右箭头图标） |
| goto | 快速跳转输入框前的提示文字（默认为“跳至”），仅非简单模式生效 |

<DemoPhone name="sn-pagination" />
