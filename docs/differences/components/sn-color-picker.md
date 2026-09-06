# sn-color-picker

> 旧版组件：无（v2 新增）

**旧版状态**：SinleUI 1.1.6 无颜色选择器，sn-color-picker 与 sn-color-picker-view 均为 v2 新增组件。

**差异明细**：

- 新增属性（sn-color-picker）：`disabled`、`height`、`maskClose`、`maskOpacity`、`preventBack`、`title`、`showClose`、`showAlpha`、`showPresets`、`format`、`presetTitle`、`presetColors`、`panelHeight`、`showCancel`、`showConfirm`、`cancelText`、`confirmText`、`customStyle`，以及 `header` / `title` / `closeButton` / `actions` / `cancelButton` / `confirmButton` 与透传至 sn-color-picker-view 的全部样式扩展属性（`{语义}Style` / `{语义}Class`）
- 新增属性（sn-color-picker-view）：`active`、`disabled`、`showAlpha`、`showPresets`、`format`、`presetTitle`、`presetColors`、`panelHeight`、`sliderHeight`、`sliderSpacing`、`borderRadius`、`thumbSize`、`customStyle`、`customClass`，以及 `panel` / `thumb` / `sliders` / `hue` / `alpha` / `sliderThumb` / `inputRow` / `fields` / `select` / `input` / `presets` / `presetTitle` / `presetGrid` / `presetItem` 样式扩展属性
- 新增双向绑定：两者均有 `v-model`（颜色值字符串，默认 `#F5222D`）
- 新增事件：sn-color-picker 为 `change`、`confirm`、`cancel`、`open`、`close`、`clickoverlay`；sn-color-picker-view 为 `change`
- 新增方法：sn-color-picker 为 `open`、`close`；sn-color-picker-view 为 `refresh`
- 新增插槽：无
