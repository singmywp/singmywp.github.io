# sn-modal

> 旧版组件：sn-modal.md

**旧版状态**：旧版已提供完整 UI 模态框（29 个属性、header/content/actions 插槽、5 个事件、open/close 方法）。

**差异明细**：

- 新增属性：`openAnimation`、`closeAnimation`
- 新增方法：`confirm`、`cancel`（模拟点击确定/取消按钮）
- 默认值变化：`titleSize` `$3+1` → `''`（空值时为 `$17`）；`titleFont` `misans-semibold` → `''`（不再默认指定字体）；`titleColor` `$title` → `''`（空值时使用主题标题色）；`bgColor` `$front` → `''`（空值时使用主题前景色）；`borderRadius` `$normal` → `''`（空值时为 `$12`）；`contentSize` `$2+1` → `''`（空值时为 `$15`）；`contentColor` `$text` → `''`（空值时使用主题正文色）；`contentFont` `misans-normal` → `''`；`confirmTextColor` `$primaryDark` → `''`（空值时使用主题 primaryDark 色）；`confirmTextSize` `$3` → `''`（空值时为 `$16`）；`cancelTextColor` `$text` → `''`（空值时使用主题正文色）；`cancelTextSize` `$3` → `''`（空值时为 `$16`）；`aniTime` `350ms` → `''`（空值时使用框架长动画时长）；`buttonBorder` `0.5px solid $line` → `''`（空值时为 `0.5px solid $line`，颜色部分支持 `$` 简写）
- 类型变化：`titleSize` / `contentSize` / `confirmTextSize` / `cancelTextSize` / `borderRadius` / `aniTime` String → String | Number；`titleColor` / `bgColor` / `contentColor` / `confirmTextColor` / `cancelTextColor` → String，支持 `$` 简写主题色；`customStyle` UTSJSONObject → UTSJSONObject | String
- 行为变化：内容区改为内置 scroll-view，超过窗口高度 80% 自动限高滚动；默认动画改为 CSS transition 过渡（遮罩与内容节点类名切换），传入 `openAnimation` / `closeAnimation` 后由自定义函数接管；`disabled` 时确定/取消按钮（含 confirm/cancel 方法）均不可触发，按钮颜色变为禁用色
- 事件、插槽无变化（`open` / `close` / `clickMask` / `confirm` / `cancel`；`header` / `content` / `actions`）
