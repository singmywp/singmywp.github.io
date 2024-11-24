# Refresher 下拉刷新
## 基础用法
- 自定义 `scroll-view` 和 `list-view` 下拉刷新样式
```vue
<template>
	<sn-refresher status="refresh"></sn-refresher>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数           | 说明                     | 类型          | 默认值         | 可选值                    |
| -------------- | ------------------------ | ------------- | -------------- | ------------------------- |
| status         | 当前状态（刷新或刷新中） | String        | `refresh`      | `refresh` \| `refreshing` |
| icon           | 刷新图标名称             | String        | `refresh-line` | -                         |
| refreshText    | 未刷新状态下的文本提示   | String        | `松开刷新`     | -                         |
| refreshingText | 正在刷新状态下的文本提示 | String        | `刷新中`       | -                         |
| textSize       | 文本大小                 | String        | `$2+1`         | -                         |
| iconSize       | 图标大小                 | String        | `$2+1`         | -                         |
| iconColor      | 图标颜色                 | String        | `$lineText`    | -                         |
| textColor      | 文本颜色                 | String        | `$lineText`    | -                         |
| customStyle    | 自定义样式               | UTSJSONObject | `{}`           | -                         |
## 事件

| 事件名  | 类型       | 说明                             |
| ------- | ---------- | -------------------------------- |
| refresh | ()=>Void | `status` 切换为 `refresh` 时触发 |

<DemoPhone name="sn-refresher" />