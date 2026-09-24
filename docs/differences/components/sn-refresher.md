# sn-refresher

**旧版状态**：v1.1.6 已有下拉刷新条组件，支持 `refresh` / `refreshing` 两种状态与图标、文本、颜色、字号自定义。
**差异明细**：

- 新增属性：
  - `hoverStopPropagation`（是否阻止点击态事件冒泡）
  - `customClass`（根节点外部样式类）
  - `iconClass` / `iconStyle`（图标节点外部样式类 / 内联样式）
  - `textClass` / `textStyle`（文本节点外部样式类 / 内联样式，内联样式默认带 6px 左边距）
  - `loadingClass` / `loadingStyle`（刷新中加载动画节点外部样式类 / 内联样式）
- 新增双向绑定：`v-model:refresher-triggered`（刷新状态，点击刷新条、调用 `startRefresh` / `stopRefresh` 时同步）
- 更名：无
- 类型或默认值变化：
  - `refreshText` / `refreshingText` 默认值：`松开刷新` / `刷新中` → 空串（为空时内部回退显示同文案，显示不变）
  - `textSize` / `iconSize` 默认值：`$2+1` → 空串（内部回退为 13px / 14px × 字体乘数）；类型 String → String | Number
  - `iconColor` / `textColor` 默认值：`$lineText` → 空串（内部回退主题线条文本色，显示不变）；类型 String → String
  - `icon` 默认值：`refresh-line` 不变（空串时内部回退 `refresh-line`）
  - `customStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - 旧版 `refresh` 事件在"status 切换为 refresh 时触发"；v2 改为 `refresh` 状态下点击刷新条时触发（即开始刷新时触发），并携带 `triggered: boolean` 参数，同时双向绑定 `refresher-triggered`
  - 刷新中状态改用 `sn-loading` 组件作为加载动画指示器
  - 新增按压点击态（常态微偏注入，按下时透明度变化）
- 新增方法：`startRefresh` / `stopRefresh`（主动开始 / 结束刷新）
- 插槽：无（新旧版均无插槽）
