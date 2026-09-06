# sn-loadmore
> 旧版组件：sn-loadmore.md
**旧版状态**：v1.1.6 已有加载更多组件，支持三种状态、自定义文案/颜色/线条与 loadmore 点击事件。
**差异明细**：

- 新增属性：
  - `loadingClass`（loading 指示器节点外部样式类）
  - `loadingStyle`（loading 指示器节点内联样式，默认 `border-color: <主题线条文本色>`）
- 类型或默认值变化：
  - `iconColor` 默认值：`$lineText` → 空串（内部回退 `$primary`，加载指示器默认颜色由线条文本色变为主题主色）
  - `textColor` / `lineColor` 默认值：`$lineText` / `$line` → 空串（内部回退值不变，行为不变）
  - `textSize` 默认值：`$3` → 13px × 字体乘数；`iconSize` 默认值：`$3` → 与文本字号一致；两者类型 String → String | Number
  - `lineHeight` 类型：String → String | Number
  - `loadmoreText` / `nomoreText` / `loadingText` 默认值：固定文案 → 空串（内部回退同文案，显示不变）
  - `iconColor` / `textColor` / `lineColor` 类型：String → String
  - `customStyle` / `loadingStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：loading 状态改用官方内置 loading 组件作为指示器；根节点增加主题过渡动画
- 新增事件、方法、插槽：无（`loadmore` 事件保留）
