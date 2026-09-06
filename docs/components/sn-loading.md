# Loading  加载

> [查看 sn-loading 的 2.0 版本差异](/differences/components/sn-loading)

## 基础用法

- 用于显示加载中的状态。
- 支持两种模式：`native` 原生模式使用官方内置 loading 组件（GPU 加速渲染，不受主线程繁忙影响），`icon` 图标模式为旋转图标。
- 图标与文本默认水平排列，可通过 `vertical` 改为垂直排列。

```vue
<template>
	<sn-loading mode="icon" text="加载中..."></sn-loading>
</template>
```

**更多演示请下载 demo 查看**

## 更换图标

`icon` 模式下可通过 `icon` 属性自由更换旋转图标。

```vue
<template>
	<sn-loading mode="icon" icon="loader-2-line"></sn-loading>
	<sn-loading mode="icon" icon="refresh-line"></sn-loading>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 加载模式 | String | `native` | `native` \| `icon` |
| text | 加载文本内容，为空时不显示 | String | - | - |
| icon | icon 模式下的图标名称 | String | `loader-4-line` | - |
| iconColor | 加载图标颜色，默认主题主色 | String | - | - |
| iconSize | 加载图标大小，默认 `$24` | String \| Number | - | - |
| textColor | 文本颜色，默认主题深主色 | String | - | - |
| textSize | 文本字体大小，默认 `$16` | String \| Number | - | - |
| vertical | 图标与文本是否垂直排列 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| loadingStyle | 自定义加载指示器节点内联样式 | UTSJSONObject \| String | - | - |
| loadingClass | 自定义加载指示器节点外部样式类 | String | - | - |
| textStyle | 自定义文本节点内联样式 | UTSJSONObject \| String | - | - |
| textClass | 自定义文本节点外部样式类 | String | - | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换默认的加载文本内容 |

<DemoPhone name="sn-loading" />
