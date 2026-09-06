# Ellipsis  文本省略

> [查看 sn-ellipsis 的 2.0 版本差异](/differences/components/sn-ellipsis)

## 基础用法

- 多行文本省略组件：内容超出 `rows` 限制的行数时自动截断并显示省略号，内置隐藏测量节点自动计算可容纳的字符数。
- `content` 设置文本内容；`rows` 限制最大显示行数；`dots` 自定义省略符号；`position` 控制省略位置（尾部 / 头部 / 中间）。
- 设置 `expand-text` 后，内容被截断时自动显示"展开"操作按钮，展开后显示"收起"按钮（`collapse-text` 自定义，`show-collapse` 为 `false` 时不显示收起按钮）；展开 / 收起分别触发 `expand` / `collapse` 事件。
- 也可使用默认插槽放置富文本内容，此时省略以高度截断方式呈现，操作按钮显示在内容下方。
- 禁用（`disabled`）后操作按钮置灰且不可点击。

```vue
<template>
	<sn-ellipsis :content="longText" :rows="2" expand-text="展开" collapse-text="收起"
		@expand="onExpand" @collapse="onCollapse"></sn-ellipsis>
</template>

<script lang="uts" setup>
const longText = 'SinleUI 提供统一的组件样式、主题能力和跨平台交互。'
function onExpand(): void {
	console.log('已展开')
}
function onCollapse(): void {
	console.log('已收起')
}
</script>
```

**更多演示请下载 demo 查看**

## 自定义操作按钮

使用 `expand` / `collapse` 插槽可完全自定义展开与收起按钮；使用默认插槽可放置富文本并做截断预览。

```vue
<template>
	<sn-ellipsis :rows="2" :content="longText">
		<template #expand>
			<sn-icon name="arrow-down-s-line" :size="14"></sn-icon>
			<sn-text font-size="$13" color="$primary">查看全部</sn-text>
		</template>
		<template #collapse>
			<sn-icon name="arrow-up-s-line" :size="14"></sn-icon>
			<sn-text font-size="$13" color="$primary">收起</sn-text>
		</template>
	</sn-ellipsis>
</template>

<script lang="uts" setup>
const longText = '支持 48dB 混合主动降噪，通透模式智能过滤环境噪音。'
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| content | 文本内容 | String | `''` | - |
| rows | 最大显示行数 | String \| Number | `1` | - |
| dots | 省略符号 | String | `…` | - |
| position | 省略位置 | String | `end` | `end` \| `start` \| `middle` |
| expandText | 展开按钮文字，设置后内容被截断时显示展开按钮 | String | `''` | - |
| collapseText | 收起按钮文字，空时取 `expandText`，再空时为"收起" | String | `''` | - |
| showCollapse | 展开后是否显示收起按钮 | Boolean | `true` | `true` \| `false` |
| fontSize | 文本字号，空时为 14px × 字体乘数 | String \| Number | `''` | - |
| lineHeight | 行高：Number 小于 100 时按字号倍数、大于等于 100 时按 px 处理；String 支持 `$14`（乘字体乘数）、`22px`、`1.6`（字号倍数）；空时为字号的 1.6 倍 | String \| Number | `''` | - |
| color | 文本颜色，空时取主题文本色 | String | `''` | - |
| actionColor | 操作按钮颜色，空时取主题主色；禁用时为禁用文本色 | String | `''` | - |
| selectable | 文本是否可选中（蒸汽模式） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用操作按钮 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| textStyle | 自定义文本样式 | UTSJSONObject \| String | `''` | - |
| textClass | 文本外部类 | String | `''` | - |
| actionStyle | 自定义操作按钮样式 | UTSJSONObject \| String | `''` | - |
| actionClass | 操作按钮外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| expand | () => Void | 点击操作按钮展开内容时触发 |
| collapse | () => Void | 点击操作按钮收起内容时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义文本内容（可为富文本），此时截断以高度方式呈现、操作按钮显示在内容下方 |
| expand | 替换展开操作按钮 |
| collapse | 替换收起操作按钮 |

<DemoPhone name="sn-ellipsis" />
