# Empty 缺省页

基于 [邓琪昌](https://ext.dcloud.net.cn/publisher?id=68708) 大佬的开源组件 [`flower-empty`](https://ext.dcloud.net.cn/plugin?name=flower-empty) 实现的缺省页组件。使用方法有改动。

## 基本使用

- 页面处于异常、无内容、加载等时状态时给予用户友好提示

```vue
<template>
	<sn-empty mode="data" text="Oops! 数据丢失了"></sn-empty>
</template>
```

**更多演示请下载 demo 查看**

## 多模式

目前共支持 20 种模式。

| 模式     | 名称      | 模式       | 名称     |
| -------- | --------- | ---------- | -------- |
| schedule | 日程      | loading    | 加载中   |
| card     | 卡包      | message    | 消息     |
| favor    | 收藏      | star       | 喜爱     |
| coupon   | 优惠券    | permission | 权限     |
| data     | 数据      | record     | 记录     |
| location | 位置      | search     | 搜索     |
| fail     | 载入失败  | server     | 服务器   |
| folder   | 文件夹    | shopping   | 购物车   |
| page1    | 页面丢失1 | network    | 无网络   |
| page2    | 页面丢失2 | slow       | 网速缓慢 |



## 属性

| 参数            | 说明                     | 类型            | 默认值                | 可选值 |
| --------------- | ------------------------ | --------------- | --------------------- | ------ |
| mode            | 缺省页模式               | String      | `data`                | 见上   |
| text            | 缺省页提示文本           | String        | -                     | -      |
| textSize        | 缺省页提示文本字体大小   | String        | `$3`                  | -      |
| textColor       | 缺省页提示文本颜色       | String        | `$lineText`           | -      |
| themeColor      | 缺省插图主题色           | String        | `$primary`            | -      |
| hairColor       | 缺省插图人物头发颜色     | String        | `#483029`             | -      |
| clothesColor    | 缺省插图人物上衣颜色     | String        | `#EDA20C`             | -      |
| trousersColor   | 缺省插图人物裤子颜色     | String        | 为空则同 `themeColor` | -      |
| shoesColor      | 缺省插图人物鞋子颜色     | String        | 为空则同 `themeColor` | -      |
| itemColor       | 缺省插图物品颜色         | String        | `#483029`             | -      |
| skinColor       | 缺省插图人物皮肤颜色     | String        | `#ffcda5`             | -      |
| elementColor    | 缺省插图元素颜色         | String        | `#ffffff`             | -      |
| imageSize       | 缺省插图尺寸             | String        | `200px`               | -      |
| customStyle     | 自定义缺省页样式         | UTSJSONObject | `{}`                  | -      |
| customTextStyle | 自定义缺省页提示文本样式 | UTSJSONObject | `{}`                  | -      |

## 插槽

| 名称   | 说明                         |
| ------ | ---------------------------- |
| image  | 在这里放置组件以替换默认插图 |
| text   | 在这里放置组件以替换提示文本 |
| action | 在这里放置组件以设置操作区   |

<DemoPhone name="sn-empty" />