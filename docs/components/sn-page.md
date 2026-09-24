# Page  页面

> [查看 sn-page 的 2.0 版本差异](/differences/components/sn-page)

## 基础用法

- 页面根组件，占据整个页面并内置纵向滚动的内容区（不显示滚动条），无需手动管理滚动容器
- 在 `onLoad` 时自动将页面背景色写入原生页面（同时设置 `navigationStyle` 为 `custom`），避免页面加载初期白屏闪烁
- 在根节点注入全部主题颜色 CSS 变量（如 `--sn-primary`、`--sn-front`、`--sn-transparent` 等）与动画时长变量（`--ani-time-short`、`--ani-time-normal`、`--ani-time-long`），页面内所有子组件通过 `var()` 引用这些变量
- 弹出层类组件（如 sn-popup、sn-modal、sn-toast、sn-menu 等）应直接放在 `sn-page` 根节点下，否则无法取到注入的 CSS 变量，颜色与动画时长会失效

```vue
<template>
	<sn-page title="首页" :show-back="true">
		<sn-text text="页面内容"></sn-text>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 自定义背景颜色

`bgColor` 不传或传空字符串时，自动使用当前主题的页面背景色（`$snui.colors.page`，随亮暗主题切换），并同步应用到原生页面背景与内置导航栏背景。传入具体色值后，主题切换不再影响该页背景。

```vue
<template>
	<sn-page bg-color="#f0f0f0"></sn-page>
</template>
```

## 内置导航栏

`title` 非空时自动在页面顶部渲染一个 sn-topbar 导航栏，标题为 `title`，`showBack` 控制返回按钮显隐，导航栏背景与页面背景保持一致。

```vue
<template>
	<sn-page title="页面标题" :show-back="true"></sn-page>
</template>
```

## 内容区不滚动

默认内容区放在内置 scroll-view 中纵向滚动，该滚动区已关闭 `show-scrollbar`（不显示滚动条），内容仍可正常滑动与滚轮滚动。若页面内部自带独立滚动容器（如 sn-waterflow、sn-list-view 的全屏子页面），设置 `fillContent` 让内容区填满剩余高度，由内部容器自行滚动。

```vue
<template>
	<sn-page :fill-content="true">
		<sn-waterflow></sn-waterflow>
	</sn-page>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| bgColor | 页面背景颜色，并同步原生页面背景与内置导航栏背景；变化时自动更新页面背景 | String | `$page` | - |
| title | 页面标题，非空时自动渲染内置导航栏 | String | `''` | - |
| showBack | 是否显示内置导航栏的返回按钮（仅 title 非空时生效） | Boolean | `false` | `true` \| `false` |
| fillContent | 是否让内容区填满剩余高度而不使用内置滚动，用于内部自带滚动容器的全屏子页面 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollTo | `(top: number, left?: number)` | - | 滚动内容区到指定位置，`top` 为纵向滚动距离、`left` 为横向滚动距离（单位 px），Web 端以平滑动画滚动 |
| registerBacktop | `(update: (scrollTop: number) => void)` | - | 注册滚动位置更新回调，供 sn-backtop 组件联动显隐（一般无需手动调用） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 页面内容，默认放置在内置纵向滚动的 scroll-view 中（fillContent 为 true 时直接填满剩余高度） |

<DemoPhone name="sn-page" />
