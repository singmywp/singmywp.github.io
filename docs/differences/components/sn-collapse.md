# sn-collapse

> 旧版组件：sn-collapse.md

**旧版状态**：旧版已存在 sn-collapse-group + sn-collapse-item 组合的折叠面板，v2 沿用组合结构，样式定制能力全面增强。

**差异明细**：

**sn-collapse-group**

- 新增属性：
  - `showBorder`：是否显示子项之间的分割线（功能由子项 `border` 迁移而来）
  - `titleClass` / `noteClass` / `holderClass`：group 级外部样式类，透传至所有子项
- 更名：`customTitleStyle` → `titleStyle`、`customNoteStyle` → `noteStyle`、`customHolderStyle` → `holderStyle`
- 类型或默认值变化：
  - `aniTime`：默认 `$normal` → `$snui.aniTimeNormal`（支持 `$` 简写）
  - `titleSize`：默认 `$3` → `15px × fontsizeFactor`
  - `noteSize`：默认 `$2` → `13px × fontsizeFactor`
  - `noteColor`：默认 `$line` → `$lineText`
  - `borderRadius`：默认 `$normal` → `8px × radiusFactor`
  - `customStyle` / `titleStyle` / `noteStyle` / `holderStyle`：类型 `UTSJSONObject` → `UTSJSONObject | String`，默认值 `{}` → `''`
- 行为变化：外部样式类经 externalClass 机制（`{语义}Class` props）传递；颜色与尺寸统一走 `resolveColor`/`resolveSize` 处理，支持 `$` 简写

**sn-collapse-item**

- 移除属性：`border`（分割线控制移至 group 的 `showBorder`）
- 新增属性：`titleClass` / `noteClass` / `holderClass`（与 group 级同类属性合并生效）
- 类型或默认值变化：`customStyle` 类型 `UTSJSONObject` → `UTSJSONObject | String`，默认值 `{}` → `''`
- 行为变化：禁用态标题与箭头显示禁用色，Web 端追加 `cursor: not-allowed`；禁用子项不可点击展开
- 新增事件、方法、插槽：无新增事件与插槽；文档新增披露 `defineExpose` 内部协调方法（group 的 `register`/`closeAll`、item 的 `close`/`setOrder`）
