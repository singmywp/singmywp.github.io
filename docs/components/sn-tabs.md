# Tabs 标签页

> [查看 sn-tabs 的 2.0 版本差异](/differences/components/sn-tabs)

## 基础用法
- 标签页组件，可切换不同标签内容，一般用于顶部导航
- 支持滚动（scrollable）与滑动式（swipe）/ 推压式（push）指示线动画
- 支持子项单独禁用与徽标
- 支持 left / right 插槽

```vue
<template>
	<sn-tabs v-model="current" :data="tabs"></sn-tabs>
</template>
```

**更多演示请下载 demo 查看**

## 滚动与动画

`scrollable` 开启后标签可横向滚动，子项自动计算宽度并将选中项居中；`mode` 选择指示线动画方式：`swipe` 滑动式、`push` 推压式。

```vue
<template>
	<sn-tabs v-model="current" scrollable mode="push" :data="tabs"></sn-tabs>
</template>
```

## 徽标

data 项通过 `badgeConfig` 配置徽标（value/max/size/offset/mode/text/showZero/textColor/bgColor），支持 number/text/dot 三种模式。

```vue
<template>
	<sn-tabs v-model="current" :data="tabs"></sn-tabs>
</template>

<script setup>
const tabs = [
	{ id: 't1', text: '选项1' },
	{ id: 't2', text: '选项2', badgeConfig: { value: 6 } },
	{ id: 't3', text: '选项3', disabled: true }
] as SnTabParams[]
</script>
```

## 数据项 SnTabParams

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| text | 标签文本（必需） | String |
| id | 标签唯一标识（必需，用于指示线定位与滚动） | String |
| disabled | 是否禁用该标签 | Boolean |
| badgeConfig | 徽标配置 | [[SnBadgeParams]] |

:::type-fields SnBadgeParams

内置 `sn-badge` 的组件可通过 `badgeConfig` 属性配置徽标参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | Number | 否 | 显示的值（仅 number 模式） |
| max | Number | 否 | 最大值，超过显示 `max+` |
| size | String | 否 | 大小 |
| offset | String | 否 | 偏移量（transform） |
| mode | `'number'` \| `'text'` \| `'dot'` | 否 | 模式 |
| text | String | 否 | 文本内容（仅 text 模式） |
| showZero | Boolean | 否 | 是否显示 0 |
| textColor | String | 否 | 文字颜色 |
| bgColor | String | 否 | 背景颜色 |

:::

类型中还声明了 icon、checked、showBadge 字段，当前渲染未使用。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前激活的标签页索引 | Number | `0` | - |
| scrollable | 标签是否可滚动 | Boolean | `false` | `true` \| `false` |
| data | 标签页数据数组 | Array<[[SnTabParams]]> | `[]` | - |
| mode | 指示线动画模式 | String | `'swipe'` | `swipe` \| `push` |
| width | 标签宽度 | String | `'100%'` | - |
| height | 标签高度 | String | `'40px'` | - |
| bgColor | 标签背景颜色 | String | `$front` | - |
| textColor | 标签文本颜色 | String | `$title` | - |
| textSize | 标签文本大小 | String \| Number | `$14` | - |
| borderRadius | 标签圆角 | String \| Number | `$12` | - |
| disabledTextColor | 禁用标签文本颜色 | String | `$disabledText` | - |
| activeTextColor | 选中标签文本颜色 | String | `$primary` | - |
| itemPadding | 标签内边距（可滚动时作为左右内边距） | String | `'12px'` | - |
| lineColor | 指示线颜色 | String | `$primary` | - |
| lineWidth | 指示线宽度，取标签宽度的 60% | String | - | - |
| lineHeight | 指示线高度 | String | `'2px'` | - |
| aniTime | 标签及指示线动画时长（单位 ms，`$` 简写乘动画乘数） | String \| Number | `$normal` | - |
| itemStyle | 选中标签样式 | UTSJSONObject \| String | `''` | - |
| itemClass | 选中标签外部样式类 | String | `''` | - |
| textStyle | 标签文本样式 | UTSJSONObject \| String | `''` | - |
| textClass | 标签文本外部样式类 | String | `''` | - |
| activeItemStyle | 非选中标签样式 | UTSJSONObject \| String | `''` | - |
| activeItemClass | 非选中标签外部样式类 | String | `''` | - |
| customStyle | 自定义样式 | UTSJSONObject \| String | `''` | - |

:::type-fields SnTabParams

`sn-tabs` 标签项数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 是 | 标签文本 |
| icon | String | 否 | 图标名 |
| id | String | 是 | 标签唯一 id |
| disabled | Boolean | 否 | 是否禁用 |
| checked | Boolean | 否 | 是否选中 |
| showBadge | Boolean | 否 | 是否显示徽标 |
| badgeConfig | [[SnBadgeParams]] \| null | 否 | 徽标配置 |

:::type-fields SnBadgeParams

内置 `sn-badge` 的组件可通过 `badgeConfig` 属性配置徽标参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | Number | 否 | 显示的值（仅 number 模式） |
| max | Number | 否 | 最大值，超过显示 `max+` |
| size | String | 否 | 大小 |
| offset | String | 否 | 偏移量（transform） |
| mode | `'number'` \| `'text'` \| `'dot'` | 否 | 模式 |
| text | String | 否 | 文本内容（仅 text 模式） |
| showZero | Boolean | 否 | 是否显示 0 |
| textColor | String | 否 | 文字颜色 |
| bgColor | String | 否 | 背景颜色 |

:::

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (index: number) => Void | 标签页切换时触发，index 为标签页索引 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| left | 在标签页左侧放置内容 |
| right | 在标签页右侧放置内容 |

<DemoPhone name="sn-tabs" />
