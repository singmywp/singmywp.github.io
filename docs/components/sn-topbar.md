# Topbar  导航栏

> [查看 sn-topbar 的 2.0 版本差异](/differences/components/sn-topbar)

## 基础用法

- 页面顶部导航栏，包含标题、返回按钮与右侧功能区
- 默认固定在页面顶部（`fixed`），自动预留系统状态栏高度，并生成等高占位避免内容被遮挡
- 返回按钮点击时触发 `back` 事件，页面栈大于 1 时组件会自动执行返回
- 导航栏高度默认取全局配置 `$snui.topbarHeight`（APP 端最大 48px），可通过 `height` 修改

```vue
<template>
	<sn-topbar title="标题"></sn-topbar>
</template>
```

**更多演示请下载 demo 查看**

## 功能按钮与下拉菜单

`features` 配置右侧功能按钮，每项通过 `icon`（图标）或 `text`（文字）定义内容。`menuButton` 显示"更多"按钮，`menuData` 配置下拉菜单项（配置后菜单按钮自动显示），菜单项选中时触发 `menuselect`。

```vue
<template>
	<sn-topbar
		title="导航"
		:features="[{ icon: 'search-line' }, { text: '发布' }]"
		:menu-data="[{ text: '刷新', icon: 'refresh-line' }]"
		@featureclick="onFeatureClick"
		@menuselect="onMenuSelect"
	></sn-topbar>
</template>
```

## 自定义样式

`bg-color` 设置背景色，`title-style` / `title-class` 定制标题，`button-style` 定制按钮，`hover-button-style` 定制按钮按压态，适配主题色或深色导航背景。

```vue
<template>
	<sn-topbar
		title="主题色导航"
		bg-color="var(--sn-primary)"
		title-style="color: #ffffff;"
		button-style="background-color: rgba(255, 255, 255, 0.18); border-width: 0;"
		button-icon-style="color: #ffffff;"
		hover-button-style="background-color: rgba(255, 255, 255, 0.25);"
	></sn-topbar>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 标题文本 | String | `''` | - |
| backButton | 是否显示返回按钮 | Boolean | `true` | `true` \| `false` |
| backButtonIcon | 返回按钮图标名 | String | `'arrow-left-s-line'` | - |
| fixed | 是否固定在页面顶部，固定时自动生成等高占位 | Boolean | `true` | `true` \| `false` |
| statusBar | 是否为系统状态栏预留高度 | Boolean | `true` | `true` \| `false` |
| titleAlign | 标题对齐方式 | String | `'left'` | `left` \| `center` \| `right` |
| features | 右侧功能按钮数据，每项可配置 icon（图标）或 text（文字） | Array<[[SnDataItem@api]]> | `[]` | - |
| menuButton | 是否显示"更多"菜单按钮（menuData 非空时自动显示） | Boolean | `false` | `true` \| `false` |
| menuData | 下拉菜单数据，点击菜单按钮弹出内置菜单 | Array<[[SnDataItem@api]]> | `[]` | - |
| bgColor | 背景颜色，为空时使用当前主题页面背景色 | String | `''` | - |
| height | 导航栏高度（Number 单位 px），为空时取全局配置 $snui.topbarHeight（APP 端最大 48px） | String \| Number | `''` | - |
| zIndex | 固定定位时的层级 | Number | `100` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 标题外部样式类 | String | `''` | - |
| buttonStyle | 自定义返回/功能/菜单按钮样式 | UTSJSONObject \| String | `''` | - |
| hoverButtonStyle | 自定义按钮按压态样式 | UTSJSONObject \| String | `''` | - |
| buttonTextStyle | 自定义按钮文字样式（features 中纯文字按钮） | UTSJSONObject \| String | `''` | - |
| buttonIconStyle | 自定义按钮图标样式 | UTSJSONObject \| String | `''` | - |

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
| back | () => Void | 点击返回按钮时触发；页面栈大于 1 时组件会自动执行返回 |
| featureclick | (item: [[SnDataItem@api]], index: number) => Void | 点击功能按钮时触发；点击"更多"菜单按钮且未配置菜单数据时也会触发（item 仅含 icon，index 为 -1） |
| menuselect | (item: [[SnDataItem@api]], index: number) => Void | 选择下拉菜单项时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| header | 替换左侧返回按钮区域 |
| default | 替换中间标题区域 |
| footer | 替换右侧功能按钮区域 |

<DemoPhone name="sn-topbar" />
