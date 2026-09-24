# sn-datetime-picker

**旧版状态**：v1.1.6 已有 sn-datetime-picker 与 sn-datetime-picker-view，v2 保留功能并大幅扩展样式透传与交互细节。

**差异明细**（sn-datetime-picker 部分）：

- 移除属性：`customPickerViewStyle`（内部视图样式改由 `itemStyle`/`columnStyle` 等分列控制）
- 移除插槽：`header`、`action`（v2 无插槽，标题/按钮区域经 externalStyle/externalClass 定制）
- 更名：`customItemStyle` → `itemStyle`；`customColumnStyle` → `columnStyle`
- 类型或默认值变化：
  - `modelValue` → `v-model`（SnDatetimePickerValue：String 按 format 解析 / Number 毫秒时间戳），默认值明确为当前时间
  - `mode`：无默认 → 默认 `7`（年月日）
  - `height`：`350px` → `400px`
  - `titleSize`：`$3` → `$14`；`cancelTextSize` / `confirmTextSize`：`$3` → `$14`
  - `showClose`：`false` → `true`
  - `itemHeight`、`itemBorderRadius`、`itemTextColor`、`itemTextSize`、`activeItemTextColor`、`disabledItemTextColor`、`columnSpacing`：选择器层级新增透传（默认 `$50`/`$8`/`$13` 等）
  - 各尺寸类属性：String → String | Number；颜色类支持 `  - 各尺寸类属性：String → String | Number； 简写；样式类：UTSJSONObject → UTSJSONObject | String
- 新增属性：`maskOpacity`、`itemClass`、`columnClass` 及全套外部样式类（`headerStyle`/`headerClass`、`titleStyle`/`titleClass`、`closeButtonStyle`/`closeButtonClass`、`actionsStyle`/`actionsClass`、`cancelButtonStyle`/`cancelButtonClass`、`confirmButtonStyle`/`confirmButtonClass`）
- 新增事件：`clickoverlay`、`beforeenter`、`enter`、`afterenter`、`beforeleave`、`leave`、`afterleave`
- 行为变化：
  - 视图懒渲染（首次 open 时才渲染 sn-datetime-picker-view），首开性能更佳
  - 打开时将 v-model 复制为内部临时值，仅点击「确定」才写回并触发 `change`；`confirm` 在 `change` 之前触发

**差异明细**（sn-datetime-picker-view 部分）：

- 移除属性：`resetIndex`（v2 删除，索引联动自动处理）
- 更名：`customItemStyle` → `itemStyle`；`customColumnStyle` → `columnStyle`
- 类型或默认值变化：
  - `modelValue` → `v-model`，默认值为当前时间
  - `mode`：无默认 → 默认 `7`
  - `height`：无默认 → `250px`；`itemHeight` → `$50`；`itemBorderRadius` → `$8`；`itemTextSize` → `$13`；其余颜色/间距均有默认值
  - 尺寸类：String → String | Number；颜色类支持 `  - 尺寸类：String → String | Number； 简写；样式类：UTSJSONObject → UTSJSONObject | String
- 新增属性：`customClass`、`itemClass`、`columnClass`
- 行为变化：
  - 改为基于 v2 `sn-picker-view` 实现（指示器样式、禁用项回弹、disabled 遮罩拦截）
  - 列数据与 start/end 联动逐级收窄；纯时间模式（时/分/秒开头）改由 minHour 等属性约束
  - `change` 输出按 `format` 格式化的字符串，滚动时防抖 120ms 后更新
