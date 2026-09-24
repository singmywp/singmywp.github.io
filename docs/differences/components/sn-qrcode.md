# sn-qrcode

**旧版状态**：v1 为独立扩展插件 sn-e-qrcode（Android 用 Zxing、Web 用 bwip-js 原生生成），v2 更名收编为框架内置组件并改为纯 Canvas 自绘，能力大幅增强。
**差异明细**：
- 更名：组件 `sn-e-qrcode` → `sn-qrcode`（由扩展组件收编为基础组件）
- 更名属性：`data` → `value`；`margin` → `padding`；`errorLevel` → `errorCorrectionLevel`；`bgColor` → `backgroundColor`；`dotColor` → `infoDotColor`
- 移除属性：`charset`
- 新增属性：`qrVersion`、`maskPattern`、`infoDotShape`、`locateDotShape`、`locateDotPattern`、`infoDotScale`、`locateDotScale`、`infoDotRadius`、`locateDotRadius`、`infoDotGap`、`locateDotColor`、`alignDotColor`、`timingDotColor`、`showBackground`、`logoSrc`、`logoSize`、`logoPadding`、`logoRadius`、`logoBackgroundColor`、`customStyle`、`backgroundStyle`、`customClass`、`backgroundClass`
- 类型或默认值变化：`errorCorrectionLevel` 旧 `M`（`L`/`M`/`Q`/`H`）→ 新 `medium`（`low`/`medium`/`quartile`/`high`）；`padding` 旧 `margin=1` → 新 `2`
- 行为变化：改为纯 Canvas 自绘（不再依赖 Zxing / bwip-js 原生库）；新增数据长度限制（UTF-8 300 字节自动截断）；新增中央 Logo、多形状点阵（方形 / 圆角 / 圆形 / 菱形）、定位点图样（点阵 / 方框 / 圆角方框 / 圆环）、分色绘制与版本 / 掩码控制
- 事件、方法、插槽：均无（与旧版一致）
