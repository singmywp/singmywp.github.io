# More 查看更多
## 基础用法
- 用于显示一个可折叠的内容区域。
- 支持自定义提示文本、图标、颜色、动画时长、禁用等。
```vue
<template>
<sn-more :minHeight="`100px`" unfoldText="展开查看更多" foldText="收起"></sn-more>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数        | 说明                                               | 类型          | 默认值         | 可选值            |
| ----------- | -------------------------------------------------- | ------------- | -------------- | ----------------- |
| minHeight   | 收起时的高度                                       | String        | `100px`        | -                 |
| unfoldText  | 展开提示文本                                       | String        | `展开查看更多` | -                 |
| foldText    | 收起提示文本                                       | String        | `收起`         | -                 |
| icon        | 自定义图标名称，会覆盖默认的展开和收起时的两个图标 | String        | -              | -                 |
| textSize    | 文本大小                                           | String        | `$2`           | -                 |
| textColor   | 文本颜色                                           | String        | `$textLight`   | -                 |
| bgColor     | 背景颜色                                           | String        | `$front`       | -                 |
| disabled    | 是否禁用操作                                       | Boolean       | `false`        | `true` \| `false` |
| aniTime     | 动画时间                                           | Number        | `$normal`      | -                 |
| customStyle | 自定义样式                                         | UTSJSONObject | `{}`           | -                 |
## 事件
| 名称   | 类型         | 说明       |
| :----- | :----------- | :--------- |
| fold   | `() => void` | 收起时触发 |
| unfold | `() => void` | 展开时触发 |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 这里放置内容 |

<DemoPhone name="sn-more" />