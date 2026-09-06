# sn-arc-slider

> 旧版组件：无（v2 新增）

**旧版状态**：旧版（SinleUI 1.1.6）无此组件，为 v2 新增的圆弧形态滑动选择器（Canvas 绘制轨道、进度弧与圆点，触摸/鼠标拖动圆点取值）。

**差异明细**：

- 新增属性（全部为新增）：`v-model`（当前值）、`v-model:color`（hue 模式颜色双向绑定）、`size`、`startAngle`、`endAngle`、`lineCap`、`strokeWidth`、`strokeColor`、`trailWidth`、`trailColor`、`dotSize`、`dotBgColor`、`dotBorderColor`、`dotBorderWidth`、`min`、`max`、`step`、`isHue`、`showValueText`、`disabled`、`customStyle`、`customClass`
- 新增事件：`change`（拖动过程中值变化实时触发）、`color-change`（hue 模式颜色变化实时触发）
- 新增插槽：`value`（作用域插槽，自定义组件中间区域内容，作用域参数 `value` / `color` / `hex`）
- 新增方法：无
