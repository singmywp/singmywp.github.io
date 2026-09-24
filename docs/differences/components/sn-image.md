# sn-image

**旧版状态**：旧版提供图片加载占位、预览、懒加载与动画，占位仅支持图标，样式定制只有 `customImageStyle`/`customLoadingStyle` 两个 UTSJSONObject 属性。

**差异明细**：

- 新增属性：`loadingIcon`、`loadingImage`、`loadingImageMode`、`customClass`、`imageClass`、`loadingClass`
- 移除属性：`customImageStyle`、`customLoadingStyle`（并入更名，见下）
- 更名：`customImageStyle` → `imageStyle`、`customLoadingStyle` → `loadingStyle`
- 类型或默认值变化：
  - `fadeShow` 默认值 `false` → `true`
  - `borderRadius` 默认值 `$small` → `$12`
  - 颜色类属性（`loadingBgColor` / `loadingIconColor`）支持 ` 简写
  - `width`/`height`/`borderRadius`/`loadingSize` 由 String → String | Number，均支持 `$` 前缀动态缩放
  - `customStyle`/`imageStyle`/`loadingStyle` 类型由 `UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
- 行为变化：
  - 加载占位支持三种形式：默认占位图标（`loadingIcon`）、占位图片（`loadingImage`）、`loading` 插槽自定义内容
  - 自动按比例计算高度仅在 `mode="aspectFit"` 且未设置 `height` 时生效；单独设置 `height` 不生效（需同时设置 `width`），开发时输出警告日志
  - `src` 变化时自动重置加载状态，重新显示占位
  - `enable-preview` 开启时图片加载失败（error）不再触发预览
- 新增事件、方法、插槽：新增插槽 `loading`；事件 `longpress` 回调签名由 `(event: UniTouchEvent)` 规范为 `(event: UniEvent) => Void`，其余事件不变
