# sn-menu-item

> 旧版组件：sn-menu-item.md

**旧版状态**：v1 提供菜单项 `sn-menu-item`（配合 `sn-menu` 使用），支持 `text` / `icon` / `iconPosition` / `textAlign`、`disabled` 禁用态、`listMode` 列表模式（在 `list-view` 内渲染为 `<list-item>`），以及 `header` / `body` / `footer` 插槽与 `textColor` / `iconColor` / `textSize` 等样式属性，按压态通过 `isHover` 响应式变量控制。

**删除结论**：v2 **已移除** `sn-menu-item` 组件，菜单类组件的子项统一改用 `sn-cell`。

**删除原因**：

- 旧版菜单项与列表项存在大量重复：`sn-menu-item`、`sn-list-item`、`sn-list-chat` 三者属性高度重叠，且 `listMode` 又要求组件在两种宿主容器间切换渲染结构，实现复杂度与出错概率都偏高。
- `sn-menu` 的子项改为数据驱动（`items` 数组）后，逐项书写子组件标签的方式已不适用。
- 按压态由零散的 `isHover` 响应式变量改为统一的 `useHover` + `hover-style` 机制，`sn-cell` 已内置。

**替代方案**：

- `sn-menu` 的子项改为通过 `items` 数组声明，每项支持 `text`、`icon`、`value`、`color`、`disabled` 字段：

```vue
<template>
	<sn-menu target="#menu-btn" :items="items" v-model:show="show" @select="onSelect" />
</template>

<script lang="uts" setup>
	type MenuItem = {
		text: string
		icon?: string | null
		value?: string | null
		color?: string | null
		disabled?: boolean | null
	}

	const items: MenuItem[] = [
		{ text: '编辑', icon: 'edit-line', value: 'edit' },
		{ text: '删除', icon: 'delete-bin-line', value: 'delete', color: '$error' }
	]

	function onSelect(index : number, item : any) {
	}
</script>
```

- 主要变化对照：

| 旧版 `sn-menu-item` | 替代方案 |
| ------------------- | -------- |
| 逐个书写 `<sn-menu-item>` | `sn-menu` 的 `items` 数组 |
| `text` / `icon` / `iconPosition` | `items` 项字段 `text` / `icon`（图标位置由 `sn-menu` 统一控制） |
| `textColor` / `iconColor` / `textSize` | `items` 项 `color` + `sn-menu` 的 `cellStyle` / `cellClass` |
| `disabled` | `items` 项 `disabled` |
| `header` / `body` / `footer` 插槽 | 已移除，改用 `items` 字段与 `cellStyle` 定制 |
| `click` 事件 | 父级 `sn-menu` 的 `select` 事件（参数为 `index` 与所选菜单项） |
| `listMode` | 已移除，不再需要在两种宿主容器间切换 |

- 其他内部的列表项 / 子项布局（选择器选项、操作菜单项等）同样统一复用 `sn-cell`，样式经 `itemStyle` / `itemHoverStyle` / `itemTextStyle` / `itemIconStyle` / `itemClass` / `itemBorder` 传递链透传。
