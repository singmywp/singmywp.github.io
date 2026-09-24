# sn-sidebar

**旧版状态**：1.1.6 已提供，同样是 v-model 索引 + data 列表的侧边导航栏，支持锚点定位。

**差异明细**：

- 新增属性：`itemStyle`、`itemClass`、`barStyle`、`barClass`、`contentStyle`、`contentClass`（externalStyle/Class 化）
- 移除属性：`customItemStyle`、`customBarStyle`、`customContentStyle`
- 更名：`customItemStyle`→`itemStyle`、`customBarStyle`→`barStyle`、`customContentStyle`→`contentStyle`（同时新增对应 `xxxClass` 外部类）
- 类型或默认值变化：`customStyle` 类型 UTSJSONObject→UTSJSONObject \| String，默认值 `{}`→`''`；`itemTextSize` 默认值 `$3`→`''`（空时 16 × fontsizeFactor）；颜色类属性（itemTextColor/activeItemTextColor/itemBgColor/activeItemBgColor/lineColor）默认值 `$text`/`$primary`/`$transparent`/`$front`→`''`（空时自动取主题色）
- 行为变化：无
- 事件：`change` 保留，签名一致；v-model 保留
- 新增事件、方法、插槽：新增 6 个 externalStyle/Class；插槽 default 保留；无新增事件/方法
