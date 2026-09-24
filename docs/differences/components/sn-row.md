# sn-row

**旧版状态**：v1 提供栅格布局行容器 `sn-row`（配合 `sn-col` 使用），属性为 `justify`（主轴对齐，额外支持 `left` / `right` / `around` / `between` 简写）、`align`（交叉轴对齐）、`wrap`（是否换行）与 `customStyle`。

**删除结论**：v2 **已移除** `sn-row` 组件（连同配对的 `sn-col`）。

**删除原因**：

- 组件本质仅为一层 `display: flex; flex-direction: row` 的 `<view>`，对 `justify` / `align` 做的取值简写（`left`→`flex-start`、`between`→`space-between`）在标准 CSS 中直接书写即可，封装收益极低。
- 栅格能力依赖与 `sn-col` 的父子约定（子项经 `span` / `offset` 按 12 栅格计算宽度），在 uni-app x 蒸汽模式下跨组件透传样式受限，组合灵活度反而不如直接写样式。
- 框架 2.0 的设计原则为「简洁、轻量」，此类纯布局糖组件被判定为不实用，删除后可减小插件体积与维护面。

**替代方案**：

- 直接使用内置 `<view>` 加类选择器，配合 UCSS 的 `flex` 布局（ucss 默认即为纵向 flex，横向需显式 `flex-direction: row`）。
- 需要等分列时使用百分比宽度，例如三等分：

```vue
<template>
	<view class="row">
		<view class="col" v-for="i in 3" :key="i">
			<text>列 {{ i }}</text>
		</view>
	</view>
</template>

<style lang="scss">
	.row {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.col {
		width: 33.33%;
	}
</style>
```

- 需要列间距时在列上设置 `padding-left` / `padding-right`（等价于旧版 `gutter`）。
- 若希望按主题乘数缩放间距与圆角，可继续使用 `$` 简写尺寸语法（如 `padding: $6px`）。
