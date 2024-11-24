# Loadmore 加载更多
## 基础用法
- 一般用于标识页面底部加载数据时的状态
```vue
<template>
	<sn-loadmore></sn-loadmore>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数         | 说明                 | 类型          | 默认值       | 可选值                              |
| ------------ | -------------------- | ------------- | ------------ | ----------------------------------- |
| status       | 加载状态             | String        | `loadmore`   | `loadmore` \| `loading` \| `nomore` |
| loadmoreText | 加载更多文本         | String        | `加载更多`   | -                                   |
| nomoreText   | 没有更多文本         | String        | `没有更多了` | -                                   |
| loadingText  | 加载中文本           | String        | `加载中`     | -                                   |
| textSize     | 文本大小             | String        | `$3`         | -                                   |
| iconSize     | 图标大小             | String        | `$3`         | -                                   |
| iconColor    | 图标颜色             | String        | `$lineText`  | -                                   |
| textColor    | 文本颜色             | String        | `$lineText`  | -                                   |
| lineColor    | 线条颜色             | String        | `$line`      | -                                   |
| lineHeight   | 线条高度             | String        | `0.5px`      | -                                   |
| disabled     | 是否禁用加载更多功能 | Boolean       | `false`      | `true` \| `false`                   |
| dashed       | 线条是否为虚线       | Boolean       | `false`      | `true` \| `false`                   |
| customStyle  | 自定义加载更多样式   | UTSJSONObject | `{}`         | -                                   |
## 事件
| 名称     | 类型         | 说明               |
| -------- | ------------ | ------------------ |
| loadmore | () => Void | 点击加载更多时触发 |

<DemoPhone name="sn-loadmore" />