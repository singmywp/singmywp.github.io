# StoreLib 方法

以下方法均通过 `store`（或任意 `StoreLib` 实例）调用。

---

# store.get(key, defaultValue?)

### **获取数据**

从存储中获取指定键的数据。如果数据存在且未过期，则返回数据；否则返回默认值（不传时返回 `null`）。读取时若发现键已过期，会顺带执行清理。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 数据的键名 |
| defaultValue | any | 否 | `null` | 键不存在或已过期时返回的默认值 |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| any \| null | 是 | 键存在且未过期时返回数据，否则返回默认值（无默认值时返回 `null`） |

### 示例

```typescript
let name = store.get('userName')
let score = store.get('score', 0)
```

---

# store.set(key, value, lasting?, expire?)

### **存储数据**

将数据存储到存储库中。如果数据已存在，则更新数据；若该键此前已过期，会先清理旧数据再写入。`lasting` 为 `true` 时数据会持久化到本地 Storage，App 重启后自动恢复。`expire` 单位为秒，`0` 表示永不过期；重新 set 不传 `expire` 时，旧的过期记录会被清除。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 数据的键名 |
| value | any | 是 | - | 要存储的数据 |
| lasting | Boolean | 否 | `false` | 是否持久化存储。为 `true` 时写入本地 Storage |
| expire | Number | 否 | `0` | 数据的过期时间，单位秒。`0` 表示永不过期 |

### 返回值

无

### 示例

```typescript
store.set('count', 10)
store.set('userName', 'Aaron', true)
store.set('captcha', '123456', false, 10)
```

---

# store.delete(key)

### **删除数据**

从存储中删除指定键的数据。若该键为持久化数据，会同步从本地 Storage 移除，并触发该键的订阅回调（值为 `null`）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 数据的键名 |

### 返回值

无

### 示例

```typescript
store.delete('userName')
```

---

# store.has(key)

### **判断键是否存在**

判断指定键是否存在且未过期。若已过期，会顺带执行清理。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 数据的键名 |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| Boolean | 是 | 键存在且未过期返回 `true`，否则返回 `false` |

### 示例

```typescript
if (store.has('userName')) {
	// ...
}
```

---

# store.keys()

### **获取全部键名**

返回存储库中全部未过期的键名数组。调用时会先清理所有已过期的键。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| String[] | 是 | 全部未过期的键名数组 |

### 示例

```typescript
let allKeys = store.keys()
```

---

# store.clear()

### **清空存储**

清空存储库中的所有数据（含持久化数据与本地 Storage 中的对应条目）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

无

### 示例

```typescript
store.clear()
```

---

# store.size

### **数据总量**

获取存储库中当前未过期的键数量。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| Number | 是 | 当前未过期的键数量 |

### 示例

```typescript
let count = store.size
```

---

# store.subscribe(key, listener)

### **订阅变更**

订阅指定键的变更。调用 `set` 时回调收到新值；调用 `delete` 时收到 `null`。返回取消订阅函数，组件销毁时请调用以免内存泄漏。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 要监听的键名 |
| listener | (value: any \| null, key: string) => void | 是 | - | 变更回调，第一个参数为变更后的值（delete 时为 `null`），第二个参数为键名 |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| () => void | 是 | 取消订阅函数，调用后不再收到变更通知 |

### 示例

```typescript
const unsubscribe = store.subscribe('count', (value: any | null, key: string) => {
	console.log(key + ' changed to ' + value)
})
// 不再需要时取消订阅
unsubscribe()
```

---

# store.unsubscribe(key, listener)

### **取消订阅**

取消指定键下某个监听器的订阅。一般由 `subscribe` 返回的取消函数代替，无需直接调用。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| key | String | 是 | - | 已订阅的键名 |
| listener | (value: any \| null, key: string) => void | 是 | - | 订阅时的回调函数（引用需一致） |

### 返回值

无