# Button  按钮

> [查看 sn-button 的 2.0 版本差异](/differences/components/sn-button)

## 基础用法

- 按钮组件，内置五种功能色主题与四级等级样式，通过 `type` 与 `level` 组合出丰富的视觉表现
- 支持图标、圆形纯图标按钮、镂空（plain）、虚线边框（dashed）、加载状态与禁用状态
- 支持自定义圆角 `radius`、三种尺寸 `size`，以及 `hover-style` 自定义按下点击态

```vue
<template>
	<sn-button type="primary" text="Primary"></sn-button>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| type | 按钮主题色类型 | String | `primary` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| level | 按钮等级，决定表现程度（first 最重、least 最轻） | String | `first` | `first` \| `second` \| `third` \| `least` |
| size | 按钮尺寸，影响内边距、字号与圆角 | String | `normal` | `small` \| `normal` \| `large` |
| text | 按钮文本内容（未提供默认插槽内容时显示） | String | `''` | - |
| icon | 按钮图标名称，传入后显示图标（sn-icon 图标名） | String | `''` | - |
| iconPosition | 图标位置 | String | `left` | `left` \| `right` |
| shape | 按钮形状，`circle` 时为纯图标圆形按钮，不显示文本 | String | `rect` | `rect` \| `circle` |
| radius | 自定义按钮圆角，`shape` 为 `circle` 时强制全圆角 | String \| Number | `''` | - |
| plain | 是否镂空（透明背景 + 边框样式） | Boolean | `false` | `true` \| `false` |
| dashed | 是否虚线边框（一般配合 `plain` 使用） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用，禁用后透明度降低且不可点击 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载状态，显示加载遮罩并阻止点击 | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载指示器外部样式类 | String | `''` | - |
| loadingStyle | 加载指示器自定义样式 | UTSJSONObject \| String | `` `border-color: ${$snui.colors.primary}` `` | - |
| iconClass | 图标外部样式类 | String | `''` | - |
| iconStyle | 图标自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 文本外部样式类 | String | `''` | - |
| textStyle | 文本自定义样式 | UTSJSONObject \| String | `''` | - |
| hoverStyle | 按下时的点击态样式（如 `background`、`transform: scale(0.94)` 等） | UTSJSONObject \| String | `''` | - |
| hoverStopPropagation | 是否阻止点击态的父节点传播 | Boolean | `false` | `true` \| `false` |
| hoverStartTime | 按下后点击态出现的延迟时间（ms） | Number | `0` | - |
| hoverStayTime | 松手后点击态保留的时间（ms） | Number | `0` | - |
| hoverTransTime | 点击态过渡动画时长，支持 `$` 前缀按动画乘数缩放，空值时使用框架短动画时长 | String \| Number | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | () => Void | 点击按钮时触发（禁用或加载状态下不触发） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换按钮内部原有的文本内容 |
| body | 替换按钮整体内部内容（含图标与文本），自定义按钮内部布局 |

<DemoPhone name="sn-button" />
