# Progress  进度条

> [查看 sn-progress 的 2.0 版本差异](/differences/components/sn-progress)

## 基础用法

- 用于显示一个任务或过程的进度，通过 `v-model` 双向绑定进度值（0 ~ 100，超出范围自动夹紧）。
- 支持自定义颜色、高度、圆角、动画时长等属性。
- `loading` 为 `true` 时进入加载中状态：激活条固定为 40% 轨道宽并循环平移，适合表示处理中 / 未知进度的场景。

```vue
<template>
	<sn-progress v-model="value"></sn-progress>
</template>

<script setup>
	const value = ref<number>(30)
</script>
```

**更多演示请下载 demo 查看**

## 进度值文本

`show-value-text` 显示百分比文本，`value-text-position` 切换文本在进度条内部或外部。

```vue
<template>
	<sn-progress v-model="value" show-value-text></sn-progress>
	<sn-progress v-model="value" show-value-text value-text-position="inside" height="22px"></sn-progress>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定进度值，范围 0 ~ 100（超出自动夹紧） | Number | `0` | - |
| showValueText | 是否显示进度值文本 | Boolean | `false` | `true` \| `false` |
| valueTextPosition | 进度值文本位置 | String | `outside` | `inside` \| `outside` |
| valueTextSize | 进度值文本字体大小，默认外部 14px × 字体乘数、内部取进度条高度 × 0.6（最小 9px） | String \| Number | - | - |
| valueTextWidth | 外部进度值文本宽度 | String \| Number | `40px` | - |
| height | 进度条高度 | String \| Number | `6px` | - |
| bgColor | 轨道（未激活部分）颜色 | String | `$line` | - |
| activeColor | 激活部分颜色 | String | `$primary` | - |
| textColor | 进度值文本颜色，默认内部 `#fff`、外部主题文本色 | String | - | - |
| borderRadius | 进度条圆角大小，默认取高度一半（胶囊形） | String \| Number | - | - |
| aniTime | 进度变化动画时长，支持 `$` 简写随动画乘数缩放 | String \| Number | - | - |
| loading | 加载中状态：激活条固定为 40% 轨道宽并循环平移 | Boolean | `false` | `true` \| `false` |
| activeMode | 进度更新动画方式：`forwards` 从当前位置继续补间，`backwards` 每次更新从 0 重新播放 | String | `forwards` | `forwards` \| `backwards` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| containStyle | 自定义外层容器节点内联样式 | UTSJSONObject \| String | - | - |
| activeStyle | 自定义激活条节点内联样式 | UTSJSONObject \| String | - | - |
| activeClass | 自定义激活条节点外部样式类 | String | - | - |
| textStyle | 自定义进度值文本内联样式（inside / outside 均生效） | UTSJSONObject \| String | - | - |
| textClass | 自定义进度值文本外部样式类（仅 outside 位置生效） | String | - | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 进度值变化时触发，参数为夹紧到 0 ~ 100 后的值 |

<DemoPhone name="sn-progress" />
