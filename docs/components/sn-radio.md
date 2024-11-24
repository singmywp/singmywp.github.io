# Radio  单选

## 基础用法

- 分为三个组件：`sn-radio-group` ,  `sn-radio` ,  `sn-radio-tag`。
- 每一个选项（`sn-radio` 或 `sn-radio-tag`）必须是 `sn-radio-group` 的子代。

```vue
<template>
	<sn-radio-group>
  		<sn-radio text="确定"></sn-radio>
  		<sn-radio text="取消"></sn-radio>
	</sn-radio-group>
</template>

```

**更多演示请下载 demo 查看**

## 属性

**sn-radio**

| 参数               | 说明                                            | 类型          | 默认值  | 可选值           |
| :----------------- | :---------------------------------------------- | :------------ | :------ | :--------------- |
| text               | radio单选组件文本内容                           | String        | -       | -                |
| disabled           | 是否禁用radio单选组件                           | Boolean       | `false` | `true` | `false` |
| customContainStyle | 自定义radio单选组件容器样式（仅针对单组件生效） | UTSJSONObject | `{}`    | -                |
| customStyle        | 自定义radio单选组件样式（仅针对单组件生效）     | UTSJSONObject | `{}`    | -                |

**sn-radio-tag**

| 参数        | 说明                                      | 类型          | 默认值    | 可选值                                                   |
| :---------- | :---------------------------------------- | :------------ | :-------- | :------------------------------------------------------- |
| text        | tag单选组件内部文本内容                   | String        | -         | -                                                        |
| type        | tag单选组件主题样式类型                   | String        | `primary` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level       | tag单选组件等级                           | String        | `second`  | `first` \|`second` \|`third` \|`least`                   |
| disabled    | 是否禁用                                  | Boolean       | `false`   | `true` | `false`                                         |
| customStyle | 自定义tag单选组件样式（仅针对单组件生效） | UTSJSONObject | `{}`      | -                                                        |

**sn-radio-group**

| 参数                           | 说明                                                         | 类型          | 默认值          | 可选值                                               |
| ------------------------------ | ------------------------------------------------------------ | ------------- | --------------- | ---------------------------------------------------- |
| vModel                        | 当前选中项的索引                                             | Number        | `0`             | -                                                    |
| vertical                       | 是否纵向排列                                                 | Boolean       | `false`         | `true` \|`false`                                     |
| radioTextSize                  | radio单选组件右侧文本大小                                    | String        | `$3`            | -                                                    |
| radioBgColor                   | radio单选组件左侧小圆球中间部分的颜色                        | String        | `$front`        | -                                                    |
| disabledRadioBgColor           | 禁用状态下radio单选组件左侧小圆球中间部分的颜色              | String        | `$front`        | -                                                    |
| radioTextColor                 | radio单选组件右侧文本颜色                                    | String        | `$text`         | -                                                    |
| disabledRadioTextColor         | 禁用状态下radio单选组件右侧文本颜色                          | String        | `$disabledText` | -                                                    |
| radioBorderColor               | radio单选组件未选中时左侧小圆球边缘部分的颜色                | String        | `$line`         | -                                                    |
| disabledRadioBorderColor       | 禁用状态下radio单选组件未选中时左侧小圆球边缘部分的颜色      | String        | `$disabled`     | -                                                    |
| radioActiveBorderColor         | radio单选组件选中时左侧小圆球边缘部分的颜色                  | String        | `$primary`      | -                                                    |
| disabledRadioActiveBorderColor | 禁用状态下radio单选组件选中时左侧小圆球边缘部分的颜色        | String        | `$disabledDark` | -                                                    |
| tagType                        | tag单选组件的主题类型（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `primary`       | `info` \|`primary` \|`success` \|`error` \|`warning` |
| taglevel                       | tag单选组件的等级（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `second`        | `first` \|`second` \|`third` \|`least`               |
| tagBorderRadius                | tag单选组件的边框圆角                                        | String        | `10px`          | -                                                    |
| tagPadding                     | tag单选组件的内边距                                          | String        | `6px 10px`      | -                                                    |
| tagTextSize                    | tag单选组件内部文本大小                                      | String        | `$2`            | -                                                    |
| tagBgColor                     | tag单选组件的背景颜色                                        | String        | -               | -                                                    |
| disabledTagBgColor             | 禁用状态下tag单选组件的背景颜色                              | String        | -               | -                                                    |
| tagActiveBgColor               | tag单选组件选中时的背景颜色                                  | String        | -               | -                                                    |
| disabledTagActiveBgColor       | 禁用状态下tag单选组件选中时的背景颜色                        | String        | -               | -                                                    |
| tagTextColor                   | tag单选组件内部文本颜色                                      | String        | -               | -                                                    |
| disabledTagTextColor           | 禁用状态下tag单选组件内部文本颜色                            | String        | -               | -                                                    |
| tagActiveTextColor             | tag单选组件选中时组件内部文本颜色                            | String        | -               | -                                                    |
| disabledTagActiveTextColor     | 禁用状态下tag单选组件选中时组件内部文本颜色                  | String        | -               | -                                                    |
| customRadioContainStyle        | 自定义radio单选框容器样式                                    | UTSJSONObject | `{}`            | -                                                    |
| customRadioStyle               | 自定义radio单选框样式                                        | UTSJSONObject | `{}`            | -                                                    |
| customTagStyle                 | 自定义tag单选组件样式                                        | UTSJSONObject | `{}`            | -                                                    |
| customTextStyle                | 自定义单选组件文字样式                                       | UTSJSONObject | `{}`            | -                                                    |
| customStyle                    | 自定义单选组样式                                             | UTSJSONObject | `{}`            | -                                                    |

## 事件

**sn-radio-group**

| 事件名 | 类型                | 说明                 |
| ------ | ------------------- | -------------------- |
| change | (v: Number)=>Void | 当前选中项变化时触发 |

## 插槽

**sn-radio**

| 名称    | 说明                                      |
| ------- | ----------------------------------------- |
| default | 替换radio单选组件内部文本，可以是任意内容 |

**sn-radio-group**

| 名称    | 说明                                        |
| ------- | ------------------------------------------- |
| default | 这里放置子组件 `sn-radio` 或 `sn-radio-tag` |

<DemoPhone name="sn-radio" />
