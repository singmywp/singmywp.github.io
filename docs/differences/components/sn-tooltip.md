# sn-tooltip

**旧版状态**：旧版已提供提示框组件（10 个属性、trigger/default 插槽，无事件与方法）。

**差异明细**：

- 更名属性：`customTooltipStyle` → `tooltipStyle`；`customTriggerStyle` → `triggerStyle`
- 新增属性：`text`、`aniTime`、`tooltipClass`、`triggerClass`
- 类型变化：`width` / `height` / `borderRadius` String → String | Number；`bgColor` → String，支持 `$` 简写主题色；`customStyle` / `tooltipStyle` / `triggerStyle` Object → UTSJSONObject | String
- 默认值变化：`bgColor` 由无默认色改为 `''`（空值时使用主题信息色 `$info`）；`boxShadow` 由无默认阴影改为 `''`（空值时为 `0px 2px 10px 0px $infoDark`）
- 行为变化：改为基于 sn-popup 封装，提示框脱离文档流、按触发器位置自动定位（间距 5px）并自动避免超出屏幕（与屏幕边缘保持 4px）；点击触发器可再次切换开关，点击透明遮罩关闭；`aniTime` 空值时使用框架普通动画时长
- 插槽无变化（`trigger` / `default`）；事件、方法无（新旧均无）
