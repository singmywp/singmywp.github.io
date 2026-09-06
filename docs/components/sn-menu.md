# Menu  菜单

> [查看 sn-menu 的 2.0 版本差异](/differences/components/sn-menu)

## 基础用法

- 锚点菜单组件，在触发元素（按钮、图标等）旁弹出的一组操作选项，常用于"更多操作"场景。
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 选项由 `items` 数组驱动，每项支持 `text`（文字）、`icon`（图标名）、`value`（右侧内容）、`color`（文字颜色，支持 `$` 简写）、`disabled`（禁用）字段。
- `target` 传入锚点元素的选择器（如 `#menu-btn`），菜单自动定位到锚点下方；下方空间不足时自动改为在锚点上方弹出，三角箭头方向随之翻转；`align` 设置菜单相对锚点的对齐方式。
- 通过 `v-model:show` 控制显示与隐藏；点击菜单项触发 `select` 事件（携带索引与选项数据）并自动关闭。
- `overlay` 可关闭遮罩，`close-on-click-overlay` 可设置点击遮罩不关闭，`overlay-opacity`、`overlay-style`、`overlay-class` 自定义遮罩。

```vue
<template>
	<sn-page>
		<sn-button id="menu-btn" text="打开菜单" @click="show = true"></sn-button>
		<sn-menu v-model:show="show" target="#menu-btn" :items="items"
			@select="onSelect"></sn-menu>
	</sn-page>
</template>

<script lang="uts" setup>
import type { SnDataItem } from '@/uni_modules/sinle-ui/core/types/index.uts'

const show = ref<boolean>(false)
const items: SnDataItem[] = [
	{ text: '编辑', icon: 'edit-line' },
	{ text: '分享', icon: 'share-line' },
	{ text: '删除', icon: 'delete-bin-line' }
]

function onSelect(index: number, item: SnDataItem): void {
	console.log(item.text)
}
</script>
```

**更多演示请下载 demo 查看**

## 对齐方式与箭头

```vue
<template>
	<sn-menu v-model:show="show" target="#menu-btn" align="center"
		:width="220" :show-arrow="false" :items="items"></sn-menu>
</template>

<script lang="uts" setup>
const show = ref<boolean>(false)
const items: SnDataItem[] = [
	{ text: '选项一' },
	{ text: '选项二' }
]
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:show | 菜单显示状态绑定值 | Boolean | `false` | `true` \| `false` |
| target | 锚点元素选择器（如 `#menu-btn`），菜单将定位到该元素旁 | String | `''` | - |
| align | 菜单相对锚点的对齐方式 | String | `left` | `left` \| `center` \| `right` |
| items | 菜单项数组，每项支持 `text`、`icon`、`value`、`color`、`disabled` 字段 | Array\<[[SnDataItem@api]]\> | `[]` | - |
| width | 菜单宽度（px），为空时为 `160px` | String \| Number | `''` | - |
| zIndex | 弹出层层级 | Number | `999` | - |
| showArrow | 是否显示指向锚点的三角箭头 | Boolean | `true` | `true` \| `false` |
| overlay | 是否显示遮罩 | Boolean | `true` | `true` \| `false` |
| overlayOpacity | 遮罩透明度，`overlay` 为 `false` 时不显示遮罩 | Number | `0.3` | - |
| overlayStyle | 自定义遮罩样式 | UTSJSONObject \| String | `''` | - |
| overlayClass | 遮罩外部类 | String | `''` | - |
| menuStyle | 自定义菜单容器样式 | UTSJSONObject \| String | `''` | - |
| menuClass | 菜单容器外部类 | String | `''` | - |
| aniTime | 显示 / 关闭动画时长（ms），支持 `$` 简写 | String \| Number | `200` | - |
| cellStyle | 自定义菜单项样式（透传内部 sn-cell） | UTSJSONObject \| String | `''` | - |
| cellClass | 菜单项外部类（透传内部 sn-cell） | String | `''` | - |
| cellBorder | 是否显示菜单项之间的分隔线 | Boolean | `true` | `true` \| `false` |
| closeOnClickOverlay | 点击遮罩时是否关闭菜单 | Boolean | `true` | `true` \| `false` |

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
| update:show | (value: boolean) => Void | 菜单显示状态变化时触发，配合 `v-model:show` 使用 |
| select | (index: number, item: [[SnDataItem@api]]) => Void | 点击菜单项时触发，参数为索引与所选菜单项，随后自动关闭 |
| clickoverlay | () => Void | 点击遮罩时触发 |
| beforeenter | () => Void | 入场动画开始前触发 |
| enter | () => Void | 入场动画开始时触发 |
| afterenter | () => Void | 入场动画结束后触发 |
| beforeleave | () => Void | 离场动画开始前触发 |
| leave | () => Void | 离场动画开始时触发 |
| afterleave | () => Void | 离场动画结束后触发 |

<DemoPhone name="sn-menu" />
