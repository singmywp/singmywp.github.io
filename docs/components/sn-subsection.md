# Subsection  分段器

> [查看 sn-subsection 的 2.0 版本差异](/differences/components/sn-subsection)

## 基础用法

- 分段器一般用于用户从几个选项中选择某一个的场景，常作为视图切换控件。
- `v-model` 绑定当前选中分段的索引，`data` 为分段文本数组，滑块随选中项平移并带动画。
- 滑块尺寸根据容器实际尺寸动态计算，容器尺寸变化时自动重新测量。

```vue
<template>
	<sn-subsection v-model="current" :data="list"></sn-subsection>
</template>

<script lang="uts" setup>
const current = ref<number>(0)
const list = ['已付款', '已发货', '已收货', '已评价']
</script>
```

**更多演示请下载 demo 查看**

## 自定义样式

分段项、滑块、文本均支持外部样式类与自定义样式，可深度改造外观，例如把滑块改为下划线样式：

```vue
<template>
	<sn-subsection v-model="current" :data="list" block-bg-color="transparent"
		block-style="border-radius:0; border-bottom:2px solid var(--sn-primary);"></sn-subsection>
</template>

<script lang="uts" setup>
const current = ref<number>(0)
const list = ['已付款', '已发货', '已收货', '已评价']
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，当前选中的分段索引 | Number | `0` | - |
| data | 分段数据，数组中的每个元素代表一个分段的文本 | `Array<String>` | `[]` | - |
| disabled | 是否禁用分段选择器 | Boolean | `false` | `true` \| `false` |
| padding | 分段器内边距 | String \| Number | `'3px'` | - |
| blockPadding | 每个分段项的内边距 | String \| Number | `'10px'` | - |
| borderRadius | 分段器圆角 | String \| Number | `$12` | - |
| textSize | 分段文本大小 | String \| Number | `$14` | - |
| bgColor | 分段器背景颜色 | String | `$info` | - |
| disabledBgColor | 禁用时分段器背景颜色，亮色主题为 `$disabled`、暗黑主题为 `$disabledDark` | String | - | - |
| blockBgColor | 滑块背景颜色 | String | `$front` | - |
| disabledBlockBgColor | 禁用时滑块背景颜色，亮色主题为 `$disabledDark`、暗黑主题为 `$disabled` | String | - | - |
| textColor | 未选中分段文本颜色 | String | `$text` | - |
| activeTextColor | 选中分段文本颜色 | String | `$primaryDark` | - |
| disabledTextColor | 禁用时文本颜色 | String | `$disabledText` | - |
| customStyle | 自定义分段器根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 分段器根节点的外部样式类 | String | `''` | - |
| itemClass | 分段项的外部样式类 | String | `''` | - |
| itemStyle | 自定义分段项样式 | UTSJSONObject \| String | `''` | - |
| blockClass | 滑块的外部样式类 | String | `''` | - |
| blockStyle | 自定义滑块样式 | UTSJSONObject \| String | `''` | - |
| textClass | 分段文本的外部样式类 | String | `''` | - |
| textStyle | 自定义分段文本样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number) => Void | 选中分段变化时触发，携带新的分段索引 |

<DemoPhone name="sn-subsection" />
