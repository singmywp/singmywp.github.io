# sn-label-radio

**旧版状态**：旧版为数据驱动的标签单选组件，提供 v-model（选中索引）、data、disabled、禁用色/选中色/图标位置等属性及 change 事件。
**差异明细**：
- 更名：`customItemStyle` → `itemStyle`（类型由 UTSJSONObject 调整为 UTSJSONObject | String，默认 `''`）
- 新增属性：`itemClass`（String，默认 `''`）：自定义每个选项的样式类
- 类型变化：`iconSize`、`textSize` 由 String 调整为 String | Number
- 默认值变化：`textSize` 旧版默认 `$2`，v2 默认 `''`（未设置时按 `14` × fontsizeFactor 计算）；`iconSize` 旧版默认 `-`，v2 默认 `''`（未设置时按 `16` × fontsizeFactor 计算）
- 默认值变化：各颜色属性（itemBgColor / activeItemBgColor / disabledItemBgColor / disabledTextColor / disabledIconColor / textColor / activeTextColor / iconColor）旧版直接默认主题变量（如 `$front`、`$disabledText`），v2 默认空字符串、内部解析为对应主题色（`$front` / `$info` / `$disabled` / `$disabledText` / `$text` / `$primary`），实际表现一致；类型统一标注为 String，支持 `$` 简写
- 类型变化：`customStyle` 由 UTSJSONObject 调整为 UTSJSONObject | String（默认 `''`）
- 行为变化：v2 基于 sn-cell 渲染选项，未选中项图标隐藏（透明），选中项显示图标并高亮文本；选项按压时应用 activeItemBgColor 背景；Web 端禁用项显示 `cursor: not-allowed`
- 事件 `change`（(value: number) => Void）保持不变；无插槽，保持不变
