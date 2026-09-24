# Tag  标签

> [查看 sn-tag 的 2.0 版本差异](/differences/components/sn-tag)

## 基础用法

- 标签组件，用于标记和分类。
- 通过 `type` 选择功能色、`level` 选择配色深浅等级，也可用 `bg-color` / `text-color` 自定义颜色（优先于主题默认色）。

```vue
<template>
	<sn-tag text="标签"></sn-tag>
</template>
```

**更多演示请下载 demo 查看**

## 配色等级

`level` 控制标签配色深浅：

- `first`：原色背景 + 对应文字色
- `second`：更浅色（Light）背景
- `third`：中性色（info）背景 + 原色文字
- `least`：透明背景 + 线条色边框 + 原色文字

```vue
<template>
	<sn-tag text="first" type="primary" level="first"></sn-tag>
	<sn-tag text="least" type="primary" level="least"></sn-tag>
</template>
```

## 可关闭与加载

- `closable` 显示关闭按钮，点击后标签移除并触发 `close` 事件。
- `loading` 显示加载指示器，此时关闭按钮隐藏。

```vue
<template>
	<sn-tag text="可关闭标签" closable @close="onClose"></sn-tag>
	<sn-tag text="加载中" loading></sn-tag>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| text | 标签内文本内容 | String | - | - |
| align | 标签内容对齐方向 | String | `center` | `flex-start` \| `center` \| `flex-end` 等 css `justify-content` 取值 |
| type | 标签主题功能色 | String | `info` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level | 标签配色等级 | String | `first` | `first` \| `second` \| `third` \| `least` |
| loading | 是否加载状态，显示加载指示器并隐藏关闭按钮 | Boolean | `false` | `true` \| `false` |
| closable | 是否可关闭，显示关闭按钮，点击移除标签 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用，背景与文本切换禁用配色 | Boolean | `false` | `true` \| `false` |
| bgColor | 标签背景颜色，支持 `$` 功能色简写，优先于主题默认色 | String | - | - |
| disabledBgColor | 禁用状态下的背景颜色 | String | `$disabled` | - |
| textColor | 标签文本颜色，支持 `$` 功能色简写，优先于主题默认色 | String | - | - |
| disabledTextColor | 禁用状态下的文本颜色 | String | `$disabledText` | - |
| iconColor | 关闭图标和加载图标颜色，跟随文本颜色 | String | - | - |
| disabledIconColor | 禁用状态下的图标颜色 | String | `$disabledText` | - |
| borderRadius | 标签圆角大小，支持 `$` 简写 | String \| Number | - | - |
| textSize | 标签文本大小，支持 `$` 简写 | String \| Number | - | - |
| iconSize | 关闭图标和加载图标大小，支持 `$` 简写 | String \| Number | - | - |
| loadingStyle | 加载指示器的自定义样式 | UTSJSONObject \| String | - | - |
| textStyle | 标签内文本的自定义样式 | UTSJSONObject \| String | - | - |
| customStyle | 自定义标签根节点样式 | UTSJSONObject \| String | - | - |
| loadingClass | 加载指示器的外部样式类 | String | - | - |
| textClass | 标签内文本的外部样式类 | String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| close | () => Void | 点击关闭按钮、标签被移除时触发 |

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| default | 替换标签内部原有的 `text`，可以是任意内容 |

<DemoPhone name="sn-tag" />
