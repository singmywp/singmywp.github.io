# sn-empty

> 旧版组件：sn-empty.md

**旧版状态**：旧版已支持 20 种模式、插槽与插图换色属性。

**差异明细**：

- 新增属性：`textClass`
- 移除属性：`customTextStyle`（并入更名，见下）
- 更名：`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `textSize` 默认值 `$3` → `''`（空值时按 `14px × fontsizeFactor` 计算）
  - `textColor`/`themeColor` 等颜色属性支持 `  - `textColor`/`themeColor` 等颜色属性 简写
  - `textSize`/`imageSize` 由 String → String | Number，均支持 `$` 前缀动态缩放
  - `customStyle`/`textStyle` 类型由 `UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
- 行为变化：`trousersColor`/`shoesColor` 空值时回退为 `themeColor` 的最终解析值（含 `$` 简写解析结果）
- 新增事件、方法、插槽：无
