# sn-markdown

**旧版状态**：v1 为主插件内置的 `sn-markdown` 组件，基于 WebView + markdown-it 渲染，属性众多（`width` / `height` / `content` / `theme` / `linkify` / `typographer` / `html` / `xhtmlOut` / `breaks` / `quotes` / `langPrefix` / `sup` / `sub` / `container` / `emoji` / `customStyle`），页面放置大量组件时存在性能问题。

**删除结论**：v2 **已移除主插件内置的 `sn-markdown` 组件**，迁移为独立 UTS 插件组件 **`sn-e-markdown`**。

**删除原因**：

- WebView 渲染方案在中低端设备上初始化开销大，同一页面放置多个 markdown 组件时卡顿明显。
- 大量 markdown-it 解析开关（`linkify` / `typographer` / `html` / `xhtmlOut` / `breaks` / `quotes` / `langPrefix`）把底层解析库的配置直接暴露给使用者，属性负担重且实际很少调整。
- 组件体积与依赖较重，按需使用更合理，故从主插件剥离为独立扩展插件。

**替代方案**：

- 使用独立插件组件 **`sn-e-markdown`**，标签名由 `<sn-markdown>` 改为 `<sn-e-markdown>`，不再依赖 WebView（**Android 端改为 Markwon 原生 TextView 渲染**，性能问题消除）。
- 属性迁移要点：

| 旧版 `sn-markdown` | 替代方案 `sn-e-markdown` |
| ------------------ | ------------------------ |
| `content` | `text`（更名） |
| `width` / `height` | 已移除（默认占满宽度、高度自适应，用 `customStyle` 定制） |
| `theme` | 已移除，改用 `textColor` / `linkColor`（随主题色简写联动） |
| `linkify` / `typographer` / `html` / `xhtmlOut` / `breaks` / `quotes` / `langPrefix` | 已移除（按两端一致的固定规范解析） |
| `sup` / `sub` / `container` / `emoji` | 已移除（扩展语法默认内置启用） |
| — | 新增 `baseFontSize` / `lineHeight` |
| — | 新增 `linkclick` 事件（Android 端同时以系统浏览器打开） |
| `customStyle`（`UTSJSONObject`） | `customStyle`（兼容 `UTSJSONObject` 与 `String`）+ `customClass` |

- 新增内置能力：多语言代码高亮、GFM 任务列表、表格（含对齐）、脚注、数学公式、对齐容器等扩展语法（旧版仅 `sup` / `sub` / `container` / `emoji` 插件与 highlight.js）。

**差异明细**：完整对照请见 [`sn-e-markdown` 差异页](/differences/components/sn-e-markdown)。
