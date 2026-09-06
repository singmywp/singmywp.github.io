# Countdown  倒计时

> [查看 sn-countdown 的 2.0 版本差异](/differences/components/sn-countdown)

## 基础用法

- 用于展示一段剩余时间的倒计时，`time` 为总时长（单位 ms）。
- 基于动画帧驱动，走秒平滑不跳秒；`millisecond` 开启后可毫秒级刷新。
- 提供 `start` / `pause` / `reset` / `stop` 方法控制倒计时，`change` 事件返回剩余时间数据。

```vue
<template>
	<sn-countdown :time="3600000" format="HH:mm:ss" @finish="onFinish"></sn-countdown>
</template>
```

**更多演示请下载 demo 查看**

## 时间格式

`format` 中支持以下占位符，某个单位占位符缺省时，该单位会自动进位到上一级（如格式中没有 `DD`，天数会折算进小时显示）：

| 占位符 | 说明 |
| :--- | :--- |
| `DD` | 天数，两位数补齐 |
| `HH` | 小时，两位数 |
| `mm` | 分钟，两位数 |
| `ss` | 秒，两位数 |
| `SSS` | 毫秒，三位数 |
| `SS` | 十毫秒，两位数 |
| `S` | 百毫秒，一位数 |

使用毫秒占位符（`SSS` / `SS` / `S`）时请开启 `millisecond`，否则毫秒部分不会随帧刷新。

## 自定义布局

使用默认插槽后，组件不再渲染内部文本，可配合 `change` 事件自行布局（参数为包含 `d`、`h`、`m`、`s`、`ms` 字段的 `SnTime` 对象）：

```vue
<template>
	<sn-countdown :time="3661000" format="HH:mm:ss" @change="onChange">
		<text>{{ h }}时{{ m }}分{{ s }}秒</text>
	</sn-countdown>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| time | 倒计时总时长（单位 ms），变化时自动重置 | Number | `0` | - |
| format | 时间格式，占位符见上方"时间格式" | String | `HH:mm:ss` | - |
| autoplay | 初始化及重置后自动开始计时 | Boolean | `true` | `true` \| `false` |
| millisecond | 开启毫秒级刷新（显示毫秒占位符时务必开启） | Boolean | `false` | `true` \| `false` |
| textSize | 文本字体大小，支持 `$` 动态尺寸 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| textColor | 文本颜色，支持 `$` 主题色简写 | String | `''`（默认主题文字色） | - |
| selectable | 文本是否可选中复制 | Boolean | `false` | `true` \| `false` |
| bold | 文本是否加粗 | Boolean | `false` | `true` \| `false` |
| textClass | 文本节点外部样式类 | String | `''` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnTime]]) => Void | 剩余时间变化时触发，参数为包含 `d`、`h`、`m`、`s`、`ms` 字段的 [[SnTime]] 对象 |
| finish | () => Void | 倒计时归零时触发 |

:::type-fields SnTime

`sn-timer`、`sn-countdown` 等组件的 `change` 事件返回的时间结构。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| d | Number | 是 | 天 |
| h | Number | 是 | 时 |
| m | Number | 是 | 分 |
| s | Number | 是 | 秒 |
| ms | Number | 是 | 毫秒 |

---

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| start | - | - | 开始计时（或从暂停处继续） |
| pause | - | - | 暂停计时 |
| reset | - | - | 重置为 `time` 设定的剩余时长，`autoplay` 为 `true` 时自动重新开始 |
| stop | - | - | 停止计时并归零，触发 `finish` 事件 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义倒计时内容，接管内部文本渲染，可配合 `change` 事件实现个性化布局 |

<DemoPhone name="sn-countdown" />
