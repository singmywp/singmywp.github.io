# Sidebar 侧边栏

## 基础用法
- 适用于商城选购等场景的侧边导航栏
- 支持自定义样式和锚点切换。

```vue
<template>
	<sn-sidebar v-model="index" :data="items"></sn-sidebar>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                | 说明                 | 类型                | 默认值         | 可选值            |
| ------------------- | -------------------- | ------------------- | -------------- | ----------------- |
| v-model             | 当前选中的选项索引   | Number              | `0`            | -                 |
| data                | 侧边栏选项数据数组   | Array\<SnDataItem\> | `[]`           | -                 |
| width               | 侧边栏宽度           | String              | `100px`        | -                 |
| itemWidth           | 选项宽度             | String              | `100px`        | -                 |
| itemPadding         | 选项内边距           | String              | `15px 0`       | -                 |
| itemTextColor       | 选项文字颜色         | String              | `$text`        | -                 |
| itemTextSize        | 选项文字大小         | String              | `$3`           | -                 |
| activeItemTextColor | 激活选项文字颜色     | String              | `$primary`     | -                 |
| itemBgColor         | 选项背景颜色         | String              | `$transparent` | -                 |
| itemBorderRadius    | 选项圆角大小         | String              | `0`            | -                 |
| activeItemBgColor   | 激活选项背景颜色     | String              | `$front`       | -                 |
| disabled            | 是否禁用所有选项     | Boolean             | `false`        | `true` \| `false` |
| anchor              | 是否使用锚点定位     | Boolean             | `false`        | `true` \| `false` |
| showLine            | 是否显示选项的选中线 | Boolean             | `true`         | `true` \| `false` |
| lineColor           | 选中线的颜色         | String              | `$primary`     | -                 |
| customStyle         | 自定义容器样式       | String              | `{}`           | -                 |
| customItemStyle     | 自定义选项样式       | String              | `{}`           | -                 |
| customBarStyle      | 自定义侧边栏样式     | String              | `{}`           | -                 |
| customContentStyle  | 自定义内容区域样式   | String              | `{}`           | -                 |
## 插槽
| 名称    | 说明                     |
| ------- | ------------------------ |
| default | 放置侧边栏右侧的页面区域 |
## 事件
| 名称   | 类型                 | 说明           |
| ------ | -------------------- | -------------- |
| change | `(v:number) => void` | 选项改变时触发 |


<DemoPhone name="sn-sidebar" />