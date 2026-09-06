# sn-radio

> 旧版组件：sn-radio.md

**旧版状态**：v1.1.6 已提供 `sn-radio-group` / `sn-radio` / `sn-radio-tag` 三组件，索引单选，组级配置集中下发。

**差异明细**：

- 新增属性
  - `sn-radio`：`textClass`、`textStyle`
  - `sn-radio-tag`：`textClass`
  - `sn-radio-group`：`radioSize`（圆球直径）、`radioBorderWidth`（圆点与边缘间隙）、`radioActiveBgColor`、`disabledRadioActiveBgColor`（选中态圆点颜色）、`radioContainClass`、`radioClass`、`tagClass`、`textClass`
- 移除属性：无
- 更名
  - `sn-radio`：`customContainStyle` → `containStyle`
  - `sn-radio-group`：`customRadioContainStyle` → `radioContainStyle`、`customRadioStyle` → `radioStyle`、`customTagStyle` → `tagStyle`、`customTextStyle` → `textStyle`、`taglevel` → `tagLevel`
- 类型或默认值变化
  - 尺寸类属性（`radioTextSize`、`tagBorderRadius`、`tagTextSize`，以及新增的 `radioSize`、`radioBorderWidth`）类型 String → String | Number，支持 `$` 前缀动态尺寸；`radioTextSize` 默认值 `$3` → 空（默认 13px × fontsizeFactor）
  - 颜色类属性统一支持 `$` 简写引用主题色变量
  - 样式类属性 UTSJSONObject → UTSJSONObject | String
- 行为变化
  - 旧属性 `vModel` 改为标准 `v-model`（类型不变，仍为选中索引）
  - 组配置经依赖注入统一下发到子项，子项自身属性优先于组配置（可单独覆盖）；外部样式类经 external-class 机制传递（蒸汽模式样式隔离 2.0）
  - 圆球尺寸与内部圆点间隙可配置，选中/未选中态圆点颜色均可自定义
  - 禁用选项在 Web 端显示 `not-allowed` 光标
- 新增事件、方法、插槽：无（`change` 事件与 default 插槽保留）
