# Text  文本

> [查看 sn-text 的 2.0 版本差异](/differences/components/sn-text)

## 基础用法

- 文本组件，既支持通过 `text` 属性传值，也支持通过默认插槽放置内容（使用插槽时优先显示插槽内容）。
- 通过 `type` 设置文本类型（标题、正文、浅色文本及五种功能色），通过 `font-size`、`color`、`bold` 自定义外观。
- 通过 `lines` 限制最大显示行数，超出部分自动隐藏；`selectable` 使文本可长按选择复制。

```vue
<template>
	<sn-text text="故人西辞黄鹤楼，烟花三月下扬州。"></sn-text>
</template>
```

**更多演示请下载 demo 查看**

## 文本类型

根据场景使用不同类型的文本，更具识别度：

- `title`：标题（字号 16，主题标题色）
- `text`：正文（默认，字号 14，主题文本色）
- `text-light`：浅色辅助文本
- `primary` / `info` / `success` / `warning` / `error`：对应功能色文本

```vue
<template>
	<sn-text type="title" text="登鹳雀楼"></sn-text>
	<sn-text type="text-light" text="王之涣"></sn-text>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| type | 文本类型，决定字号与颜色 | TextType | `text` | `title` \| `text` \| `text-light` \| `primary` \| `info` \| `success` \| `warning` \| `error` |
| text | 文本内容 | String | - | - |
| fontSize | 字体大小，支持 `$` 简写；由 `type` 决定（title 为 `$16`、其余 `$14`） | String \| Number | - | - |
| color | 文本颜色，支持 `$` 功能色简写；由 `type` 决定 | String | - | - |
| bold | 是否加粗 | Boolean | `false` | `true` \| `false` |
| lines | 最大显示行数，超出隐藏；`0` 表示不限制 | Number | `0` | - |
| selectable | 是否可选择（长按复制） | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| textClass | 文本节点的外部样式类 | String | - | - |

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| default | 替换原有的 `text` 文本内容 |

<DemoPhone name="sn-text" />
