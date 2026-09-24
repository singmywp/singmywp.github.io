# sn-grid

**旧版状态**：旧版已存在 sn-grid-group + sn-grid-item 组合的宫格布局，v2 沿用组合结构，属性基本一致。

**差异明细**：

**sn-grid-group**

- 类型或默认值变化：`customStyle` 类型 `UTSJSONObject` → `UTSJSONObject | String`，默认值 `{}` → `''`
- 行为变化：
  - `align` 可选值扩展：新增 `start`/`end`/`around`/`between`，与 `left`/`right` 等价映射为 flex 对齐值，其余值原样透传
  - `gutter` 非 0 时按容器实测宽度将子项宽度等分（px），避免百分比与间距叠加导致的溢出
  - 对齐方式变化时带过渡动画（`transition-duration` 取 `$snui.aniTimeNormal`）

**sn-grid-item**

- 类型或默认值变化：
  - `bgColor`：默认 `-`（无默认值）→ 透明；类型标注为色值 String
  - `customStyle`：类型 `UTSJSONObject` → `UTSJSONObject | String`，默认值 `{}` → `''`

- 新增事件、方法、插槽：无
