# Checkbox  复选

## 基础用法

- 分为三个组件：`sn-checkbox-group` , `sn-chekbox` , `sn-checkbox-tag`。
- 每一个选项（`sn-checkbox`或`sn-checkbox-tag`）必须是`sn-checkbox-group`的子代。

```vue
<template>
	<sn-checkbox-group>
    	<sn-checkbox text="苹果"></sn-checkbox>
  		<sn-checkbox text="香蕉"></sn-checkbox>
  		<sn-checkbox text="菠萝"></sn-checkbox>
	</sn-checkbox-group>
</template>

```

**更多演示请下载 demo 查看**

## 属性

**sn-checkbox**

| 参数               | 说明                                          | 类型            | 默认值  | 可选值            |
| ------------------ | --------------------------------------------- | --------------- | ------- | ----------------- |
| text               | box复选组件右侧文本内容                       | String        | -       | -                 |
| icon               | box复选组件左侧方框内的图标                   | String        | -       | -                 |
| disabled           | 是否禁用                                      | Boolean       | `false` | `true` \| `false` |
| customContainStyle | 自定义box复选组件容器样式（仅针对单组件生效） | UTSJSONObject | `{}`    | -                 |
| customStyle        | 自定义box复选组件样式（仅针对单组件生效）     | UTSJSONObject | `{}`    | -                 |

**sn-checkbox-tag**

| 参数       | 说明                    | 类型    | 默认值  | 可选值                                         |
| ---------- | ----------------------- | ------- | ------- | ---------------------------------------------- |
| text       | tag复选组件内部文本内容 | String | - | -                                              |
| type       | tag复选组件主题样式类型 | String | `primary` | `info` \|`primary` \|`success` \|`error` \|`warning` |
| level | tag复选组件等级       | String | `second` | `first` \|`second` \|`third` \|`least` |
| disabled   | 是否禁用                | Boolean | `false` | `true` \| `false`                              |
| customStyle | 自定义tag复选组件样式（仅针对单组件生效） | UTSJSONObject | `{}` | - |

**sn-checkbox-group**

| 参数                         | 说明                                                         | 类型            | 默认值              | 可选值                                       |
| ---------------------------- | ------------------------------------------------------------ | --------------- | ------------------- | -------------------------------------------- |
| vModel                      | 当前选中项的索引数组                                         | Array\<Number\> | `[]`                | -                                            |
| vertical                     | 是否纵向排列                                                 | Boolean       | `false`             | `true` \| `false`                            |
| boxSize                      | box复选组件左侧方框边长                                      | String        | `$3+6`          | -                                            |
| boxBorderRadius              | box复选组件左侧方框的圆角大小                                | String        | `5px`               | -                                            |
| boxBorderWidth               | box复选组件左侧方框的边框宽度                                | String        | `2px`             | -                                            |
| boxTextSize                  | box复选组件右侧文本大小                                      | String        | `$3`             | -                                            |
| boxTextColor                 | box复选组件右侧文本颜色                                      | String        | `$text`          | -                                            |
| disabledBoxTextColor         | 禁用状态下box复选组件右侧文本颜色                            | String        | `$disabledText` | -                                            |
| boxIcon                      | box复选组件左侧方框内的图标                                  | String        | `check-fill`        | -                                            |
| boxIconSize                  | box复选组件左侧方框内的图标大小                              | String        | `$3`            | -                                            |
| boxIconColor                 | box复选组件左侧方框内的图标颜色                              | String        | `#fff`             | -                                            |
| disabledBoxIconColor         | 禁用状态下box复选组件左侧方框内的图标颜色                    | String        | `#fff`              | -                                            |
| boxBorderColor               | box复选组件左侧方框的边框颜色                                | String        | `$line` | -                                            |
| disabledBoxBorderColor       | 禁用状态下box复选组件左侧方框的边框颜色                      | String        | `$disabled`    | -                                            |
| boxActiveBorderColor         | box复选组件选中时左侧方框的边框颜色                          | String        | `$primary` | -                                            |
| disabledBoxActiveBorderColor | 禁用状态下box复选组件选中时左侧方框的边框颜色                | String        | `$disabledText` | -                                            |
| boxBgColor                   | box复选组件左侧方框的背景颜色                                | String        | `$transparent` | -                                            |
| disabledBoxBgColor           | 禁用状态下box复选组件左侧方框的背景颜色                      | String        | `$disabled`    | -                                            |
| boxActiveBgColor             | box复选组件选中时左侧方框的背景颜色                          | String        | `$primary`    | -                                            |
| disabledBoxActiveBgColor     | box复选组件选中时左侧方框的背景颜色                          | String        | `$disabledText` | -                                            |
| tagType                      | tag复选组件的主题类型（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `primary`           | `info` \|`primary` \|`success` \|`error` \|`warning` |
| taglevel                | tag复选组件的等级（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `second`            | `first` \|`second` \|`third` \|`least` |
| tagBgColor                   | tag复选组件未选中时背景颜色                                  | String        | - | -                                            |
| disabledTagBgColor           | 禁用状态下tag复选组件未选中时背景颜色                        | String        | - | -                                            |
| tagActiveBgColor             | tag复选组件选中时背景颜色                                    | String        | - | -                                            |
| disabledTagActiveBgColor     | 禁用状态下tag复选组件选中时背景颜色                          | String        | - | -                                            |
| tagTextColor                 | tag复选组件未选中时内部文本颜色                              | String        | - | -                                            |
| disabledTagTextColor         | 禁用状态下tag复选组件未选中时内部文本颜色                    | String        | - | -                                            |
| tagActiveTextColor           | tag复选组件选中时内部文本颜色                                | String        | - | -                                            |
| disabledTagActiveTextColor   | 禁用状态下tag复选组件选中时内部文本颜色                      | String        | - | -                                            |
| tagTextSize                  | tag复选组件内部文本大小                                      | String        | - | -                                            |
| tagBorderRadius              | tag复选组件圆角大小                                          | String        | `10px`              | -                                            |
| tagPadding                   | tag复选组件内边距                                            | String        | `5px 8px`           |                                              |
| customBoxContainStyle        | 自定义box复选组件容器样式                                    | UTSJSONObject | `{}`                | -                                            |
| customBoxStyle               | 自定义box复选组件左侧方框样式                                | UTSJSONObject | `{}`                | -                                            |
| customBoxIconStyle           | 自定义box复选组件左侧方框内部图标样式                        | UTSJSONObject | `{}`                | -                                            |
| customTagStyle               | 自定义tag复选组件样式                                        | UTSJSONObject | `{}`                | -                                            |
| customTextStyle              | 自定义复选组件文本样式                                       | UTSJSONObject | `{}`                | -                                            |

### 事件

**sn-checkbox-group**

| 事件名 | 类型                      | 说明                 |
| ------ | ------------------------- | -------------------- |
| change | `(value: number[])=>void` | 当前选中项变化时触发 |

## 插槽

**sn-checkbox**

| 名称    | 说明                                    |
| ------- | --------------------------------------- |
| default | 替换box复选组件内部文本，可以是任意内容 |

**sn-checkbox-group**

| 名称    | 说明                                              |
| ------- | ------------------------------------------------- |
| default | 这里放置子组件 `sn-checkbox` 或 `sn-checkbox-tag` |



<DemoPhone name="sn-checkbox" />