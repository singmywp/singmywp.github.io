# Loading 加载
## 基本使用
- 用于显示加载中的状态。
- 支持两种模式：图标模式和绘制模式（目前绘制模式只适配 App 平台）。
```vue
<template>
	<sn-loading mode="icon" text="加载中..."></sn-loading>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数               | 说明                                | 类型          | 默认值          | 可选值            |
| ------------------ | ----------------------------------- | ------------- | --------------- | ----------------- |
| mode               | 加载模式，可选值为 `icon` 或 `draw` | String        | `icon`          | `icon` \| `draw`  |
| text               | 加载文本内容                        | String        | -               | -                 |
| icon               | 图标名称                            | String        | `loader-4-line` | -                 |
| iconColor          | 图标颜色                            | String        | `$primary`      | -                 |
| iconSize           | 图标大小                            | String        | `$5`            | -                 |
| textColor          | 文本颜色                            | String        | `$primaryDark`  | -                 |
| textSize           | 文本大小                            | String        | `$3`            | -                 |
| vertical           | 是否垂直排列                        | Boolean       | `false`         | `true` \| `false` |
| customStyle        | 自定义样式                          | UTSJSONObject | `{}`            | -                 |
| customLoadingStyle | 自定义加载样式                      | UTSJSONObject | `{}`            | -                 |
| customTextStyle    | 自定义文本样式                      | UTSJSONObject | `{}`            | -                 |
## 插槽
| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 用于替换默认的加载文本内容 |
<DemoPhone name="sn-loading" />