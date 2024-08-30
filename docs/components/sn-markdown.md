# Markdown 富文本

::: warning 注意

因基于 WebView 渲染，页面中不宜放置大量 Markdown 组件，会引起性能问题

:::

## 基础用法
- 基于 `markdown-it` 实现 Markdown 富文本渲染
- 支持暗黑模式，内置 highlight.js、上下标、Emoji、 自定义容器等插件，以及类 VitePress 的样式，帮助您更轻松地插入 Markdown 文本
- 支持双向同步渲染
```vue
<template>
	<sn-markdown content="# Hello World\n\nThis is a markdown content."></sn-markdown>
</template>
```
## 属性
| 参数        | 说明                                                                                                                   | 类型          | 默认值        | 可选值            |
| ----------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- | ------------- | ----------------- |
| width       | 组件宽度                                                                                                               | String        | `100%`        | -                 |
| height      | 组件高度                                                                                                               | String        | `100%`        | -                 |
| content     | Markdown 文本内容                                                                                                      | String        | -             | -                 |
| theme       | 主题风格                                                                                                               | String        | `light`       | `light` \| `dark` |
| linkify     | 是否识别并显示链接                                                                                                     | Boolean       | `false`       | `true` \| `false` |
| typographer | 启用一些语言中立的替换 + 引号美化                                                                                      | Boolean       | `false`       | `true` \| `false` |
| html        | 是否在源码中启用 HTML 标签                                                                                             | Boolean       | `false`       | `true` \| `false` |
| xhtmlOut    | 使用 '/' 来闭合单标签 （比如 \<br /\>）                                                                                | Boolean       | `false`       | `true` \| `false` |
| breaks      | 转换段落里的 '\n' 为 \<br\>。                                                                                          | Boolean       | `false`       | `true` \| `false` |
| quotes      | 引用符号，默认为中文引号                                                                                               | String        | `'“”‘’'`      | -                 |
| langPrefix  | 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。                                                              | String        | `'language-'` | -                 |
| sup         | 是否启用上标扩展功能。详见 [markdown-it-sup](https://github.com/markdown-it/markdown-it-sup)。                         | Boolean       | `true`        | `true` \| `false` |
| sub         | 是否启用下标扩展功能。详见 [markdown-it-sub](https://github.com/markdown-it/markdown-it-sub)。                         | Boolean       | `true`        | `true` \| `false` |
| container   | 是否启用容器扩展功能，如代码块、列表等。详见 [自定义容器。](https://vitepress.dev/zh/guide/markdown#custom-containers) | Boolean       | `true`        | `true` \| `false` |
| emoji       | 是否启用 Emoji 扩展功能。详见 [markdown-it-emoji](https://github.com/markdown-it/markdown-it-emoji)。                  | Boolean       | `true`        | `true` \| `false` |
| customStyle | 自定义容器样式                                                                                                         | UTSJSONObject | `{}`          | -                 |


<DemoPhone name="sn-markdown" />