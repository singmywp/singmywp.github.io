# Alert  警告信息

## 基本使用

- 用以展示警告信息。
- 多个属性，支持完全自定义样式。

```vue
<template>
	<sn-alert text="这是一条警告信息。"></sn-alert>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数            | 说明                               | 类型            | 默认值    | 可选值                                                   |
| --------------- | ---------------------------------- | --------------- | --------- | -------------------------------------------------------- |
| text            | 警告信息文本内容                   | String      | -         | -                                                        |
| icon            | 警告信息左侧图标名                 | String      | -         | -                                                        |
| type            | 警告信息主题样式类型               | String      | `primary` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| effect          | 警告信息显示效果，可设为暗色和亮色 | String      | `light`   | `light` \| `dark`                                        |
| bgColor         | 警告信息背景颜色                   | String        | -         | -                                                        |
| textColor       | 警告信息文本颜色                   | String        | -         | -                                                        |
| textSize        | 警告信息文本大小                   | String        | `14px`    | -                                                        |
| iconColor       | 警告信息左侧图标颜色               | String        | -         | -                                                        |
| iconSize        | 警告信息左侧图标大小               | String        | `17px`    | -                                                        |
| customStyle     | 自定义警告信息样式                 | UTSJSONObject | `{}`      | -                                                        |
| customTextStyle | 自定义警告信息文本样式             | UTSJSONObject | `{}`      | -                                                        |

## 插槽

| 名称    | 说明                                              |
| ------- | ------------------------------------------------- |
| default | 替换警告信息内部原有的图标和文字 ，可以是任意组件 |


<DemoPhone name="sn-alert" />