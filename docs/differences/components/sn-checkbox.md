# sn-checkbox

> 旧版组件：sn-checkbox.md

**旧版状态**：v1.1.6 已提供 `sn-checkbox-group` / `sn-checkbox` / `sn-checkbox-tag` 三组件，索引数组多选，组级配置集中下发。

**差异明细**：

- 新增属性
  - `sn-checkbox`：`boxClass`、`boxIconClass`、`textClass`（外部样式类）
  - `sn-checkbox-tag`：`textClass`
  - `sn-checkbox-group`：`customStyle`（组根节点样式）、`boxContainClass`、`boxClass`、`boxIconClass`、`tagClass`、`textClass`
- 移除属性：无
- 更名
  - `sn-checkbox`：`customContainStyle` → `containStyle`
  - `sn-checkbox-group`：`customBoxContainStyle` → `boxContainStyle`、`customBoxStyle` → `boxStyle`、`customBoxIconStyle` → `boxIconStyle`、`customTagStyle` → `tagStyle`、`customTextStyle` → `textStyle`、`taglevel` → `tagLevel`
- 类型或默认值变化
  - 尺寸类属性（`boxSize`、`boxBorderRadius`、`boxBorderWidth`、`boxTextSize`、`boxIconSize`、`tagBorderRadius`、`tagTextSize`）类型 String → String | Number，支持 `$` 前缀动态尺寸；`boxSize` 默认值 `$3+6` → `19px`，`boxTextSize`、`boxIconSize` 默认值 `$3` → 空（默认 13px × fontsizeFactor）
  - `tagPadding` 默认值 `5px 8px` → `6px 10px`
  - 颜色类属性统一支持 `$` 简写引用主题色变量
  - 样式类属性 UTSJSONObject → UTSJSONObject | String
  - `sn-checkbox` 的 `customStyle` 作用目标调整为勾选方框，整行容器样式由 `containStyle` 负责
- 行为变化
  - 旧属性 `vModel` 改为标准 `v-model`（类型不变，仍为选中索引数组）
  - 组配置经依赖注入统一下发到子项，子项自身属性优先于组配置（可单独覆盖）；外部样式类经 external-class 机制传递（蒸汽模式样式隔离 2.0）
  - 禁用选项在 Web 端显示 `not-allowed` 光标
- 新增事件、方法、插槽：无（`change` 事件与 default 插槽保留）
