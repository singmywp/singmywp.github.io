# Message  消息条

> [查看 sn-message 的 2.0 版本差异](/differences/components/sn-message)

## 基础用法

- 全局消息条组件，在页面顶部 / 底部弹出轻量消息提示，支持多条消息依次排列成队列，自动消失。
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 通过 `ref` 调用 `show` 方法弹出消息（参数类型 `SnMessageParams`），返回消息 `id`；调用 `close(id)` 关闭指定消息，`close()` 关闭全部消息。
- `type` 提供五种功能色类型（`info` / `primary` / `success` / `error` / `warning`），默认图标随类型自动匹配；`level` 提供三种深浅等级（`first` / `second` / `third`），配色与 sn-button 的 type / level 体系一致。
- `position` 控制消息队列整体位置：`top-left` / `top` / `top-right` / `bottom-left` / `bottom` / `bottom-right` 六个方向。
- `closable` 显示右侧关闭按钮；`grouping` 开启后相同内容（同位置、同类型、同文字）的消息自动合并并显示计数徽标；`duration` 为自动关闭时长（ms），`0` 表示不自动关闭。
- 组件属性作为 `show()` 参数的默认配置，`show()` 传入的参数优先级更高。

```vue
<template>
	<sn-page>
		<sn-button text="显示消息" type="primary" @click="showMessage"></sn-button>
		<sn-message ref="messageRef"></sn-message>
	</sn-page>
</template>

<script lang="uts" setup>
import type { SnMessageParams } from '@/uni_modules/sinle-ui/core/types/index.uts'

const messageRef = ref<SnMessageComponentPublicInstance | null>(null)

function showMessage(): void {
	messageRef.value?.$callMethod('show', {
		text: '这是一条消息提示',
		type: 'success'
	} as SnMessageParams)
}
</script>
```

**更多演示请下载 demo 查看**

## 消息合并与手动关闭

```vue
<template>
	<sn-message ref="messageRef" @close="onMessageClose"></sn-message>
</template>

<script lang="uts" setup>
import type { SnMessageParams } from '@/uni_modules/sinle-ui/core/types/index.uts'

const messageRef = ref<SnMessageComponentPublicInstance | null>(null)
let msgId = ''

function show(): void {
	msgId = messageRef.value?.$callMethod('show', {
		text: '这条消息可通过 close(id) 提前关闭',
		type: 'primary',
		closable: true,
		duration: 30000
	} as SnMessageParams) as string
}

function close(): void {
	messageRef.value?.$callMethod('close', msgId)
}

function onMessageClose(): void {
	console.log('有一条消息被关闭')
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 默认消息文字 | String | `''` | - |
| type | 消息类型（功能色） | String | `info` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level | 消息配色等级 | String | `first` | `first` \| `second` \| `third` |
| position | 消息队列整体位置 | String | `top` | `top-left` \| `top` \| `top-right` \| `bottom-left` \| `bottom` \| `bottom-right` |
| duration | 自动关闭时长（ms），`0` 表示不自动关闭 | Number | `3000` | - |
| showIcon | 是否显示类型图标 | Boolean | `true` | `true` \| `false` |
| icon | 自定义图标名称，为空时按 `type` 使用默认图标 | String | `''` | - |
| closable | 是否显示右侧关闭按钮 | Boolean | `false` | `true` \| `false` |
| grouping | 是否开启消息合并，相同内容自动合并计数 | Boolean | `false` | `true` \| `false` |
| bgColor | 消息条背景颜色，支持 `$` 简写，为空时按 `type` 与 `level` 取主题色 | String | `''` | - |
| textColor | 消息文字颜色，支持 `$` 简写，为空时按 `type` 与 `level` 取主题色 | String | `''` | - |
| iconColor | 图标颜色，支持 `$` 简写，为空时跟随文字颜色 | String | `''` | - |
| textSize | 消息文字大小，支持 `$` 简写，为空时随字体乘数缩放（约 14px） | String \| Number | `''` | - |
| borderRadius | 消息条圆角大小，支持 `$` 简写，为空时随圆角乘数缩放（约 8px） | String \| Number | `''` | - |
| customStyle | 自定义消息条样式 | UTSJSONObject \| String | `''` | - |
| customClass | 消息条外部类 | String | `''` | - |
| textStyle | 自定义消息文字样式 | UTSJSONObject \| String | `''` | - |
| textClass | 消息文字外部类 | String | `''` | - |
| iconStyle | 自定义图标样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 图标外部类 | String | `''` | - |
| closeStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | `''` | - |
| closeClass | 关闭按钮外部类 | String | `''` | - |
| badgeStyle | 自定义合并计数徽标样式 | UTSJSONObject \| String | `''` | - |
| badgeClass | 合并计数徽标外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| close | () => Void | 有一条消息被关闭（移除）时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| show | param: [[SnMessageParams]] \| null | String | 弹出一条消息，参数字段优先于组件属性默认值，返回消息 `id` |
| close | id: String（默认 `''`） | - | 关闭消息；传入 `id` 时仅关闭对应消息，留空时关闭全部消息 |

:::type-fields SnMessageParams

`sn-message` 组件 `add` 方法入参：`text`（内容）、`type`、`level`、`position`、`duration`、`showIcon`、`icon`、`closable`、`grouping`（相同内容归并计数）、`bgColor`、`textColor`、`iconColor`、`textSize`、`borderRadius`、`customStyle`。

:::

## show 参数（SnMessageParams）

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| text | 消息文字 | String \| null |
| type | 消息类型 | [[SnMessageType]] \| null |
| level | 配色等级 | [[SnMessageLevel]] \| null |
| position | 弹出位置 | [[SnMessagePosition]] \| null |
| duration | 自动关闭时长（ms） | Number \| null |
| showIcon | 是否显示类型图标 | Boolean \| null |
| icon | 自定义图标名称 | String \| null |
| closable | 是否显示关闭按钮 | Boolean \| null |
| grouping | 是否开启消息合并 | Boolean \| null |
| bgColor | 背景颜色 | String \| null |
| textColor | 文字颜色 | String \| null |
| iconColor | 图标颜色 | String \| null |
| textSize | 文字大小 | String \| null |
| borderRadius | 圆角大小 | String \| null |
| customStyle | 自定义消息条样式 | UTSJSONObject \| null |

:::type-fields SnMessageType

```typescript
type SnMessageType = 'primary' | 'success' | 'error' | 'info' | 'warning'
type SnNotificationType = 'primary' | 'success' | 'error' | 'info' | 'warning'
```

消息 / 通知类型。

:::
:::type-fields SnMessageLevel

```typescript
type SnMessageLevel = 'first' | 'second' | 'third'
type SnNotificationLevel = 'first' | 'second' | 'third'
```

消息 / 通知等级（表现程度）。

:::
:::type-fields SnMessagePosition

```typescript
type SnMessagePosition = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right'
type SnNotificationPosition = 'top' | 'bottom'
```

消息条 / 通知队列位置。

:::

<DemoPhone name="sn-message" />
