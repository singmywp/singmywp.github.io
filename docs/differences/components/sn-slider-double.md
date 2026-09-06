# sn-slider-double

> 旧版组件：无（v2 新增）

**旧版状态**：旧版文档无独立条目，仅在 sn-slider 文档中提及存在 `sn-slider-double` 双向滑块（`vModel` 为 `Array<Number>`、`change` 事件），v2 提供独立组件与完整文档。

**差异明细**：

- 新增属性（v2 新增组件，全部属性均为新增，与 sn-slider 保持一致）：`v-model`（`Array<Number>`，默认 `[0, 0]`）、`vertical`、`min`、`max`、`step`、`disabled`、`activeColor`、`inactiveColor`、`thickness`、`borderRadius`、`thumbBorderRadius`、`thumbBorder`、`thumbSize`、`showValueText`、`valueTextWidth`、`customStyle`、`trackClass`、`trackStyle`、`activeClass`、`activeStyle`、`thumbClass`、`thumbStyle`、`valueTextClass`、`valueTextStyle`
- 行为变化（相对旧版简述）：
  - 拖动需按住滑块才能生效（触摸命中滑块判定），拖动结束时两值交叉自动交换排序，保证数组前项 ≤ 后项
  - `change` 事件在拖动松手后触发一次，携带排序后的最终区间；拖动过程中 v-model 实时更新但不触发 change
- 新增事件：`change`（旧版仅在 sn-slider 文档中简述）
- 新增方法、插槽：无
