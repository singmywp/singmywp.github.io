# Notice Bar 通知栏
## 基本使用
- 用于展示通知信息。
- 支持滚动和轮播两种模式，其中轮播支持纵向步进和横向步进。
- 可自定义样式和内容。
```vue
<template>
	<sn-notice-bar :texts="['这是第一条通知', '这是第二条通知']"></sn-notice-bar>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数            | 说明                                      | 类型            | 默认值           | 可选值              |
| :-------------- | :---------------------------------------- | :-------------- | :--------------- | :------------------ |
| texts           | 通知文本数组                              | Array\<String\> | -                | -                   |
| bgColor         | 通知栏背景颜色                            | String          | `$warningLight`  | -                   |
| textColor       | 通知文本颜色                              | String          | `$warning`       | -                   |
| textSize        | 通知文本大小                              | String          | `$2`             | -                   |
| icon            | 通知图标名称                              | String          | `volume-up-line` | -                   |
| iconColor       | 图标颜色                                  | String          | `$text`          | -                   |
| iconSize        | 图标大小                                  | String          | `$3`             | -                   |
| speed           | 滚动速度（单位：px/s）                    | Number          | `50`             | -                   |
| mode            | 显示模式（滚动或轮播）                    | String          | `scroll`         | `scroll` | `swiper` |
| swiperInterval  | 轮播间隔时间（单位：ms）                  | Number          | `2000`           | -                   |
| vertical        | 是否纵向步进（仅 `mode="swiper"` 时生效） | Boolean         | `false`          | `true` | `false`    |
| closable        | 是否显示关闭按钮                          | Boolean         | `false`          | `true` | `false`    |
| disabled        | 是否禁用通知栏                            | Boolean         | `false`          | `true` | `false`    |
| customStyle     | 自定义通知栏样式                          | UTSJSONObject   | `{}`             | -                   |
| customTextStyle | 自定义通知栏文本样式                      | UTSJSONObject   | `{}`             | -                   |
| customIconStyle | 自定义通知栏图标样式                      | UTSJSONObject   | `{}`             | -                   |

<DemoPhone name="sn-notice-bar" />