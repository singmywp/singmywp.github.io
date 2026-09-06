# sn-calendar-punch
> 旧版组件：无（v2 新增）
**旧版状态**：旧版无此组件，SinleUI 2.0 新增的签到打卡日历（基于 sn-calendar-view 封装，type 固定为 single）。
**差异明细**：
- 新增属性：全部（signedDates、canSupplement、signedDotColor、unsignedDotColor、todayText、todayTextColor、minDate、maxDate、firstDayOfWeek、readonly、titlePicker、switchLongpress、showWatermark、rowHeight、height、dayFontSize、dayRadius、dayGap、selectedDayBgColor、selectedDayTextColor、dayTextColor、adjacentDayTextColor、disabledDayTextColor 及 customStyle / customClass 与 header / switch / weekdays / weekday / monthTitle 等外部样式类）
- 移除属性：无
- 更名：无
- 类型或默认值变化：无
- 行为变化：无（组件为 v2 全新提供：signedDates 按天匹配打卡状态、已打卡主色圆点 / 可补签警告色圆点、今天文字高亮、select 事件返回 SnCalendarPunchDay）
- 新增事件：select（返回 SnCalendarPunchDay）、panel-change
- 新增方法：scrollToDate
- 新增插槽：无
