# Tabbar 底部导航栏

> [查看 sn-tabbar 的 2.0 版本差异](/differences/components/sn-tabbar)

## 基础用法
- 底部导航栏，支持字体图标、图片、文字与角标，样式自由定制
- 由 sn-tabbar-item 子项构成，通过 data（SnTabbarItem）配置自动渲染，无需手动引入子项组件
- 支持子项拦截鉴权（interceptor）与角标（badge）
- 支持固定底部（fixed）与内嵌（fixed=false）两种模式，固定模式自动预留底部安全区高度
- 支持 tab1~tab10 子页面插槽，最多 10 项，索引从 1 开始

```vue
<template>
	<sn-tabbar :data="data"></sn-tabbar>
</template>
```

**更多演示请下载 demo 查看**

## 子页面与占位高度

`fixed` 模式使用固定定位，组件不会自动占位，需通过 `v-model:height` 拿到实际高度自行放置占位（如 sn-gap），占位变量禁止手动修改。

```vue
<template>
	<sn-gap :height="tabbarHeight"></sn-gap>
	<sn-tabbar v-model:height="tabbarHeight" :data="data"></sn-tabbar>
</template>

<script setup>
// 底部导航栏占位高度，由组件输出，禁止手动修改
const tabbarHeight = ref('0px')
// 底部导航栏数据，与插槽一 一匹配
const data = [...] as SnTabbarItem[]
</script>
```

## 数据项 SnTabbarItem

`data` 为 SnTabbarItem[]，字段如下：

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| text | 文本内容 | String |
| icon | 图标名 | String |
| activeIcon | 选中状态的图标名，缺省时沿用 icon | String |
| activeText | 选中状态的文本，缺省时沿用 text | String |
| image | 图片地址，设置后替代图标显示 | String |
| activeImage | 选中状态的图片地址，缺省时沿用 image | String |
| interceptor | 切换拦截函数，返回 false 阻止本次切换 | (() => Boolean) |
| badge | 角标配置（value/max/size/offset/mode/text/showZero/textColor/bgColor） | [[SnBadgeParams]] |

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

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:height | 底部导航栏实际高度（fixed 模式含安全区高度），供外部占位 | String | `''` | - |
| data | 底部导航栏数据，每一项与插槽一 一匹配，最多 10 项 | Array\\<[[SnTabbarItem]]\\> | `[]` | - |
| index | 首次加载时显示的页面索引（从 1 开始） | Number | `1` | - |
| fixed | 是否固定底部 | Boolean | `true` | `true` \| `false` |
| showPages | 是否显示子页面插槽内容 | Boolean | `true` | `true` \| `false` |
| imageSize | 子项图片大小（`$` 简写乘字体乘数） | String \| Number | `''` | - |
| padding | 导航栏内边距（`$` 简写乘内边距乘数） | String \| Number | `'$10'` | - |
| margin | 导航栏外边距 | String \| Number | `'0px'` | - |
| bgColor | 导航栏背景颜色，为空时取主题 `$front` | String | `''` | - |
| itemBorderRadius | 子项圆角大小，不传时组件根据导航栏圆角自动计算最合适值 | String \| Number | `''` | - |
| itemPadding | 子项内边距 | String \| Number | `'0px'` | - |
| itemSpacing | 各子项之间的间距 | String \| Number | `'0px'` | - |
| itemBgColor | 子项背景颜色，为空时为透明 | String | `''` | - |
| itemActiveBgColor | 选中子项的背景颜色，为空时为透明 | String | `''` | - |
| border | 导航栏边框，不传时显示 1px 顶部分隔线（`--sn-line`） | String | `''` | - |
| borderRadius | 导航栏圆角大小 | String \| Number | `'0'` | - |
| textColor | 子项文本颜色，为空时取主题 `$text` | String | `''` | - |
| textSize | 子项文本大小，为空时取 `$11` | String \| Number | `''` | - |
| activeTextColor | 选中子项文本颜色，为空时取主题 `$primary` | String | `''` | - |
| iconColor | 子项图标颜色，为空时取主题 `$text` | String | `''` | - |
| iconSize | 子项图标大小，为空时取 `$22` | String \| Number | `''` | - |
| activeIconColor | 选中子项图标颜色，为空时取主题 `$primary` | String | `''` | - |
| disabled | 是否禁用整个导航栏 | Boolean | `false` | `true` \| `false` |
| hoverStyle | 子项按压态样式 | UTSJSONObject \| String | `'background: var(--sn-info);'` | - |
| hoverStartTime | 按压生效延迟（单位 ms） | Number | `50` | - |
| hoverStayTime | 按压保持时长（单位 ms） | Number | `0` | - |
| hoverTransTime | 按压过渡时长（单位 ms，`$` 简写乘动画乘数） | String \| Number | `''` | - |
| hoverStopPropagation | 按压事件是否阻止冒泡 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义导航栏样式 | UTSJSONObject \| String | `''` | - |
| customContainStyle | 自定义容器样式（包含子页面与底部导航栏） | UTSJSONObject \| String | `''` | - |

:::type-fields SnTabbarItem

`sn-tabbar` 标签栏项数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 文本 |
| icon | String | 否 | 图标名 |
| image | String | 否 | 图片路径（优先于 icon） |
| activeIcon | String | 否 | 选中态图标名 |
| activeText | String | 否 | 选中态文本 |
| activeImage | String | 否 | 选中态图片路径 |
| interceptor | () => boolean | 否 | 切换拦截器，返回 `false` 阻止切换 |
| badge | [[SnBadgeParams]] \| null | 否 | 徽标配置 |

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

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (index: number) => Void | 页面切换时触发，index 从 1 开始 |
| heightchange | (height: number) => Void | 底部导航栏实际高度变化时触发（fixed 模式含安全区高度） |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| changeToIndex | `(index: number)` | - | 切换到指定索引的页面，索引值即为插槽名称（如 #tab1 的索引为 1） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| tab1 ~ tab10 | 第 n 个子页面，须与 data 项一 一对应 |

<DemoPhone name="sn-tabbar" />
