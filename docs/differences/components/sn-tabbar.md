# sn-tabbar

> 旧版组件：sn-tabbar.md

**旧版状态**：1.1.6 已提供，同样是 data 驱动 + tab1~tab10 插槽的底部导航栏，支持拦截鉴权与角标。

**差异明细**：

- 新增属性：`hoverStyle`、`hoverStartTime`、`hoverStayTime`、`hoverTransTime`、`hoverStopPropagation`（子项统一按压态交互属性）
- 移除属性：无
- 类型或默认值变化：
  - `index` 默认值 `0`→`1`（首次显示索引，从 1 开始）
  - `imageSize` 默认值 `35px`→`''`（空时解析为 `$22`）
  - `padding` 默认值 `5px`→`$10`
  - `textSize` 默认值 `$0`→`''`（空时解析为 `$11`）
  - `iconSize` 默认值 `$4`→`''`（空时解析为 `$22`）
  - 尺寸类属性（imageSize/padding/margin/itemBorderRadius/itemPadding/itemSpacing/borderRadius/textSize/iconSize）类型 String→String \| Number
  - `customStyle` / `customContainStyle` 类型 UTSJSONObject→UTSJSONObject \| String，默认值 `{}`→`''`
  - 颜色类属性（bgColor/itemBgColor/itemActiveBgColor/textColor/activeTextColor/iconColor/activeIconColor）默认值 `$front`/`$transparent`/`$text`/`$primary`→`''`（空时自动取主题色）
- 行为变化：无（data 驱动、tab1~tab10 插槽、interceptor 拦截与 badge 角标能力均保留）
- 事件：`change`、`heightchange` 保留，签名一致
- 方法：`changeToIndex` 保留
- 新增事件、方法、插槽：hover 交互属性为新增；插槽 tab1~tab10 保留
