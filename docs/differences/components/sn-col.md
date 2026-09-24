# sn-col

**旧版状态**：v1 提供栅格布局列容器 `sn-col`（配合 `sn-row` 使用），属性为 `gutter`（列间距）、`span`（占用栅格数，共 12 栅格）、`offset`（偏移栅格数）、`justify`、`align`、`wrap` 与 `customStyle`，宽度按 `100/12*span` 百分比计算。

**删除结论**：v2 **已移除** `sn-col` 组件（连同配对的 `sn-row`）。

**删除原因**：

- 组件本身不产生实际布局能力，仅是把 `span` 换算为百分比宽度、把 `gutter` 换算为左右 `padding`，属于极薄的样式糖。
- 12 栅格体系是 v1 引入的额外心智模型，与 UCSS 原生 `flex` + 百分比宽度的表达力重叠，开发者需要同时理解栅格语义与最终 CSS，学习成本高于收益。
- 旧版实现中 `offset` 被写入 `margin-feft`（拼写错误）导致偏移实际不生效，属于长期未被发现的缺陷，借此重构一并淘汰。

**替代方案**：

- 直接使用内置 `<view>` 的 `flex` 布局 + 百分比宽度表达栅格。旧版 `span` 与百分比的换算关系为 `宽度 = span / 12 × 100%`，例如：

| 旧版写法 | 等效宽度 |
| -------- | -------- |
| `span="12"` | `100%` |
| `span="6"` | `50%` |
| `span="4"` | `33.33%` |
| `span="3"` | `25%` |

```vue
<template>
	<view class="row">
		<view class="col-half">
			<text>左半</text>
		</view>
		<view class="col-half">
			<text>右半</text>
		</view>
	</view>
</template>

<style lang="scss">
	.row {
		flex-direction: row;
	}

	.col-half {
		width: 50%;
	}
</style>
```

- 旧版 `offset` 请改用 `margin-left` 表达，如 `margin-left: 25%;`。
- 旧版 `gutter` 请改用列上的 `padding-left` / `padding-right`。
- 需要按框架乘数缩放间距时，使用 `$` 简写（如 `padding: $6px`）。
