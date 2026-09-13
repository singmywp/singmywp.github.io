# Calendar  日历选择器

## 基础用法

- 从底部弹出的日历选择器，内部为可滑动月历 `sn-calendar-view`（本组件为它的弹层形态），支持 `single` 单选、`range` 范围、`multiple` 多选三种模式。
- 默认为「确认事务」模式（`showConfirm` 为 `true`）：每次打开以 v-model 重建内部草稿，选择过程只触发 `select`，点击「确定」才把草稿写入 v-model 并触发 `change`、`confirm`；点击「取消」、右上角关闭按钮或（`maskClose` 开启时的）遮罩会丢弃草稿并触发 `cancel`。
- `showConfirm` 设为 `false` 时为即时提交：每次选择直接写入 v-model 并触发 `change`。
- 支持通过 `v-model:visible` 双向控制显隐，或通过 `ref` 调用 `open` / `close` 方法。
- 弹出层类组件，需直接放在 `sn-page` 根节点下使用。

v-model 数据形态：`single` 为当天零点时间戳（Number）或 `null`；`range` 只会是 `[]` 或 `[开始, 结束]`（只选一天时两端为同一天）；`multiple` 为时间戳数组（选几个返回几个）。

```vue
<template>
	<sn-page>
		<sn-button text="选择日期" type="primary" @click="openCalendar"></sn-button>
		<sn-calendar ref="calendarEle" v-model="date" title="选择日期"></sn-calendar>
	</sn-page>
</template>

<script lang="uts" setup>
	import type { SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const calendarEle = ref<SnCalendarComponentPublicInstance | null>(null)
	const date = ref<SnCalendarValue>(null)

	function openCalendar(): void {
		calendarEle.value?.$callMethod('open')
	}
</script>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 范围选择（草稿确认）

```vue
<template>
	<sn-calendar v-model:visible="show" v-model="range" type="range" :max-range="7"
		title="选择日期范围" range-prompt="最多选择 7 天"></sn-calendar>
</template>
```

超出 `maxRange` 时会以 toast 提示，且本次点击不会生效。

### 即时提交（多选）

```vue
<template>
	<sn-calendar v-model="dates" type="multiple" :show-confirm="false" allow-cancel title="多选日期"></sn-calendar>
</template>
```

`allow-cancel` 开启后，再次点击已选日期可取消选择。

### 自定义单日内容

```vue
<template>
	<sn-calendar v-model="date" :format="formatDay" title="排班日历"></sn-calendar>
</template>

<script lang="uts" setup>
	import { createCalendarDayContent } from '@/uni_modules/sinle-ui/index.uts'
	import type { SnCalendarDay, SnCalendarDayFormatter, SnCalendarValue } from '@/uni_modules/sinle-ui/index.uts'

	const date = ref<SnCalendarValue>(null)

	const formatDay: SnCalendarDayFormatter = (day: SnCalendarDay) => {
		if (day.weekday == 0 || day.weekday == 6) {
			return createCalendarDayContent({ suffix: '休', paint: { suffixColor: '$warning' } })
		}
		return null
	}
</script>
```

## 属性

### 选择行为

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，形态随 `type` 变化（见上方基础用法说明） | [[SnCalendarValue]] | `null` | - |
| v-model:visible | 弹层显示状态（双向绑定） | Boolean | `false` | `true` \| `false` |
| type | 选择模式 | String | `single` | `single` \| `range` \| `multiple` |
| minDate | 最小可选日期（毫秒时间戳），默认当天 | Number | `null` | - |
| maxDate | 最大可选日期（毫秒时间戳），默认当天起 6 个月 | Number | `null` | - |
| maxRange | 限制范围选择的天数（含首尾）或多选的个数，0 表示不限制 | Number | `0` | - |
| rangePrompt | 超出 `maxRange` 时的提示文字，`{maxRange}` 会被替换为实际值，空时取 `localeText.rangePrompt` | String | `''` | - |
| firstDayOfWeek | 每周第一天（0 为周日） | Number | `0` | `0~6` |
| switchMode | 面板标题显示模式：`month` 显示「N月」，`year-month` 按 `yearMonthFormat` 显示年月 | String | `year-month` | `month` \| `year-month` |
| format | 单日内容格式化函数，可自定义文字与绘制样式，返回 `null` 保持默认 | [[SnCalendarDayFormatter]] | `null` | - |
| localeText | 内置文案配置（标题、按钮文字、星期标题、年月格式等） | [[SnCalendarLocaleText]] | `中文默认文案` | 见下方类型 |
| readonly | 是否只读（禁用面板切换与选择） | Boolean | `false` | `true` \| `false` |
| allowCancel | 再次点击已选日期是否取消选择 | Boolean | `false` | `true` \| `false` |
| fullFillDates | 是否绘制前后月份的补位日期 | Boolean | `false` | `true` \| `false` |

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
| title | String | 否 | 弹层标题，默认 `日期选择` |
| confirmText | String | 否 | 确定按钮文字，默认 `确定` |
| confirmDisabledText | String | 否 | 确定按钮禁用态文字，默认 `请选择日期`（当前版本未在界面使用） |
| rangePrompt | String | 否 | 超出 `maxRange` 提示文字，默认 `选择天数不能超过 {maxRange} 天` |
| weekdays | String[] | 否 | 星期标题（从周日开始排列），默认 `['日', '一', '二', '三', '四', '五', '六']` |
| yearMonthFormat | String | 否 | 年月标题格式，默认 `YYYY-MM` |

:::

### 标题与按钮

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 弹层标题，空时取 `localeText.title` | String | `''` | - |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true` \| `false` |
| showConfirm | 是否显示底部「取消 / 确定」按钮；为 `false` 时选择结果即时写入 v-model | Boolean | `true` | `true` \| `false` |
| confirmText | 确定按钮文字，空时取 `localeText.confirmText` | String | `''` | - |
| confirmDisabledText | 预留属性：确定按钮禁用态文字（当前版本未在界面使用） | String | `''` | - |
| forceEnableConfirm | 值未完成选择（`single` 未选 / `multiple` 为空 / `range` 不足两点）时是否仍允许点击确定 | Boolean | `false` | `true` \| `false` |

### 弹层

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| height | 弹层高度；为默认 `560px` 时按标题栏、月历视图与按钮区高度自动计算，传入其他值则固定使用 | String \| Number | `560px` | - |
| maskClose | 点击遮罩是否关闭（关闭时会丢弃草稿并触发 `cancel`） | Boolean | `true` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.4` | `0~1` |
| preventBack | 显示时是否阻止页面返回 | Boolean | `false` | `true` \| `false` |
| aniTime | 显隐动画时长（ms），支持 `$` 简写，空时取框架动画长时长 | String \| Number | `''` | - |
| zIndex | 弹出层层级 | Number | `999` | - |

### 月历视图

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| rowHeight | 单行日期高度 | String \| Number | `$48` | - |
| showMark | 预留属性（当前版本绘制中无可见效果） | Boolean | `true` | `true` \| `false` |
| showWatermark | 是否显示月份水印数字 | Boolean | `true` | `true` \| `false` |
| watermarkColor | 水印颜色，支持 `$` 简写，空时取主题线条文字色 | String | `''` | - |
| watermarkFontSize | 水印字号 | String \| Number | `$96` | - |
| titlePicker | 点击标题是否展开年月选择面板 | Boolean | `false` | `true` \| `false` |
| switchLongpress | 长按左右切换按钮是否连续切换（年月面板中的年步进器长按同样生效） | Boolean | `true` | `true` \| `false` |

### 日期颜色与尺寸

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
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

### 样式扩展

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 外部样式类 | String | `''` | - |
| headerStyle | 自定义头部区域样式 | UTSJSONObject \| String | `''` | - |
| headerClass | 外部样式类 | String | `''` | - |
| titleStyle | 自定义标题文字样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 外部样式类 | String | `''` | - |
| closeStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | `''` | - |
| closeClass | 外部样式类 | String | `''` | - |
| actionsStyle | 自定义底部按钮区样式 | UTSJSONObject \| String | `''` | - |
| actionsClass | 外部样式类 | String | `''` | - |
| confirmButtonStyle | 自定义确定按钮样式 | UTSJSONObject \| String | `''` | - |
| confirmButtonClass | 外部样式类 | String | `''` | - |
| viewStyle | 自定义内部月历视图根节点样式 | UTSJSONObject \| String | `''` | - |
| viewClass | 外部样式类 | String | `''` | - |
| viewHeaderStyle | 自定义月历视图头部样式 | UTSJSONObject \| String | `''` | - |
| viewHeaderClass | 外部样式类 | String | `''` | - |
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

### 年月选择面板

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| pickerLayerStyle | 自定义面板遮罩层样式 | UTSJSONObject \| String | `''` | - |
| pickerLayerClass | 外部样式类 | String | `''` | - |
| pickerPanelStyle | 自定义面板容器样式 | UTSJSONObject \| String | `''` | - |
| pickerPanelClass | 外部样式类 | String | `''` | - |
| pickerHeaderStyle | 自定义面板头部样式 | UTSJSONObject \| String | `''` | - |
| pickerHeaderClass | 外部样式类 | String | `''` | - |
| pickerYearStepperWrapStyle | 自定义年步进器容器样式 / 外部样式类，空时取 pickerTitleStyle / pickerTitleClass | UTSJSONObject \| String | `''` | - |
| pickerYearStepperWrapClass | 自定义年步进器容器样式 / 外部样式类，空时取 pickerTitleStyle / pickerTitleClass | String | `''` | - |
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
| pickerMonthsStyle | 自定义月份宫格容器样式 / 外部样式类，空时取 pickerBodyStyle / pickerBodyClass | UTSJSONObject \| String | `''` | - |
| pickerMonthsClass | 自定义月份宫格容器样式 / 外部样式类，空时取 pickerBodyStyle / pickerBodyClass | String | `''` | - |
| pickerMonthStyle | 自定义单个月份项样式 / 外部样式类，空时取 pickerRowStyle / pickerRowClass | UTSJSONObject \| String | `''` | - |
| pickerMonthClass | 自定义单个月份项样式 / 外部样式类，空时取 pickerRowStyle / pickerRowClass | String | `''` | - |
| pickerMonthTextStyle | 自定义月份文字样式 / 外部样式类，空时取 pickerLabelStyle / pickerLabelClass | UTSJSONObject \| String | `''` | - |
| pickerMonthTextClass | 自定义月份文字样式 / 外部样式类，空时取 pickerLabelStyle / pickerLabelClass | String | `''` | - |
| pickerTitleStyle | 年步进器容器兜底样式 / 外部样式类（pickerYearStepperWrapStyle / Class 为空时生效） | UTSJSONObject \| String | `''` | - |
| pickerTitleClass | 年步进器容器兜底样式 / 外部样式类（pickerYearStepperWrapStyle / Class 为空时生效） | String | `''` | - |
| pickerBodyStyle | 月份宫格兜底样式 / 外部样式类（pickerMonthsStyle / Class 为空时生效） | UTSJSONObject \| String | `''` | - |
| pickerBodyClass | 月份宫格兜底样式 / 外部样式类（pickerMonthsStyle / Class 为空时生效） | String | `''` | - |
| pickerRowStyle | 月份项兜底样式 / 外部样式类（pickerMonthStyle / Class 为空时生效） | UTSJSONObject \| String | `''` | - |
| pickerRowClass | 月份项兜底样式 / 外部样式类（pickerMonthStyle / Class 为空时生效） | String | `''` | - |
| pickerLabelStyle | 月份文字兜底样式 / 外部样式类（pickerMonthTextStyle / Class 为空时生效） | UTSJSONObject \| String | `''` | - |
| pickerLabelClass | 月份文字兜底样式 / 外部样式类（pickerMonthTextStyle / Class 为空时生效） | String | `''` | - |
| promptStyle | 自定义超限提示文字样式 | UTSJSONObject \| String | `''` | - |
| promptClass | 外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| select | (value: [[SnCalendarValue]]) => Void | 选择日期时触发（`showConfirm` 为 `true` 时基于内部草稿值） |
| change | (value: [[SnCalendarValue]]) => Void | 绑定值变化时触发：`showConfirm` 为 `true` 时点击确定后触发，为 `false` 时每次选择即时触发 |
| confirm | (value: [[SnCalendarValue]]) => Void | 点击确定按钮后触发，草稿此时写入 v-model |
| cancel | () => Void | 点击取消按钮、关闭按钮或（`maskClose` 开启时的）遮罩后触发，草稿被丢弃 |
| panel-change | (detail: [[SnCalendarPanelChangeDetail]]) => Void | 面板所在月份变化时触发 |
| open | () => Void | 弹层完全打开（入场动画结束）后触发 |
| close | () => Void | 弹层完全关闭（离场动画结束）后触发 |
| clickoverlay | () => Void | 点击遮罩时触发 |
| beforeenter | () => Void | 入场动画开始前触发 |
| enter | () => Void | 入场动画开始时触发 |
| afterenter | () => Void | 入场动画结束后触发 |
| beforeleave | () => Void | 离场动画开始前触发 |
| leave | () => Void | 离场动画开始时触发 |
| afterleave | () => Void | 离场动画结束后触发 |

:::type-fields SnCalendarPanelChangeDetail

`panel-change` 事件返回的面板切换详情：`timestamp`（面板首日时间戳）、`year`、`month`。

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开日历弹层 |
| close | - | - | 关闭日历弹层，丢弃未确认的草稿 |
| confirm | - | - | 确认当前草稿（等效点击确定按钮），写入 v-model 并关闭弹层 |
| scrollToDate | (value: Number) | - | 选中指定日期（毫秒时间戳）并跳转到其所在月份；弹层尚未渲染时会缓存该操作，打开后自动定位 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| header | 自定义整个头部区域（标题 + 关闭按钮） |
| title | 自定义标题文字区域 |
| footer | 自定义底部区域（取消 / 确定按钮组） |

## 类型

### SnCalendarValue

`Number | null | Number[]`：按 `type` 约定——`single` 为当天零点时间戳或 `null`；`range` 为 `[]` 或 `[开始, 结束]`（只选一天时两端相同）；`multiple` 为时间戳数组。赋入超出 `minDate` / `maxDate` 范围的值会被自动规范化（裁剪到范围内）。
`format` 相关的 `SnCalendarDay` / `SnCalendarDayContent` / `SnCalendarDayPaint` 等类型见 `sn-calendar-view` 文档的「类型」一节。

<DemoPhone name="sn-calendar" />
