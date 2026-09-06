# sn-actionsheet

> 旧版组件：sn-actionsheet.md

**旧版状态**：v1.1.6 已有 Actionsheet 操作菜单，底部弹出、`actions` 配置操作项，通过 `ref` 调用 `open`/`close`/`cancel` 方法，该交互骨架在 v2 中保留。

**差异明细**：

- 新增属性：`wrapStyle`、`wrapClass`、`panelStyle`、`panelClass`、`itemStyle`、`itemClass`、`itemBorder`、`itemHoverStyle`（v1 仅有 `customStyle` 一个样式扩展属性，v2 补齐了外层容器、面板、操作项多级样式透传与按压样式）
- 移除属性：`itemTextSize`、`itemPadding`（操作项文字大小固定为随字体乘数缩放的 14px、内边距固定为 `14px 10px`）；`borderRadius`（圆角改为随圆角乘数自动计算，不可配置）
- 类型或默认值变化：
  - `actions` 项类型 SnActionsheetItem → [SnDataItem](/api/types/api#sndataitem)
  - `titleSize` 默认值 `$2` → `$13`
  - `bgColor` 默认值 `$info` → `$front`
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String，默认值 `{}` → `''`
- 更名：事件 `clickMask` → `clickoverlay`
- 行为变化：
  - 事件体系重构：v1 仅 `clickMask`/`clickItem`/`cancel`/`open`/`close` 五个事件；v2 移除 `open`/`close` 事件，改为透传 sn-popup 的六段动画生命周期事件 `beforeenter`/`enter`/`afterenter`/`beforeleave`/`leave`/`afterleave`
  - 操作项文字颜色默认取主色（`$primary`）并居中显示，v1 样式倾向 iOS 列表左对齐
- 新增事件：`beforeenter`、`enter`、`afterenter`、`beforeleave`、`leave`、`afterleave`
- 方法：无变化（仍为 `open`/`close`/`cancel`）
- 插槽：无差异（新旧版均无插槽）
