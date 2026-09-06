# sn-signature

> 旧版组件：sn-signature.md
**旧版状态**：旧版为基于 canvas 的简单签名板，仅支持固定笔触、四个操作按钮与插槽定制操作栏。
**差异明细**：

新增属性：
- `width`（签名板宽度）
- `lineWidth`（线条粗细，数字类型）
- `brush`（17 种笔触样式）
- `showBrushSettings`（设置面板是否显示笔触选项）
- `gridEnabled` / `gridColor` / `gridLineWidth` / `gridDensity`（网格背景相关）
- `showActionBar`（替代旧版 `showAction`，控制整个操作栏显隐）
- `drawerPosition` / `drawerWidth`（内置设置抽屉面板的位置与宽度）
- `aniTime`（设置面板动画时长）
- `customClass` / `canvasWrapClass` / `barClass` / `toolClass`（外部样式类）

移除属性：
- `text` / `textFont` / `textColor`（提示文本不再可定制，固定为“请在区域内签名”）
- `disabled`
- `borderRadius`
- `buttonSpacing`
- `clearTip` / `showClearTip`（清空不再弹确认提示）
- `showUndo` / `showRedo` / `showConfirm` / `showClear`（不再提供按钮级显隐开关，仅保留整条操作栏开关）
- `undoText` / `redoText` / `clearText` / `confirmText`（按钮改为图标，不再可定制文本）

更名：
- `penSize` → `lineWidth`
- `penColor` → `lineColor`
- `showAction` → `showActionBar`
- `customCanvasStyle` → `canvasWrapStyle`（同时类型由 UTSJSONObject 扩展为 UTSJSONObject | String）
- `customActionAreaStyle` → `barStyle`（同时类型由 UTSJSONObject 扩展为 UTSJSONObject | String）

类型或默认值变化：
- `height`：String（默认 `150px`）→ String | Number（默认 `280`）
- `bgColor`：`$front` → `#FFFFFF`
- `maxHistory`：默认值不变（`20`），但仅作用于撤销栈

行为变化：
- 操作按钮由文本按钮改为图标工具栏，并新增横竖屏切换与“设置”入口；设置面板（抽屉）内可实时调整笔触、画布背景、线条颜色与粗细、网格背景
- 笔触由单一固定样式扩展为 17 种仿真笔触（钢笔、毛笔、蜡笔、喷漆、蛛网等）
- App 端横屏通过原生页面全屏横屏实现，Web 端以固定定位铺满视口
- 导出图片尺寸已乘设备像素比，保证清晰度

新增事件：
- `change`（签名内容变化时回调画布尺寸数据）
- `exported`（导出成功回调，携带 base64 图片与尺寸）
- `orientationchange`（横竖屏切换回调）

移除事件：
- `confirm`（由 `exported` 替代）

方法变化：
- `getBase64` → `exportImage`：不再返回 String，改为通过 `exported` 事件返回结果；无内容/画布未就绪时 toast 提示
- 新增 `setLandscape`（设置横屏模式）

插槽变化：
- 移除 `action` 插槽（操作栏不再支持插槽替换，可通过 `barClass`/`barStyle`/`toolClass` 定制样式并整体隐藏后自行搭建）
