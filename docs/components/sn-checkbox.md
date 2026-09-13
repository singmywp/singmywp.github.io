# Checkbox  复选

> [查看 sn-checkbox 的 2.0 版本差异](/differences/components/sn-checkbox)

## 基础用法

- 复选组件由三部分组成：`sn-checkbox-group`（复选组，管理选中状态与组级配置）、`sn-checkbox`（方框形态选项）、`sn-checkbox-tag`（标签形态选项）。
- `sn-checkbox-group` 的 `v-model` 绑定一个索引数组，每个选项按其在组内的顺序获得索引，选中多项时数组包含多个索引；点击已选中的选项会将其从数组中移除。
- 每一个选项（`sn-checkbox` 或 `sn-checkbox-tag`）必须是 `sn-checkbox-group` 的子代，选项自身不维护选中状态，需通过组控制。
- 同一复选组内可混用 `sn-checkbox` 与 `sn-checkbox-tag`，索引统一分配。
- 选项默认自带右、下外边距，组内自动换行排列；`vertical` 为 `true` 时纵向排列。

```vue
<template>
	<sn-checkbox-group v-model="checked">
		<sn-checkbox text="苹果"></sn-checkbox>
		<sn-checkbox text="香蕉"></sn-checkbox>
		<sn-checkbox-tag text="菠萝"></sn-checkbox-tag>
	</sn-checkbox-group>
</template>

<script lang="uts" setup>
const checked = ref<number[]>([])
</script>
```

**更多演示请下载 demo 查看**

## 组配置下发

`sn-checkbox-group` 上的尺寸、颜色与样式类等配置会统一下发到组内全部 `sn-checkbox` / `sn-checkbox-tag`（这些配置项构成组配置对象 `CheckboxGroupConfig`）。选项组件自身的同名属性（如 `icon`、`type`、`text-class`）优先级高于组配置，可单独覆盖某一选项的表现。尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数），颜色类属性支持 `$` 简写（如 `$primary` 自动引用主题色变量）。

## sn-checkbox 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 方框右侧的文本内容 | String | `''` | - |
| icon | 选中时方框内显示的图标名称，覆盖组配置 `box-icon` | String | `''` | - |
| disabled | 是否禁用该选项 | Boolean | `false` | `true` \| `false` |
| containStyle | 自定义选项整行容器样式（仅当前选项生效） | UTSJSONObject \| String | `''` | - |
| boxClass | 勾选方框的外部样式类 | String | `''` | - |
| customStyle | 自定义勾选方框样式（仅当前选项生效，定制整行容器用 `containStyle`） | UTSJSONObject \| String | `''` | - |
| boxIconClass | 方框内图标的外部样式类 | String | `''` | - |
| textClass | 文本的外部样式类 | String | `''` | - |

## sn-checkbox-tag 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 标签内部文本内容 | String | `''` | - |
| type | 标签主题类型，覆盖组配置 `tag-type` | String | `''`（默认取组配置，兜底 `primary`） | `primary` \| `info` \| `success` \| `error` \| `warning` |
| level | 标签等级（选中态配色深浅），覆盖组配置 `tag-level` | String | `''`（默认取组配置，兜底 `second`） | `first` \| `second` \| `third` \| `least` |
| disabled | 是否禁用该选项 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义标签样式（仅当前选项生效） | UTSJSONObject \| String | `''` | - |
| textClass | 文本的外部样式类 | String | `''` | - |

标签选项未选中时默认 `info` 色背景配 `text` 色文字；选中后配色由 `type` 与 `level` 共同决定：

| level | 背景 | 文字 |
| --- | --- | --- |
| first | `type` 对应原色（如 `$primary`） | `type` 对应文字色（如 `$primaryText`） |
| second | `type` 对应浅色（如 `$primaryLight`） | `type` 对应原色 |
| third | `info` 色 | `type` 对应原色 |
| least | 透明 | `type` 对应原色 |

禁用时未选中为 `disabled` 底配 `disabledText` 字，选中为 `disabledDark` 底配 `disabledDarkText` 字。

## sn-checkbox-group 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，当前选中项的索引数组 | `Array<Number>` | `[]` | - |
| vertical | 是否纵向排列 | Boolean | `false` | `true` \| `false` |
| boxSize | 勾选方框边长 | String \| Number | `'19px'` | - |
| boxBorderRadius | 勾选方框圆角 | String \| Number | `'5px'` | - |
| boxBorderWidth | 勾选方框边框宽度 | String \| Number | `'2px'` | - |
| boxTextSize | 方框选项文本大小 | String \| Number | `''`（默认 13px × fontsizeFactor） | - |
| boxTextColor | 方框选项文本颜色 | String | `''`（默认主题 `text` 色） | - |
| disabledBoxTextColor | 禁用状态下方框选项文本颜色 | String | `''`（默认主题 `disabledText` 色） | - |
| boxIcon | 勾选方框内图标名称 | String | `'check-fill'` | - |
| boxIconSize | 勾选方框内图标大小 | String \| Number | `''`（默认 13px × fontsizeFactor） | - |
| boxIconColor | 勾选方框内图标颜色 | String | `'#fff'` | - |
| disabledBoxIconColor | 禁用状态下方框内图标颜色 | String | `'#fff'` | - |
| boxBorderColor | 勾选方框边框颜色 | String | `''`（默认主题 `line` 色） | - |
| disabledBoxBorderColor | 禁用且未选中时方框边框颜色 | String | `''`（默认主题 `disabled` 色） | - |
| boxActiveBorderColor | 选中时方框边框颜色 | String | `''`（默认主题 `primary` 色） | - |
| disabledBoxActiveBorderColor | 禁用且选中时方框边框颜色 | String | `''`（默认主题 `disabledText` 色） | - |
| boxBgColor | 勾选方框背景颜色 | String | `''`（默认透明） | - |
| disabledBoxBgColor | 禁用且未选中时方框背景颜色 | String | `''`（默认主题 `disabled` 色） | - |
| boxActiveBgColor | 选中时方框背景颜色 | String | `''`（默认主题 `primary` 色） | - |
| disabledBoxActiveBgColor | 禁用且选中时方框背景颜色 | String | `''`（默认主题 `disabledText` 色） | - |
| tagType | 标签选项主题类型 | String | `'primary'` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| tagLevel | 标签选项等级 | String | `'second'` | `first` \| `second` \| `third` \| `least` |
| tagBorderRadius | 标签选项圆角 | String \| Number | `'10px'` | - |
| tagPadding | 标签选项内边距 | String | `'6px 10px'` | - |
| tagTextSize | 标签选项文本大小 | String \| Number | `''`（默认 12px × fontsizeFactor） | - |
| tagBgColor | 标签选项未选中时背景颜色 | String | `''`（默认主题 `info` 色） | - |
| disabledTagBgColor | 禁用且未选中时标签背景颜色 | String | `''`（默认主题 `disabled` 色） | - |
| tagActiveBgColor | 标签选项选中时背景颜色 | String | `''`（默认由 `tag-type` + `tag-level` 决定） | - |
| disabledTagActiveBgColor | 禁用且选中时标签背景颜色 | String | `''`（默认主题 `disabledDark` 色） | - |
| tagTextColor | 标签选项未选中时文本颜色 | String | `''`（默认主题 `text` 色） | - |
| disabledTagTextColor | 禁用且未选中时标签文本颜色 | String | `''`（默认主题 `disabledText` 色） | - |
| tagActiveTextColor | 标签选项选中时文本颜色 | String | `''`（默认由 `tag-type` + `tag-level` 决定） | - |
| disabledTagActiveTextColor | 禁用且选中时标签文本颜色 | String | `''`（默认主题 `disabledDarkText` 色） | - |
| boxContainStyle | 自定义方框选项整行容器样式 | UTSJSONObject \| String | `''` | - |
| boxStyle | 自定义勾选方框样式 | UTSJSONObject \| String | `''` | - |
| boxIconStyle | 自定义方框内图标样式 | UTSJSONObject \| String | `''` | - |
| tagStyle | 自定义标签选项样式 | UTSJSONObject \| String | `''` | - |
| textStyle | 自定义选项文本样式 | UTSJSONObject \| String | `''` | - |
| boxContainClass | 方框选项整行容器的外部样式类 | String | `''` | - |
| boxClass | 勾选方框的外部样式类 | String | `''` | - |
| boxIconClass | 方框内图标的外部样式类 | String | `''` | - |
| tagClass | 标签选项根节点的外部样式类 | String | `''` | - |
| textClass | 选项文本的外部样式类 | String | `''` | - |
| customStyle | 自定义复选组根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

**sn-checkbox-group**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number[]) => Void | 选中项变化时触发，携带最新的选中索引数组 |

## 插槽

**sn-checkbox**

| 名称 | 说明 |
| --- | --- |
| default | 替换方框右侧的文本内容，可以是任意内容 |

**sn-checkbox-tag**

| 名称 | 说明 |
| --- | --- |
| default | 替换标签内部的文本内容，可以是任意内容 |

**sn-checkbox-group**

| 名称 | 说明 |
| --- | --- |
| default | 放置子组件 `sn-checkbox` 或 `sn-checkbox-tag` |

<DemoPhone name="sn-checkbox" />
