# Badge  徽标

> [查看 sn-badge 的 2.0 版本差异](/differences/components/sn-badge)

## 基础用法

- 用以展示未读消息及消息提示，默认数字模式，包裹在需要显示徽标的内容右上角。
- 支持数字模式（`number`）、文本模式（`text`）与浮点模式（`dot`）；数字超过 `max` 时显示 `max+`，数字为 `0` 时默认隐藏。
- 不包裹内容时也可独立使用，徽标直接显示在文档流中。

```vue
<template>
	<sn-badge :value="15">
		<sn-avatar src="https://www.example.com/example.png"></sn-avatar>
	</sn-badge>
</template>
```

**更多演示请下载 demo 查看**

## 自定义徽标内容

- 通过 `value` 插槽完全自定义徽标内部内容（优先级最高）。
- 通过 `offset` 在默认右上角定位基础上追加位移，格式同 css `transform`（如 `translate(-10px, 6px)`）。

```vue
<template>
	<sn-badge :value="0">
		<template #value>
			<sn-icon name="emotion-happy-line" :size="12" color="#FFFFFF"></sn-icon>
		</template>
		<sn-icon name="notification-3-line" :size="26"></sn-icon>
	</sn-badge>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| mode | 徽标显示模式 | BadgeMode | `number` | `number` \| `text` \| `dot` |
| value | 数字模式下徽标的数字值 | Number | `0` | - |
| max | 数字模式下徽标的最大数字值，超过显示 `max+`；`-1` 表示不限制 | Number | `-1` | - |
| text | 文本模式下徽标的文本内容 | String | - | - |
| type | 徽标功能色，背景与文字色自动配套 | BadgeType | `error` | `primary` \| `info` \| `success` \| `warning` \| `error` |
| bgColor | 徽标背景颜色，支持 `$` 功能色简写；取 `type` 对应色 | String | - | - |
| textColor | 徽标文字颜色，支持 `$` 功能色简写；取 `type` 对应文字色 | String | - | - |
| size | 数字/文本模式下控制字号，浮点模式下控制圆点直径；支持 `$` 简写 | String \| Number | - | - |
| showZero | 数字模式下数字为 `0` 时是否显示 | Boolean | `false` | `true` \| `false` |
| show | 是否显示徽标 | Boolean | `true` | `true` \| `false` |
| offset | 徽标偏移量，格式同 css 属性 `transform` | String | - | - |
| alwaysWrap | 是否始终保留外层容器包裹内容；默认隐藏徽标时内容直出（无多余节点），开启后显隐切换带过渡动画 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义徽标样式 | UTSJSONObject \| String | - | - |
| textStyle | 徽标内数字/文本的自定义样式 | UTSJSONObject \| String | - | - |
| dotStyle | 浮点模式下徽标圆点的自定义样式 | UTSJSONObject \| String | - | - |
| containStyle | 包裹内容的外层容器自定义样式 | UTSJSONObject \| String | - | - |
| badgeClass | 徽标的外部样式类 | String | - | - |
| textClass | 徽标内数字/文本的外部样式类 | String | - | - |
| containClass | 外层容器的外部样式类 | String | - | - |

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| default | 需要显示徽标的内容，可选；不传时徽标独立使用 |
| value | 完全自定义徽标内部内容，优先级最高 |

<DemoPhone name="sn-badge" />
