# sn-switch

> 旧版组件：sn-switch.md

**旧版状态**：v1.1.6 已提供基础开关，支持轨道/小球开、关、禁用三态配色及 loading、文本、图标等配置。

**差异明细**：

- 新增属性
  - `loadingClass`、`loadingStyle`（加载动画样式定制）、`thumbClass`、`thumbStyle`（小球样式定制）
- 移除属性：无
- 更名：无
- 类型或默认值变化
  - 尺寸类属性 `width`、`height`、`padding`、`iconSize`、`blockBorderRadius`、`textSize` 类型 String → String | Number，支持 `$` 前缀动态尺寸
  - `iconSize` 默认值 `-` → 空（默认 12px × fontsizeFactor）；`textSize` 默认值 `$2` → 空（默认 12px × fontsizeFactor）
  - `borderRadius` 默认值 `$circle` → 空（自动取高度一半，呈胶囊形）；`blockBorderRadius` 默认值 `$circle` → 空（自动取小球尺寸一半，呈圆形）
  - 颜色类属性统一支持 `$` 简写引用主题色变量
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String
- 行为变化
  - 旧属性 `vModel` 改为标准 `v-model`（Boolean 类型不变）
  - loading 状态明确为小球内显示加载动画（延迟 100ms 出现避免闪烁），loading 与禁用状态下点击不切换
  - 按下时开关整体呈 0.7 透明度按压反馈
  - 禁用时 Web 端显示 `not-allowed` 光标
- 新增事件、方法、插槽：无（`change` 事件保留）
