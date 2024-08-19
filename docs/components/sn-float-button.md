# Float Board 浮动按钮

## 基本使用

- 通常用于悬浮按钮的场景。
- 支持自动吸附、预设八个位置

``` vue
<template>
	<sn-float-button icon="add-line"
	:bgColor="colors.primary"></sn-float-button>
</template>

<script setup>
	import { $snui } from '@/uni_modules/sinle-ui'
	const colors = $snui.colors
</script>
```



**更多演示请下载 demo 查看**

## 属性

| 参数         | 说明                                             | 类型            | 默认值           | 可选值                                                       |
| ------------ | ------------------------------------------------ | --------------- | ---------------- | ------------------------------------------------------------ |
| v-model      | 浮动按钮当前位置                                 | Array\<Number\>    | `[0,0]`          | -                                                            |
| position     | 浮动按钮预设位置                                 | String        | `bottom`         | `top` \| `right` \| `bottom` \| `left` \| `top-start` \| `top-end` \| `bottom-start` \| `bottom-end` |
| init         | 是否在初始化时设置浮动按钮至 `position` 预设位置 | Boolean       | `true`           | `true` \| `false`                                            |
| absorb       | 是否松手自动吸附至左右两侧                       | Boolean       | `true`           | `true` \| `false`                                            |
| bgColor      | 浮动按钮的背景颜色                               | String        | `$front`         | -                                                            |
| size         | 浮动按钮尺寸                                     | String        | `60px`           | -                                                            |
| borderRadius | 浮动按钮圆角大小                                 | String          | `$circle`        | -                                                            |
| boxShadow    | 浮动按钮阴影                                     | String          | `0 0 15px -10px` | -                                                            |
| margin       | 浮动按钮处于预设位置时与页面的边距               | Number        | `20`             | -                                                            |
| icon         | 浮动按钮内部图标                                 | String        | -                | -                                                            |
| iconColor    | 浮动按钮内部图标颜色                             | String        | `$text`          | -                                                            |
| icon         | 浮动按钮内部图标字体大小                         | String        | `$6`             | -                                                            |
| aniDur       | 浮动按钮吸附动画时长                             | Number        | `$long`          | -                                                            |
| disabled     | 是否禁止拖动                                     | Boolean       | `false`          | `true` \| `false`                                            |
| customStyle  | 自定义浮动按钮样式                               | UTSJSONObject | `{}`             | -                                                            |

## 插槽

| 名称    | 说明                                   |
| :------ | :------------------------------------- |
| default | 在浮动按钮内部放置组件以替换默认的图标 |

## 事件

| 名称   | 类型         | 说明                       |
| ------ | ------------ | -------------------------- |
| change | `() => void` | 浮动按钮位置发生变化时触发 |
| click  | `() => void` | 浮动按钮被点击时触发       |

<DemoPhone name="sn-float-button" />