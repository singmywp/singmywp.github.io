# sn-subsection

**旧版状态**：v1.1.6 已提供分段器，支持数据源、颜色、分段块样式定制与禁用。

**差异明细**：

- 新增属性
  - `customClass`（根节点外部样式类）、`itemClass`、`blockClass`、`textClass`（外部样式类）、`textStyle`（文本自定义样式）
- 移除属性：无
- 更名
  - `customItemStyle` → `itemStyle`
  - `customBlockStyle` → `blockStyle`
- 类型或默认值变化
  - 尺寸类属性 `padding`、`blockPadding`、`borderRadius`、`textSize` 类型 String → String | Number，支持 `$` 前缀动态尺寸
  - `borderRadius` 默认值 `$normal` → 空（默认 12px × radiusFactor）；`textSize` 默认值 `$2` → 空（默认 14px × fontsizeFactor）
  - `bgColor` 暗黑模式默认值 `$front` → `$info`（亮暗主题统一为 `info` 色）
  - `blockBgColor` 暗黑模式默认值 `$info` → `$front`（亮暗主题统一为 `front` 色）
  - 颜色类属性统一支持 `$` 简写引用主题色变量
  - 样式类属性 UTSJSONObject → UTSJSONObject | String
- 行为变化
  - 旧属性 `vModel` 改为标准 `v-model`（Number 索引不变）
  - 滑块尺寸根据容器实际尺寸动态计算：APP 端经 UniResizeObserver 监听容器尺寸变化、Web 端监听窗口 resize，自动重新测量
  - 滑块圆角根据外层圆角与滑块高度自动内缩
  - 禁用时 Web 端显示 `not-allowed` 光标
- 新增事件、方法、插槽：无（`change` 事件保留）
