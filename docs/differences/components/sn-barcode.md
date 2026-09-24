# sn-barcode

**旧版状态**：v1 为独立扩展插件 sn-e-barcode（Android 用 Zxing、Web 用 bwip-js 原生生成，格式全量透传 Zxing），v2 更名收编为框架内置组件并改为纯 Canvas 自绘，格式收敛为 9 种一维码。
**差异明细**：
- 更名：组件 `sn-e-barcode` → `sn-barcode`（由扩展组件收编为基础组件）
- 更名属性：`data` → `value`；`format` → `codeType`；`bgColor` → `backgroundColor`；`lineColor` → `barColor`；`showText` → `showValue`；`textColor` → `valueColor`；`textAlign` → `valueAlign`；`textSize` → `valueFontSize`
- 移除属性：`charset`、`textXOffset`、`textYOffset`、`textGap`
- 新增属性：`width`、`height`、`padding`、`rotation`、`valueSpacing`、`barShape`、`barRadius`、`moduleMinWidth`、`customStyle`、`codeStyle`、`valueStyle`、`customClass`、`codeClass`、`valueClass`
- 类型或默认值变化：`codeType` 可选值收敛为 9 种（移除 `DATA_MATRIX` / `AZTEC` / `PDF_417` / `MAXICODE` / `RSS_14` / `RSS_EXPANDED`），格式名由 `UPC_A` 下划线大写形式 → `upca` 小写形式；`showValue` 旧 `false` → 新 `true`；`valueColor` 旧默认 `#000000` → 新 ``（留空跟随 `barColor`）
- 行为变化：改为纯 Canvas 自绘（不再依赖 Zxing / bwip-js 原生库）；新增旋转方向（`N`/`L`/`R`/`I`）与条纹圆角；新增数据长度限制（UTF-8 300 字节自动截断）；编码文本跨端统一支持（v1 仅 Web 端）
- 事件、方法、插槽：均无（与旧版一致）
