# Actionsheet  操作菜单

> [查看 sn-actionsheet 的 2.0 版本差异](/differences/components/sn-actionsheet)

## 基础用法

- 从底部弹出的操作菜单，展示一组操作项供用户选择，点击操作项后自动关闭并触发 `click-item` 事件。
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 通过 `ref` 调用 `open` / `close` / `cancel` 方法控制显隐；`actions` 数组配置操作项，每项支持 `text`（文字）、`color`（文字颜色，支持 `$` 简写）、`disabled`（禁用）等字段。
- 默认带一个红色加粗的取消按钮，`show-cancel` 可关闭；`title` 为空时不显示标题与分隔线。
- 与 API `snu.showActionsheet` 的区别：组件需放置在页面中用 `ref` 调用，且受页面层级限制；API 为整页弹层，可覆盖导航栏 / tabbar 并拦截返回键。

```vue
<template>
	<sn-page>
		<sn-button text="打开操作菜单" type="primary" @click="open"></sn-button>
		<sn-actionsheet ref="sheetRef" title="选择操作" :actions="actions"
			@click-item="onClickItem"></sn-actionsheet>
	</sn-page>
</template>

<script lang="uts" setup>
import type { SnDataItem } from '@/uni_modules/sinle-ui/core/types/index.uts'

const sheetRef = ref<SnActionsheetComponentPublicInstance | null>(null)
const actions = ref<SnDataItem[]>([
	{ text: '选项一' },
	{ text: '选项二' },
	{ text: '选项三' }
])

function open(): void {
	sheetRef.value?.$callMethod('open')
}

function onClickItem(item: SnDataItem): void {
	console.log(item.text)
}
</script>
```

**更多演示请下载 demo 查看**

## 自定义操作项

操作项颜色支持 `$` 简写，可单独禁用某一项。

```vue
<template>
	<sn-actionsheet ref="sheetRef" title="分享到" :actions="actions"></sn-actionsheet>
</template>

<script lang="uts" setup>
import type { SnDataItem } from '@/uni_modules/sinle-ui/core/types/index.uts'

const actions = ref<SnDataItem[]>([
	{ text: '微信', color: '$success' },
	{ text: '朋友圈', color: '$success' },
	{ text: '删除', color: '$error' },
	{ text: '暂不可用', disabled: true }
])
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 操作菜单标题，为空则不显示标题与分隔线 | String | `''` | - |
| actions | 操作项数组，每项支持 `text`（文字）、`color`（文字颜色，支持 `$` 简写）、`disabled`（是否禁用）等字段 | Array\<[[SnDataItem@api]]\> | `[]` | - |
| showCancel | 是否显示底部取消按钮 | Boolean | `true` | `true` \| `false` |
| titleColor | 标题颜色，支持 `$` 简写 | String | `$title` | - |
| titleSize | 标题字号，支持 `$` 简写 | String \| Number | `$13` | - |
| bgColor | 面板背景颜色，支持 `$` 简写 | String | `$front` | - |
| cancelText | 取消按钮文字 | String | `取消` | - |
| maskOpacity | 遮罩透明度 | Number | `0.4` | - |
| aniTime | 动画时长（ms），支持 `$` 简写 | String \| Number | `$long` | - |
| preventBack | 是否阻止返回键关闭 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用，禁用后操作项与取消按钮均不可点击 | Boolean | `false` | `true` \| `false` |
| maskClose | 点击遮罩时是否关闭 | Boolean | `true` | `true` \| `false` |
| customStyle | 自定义面板样式，后应用，优先于 `panelStyle` | UTSJSONObject \| String | `''` | - |
| wrapStyle | 自定义外层容器样式 | UTSJSONObject \| String | `''` | - |
| wrapClass | 外层容器外部类 | String | `''` | - |
| panelStyle | 自定义面板样式 | UTSJSONObject \| String | `''` | - |
| panelClass | 面板外部类 | String | `''` | - |
| itemStyle | 自定义操作项样式（透传内部 sn-cell） | UTSJSONObject \| String | `''` | - |
| itemClass | 操作项外部类（透传内部 sn-cell） | String | `''` | - |
| itemBorder | 是否显示操作项之间的分隔线 | Boolean | `true` | `true` \| `false` |
| itemHoverStyle | 操作项按压时应用的样式 | UTSJSONObject \| String | `background-color: var(--sn-info)` | - |

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
| clickItem | (item: [[SnDataItem@api]]) => Void | 点击操作项时触发，参数为所选操作项，随后自动关闭 |
| cancel | () => Void | 点击取消按钮（或调用 `cancel` 方法）时触发，随后关闭 |
| clickoverlay | () => Void | 点击遮罩时触发 |
| beforeenter | () => Void | 入场动画开始前触发 |
| enter | () => Void | 入场动画开始时触发 |
| afterenter | () => Void | 入场动画结束后触发 |
| beforeleave | () => Void | 离场动画开始前触发 |
| leave | () => Void | 离场动画开始时触发 |
| afterleave | () => Void | 离场动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开操作菜单 |
| close | - | - | 关闭操作菜单 |
| cancel | - | - | 关闭操作菜单并触发 `cancel` 事件 |

<DemoPhone name="sn-actionsheet" />
