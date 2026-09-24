# Switch  开关

> [查看 sn-switch 的 2.0 版本差异](/differences/components/sn-switch)

## 基础用法

- 开关选择器，`v-model` 绑定布尔值，点击切换，小球带滑动动画。
- 支持禁用与加载状态：禁用或加载中时点击不切换，加载中会在小球内显示加载动画。
- 支持在轨道内显示文本与图标（显示时建议加大宽度留出空间）。
- 轨道与小球在开/关、禁用状态下均有独立配色，尺寸、间隙、圆角均可自定义。

```vue
<template>
	<sn-switch v-model="value"></sn-switch>
</template>

<script lang="uts" setup>
const value = ref<boolean>(false)
</script>
```

**更多演示请下载 demo 查看**

## 自定义内容

通过 `text` 与 `icon` 可在轨道内显示文本、图标，按需加大 `width`：

```vue
<template>
	<sn-switch v-model="value" text="开" icon="star-fill" width="60px"></sn-switch>
</template>

<script lang="uts" setup>
const value = ref<boolean>(false)
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值，当前开关状态 | Boolean | `false` | `true` \| `false` |
| width | 开关宽度 | String \| Number | `'50px'` | - |
| height | 开关高度 | String \| Number | `'25px'` | - |
| text | 轨道内文本内容 | String | `''` | - |
| icon | 轨道内图标名称 | String | `''` | - |
| iconSize | 轨道内图标大小 | String \| Number | `$12` | - |
| padding | 小球与轨道内边缘的间隙 | String \| Number | `'5px'` | - |
| borderRadius | 轨道圆角，取高度一半呈胶囊形 | String \| Number | - | - |
| bgColor | 关闭状态轨道背景颜色 | String | `'$line'` | - |
| activeBgColor | 开启状态轨道背景颜色 | String | `'$primary'` | - |
| disabledBgColor | 禁用且关闭时轨道背景颜色 | String | `'$disabled'` | - |
| disabledActiveBgColor | 禁用且开启时轨道背景颜色 | String | `'$disabledDark'` | - |
| blockColor | 关闭状态小球颜色 | String | `'#fff'` | - |
| activeBlockColor | 开启状态小球颜色 | String | `'#fff'` | - |
| disabledBlockColor | 禁用且关闭时小球颜色 | String | `'#fff'` | - |
| disabledActiveBlockColor | 禁用且开启时小球颜色 | String | `'#fff'` | - |
| blockBorderRadius | 小球圆角，取小球尺寸一半呈圆形 | String \| Number | - | - |
| textColor | 轨道内文本颜色 | String | `'#fff'` | - |
| textSize | 轨道内文本大小 | String \| Number | `$12` | - |
| loading | 是否处于加载状态（小球内显示加载动画，期间不可点击） | Boolean | `false` | `true` \| `false` |
| loadingClass | 加载动画的外部样式类 | String | `''` | - |
| loadingStyle | 自定义加载动画样式 | UTSJSONObject \| String | `''` | - |
| disabled | 是否禁用开关 | Boolean | `false` | `true` \| `false` |
| thumbClass | 小球的外部样式类 | String | `''` | - |
| thumbStyle | 自定义小球样式 | UTSJSONObject \| String | `''` | - |
| customStyle | 自定义开关根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: boolean) => Void | 状态改变时触发，携带切换后的新值 |

<DemoPhone name="sn-switch" />
