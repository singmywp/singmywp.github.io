# sn-avatar

**旧版状态**：旧版 sn-avatar 已支持三种模式与形状切换；旧版 sn-avatar-group 支持堆叠/分散、数量上限与随机背景色。

**差异明细**：

- 新增属性：
  - sn-avatar：`lazyLoad`、`customClass`、`textClass`、`iconClass`
  - sn-avatar-group：`avatarClass`
- 移除属性：
  - sn-avatar：`customTextStyle`、`customIconStyle`（并入更名，见下）
  - sn-avatar-group：`customAvatarStyle`（并入更名，见下）
- 更名：
  - sn-avatar：`customTextStyle` → `textStyle`、`customIconStyle` → `iconStyle`
  - sn-avatar-group：`customAvatarStyle` → `avatarStyle`
- 类型或默认值变化：
  - sn-avatar `imageMode` 默认值 由未设置（`-`）→ `aspectFill`
  - sn-avatar `borderRadius` 默认值 `$xsmall` → `''`（空值时按 `4px × radiusFactor` 计算，效果一致）；sn-avatar-group 同
  - `textColor` / `iconColor` / `bgColor` 支持 ` 简写引用主题色变量
  - `size`/`textSize`/`iconSize`/`borderRadius` 等尺寸属性由 String → String | Number，均支持 `$` 前缀动态缩放
  - `customStyle`/`textStyle`/`iconStyle`/`avatarStyle` 类型由 `UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
- 行为变化：
  - v2 `dbclick` 事件明确为 300ms 内连续点击两次的检测（`click` 每次点击均触发）
  - `enable-preview` 开启后预览失败时会 toast 提示"图片预览失败"
  - sn-avatar-group `randomBgColor` 随机色板固定为五种功能色 Light 系（primaryLight / successLight / warningLight / errorLight / infoLight），文本颜色自动配套对应 LightText 色
- 新增事件、方法、插槽：无
