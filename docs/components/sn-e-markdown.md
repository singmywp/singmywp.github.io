# Markdown  富文本

> [查看 sn-e-markdown 的 2.0 版本差异](/differences/components/sn-e-markdown)

## 基础用法

- 高性能 Markdown 渲染组件（v2 起从主插件的基础组件 sn-markdown 迁移为独立扩展插件 sn-e-markdown）：
  - Web 端使用 UTS 移植的 markdown-it 解析引擎（含插件机制）渲染为 HTML；
  - Android 端使用 Markwon 原生库渲染为原生 TextView（链接可点击）；
  - 两端语法保持一致。
- 支持基础 Markdown：标题（ATX / Setext）、段落、强调（粗体 / 斜体 / 粗斜体）、删除线、有序 / 无序 / 嵌套列表、链接（行内 / 引用式 / 自动链接）、图片、行内代码、代码块、表格（含对齐）、引用（含嵌套）、分割线、转义、硬换行。
- 内置扩展语法：上标 `x^2^`、下标 `H~2~O`、标记 `==高亮==`、自定义容器 `::: tip 标题`（支持嵌套）、对齐 `::: center`（left / center / right / justify）、脚注 `[^label]` 与 `^[行内脚注]`、数学公式 `$e^{i\pi}$` / `$$公式$$`（KaTeX 语法，轻量等宽渲染）、GFM 任务列表 `- [ ]` / `- [x]`、Emoji（直接 Unicode 与 `:smile:` 等常见短码自动替换）以及多语言代码高亮（js / ts / uts / uvue / ucss / html / xml / vue / svg / css / scss / less / json / yaml / python / java / kotlin / c / cpp / go / bash / php / powershell / rust / swift / lua / c# / r / perl / objective-c / sql）。

```vue
<template>
	<sn-e-markdown :text="md"></sn-e-markdown>
</template>
<script lang="uts" setup>
const md = ref<string>('# Hello World\n\nThis is **markdown** content.')
</script>
```

**更多演示请下载 demo 查看**

## 自定义样式

通过 `baseFontSize` 控制基础字号（标题、代码等按比例缩放），`lineHeight` 控制行高倍数；`textColor` 与 `linkColor` 支持 `$primary`、`$text` 主题色简写及 `var(--sn-*)` 写法，留空时分别使用主题文字色与主题主色。

```vue
<template>
	<sn-e-markdown :text="md" :base-font-size="16" :line-height="1.8" text-color="$text" link-color="$primary"></sn-e-markdown>
</template>
```

## 链接点击事件

点击 Markdown 中的链接时触发 `linkclick` 事件（Android 端同时会用系统浏览器打开链接）。

```vue
<template>
	<sn-e-markdown :text="md" @linkclick="onLinkClick"></sn-e-markdown>
</template>
<script lang="uts" setup>
import type { SnMarkdownLinkEvent } from '@/uni_modules/sn-e-markdown/index.uts'
function onLinkClick(e: SnMarkdownLinkEvent): void {
	console.log(e.href)
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | Markdown 源文本 | String | `''` | - |
| baseFontSize | 基础字号（px），标题 / 代码等按比例缩放 | String \| Number | `15` | - |
| textColor | 正文颜色，支持 `$主题色` 简写 | String | `$text` | - |
| linkColor | 链接颜色，支持 `$主题色` 简写 | String | `$primary` | - |
| lineHeight | 行高倍数 | String \| Number | `1.6` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| linkclick | (value: SnMarkdownLinkEvent) => Void | 点击 Markdown 链接时触发，`value.href` 为链接地址 |

## 类型

- `SnMarkdownLinkEvent`：`{ href: string }`，链接点击事件回调参数。
- `SnMarkdownOptions`：渲染配置（`text`、`baseFontSize`、`textColor`、`linkColor`、`lineHeight`），一般由组件内部使用。

> 说明：Android 端自定义容器以 Blockquote 风格呈现、对齐使用原生对齐 Span；Web 端输出更完整的样式。数学公式为轻量渲染，如需 KaTeX / JLaTeXMath 深度渲染可自行接入。

<DemoPhone name="sn-e-markdown" />
