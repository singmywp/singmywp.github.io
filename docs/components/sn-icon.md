# Icon  图标

> [查看 sn-icon 的 2.0 版本差异](/differences/components/sn-icon)

## 基础用法

- 字体图标组件，内置开源图标库 [Remix Icon](https://remixicon.com/) 全量图标，组件加载时自动注册字体。
- 通过 `name` 指定图标名称（即 Remix Icon 的图标名），通过 `size`、`color` 控制大小与颜色。

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
