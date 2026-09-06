# sn-calendar
> 旧版组件：无（v2 新增）
**旧版状态**：旧版无此组件，SinleUI 2.0 新增的底部弹出式日历选择器（内部为 sn-calendar-view 弹层形态）。
**差异明细**：
- 新增属性：全部（type / minDate / maxDate / maxRange / rangePrompt / firstDayOfWeek / switchMode / format / localeText / readonly / allowCancel / fullFillDates 等选择行为属性；title / showClose / showConfirm / confirmText / confirmDisabledText / forceEnableConfirm 等标题按钮属性；height / maskClose / maskOpacity / preventBack / aniTime / zIndex 等弹层属性；rowHeight / showWatermark / watermarkColor / titlePicker / switchLongpress 及全套日期颜色尺寸属性；customStyle / customClass 与 header / title / close / actions / confirmButton / view / weekdays / month / watermark / 年月选择面板等全套外部样式类）
- 移除属性：无
- 更名：无
- 类型或默认值变化：无
- 行为变化：无（组件为 v2 全新提供：single / range / multiple 三种选择模式、确认事务草稿机制与即时提交、minDate / maxDate / maxRange 边界约束、年月选择面板、Canvas 绘制与 format 单日格式化、scrollToDate 定位）
- 新增事件：全部（select、change、confirm、cancel、panel-change、open、close、clickoverlay、beforeenter、enter、afterenter、beforeleave、leave、afterleave）
- 新增方法：open、close、confirm、scrollToDate
- 新增插槽：header、title、footer
