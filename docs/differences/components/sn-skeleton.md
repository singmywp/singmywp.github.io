# sn-skeleton
> 旧版组件：sn-skeleton.md
**旧版状态**：v1.1.6 已有骨架屏组件，为带闪烁动画的占位 view，支持宽高/圆角/边距与动画时长设置。
**差异明细**：

- 新增属性：
  - `mode`（动画模式：`glow` 高光带扫过 / `pulse` 透明度呼吸闪烁）
  - `bgColor`（骨架屏背景色，默认主题禁用色）
  - `glowColor`（辉光高亮带颜色，仅 glow 模式生效，随亮暗主题自动适配）
- 类型或默认值变化：
  - `aniTime` 类型：String → String | Number；默认值 `1000ms` → `$1500`（随动画乘数缩放，`0` 可关闭动画）
  - `width` / `height`：新增默认值 `100%` / `20px`；类型 String → String | Number
  - `borderRadius` 默认值：`$xsmall` → `$8`；类型 String → String | Number
  - `customStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：动画改为 DOM 动画实现，旧版单一闪烁效果升级为 `glow`（高光带从左到右循环扫过）与 `pulse`（透明度呼吸交替）两种可选模式，切换 `mode` 或 `aniTime` 时自动重启动画
- 新增事件、方法、插槽：无（default 插槽保留）
