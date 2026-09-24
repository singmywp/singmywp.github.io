# sn-e-svg

**旧版状态**：v1 以独立扩展插件形式提供 `sn-e-svg` 组件，用于在页面中渲染 SVG 图形（插件 `src` 或内容），弥补当时官方组件对 SVG 支持不足的问题。

**删除结论**：v2 **已移除** `sn-e-svg` 插件（新版 `uni_modules` 中已不再包含该插件）。

**删除原因**：

- 官方内置 `<image>` 组件已原生支持 `svg` 格式，插件存在的必要性消失。
- 额外的独立插件意味着额外的体积与依赖维护成本，官方能力可覆盖时应优先使用官方组件。
- 框架 2.0 的定位是「简洁、轻量」，冗余插件被一并清理。

**替代方案**：

- 直接使用官方内置 `<image>` 组件加载 svg：

```vue
<template>
	<image src="/static/icon.svg" style="width: 24px; height: 24px;"></image>
</template>
```

- 需要按主题色动态着色时，可将 svg 色彩占位改为 CSS 变量引用，或改用 `sn-icon` 的 svg path 能力（`sn-icon` 的 `name` 支持传入 svg path d 值）。
- 需要 `sn-e-svg` 类的高斯模糊等周边扩展能力时，参见 [`sn-e-blurview` 差异页](/differences/components/sn-e-blurview)。
