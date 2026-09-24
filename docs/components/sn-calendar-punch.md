# CalendarPunch  签到日历

## 基础用法

- 本组件为 `sn-calendar` 的打卡形态：基于 `sn-calendar-view` 封装（`type` 固定为 `single`）的签到打卡日历。
- 通过 `signedDates` 传入已打卡日期（`YYYY-MM-DD` 字符串数组）：已打卡日期显示 `signedDotColor`（默认主色）圆点；未打卡且可补签的日期显示 `unsignedDotColor`（默认警告色）圆点；今天以 `todayText` 文字高亮显示。
- `canSupplement` 设为 `false` 关闭补签：未打卡日期不再显示警告色圆点。
- 点击日期触发 `select` 事件，返回 `SnCalendarPunchDay`（含是否已打卡、是否可补签、完整日期字符串等）；组件本身不执行签到，业务侧在 `select` 回调中处理打卡 / 补签逻辑。
- `minDate` 默认为 6 个月前的当月 1 号；`firstDayOfWeek` 默认 `1`（周一），星期标题为「周日 ~ 周六」，月份标题格式为「YYYY年MM月」。

```vue
<template>
	<sn-calendar-punch v-model="selected" :signed-dates="signedDates" @select="onSelect"></sn-calendar-punch>
</template>

<script lang="uts" setup>
	import { dayuts } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarPunchDay, SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const signedDates = ref<string[]>([dayuts().format('YYYY-MM-06'), dayuts().format('YYYY-MM-09')])
	const selected = ref<SnCalendarValue>(null)

	function onSelect(day: SnCalendarPunchDay): void {
		if (day.signed) return
		signedDates.value.push(day.fullDate)
	}
</script>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 关闭补签

```vue
<template>
	<sn-calendar-punch v-model="selected" :signed-dates="signedDates" :can-supplement="false"></sn-calendar-punch>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值（type 固定为 single，实际为当天零点时间戳或 null） | SnCalendarValue | `null` | - |
| signedDates | 已打卡日期列表（YYYY-MM-DD，无效值自动忽略，按天匹配） | String[] | `[]` | - |
| canSupplement | 是否允许补签（为 true 时未打卡且不晚于今天的日期显示补签圆点） | Boolean | `true` | `true \| false` |
| signedDotColor | 已打卡圆点颜色，支持 $ 简写 | String | `$primary` | - |
| unsignedDotColor | 可补签圆点颜色，支持 $ 简写 | String | `$warning` | - |
| todayText | 今天日期显示的文字，空时显示原始日期 | String | `今天` | - |
| todayTextColor | 今天文字颜色，支持 $ 简写 | String | `$warning` | - |
| minDate | 最小可选日期（毫秒时间戳），默认 6 个月前的当月 1 号 | Number | - | - |
| maxDate | 最大可选日期（毫秒时间戳），默认当天起 6 个月 | Number | - | - |
| firstDayOfWeek | 每周第一天（0 为周日） | Number | `1` | `0~6` |
| readonly | 是否只读（禁用切换与选择） | Boolean | `false` | `true \| false` |
| titlePicker | 点击标题是否展开年月选择面板 | Boolean | `false` | `true \| false` |
| switchLongpress | 长按左右切换按钮是否连续切换 | Boolean | `true` | `true \| false` |
| showWatermark | 是否显示月份水印数字 | Boolean | `false` | `true \| false` |
| rowHeight | 单行日期高度 | String \| Number | `$48` | - |
| height | 视图整体高度 | String \| Number | `$420` | - |
| dayFontSize | 日期字号 | String \| Number | `$14` | - |
| dayRadius | 日期气泡圆角 | String \| Number | `$6` | - |
| dayGap | 日期气泡与单元格边缘的间距 | String \| Number | `$2` | - |
| selectedDayBgColor | 选中日期背景色，支持 $ 简写 | String | `$line` | - |
| selectedDayTextColor | 选中日期文字颜色，支持 $ 简写 | String | `$text` | - |
| dayTextColor | 日期文字颜色 | String | `$text` | - |
| adjacentDayTextColor | 非当前月日期文字颜色 | String | `$lineText` | - |
| disabledDayTextColor | 禁用日期文字颜色 | String | `$disabledText` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 外部样式类 | String | `''` | - |
| headerStyle | 自定义头部样式 | UTSJSONObject \| String | `''` | - |
| headerClass | 外部样式类 | String | `''` | - |
| switchStyle | 自定义月份切换按钮样式 | UTSJSONObject \| String | `''` | - |
| switchClass | 外部样式类 | String | `''` | - |
| weekdaysStyle | 自定义星期标题行样式 | UTSJSONObject \| String | `''` | - |
| weekdaysClass | 外部样式类 | String | `''` | - |
| weekdayStyle | 自定义单个星期标题样式 | UTSJSONObject \| String | `''` | - |
| weekdayClass | 外部样式类 | String | `''` | - |
| monthTitleStyle | 自定义月份标题文字样式 | UTSJSONObject \| String | `''` | - |
| monthTitleClass | 外部样式类 | String | `''` | - |

:::type-fields SnCalendarValue

选中值（`v-model`），随 `type` 变化：`single` 为时间戳 `number \| null`；`range` 为 `[]` 或 `[start, end]`（单点范围写成 `[same, same]`）；`multiple` 为时间戳数组 `number[]`。

| 类型 | 说明 |
| :--- | :--- |
| `number \| null` | `single` 模式：时间戳或空 |
| `number[]` | `multiple` 模式：时间戳数组 |
| `[]` \| `[start, end]` | `range` 模式：空或起止时间戳（单点范围写成 `[same, same]`） |

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| select | (day: [[SnCalendarPunchDay]]) => Void | 点击选中日期时触发，返回打卡信息（[[SnCalendarPunchDay]]，见下方类型） |
| panel-change | (detail: [[SnCalendarPanelChangeDetail]]) => Void | 面板所在月份变化时触发 |

:::type-fields SnCalendarPunchDay

打卡日历（sn-calendar-punch）单日信息。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当天零点毫秒时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月（1~12） |
| date | Number | 是 | 日 |
| fullDate | String | 是 | 完整日期字符串（`YYYY-MM-DD`） |
| signed | Boolean | 是 | 是否已打卡 |
| supplementable | Boolean | 是 | 是否可补签（`canSupplement` 开启、未打卡且不晚于今天） |
| today | Boolean | 是 | 是否今天 |

:::
:::type-fields SnCalendarPanelChangeDetail

`panel-change` 事件返回的面板切换详情：`timestamp`（面板首日时间戳）、`year`、`month`。

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollToDate | (value: Number) | - | 选中指定日期（毫秒时间戳）并跳转到其所在月份 |

## 类型

`SnCalendarPanelChangeDetail` 与 `format` 相关的 `SnCalendarDay` 等类型见 `sn-calendar-view` 文档的「类型」一节。

<DemoPhone name="sn-calendar-punch" />
