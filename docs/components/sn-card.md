# Card  卡片

> [查看 sn-card 的 2.0 版本差异](/differences/components/sn-card)

## 基础用法

- 用于收纳展示一组相关信息，是页面中最常用的内容容器。
- `title` 设置卡片标题，默认插槽放置主体内容；`section` 开启标题左侧主题色章节标符。
- 头部区域仅在 `title` 不为空、使用 `title` 插槽、配置了头像（`avatar-config` 或 `avatar` 插槽）或使用 `header-extra` 插槽时才渲染。
- `footer` 插槽放置尾部内容，`action` 插槽放置操作栏内容（默认右对齐），有内容时才渲染。
- `border` 按"宽度 样式 颜色"以空格分隔解析，设为 `none` 可去除边框。

```vue
<template>
	<sn-card title="卡片标题">
		<sn-text>卡片内容，可以放置文本、图片、表单等任意内容。</sn-text>
	</sn-card>
</template>
```

**更多演示请下载 demo 查看**

## 头像卡片

通过 `avatar-config` 配置卡片头部头像，字段与 sn-avatar 组件属性对齐；也可使用 `avatar` 插槽完全自定义头像内容。

```vue
<template>
	<sn-card title="团队空间" :avatar-config="avatarConfig">
		<sn-text>团队成员 128 人。</sn-text>
	</sn-card>
</template>

<script lang="uts" setup>
import type { SnAvatarConfig } from '@/uni_modules/sinle-ui/core/types/index.uts'

const avatarConfig = {
	mode: 'text',
	text: 'UI',
	shape: 'circle',
	bgColor: '$info'
} as SnAvatarConfig
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 卡片标题 | String | `''` | - |
| titleColor | 卡片标题颜色 | String | `$title` | - |
| titleFont | 卡片标题字体 | String | `''` | - |
| titleSize | 卡片标题字体大小 | String \| Number | `$16` | - |
| titleLines | 卡片标题最大显示行数，超出截断 | Number | `-1` | - |
| avatarConfig | 头像参数配置，字段与 sn-avatar 组件属性对齐 | [[SnAvatarConfig]] | `{}` | - |
| bgColor | 卡片背景颜色 | String | `$front` | - |
| border | 卡片边框样式，设为 `none` 时去除边框 | String | `1px solid $line` | - |
| boxShadow | 卡片阴影 | String | `''` | - |
| margin | 卡片外边距 | String | `10px 0` | - |
| padding | 卡片内边距 | String \| Number | `$15` | - |
| borderRadius | 卡片圆角大小 | String \| Number | `$12` | - |
| section | 是否显示标题左侧章节标符 | Boolean | `false` | `true` \| `false` |
| sectionColor | 章节标符颜色 | String | `$primary` | - |
| customStyle | 自定义卡片根节点样式 | UTSJSONObject \| String | `''` | - |
| titleStyle | 自定义标题文本样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 标题文本外部类 | String | `''` | - |
| headerClass | 标题栏外部类 | String | `''` | - |
| headerStyle | 自定义标题栏样式 | UTSJSONObject \| String | `''` | - |
| footerClass | 尾部区域外部类 | String | `''` | - |
| footerStyle | 自定义尾部区域样式 | UTSJSONObject \| String | `''` | - |
| actionClass | 操作栏外部类 | String | `''` | - |
| actionStyle | 自定义操作栏样式 | UTSJSONObject \| String | `''` | - |

:::type-fields SnAvatarConfig

内置 `sn-avatar` 的组件（如列表项、发布卡）可通过 `avatarConfig` 属性统一配置头像参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| mode | [[SnAvatarMode]] | 否 | 显示模式，默认 `image` |
| src | String | 否 | 图片路径（`mode` 为 `image` 时生效） |
| text | String | 否 | 文本内容（`mode` 为 `text` 时生效） |
| icon | String | 否 | 图标名（`mode` 为 `icon` 时生效） |
| size | String \| Number | 否 | 尺寸大小 |
| shape | [[SnAvatarShape]] | 否 | 形状 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文本颜色 |
| iconColor | String | 否 | 图标颜色 |
| borderRadius | String \| Number | 否 | 圆角大小 |
| enablePreview | Boolean | 否 | 是否启用图片预览（`mode` 为 `image` 时生效） |

:::type-fields SnAvatarMode

头像显示模式：图片 / 文本 / 图标。

| 可选值 | 备注 |
| :--- | :--- |
| `image` | 图片 |
| `text` | 文本 |
| `icon` | 图标 |

:::
:::type-fields SnAvatarShape

头像形状：方形 / 圆形。

| 可选值 | 备注 |
| :--- | :--- |
| `square` | 方形 |
| `circle` | 圆形 |

:::

:::

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置卡片主体内容 |
| title | 替换默认的卡片标题文本 |
| avatar | 替换默认头像，可放置头像、LOGO 等 |
| header-extra | 标题栏扩展区域，可放置按钮、徽标等 |
| footer | 放置卡片尾部内容 |
| action | 放置卡片操作栏内容 |

<DemoPhone name="sn-card" />
