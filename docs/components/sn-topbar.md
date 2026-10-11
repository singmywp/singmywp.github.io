# Topbar  导航栏

> [查看 sn-topbar 的 2.0 版本差异](/differences/components/sn-topbar)

## 基础用法

页面顶部导航栏，包含标题、返回按钮与右侧功能区。

- 固定与非固定模式共用一个根容器，默认固定在页面顶部
- 支持背景模糊；可让根容器背景向上延伸覆盖状态栏区域，避免顶部露底或状态栏与内容重叠
- 返回按钮点击时派发事件，页面栈大于 1 时自动返回；导航栏高度默认取全局配置，可单独指定

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

## 背景模糊与布局

`blur` 在整体根容器上设置 `backdrop-filter: blur(...)`，Web 同时设置 `-webkit-backdrop-filter`。不创建额外背景层、状态栏层或占位层；`statusBar` 开启时根容器向上覆盖状态栏区域，模糊同样作用于状态栏区域。

菜单弹层独立于导航栏根容器，避免 `backdrop-filter` 改变 Web 固定定位弹层的包含块，影响遮罩范围和菜单锚点定位。

未传 `bgColor` 时，启用模糊会将主题页面背景色转换为半透明颜色，透明度由 `blurOpacity` 控制。显式传入 `bgColor` 时保留该颜色自身的透明度，例如 `rgba(255, 255, 255, 0.58)`；不透明背景会遮住背景模糊效果。

Demo 首页 `pages/index/index.uvue` 的顶部与底部导航栏均启用模糊，半径为 `20px`、背景透明度为 `0.68`；不显式传入背景色，随亮暗主题自动切换。首页顶部导航栏根容器随 `statusBar` 向上覆盖状态栏区域，安全距离和内容占位仍由页面管理。

固定导航栏不会撑开文档流，请在使用方为内容设置间距；`statusBar` 默认开启（背景覆盖状态栏、内容预留状态栏高度），内容间距应取 `$snui.topbarHeightResolved` 加状态栏高度，最简做法是在导航栏后叠加一个 `<sn-gap mode="statusbar" />`。使用 `sn-page` 的内置导航栏时，这些布局由 `sn-page` 处理。非固定模式导航栏本身占据文档流，同样会预留状态栏高度。

未显示返回按钮且未提供 `header` 插槽时，根容器仍保留 `16 × paddingFactor` px 左内边距；有左侧内容时为 `8 × paddingFactor` px。不通过空侧栏实现留白。

```vue
<sn-topbar title="毛玻璃导航" :blur="true" :blur-radius="20"
	bg-color="rgba(255, 255, 255, 0.58)" />
```


## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 标题文本 | String | `''` | - |
| backButton | 是否显示返回按钮 | Boolean | `true` | `true` \| `false` |
| backButtonIcon | 返回按钮图标名 | String | `'arrow-left-s-line'` | - |
| fixed | 是否固定在页面顶部，不生成占位 | Boolean | `true` | `true` \| `false` |
| statusBar | 是否向上覆盖状态栏区域并为内容预留状态栏高度 | Boolean | `true` | `true` \| `false` |
| titleAlign | 标题对齐方式 | String | `'left'` | `left` \| `center` \| `right` |
| features | 右侧功能按钮数据，每项可配置 icon（图标）或 text（文字） | Array<[[SnDataItem@api]]> | `[]` | - |
| menuButton | 是否显示"更多"菜单按钮（menuData 非空时自动显示） | Boolean | `false` | `true` \| `false` |
| menuData | 下拉菜单数据，点击菜单按钮弹出内置菜单 | Array<[[SnDataItem@api]]> | `[]` | - |
| bgColor | 背景颜色 | String | `$page` | - |
| blur | 是否启用背景高斯模糊 | Boolean | `false` | `true` \| `false` |
| blurRadius | 背景高斯模糊半径（单位 px） | Number | `15` | - |
| blurOpacity | 未传 bgColor 时的模糊背景透明度，取值 0~1，不影响标题和按钮 | Number | `0.78` | - |
| height | 导航栏内容区高度（不含状态栏，Number 单位 px），取全局配置 `$snui.topbarHeight`（Web 端 + 8px，其他端直接使用该值）；`statusBar` 开启时根容器总高度为该值加状态栏高度 | String \| Number | - | - |
| zIndex | 固定定位时的层级 | Number | `998` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类，通过 custom-class 传入 | String | `''` | - |
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
