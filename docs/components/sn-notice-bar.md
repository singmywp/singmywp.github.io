# NoticeBar  通知栏

> [查看 sn-notice-bar 的 2.0 版本差异](/differences/components/sn-notice-bar)

## 基础用法

- 用于展示通知信息，支持滚动（scroll）和轮播（swiper）两种模式，轮播支持横向与纵向步进。
- `texts` 传入通知文本数组；scroll 模式循环滚动第一条通知，swiper 模式逐条轮播全部通知。
- 通知栏整体配色随主题（背景 `$warningLight`、文本与图标 `$warning`），可通过 `text-style`、`icon-style` 等外部样式覆盖。
- 设置 `closable` 显示关闭按钮，点击后通知栏隐藏并触发 `close` 事件。

```vue
<template>
	<sn-notice-bar :texts="['这是第一条通知', '这是第二条通知']"></sn-notice-bar>
</template>
```

**更多演示请下载 demo 查看**

## 轮播模式

`mode="swiper"` 时逐条轮播通知，`vertical` 可切换为纵向步进。

```vue
<template>
	<sn-notice-bar mode="swiper" vertical :texts="['纵向轮播第一条', '纵向轮播第二条', '纵向轮播第三条']"></sn-notice-bar>
</template>
```

## 自定义样式

通过 `custom-style` 控制根节点，`text-style` / `icon-style` 定制文本与图标。

```vue
<template>
	<sn-notice-bar :texts="['自定义背景与圆角的通知栏']" icon="notification-3-line"
		custom-style="background-color: var(--sn-info-light); border-radius: 12px;"
		text-style="color: var(--sn-info-dark); font-size: 13px;" icon-style="color: var(--sn-info);"></sn-notice-bar>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| texts | 通知文本数组 | `Array<String>` | `[]` | - |
| icon | 通知图标名称，传空字符串不显示图标 | String | `volume-up-line` | - |
| speed | 滚动速度（px/s），支持数字或带 px 的字符串，仅 scroll 模式生效 | String \| Number | `50` | - |
| mode | 显示模式，`vertical` 为 `true` 时强制为 `swiper` | String | `scroll` | `scroll` \| `swiper` |
| swiper-interval | 轮播间隔时间（ms），仅 swiper 模式生效 | Number | `2000` | - |
| vertical | 是否纵向步进（仅 swiper 模式生效） | Boolean | `false` | `true` \| `false` |
| closable | 是否显示关闭按钮，点击后通知栏隐藏并触发 close 事件 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用（scroll 模式不滚动，swiper 模式不自动轮播） | Boolean | `false` | `true` \| `false` |
| padding | 上下内边距（px），与文本高度共同决定通知栏高度 | Number | `10` | - |
| custom-style | 自定义通知栏根节点样式 | UTSJSONObject \| String | `''` | - |
| text-style | 自定义通知文本样式 | UTSJSONObject \| String | `''` | - |
| text-class | 通知文本外部样式类 | String | `''` | - |
| icon-style | 自定义通知图标样式 | UTSJSONObject \| String | `''` | - |
| icon-class | 通知图标外部样式类 | String | `''` | - |
| close-style | 自定义关闭按钮样式 | UTSJSONObject \| String | `''` | - |
| close-class | 关闭按钮外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| close | () => Void | 点击关闭按钮、通知栏关闭时触发 |

<DemoPhone name="sn-notice-bar" />
