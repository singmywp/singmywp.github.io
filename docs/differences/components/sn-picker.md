# sn-picker

> 旧版组件：sn-picker.md + sn-picker-view.md（合并为一篇）

**旧版状态**：v1.1.6 已有 sn-picker 与 sn-picker-view 两个组件，v2 合并写入同一篇文档，功能大幅扩展（外部样式透传、遮罩控制、抽屉动画事件等）。

**差异明细**（sn-picker 部分）：

- 新增属性：
  - `maskOpacity`（蒙层透明度，默认 0.4）
  - `preventBack`（是否阻止返回键关闭，默认 false）
  - 外部样式类与透传样式全套：`customStyle`、`headerStyle`/`headerClass`、`titleStyle`/`titleClass`、`closeButtonStyle`/`closeButtonClass`、`actionsStyle`/`actionsClass`、`cancelButtonStyle`/`cancelButtonClass`、`confirmButtonStyle`/`confirmButtonClass`、`itemStyle`/`itemClass`、`columnStyle`/`columnClass`
- 类型变化：
  - `height`、`titleSize`、`cancelTextSize`、`confirmTextSize`、`columnSpacing`、`actionSpacing`、`itemHeight`、`itemBorderRadius`、`itemTextSize`：String → String | Number（支持 `$` 动态尺寸）
  - `titleColor`、`itemTextColor`、`activeItemTextColor`、`disabledItemTextColor`：支持 `  - `titleColor`、`itemTextColor`、`activeItemTextColor`、`disabledItemTextColor` 简写
- 默认值变化：
  - `titleSize`：`$3` → `$14`
  - `cancelTextSize`：`$3` → `$14`
  - `confirmTextSize`：`$3` → `$14`
  - `itemBorderRadius`：无默认 → `$8`
  - `itemTextColor`：无默认 → `$textLight`（亮色模式）/ `$lineText`（暗黑模式）
  - `itemTextSize`：无默认 → `$13`
  - `activeItemTextColor`：无默认 → `$text`
  - `disabledItemTextColor`：无默认 → `$disabledText`
  - `title`：无默认 → 空字符串（为空时不渲染标题）
- 新增事件：`clickoverlay`、`beforeenter`、`enter`、`afterenter`、`beforeleave`、`leave`、`afterleave`（抽屉交互动画全周期事件）
- 新增方法：`open`、`close`（旧文档未记载方法）
- 行为变化：
  - 打开时将 v-model 复制为内部临时值，仅点击「确定」才写回 v-model 并触发 `change`（取消/遮罩/关闭按钮均不写入），旧版未明确该机制
  - `confirm` 事件在 `change` 之前触发

**差异明细**（sn-picker-view 部分）：

- 更名：`customItemStyle` → `itemStyle`；`customColumnStyle` → `columnStyle`
- 新增属性：`customClass`、`itemClass`、`columnClass`（外部样式类）
- 类型变化：
  - `height`、`itemHeight`、`itemBorderRadius`、`itemTextSize`、`columnSpacing`：String → String | Number
  - `itemTextColor`、`activeItemTextColor`、`disabledItemTextColor`：String → String
  - `customStyle`、`itemStyle`、`columnStyle`：UTSJSONObject → UTSJSONObject | String
- 默认值变化：`itemBorderRadius`：`$normal` → `$8`；`itemTextSize`：`$2` → `$13`
- 行为变化：
  - 旧版宣称"App 端使用 Drawable 绘制"，v2 改为基于官方 picker-view 的指示器样式实现（指示器背景 rgba、无上下渐隐遮罩）
  - 新增禁用项回弹与 disabled 透明遮罩拦截行为；v-model 与 data 变化自动格式化（补齐/截断列数）
