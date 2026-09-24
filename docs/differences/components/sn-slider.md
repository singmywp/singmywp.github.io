# sn-slider

**旧版状态**：旧版提供 sn-slider 单滑块（多 DOM 布局实现），v2 保留并重构（拖动时直接操作 DOM 更新位置，跟手更流畅），双向滑块拆分为独立的 sn-slider-double 文档。

**差异明细**：

- 更名：
  - `vModel` → `v-model`（统一为 v-model 指令绑定）
  - `customContainStyle` → `trackStyle`（原父元素/轨道样式，改用语义化 externalStyle 命名）
  - `customActiveStyle` → `activeStyle`
  - `customThumbStyle` → `thumbStyle`
  - `customValueTextStyle` → `valueTextStyle`
- 新增属性：`trackClass`、`activeClass`、`thumbClass`、`valueTextClass`（外部样式类，配合 externalClass 机制）
- 移除属性：无（原 `custom*Style` 均以更名方式保留）
- 类型变化：
  - `thickness`：String → String | Number
  - `thumbSize`：String → String | Number
  - `valueTextWidth`：String → String | Number
  - `customStyle` 及各样式透传属性：UTSJSONObject → UTSJSONObject | String（支持直接传样式字符串）
- 默认值变化：
  - `borderRadius`：`$circle` → `''`（留空时自动取轨道粗细的一半，即全圆角）
  - `thumbBorderRadius`：`$circle` → `''`（留空时自动取滑块尺寸的一半，即全圆角）
  - `thumbBorder`：`-` → `''`
- 行为变化：
  - `change` 事件明确为拖动松手时触发一次（携带最终值）；拖动过程中 v-model 实时更新但不触发 change，外部赋值不触发
  - 绑定值在组件初始化时自动夹取到 `[min, max]` 区间并按 `step` 取整
- 新增事件、方法、插槽：无
