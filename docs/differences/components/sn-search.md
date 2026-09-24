# sn-search

**旧版状态**：v1.1.6 已有搜索框组件，v2 重写交互：取消按钮改为聚焦展开动画，属性对齐新样式透传体系。

**差异明细**：

- 新增属性
  - `fixCancel`（取消按钮常驻显示，不随聚焦收起）
  - `inputClass`（内部输入框外部类）
  - `cancelClass` / `cancelStyle`（取消按钮样式定制）
- 更名
  - `customInputStyle` → `inputStyle`
- 移除属性
  - `inputmode`（v2 不再透传该属性）
  - `activeBorder`（由 `showActiveBorder` 承担，与 sn-input 命名对齐）
- 类型或默认值变化
  - `showCancel`：默认 `true` → `false`
  - `padding`：默认 `4px 10px` → `8px 12px`
  - `borderWidth`：默认 `2px` → `1px`
  - `borderColor`：默认 `transparent` → `$line`
  - `activeBorderColor`：默认 `transparent` → `$line`
  - `cancelTextSize`：默认 `$2` → `''`（默认 14px × 字体乘数）；类型 String → String \| Number
  - `bgColor` / `activeBgColor`：默认 `$info` → `''`（未设置时仍使用主题 info 色）
  - `cancelTextColor`：默认 `$primaryDark` → `''`（未设置时仍使用主题 primaryDark 色）
  - `cursorColor`：默认 `$primary` → `''`
  - `textSize`：String → String \| Number
  - 各颜色属性：支持 `  -  简写
  - 各样式属性：UTSJSONObject → UTSJSONObject \| String
- 行为变化
  - 取消按钮改为聚焦时（或 `fixCancel` 常驻）平滑展开的动画形态，宽度与透明度随聚焦状态过渡；旧版为常驻显示
  - 点击取消按钮在触发 `cancel` 的同时会清空输入内容
  - 内部确认按钮类型固定为 `search`
  - `textColor` / `textSize` 等样式经新透传体系作用于内部 sn-input
- 新增事件、方法、插槽：无（事件与插槽集合与旧版一致）
