# Tabbar 底部导航栏

> [查看 sn-tabbar 的 2.0 版本差异](/differences/components/sn-tabbar)

## 基础用法

底部导航栏，用于在页面底部切换子页面，支持文字、字体图标与图片子项，样式可自由定制。

- 子项由数据项配置自动渲染，无需手动引入子项组件，支持拦截鉴权与角标
- 支持固定底部与内嵌两种模式，可开启毛玻璃背景，图标与文字保持清晰
- 为每个子项提供子页面插槽，最多 10 项

```vue
<template>
	<sn-tabbar :data="data"></sn-tabbar>
</template>
```

**更多演示请下载 demo 查看**

## 实现原理

固定底部（`fixed`）与内嵌（`fixed=false`）模式共用一个主体容器，定位、背景、边框、圆角与模糊均作用于该容器。

## 子页面与占位高度

推荐给固定 Tabbar 设置 `tabbar-key="home"`，子页面调用 [useTabbarHeights](/api/hooks/use-tabbar-heights)，通过 `tabbarHeights['home']` 读取实际高度。每个 `sn-page` 的登记表独立，不同页面同名 key 不冲突；同页不同 Tabbar 需使用不同 key。默认 key 为空，不登记。

**占位必须放在子页面 scroll-view 的滚动内容末尾，而不是子组件外侧或页面根布局的底部。** 外侧占位会缩短滚动视口，使 Tabbar 背后一直是空白，无法采样滚动内容形成毛玻璃。首页三个子页面已采用滚动内容末尾占位，首页不再保留外层 `tabbar-safe`。

`fixed` 模式使用固定定位，组件不会自动占位或添加安全区 padding。通过 `v-model:height` 拿到主体实际高度自行放置占位（如 sn-gap），不要手动修改组件输出的高度；该高度包含主体内边距和边框，但不包含外边距、底部偏移或额外安全距离。需要安全距离时，可通过 `customStyle` 设置 `bottom`，并在使用方占位高度中另加安全距离与底部外边距。

`tab1` ~ `tab10` 的页面容器独立于导航栏主体，不受主体的固定定位或背景模糊影响。首次切换到某页才挂载，后续切换保留状态；`showPages=false` 时不渲染子页面。组件不为这些页面自动添加底部间距，需在页面滚动内容末尾自行处理。

```vue
<template>
	<sn-page fill-content>
		<scroll-view direction="vertical" class="page-scroll">
			<text>页面内容</text>
			<sn-gap :height="tabbarHeight"></sn-gap>
		</scroll-view>
		<sn-tabbar v-model:height="tabbarHeight" :data="data"></sn-tabbar>
	</sn-page>
</template>

<script lang="ts" setup>
import type { SnTabbarItem } from '@/uni_modules/sinle-ui'
const tabbarHeight = ref('0px')
const data: SnTabbarItem[] = [{ icon: 'home-5-line', text: '首页' }]
</script>

<style lang="scss">
.page-scroll {
	flex: 1;
	flex-direction: column;
}
</style>
```

## 毛玻璃背景

设置 `blur` 后，只在主体容器上设置 `backdrop-filter: blur(...)`，Web 同时设置 `-webkit-backdrop-filter`。关闭时设置 `none`，不创建额外背景层或原生模糊层。

未传 `bgColor` 时使用主题 `front` 色，启用模糊后由 `blurOpacity` 控制背景透明度。显式传入 `bgColor` 时保留该颜色自身的透明度，例如 `rgba(255, 255, 255, 0.58)`；不透明背景会遮住模糊效果。不会通过容器 `opacity` 降低图标和文字的透明度。

Demo 首页 `pages/index/index.uvue` 的顶部与底部导航栏均使用 `blur=true`、`blurRadius=20`、`blurOpacity=0.68`，未显式设置背景色以便随亮暗主题切换；安全距离与占位由首页管理。

```vue
<sn-tabbar :data="data" :blur="true" :blur-radius="18" :blur-opacity="0.58" />
<sn-tabbar :data="data" :fixed="false" :blur="true"
	bg-color="rgba(255, 255, 255, 0.58)" border-radius="$18" />
```

App 毛玻璃依赖蒸汽模式的 `backdrop-filter` 支持，不再提供 VDOM 原生模糊层回退。固定模式和内嵌模式均保留 `padding` 指定的内部边距，默认 `$10`，包括首尾子项到容器边缘的距离；不会用空子项来制造边距。

## 数据项 SnTabbarItem

`data` 为 SnTabbarItem[]，字段如下：

:::type-fields SnTabbarItem

`sn-tabbar` 标签栏项数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 文本内容 |
| icon | String | 否 | 图标名 |
| activeIcon | String | 否 | 选中状态的图标名，缺省时沿用 `icon` |
| activeText | String | 否 | 选中状态的文本，缺省时沿用 `text` |
| image | String | 否 | 图片地址，设置后替代图标显示 |
| activeImage | String | 否 | 选中状态的图片地址，缺省时沿用 `image` |
| interceptor | (() => Boolean) | 否 | 切换拦截函数，返回 `false` 阻止本次切换 |
| badge | [[SnBadgeParams]] | 否 | 角标配置 |

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

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model:height | 导航栏主体实际高度，供外部占位，不含外边距、底部偏移或自动安全区 | String | `''` | - |
| data | 底部导航栏数据，每一项与插槽一 一匹配，最多 10 项 | Array<[[SnTabbarItem]]> | `[]` | - |
| index | 首次加载时显示的页面索引（从 1 开始） | Number | `1` | - |
| fixed | 是否固定底部 | Boolean | `true` | `true` \| `false` |
| tabbarKey | 固定 Tabbar 高度登记键；在最近的 sn-page 作用域内唯一，空值不登记，子页面通过 useTabbarHeights 读取 | String | `''` | - |
| showPages | 是否显示子页面插槽内容 | Boolean | `true` | `true` \| `false` |
| imageSize | 子项图片大小（`$` 简写乘字体乘数） | String \| Number | `''` | - |
| padding | 导航栏内边距（`$` 简写乘内边距乘数） | String \| Number | `'$10'` | - |
| margin | 导航栏外边距 | String \| Number | `'0px'` | - |
| bgColor | 导航栏背景颜色 | String | `$front` | - |
| blur | 是否启用背景高斯模糊 | Boolean | `false` | `true` \| `false` |
| blurRadius | 背景高斯模糊半径（单位 px） | Number | `15` | - |
| blurOpacity | 未传 bgColor 时的模糊背景透明度，取值 0~1，不影响图标和文字 | Number | `0.78` | - |
| itemBorderRadius | 子项圆角大小，组件根据导航栏圆角自动计算最合适值 | String \| Number | - | - |
| itemPadding | 子项内边距，透传到 sn-tabbar-item 的 padding，支持 `$` 简写 | String \| Number | `'$5 0'` | - |
| itemSpacing | 各子项之间的间距 | String \| Number | `'0px'` | - |
| itemBgColor | 子项背景颜色 | String | `var(--sn-transparent)` | - |
| itemActiveBgColor | 选中子项的背景颜色 | String | `var(--sn-transparent)` | - |
| border | 导航栏边框 | String | `1px solid var(--sn-line)` | - |
| borderRadius | 导航栏圆角大小 | String \| Number | `'0'` | - |
| textColor | 子项文本颜色 | String | `$text` | - |
| textSize | 子项文本大小 | String \| Number | `$11` | - |
| activeTextColor | 选中子项文本颜色 | String | `$primary` | - |
| iconColor | 子项图标颜色 | String | `$text` | - |
| iconSize | 子项图标大小 | String \| Number | `$22` | - |
| activeIconColor | 选中子项图标颜色 | String | `$primary` | - |
| disabled | 是否禁用整个导航栏 | Boolean | `false` | `true` \| `false` |
| hoverStyle | 子项按压态样式 | UTSJSONObject \| String | `'background: var(--sn-info);'` | - |
| hoverStartTime | 按压生效延迟（单位 ms） | Number | `50` | - |
| hoverStayTime | 按压保持时长（单位 ms） | Number | `0` | - |
| hoverTransTime | 按压过渡时长（单位 ms，`$` 简写乘动画乘数） | String \| Number | `''` | - |
| hoverStopPropagation | 按压事件是否阻止冒泡 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义导航栏样式 | UTSJSONObject \| String | `''` | - |
| customClass | 导航栏主体外部样式类，通过 custom-class 传入 | String | `''` | - |
| customContainStyle | 子页面容器样式；未提供子页面插槽时，兼容旧调用合并到主体，后置 customStyle 优先 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (index: number) => Void | 页面切换时触发，index 从 1 开始 |
| heightchange | (height: number) => Void | 导航栏主体实际高度变化时触发，不包含外边距、底部偏移或自动安全区 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| changeToIndex | `(index: number)` | - | 切换到指定索引的页面，索引值即为插槽名称（如 #tab1 的索引为 1） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| tab1 ~ tab10 | 第 n 个子页面，须与 data 项一 一对应 |

## sn-tabbar-item 属性 <Badge type="warning" text="内部使用" />

`sn-tabbar` 的子项组件，由 `data` 自动渲染，无需手动引入；下列属性均由 `sn-tabbar` 按组配置逐项下发。

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| data | 该项的数据对象 | [SnTabbarItem](/api/types/component#sntabbaritem) | `null` | - |
| index | 该项在 `data` 中的索引 | Number | `0` | - |
| active | 是否为当前选中项 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用该项（禁用后不触发 click） | Boolean | `false` | `true` \| `false` |
| isFirst | 是否为第一项（首尾圆角与间距处理用） | Boolean | `false` | `true` \| `false` |
| isLast | 是否为最后一项（首尾圆角与间距处理用） | Boolean | `false` | `true` \| `false` |
| padding | 子项内边距，默认上下 5 × paddingFactor px、左右 0，支持 `$` 简写 | String \| Number | `'$5 0'` | - |
| itemPadding | 兼容旧调用的子项内边距，非空时优先于 padding，支持 `$` 简写 | String \| Number | `''` | - |
| itemBorderRadius | 子项圆角（支持 `$` 简写） | String | `0px` | - |
| itemBgColor | 子项背景颜色 | String | `''` | - |
| itemActiveBgColor | 选中子项背景颜色 | String | `''` | - |
| textColor | 子项文本颜色 | String | `''` | - |
| activeTextColor | 选中子项文本颜色 | String | `''` | - |
| textSize | 子项文本大小（支持 `$` 简写） | String | `''` | - |
| iconColor | 子项图标颜色 | String | `''` | - |
| activeIconColor | 选中子项图标颜色 | String | `''` | - |
| iconSize | 子项图标大小（支持 `$` 简写） | String | `''` | - |
| imageSize | 子项图片大小（`data` 项设置 `image` 时生效，支持 `$` 简写） | String | `35px` | - |
| itemSpacingHalf | 子项间距的一半（首尾对齐用，支持 `$` 简写） | String | `0px` | - |
| hoverStyle | 子项按压态样式 | UTSJSONObject \| String | `background: var(--sn-info);` | - |
| hoverStartTime | 按压生效延迟（单位 ms） | Number | `50` | - |
| hoverStayTime | 按压保持时长（单位 ms） | Number | `0` | - |
| hoverTransTime | 按压过渡时长（单位 ms，`$` 简写乘动画乘数） | String \| Number | `''` | - |
| hoverStopPropagation | 按压事件是否阻止冒泡 | Boolean | `false` | `true` \| `false` |

## sn-tabbar-item 事件 <Badge type="warning" text="内部使用" />

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (index: number) => Void | 点击子项时触发，`index` 为该项在 `data` 中的索引（禁用项不触发） |

<DemoPhone name="sn-tabbar" />
