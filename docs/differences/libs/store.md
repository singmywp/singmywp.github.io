# Store 状态管理库差异

> 旧版参考：旧 `libs/store/`（`index.md` / `methods.md` / `usage.md` / `expire.md`）
>
> 新版参考：无对应文档（**已整体移除**）

## 结论

SinleUI 2.0 **移除了旧版的 Store 状态管理库**。旧 `$snui.store` 及其 `StoreLib` 全部废弃，文档中不再提供。

## 旧版能力回顾

| 能力 | 旧版实现 |
| :--- | :--- |
| 入口 | `$snui.store`（`StoreLib` 实例），另有 `store` / `frameStore` 两个内置实例 |
| 方法 | `store.get(key)` / `store.set(key, value)` / `store.delete(key)`（存储键为 `storeKey`，需保证唯一） |
| 过期策略 | 惰性删除 + 初始化检查（非定时/定期删除，权衡性能） |
| 场景 | 框架内部页签、全局状态等轻量键值存储 |

## 移除原因与影响

- 2.0 重新聚焦"UI 框架"边界，全局状态交由 `$snui`（风格/主题/乘数）与 Vue 组合式响应式状态负责；通用状态存储不再由框架承担。
- 框架内部所需的键值持久化统一改用 `uni.setStorageSync` / `uni.getStorageSync`（见 `core/state.uts` 的风格持久化）。

## 迁移建议

- 原使用 `$snui.store.get/set/delete` 的代码迁移到 `uni.getStorageSync / uni.setStorageSync / uni.removeStorageSync`，或引入 `pinia` 等状态管理库。
- 框架配置类持久化（主题、风格、乘数）无需自行处理：新版 `$snui` 属性修改后自动持久化。