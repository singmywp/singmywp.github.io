# Checkbox  复选

> [查看 sn-checkbox 的 2.0 版本差异](/differences/components/sn-checkbox)

## 基础用法

复选组件，用于在一组选项中选中任意多项。

- 提供方框与标签两种形态的选项，可在同一组内混用
- 由复选组统一管理选中状态，选项按组内顺序分配索引
- 选中结果以索引数组双向绑定，支持任意多选

::: danger 选项必须放在复选组内
`sn-checkbox` 与 `sn-checkbox-tag` 自身不维护选中状态，必须作为 `sn-checkbox-group` 的子代使用，由组统一控制。
:::

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

## 实现原理

选项通过注入与复选组通信：每个选项在挂载时向组内登记并获得索引（两种形态混用时索引统一分配），选中状态由组统一维护。

组内选项自动换行排列，选项自带右、下外边距；`vertical` 为 `true` 时改为纵向排列。

## 注意事项

再次点击已选中的选项会取消该项选中，其索引从绑定数组中移除。

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
| type | 标签主题类型，覆盖组配置 `tag-type`；默认取组配置，兜底 `primary` | String | - | `primary` \| `info` \| `success` \| `error` \| `warning` |
| level | 标签等级（选中态配色深浅），覆盖组配置 `tag-level`；默认取组配置，兜底 `second` | String | - | `first` \| `second` \| `third` \| `least` |
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
| boxTextSize | 方框选项文本大小 | String \| Number | `$13` | - |
| boxTextColor | 方框选项文本颜色 | String | `$text` | - |
| disabledBoxTextColor | 禁用状态下方框选项文本颜色 | String | `$disabledText` | - |
| boxIcon | 勾选方框内图标名称 | String | `'check-fill'` | - |
| boxIconSize | 勾选方框内图标大小 | String \| Number | `$13` | - |
| boxIconColor | 勾选方框内图标颜色 | String | `'#fff'` | - |
| disabledBoxIconColor | 禁用状态下方框内图标颜色 | String | `'#fff'` | - |
| boxBorderColor | 勾选方框边框颜色 | String | `$line` | - |
| disabledBoxBorderColor | 禁用且未选中时方框边框颜色 | String | `$disabled` | - |
| boxActiveBorderColor | 选中时方框边框颜色 | String | `$primary` | - |
| disabledBoxActiveBorderColor | 禁用且选中时方框边框颜色 | String | `$disabledText` | - |
| boxBgColor | 勾选方框背景颜色 | String | `var(--sn-transparent)` | - |
| disabledBoxBgColor | 禁用且未选中时方框背景颜色 | String | `$disabled` | - |
| boxActiveBgColor | 选中时方框背景颜色 | String | `$primary` | - |
| disabledBoxActiveBgColor | 禁用且选中时方框背景颜色 | String | `$disabledText` | - |
| tagType | 标签选项主题类型 | String | `'primary'` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| tagLevel | 标签选项等级 | String | `'second'` | `first` \| `second` \| `third` \| `least` |
| tagBorderRadius | 标签选项圆角 | String \| Number | `'10px'` | - |
| tagPadding | 标签选项内边距 | String | `'6px 10px'` | - |
| tagTextSize | 标签选项文本大小 | String \| Number | `$12` | - |
| tagBgColor | 标签选项未选中时背景颜色 | String | `$info` | - |
| disabledTagBgColor | 禁用且未选中时标签背景颜色 | String | `$disabled` | - |
| tagActiveBgColor | 标签选项选中时背景颜色；默认由 `tag-type` + `tag-level` 决定 | String | - | - |
| disabledTagActiveBgColor | 禁用且选中时标签背景颜色 | String | `$disabledDark` | - |
| tagTextColor | 标签选项未选中时文本颜色 | String | `$text` | - |
| disabledTagTextColor | 禁用且未选中时标签文本颜色 | String | `$disabledText` | - |
| tagActiveTextColor | 标签选项选中时文本颜色；默认由 `tag-type` + `tag-level` 决定 | String | - | - |
| disabledTagActiveTextColor | 禁用且选中时标签文本颜色 | String | `$disabledDarkText` | - |
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
