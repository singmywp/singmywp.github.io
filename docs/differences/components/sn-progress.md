# sn-progress
> 旧版组件：sn-progress.md
**旧版状态**：v1.1.6 已有进度条组件，支持 v-model 绑定、进度值文本、颜色/高度/圆角/动画定制与 change 事件。
**差异明细**：

- 新增属性：
  - `loading`（加载中状态：激活条固定为 40% 轨道宽并循环平移）
  - `activeMode`（进度更新动画方式：`forwards` 从当前位置补间 / `backwards` 每次从 0 重播）
  - `containStyle`（外层容器节点内联样式）
  - `activeClass`、`textClass`（激活条/进度值文本节点外部样式类）
- 更名：`customActiveStyle` → `activeStyle`；`customTextStyle` → `textStyle`
- 类型或默认值变化：
  - `vModel` 改为标准 `v-model`（defineModel，Number，默认 `0`）
  - `borderRadius` 默认值：`$circle` → 空串（默认取进度条高度一半，胶囊效果不变）；类型 String → String | Number
  - `aniTime` 类型：String → String | Number；默认值 `$normal` → 空串（内部回退动画标准时长，行为不变）
  - `height` / `valueTextWidth` 类型：String → String | Number；`valueTextSize` 类型：String → String | Number，且内部位置默认取进度条高度 × 0.6（最小 9px）
  - `textColor` 默认值：`-` → 内部默认 `#fff`（inside）/ 主题文本色（outside）
  - `bgColor` / `activeColor` / `textColor` 类型：String → String
  - `customStyle` / `activeStyle` / `textStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - 进度变化动画改为 DOM 直写宽度 + transition 实现
  - 文本外部样式类 `textClass` 仅 outside 位置生效，`textStyle` inside / outside 均生效
- 新增事件、方法、插槽：无（`change` 事件保留，参数为夹紧到 0 ~ 100 后的值）
