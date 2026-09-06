# sn-gap
> 旧版组件：sn-gap.md
**旧版状态**：占位间隔组件，通过 height / mode 占位，支持背景色与圆角。
**差异明细**：

- 新增属性、移除属性、更名：无（mode / height / bgColor / borderRadius / customStyle 全部保留）。
- 类型或默认值变化：
  - `bgColor` 默认值 `$transparent` → 空（默认透明 `var(--sn-transparent)`）；
  - `borderRadius` 默认值 `$normal` → 空（默认 8×圆角乘数）；
  - `height` 类型 String → String | Number；
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String。
- 行为变化：`height` 支持乘数简写，为空时默认取 20×内间距乘数（旧版为固定高度）；`mode="safearea"` 按窗口信息计算底部安全区高度。
- 新增事件、方法、插槽：无（本组件无事件、无方法、无插槽）。
