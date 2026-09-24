# sn-link

**旧版状态**：旧版提供基础文本链接，支持前后缀图标、颜色、字号、下划线及内置 Webview 打开方式。

**差异明细**：

- 新增属性：
  - `hoverBgColor`（按压背景色，设置后显示圆角背景点击态）
  - `hoverTextColor`（按压文字与图标颜色）
  - `textClass`（链接文本外部类）
  - `iconClass`（图标外部类）
- 更名：
  - `customTextStyle` → `textStyle`
  - `customIconStyle` → `iconStyle`
- 类型或默认值变化：
  - `customStyle`：`UTSJSONObject`（默认 `{margin: '0 5px'}`）→ `UTSJSONObject | String`（默认 `''`，外边距改为组件内置的固定间距）
  - `color`：默认 `` `$primaryDark` `` → `''`（空时取主题 `primaryDark`，类型改用 `String`）
  - `size`：默认 `` `$3` `` → `''`（空时为 14px × 字体乘数；类型 `String` → `String | Number`）
  - `hoverBgColor` / `hoverTextColor`：类型为 `String`
- 行为变化：
  - `href` 为空时点击触发 `error` 事件（旧版无错误处理）；
  - 按压时有透明度过渡反馈；`hoverTextColor` 同时作用于图标颜色；
  - 图标大小随链接字号自动匹配（旧版图标为固定尺寸）。
- 新增事件：`error`。
- 新增插槽：`default`（自定义链接文本，旧版仅有 prefix / suffix）。
