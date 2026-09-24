# CalendarWeek  周日历

## 基础用法

- 本组件为 `sn-calendar` 的周视图形态：一次只显示一周（7 天）的周日历，左右滑动切换周，也可单独使用。
- v-model 为选中日期的当天零点毫秒时间戳（Number）或 `null`，点击日期选中，选中项以高亮底色显示。
- 左右切换按钮按「日」为粒度移动选中日期（上一天 / 下一天）；横向滑动按「周」切换。
- `weekStart` 设置每周起始日（默认周日）；`weekTitles` 自定义七天标题（随 `weekStart` 自动轮转）。
- `minDate` / `maxDate` / `disabledDates` 之外的日期自动禁用；视图绘制到 `minDate` / `maxDate` 所在的周，两者均不限制时从当前周开始。
- `format` 格式化函数返回 `showDot` / `dotColor` 时在日期下方绘制事件圆点。

```vue
<template>
	<sn-calendar-week v-model="date" @week-change="onWeekChange"></sn-calendar-week>
</template>

<script lang="uts" setup>
	import { dayuts } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarValue, SnCalendarWeekChangeDetail } from '@/uni_modules/sinle-ui/index.uts'

	const date = ref<SnCalendarValue>(dayuts().startOf('day').valueOf())

	function onWeekChange(detail: SnCalendarWeekChangeDetail): void {
		console.log(detail.year, detail.month)
	}
</script>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 范围、禁用日期与圆点

```vue
<template>
	<sn-calendar-week v-model="date" :min-date="minDate" :max-date="maxDate"
		:disabled-dates="disabledDates" :format="markFormatter" week-start="monday"></sn-calendar-week>
</template>

<script lang="uts" setup>
	import { dayuts, createCalendarDayContent } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarDay, SnCalendarDayFormatter, SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const date = ref<SnCalendarValue>(dayuts().startOf('day').valueOf())
	const minDate = ref<number>(dayuts().subtract(1, 'month').startOf('day').valueOf())
	const maxDate = ref<number>(dayuts().add(1, 'month').startOf('day').valueOf())
	const disabledDates = ref<number[]>([dayuts().add(1, 'day').startOf('day').valueOf()])

	const markFormatter: SnCalendarDayFormatter = (day: SnCalendarDay) => {
		if (day.date % 5 == 0) return createCalendarDayContent({ showDot: true, dotColor: '$success' })
		return null
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 选中的日期（当天零点毫秒时间戳） | Number \| null | `null` | - |
| minDate | 最小可选日期（毫秒时间戳），null 不限制 | Number | `null` | - |
| maxDate | 最大可选日期（毫秒时间戳），null 不限制 | Number | `null` | - |
| disabledDates | 禁用日期列表（毫秒时间戳数组，无效值自动忽略） | Number[] \| null | `null` | - |
| weekStart | 每周起始日 | String | `sunday` | `sunday \| monday \| tuesday \| wednesday \| thursday \| friday \| saturday` |
| weekTitles | 七天标题（从周日开始排列，随 weekStart 轮转显示） | String[] | `['日', '一', '二', '三', '四', '五', '六']` | - |
| showSwitch | 是否显示左右切换按钮 | Boolean | `true` | `true \| false` |
| switchIconSize | 切换按钮图标大小 | String \| Number | `$18` | - |
| switchIconColor | 切换按钮图标颜色，支持 $ 简写 | String | `$textLight` | - |
| selectedBgColor | 选中日期背景色，支持 $ 简写 | String | `$primary` | - |
| selectedTextColor | 选中日期文字颜色，支持 $ 简写 | String | `$primaryText` | - |
| format | 单日格式化函数，返回 showDot / dotColor 时绘制圆点，返回 text 覆盖日期文字 | SnCalendarDayFormatter | `null` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 外部样式类 | String | `''` | - |
| switchStyle | 自定义切换按钮样式 | UTSJSONObject \| String | `''` | - |
| switchClass | 外部样式类 | String | `''` | - |
| weeksStyle | 自定义周滑动区样式 | UTSJSONObject \| String | `''` | - |
| weeksClass | 外部样式类 | String | `''` | - |
| weekStyle | 自定义单周容器样式 | UTSJSONObject \| String | `''` | - |
| weekClass | 外部样式类 | String | `''` | - |
| dayStyle | 自定义日期格样式 | UTSJSONObject \| String | `''` | - |
| dayClass | 外部样式类 | String | `''` | - |
| dayTitleStyle | 自定义周标题文字样式 | UTSJSONObject \| String | `''` | - |
| dayTitleClass | 外部样式类 | String | `''` | - |
| dayTextStyle | 自定义日期文字样式 | UTSJSONObject \| String | `''` | - |
| dayTextClass | 外部样式类 | String | `''` | - |

:::type-fields SnCalendarDayFormatter

日期格格式化器：返回 `null` 表示使用默认内容。

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| day | [[SnCalendarDay]] | 日期格信息 |
| 返回值 | [[SnCalendarDayContent]] \| null | 格式化后的内容，`null` 表示使用默认内容 |

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| select | (value: Number) => Void | 点击选中日期时触发 |
| change | (value: Number) => Void | 选中值变化时触发 |
| week-change | (detail: [[SnCalendarWeekChangeDetail]]) => Void | 当前周切换时触发（滑动、方法跳转均会触发） |

:::type-fields SnCalendarWeekChangeDetail

`week-change` 事件返回详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当前周第一天零点毫秒时间戳 |
| year | Number | 是 | 当前周第一天所在年 |
| month | Number | 是 | 当前周第一天所在月（1~12） |

---

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollToDate | (value: Number) | - | 选中指定日期（毫秒时间戳，自动裁剪到范围内）并跳转到其所在周 |

## 类型

### SnCalendarWeekStartDay

每周起始日：`'sunday'` | `'monday'` | `'tuesday'` | `'wednesday'` | `'thursday'` | `'friday'` | `'saturday'`。

:::type-fields SnCalendarWeekDay

单日数据（组件内部渲染使用）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当天零点毫秒时间戳 |
| text | String | 是 | 日期文字（可被 `format` 覆盖） |
| weekTitle | String | 是 | 周标题文字（如「周一」） |
| today | Boolean | 是 | 是否今天 |
| disabled | Boolean | 是 | 是否禁用 |
| showDot | Boolean | 是 | 是否显示圆点 |
| dotColor | String | 是 | 圆点颜色（支持 `$` 简写，默认警告色） |

:::

`format` 相关的 `SnCalendarDay` / `SnCalendarDayContent` / `SnCalendarDayPaint` 等类型见 `sn-calendar-view` 文档的「类型」一节。

<DemoPhone name="sn-calendar-week" />
