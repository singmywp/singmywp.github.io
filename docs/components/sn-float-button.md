# Float Button  浮动按钮

> [查看 sn-float-button 的 2.0 版本差异](/differences/components/sn-float-button)

## 基础用法

- 固定定位的悬浮按钮，可用于悬浮操作入口、回到顶部等场景。
- 支持八方位预设位置（`position`）、自由拖动与松手自动吸附至左右两侧（`absorb`）。
- 通过 `v-model` 双向绑定按钮当前位置坐标，位置变化时同步触发 `change` 事件。
- Web 端支持鼠标拖动，窗口尺寸变化时自动重新校正位置。

```vue
<template>
	<sn-float-button icon="add-line" bg-color="$primary"></sn-float-button>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 按钮当前位置坐标，形如 `[x, y]` | `Array<Number>` | `[0, 0]` | - |
| position | 预设位置（`init` 为 true 时初始化定位至此） | String | `bottom` | `top-start` \| `top` \| `top-end` \| `right` \| `bottom-end` \| `bottom` \| `bottom-start` \| `left` |
| init | 是否在初始化时定位到 `position` 预设位置 | Boolean | `true` | `true` \| `false` |
| absorb | 松手后是否自动吸附至左右两侧 | Boolean | `true` | `true` \| `false` |
| disabled | 是否禁用（禁用后不可拖动、不响应点击） | Boolean | `false` | `true` \| `false` |
| bgColor | 背景颜色，支持 `$` 简写 | String | `''`（实际取 `$front`） | - |
| size | 按钮尺寸（宽高相同） | String \| Number | `60px` | - |
| icon | 内置图标名称 | String | `''` | - |
| iconColor | 图标颜色，支持 `$` 简写，禁用时为禁用色 | String | `''`（实际取 `$text`） | - |
| iconSize | 图标字体大小 | String \| Number | `''`（实际为 `30 × fontsizeFactor px`） | - |
| margin | 处于预设位置或吸附时与屏幕边缘的边距 | Number | `20` | - |
| borderRadius | 圆角大小 | String \| Number | `''`（实际为 `12000 × radiusFactor px`，即圆形） | - |
| boxShadow | 阴影 | String | `0 0 15px -10px` | - |
| aniTime | 拖动松手 / 吸附时的过渡动画时长 | String \| Number | `''`（实际取 `$snui.aniTimeLong`） | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (event: UniPointerEvent) => Void | 点击按钮时触发（禁用时不触发） |
| change | `(position: Array<Number>) => Void` | 初始化定位或拖动结束时触发，携带当前位置坐标 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换按钮内部默认的图标 |

<DemoPhone name="sn-float-button" />
