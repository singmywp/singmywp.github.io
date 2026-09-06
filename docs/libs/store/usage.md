# Store 用法

本文档介绍 `StoreLib` 的典型使用场景与最佳实践。所有示例均以 `store`（`@/uni_modules/sinle-ui` 导出的应用级实例）演示。

## 基础存取（仅内存）

默认情况下数据只保存在内存中，适合临时状态：

```typescript
import { store } from '@/uni_modules/sinle-ui'

store.set('count', 10)
let count = store.get('count', 0) // 默认值兜底

store.delete('count')
```

## 持久化存储

需要 App 重启后依然保留的数据（用户偏好、业务配置等），将第三个参数 `lasting` 置为 `true`：

```typescript
store.set('userName', 'Aaron', true)
store.set('themePreference', 'dark', true)

// 删除时会同步清理本地存储
store.delete('userName')
```

持久化底层依赖 uni-app 的本地 [storage API](https://doc.dcloud.net.cn/uni-app-x/api/storage.html)，以 `snui_store_{storeKey}_` 前缀隔离各实例，不同 `StoreLib` 之间互不干扰。

## 过期数据

一次性、有时效的数据（验证码、临时票据等）可设置过期秒数，过期后自动视为不存在：

```typescript
// 10 秒后过期
store.set('captcha', '123456', false, 10)

// 过期后返回 null（或指定的默认值）
let v = store.get('captcha')
```

过期策略的详细说明见[过期策略](/libs/store/expire)。

## 跨页面共享状态

`store` 是全局单例，任意页面读写同一键即可实现跨页面状态共享，替代手动传参或 `storage` 中转：

```vue
<template>
	<text>{{ nick }}</text>
</template>

<script lang="uts" setup>
	import { computed } from 'vue'
	import { store } from '@/uni_modules/sinle-ui'

	// 与 store 内部响应式存储联动，其他页面修改后本页自动更新
	const nick = computed(() => store.get('nick', ''))
</script>
```

## 订阅数据变化

不依赖界面渲染的逻辑（如接口联动、缓存刷新、事件转发），可通过 `subscribe` 监听键的变更：

```typescript
const unsubscribe = store.subscribe('userInfo', (value: any | null, key: string) => {
	if (value != null) {
		// value 为写入的新值
		refreshUser(value as UserInfo)
	} else {
		// 键被 delete 时 value 为 null
		onUserLogout()
	}
})

// 不需要时务必取消订阅
unsubscribe()
```

### 组件中使用规范

订阅返回的取消函数应在组件卸载时调用，避免内存泄漏：

```vue
<script lang="uts" setup>
	import { onUnmounted } from 'vue'
	import { store } from '@/uni_modules/sinle-ui'

	let unsubscribe: () => void = () => {}

	onMounted(() => {
		unsubscribe = store.subscribe('count', (value: any | null, key: string) => {
			// ...
		})
	})

	onUnmounted(() => {
		unsubscribe()
	})
</script>
```

## 独立实例管理模块状态

不同业务模块之间需要彻底隔离时，可创建专属的 `StoreLib` 实例（含独立的持久化命名空间与过期列表）：

```typescript
import { StoreLib } from '@/uni_modules/sinle-ui'

const cartStore = new StoreLib('cart_store')
cartStore.set('items', [], true)
```

`storeKey` 仅允许 `[A-Za-z0-9_-]`，且不能与已有实例重名（重名或非法时创建无效并输出警告日志）。

## 与框架状态的配合

框架自身的状态（主题、风格、灰模等）已统一由 `frameStore` 管理并通过 `$snui` 暴露，业务代码直接读写 `$snui` 即可，无需操作存储细节。业务侧如需沿用框架的持久化能力，推荐使用 `store` 实例而不要直接调用 `uni.setStorageSync`。