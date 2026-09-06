# Grid  宫格

> [查看 sn-grid 的 2.0 版本差异](/differences/components/sn-grid)

## 基础用法

- 一般用于同时展示多个同类项目，常作为首页「金刚区」入口。
- 通过 `col` 控制列数，子项按列数等分宽度自动换行排列。
- 子项不满一行时可通过 `align` 控制对齐方式。

```vue
<template>
	<sn-grid-group>
		<sn-grid-item>
			<sn-text text="项目1"></sn-text>
		</sn-grid-item>
		<sn-grid-item>
			<sn-text text="项目2"></sn-text>
		</sn-grid-item>
		<sn-grid-item>
			<sn-text text="项目3"></sn-text>
		</sn-grid-item>
		<sn-grid-item>
			<sn-text text="项目4"></sn-text>
		</sn-grid-item>
	</sn-grid-group>
</template>
```

**更多演示请下载 demo 查看**

## 间距与对齐

`gutter` 设置子项间距（间距非 0 时按容器实测宽度等分子项）；`align` 控制子项不满一行时的对齐方式。

```vue
<template>
	<sn-grid-group :col="5" gutter="12px">
		<sn-grid-item v-for="(item, index) in menuList" :key="index">
			<sn-icon :name="item.icon" :size="24" color="$primary"></sn-icon>
			<sn-text :font-size="12" :text="item.name"></sn-text>
		</sn-grid-item>
	</sn-grid-group>
	<sn-grid-group :col="4" gutter="10px" align="center">
		<sn-grid-item bg-color="$primaryLight">
			<sn-text text="居中项目"></sn-text>
		</sn-grid-item>
	</sn-grid-group>
</template>
```

宫格也可置于 `swiper`、`scroll-view` 内实现分页金刚区、横向滚动入口等布局（置于 `scroll-view` 时通过 `custom-style` 加宽容器并自定义列数）。

## 属性

**sn-grid-group**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| col | 宫格布局列数 | Number | `4` | - |
| gutter | 子项间距，支持 `px`/`rpx`/`%` 数值字符串 | String | `0px` | - |
| align | 子项不满一行时的对齐方式 | String | `left` | `left` \| `start` \| `center` \| `right` \| `end` \| `around` \| `between` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

`gutter` 非 0 时，group 会测量自身宽度，将子项宽度按列数等分（px），子项左右各加 gutter/2 外边距；`align` 的 `start`/`end`/`around`/`between` 分别映射为对应的 flex 对齐值。

**sn-grid-item**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| bgColor | 子项背景颜色 | String | `透明` | - |
| customStyle | 自定义子项根节点样式 | UTSJSONObject \| String | `''` | - |

## 插槽

**sn-grid-group**

| 名称 | 说明 |
| :--- | :--- |
| default | 在这里放置子组件 `sn-grid-item` |

**sn-grid-item**

| 名称 | 说明 |
| :--- | :--- |
| default | 子项内部放置内容 |

<DemoPhone name="sn-grid" />
