# Icon  图标

> [查看 sn-icon 的 2.0 版本差异](/differences/components/sn-icon)

## 基础用法

字体图标组件，内置开源图标库 Remix Icon 全量图标，组件加载时自动注册字体。

- 通过图标名指定要显示的图标
- 图标大小与颜色可配置

::: info 根节点默认拍平

`sn-icon` 根节点默认拍平以提升渲染性能，因此不支持事件与部分样式；需要时请外裹 `view`，详见 [拍平元素不支持的功能或样式](/components/flatten)。

:::

```vue
<template>
	<sn-icon name="home-line"></sn-icon>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| name | 图标名称（Remix Icon 图标名，不需要前缀） | String | - | 参考 [Remix Icon](https://remixicon.com/) |
| size | 图标大小，支持 `$` 简写 | String \| Number | `$16` | - |
| color | 图标颜色，支持 `$` 功能色简写 | String | `var(--sn-text)` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| iconClass | 根节点的外部样式类 | String | - | - |

<DemoPhone name="sn-icon" />
