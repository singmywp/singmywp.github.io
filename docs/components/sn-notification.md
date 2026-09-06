# Notification  通知

> [查看 sn-notification 的 2.0 版本差异](/differences/components/sn-notification)

## 基础用法

- 全局通知组件，从页面顶部 / 底部弹出带标题与内容的通知卡片，适合订单状态、系统消息等重要提醒。
- 弹出层类组件，**必须直接放在 `sn-page` 根节点下使用**，否则主题颜色与动画时长等 CSS 变量无法作用到组件内部。
- 通过 `ref` 调用 `show` 方法弹出通知（参数类型 `SnNotificationParams`），返回通知 `id`；调用 `close(id)` 关闭指定通知，`close()` 关闭全部通知。
- `type` 提供五种功能色类型（`info` / `primary` / `success` / `error` / `warning`），默认图标随类型自动匹配，图标位于按类型与等级着色的圆角色块中；`level` 提供三种配色等级（`first` / `second` / `third`），与 sn-button 的 type / level 体系一致。
- `position` 控制通知队列整体位置（`top` / `bottom`）；`show-progress` 开启卡片底部剩余时间进度条；`closable` 显示右侧关闭按钮；`grouping` 开启后相同标题 + 内容的通知自动合并计数。
- `draggable` 开启手势拖动：按住通知左右拖动可跟手移动，松手超过阈值（`drag-threshold`，默认 80px，支持卡片宽度百分比）向对应方向飞出关闭，未达阈值回弹；拖动期间自动关闭计时暂停，Web 端同时支持鼠标拖拽。
- 组件属性作为 `show()` 参数的默认配置，`show()` 传入的参数优先级更高。

```vue
<template>
	<sn-page>
		<sn-button text="显示通知" type="primary" @click="showNotice"></sn-button>
		<sn-notification ref="notificationRef"></sn-notification>
	</sn-page>
</template>

<script lang="uts" setup>
import type { SnNotificationParams } from '@/uni_modules/sinle-ui/core/types/index.uts'

const notificationRef = ref<SnNotificationComponentPublicInstance | null>(null)

function showNotice(): void {
	notificationRef.value?.$callMethod('show', {
		title: '订单支付成功',
		content: '您的订单已支付成功，预计 3 天内发货。',
		type: 'success'
	} as SnNotificationParams)
}
</script>
```

**更多演示请下载 demo 查看**

## 操作插槽与手动关闭

在 `show()` 参数中设置 `showAction: true` 时显示右侧操作插槽，插槽作用域暴露当前通知 `id`。

```vue
<template>
	<sn-notification ref="notificationRef">
		<template v-slot:action="slotProps">
			<sn-button type="primary" level="least" text="复制" @click="onCopy(slotProps.id)"></sn-button>
		</template>
	</sn-notification>
</template>

<script lang="uts" setup>
import type { SnNotificationParams } from '@/uni_modules/sinle-ui/core/types/index.uts'

const notificationRef = ref<SnNotificationComponentPublicInstance | null>(null)

function show(): void {
	notificationRef.value?.$callMethod('show', {
		title: '订单待支付',
		content: '订单号 SN20260101001，请尽快完成支付。',
		type: 'warning',
		duration: 10000,
		showAction: true
	} as SnNotificationParams)
}

function onCopy(id: string): void {
	uni.setClipboardData({ data: '订单号 SN20260101001' })
	notificationRef.value?.$callMethod('close', id)
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 默认通知标题 | String | `''` | - |
| content | 默认通知内容 | String | `''` | - |
| type | 通知类型（功能色） | String | `info` | `info` \| `primary` \| `success` \| `error` \| `warning` |
| level | 通知配色等级 | String | `first` | `first` \| `second` \| `third` |
| position | 通知队列整体位置 | String | `top` | `top` \| `bottom` |
| duration | 自动关闭时长（ms），`0` 表示不自动关闭 | Number | `4500` | - |
| showProgress | 是否显示卡片底部剩余时间进度条 | Boolean | `false` | `true` \| `false` |
| showIcon | 是否显示类型图标 | Boolean | `true` | `true` \| `false` |
| icon | 自定义图标名称，为空时按 `type` 使用默认图标 | String | `''` | - |
| closable | 是否显示右侧关闭按钮 | Boolean | `false` | `true` \| `false` |
| grouping | 是否开启通知合并，相同标题 + 内容自动合并计数 | Boolean | `false` | `true` \| `false` |
| bgColor | 通知卡片背景颜色，支持 `$` 简写 | String | `$front` | - |
| titleColor | 标题颜色，支持 `$` 简写 | String | `$title` | - |
| contentColor | 内容颜色，支持 `$` 简写 | String | `$text` | - |
| iconColor | 图标颜色，支持 `$` 简写，为空时按 `type` 与 `level` 取主题色 | String | `''` | - |
| titleSize | 标题字号，支持 `$` 简写，为空时随字体乘数缩放（约 15px） | String \| Number | `''` | - |
| contentSize | 内容字号，支持 `$` 简写，为空时随字体乘数缩放（约 13px） | String \| Number | `''` | - |
| borderRadius | 卡片圆角大小，支持 `$` 简写，为空时随圆角乘数缩放（约 12px） | String \| Number | `''` | - |
| draggable | 是否开启手势拖动关闭 | Boolean | `false` | `true` \| `false` |
| dragThreshold | 横向拖动关闭阈值，超过则飞出关闭，支持数字（px）与百分比字符串（相对卡片宽度） | String \| Number | `80` | - |
| customStyle | 自定义通知卡片样式 | UTSJSONObject \| String | `''` | - |
| customClass | 通知卡片外部类 | String | `''` | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 标题外部类 | String | `''` | - |
| contentStyle | 自定义内容样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 内容外部类 | String | `''` | - |
| iconStyle | 自定义图标样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 图标外部类 | String | `''` | - |
| closeStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | `''` | - |
| closeClass | 关闭按钮外部类 | String | `''` | - |
| badgeStyle | 自定义合并计数徽标样式 | UTSJSONObject \| String | `''` | - |
| badgeClass | 合并计数徽标外部类 | String | `''` | - |
| actionStyle | 自定义操作插槽容器样式 | UTSJSONObject \| String | `''` | - |
| actionClass | 操作插槽容器外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| close | () => Void | 有一条通知被关闭（移除）时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| show | param: [[SnNotificationParams]] \| null | String | 弹出一条通知，参数字段优先于组件属性默认值，返回通知 `id` |
| close | id: String（默认 `''`） | - | 关闭通知；传入 `id` 时仅关闭对应通知，留空时关闭全部通知 |

:::type-fields SnNotificationParams

`sn-notification` 组件 `add` 方法入参：`title`、`content`、`type`、`level`、`position`（`'top'` | `'bottom'`）、`duration`、`showProgress`、`showIcon`、`icon`、`closable`、`showAction`（是否显示右侧操作插槽）、`grouping`、`bgColor`、`titleColor`、`contentColor`、`iconColor`、`borderRadius`、`draggable`、`dragThreshold`、`customStyle`。

---

:::

## show 参数（SnNotificationParams）

| 字段 | 说明 | 类型 |
| --- | --- | --- |
| title | 通知标题 | String \| null |
| content | 通知内容 | String \| null |
| type | 通知类型 | [[SnNotificationType]] \| null |
| level | 配色等级 | [[SnNotificationLevel]] \| null |
| position | 弹出位置 | [[SnNotificationPosition]] \| null |
| duration | 自动关闭时长（ms） | Number \| null |
| showProgress | 是否显示进度条 | Boolean \| null |
| showIcon | 是否显示类型图标 | Boolean \| null |
| icon | 自定义图标名称 | String \| null |
| closable | 是否显示关闭按钮 | Boolean \| null |
| showAction | 是否显示右侧操作插槽（需组件内定义插槽内容） | Boolean \| null |
| grouping | 是否开启通知合并 | Boolean \| null |
| bgColor | 卡片背景颜色 | String \| null |
| titleColor | 标题颜色 | String \| null |
| contentColor | 内容颜色 | String \| null |
| iconColor | 图标颜色 | String \| null |
| borderRadius | 圆角大小 | String \| null |
| draggable | 是否开启手势拖动关闭 | Boolean \| null |
| dragThreshold | 拖动关闭阈值 | String \| Number \| null |
| customStyle | 自定义通知卡片样式 | UTSJSONObject \| null |

:::type-fields SnNotificationType

```typescript
type SnMessageType = 'primary' | 'success' | 'error' | 'info' | 'warning'
type SnNotificationType = 'primary' | 'success' | 'error' | 'info' | 'warning'
```

消息 / 通知类型。

:::
:::type-fields SnNotificationLevel

```typescript
type SnMessageLevel = 'first' | 'second' | 'third'
type SnNotificationLevel = 'first' | 'second' | 'third'
```

消息 / 通知等级（表现程度）。

:::
:::type-fields SnNotificationPosition

```typescript
type SnMessagePosition = 'top-left' | 'top' | 'top-right' | 'bottom-left' | 'bottom' | 'bottom-right'
type SnNotificationPosition = 'top' | 'bottom'
```

消息条 / 通知队列位置。

:::

## 插槽

| 名称 | 说明 |
| --- | --- |
| action | 卡片右侧操作区插槽，仅当 `show()` 参数 `showAction` 为 `true` 时显示；作用域暴露 `id`（当前通知 id） |

<DemoPhone name="sn-notification" />
