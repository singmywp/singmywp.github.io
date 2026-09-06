# sn-float-board

> 旧版组件：sn-float-board.md
**旧版状态**：旧版为四边吸附的拖拽浮动面板，属性、事件、方法与本版基本一致。
**差异明细**：

新增属性：
- `zIndex`（面板层级，默认 `999`）

类型或默认值变化：
- `maxHeight`：默认值 `300px` → `500px`
- `bgColor`：`$front` → `''`（留空时回退为主题 `infoActive` 色值，不再是 `$front`）
- `lineColor`：`$lineText` → `''`（留空时回退为主题 `lineText` 色值）
- `borderRadius`：`$xlarge` → `''`（留空时使用随圆角乘数计算的默认圆角，四个直角侧自动贴合屏幕边缘）；类型由 String 扩展为 String | Number
- `aniTime`：`$long` → `''`（留空时使用 `$snui.aniTimeLong`）；类型由 String 扩展为 String | Number
- `customStyle`：UTSJSONObject（`{}`）→ UTSJSONObject | String（`''`）

行为变化：
- 面板改为 `fixed` 定位且不占据文档流空间，页面需自行预留面板折叠后的空隙
- 支持修改 `position`、`maxWidth`、`minWidth`、`maxHeight`、`minHeight` 后自动复位并重新初始化
- Web 端新增鼠标拖拽支持（按住拖动、松手归位），禁用时显示 `not-allowed` 光标

新增事件、方法、插槽：
- 无
