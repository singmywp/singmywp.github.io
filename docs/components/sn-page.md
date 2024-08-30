# Page 页面
## 基础用法
- 页面容器，是页面的根节点。使用页面容器可帮助您快速布局页面，无需手动管理滚动相关组件及事件。
- 支持动态修改页面背景色、全局背景色。
```vue
<template>
	<sn-page bgColor="#f0f0f0"></sn-page>
</template>
```
**更多演示请下载 demo 查看**


## 属性
| 参数                | 说明                               | 类型          | 默认值     | 可选值                     |
| ------------------- | ---------------------------------- | ------------- | ---------- | -------------------------- |
| scrollOn            | 是否开启滚动功能                   | Boolean       | `true`     | `true` \| `false`          |
| scrollTop           | 设置竖向滚动条位置                 | Number        | `0`        | -                          |
| scrollWithAnimation | 滚动是否使用动画                   | Boolean       | `true`     | `true` \| `false`          |
| direction           | 滚动方向（vertical 或 horizontal） | String        | `vertical` | `vertical` \| `horizontal` |
| bgColor             | 页面背景颜色                       | String        | `$page`    | -                          |
| padding             | 页面内边距                         | String        | `0 15px`   | -                          |
| bounces             | 是否启用回弹效果                   | Boolean       | `true`     | `true` \| `false`          |
| customStyle         | 自定义页面样式                     | UTSJSONObject | `{}`       | -                          |


## 方法
| 名称     | 参数                     | 返回值 | 描述               |
| :------- | :----------------------- | :----- | :----------------- |
| scrollTo | `(x: number, y: number)` | -      | 滚动页面到指定位置 |



## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 放置页面内容 |

<DemoPhone name="sn-page" />