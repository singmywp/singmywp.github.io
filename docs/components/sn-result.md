# Result 结果页
## 基本使用
- 用于展示某种结果信息，如成功、失败、警告等。
- 可包含图标、标题和文本内容。
```vue
<template>
	<sn-result mode="info"></sn-result>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数             | 说明                   | 类型          | 默认值          | 可选值                                      |
| ---------------- | ---------------------- | ------------- | --------------- | ------------------------------------------- |
| mode             | 结果页类型（图标类型） | String        | `info`          | `info` \| `success` \| `warning` \| `error` |
| title            | 标题文本               | String        | -               | -                                           |
| titleSize        | 标题大小               | String        | `$5`            | -                                           |
| titleColor       | 标题颜色               | String        | `$text`         | -                                           |
| text             | 文本内容               | String        | -               | -                                           |
| textSize         | 文本大小               | String        | `$3`            | -                                           |
| textColor        | 文本颜色               | String        | `$disabledText` | -                                           |
| iconSize         | 图标大小               | String        | `$8`            | -                                           |
| iconColor        | 图标颜色               | String        | -               | -                                           |
| customTitleStyle | 自定义标题样式         | UTSJSONObject | `{}`            | -                                           |
| customTextStyle  | 自定义文本样式         | UTSJSONObject | `{}`            | -                                           |
| customStyle      | 自定义样式             | UTSJSONObject | `{}`            | -                                           |
## 插槽
| 名称   | 说明           |
| ------ | -------------- |
| icon   | 替换结果图标   |
| title  | 替换结果标题   |
| text   | 替换结果文本   |
| action | 放置操作按钮等 |

<DemoPhone name="sn-result" />