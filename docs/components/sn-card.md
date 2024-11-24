# Card  卡片

## 基础用法

- 用以展示数据内容。
- 多个属性，支持完全自定义样式。

```vue
<template>
	<sn-card title="卡片标题">
    	<sn-text text="卡片内容"></sn-text>
  	</sn-card>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数              | 说明                                         | 类型                                                     | 默认值            | 可选值            |
| ----------------- | -------------------------------------------- | -------------------------------------------------------- | ----------------- | ----------------- |
| title             | 卡片标题                                     | String                                                   | -                 | -                 |
| titleColor        | 卡片标题颜色                                 | String                                                   | `$title`          | -                 |
| titleFont         | 卡片标题字体                                 | String                                                   | `misans-semibold` | -                 |
| titleSize         | 卡片标题字体大小                             | String                                                   | `$4`              | -                 |
| titleLines        | 卡片标题最大显示行数，默认为 `-1` （不限制） | Number                                                   | `-1`              | -                 |
| avatarConfig      | 卡片头像参数配置                             | [`SnAvatarParams`](/api/types/components#snavatarparams) | `{}`              | -                 |
| bgColor           | 卡片背景颜色                                 | String                                                   | `$front`          | -                 |
| border            | 卡片边框样式                                 | String                                                   | `1px solid $line` | -                 |
| boxShadow         | 卡片阴影                                     | String                                                   | -                 | -                 |
| margin            | 卡片外边距                                   | String                                                   | `10px 0`          | -                 |
| padding           | 卡片内边距                                   | String                                                   | `10px`            | -                 |
| borderRadius      | 卡片圆角大小                                 | String                                                   | `$normal`         | -                 |
| section           | 是否显示章节标符                             | Boolean                                                  | `false`           | `true` \| `false` |
| sectionColor      | 章节标符颜色                                 | String                                                   | `$primary`        | -                 |
| customStyle       | 自定义卡片样式                               | UTSJSONObject                                            | `{}`              | -                 |
| customTitleStyle  | 自定义卡片标题样式                           | UTSJSONObject                                            | `{}`              | -                 |
| customHeaderStyle | 自定义卡片标题栏样式                         | UTSJSONObject                                            | `{}`              | -                 |
| customFooterStyle | 自定义卡片尾部区域样式                       | UTSJSONObject                                            | `{}`              | -                 |
| customActionStyle | 自定义卡片操作区域样式                       | UTSJSONObject                                            | `{}`              | -                 |

## 插槽

| 名称         | 说明                                 |
| ------------ | ------------------------------------ |
| default      | 放置卡片主体内容                     |
| avatar       | 放置卡片头像、LOGO等                 |
| header-extra | 可在卡片标题栏扩展区域放置按钮等组件 |
| title        | 用于替换默认的卡片标题文本           |
| footer       | 放置卡片尾部内容                     |
| action       | 放置卡片操作栏内容                   |


<DemoPhone name="sn-card" />