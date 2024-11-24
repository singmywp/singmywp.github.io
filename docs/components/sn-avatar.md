

# Avatar 头像

## 基础用法

- 用以展示用户头像。

```vue
<template>
	<sn-avatar src="https://www.example.com/example.png" shape="circle" size="60px">
	</sn-avatar>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数            | 说明                                       | 类型          | 默认值                                            | 可选值                                                       |
| --------------- | ------------------------------------------ | ------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| mode            | 头像展示模式                               | String        | `image`                                           | `image` \| `text` \| `icon`                                  |
| imageMode       | 图片模式下头像的裁剪方式                   | String        | -                                                 | `scaleToFill` \|`aspectFit` \|`aspectFill` \|`widthFix` \|`heightFix` \|`top` \|`bottom` \|`center` \|`left` \|`right` \|`top left` \|`top right` \|`bottom left` \|`bottom right` |
| src             | 图片模式下头像图片地址                     | String        | -                                                 | -                                                            |
| text            | 文本模式下头像内部文本                     | String        | -                                                 | -                                                            |
| icon            | 图标模式下头像内部图标名                   | String        | -                                                 | -                                                            |
| size            | 头像尺寸（外框的边长）                     | String        | `40px`                                            | -                                                            |
| textSize        | 文本模式下头像内部文本大小                 | String        | `25px`                                            | -                                                            |
| textColor       | 文本模式下头像内部文本颜色                 | String        | `$infoDark` （亮色模式）<br />`$dark`（暗黑模式） | -                                                            |
| iconSize        | 图标模式下头像内部图标大小                 | String        | `25px`                                            | -                                                            |
| iconColor       | 图标模式下头像内部图标颜色                 | String        | `$infoDark` （亮色模式）<br />`$dark`（暗黑模式） | -                                                            |
| bgColor         | 非图片模式下头像背景颜色                   | String        | `$info`                                           | -                                                            |
| shape           | 头像形状                                   | String        | `square`                                          | `square` \| `circle`                                         |
| borderRadius    | 头像圆角大小（仅 `shape="square"` 时生效） | String        | `$xsmall`                                         | -                                                            |
| enablePreview   | 图片模式下启用图片预览                     | Boolean       | `false`                                           | `true` \| `false`                                            |
| customStyle     | 自定义头像样式                             | UTSJSONObject | `{}`                                              | -                                                            |
| customTextStyle | 自定义头像内部文本样式                     | UTSJSONObject | `{}`                                              | -                                                            |
| customIconStyle | 自定义头像内部图标样式                     | UTSJSONObject | `{}`                                              | -                                                            |

## 事件

| 名称      | 类型                              | 说明               |
| --------- | --------------------------------- | ------------------ |
| click     | (e: UniPointerEvent) => Void    | 点击头像时触发     |
| dbclick   | (e: UniPointerEvent) => Void    | 双击头像时触发     |
| load      | (e: UniImageLoadEvent) => Void  | 头像加载完成时触发 |
| error     | (e: UniImageErrorEvent) => Void | 头像加载失败时触发 |
| longpress | (e: UniEvent) => Void           | 长按头像时触发     |

## 插槽

| 名称    | 说明                                                       |
| ------- | ---------------------------------------------------------- |
| default | 非 `image` 模式下替换内部原有的图标和文字 ，可以是任意组件 |

<DemoPhone name="sn-avatar" />