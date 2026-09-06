# sn-toast

> 旧版组件：sn-toast.md

**旧版状态**：旧版已提供轻提示组件（16 个属性、show/configShow/close 方法，无事件与插槽）。

**差异明细**：

- 属性集合无增减（15 个配置属性 + `customStyle`）
- 类型变化：`textSize` / `iconSize` / `borderRadius` String → String | Number；`bgColor` / `textColor` / `iconColor` String → String，支持 `$` 简写主题色；`customStyle` Object → UTSJSONObject | String
- 默认值变化：`textSize` `$2` → `''`（空值时为 `$14`）；`iconSize` `$5` → `''`（空值时为 `$20`）；`borderRadius` `$normal` → `''`（空值时为 `$12`）；`bgColor` / `textColor` / `iconColor` 由固定默认值改为 `''`（空值时分别回退主题 `$toast` 色、`#fff`、`#fff`）
- 行为变化：`loading` 为 true 时不再自动倒计时关闭，必须手动调用 `close`；`loading` 状态切换带 100ms 延迟过渡（避免闪烁）；开启 `overlay` 时使用不透明度为 0 的透明遮罩拦截底部点击；轻提示层级固定为 9999
- 方法无变化（`show` / `configShow` / `close`）；事件、插槽无（新旧均无）
