# Image  图片

> [查看 sn-image 的 2.0 版本差异](/differences/components/sn-image)

## 基础用法

- 相比于内置 `image` 组件更加方便使用
- 支持图片加载占位（可自定义图标、图片或插槽）、图片预览、懒加载与显示动画（均同内置 `image` 组件）
- 默认 `aspectFit` 模式：未设置 `height` 时按图片比例自动计算高度；未设置 `width` 时平分父容器剩余宽度。设置 `height` 后此功能失效（`height` 仅在同时设置 `width` 时生效）

```vue
<template>
	<sn-image src="https://www.example.com/example.png"></sn-image>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| src | 图片路径（网络路径、本地路径皆可） | String | `''` | - |
| width | 图片宽度，平分父容器剩余宽度，支持 `$` 前缀按间距乘数缩放 | String \| Number | - | - |
| height | 图片高度，仅在同时设置 `width` 时生效，支持 `$` 前缀按间距乘数缩放 | String \| Number | `''` | - |
| mode | 图片裁剪、缩放方式，`aspectFit` 且未设置 `height` 时自动按图片比例计算高度 | String | `aspectFit` | `scaleToFill` \| `aspectFit` \| `aspectFill` \| `widthFix` \| `heightFix` \| `top` \| `bottom` \| `center` \| `left` \| `right` \| `top left` \| `top right` \| `bottom left` \| `bottom right` |
| borderRadius | 图片圆角大小，支持 `$` 前缀按圆角乘数缩放 | String \| Number | `$12` | - |
| loadingBgColor | 加载占位块背景颜色 | String | `$info` | - |
| loadingIconColor | 加载占位块中的图标颜色 | String | `$infoDark` | - |
| loadingIcon | 加载占位图标名（未传 `loadingImage` 时显示） | String | `image-line` | - |
| loadingImage | 加载占位图片地址，传入后替代占位图标 | String | `''` | - |
| loadingImageMode | 加载占位图片的裁剪、缩放方式 | String | `aspectFit` | 同 `mode` |
| loadingSize | 加载占位块尺寸，支持 `$` 前缀按间距乘数缩放 | String \| Number | `80px` | - |
| lazyLoad | 图片懒加载，只针对 page 与 scroll-view 下的 image 有效，同内置 `image` 组件 | Boolean | `false` | `true` \| `false` |
| fadeShow | 图片显示动画效果，同内置 `image` 组件 | Boolean | `true` | `true` \| `false` |
| enablePreview | 点击后调用内置的 uni.previewImage 进行图片预览（图片加载失败时不触发） | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义图片容器样式 | UTSJSONObject \| String | `''` | - |
| imageStyle | 自定义内部图片（内置 image）样式 | UTSJSONObject \| String | `''` | - |
| loadingStyle | 自定义加载占位块样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义图片容器样式类 | String | `''` | - |
| imageClass | 自定义内部图片样式类 | String | `''` | - |
| loadingClass | 自定义加载占位块样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| error | (event: UniImageErrorEvent) => Void | 图片加载错误时触发 |
| load | (event: UniImageLoadEvent) => Void | 图片加载成功时触发 |
| click | (event: UniPointerEvent) => Void | 单击图片时触发 |
| dbclick | (event: UniPointerEvent) => Void | 快速双击图片时触发（300ms 内连续点击两次） |
| longpress | (event: UniEvent) => Void | 长按图片时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| loading | 替换默认的加载占位图标/图片，可放任意加载动画组件 |

<DemoPhone name="sn-image" />
