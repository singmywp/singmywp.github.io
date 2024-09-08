# Waterfall 瀑布流
## 基本使用
- 用于实现瀑布流布局。
```vue
<template>
	<sn-waterfall>
		<sn-waterfall-item v-for="(item,index) in waterFall" 
    :key="index">
			<!-- 内容 -->
		</sn-waterfall-item>
	</sn-waterfall>
</template>
```
**更多演示请下载 demo 查看**
## 属性

**sn-waterfall**

| 参数        | 说明         | 类型          | 默认值 | 可选值 |
| ----------- | ------------ | ------------- | ------ | ------ |
| col         | 列数         | Number        | `2`    | -      |
| spacing     | 子项间的间距 | String        | `10px` | -      |
| customStyle | 自定义样式   | UTSJSONObject | `{}`   | -      |


**sn-waterfall-item**

| 参数             | 说明                                          | 类型          | 默认值    | 可选值 |
| :--------------- | :-------------------------------------------- | :------------ | :-------- | :----- |
| index            | 子项索引（填 v-for 的索引就可以，不要有重复） | Number        | `0`       | -      |
| height           | 子项高度（为空则自动计算）                    | String        | -         | -      |
| imgSrc           | 子项图片路径                                  | String        | -         | -      |
| bgColor          | 子项背景颜色                                  | String        | `$front`  | -      |
| padding          | 子项内边距                                    | String        | `0px`     | -      |
| borderRadius     | 子项圆角大小                                  | String        | `$normal` | -      |
| imgBorderRadius  | 子项图片圆角大小                              | String        | `0px`     | -      |
| customStyle      | 自定义样式                                    | UTSJSONObject | `{}`      | -      |
| customImageStyle | 自定义图片样式                                | UTSJSONObject | `{}`      | -      |

## 插槽

**sn-waterfall**

| 名称    | 说明           |
| ------- | -------------- |
| default | 在这里放置子项 |


**sn-waterfall-item**

| 名称    | 说明               |
| ------- | ------------------ |
| default | 在这里放置子项内容 |



<DemoPhone name="sn-waterfall" />