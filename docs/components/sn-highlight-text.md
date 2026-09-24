# HighlightText  高亮文本

## 基础用法

- 高亮文本组件：将文本中匹配关键词的片段以主题主色高亮显示，常用于搜索结果、关键词标注等场景。
- `keywords` 支持 `String`（单个关键词）、`String[]`（多个关键词，自动优先匹配较长的关键词）与 `RegExp`（正则表达式）三种类型。
- `auto-escape` 默认开启，关键词中的正则特殊字符会自动转义（按字面量匹配）；`case-sensitive` 控制是否区分大小写，默认不区分。
- 点击高亮片段触发 `highlight-click` 事件，携带片段文本、序号与位置信息；普通文本不响应点击。
- `type` 提供与 sn-text 一致的预设文字样式（标题、正文、功能色等）；`lines` 限制最大显示行数；`selectable` 允许长按选中文本。
- 高亮片段颜色默认取主题主色，可通过 `highlight-style` / `highlight-class` 覆盖。

```vue
<template>
	<sn-highlight-text text="SinleUI 是面向 uni-app x 的轻量 UI 框架" keywords="uni-app x"></sn-highlight-text>
</template>
```

**更多演示请下载 demo 查看**

## 搜索场景

搜索词实时驱动正文高亮，配合 sn-search 使用。

```vue
<template>
	<sn-search v-model="keyword" placeholder="输入关键词"></sn-search>
	<sn-highlight-text :text="content" :keywords="keyword"></sn-highlight-text>
</template>

<script lang="uts" setup>
const keyword = ref<string>('组件')
const content = ref<string>('SinleUI 提供统一的组件样式、主题能力和跨平台交互。')
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 文本内容 | String | `''` | - |
| keywords | 高亮关键词，支持单个关键词、关键词数组或正则表达式 | String \| String[] \| RegExp | `''` | - |
| autoEscape | 是否自动转义关键词中的正则特殊字符（按字面量匹配） | Boolean | `true` | `true` \| `false` |
| caseSensitive | 是否区分大小写 | Boolean | `false` | `true` \| `false` |
| type | 预设文字样式类型，决定默认字号与颜色 | String | `text` | `title` \| `text` \| `text-light` \| `primary` \| `info` \| `success` \| `warning` \| `error` |
| fontSize | 文本字号，按 `type` 取默认字号（title 为 16、其余为 14）并乘字体乘数 | String \| Number | - | - |
| color | 文本颜色，按 `type` 取对应主题色 | String | - | - |
| bold | 是否加粗（font-weight: 600） | Boolean | `false` | `true` \| `false` |
| lines | 最大显示行数，`0` 不限制 | Number | `0` | - |
| selectable | 文本是否可选中（蒸汽模式） | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |
| textStyle | 自定义普通文本片段样式 | UTSJSONObject \| String | `''` | - |
| textClass | 普通文本片段外部类 | String | `''` | - |
| highlightStyle | 自定义高亮片段样式 | UTSJSONObject \| String | `''` | - |
| highlightClass | 高亮片段外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| highlight-click | (detail: HighlightClickDetail) => Void | 点击高亮片段时触发。detail 包含：`text`（片段文本）、`index`（第几个高亮片段，从 0 开始）、`start` / `end`（在原文中的起止位置） |

<DemoPhone name="sn-highlight-text" />
