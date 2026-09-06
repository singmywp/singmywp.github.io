# sn-tabs

> 旧版组件：sn-tabs.md

**旧版状态**：1.1.6 已提供，同样是 v-model 索引 + data 列表的标签页，支持 scrollable 与 swipe/push 两种指示线动画。

**差异明细**：

- 新增属性：`itemStyle`、`itemClass`、`textStyle`、`textClass`、`activeItemStyle`、`activeItemClass`（externalStyle/Class 化）
- 移除属性：`customItemStyle`、`customActiveItemStyle`
- 更名：`customItemStyle`→`itemStyle`（选中项，并新增 `itemClass`）、`customActiveItemStyle`→`activeItemStyle`（非选中项，并新增 `activeItemClass`）
- 类型或默认值变化：`customStyle` 类型 UTSJSONObject→UTSJSONObject \| String，默认值 `{}`→`''`；`borderRadius` 默认值 `$normal`→`''`（空时 12 × radiusFactor）；`aniTime` 默认值 `$long`→`''`（空时取 `$snui.aniTimeNormal`）；`textSize` 默认值 `$2`→`''`（空时 14 × fontsizeFactor）；尺寸类属性（textSize/borderRadius）类型 String→String \| Number；颜色类属性（bgColor/textColor/activeTextColor/disabledTextColor/lineColor）默认值 `$front`/`$title`/`$primary`/`$disabledText`→`''`（空时自动取主题色）
- 行为变化：无
- 事件：`change` 保留，签名一致；v-model 保留
- 新增事件、方法、插槽：无新增事件/方法；插槽 left/right 保留
