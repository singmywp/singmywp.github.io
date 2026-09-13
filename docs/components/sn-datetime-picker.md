# DatetimePicker  日期时间选择器

> [查看 sn-datetime-picker 的 2.0 版本差异](/differences/components/sn-datetime-picker)

## 基础用法

- 从底部弹出的日期时间滚动选择器，基于 `sn-drawer` + `sn-datetime-picker-view` 封装（视图懒渲染，首开性能更佳）。
- 仅点击「确定」按钮才把当前选择写入 v-model 并触发 `change` 事件；点击「取消」、遮罩或关闭按钮均不写入。
- v-model 支持 `String`（按 `format` 格式化的日期字符串）或 `Number`（时间戳，毫秒）；默认为当前时间。`start` / `end` 限制可选范围，未设置时默认为 10 年前至 10 年后。
- 使用时需放在 `sn-page` 根节点下。

```vue
<template>
	<sn-datetime-picker ref="pickerEle" v-model="value" mode="年月日" title="请选择日期"></sn-datetime-picker>
</template>
```

**更多演示请下载 demo 查看**

## 模式组合

`mode` 属性控制显示年、月、日、时、分、秒的组合，支持传入汉字或位掩码数字：

- **汉字组合**：直接传入连续的汉字（必须连续，不能出现"年分"这类跳级组合），如 `年月日`、`日时`。
- **位掩码**：数字对应 `1` 年、`2` 月、`4` 日、`8` 时、`16` 分、`32` 秒，可传按位或运算表达式的结果（如 `7` 即年月日），也支持包含汉字的混合写法。

```vue
<template>
	<sn-datetime-picker v-model="value1" mode="年月日"></sn-datetime-picker>
	<sn-datetime-picker v-model="value2" mode="时分"></sn-datetime-picker>
	<sn-datetime-picker v-model="value3" :mode="7"></sn-datetime-picker>
	<sn-datetime-picker v-model="value4" :mode="15"></sn-datetime-picker>
</template>
```

默认 `mode` 为 `7`（年月日）。以时/分/秒开头的纯时间模式下，时/分/秒范围由 `minHour` / `maxHour` 等属性控制；日期模式下列范围会随 `start` / `end` 与当前选中值逐级收窄（如选中最小年时月份列从最小月开始）。

## 过滤项

传入 `customFilter` 函数可对各列选项数组进行过滤，剔除指定项。此函数在每一列均会执行一次，请做好条件判断。

函数类型：`(type: SnDatetimePickerTimeModeValue, columns: SnDataItem[]) => SnDataItem[]`

- type：当前列类型，为 `year` / `month` / `date` / `hour` / `minute` / `second` 枚举值。
- columns：当前列的子项列表（`SnDataItem[]`，`id` 为该项数值文本）。

```vue
<template>
	<sn-datetime-picker v-model="value" :custom-filter="filter"></sn-datetime-picker>
</template>
<script lang="uts" setup>
	const filter = (type: SnDatetimePickerTimeModeValue, columns: SnDataItem[]): SnDataItem[] => {
		if (type == 'date') {
			return columns.filter((item: SnDataItem): boolean => parseInt(item.id!) % 2 != 0)
		}
		return columns
	}
</script>
```

## 自定义列标签

传入 `renderLabel` 函数可自定义各列标签（默认为"xxx年""xxx月"等，`showUnit` 为 false 时为纯数字）。此函数在每一子项均会执行一次，请做好条件判断。

函数类型：`(type: string, value: string) => string`

```vue
<template>
	<sn-datetime-picker v-model="value" :render-label="renderLabel"></sn-datetime-picker>
</template>
<script lang="uts" setup>
	const renderLabel = (type: string, value: string): string => {
		if (type == 'year') return `Y${value}`
		if (type == 'month') return `M${value}`
		return value
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的日期值（字符串按 format 解析，数字为毫秒时间戳） | SnDatetimePickerValue | `当前时间` | - |
| mode | 选择器模式（详见模式组合） | String \| Number | `7` | - |
| format | 日期格式化字符串（解析与输出均按此格式） | String | `YYYY-MM-DD HH:mm:ss` | - |
| start | 可选开始日期（无效或未设置时为 10 年前） | SnDatetimePickerValue | `null` | - |
| end | 可选结束日期（无效或未设置时为 10 年后） | SnDatetimePickerValue | `null` | - |
| customFilter | 自定义过滤项函数（详见过滤项） | Function | `null` | - |
| renderLabel | 自定义列标签函数（详见自定义列标签） | Function | `null` | - |
| showUnit | 是否显示单位（年/月/日/时/分/秒） | Boolean | `true` | `true \| false` |
| minHour | 最小小时值 | Number | `0` | `0~23` |
| maxHour | 最大小时值 | Number | `23` | `0~23` |
| minMinute | 最小分钟值 | Number | `0` | `0~59` |
| maxMinute | 最大分钟值 | Number | `59` | `0~59` |
| minSecond | 最小秒数值 | Number | `0` | `0~59` |
| maxSecond | 最大秒数值 | Number | `59` | `0~59` |
| disabled | 是否禁用选择器（选项不可滚动、按钮不可点击） | Boolean | `false` | `true \| false` |
| maskClose | 是否可以通过点击蒙层关闭选择器 | Boolean | `true` | `true \| false` |
| maskOpacity | 蒙层透明度 | Number | `0.4` | `0~1` |
| preventBack | 是否阻止返回键/返回手势关闭选择器 | Boolean | `false` | `true \| false` |
| height | 选择器整体高度（含标题与按钮区域） | String \| Number | `400px` | - |
| title | 选择器标题，为空时不显示标题 | String | - | - |
| titleAlign | 标题对齐方式 | String | `center` | `left \| center \| right` |
| titleColor | 标题颜色 | String | `$title` | - |
| titleSize | 标题大小 | String \| Number | `$14` | - |
| cancelText | 取消按钮文字 | String | `取消` | - |
| confirmText | 确定按钮文字 | String | `确定` | - |
| cancelTextSize | 取消按钮文字大小 | String \| Number | `$14` | - |
| confirmTextSize | 确定按钮文字大小 | String \| Number | `$14` | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` | `true \| false` |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | `true \| false` |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true \| false` |
| columnSpacing | 列之间的间距 | String \| Number | `10px` | - |
| actionSpacing | 取消/确定按钮之间的间距 | String \| Number | `10px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight（亮色模式）/ $lineText（暗黑模式）` | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| headerStyle | 自定义标题栏样式 | UTSJSONObject \| String | - | - |
| headerClass | 外部样式类 | String | - | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | - | - |
| titleClass | 外部样式类 | String | - | - |
| closeButtonStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | - | - |
| closeButtonClass | 外部样式类 | String | - | - |
| actionsStyle | 自定义底部按钮栏样式 | UTSJSONObject \| String | - | - |
| actionsClass | 外部样式类 | String | - | - |
| cancelButtonStyle | 自定义取消按钮样式 | UTSJSONObject \| String | - | - |
| cancelButtonClass | 外部样式类 | String | - | - |
| confirmButtonStyle | 自定义确定按钮样式 | UTSJSONObject \| String | - | - |
| confirmButtonClass | 外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 外部样式类 | String | - | - |

:::type-fields SnDatetimePickerValue

选中值（`v-model`）：时间戳数字或时间格式字符串。

| 类型 | 说明 |
| :--- | :--- |
| `string \| number` | 时间格式字符串或时间戳数字 |

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnDatetimePickerValue]]) => Void | 点击确定后，选中值写入 v-model 时触发 |
| confirm | () => Void | 点击确定按钮时触发（在 change 之前触发） |
| cancel | () => Void | 点击取消按钮时触发 |
| open | () => Void | 选择器打开后触发 |
| close | () => Void | 选择器关闭后触发 |
| clickoverlay | () => Void | 点击蒙层时触发 |
| beforeenter | () => Void | 进入动画开始前触发 |
| enter | () => Void | 进入动画开始时触发 |
| afterenter | () => Void | 进入动画结束后触发 |
| beforeleave | () => Void | 离开动画开始前触发 |
| leave | () => Void | 离开动画开始时触发 |
| afterleave | () => Void | 离开动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开选择器（打开前会将 v-model 当前值复制为内部临时值，仅确定后才写回） |
| close | - | - | 关闭选择器 |

---

## sn-datetime-picker-view 日期时间选择器容器

`sn-datetime-picker-view` 基于 `sn-picker-view` 封装，是日期时间选择的核心视图，可独立在页面内使用。v-model 与 `change` 事件值均为按 `format` 格式化的日期字符串（滚动时防抖 120ms 后更新）。

```vue
<template>
	<sn-datetime-picker-view v-model="value" mode="年月日"></sn-datetime-picker-view>
</template>
```

### sn-datetime-picker-view 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的日期值（字符串按 format 解析，数字为毫秒时间戳） | SnDatetimePickerValue | `当前时间` | - |
| mode | 选择器模式（同 sn-datetime-picker） | String \| Number | `7` | - |
| format | 日期格式化字符串 | String | `YYYY-MM-DD HH:mm:ss` | - |
| start | 可选开始日期（无效或未设置时为 10 年前） | SnDatetimePickerValue | `null` | - |
| end | 可选结束日期（无效或未设置时为 10 年后） | SnDatetimePickerValue | `null` | - |
| customFilter | 自定义过滤项函数 | Function | `null` | - |
| renderLabel | 自定义列标签函数 | Function | `null` | - |
| showUnit | 是否显示单位 | Boolean | `true` | `true \| false` |
| minHour | 最小/最大小时值 | Number | `0` | `0~23` |
| maxHour | 最小/最大小时值 | Number | `23` | `0~23` |
| minMinute | 最小/最大分钟值 | Number | `0` | `0~59` |
| maxMinute | 最小/最大分钟值 | Number | `59` | `0~59` |
| minSecond | 最小/最大秒数值 | Number | `0` | `0~59` |
| maxSecond | 最小/最大秒数值 | Number | `59` | `0~59` |
| disabled | 是否禁用选择器容器 | Boolean | `false` | `true \| false` |
| height | 选择器容器高度 | String \| Number | `250px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight（亮色模式）/ $lineText（暗黑模式）` | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| columnSpacing | 列间距 | String \| Number | `10px` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 外部样式类 | String | - | - |

### sn-datetime-picker-view 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnDatetimePickerValue]]) => Void | 滚动选择后触发（防抖 120ms），值为按 `format` 格式化的字符串 |

### 类型

**SnDatetimePickerValue**：`String | Number` —— 日期字符串（按 `format` 解析）或毫秒时间戳。

**SnDatetimePickerTimeModeValue**：`'year' | 'month' | 'date' | 'hour' | 'minute' | 'second'` —— 列类型枚举。

<DemoPhone name="sn-datetime-picker" />
