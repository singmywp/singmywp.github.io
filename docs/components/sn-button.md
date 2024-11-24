# Button  按钮

## 基础用法

- 内置一些主题，设计样式更方便

```vue
<template>
	<sn-button text="按钮"></sn-button>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数              | 说明                                                                                         | 类型          | 默认值    | 可选值                                         |
| ----------------- | -------------------------------------------------------------------------------------------- | ------------- | --------- | ---------------------------------------------- |
| text              | 按钮文本内容                                                                                 | String        | -        | -                                              |
| disabled          | 是否禁用                                                                                     | Boolean       | `false`     | `true` \| ``false``                                  |
| loading           | 是否加载状态                                                                                 | Boolean       | `false`     | `true` \| ``false``                                  |
| long              | 是否长按钮                                                                                   | Boolean       | `false`     | `true` \| ``false``                                  |
| dashed            | 是否镂空且显示虚线边框                                                                       | Boolean       | `false`     | `true` \| ``false``                                  |
| round             | 是否显示为圆形（为 `true` 时 `borderRadius` 强制设为 `50%`）                                            | Boolean       | `false`     | `true` \| ``false``                                  |
| roundSize         | 圆形按钮（`round=true`）的直径                                                                 | String        | `45px`      | -                                              |
| borderRadius      | 按钮圆角大小                                                                                 | String        | `$normal` | -                                              |
| padding           | 按钮内边距                                                                                   | String       | `12px` |                                                |
| type              | 按钮主题样式类型 | String        | `info`      | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level             | 按钮等级         | String        | `first`     | `first` \| `second` \| `third` \| `least`              |
| align             | 按钮文本对齐方向                                                                             | String        | `center`    | -                     |
| textColor         | 按钮文本颜色                                                                                 | String        | -        | -                                              |
| disabledTextColor | 禁用状态下按钮文本颜色                                                                       | String        | -        | -                                              |
| bgColor           | 按钮背景颜色                                                                                 | String        | -        | -                                              |
| activeBgColor     | 按钮按下时背景颜色                                                                           | String        | -        | -                                              |
| disabledBgColor   | 禁用状态下按钮颜色                                                                           | String        | -        | -                                              |
| textSize          | 按钮文本大小                                                                                 | String        | -     | -                                              |
| textFont          | 按钮文本字体                                                                                 | String        | -        | -                                              |
| customStyle       | 自定义按钮样式                                                                               | UTSJSONObject | `{}`        | -                                              |
| customTextStyle   | 自定义按钮文本样式                                                                           | UTSJSONObject | `{}`        | -                                              |

## 事件

| 名称  | 类型                           | 说明           |
| :---- | :----------------------------- | :------------- |
| click | (e: UniPointerEvent) => Void | 点击按钮时触发 |

## 插槽

| 名称    | 说明                                       |
| ------- | ------------------------------------------ |
| default | 替换按钮内部原有的 `text` ，可以是任意组件 |


<DemoPhone name="sn-button" />