# List 列表
## 基础用法
- List 组件用于显示列表信息、聊天信息，内置一套组件模板。
- 子组件可为 `sn-list-item` 和 `sn-list-chat`。
```vue
<template>
	<sn-list>
		<sn-list-item title="列表文字"></sn-list-item>
		<sn-list-item title="列表文字" rightText="右侧文字"></sn-list-item>
		<sn-list-item title="列表文字" note="列表描述信息" rightText="右侧文字"></sn-list-item>
	</sn-list>
</template>
```
**更多演示请下载 demo 查看**
## 属性

**sn-list**

| 参数        | 说明               | 类型          | 默认值   | 可选值            |
| ----------- | ------------------ | ------------- | -------- | ----------------- |
| showBorder  | 是否显示列表项边框分割线 | Boolean       | `true`   | `true` \| `false` |
| bgColor     | 列表背景颜色       | String        | `$front` | -                 |
| customStyle | 自定义列表样式     | UTSJSONObject | `{}`     | -                 |

**sn-list-item**

| 参数                 | 说明                                                 | 类型          | 默认值          | 可选值           |
| :------------------- | :--------------------------------------------------- | :------------ | :-------------- | :--------------- |
| ellipsis             | 文本溢出隐藏，可设置最大行数，超过则以省略号隐藏文本 | Number        | `0`             | -                |
| disabled             | 是否禁用列表项（只针对单个列表项）                   | Boolean       | `false`         | `true` |
| title                | 列表项标题                                           | String        | -               | -                |
| titleSize            | 列表项标题字体大小                                   | String        | `$2`            | -                |
| titleColor           | 列表项标题颜色                                       | String        | `$title`        | -                |
| note                 | 列表项副标题                                         | String        | -               | -                |
| noteSize             | 列表项副标题字体大小                                 | String        | `$1`            | -                |
| noteColor            | 列表项副标题颜色                                     | String        | `$textLight`    | -                |
| rightText            | 列表项右侧文本                                       | String        | -               | -                |
| rightTextSize        | 列表项右侧文本字体大小                               | String        | `$1`            | -                |
| rightTextColor       | 列表项右侧文本颜色                                   | String        | `$textLight`    | -                |
| avatarConfig | 列表项头像配置 | [SnAvatarParams](/api/types/components#snavatarparams) | `{}` | - |
| icon                 | 列表项图标名称                                       | String        | -               | -                |
| iconSize             | 列表项图标大小                                       | String        | `$4`            | -                |
| iconColor            | 列表项图标颜色                                       | String        | `$title`        | -                |
| showArrow            | 是否显示列表项右侧箭头                               | Boolean       | `false`         | `true` |
| bgColor              | 列表项背景颜色                                       | String        | `$transparent`  | -                |
| disabledBgColor      | 禁用时列表项的背景颜色                               | String        | `$disabled`     | -                |
| disabledTextColor    | 禁用时列表项的文本颜色                               | String        | `$disabledText` | -                |
| activeBgColor        | 激活时列表项的背景颜色                               | String        | `$info`         | -                |
| padding              | 列表项内边距                                         | String        | `13px 15px`     | -                |
| customTitleStyle     | 自定义列表项标题样式                                 | UTSJSONObject | `{}`            | -                |
| customNoteStyle      | 自定义列表项副标题样式                               | UTSJSONObject | `{}`            | -                |
| customRightTextStyle | 自定义列表项右侧文本样式                             | UTSJSONObject | `{}`            | -                |
| customAvatarStyle    | 自定义列表项头像样式                                 | UTSJSONObject | `{}`            | -                |
| customIconStyle      | 自定义列表项图标样式                                 | UTSJSONObject | `{}`            | -                |
| customBodyStyle      | 自定义列表项主体内容样式                             | UTSJSONObject | `{}`            | -                |
| customHeaderStyle    | 自定义列表项头部样式                                 | UTSJSONObject | `{}`            | -                |
| customFooterStyle    | 自定义列表项尾部样式                                 | UTSJSONObject | `{}`            | -                |
| customStyle          | 自定义列表项整体样式                                 | UTSJSONObject | `{}`            | -                |

**sn-list-chat**

| 参数               | 说明                         | 类型                                                 | 默认值          | 可选值              |
| :----------------- | :--------------------------- | :--------------------------------------------------- | :-------------- | :------------------ |
| disabled           | 是否禁用聊天列表项           | Boolean                                              | `false`         | `true` |
| title              | 聊天列表项标题               | String                                               | -               | -                   |
| titleSize          | 聊天列表项标题字体大小       | String                                               | `$3`            | -                   |
| titleColor         | 聊天列表项标题颜色           | String                                               | `$title`        | -                   |
| note               | 聊天列表项副标题             | String                                               | -               | -                   |
| noteSize           | 聊天列表项副标题字体大小     | String                                               | `$1`            | -                   |
| noteColor          | 聊天列表项副标题颜色         | String                                               | `$textLight`    | -                   |
| bgColor            | 聊天列表项背景颜色           | String                                               | `$transparent`  | -                   |
| disabledBgColor    | 禁用时聊天列表项的背景颜色   | String                                               | `$disabled`     | -                   |
| disabledTextColor  | 禁用时聊天列表项的文本颜色   | String                                               | `$disabledText` | -                   |
| activeBgColor      | 激活时聊天列表项的背景颜色   | String                                               | `$info`         | -                   |
| time               | 聊天列表项时间文本           | String                                               | -               | -                   |
| timeSize           | 聊天列表项时间文本字体大小   | String                                               | `12px`          | -                   |
| timeColor          | 聊天列表项时间文本颜色       | String                                               | `$textLight`    | -                   |
| badgeConfig        | 聊天列表项徽标配置           | [SnBadgeParams](/api/types/components#snbadgeparams) | `{}`            | -                   |
| avatarConfig | 聊天列表项头像配置 | [SnAvatarParams](/api/types/components#snavatarparams) | `{}` | - |
| padding            | 聊天列表项内边距             | String                                               | `8px 10px`      | -                   |
| customTitleStyle   | 自定义聊天列表项标题样式     | UTSJSONObject                                        | `{}`            | -                   |
| customNoteStyle    | 自定义聊天列表项副标题样式   | UTSJSONObject                                        | `{}`            | -                   |
| customAvatarStyle  | 自定义聊天列表项头像样式     | UTSJSONObject                                        | `{}`            | -                   |
| customBadgeStyle   | 自定义聊天列表项徽标样式     | UTSJSONObject                                        | `{}`            | -                   |
| customBodyStyle    | 自定义聊天列表项主体内容样式 | UTSJSONObject                                        | `{}`            | -                   |
| customHeaderStyle  | 自定义聊天列表项头部样式     | UTSJSONObject                                        | `{}`            | -                   |
| customFooterStyle  | 自定义聊天列表项尾部样式     | UTSJSONObject                                        | `{}`            | -                   |
| customTimeStyle    | 自定义聊天列表项时间文本样式 | UTSJSONObject                                        | `{}`            | -                   |
| customStyle        | 自定义聊天列表项整体样式     | UTSJSONObject                                        | `{}`            | -                   |

## 插槽

**sn-list**

| 名称    | 说明                                      |
| ------- | ----------------------------------------- |
| default | 此处放置 `sn-list-item` 或 `sn-list-chat` |


**sn-list-item**

| 名称    | 说明                               |
| ------- | ---------------------------------- |
| default | 替换列表项主体内容，可以是任意组件 |
| header  | 替换列表项头部内容，可以是任意组件 |
| footer  | 替换列表项尾部内容，可以是任意组件 |



**sn-list-chat**

| 名称    | 说明                                   |
| ------- | -------------------------------------- |
| default | 替换聊天列表项主体内容，可以是任意组件 |
| header  | 替换聊天列表项头部内容，可以是任意组件 |
| footer  | 替换聊天列表项尾部内容，可以是任意组件 |



<DemoPhone name="sn-list" />