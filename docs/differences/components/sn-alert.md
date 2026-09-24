# sn-alert

**旧版状态**：旧版提供五种主题与 light/dark 两种效果、自定义图标与样式，无关闭功能、无事件。

**差异明细**：

- 新增属性：`showIcon`、`center`、`closable`、`borderRadius`、`textClass`、`iconClass`、`iconStyle`
- 移除属性：`customTextStyle`（并入更名，见下）
- 更名：`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `type` 默认值 `primary` → `info`
  - `borderRadius` 默认值 `$small` → `''`（空值时按 `8px × radiusFactor` 计算）
  - `textSize` 默认值 `14px` → `''`（空值时按 `14px × fontsizeFactor` 计算）
  - `iconSize` 默认值 `17px` → `''`（空值时按 `16px × fontsizeFactor` 计算）
  - `textSize`/`iconSize`/`borderRadius` 由 String → String | Number，均支持 `$` 前缀动态缩放
  - `bgColor`/`textColor`/`iconColor` 支持 `  - `bgColor`/`textColor`/`iconColor`  简写
  - `customStyle`/`textStyle`/`iconStyle` 类型由 `UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
- 行为变化：
  - 新增可关闭能力：`closable` 显示关闭按钮，点击后组件自行隐藏并触发 `close` 事件
  - `icon` 空值时按 `type` 自动选择默认图标（primary → information-fill、success → checkbox-circle-line、warning → error-warning-line、error → close-circle-line、info → information-line）
  - `type`/`effect` 传入非法值时回退为 `info`/`light`
- 新增事件、方法、插槽：新增事件 `close`；新增插槽 `icon`、`close`
