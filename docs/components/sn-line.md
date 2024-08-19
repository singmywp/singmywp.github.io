# Line 分割线
## 基本使用
- 用于在页面中创建分割线，可以包含文本。
```vue
<template>
	<sn-line text="这是分割线"></sn-line>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数            | 说明                 | 类型          | 默认值      | 可选值            |
| --------------- | -------------------- | ------------- | ----------- | ----------------- |
| width           | 分割线宽度           | String        | `100%`      | -                 |
| height          | 分割线高度           | String        | `1px`       | -                 |
| lineColor       | 分割线颜色           | String        | `$line`     | -                 |
| textColor       | 分割线文本颜色       | String        | `$lineText` | -                 |
| margin          | 分割线外边距         | String        | `10px 0`    | -                 |
| dashed          | 是否显示为虚线       | Boolean       | `false`     | `true` \| `false` |
| dot             | 是否显示为点状       | Boolean       | `false`     | `true` \| `false` |
| text            | 分割线文本内容       | String        | -           | -                 |
| textSize        | 分割线文本大小       | String        | `$1`        | -                 |
| borderRadius    | 分割线圆角大小       | String        | -           | -                 |
| customStyle     | 自定义分割线样式     | UTSJSONObject | `{}`        | -                 |
| customTextStyle | 自定义分割线文本样式 | UTSJSONObject | `{}`        | -                 |
## 插槽
| 名称    | 说明                                     |
| ------- | ---------------------------------------- |
| default | 替换分割线内部原有的文本，可以是任意组件 |



<DemoPhone name="sn-line" />