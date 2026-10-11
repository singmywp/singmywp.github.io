# Gap  占位间隔

> [查看 sn-gap 的 2.0 版本差异](/differences/components/sn-gap)

## 基础用法

单纯用于占位的间隔组件。

- 通过高度控制占位大小
- 支持快速占位状态栏高度或底部安全区高度
- 背景颜色与圆角可配置

```vue
<template>
	<sn-gap height="20px"></sn-gap>
</template>
```

**更多演示请下载 demo 查看**

## 占位模式

`mode` 为 `statusbar` 或 `safearea` 时忽略 `height`，自动取系统状态栏 / 底部安全区高度。

```vue
<template>
	<sn-gap mode="statusbar" bg-color="$primaryLight"></sn-gap>
	<sn-gap mode="safearea" bg-color="$successLight"></sn-gap>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| mode | 占位间隔模式 | GapMode | `custom` | `custom` \| `statusbar` \| `safearea` |
| height | 占位间隔高度（仅 `mode` 为 `custom` 时生效），支持 `$` 简写 | String \| Number | `$20` | - |
| bgColor | 占位间隔背景颜色，支持 `$` 功能色简写 | String | `var(--sn-transparent)` | - |
| borderRadius | 占位间隔圆角大小，支持 `$` 简写 | String \| Number | - | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |

<DemoPhone name="sn-gap" />
