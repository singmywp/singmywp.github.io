# sn-loading-page

**旧版状态**：v1.1.6 已有加载页组件，通过 show 控制全屏加载遮罩，支持文本、图片模式与背景/文本/图标样式定制。
**差异明细**：

- 新增属性：
  - `mode`（加载指示器模式：`native` 内置 loading 组件 / `icon` 旋转图标，默认 `native`）
  - `customStyle`（根节点样式）
  - `imgClass`、`textClass`（图片/文本节点外部样式类）
- 更名：`customImgStyle` → `imgStyle`；`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `textColor` 默认值：`$infoDark`（亮）/ `$dark`（暗）→ `$primary`
  - `iconColor` 默认值：`$infoDark` / `$dark` → `$primary`（未传时跟随 textColor）
  - `textSize` 默认值：`$4` → `$20`；`iconSize` 默认值：`$7` → `$38`；两者类型 String → String | Number
  - `aniTime` 类型：String → String | Number；默认值 `$normal` → 空串（内部回退 `$normal`，行为不变）
  - `bgColor` 默认值：`$info` → 空串（内部回退 `$info`，行为不变）
  - `imgStyle` 默认值：`{width: '70px', height: '70px'}` → `'width: 70px; height: 70px;'`；`textStyle` 默认值：`{marginTop: '15px'}` → `'margin-top: 15px;'`
  - `customStyle` / `imgStyle` / `textStyle` 类型：UTSJSONObject → UTSJSONObject | String；`imgSrc` 类型：String → String
- 行为变化：
  - 实现改为基于 sn-overlay 的全屏不透明遮罩，显隐动画时长由 `aniTime` 统一控制（`0` 为瞬时）
  - 图片与文本节点支持外部样式类定制
- 新增事件、方法、插槽：无（新旧均无插槽与事件）
