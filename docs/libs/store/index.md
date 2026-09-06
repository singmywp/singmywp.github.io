# Store 状态管理库

一个轻量简洁的全局响应式状态管理库。以键值对形式存储应用状态，支持**持久化存储**（重启后恢复）与**过期机制**（自动清理失效数据），并提供变更订阅能力。框架简单状态管理无需引入 pinia，直接使用本库即可。

## 导入方式

```typescript
import { store, frameStore, StoreLib } from '@/uni_modules/sinle-ui'
```

框架也保留了旧版入口 `$snui.store`（等价于 `store`）：

```typescript
import { $snui } from '@/uni_modules/sinle-ui'
const s = $snui.store
```

### 内置实例

| 实例 | storeKey | 使用场景 |
| --- | --- | --- |
| `store` | `app_store` | 应用全局状态，推荐在业务中使用 |
| `frameStore` | `sinle_ui_store` | 框架内部状态（主题、风格、灰模等），不建议业务直接使用 |

## 快速上手

```typescript
import { store } from '@/uni_modules/sinle-ui'

// 存储数据（不持久化，仅内存响应式）
store.set('count', 10)

// 存储数据（持久化，App 重启后自动恢复）
store.set('userName', 'Aaron', true)

// 读取数据；不存在时返回 null，也可指定默认值
let name = store.get('userName')
let score = store.get('score', 0)

// 判断是否存在
let exists = store.has('userName')

// 删除数据（持久化数据会同步从本地存储移除）
store.delete('userName')

// 订阅指定键的变化，set 时收到新值，delete 时收到 null
const unsubscribe = store.subscribe('count', (value: any | null, key: string) => {
	// value: 变更后的值；delete 时为 null
})
unsubscribe()
```

## 核心特性

### 响应式

数据存放在响应式存储中，页面模板或 `computed` 中读取该键时，后续对该键的修改会自动驱动界面更新，无需手动刷新：

```vue
<template>
	<text>{{ count }}</text>
</template>

<script setup lang="uts">
	import { store } from '@/uni_modules/sinle-ui'

	const count = computed(() => store.get('count', 0))
</script>
```

### 持久化（lasting）

`set(key, value, true, ...)` 将数据写入本地 Storage（基于 uni-app x 的 [storage API](https://doc.dcloud.net.cn/uni-app-x/api/storage.html)）。持久化键以 `snui_store_{storeKey}_` 为前缀，不同实例互不干扰。需要移除持久化数据时调用 `delete(key)`，会同步清理本地存储。

### 过期机制（expire）

`set(key, value, lasting, expire)` 的第 4 个参数为过期秒数（`0` 表示永不过期）。过期判断采用**惰性删除**策略：仅在访问（`get` / `has` / `keys`）或初始化时检查并清理过期键，不依赖定时器，兼顾性能：

```typescript
// 设置 10 秒后过期（不持久化）。过期后 get 返回 null
store.set('captcha', '123456', false, 10)

// 已存在过期的键被重新 set 且不传过期时间时，旧过期记录会被清除，变为永不过期
store.set('captcha', '234567')
```

### 变更订阅（subscribe）

对不渲染到界面的逻辑（如接口联动、界面外状态同步），可通过 `subscribe` 监听指定键的变更。订阅返回取消函数，组件销毁时请及时取消，避免内存泄漏。

## 创建自定义实例

应用内需要多个互不干扰的存储库时，可创建新的 `StoreLib` 实例：

```typescript
import { StoreLib } from '@/uni_modules/sinle-ui'

const myStore = new StoreLib('my_own_storelib')
```

- `storeKey` 仅允许字母、数字、下划线、中划线，且不能与已有实例重复，否则创建无效并输出警告日志。
- 每个实例的持久化键、过期列表、持久化列表均独立命名空间，互不影响。

## 注意事项

- **复杂对象类型**：Storage 序列化后读取到的复杂类型为 `UTSJSONObject`，若原值为自定义 `type` 对象，回读后需自行转换（如 `JSON.parse<T>(JSON.stringify(obj))`，可参考 [类型数据的存取说明](https://doc.dcloud.net.cn/uni-app-x/api/storage.html#gettypedata)）。
- **空字符串持久化**：持久化读取依赖同步 storage API，空字符串按「未存储」处理；请勿将空字符串作为持久化值。
- **过期时间以秒为单位**；`expire` 与 `lasting` 相互独立，可组合使用。