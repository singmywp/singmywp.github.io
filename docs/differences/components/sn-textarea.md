# sn-textarea

**旧版状态**：v1.1.6 已有文本域组件，v2 补充原生属性透传、加载状态与外部类/外部样式透传机制。

**差异明细**：

- 新增属性
  - `loading` / `loadingClass` / `loadingStyle`（加载状态，右上角显示加载指示器）
  - `fixed`、`showConfirmBar`（原生 textarea 属性透传）
  - `confirmType`（键盘右下角按钮文字，默认 `return`）
  - `inputStyle` / `inputClass`（文本域本体样式/外部类）
  - `counterClass` / `counterStyle`（计数器样式定制）
- 更名
  - `customContainStyle` → `customStyle`（旧版 `customStyle` 指文本域本体，现指根节点容器）
  - 旧版 `customStyle` → `inputStyle`（文本域本体样式改由 `inputStyle` 承担）
  - `customCounterStyle` → `counterStyle`
- 移除属性：无
- 类型或默认值变化
  - `height`：String → String \| Number
  - `maxlength`：Number → String \| Number
  - `cursor`：Number（默认 `0`）→ String \| Number（默认 `-1`）
  - `cursorSpacing` / `selectionStart` / `selectionEnd` / `textSize` / `counterSize`：Number 或 String → String \| Number
  - `borderRadius`：默认 `$small` → `''`（默认 8px × 圆角乘数）
  - `borderWidth`：默认 `2px` → `1px`
  - `counterSize`：默认 `$2` → `''`（默认 12px × 字体乘数）
  - `borderColor` / `activeBorderColor`：默认空 → `$line`
  - `bgColor` / `activeBgColor` / `textColor` / `disabledBgColor` / `disabledTextColor` / `counterColor` / `counterBgColor`：默认具体 `$` 色 → `''`（未设置时使用对应主题色兜底）
  - 各颜色属性：支持 `  -  简写
  - 各样式属性：UTSJSONObject → UTSJSONObject \| String
- 行为变化
  - 计数器改为右下角胶囊样式，内容为 `已输入字数/最大字数`
  - 高度计算改为 `height + 上下内边距`，`autoHeight` 时高度由内容撑开
  - `disabled` 与 `readonly` 均使内部 textarea 禁用，disabled 额外使用独立禁用配色
  - 全部尺寸/颜色属性支持 `$` 简写并乘以对应风格乘数
- 新增事件、方法、插槽：无（事件与插槽集合与旧版一致）
