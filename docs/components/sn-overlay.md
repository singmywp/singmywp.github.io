# Overlay 遮罩层
## 基本使用
- 强调特定元素，常与弹出层等组件搭配使用
```vue
<template>
	<sn-overlay ref="overlayEle"></sn-overlay>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数        | 说明                               | 类型          | 默认值  | 可选值             |
| ----------- | ---------------------------------- | ------------- | ------- | ------------------ |
| maskClose   | 点击遮罩是否关闭遮罩层             | Boolean       | `true`  | `true` \| `false`  |
| renderMode  | 遮罩层的渲染方式（v-if 或 v-show） | String        | `v-if`  | `v-if` \| `v-show` |
| opacity     | 遮罩层的透明度                     | Number        | `0.3`   | -                  |
| aniTime      | 遮罩层动画时长                     | Number        | `$long` | -                  |
| bgColor     | 遮罩层背景颜色                     | String        | `#000`  | -                  |
| customStyle | 自定义遮罩层样式                   | UTSJSONObject | `{}`    | -                  |
## 方法

| 名称  | 参数 | 返回值 | 描述       |
| :---- | :--- | :----- | :--------- |
| open  | -    | -      | 打开遮罩层 |
| close | -    | -      | 关闭遮罩层 |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 这里放置内容 |

<DemoPhone name="sn-overlay" />
