# sn-stepper

**旧版状态**：旧版为按钮 + 输入框组成的步进器，v2 保留全部功能，内部输入框改由 sn-input 实现，新增大量输入框相关配置。

**差异明细**：

- 更名：`modelValue` → `v-model`（统一为 v-model 指令绑定）
- 新增属性：`inputTextColor`（输入框文本颜色，留空取 `textColor`）、`disabledBgColor`（禁用态输入框背景色）、`placeholder`、`maxlength`、`showBorder`、`borderColor`、`activeBorderColor`、`borderWidth`、`textFont`、`cursorColor`
- 移除属性：无
- 类型变化：
  - `size`：String → String | Number
  - `spacing`：String → String | Number
  - `inputWidth`：String → String | Number
  - `textSize`：String → String | Number
  - `customStyle`：UTSJSONObject → UTSJSONObject | String（支持直接传样式字符串）
- 默认值变化：
  - `buttonBgColor`：`$info` → `''`（默认改为描边样式按钮，设置该属性后才为实底按钮）
  - `textSize`：`$2+1` → `$14`
  - `borderRadius`：`$small` → `$8`
  - `customStyle`：`{}` → `''`
- 行为变化：
  - `step` 支持小数：输入框键盘类型按 `step` 自动切换（`digit` / `number`），数值按 `step` 的小数位数格式化显示
  - 输入框失焦或键盘确认时才提交输入：非法输入恢复为当前值，合法输入自动夹取到 `[min, max]` 并格式化
  - 长按连续增减为按住 500ms 后启动，之后每 100ms 一步，到达边界自动停止
- 新增事件、方法、插槽：无
