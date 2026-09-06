# Skeleton  骨架屏

> [查看 sn-skeleton 的 2.0 版本差异](/differences/components/sn-skeleton)

## 基础用法

- 加载较慢时，在真实数据加载之前展示页面的大致结构。
- 你可以把它当做一个带动画的 `view` 来用，本身不带 UI，样式完全由你控制。
- 提供 `glow`（高光带扫过）与 `pulse`（透明度呼吸闪烁）两种动画模式。

```vue
<template>
	<sn-skeleton width="44px" height="44px" border-radius="$12"></sn-skeleton>
</template>
```

**更多演示请下载 demo 查看**

## 组合出页面结构

多个骨架屏组合即可搭出页面的占位结构，数据加载完成后用 `v-if` 切换为真实内容。

```vue
<template>
	<view class="row">
		<sn-skeleton width="48px" height="48px" border-radius="$24" margin="0 12px 0 0"></sn-skeleton>
		<view class="col">
			<sn-skeleton width="60%" height="16px" border-radius="$4" margin="2px 0"></sn-skeleton>
			<sn-skeleton width="100%" height="14px" border-radius="$4" margin="2px 0"></sn-skeleton>
		</view>
	</view>
</template>
```

## 插槽内容

骨架屏内可放置内容，适合在占位的同时展示提示文字。

```vue
<template>
	<sn-skeleton width="100%" height="56px" border-radius="$12">
		<text>内容加载中，请稍候…</text>
	</sn-skeleton>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 骨架屏宽度 | String \| Number | `100%` | - |
| height | 骨架屏高度 | String \| Number | `20px` | - |
| borderRadius | 骨架屏圆角大小，支持 `$` 简写随圆角乘数缩放 | String \| Number | `$8` | - |
| margin | 骨架屏外边距，支持 `$` 简写随外间距乘数缩放 | String | - | - |
| mode | 动画模式：`glow` 高光带从左到右循环扫过，`pulse` 整块透明度呼吸闪烁 | String | `glow` | `glow` \| `pulse` |
| aniTime | 动画时长，支持 `$` 简写随动画乘数缩放，`0` 关闭动画 | String \| Number | `$1500` | - |
| bgColor | 骨架屏背景色，默认主题禁用色 | String | - | - |
| glowColor | 高光带颜色（仅 glow 模式生效），默认暗色主题 `rgba(255,255,255,0.05)`、亮色主题 `rgba(0,0,0,0.03)` | String | - | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 在骨架屏内放置内容 |

<DemoPhone name="sn-skeleton" />
