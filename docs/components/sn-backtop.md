# Backtop 回到顶部

## 基本使用

- 用于长页面，滑动一定距离后，出现回到顶部按钮，点击按钮快速返回顶部。自动绑定同级或父级 `sn-scroll`/`sn-longlist`/`sn-page`（不可用作 `sn-longlist` 子节点）

```vue
<template>
	<sn-page>
  		<sn-backtop></sn-backtop>
	</sn-page>
</template>

```

**更多演示请下载 demo 查看**

## 属性

| 参数        | 说明                                                         | 类型            | 默认值         | 可选值                                                |
| ----------- | ------------------------------------------------------------ | --------------- | -------------- | ----------------------------------------------------- |
| icon        | 回到顶部按钮内部图标                                         | String        | `skip-up-line` | -                                                     |
| shape       | 回到顶部按钮形状                                             | String        | `circle`       | `circle` \| `square`                                  |
| type        | 回到顶部按钮主题样式类型                                     | String        | `primary`      | `info` \|`primary` \|`success` \|`error` \| `warning` |
| level       | 回到顶部按钮等级                                             | String        | `first`        | `first` \|`second` \|`third` \| `least`               |
| bgColor     | 回到顶部按钮背景颜色，设置后将覆盖 `type` 和 `level` 所设置的主题色 | String        | -              | -                                                     |
| zIndex      | 回到顶部按钮的 `z-index`                                     | Number        | `$floatButton` | -                                                     |
| aniTime      | 回到顶部按钮动画时长                                         | Number        | `$normal`      | -                                                     |
| size        | 回到顶部按钮尺寸                                             | String        | `50px`         | -                                                     |
| top         | 滚动条滑动多少距离时显示，单位 `px`                          | Number        | `400`          | -                                                     |
| right       | 回到顶部按钮距右边界距离，单位 `px`                          | Number        | `30`           | -                                                     |
| bottom      | 回到顶部按钮距下边界距离，单位 `px`                          | Number        | `100`          | -                                                     |
| iconColor   | 回到顶部按钮内部图标颜色                                     | String        | -              | -                                                     |
| iconSize    | 回到顶部按钮内部图标大小                                     | String        | -              | -                                                     |
| disabled    | 是否禁用                                                     | Boolean       | `false`        | `true` \| `false`                                     |
| customStyle | 自定义回到顶部按钮样式                                       | UTSJSONObject | `{}`           | -                                                     |

## 事件

| 名称  | 类型                    | 说明           |
| ----- | ----------------------- | -------------- |
| click | `(e: UniEvent) => void` | 点击按钮时触发 |

<DemoPhone name="sn-backtop" />