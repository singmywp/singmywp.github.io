# sn-calendar-view
> 旧版组件：无（v2 新增）
**旧版状态**：旧版无此组件，SinleUI 2.0 新增的可滑动月历视图（sn-calendar 弹层与 sn-calendar-punch 签到日历的核心视图形态）。
**差异明细**：
- 新增属性：全部（type / minDate / maxDate / maxRange / rangePrompt / firstDayOfWeek / switchMode / format / localeText / rowHeight / height / showWatermark / watermarkColor / watermarkFontSize / titlePicker / switchLongpress / readonly / fullFillDates / allowCancel，dayTextColor / selectedDayBgColor / rangeDayBgColor / todayBorderColor 等全套日期颜色，dayFontSize / dayRadius / dayGap 等尺寸，以及 customStyle / customClass 与 header / switch / weekdays / month / watermark / 年月选择面板（picker*）等全套外部样式类）
- 移除属性：无
- 更名：无
- 类型或默认值变化：无
- 行为变化：无（组件为 v2 全新提供：single / range / multiple 三种选择模式、Canvas 绘制日期格与月份水印、箭头长按连切与横向滑动切月、titlePicker 年月选择面板、maxRange 超限提示、scrollToDate 定位、主题变化自动重绘、Web 端鼠标交互）
- 新增事件：select、change、panel-change
- 新增方法：scrollToDate
- 新增插槽：无
