# LoadingPage  加载页

> [查看 sn-loading-page 的 2.0 版本差异](/differences/components/sn-loading-page)

## 基础用法

- 在页面信息尚未完全加载时使用，避免出现视觉空白。
- 基于全屏遮罩实现，通过 `show` 属性控制显示与隐藏。
- 支持 `native`（内置 loading 组件）与 `icon`（旋转图标）两种加载指示器模式，传入 `img-src` 后以图片替代加载指示器。

```vue
<template>
	<sn-loading-page :show="show" text="加载中"></sn-loading-page>
</template>

<script setup>
	onLoad(() => {
		// onLoad 内设置延时可以避免组件刚加载的瞬间出现的闪动
		setTimeout(() => {
			show.value = true
		}, 1)
	})
</script>
```

**更多演示请下载 demo 查看**

## 图片模式

传入 `img-src` 后以图片替代加载指示器，可通过 `img-style` 控制图片尺寸。

```vue
<template>
	<sn-loading-page :show="show" img-src="/static/logo-trans.png" text="SinleUI"
		img-style="width:80px;height:80px;" text-style="margin-top:10px;font-weight:bold;"></sn-loading-page>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| show | 是否显示加载页 | Boolean | `false` | `true` \| `false` |
| text | 加载页显示的文本内容 | String | `加载中` | - |
| imgSrc | 加载页显示的图片路径，非空时以图片替代加载指示器 | String | - | - |
| bgColor | 加载页背景颜色，默认主题信息色 | String | - | - |
| textColor | 加载页文本颜色 | String | `$primary` | - |
| textSize | 加载页文本大小，默认 `$20` | String \| Number | - | - |
| iconColor | 加载页图标颜色（如果显示图标），默认跟随 textColor | String | `$primary` | - |
| iconSize | 加载页图标大小（如果显示图标），默认 `$38` | String \| Number | - | - |
| mode | 加载指示器模式 | String | `native` | `native` \| `icon` |
| aniTime | 加载页显隐动画时长，支持 `$` 简写随动画乘数缩放，`0` 为瞬时 | String \| Number | - | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| imgStyle | 自定义图片节点内联样式 | UTSJSONObject \| String | `width: 70px; height: 70px;` | - |
| imgClass | 自定义图片节点外部样式类 | String | - | - |
| textStyle | 自定义文本节点内联样式 | UTSJSONObject \| String | `margin-top: 15px;` | - |
| textClass | 自定义文本节点外部样式类 | String | - | - |

<DemoPhone name="sn-loading-page" />
