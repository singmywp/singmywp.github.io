# Radio  单选

> [查看 sn-radio 的 2.0 版本差异](/differences/components/sn-radio)

## 基础用法

- 单选组件由三部分组成：`sn-radio-group`（单选组，管理选中状态与组级配置）、`sn-radio`（圆球形态选项）、`sn-radio-tag`（标签形态选项）。
- `sn-radio-group` 的 `v-model` 绑定选中项的索引（`0` 为第一项），同一时刻只能选中一项；点击已选中的选项不会重复触发事件。
- 每一个选项（`sn-radio` 或 `sn-radio-tag`）必须是 `sn-radio-group` 的子代，选项自身不维护选中状态，需通过组控制。
- 同一单选组内可混用 `sn-radio` 与 `sn-radio-tag`，索引统一分配。
- 选项默认自带右、下外边距，组内自动换行排列；`vertical` 为 `true` 时纵向排列。

```vue
<template>
	<sn-radio-group v-model="current">
		<sn-radio text="确定"></sn-radio>
		<sn-radio text="取消"></sn-radio>
		<sn-radio-tag text="稍后再说"></sn-radio-tag>
	</sn-radio-group>
</template>

<script lang="uts" setup>
const current = ref<number>(0)
</script>
```

**更多演示请下载 demo 查看**

## 组配置下发

`sn-radio-group` 上的尺寸、颜色与样式类等配置会统一下发到组内全部 `sn-radio` / `sn-radio-tag`（这些配置项构成组配置对象 `RadioGroupConfig`）。选项组件自身的同名属性（如 `text-class`、`type`、`level`）优先级高于组配置，可单独覆盖某一选项的表现。尺寸类属性支持 `$` 前缀动态尺寸（乘对应乘数），颜色类属性支持 `$` 简写（如 `$primary` 自动引用主题色变量）。

圆球选项的呈现方式：未选中时圆球为 `line` 色描边、内部圆点为 `front` 色；选中时圆球填充主题色（默认 `$primary`）、内部圆点仍为 `front` 色，形成"彩环 + 白点"效果。

## sn-radio 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 圆球右侧的文本内容 | String | `''` | - |
| disabled | 是否禁用该选项 | Boolean | `false` | `true` \| `false` |
| containStyle | 自定义选项整行容器样式（仅当前选项生效） | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义圆球样式（仅当前选项生效） | UTSJSONObject \| String | `''` | - |
| textClass | 文本的外部样式类 | String | `''` | - |
| textStyle | 自定义文本样式（仅当前选项生效） | UTSJSONObject \| String | `''` | - |

## sn-radio-tag 属性

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

## sn-radio-group 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，当前选中项的索引 | Number | `0` | - |
| vertical | 是否纵向排列 | Boolean | `false` | `true` \| `false` |
| radioSize | 圆球直径 | String \| Number | `'20px'` | - |
| radioBorderWidth | 圆球边缘与内部圆点之间的间隙宽度（圆点直径 = 圆球直径 - 2 × 该值） | String \| Number | `'2px'` | - |
| radioTextSize | 选项文本大小 | String \| Number | `''`（默认 13px × fontsizeFactor） | - |
| radioBgColor | 未选中时圆球内部圆点颜色 | String | `''`（默认主题 `front` 色） | - |
| disabledRadioBgColor | 禁用且未选中时圆点颜色 | String | `''`（默认主题 `front` 色） | - |
| radioActiveBgColor | 选中时圆点颜色 | String | `''`（默认主题 `front` 色） | - |
| disabledRadioActiveBgColor | 禁用且选中时圆点颜色 | String | `''`（默认主题 `front` 色） | - |
| radioTextColor | 选项文本颜色 | String | `''`（默认主题 `text` 色） | - |
| disabledRadioTextColor | 禁用状态下选项文本颜色 | String | `''`（默认主题 `disabledText` 色） | - |
| radioBorderColor | 未选中时圆球颜色 | String | `''`（默认主题 `line` 色） | - |
| disabledRadioBorderColor | 禁用且未选中时圆球颜色 | String | `''`（默认主题 `disabled` 色） | - |
| radioActiveBorderColor | 选中时圆球颜色 | String | `''`（默认主题 `primary` 色） | - |
| disabledRadioActiveBorderColor | 禁用且选中时圆球颜色 | String | `''`（默认主题 `disabledDark` 色） | - |
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
| radioContainStyle | 自定义圆球选项整行容器样式 | UTSJSONObject \| String | `''` | - |
| radioStyle | 自定义圆球样式 | UTSJSONObject \| String | `''` | - |
| tagStyle | 自定义标签选项样式 | UTSJSONObject \| String | `''` | - |
| textStyle | 自定义选项文本样式 | UTSJSONObject \| String | `''` | - |
| radioContainClass | 圆球选项整行容器的外部样式类 | String | `''` | - |
| radioClass | 圆球的外部样式类 | String | `''` | - |
| tagClass | 标签选项根节点的外部样式类 | String | `''` | - |
| textClass | 选项文本的外部样式类 | String | `''` | - |
| customStyle | 自定义单选组根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

**sn-radio-group**

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number) => Void | 选中项变化时触发，携带新选中的索引 |

## 插槽

**sn-radio**

| 名称 | 说明 |
| --- | --- |
| default | 替换圆球右侧的文本内容，可以是任意内容 |

**sn-radio-tag**

| 名称 | 说明 |
| --- | --- |
| default | 替换标签内部的文本内容，可以是任意内容 |

**sn-radio-group**

| 名称 | 说明 |
| --- | --- |
| default | 放置子组件 `sn-radio` 或 `sn-radio-tag` |

<DemoPhone name="sn-radio" />
