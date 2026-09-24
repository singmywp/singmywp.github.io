# sn-e-markdown

**旧版状态**：v1 为基于 WebView 的 markdown-it 渲染组件，属性众多（width / height / content / theme / linkify / typographer / html / xhtmlOut / breaks / quotes / langPrefix / sup / sub / container / emoji / customStyle），页面放置大量组件时有性能问题。

**差异明细**：

- 更名 / 迁移：v1 基础组件 `sn-markdown` 迁移为独立 UTS 扩展插件组件 `sn-e-markdown`，标签名由 `<sn-markdown>` 改为 `<sn-e-markdown>`；不再依赖 WebView 渲染，性能问题随之消除。
- 移除：`width`、`height` 属性（组件默认占满宽度，高度自适应，可用 `customStyle` 定制）。
- 更名：`content` 属性更名为 `text`。
- 移除：markdown-it 解析开关类属性 `linkify`、`typographer`、`html`、`xhtmlOut`、`breaks`、`quotes`、`langPrefix`（新引擎按两端一致的固定规范解析）。
- 移除：扩展开关类属性 `sup`、`sub`、`container`、`emoji`（上标 / 下标 / 自定义容器 / Emoji 扩展语法默认内置启用）。
- 移除：`theme` 属性（颜色改为 `textColor` / `linkColor`，随 SinleUI 主题色简写联动）。
- 新增：`baseFontSize`（基础字号，标题 / 代码按比例缩放）、`lineHeight`（行高倍数）、`textColor`、`linkColor` 属性。
- 新增：`linkclick` 链接点击事件（回调参数 `SnMarkdownLinkEvent { href }`；Android 端点击链接同时以系统浏览器打开）。
- 新增：Android 端原生渲染（Markwon 原生 TextView），旧版仅 Web/WebView 可用。
- 新增：内置多语言代码高亮、GFM 任务列表、表格（含对齐）、脚注、数学公式、对齐容器等扩展语法（旧版仅 sup / sub / container / emoji 插件与 highlight.js）。
- 更名：`customStyle` 类型兼容 `UTSJSONObject | String`；新增 `customClass` 外部样式类。
