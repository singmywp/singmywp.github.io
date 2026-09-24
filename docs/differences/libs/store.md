# Store 状态管理库差异

## 结论

旧版的 Store 状态管理库在 SinleUI 2.0 中以 **新实现回归**（此前曾随 2.0 重构整体移除）。核心 API（`get / set / delete`、持久化、过期机制）保持兼容，同时修复了旧版的安全风险与若干 bug，并拓展了订阅、批量查询等能力。框架自身的状态持久化（主题 / 风格 / 灰模等）也已重构为基于新 store 库管理。

## 使用方式变化

| 项目 | 旧版 | 新版 |
| :--- | :--- | :--- |
| 入口 | `$snui.store`（另有插件内 `store` / `frameStore` 导出） | `import { store, frameStore, StoreLib } from '@/uni_modules/sinle-ui'` 独立导出，不再挂载 `$snui`（与 `ColorLib` / `DateLib` 一致） |
| 内置实例 | `store`（`app_store`）、`frameStore`（`sinle_ui_store`） | 同旧版 |
| 存储键前缀 | `sinle_ui_store_lib_*`、`{storeKey}_key_*` | `snui_store_{storeKey}_*`（实例级隔离） |

## 方法差异

### 保留（签名兼容）

`get(key)` / `set(key, value, lasting?, expire?)` / `delete(key)` 行为与旧版一致。

| 方法 | 旧版 | 新版 | 说明 |
| :--- | :--- | :--- | :--- |
| `get(key)` | √ | √ | 新增可选 `defaultValue` 参数 |

### 新增

| 方法 | 说明 |
| :--- | :--- |
| `get(key, defaultValue)` | 支持指定键不存在/过期时返回的默认值 |
| `has(key)` | 判断键是否存在且未过期 |
| `keys()` | 返回全部未过期键名 |
| `clear()` | 清空全部数据（含持久化数据） |
| `size` | 当前未过期键数量 |
| `subscribe(key, listener)` | 订阅指定键变更，返回取消函数 |
| `unsubscribe(key, listener)` | 手动取消订阅 |

### 移除

无（旧版三个方法全部保留）。

## 修复的旧版问题

| 问题 | 旧版表现 | 新版处理 |
| :--- | :--- | :--- |
| 多实例持久化键冲突 | 过期/持久化列表使用全局固定键 `sinle_ui_store_lib_expireslist` / `...lastinglist`，多个 `StoreLib` 实例互相同步互踩，与「互不干扰」承诺相悖 | 各实例的元数据键按 `snui_store_{storeKey}_*` 独立命名空间 |
| 初始化异步竞态 | `init()` 内 `uni.getStorage` 异步回调链读取列表，存在初始化未完成即被访问、持续数据丢失的风险 | 改为同步 storage API，初始化确定性完成 |
| 异步写入乱序 | `uni.setStorage` 异步写入，连续写入同键可能乱序丢失 | 改为 `uni.setStorageSync` 同步写入，保证顺序 |
| 过期键重新 set 残留旧过期 | 已过期/设过过期时间的键以 `expire=0` 重新 set 后，旧过期记录未清除 | 重新 set 不带过期时间时自动清除旧过期记录 |
| 过期后取值为 `''` | `getStorageSync` 缺键返回 `''`，`data ?? ''` 兜底失效，缺键被当作空串值写入 | 缺键/空串按「未存储」处理，持久化列表自愈清理 |
| H5 风格恢复失效 | 读取风格用 `UTSJSONObject.hasKey`（H5 不可用）导致已保存风格无法恢复 | 改用直接属性访问，全平台一致恢复 |
| 空值判断污染 | `getStorageSync` 缺键返回 `''`，`loadBoolean` 会误把 `''` 当 `true` | store 缺键返回 `null`，避免隐式误判 |
| storeKey 无校验 | 任意非法字符可注入存储键 | storeKey 仅允许 `[A-Za-z0-9_-]`，非法/重复实例创建无效并告警 |

## 行为差异

- 持久化存储键命名空间变化，旧版（`sinle_ui_store_lib_*`）持久化数据不会被新版自动读取；框架配置类状态由 `state.uts` 提供**一次性旧键迁移**。
- 过期与持久化判断为惰性（访问时清理），与旧版一致，无定时器开销。
- 持久化复杂 `type` 对象回读仍为 `UTSJSONObject`，需自行转换（与旧版一致，属 storage API 固有行为）。

## 迁移建议

- 原使用 `$snui.store.get / set / delete` 的代码改为 `import { store } from '@/uni_modules/sinle-ui'` 后直接调用（`$snui.store` 已移除），方法签名兼容，仅注意持久化键命名空间变化导致的旧数据不可见。
- 若使用过 `storeKeys` 之外的旧版持久化键名，需手动迁移一次数据。
- 框架内部（主题 / 风格 / 灰模、dialog 弹窗配置）已统一使用 `frameStore` 或基于 `StoreLib` 的实例管理，无需业务介入。