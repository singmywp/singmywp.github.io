# sn-card

> 旧版组件：sn-card.md

**旧版状态**：旧版已提供卡片组件，支持标题、头像配置、章节标符、footer/action 插槽及各区域样式定制。

**差异明细**：

- 新增属性：
  - `titleStyle` / `titleClass`（标题文本样式与外部类，v1.x 新增能力，旧文档未收录）
  - `headerClass` / `footerClass` / `actionClass`（标题栏、尾部、操作栏外部类）
- 更名：
  - `customTitleStyle` → `titleStyle`
  - `customHeaderStyle` → `headerStyle`
  - `customFooterStyle` → `footerStyle`
  - `customActionStyle` → `actionStyle`
- 类型或默认值变化：
  - `customStyle`：`UTSJSONObject`（默认 `{}`）→ `UTSJSONObject | String`（默认 `''`）
  - `titleSize`：类型 `String` → `String | Number`，默认值 `$4` → `$16`
  - `titleFont`：默认值 `misans-semibold` → `''`（空为不额外设置字体，标题恒为加粗）
  - `padding`：类型 `String` → `String | Number`，默认值 `10px` → `$15`
  - `borderRadius`：类型 `String` → `String | Number`，默认值 `$normal` → `$12`
  - `titleColor` / `sectionColor` / `bgColor`：支持 `  - `titleColor` / `sectionColor` / `bgColor`： 简写引用主题色变量
  - `avatarConfig`：类型 `SnAvatarParams` → `SnAvatarConfig`（`borderRadius` 字段新增）
- 行为变化：
  - `border` 改为按"宽度 样式 颜色"空格分隔解析，支持 `none` 去除边框，颜色支持 `$` 简写；
  - 颜色、圆角、内边距等尺寸属性统一走 `resolveColor` / `resolveSize`，支持 `$` 动态尺寸语法；
  - 头部区域增加按需渲染逻辑（title、title 插槽、头像、header-extra 插槽均不存在时不渲染头部）。
- 新增事件、方法、插槽：无（插槽与旧版一致：default、title、avatar、header-extra、footer、action）。
