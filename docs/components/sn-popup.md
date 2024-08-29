# Popup 弹出层
## 基本使用
- 需要弹窗？试试它吧。
- 请注意区分 Popup 和 Drawer。Popup 只控制动画和显隐逻辑，UI 需要自己写。而 Drawer 则是在 Popup 的基础上加了一层 UI 模板。
```vue
<template>
	<sn-popup></sn-popup>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数        | 说明                               | 类型          | 默认值   | 可选值                                             |
| ----------- | ---------------------------------- | ------------- | -------- | -------------------------------------------------- |
| renderMode  | 弹出层的渲染方式（v-if 或 v-show） | String        | `v-if`   | `v-if` \| `v-show`                                 |
| position    | 弹出层位置（动画也会随之而变）     | String        | `center` | `center` \| `top` \| `bottom` \| `left` \| `right` |
| aniTime      | 动画持续时间                       | Number        | `$long`  | -                                                  |
| preventBack | 是否阻止返回键关闭弹出层           | Boolean       | `false`  | `true` \| `false`                                  |
| maskClose   | 点击遮罩是否关闭弹出层             | Boolean       | `true`   | `true` \| `false`                                  |
| maskOpacity | 遮罩透明度                         | Number        | `0.3`    | -                                                  |
| customStyle | 自定义弹出层样式                   | UTSJSONObject | `{}`     | -                                                  |
## 方法
| 名称  | 参数 | 返回值 | 描述       |
| :---- | :--- | :----- | :--------- |
| open  | -    | -      | 打开弹出层 |
| close | -    | -      | 关闭弹出层 |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 这里放置内容 |

<DemoPhone name="sn-popup" />
