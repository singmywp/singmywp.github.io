# sn-drawer

**旧版状态**：v1.1.6 已有 Drawer 抽屉，四方向滑出、滑动关闭手势、`ref` 调用 `open`/`close`，该核心交互在 v2 中完整保留。

**差异明细**：

- 新增属性：`zIndex`（弹出层层级，默认 `999`）
- 类型或默认值变化：
  - `width`、`height`、`slideHeight`、`slideWidth` 类型 String → String | Number
  - `aniTime` 类型 String → String | Number，默认值 `$long` → `''`（为空时取框架动画长时长，跟随 `aniTimeFactor` 乘数）
  - `borderRadius` 默认值 `$xlarge` → `''`（为空时随圆角乘数自动计算约 20px，且四个角按滑出方向只圆化开口对侧）
  - `bgColor`、`lineColor` 支持 `  - `bgColor`、`lineColor`  简写
  - `customStyle` 类型 UTSJSONObject → UTSJSONObject | String，默认值 `{}` → `''`
- 更名：事件 `clickMask` → `clickoverlay`
- 移除事件：`open`、`close`（改用六段动画生命周期事件）
- 新增事件：`beforeenter`、`enter`、`afterenter`、`beforeleave`、`leave`、`afterleave`
- 行为变化：
  - 显隐动画改走 sn-popup 的自定义 `open-animation` / `close-animation`（遮罩随面板同步渐隐渐显），滑动关闭过程由 DOM 直操作驱动以保证跟手流畅
  - Web 端新增鼠标拖拽关闭支持（`mousedown` / `mousemove` / `mouseup`），旧版仅触摸手势
  - `renderMode`（`v-if` / `v-show` 渲染模式）继续透传 sn-popup，行为与旧版一致
- 方法：无变化（仍为 `open`/`close`）
- 插槽：无差异（均提供 `default` 插槽）
