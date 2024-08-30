# Row 水平布局
## 基础用法
- 用于快速设置栅格布局。
- 搭配 `sn-col` 组件使用更佳哦
```vue
<template>
	<sn-row>
		<sn-col :span="4">内容1</sn-col>
		<sn-col :span="4">内容2</sn-col>
		<sn-col :span="4">内容3</sn-col>
	</sn-row>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数        | 说明           | 类型          | 默认值   | 可选值            |
| ----------- | -------------- | ------------- | -------- | ----------------- |
| justify     | 主轴对齐方式   | String        | `start`  | -                 |
| align       | 交叉轴对齐方式 | String        | `center` | -                 |
| wrap        | 是否允许换行   | Boolean       | `false`  | `true` \| `false` |
| customStyle | 自定义样式     | UTSJSONObject | `{}`     | -                 |
## 插槽
| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 水平布局内部包裹主体组件。 |

<DemoPhone name="sn-row" />