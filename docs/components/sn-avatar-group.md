# AvatarGroup 头像组
## 基础用法
- 支持多个头像组合成头像组，提供丰富的自定义样式
- 支持铺排和堆叠两种模式
```vue
<template>
<sn-avatar-group :data="avatars"></sn-avatar-group>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数            | 说明                                                         | 类型            | 默认值    | 可选值              |
| --------------- | ------------------------------------------------------------ | --------------- | --------- | ------------------- |
| data            | 头像组数据                 | Array\<[SnAvatarGroupItem](/api/types/components#snavatargroupitem)\> | `[]`      | -                   |
| size            | 头像大小                                                     | String          | `40px`  | -                   |
| spacing         | 头像之间的间距（仅当 `mode="spread"` 时生效）                   | String          | `5px`   | -                   |
| max             | 显示的最大头像数量，超过该数量的显示为“N+”，默认为 `-1`（即不限制） | Number          | `-1`      | -                   |
| mode            | 头像组布局模式，可选 `heap`（堆叠）或 `spread`（分散）。       | String          | `heap`  | `heap` \| `spread` |
| borderRadius    | 头像的圆角大小                                               | String         | `$xsmall` | -                   |
| textSize        | 头像中文本的大小                                             | String          | `20px`  | -                   |
| iconSize        | 头像中图标的大小                                             | String          | `20px`  | -                   |
| textColor       | 头像中文本的颜色                                             | String          | `$infoDark` （亮色模式）<br />`$dark`（暗黑模式） | -                   |
| iconColor       | 头像中图标的颜色                                             | String          | `$infoDark` （亮色模式）<br />`$dark`（暗黑模式） | -                   |
| bgColor         | 头像的背景颜色                                               | String          | `$info` | -                   |
| randomBgColor   | 是否随机生成头像背景颜色                                     | Boolean         | `false`   | `true` \| `false`   |
| shape           | 头像的形状，可选 `circle`（圆形）或 `square`（方形）。         | String          | `circle` | `circle `\| `square` |
| customStyle | 自定义头像组样式 | UTSJSONObject | `{}` | - |
| customAvatarStyle| 自定义头像样式                                               | UTSJSONObject   | `{}`      | -                   |
## 事件
| 名称   | 类型                                                         | 说明               |
| ------ | ------------------------------------------------------------ | ------------------ |
| click  | `(item: SnAvatarGroupItem) => void`                           | 点击头像时触发     |
| dbclick| `(item: SnAvatarGroupItem) => void`                           | 双击头像时触发     |

<DemoPhone name="sn-avatar-group" />