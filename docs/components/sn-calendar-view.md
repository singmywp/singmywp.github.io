# CalendarView  月历视图

## 基础用法

- 本组件为 `sn-calendar` 的视图形态：内联在页面中的可滑动月历（无弹层），`sn-calendar`（弹层日历）与 `sn-calendar-punch`（签到日历）均基于它封装，也可单独使用。
- 点击左右箭头按钮或横向滑动切换月份，长按箭头可连续切换；`titlePicker` 开启后点击标题展开年月选择面板（年步进器 + 12 月宫格）。
- 日期格基于 Canvas 绘制，当前月中央叠加月份数字水印。
- 支持 `single` 单选、`range` 范围、`multiple` 多选三种模式：`single` 的 v-model 为当天零点时间戳或 `null`；`range` 只会是 `[]` 或 `[开始, 结束]`（只选一天时两端为同一天）；`multiple` 为时间戳数组。
- `minDate` 默认当天、`maxDate` 默认当天起 6 个月，超出范围的日期禁用；赋入超界的值会被自动规范化。`maxRange` 限制范围天数（含首尾）或多选个数，超出时以 toast 提示且本次选择不生效。
- Web 端额外支持鼠标点击与拖动选择；主题（颜色）变化时自动重绘。

```vue
<template>
	<sn-calendar-view v-model="date" type="single" height="420px"></sn-calendar-view>
</template>

<script lang="uts" setup>
	import type { SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const date = ref<SnCalendarValue>(null)
</script>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 范围选择与跳转日期

```vue
<template>
	<sn-calendar-view ref="viewEle" v-model="range" type="range" :max-range="7"
		height="420px" title-picker></sn-calendar-view>
</template>

<script lang="uts" setup>
	import { dayuts } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const viewEle = ref<SnCalendarViewComponentPublicInstance | null>(null)
	const range = ref<SnCalendarValue>([])

	function jump(): void {
		viewEle.value?.$callMethod('scrollToDate', dayuts('2032-06-15').startOf('day').valueOf())
	}
</script>
```

`scrollToDate` 会选中目标日期并跳转到其所在月份；`title-picker` 开启后也可点击标题展开年月面板跳转。

### 自定义单日内容与圆点

```vue
<template>
	<sn-calendar-view v-model="date" :format="formatDay" full-fill-dates></sn-calendar-view>
</template>

<script lang="uts" setup>
	import { createCalendarDayContent } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarDay, SnCalendarDayFormatter, SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const date = ref<SnCalendarValue>(null)

	const formatDay: SnCalendarDayFormatter = (day: SnCalendarDay) => {
		if (day.date % 5 == 0) {
			return createCalendarDayContent({ showDot: true, dotColor: '$success', dotPosition: 'bottom' })
		}
		return null
	}
</script>
```

`full-fill-dates` 开启后绘制前后月份的补位日期。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，形态随 type 变化（见基础用法说明） | SnCalendarValue | `null` | - |
| type | 选择模式 | String | `single` | `single \| range \| multiple` |
| minDate | 最小可选日期（毫秒时间戳），默认当天 | Number | `null` | - |
| maxDate | 最大可选日期（毫秒时间戳），默认当天起 6 个月 | Number | `null` | - |
| maxRange | 限制范围选择的天数（含首尾）或多选的个数，0 表示不限制 | Number | `0` | - |
| rangePrompt | 超出 maxRange 时的提示文字，{maxRange} 会被替换为实际值，空时取 localeText.rangePrompt | String | `''` | - |
| firstDayOfWeek | 每周第一天（0 为周日） | Number | `0` | `0~6` |
| switchMode | 面板标题显示模式：month 显示「N月」，year-month 按 yearMonthFormat 显示年月 | String | `year-month` | `month \| year-month` |
| format | 单日内容格式化函数，可自定义文字与绘制样式，返回 null 保持默认 | SnCalendarDayFormatter | `null` | - |
| localeText | 内置文案配置（星期标题、年月格式、超限提示等） | SnCalendarLocaleText | `中文默认文案` | 见下方类型 |
| rowHeight | 单行日期高度 | String \| Number | `$48` | - |
| height | 视图整体高度 | String \| Number | `$420` | - |
| showMark | 预留属性（当前版本绘制中无可见效果） | Boolean | `true` | `true \| false` |
| showWatermark | 是否显示月份水印数字 | Boolean | `true` | `true \| false` |
| watermarkColor | 水印颜色，支持 $ 简写，空时取主题线条文字色 | String | `$lineText` | - |
| watermarkFontSize | 水印字号 | String \| Number | `$96` | - |
| titlePicker | 点击标题是否展开年月选择面板 | Boolean | `false` | `true \| false` |
| switchLongpress | 长按左右切换按钮是否连续切换（年月面板中的年步进器长按同样生效） | Boolean | `true` | `true \| false` |
| readonly | 是否只读（禁用面板切换与选择） | Boolean | `false` | `true \| false` |
| fullFillDates | 是否绘制前后月份的补位日期 | Boolean | `false` | `true \| false` |
| allowCancel | 再次点击已选日期是否取消选择 | Boolean | `false` | `true \| false` |
| dayTextColor | 日期文字颜色，空时取主题文字色 | String | `''` | - |
| adjacentDayTextColor | 非当前月日期文字颜色，空时取主题线条文字色 | String | `''` | - |
| disabledDayTextColor | 禁用日期文字颜色，空时取主题禁用文字色 | String | `''` | - |
| selectedDayTextColor | 选中日期文字颜色，空时取主题主色文字色 | String | `''` | - |
| selectedDayBgColor | 选中日期背景色，空时取主题主色 | String | `''` | - |
| rangeDayTextColor | 范围中间日期文字颜色，空时取主题浅主色文字色 | String | `''` | - |
| rangeDayBgColor | 范围中间日期背景色，空时取主题浅主色 | String | `''` | - |
| prefixTextColor | 日期上标文字颜色，空时随日期文字颜色 | String | `''` | - |
| suffixTextColor | 日期下标文字颜色，空时随日期文字颜色 | String | `''` | - |
| todayBorderColor | 今天日期描边颜色，空时取主题主色 | String | `''` | - |
| dayFontSize | 日期字号 | String \| Number | `$14` | - |
| prefixFontSize | 上标字号 | String \| Number | `$8` | - |
| suffixFontSize | 下标字号 | String \| Number | `$8` | - |
| dayRadius | 日期气泡圆角 | String \| Number | `$6` | - |
| dayGap | 日期气泡与单元格边缘的间距 | String \| Number | `$2` | - |
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
| monthsStyle | 自定义月份滑动区样式 | UTSJSONObject \| String | `''` | - |
| monthsClass | 外部样式类 | String | `''` | - |
| monthStyle | 自定义单月容器样式 | UTSJSONObject \| String | `''` | - |
| monthClass | 外部样式类 | String | `''` | - |
| monthTitleStyle | 自定义月份标题文字样式 | UTSJSONObject \| String | `''` | - |
| monthTitleClass | 外部样式类 | String | `''` | - |
| watermarkStyle | 自定义月份水印样式 | UTSJSONObject \| String | `''` | - |
| watermarkClass | 外部样式类 | String | `''` | - |
| pickerLayerStyle | 自定义年月面板遮罩层样式 | UTSJSONObject \| String | `''` | - |
| pickerLayerClass | 外部样式类 | String | `''` | - |
| pickerPanelStyle | 自定义年月面板容器样式 | UTSJSONObject \| String | `''` | - |
| pickerPanelClass | 外部样式类 | String | `''` | - |
| pickerHeaderStyle | 自定义年月面板头部样式 | UTSJSONObject \| String | `''` | - |
| pickerHeaderClass | 外部样式类 | String | `''` | - |
| pickerYearStepperWrapStyle | 自定义年步进器容器样式 | UTSJSONObject \| String | `''` | - |
| pickerYearStepperWrapClass | 外部样式类 | String | `''` | - |
| pickerYearStepperStyle | 自定义年步进器样式 | UTSJSONObject \| String | `''` | - |
| pickerYearStepperSize | 年步进器尺寸 | String \| Number | `$32` | - |
| pickerYearStepperSpacing | 年步进器内间距 | String \| Number | `$8` | - |
| pickerYearStepperInputWidth | 年份输入框宽度 | String \| Number | `$92` | - |
| pickerYearStepperTextSize | 年步进器文字字号 | String \| Number | `$16` | - |
| pickerYearStepperTextColor | 年步进器文字颜色，支持 $ 简写 | String | `$text` | - |
| pickerYearStepperInputTextColor | 年份输入框文字颜色，支持 $ 简写 | String | `$text` | - |
| pickerYearStepperDisabledTextColor | 禁用态文字颜色，支持 $ 简写 | String | `$disabledText` | - |
| pickerYearStepperInputBgColor | 年份输入框背景色，支持 $ 简写 | String | `$page` | - |
| pickerYearStepperInputActiveBgColor | 年份输入框激活背景色，支持 $ 简写 | String | `$page` | - |
| pickerYearStepperDisabledBgColor | 禁用态背景色，支持 $ 简写 | String | `''` | - |
| pickerYearStepperButtonBgColor | 步进按钮背景色，支持 $ 简写 | String | `$page` | - |
| pickerYearStepperBorderRadius | 年步进器圆角 | String \| Number | `$8` | - |
| pickerYearStepperShowBorder | 年步进器是否显示边框 | Boolean | `false` | `true \| false` |
| pickerYearStepperBorderColor | 边框颜色，支持 $ 简写 | String | `''` | - |
| pickerYearStepperActiveBorderColor | 激活态边框颜色，支持 $ 简写 | String | `''` | - |
| pickerYearStepperBorderWidth | 边框宽度 | String \| Number | `2` | - |
| pickerYearStepperTextFont | 年步进器文字字体 | String | `''` | - |
| pickerYearStepperCursorColor | 输入光标颜色，支持 $ 简写 | String | `''` | - |
| pickerMonthsStyle | 自定义月份宫格容器样式 | UTSJSONObject \| String | `''` | - |
| pickerMonthsClass | 外部样式类 | String | `''` | - |
| pickerMonthStyle | 自定义单个月份项样式 | UTSJSONObject \| String | `''` | - |
| pickerMonthClass | 外部样式类 | String | `''` | - |
| pickerMonthTextStyle | 自定义月份文字样式 | UTSJSONObject \| String | `''` | - |
| pickerMonthTextClass | 外部样式类 | String | `''` | - |
| promptStyle | 自定义超限提示文字样式 | UTSJSONObject \| String | `''` | - |
| promptClass | 外部样式类 | String | `''` | - |

:::type-fields SnCalendarValue

选中值（`v-model`），随 `type` 变化：`single` 为时间戳 `number \| null`；`range` 为 `[]` 或 `[start, end]`（单点范围写成 `[same, same]`）；`multiple` 为时间戳数组 `number[]`。

| 类型 | 说明 |
| :--- | :--- |
| `number \| null` | `single` 模式：时间戳或空 |
| `number[]` | `multiple` 模式：时间戳数组 |
| `[]` \| `[start, end]` | `range` 模式：空或起止时间戳（单点范围写成 `[same, same]`） |

:::
:::type-fields SnCalendarDayFormatter

日期格格式化器：返回 `null` 表示使用默认内容。

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| day | [[SnCalendarDay]] | 日期格信息 |
| 返回值 | [[SnCalendarDayContent]] \| null | 格式化后的内容，`null` 表示使用默认内容 |

:::
:::type-fields SnCalendarLocaleText

日历文案配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| title | String | 否 | 弹层标题文案（视图内未使用，供弹层形态使用），默认 `日期选择` |
| confirmText | String | 否 | 确定按钮文案（供弹层形态使用），默认 `确定` |
| confirmDisabledText | String | 否 | 确定按钮禁用态文案，默认 `请选择日期` |
| rangePrompt | String | 否 | 超出 `maxRange` 提示文字，默认 `选择天数不能超过 {maxRange} 天` |
| weekdays | String[] | 否 | 星期标题（从周日开始排列），默认 `['日', '一', '二', '三', '四', '五', '六']` |
| yearMonthFormat | String | 否 | 年月标题格式，默认 `YYYY-MM` |

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| select | (value: [[SnCalendarValue]]) => Void | 选择日期时触发 |
| change | (value: [[SnCalendarValue]]) => Void | 绑定值变化时触发（与 `select` 同时触发） |
| panel-change | (detail: [[SnCalendarPanelChangeDetail]]) => Void | 面板所在月份变化时触发（箭头切换、滑动、年月面板跳转均会触发） |

:::type-fields SnCalendarPanelChangeDetail

`panel-change` 事件返回的面板切换详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当前面板月份第一天零点毫秒时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月（1~12） |

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| scrollToDate | (value: Number) | - | 选中指定日期（毫秒时间戳，自动裁剪到范围内）并跳转到其所在月份 |

## 类型

### SnCalendarType

选择模式：`'single'`（单选）| `'multiple'`（多选）| `'range'`（范围）。

### SnCalendarValue

`Number | null | Number[]`：按 `type` 约定——`single` 为当天零点时间戳或 `null`；`range` 为 `[]` 或 `[开始, 结束]`（只选一天时两端相同）；`multiple` 为时间戳数组。

### SnCalendarSwitchMode

面板标题显示模式：`'month'`（按月显示）| `'year-month'`（按年月显示）。

:::type-fields SnCalendarDay

单日数据，`format` 格式化函数的入参。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当天零点毫秒时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月（1~12） |
| date | Number | 是 | 日（1~31） |
| weekday | Number | 是 | 星期（0~6，0 为周日） |
| text | String | 是 | 日期文字（默认为「日」数字） |
| prefix | String | 是 | 上标文字（默认空） |
| suffix | String | 是 | 下标文字（默认空） |
| today | Boolean | 是 | 是否今天 |
| disabled | Boolean | 是 | 是否禁用（超出 `minDate` / `maxDate`） |
| currentMonth | Boolean | 是 | 是否属于当前面板月份 |
| state | [[SnCalendarDayState]] | 是 | 选中状态 |
| paint | [[SnCalendarDayPaint]] \| null | 是 | 绘制覆盖 |

:::

:::type-fields SnCalendarDayState

日期格状态：普通 / 选中 / 范围起点 / 范围中间 / 范围终点 / 起终点同日。

| 可选值 | 备注 |
| :--- | :--- |
| `normal` | 普通 |
| `selected` | 选中 |
| `range-start` | 范围起点 |
| `range-middle` | 范围中间 |
| `range-end` | 范围终点 |
| `range-start-end` | 起终点同日 |

:::
:::type-fields SnCalendarDayPaint

日期格绘制配置（由 `SnCalendarDayContent.paint` 携带，经 formatter 或 `createCalendarDayPaint` 构造）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| backgroundColor | String | 否 | 背景颜色 |
| borderColor | String | 否 | 边框颜色 |
| borderWidth | Number | 否 | 边框宽度 |
| fontSize | String \| Number | 否 | 日期字号 |
| prefixColor | String | 否 | 前缀文字颜色 |
| textColor | String | 否 | 日期文字颜色 |
| suffixColor | String | 否 | 后缀文字颜色 |
| prefixFontSize | Number | 否 | 前缀字号 |
| suffixFontSize | Number | 否 | 后缀字号 |
| fontWeight | String | 否 | 字重 |
| showDot | Boolean | 否 | 是否显示圆点 |
| dotColor | String | 否 | 圆点颜色 |
| dotPosition | SnCalendarDayDotPosition | 否 | 圆点位置 |

:::type-fields SnCalendarDayDotPosition

圆点标记位置。

| 可选值 | 备注 |
| :--- | :--- |
| `left` | 左侧 |
| `right` | 右侧 |
| `top` | 顶部 |
| `bottom` | 底部 |

:::

:::

### SnCalendarDayFormatter

`(day: SnCalendarDay) => SnCalendarDayContent | null`：单日内容格式化函数。返回 `null` 保持默认渲染；返回的 `prefix` / `text` / `suffix` / `paint` 仅覆盖对应字段。推荐使用工厂函数 `createCalendarDayContent` / `createCalendarDayPaint` 构造返回值（均已从插件出口 `@/uni_modules/sinle-ui/index.uts` 导出）。

:::type-fields SnCalendarDayContent

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| prefix | String \| null | 否 | 上标文字 |
| text | String \| null | 否 | 日期文字 |
| suffix | String \| null | 否 | 下标文字 |
| paint | [[SnCalendarDayPaint]] \| null | 否 | 绘制覆盖 |

:::

:::type-fields SnCalendarDayDotPosition

圆点标记位置。

| 可选值 | 备注 |
| :--- | :--- |
| `left` | 左侧 |
| `right` | 右侧 |
| `top` | 顶部 |
| `bottom` | 底部 |

:::

<DemoPhone name="sn-calendar-view" />

