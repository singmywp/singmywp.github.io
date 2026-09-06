# sn-more
> 旧版组件：sn-more.md
**旧版状态**：旧版已有查看更多组件，支持自定义提示文本、图标、颜色、动画时长、禁用，事件为 fold/unfold，插槽为 default。
**差异明细**：
- 新增属性：`contentStyle`、`contentClass`（内容区）、`wrapStyle`、`wrapClass`（内容包裹层）、`foldTextStyle`、`foldTextClass`（提示文本）等外部样式/外部类
- 移除属性：无
- 更名：无
- 类型或默认值变化：`minHeight`：String→String \| Number；`textSize`：String→String \| Number；`textColor`/`bgColor`：String→String；`aniTime`：String→String \| Number；`customStyle`：UTSJSONObject→UTSJSONObject \| String；`aniTime` 默认值：`$normal`→`$300`；`textSize`/`textColor`/`bgColor` 默认值改为空字符串（为空时分别回落到内置默认：12px × fontsizeFactor、`$textLight`、`$front`）
- 行为变化：`text-color`/`bg-color` 等颜色属性支持 `$` 简写；收起状态底部渲染与背景色一致的渐变遮罩；高度过渡动画改用 UniElement DOM 动画实现；`disabled` 时提示文本与图标变为禁用色（Web 端光标为 not-allowed）；组件更新时自动重新测量内容高度，内容变化后动态显示/隐藏展开按钮
- 新增事件、方法、插槽：无（事件仍为 `fold`/`unfold`，插槽仍为 `default`）
