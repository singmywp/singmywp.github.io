# sn-result
> 旧版组件：sn-result.md
**旧版状态**：v1.1.6 已有结果页组件，支持五种模式、图标/标题/文本/操作区四个插槽与基础样式定制。
**差异明细**：

- 新增属性：
  - `titleClass`、`textClass`（标题/文本节点外部样式类）
  - `titleStyle`、`textStyle`（标题/文本节点内联样式，类型扩展支持字符串）
- 移除属性：`customTitleStyle`、`customTextStyle`
- 更名：`customTitleStyle` → `titleStyle`；`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `titleSize` / `textSize` / `iconSize` 类型：String → String | Number；默认值由 `$5` / `$3` / `$8` 改为 18px / 14px / 56px × 字体乘数
  - `titleColor` / `textColor` / `iconColor` 默认值改为空串（内部回退：标题主题文本色、正文主题浅文本色、图标随 mode 的功能色），其中 `textColor` 有效默认由 `$disabledText` 变为主题浅文本色
  - `titleColor` / `textColor` / `iconColor` 类型：String → String
  - `customStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - `primary` 模式图标与 `success` 相同（checkbox-circle-fill），颜色使用主题主色
  - 根节点增加主题过渡动画
- 新增事件、方法、插槽：无（`icon` / `title` / `text` / `action` 插槽均保留）
