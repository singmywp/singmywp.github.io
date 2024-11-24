# Switch 开关
## 基础用法
- 跟官方的很相似，但扩展了一些功能
```vue
<template>
<sn-switch v-model="value"></sn-switch>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数                     | 说明                       | 类型          | 默认值          | 可选值            |
| ------------------------ | -------------------------- | ------------- | --------------- | ----------------- |
| vModel                  | 当前开关状态               | Boolean       | `false`         | -                 |
| width                    | 开关宽度                   | String        | `50px`          | -                 |
| height                   | 开关高度                   | String        | `25px`          | -                 |
| text                     | 开关文本内容               | String        | -               | -                 |
| icon                     | 开关图标名称               | String        | -               | -                 |
| iconSize                 | 开关图标大小               | String        | -               | -                 |
| padding                  | 开关内边距                 | String        | `5px`           | -                 |
| borderRadius             | 开关边框圆角               | String        | `$circle`       | -                 |
| bgColor                  | 开关背景颜色               | String        | `$line`         | -                 |
| activeBgColor            | 开启时背景颜色             | String        | `$primary`      | -                 |
| disabledBgColor          | 禁用状态背景颜色           | String        | `$disabled`     | -                 |
| disabledActiveBgColor    | 禁用状态下开启时背景颜色   | String        | `$disabledDark` | -                 |
| blockColor               | 小球颜色                   | String        | `#fff`          | -                 |
| activeBlockColor         | 开启时小球颜色             | String        | `#fff`          | -                 |
| disabledBlockColor       | 禁用状态小球颜色           | String        | `#fff`          | -                 |
| disabledActiveBlockColor | 禁用状态下开启时的小球颜色 | String        | `#fff`          | -                 |
| blockBorderRadius        | 小球圆角大小               | String        | `$circle`       | -                 |
| textColor                | 开关文本颜色               | String        | `#fff`          | -                 |
| textSize                 | 开关文本大小               | String        | `$2`            | -                 |
| loading                  | 是否进入加载状态           | Boolean       | `false`         | `true` \| `false` |
| disabled                 | 是否禁用开关               | Boolean       | `false`         | `true` \| `false` |
| customStyle              | 自定义开关样式             | UTSJSONObject | `{}`            | -                 |
## 事件
| 名称   | 类型                       | 说明           |
| :----- | :------------------------- | :------------- |
| change | (value: Boolean) => Void | 状态改变时触发 |


<DemoPhone name="sn-switch" />
