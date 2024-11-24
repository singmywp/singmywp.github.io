# 用法
SinleUI 提供了 `StoreLib` 作为存储库类，用于提供全局可用的状态管理。

## 实例概况

应用内可存在多个 `StoreLib` 实例，互不干扰，通过 `StoreLib` 的参数/属性 `storeKey` 区分不同的实例。

SinleUI 框架内置了两个 `StoreLib` 实例：`store` 和 `frameStore`。
- `store` 实例用于管理开发者应用内全局状态，被挂载在 `$snui` 对象上，开发者的所有全局状态管理操作都应通过 `store` 实例进行
- `frameStore` 实例用于框架内状态管理，除非需要修改框架源代码，否则开发者无需关心此实例。

## 创建新实例

如果需要较为复杂的状态管理，开发者可以进行模块化管理，为每个模块创建单独的 `StoreLib` 实例。

例如：`@/common/chat` 目录下：
::: code-group
```typescript [store.uts]
import { StoreLib } from '@/uni_modules/sinle-ui'
export const chatStore = new StoreLib('chat_store')
```
```typescript [index.uts]
import { chatStore } from './store.uts'

function insertMessage(userId: string, message: string) {
    chatStore.set(userId, message, true)
}
```

:::

::: warning 注意
创建 `StoreLib` 实例时，参数 `storeKey` 必须是唯一的，否则会抛出异常。
:::