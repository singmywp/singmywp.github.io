# SwitchButton  切换按钮

## 基础用法

- 可切换选中状态的按钮，内部基于 `sn-button` 扩展，`v-model` 绑定布尔值，点击在选中与未选中之间切换
- 选中态与未选中态各自拥有独立的配色体系，两态配色沿用 `sn-checkbox-tag` 的 type / level 等级机制：选中态由 `active-type` / `active-level` 控制，未选中态由 `type` / `level` 控制
- 提供两种定制颜色的方式：① 用等级机制组合出主题色；② 用 `bg-color` / `active-bg-color` 与 `text-color` / `active-text-color` 直接指定两态的背景色、文字色与边框色，自定义颜色优先于等级配色
- 支持两态不同文案（`text` / `active-text`）与图标、加载与禁用状态，以及 `text-style`、`icon-style` 等外部样式扩展

::: tip 文本传参
文本请统一通过 `text` / `active-text` 传入（组件不透传插槽）。子组件 `sn-button` 以 `$slots.default != null` 判定插槽，若向上层透传空插槽会导致文本属性被忽略、按钮显示为空。
:::

```vue
<template>
	<sn-switch-button v-model="value" text="关注" active-text="已关注" active-type="success"
		active-level="second"></sn-switch-button>
</template>

<script lang="uts" setup>
const value = ref<boolean>(false)
</script>
```

**更多演示请下载 demo 查看**

## 两态配色（type / level）

未选中态与选中态分别由 `type` + `level` 与 `active-type` + `active-level` 决定，四级 `level` 的表现程度与 `sn-button` 一致：

| level | 背景色 | 文字色 |
| --- | --- | --- |
| `first` | 功能色原色 | 功能色背景上的文字色 |
| `second` | 功能色浅色（Light） | 功能色原色 |
| `third` | `info` 信息色 | 功能色原色 |
| `least` | 透明 | 功能色原色 |

```vue
<template>
	<sn-switch-button v-model="value" type="info" level="second" active-type="primary" active-level="first"></sn-switch-button>
	<sn-switch-button v-model="value2" type="primary" level="least" active-type="primary" active-level="first"></sn-switch-button>
</template>

<script lang="uts" setup>
const value = ref<boolean>(false)
const value2 = ref<boolean>(true)
</script>
```

## 自定义两态颜色

直接传入颜色属性即可覆盖等级配色，两态的颜色互不影响，可只覆盖其中一态。颜色值支持 `$` 简写（如 `$primary`、`$textLight`），也可传入 `#rrggbb`、`rgb()`、`rgba()` 等常规颜色值：

```vue
<template>
	<sn-switch-button v-model="value" text="关注" active-text="已关注" bg-color="rgba(124,92,255,0.15)"
		text-color="#7c5cff" active-bg-color="#7c5cff" active-text-color="#ffffff"></sn-switch-button>
</template>

<script lang="uts" setup>
const value = ref<boolean>(false)
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，当前是否选中 | Boolean | `false` | `true` \| `false` |
| type | 未选中态功能色类型 | String | `info` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| level | 未选中态等级，决定表现程度（first 最重、least 最轻） | String | `second` | `first` \| `second` \| `third` \| `least` |
| activeType | 选中态功能色类型 | String | `primary` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| activeLevel | 选中态等级 | String | `first` | `first` \| `second` \| `third` \| `least` |
| text | 未选中态文本内容 | String | `''` | - |
| activeText | 选中态文本内容，沿用 `text` | String | - | - |
| bgColor | 未选中态背景颜色，传入后覆盖等级配色 | String | `''` | - |
| activeBgColor | 选中态背景颜色，传入后覆盖等级配色 | String | `''` | - |
| textColor | 未选中态文字与图标颜色 | String | `''` | - |
| activeTextColor | 选中态文字与图标颜色 | String | `''` | - |
| borderColor | 未选中态边框颜色，取该态功能色原色 | String | - | - |
| activeBorderColor | 选中态边框颜色，取该态功能色原色 | String | - | - |
| size | 按钮尺寸，影响内边距、字号与圆角 | String | `normal` | `small` \| `normal` \| `large` |
| shape | 按钮形状，`circle` 时为纯图标圆形按钮 | String | `rect` | `rect` \| `circle` |
| icon | 图标名称（sn-icon 图标名） | String | `''` | - |
| iconPosition | 图标位置 | String | `left` | `left` \| `right` |
| iconSize | 图标大小 | String \| Number | `''` | - |
| radius | 自定义按钮圆角 | String \| Number | `''` | - |
| plain | 是否镂空（透明背景 + 边框样式） | Boolean | `false` | `true` \| `false` |
| dashed | 是否虚线边框（一般配合 `plain` 使用） | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用，禁用后不可切换 | Boolean | `false` | `true` \| `false` |
| loading | 是否加载状态，显示加载遮罩并阻止切换 | Boolean | `false` | `true` \| `false` |
| loadingStyle | 加载指示器自定义样式 | UTSJSONObject \| String | `''` | - |
| hoverStyle | 按下时的点击态样式 | UTSJSONObject \| String | `''` | - |
| hoverStopPropagation | 是否阻止点击态的父节点传播 | Boolean | `false` | `true` \| `false` |
| hoverStartTime | 按下后点击态出现的延迟时间（ms） | Number | `0` | - |
| hoverStayTime | 松手后点击态保留的时间（ms） | Number | `0` | - |
| hoverTransTime | 点击态过渡动画时长，支持 `$` 前缀 | String \| Number | `''` | - |
| textClass | 文本外部样式类 | String | `''` | - |
| textStyle | 文本自定义样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 图标外部样式类 | String | `''` | - |
| iconStyle | 图标自定义样式 | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义根节点（按钮本体）样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | () => Void | 点击按钮时触发（禁用或加载状态下不触发） |
| change | (value: boolean) => Void | 选中状态改变时触发，携带切换后的新值 |

<DemoPhone name="sn-switch-button" />
