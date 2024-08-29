# Skeleton 骨架屏
## 基本使用
- 加载较慢时，在页面真实数据加载之前，给用户展示出页面的大致结构。
- 你可以把它当做一个带闪烁动画的 `view` 来用，本身不带UI，样式完全由你控制。
```vue
<template>
  <sn-skeleton width="200px" height="50px" borderRadius="12px"></sn-skeleton>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数         | 说明                 | 类型          | 默认值    | 可选值 |
| ------------ | -------------------- | ------------- | --------- | ------ |
| width        | 骨架屏宽度           | String        | -         | -      |
| height       | 骨架屏高度           | String        | -         | -      |
| borderRadius | 骨架屏圆角大小       | String        | `$xsmall` | -      |
| margin       | 骨架屏外边距         | String        | -         | -      |
| aniTime      | 动画时间，单位为毫秒 | Number        | `1000`    | -      |
| customStyle  | 自定义骨架屏样式     | UTSJSONObject | `{}`      | -      |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 这里放置内容 |

<DemoPhone name="sn-skeleton" />