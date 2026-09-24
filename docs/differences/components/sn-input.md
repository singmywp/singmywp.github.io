# sn-input

**旧版状态**：v1.1.6 已有输入框组件，v2 全面重写，属性大量扩充并改为外部类/外部样式透传机制。

**差异明细**：

- 新增属性
  - `controlled`（是否为受控属性）
  - `loadingClass` / `loadingStyle`（加载指示器样式透传）
  - `inputStyle` / `inputClass`（输入框本体样式/外部类）
  - `customClass`（根节点外部类）
  - `prefixIconClass` / `prefixIconStyle`、`suffixIconClass` / `suffixIconStyle`（前后图标样式定制，v1 仅有 Style 无 Class）
- 更名
  - `customContainStyle` → `customStyle`（旧版 `customStyle` 指输入框本体，现指根节点容器）
  - 旧版 `customStyle` → `inputStyle`（输入框本体样式改由 `inputStyle` 承担）
  - `customPrefixIconStyle` → `prefixIconStyle`
  - `customSuffixIconStyle` → `suffixIconStyle`
- 移除属性
  - `inputmode`（v2 不再透传该属性）
- 类型或默认值变化
  - `maxlength`：Number → String \| Number
  - `cursor`：Number（默认 `0`）→ String \| Number（默认 `-1`）
  - `cursorSpacing` / `selectionStart` / `selectionEnd`：Number → String \| Number
  - `confirmType`：默认值 `text` → `done`
  - `borderRadius`：默认 `$small` → `''`（默认 8px × 圆角乘数）
  - `borderWidth`：默认 `2px` → `1px`
  - `textSize`：默认 `$2` → `''`（默认 14px × 字体乘数）
  - `iconSize`：默认 `$4` → `''`（默认 16px × 字体乘数）
  - `bgColor`：默认 `$front` → `''`（未设置时使用主题 info 色）
  - `textColor`：默认 `$text` → `''`（未设置时使用主题 text 色）
  - `iconColor`：默认 `$text` → `''`
  - `activeBorderColor`：默认 `$primary` → `$line`
  - `activeBgColor`：默认 `$front` → `''`（聚焦背景默认 info 色）
  - 各颜色属性：支持 `  -  简写
  - 各样式属性：UTSJSONObject → UTSJSONObject \| String
- 行为变化
  - `password` 为 true 时右侧自动显示明文/密文切换按钮（眼睛图标），点击切换显示
  - `loading` 加载指示器改为延迟 100ms 显示，避免短请求时闪烁
  - `disabled` 与 `readonly` 均使内部 input 禁用，disabled 额外使用独立禁用配色
  - 全部尺寸/颜色属性支持 `$` 简写并乘以对应风格乘数
- 新增事件、方法、插槽：无（事件与插槽集合与旧版一致）
