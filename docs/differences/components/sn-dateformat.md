# sn-dateformat

**旧版状态**：v1.1.6 已有日期格式化组件，支持 date / format / threshold / locale 与文本样式属性。
**差异明细**：

- 新增属性：
  - `mode`（String，默认 `realtime`，可选 `fixed` | `realtime`：`realtime` 实时模式每秒刷新相对时间，`fixed` 固定模式仅在值变化时计算）
  - `customClass`（String，默认 `''`，根节点外部样式类）
  - `textClass`（String，默认 `''`，文本外部样式类）
  - `textStyle`（UTSJSONObject | String，默认 `''`，文本自定义样式）
- 类型或默认值变化：
  - `textSize`：类型 String → String | Number，默认值 `-` → `''`（不传时默认 14px × 字体乘数）
  - `textColor`：默认值 `-` → `''`（不传时默认主题文字色）
  - `customStyle`：类型 UTSJSONObject → UTSJSONObject | String，默认值 `{}` → `''`
  - `threshold`：类型 `Array<Number[]>` → Number[]（写法修正，语义不变）
- 行为变化：
  - 默认以实时模式运行，相对时间每秒自动刷新；可通过 `mode="fixed"` 关闭（旧版无模式概念）
  - 相对时间文案按 `locale` 输出，`en` 下显示 "just now" / "N minutes ago" 等英文文案
  - 日期格式占位符以内置日期库实际支持为准（`YYYY` / `YY` / `MMMM` / `MM` / `M` / `DD` / `D` / `dddd` / `ddd` / `dd` / `d` / `HH` / `H` / `hh` / `h` / `mm` / `m` / `ss` / `s` / `SSS` / `A` / `a` / `Z`），旧文档中的 `MMM` / `S` / `SS` / `ZZ` 等占位符不再列出
- 事件、方法、插槽：无（旧版亦无）
