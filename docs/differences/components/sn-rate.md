# sn-rate

> 旧版组件：sn-rate

**旧版状态**：旧版为基础评分组件，v2 保留全部功能并重构（只读模式改为单文本双层渲染，性能显著提升）。

**差异明细**：

- 更名：`vModel` → `v-model`（统一为 v-model 指令绑定）
- 新增属性：无（属性集合与旧版一致）
- 移除属性：无
- 类型变化：
  - `spacing`：String → String | Number
  - `iconSize`：String → String | Number
  - `customStyle`：UTSJSONObject → UTSJSONObject | String（支持直接传样式字符串）
- 默认值变化：
  - `iconSize`：`$4` → `''`（留空时为 `20` 乘字体乘数）
  - `customStyle`：`{}` → `''`
- 行为变化：
  - `readonly` 只读模式改为单个 text 双层渲染（底层未选中色文本 + 上层选中色文本按比例裁剪），节点数固定为两个，适合长列表高性能展示；支持小数值（如 4.5 按比例显示）与超限数值（按比例截取显示）
- 新增事件、方法、插槽：无
