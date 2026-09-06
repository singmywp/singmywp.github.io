# Avatar  头像

> [查看 sn-avatar 的 2.0 版本差异](/differences/components/sn-avatar)

## 基础用法

- `sn-avatar` 用以展示用户头像，支持图片（image）、文本（text）、图标（icon）三种展示模式
- 支持 `shape` 切换方形/圆形，`enable-preview` 开启后点击图片头像可预览大图
- `sn-avatar-group` 用于将多个头像组成头像组，支持堆叠（heap）与分散（spread）两种布局模式，超出数量上限自动显示 "+N"

```vue
<template>
	<sn-avatar src="https://www.example.com/example.png" shape="circle" size="60px"></sn-avatar>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 头像展示模式 | String | `image` | `image` \| `text` \| `icon` |
| src | 图片模式下头像图片地址 | String | `''` | - |
| imageMode | 图片裁剪铺满方式 | String | `aspectFill` | `scaleToFill` \| `aspectFit` \| `aspectFill` \| `widthFix` \| `heightFix` \| `top` \| `bottom` \| `center` \| `left` \| `right` \| `top left` \| `top right` \| `bottom left` \| `bottom right` |
| text | 文本模式下头像内部文本 | String | `''` | - |
| icon | 图标模式下头像内部图标名 | String | `''` | - |
| size | 头像尺寸（外框边长），支持 `$` 前缀按间距乘数缩放 | String \| Number | `40px` | - |
| textSize | 文本模式下内部文本大小，支持 `$` 前缀按字体乘数缩放 | String \| Number | `25px` | - |
| textColor | 文本模式下文本颜色，空值时亮色模式为 `$infoDark`、暗黑模式为 `$dark` | String | `''` | - |
| iconSize | 图标模式下内部图标大小，支持 `$` 前缀按字体乘数缩放 | String \| Number | `25px` | - |
| iconColor | 图标模式下图标颜色，空值时同 `textColor` 规则 | String | `''` | - |
| bgColor | 头像背景颜色 | String | `$info` | - |
| shape | 头像形状，`circle` 时圆角强制为尺寸的一半 | String | `square` | `square` \| `circle` |
| borderRadius | 头像圆角大小（仅 `shape="square"` 时生效），空值时为 4px × 圆角乘数 | String \| Number | `''` | - |
| lazyLoad | 图片懒加载（只针对 page 与 scroll-view 下的 image 有效） | Boolean | `false` | `true` \| `false` |
| enablePreview | 图片模式下启用点击预览大图 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点样式类 | String | `''` | - |
| textStyle | 内部文本自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 内部文本外部样式类 | String | `''` | - |
| iconStyle | 内部图标自定义样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 内部图标外部样式类 | String | `''` | - |

## sn-avatar-group 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| data | 头像组数据，数组项字段见下方 [[SnAvatarGroupItem]] | Array\\<[[SnAvatarGroupItem]]\\> | `[]` | - |
| size | 头像大小，支持 `$` 前缀按间距乘数缩放 | String \| Number | `40px` | - |
| spacing | 头像之间的间距（仅 `mode="spread"` 时生效），支持 `$` 前缀按外间距乘数缩放 | String \| Number | `5px` | - |
| max | 显示的最大头像数量，超过该数量的以 "+N" 形式显示，`-1` 表示不限制 | Number | `-1` | - |
| mode | 头像组布局模式，`heap` 为堆叠（重叠量为头像尺寸的 40%），`spread` 为分散 | String | `heap` | `heap` \| `spread` |
| borderRadius | 头像圆角大小（仅 `shape="square"` 时生效），空值时为 4px × 圆角乘数 | String \| Number | `''` | - |
| textSize | 头像中文本的大小 | String \| Number | `20px` | - |
| iconSize | 头像中图标的大小 | String \| Number | `20px` | - |
| textColor | 头像中文本的颜色，空值时亮色模式为 `$infoDark`、暗黑模式为 `$dark` | String | `''` | - |
| iconColor | 头像中图标的颜色，空值时同 `textColor` 规则 | String | `''` | - |
| bgColor | 头像的背景颜色 | String | `$info` | - |
| randomBgColor | 是否随机生成头像背景颜色（从五种功能色 Light 系色板随机取色，文字颜色自动配套） | Boolean | `false` | `true` \| `false` |
| shape | 头像的形状 | String | `circle` | `circle` \| `square` |
| customStyle | 自定义头像组根节点样式 | UTSJSONObject \| String | `''` | - |
| avatarStyle | 自定义组内每个头像的样式 | UTSJSONObject \| String | `''` | - |
| avatarClass | 自定义组内每个头像的样式类 | String | `''` | - |

:::type-fields SnAvatarGroupItem

`sn-avatar-group` 的 `data` 属性需要传入一个 `SnAvatarGroupItem[]` 类型的数组。此对象只能传入数据，样式请通过 `sn-avatar-group` 的属性统一设置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| src | String | 否 | 图片路径 |
| text | String | 否 | 文本内容 |
| icon | String | 否 | 图标名称 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文本颜色 |
| iconColor | String | 否 | 图标颜色 |

---

:::

SnAvatarGroupItem 数据项字段（均为可选）：

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| src | String | 头像图片地址 |
| text | String | 头像文本 |
| icon | String | 头像图标名 |
| bgColor | String | 该头像背景颜色，优先级高于 `bgColor` 属性 |
| textColor | String | 该头像文本颜色，优先级高于 `textColor` 属性 |
| iconColor | String | 该头像图标颜色，优先级高于 `iconColor` 属性 |

## 事件

**sn-avatar 事件**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (e: UniPointerEvent) => Void | 点击头像时触发 |
| dbclick | (e: UniPointerEvent) => Void | 快速双击头像时触发（300ms 内连续点击两次） |
| load | (e: UniImageLoadEvent) => Void | 头像图片加载完成时触发 |
| error | (e: UniImageErrorEvent) => Void | 头像图片加载失败时触发 |
| longpress | (e: UniEvent) => Void | 长按头像时触发 |

**sn-avatar-group 事件**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (item: [[SnAvatarGroupItem]]) => Void | 点击组内头像时触发，携带该头像的数据项 |
| dbclick | (item: [[SnAvatarGroupItem]]) => Void | 快速双击组内头像时触发，携带该头像的数据项 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 非 `image` 模式（或未传 `src`）下替换内部原有的图标和文字，可以是任意组件 |

<DemoPhone name="sn-avatar" />
