# Sidebar 侧边栏

> [查看 sn-sidebar 的 2.0 版本差异](/differences/components/sn-sidebar)

## 基础用法
- 侧边导航栏，适用于商城选购等场景
- 左侧为选项列表（v-model 控制选中索引），右侧为内容区（default 插槽）
- 支持锚点定位（anchor）与选中线（showLine）

```vue
<template>
	<sn-sidebar v-model="index" :data="items">
		<view>右侧内容区</view>
	</sn-sidebar>
</template>
```

**更多演示请下载 demo 查看**

## 锚点定位

`anchor` 为 true 时，选中项变化会驱动内容区滚动到对应 `id` 的节点（scroll-into-view），需在内容区放置带相同 `id` 的节点。

```vue
<template>
	<sn-sidebar v-model="index" :data="items" anchor>
		<scroll-view>
			<view :id="items[0].id">模块一</view>
			<view :id="items[1].id">模块二</view>
		</scroll-view>
	</sn-sidebar>
</template>
```

## 外部样式

`bar-class` / `bar-style` 定制左侧侧边栏，`item-class` / `item-style` 定制选项，`content-class` / `content-style` 定制内容区。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中的选项索引 | Number | `0` | - |
| data | 侧边栏选项数据数组 | Array<[[SnDataItem@api]]> | `[]` | - |
| width | 侧边栏宽度 | String | `'100px'` | - |
| itemWidth | 选项宽度 | String | `'100px'` | - |
| itemPadding | 选项内边距（支持 1~4 值简写） | String | `'15px 0'` | - |
| itemTextColor | 选项文字颜色 | String | `$text` | - |
| itemTextSize | 选项文字大小 | String \| Number | `$16` | - |
| activeItemTextColor | 选中选项文字颜色 | String | `$primary` | - |
| itemBgColor | 选项背景颜色 | String | `var(--sn-transparent)` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `'0'` | - |
| activeItemBgColor | 选中选项背景颜色 | String | `$front` | - |
| disabled | 是否禁用所有选项 | Boolean | `false` | `true` \| `false` |
| anchor | 是否使用锚点定位，选中时内容区滚动到对应 id | Boolean | `false` | `true` \| `false` |
| showLine | 是否显示选中线 | Boolean | `true` | `true` \| `false` |
| lineColor | 选中线颜色 | String | `$primary` | - |
| customStyle | 自定义容器样式 | UTSJSONObject \| String | `''` | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | `''` | - |
| itemClass | 选项外部样式类 | String | `''` | - |
| barStyle | 自定义侧边栏（左侧列表）样式 | UTSJSONObject \| String | `''` | - |
| barClass | 侧边栏外部样式类 | String | `''` | - |
| contentStyle | 自定义内容区样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 内容区外部样式类 | String | `''` | - |

:::type-fields SnDataItem

通用数据项类型，全局弹窗操作菜单与多数列表类组件共用（组件侧详见[组件类型](/api/types/component#sndataitem)）。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 项 id |
| text | String | 否 | 显示文本 |
| icon | String | 否 | 图标名 |
| value | String | 否 | 关联值 |
| color | String | 否 | 文本颜色 |
| disabled | Boolean | 否 | 是否禁用 |

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number) => Void | 选项改变时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置侧边栏右侧的内容区域 |

<DemoPhone name="sn-sidebar" />
