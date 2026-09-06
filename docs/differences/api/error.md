# 错误与日志体系差异

> 旧版参考：旧 `api/error/snerror.md`、`api/error/standard.md`
>
> 新版参考：`E:\temp\docs\api\error.md`

## 错误类型迁移至 UniError（破坏性变更）

旧版错误类型为 `SnError`（自定义类），2.0 起移除，统一遵循 [uni 错误规范](https://doc.dcloud.net.cn/uni-app-x/err-spec.html) 使用运行时内置 `UniError` 对象。

| 项目 | 旧版（1.x） | 新版（2.0 beta） |
| :--- | :--- | :--- |
| 错误类型 | `SnError`（自定义类） | `UniError`（uni-app x 运行时内置） |
| 构造 | `new SnError(moduleName, apiname, errCode, cause?)` | `new UniError(errSubject, errCode, errMsg)` |
| 属性 | `errSubject`（`moduleName-apiname` 拼接） / `errMsg` / `cause` | `errSubject` / `errCode` / `errMsg` / `cause` / `data` |
| errSubject 规则 | 单段拼接（如 `'ui-showToast'`） | 多级模块以 `::` 分割（如 `'sinle-ui::component::sn-avatar'`、`'sinle-ui::api::utils::showToast'`） |
| 源错误 | `cause` 为 `Error` | `cause` 为 `SourceError`（多个时为 `UniAggregateError`） |
| 导入来源 | `@/uni_modules/sinle-ui`（重导出） | 无需导入（运行时全局对象） |

> **兼容性影响**：所有依赖 `SnError` 类型、构造参数与 `errSubject` 拼接规则的代码全部失效，需迁移为 `UniError` 构造与 `::` 分割的 errSubject。

## 插件收敛至 sinle-logger（破坏性变更）

旧版错误与日志由 `sinle-error` 插件提供，2.0 起收敛为 `sinle-logger` 插件统一管理：

| 项目 | 旧版（1.x） | 新版（2.0 beta） |
| :--- | :--- | :--- |
| 日志开关 | `$snui.configs` 无专门日志开关 | `$snui.logging`（默认开启），`setLogging` / `getLogging` |
| 日志方法 | `log / info / debug / warn / error`（`[Snui]` 前缀） | 同左（经 `sinle-logger` 提供，`warn` / `error` 接收 `UniError` 并抛出） |
| 错误码查询 | `getErrMsg` 语义错误码表 | 保留（迁至 `sinle-logger`） |
| 使用约束 | 组件内可随意 | **禁止组件内直接 `console`**，一律经框架日志接口（`core/private/logger.uts`） |

## 错误码标准

错误码对照表（成功、撤销、权限、文件、平台、组件参数、Store key 重复、扫描等场景）仍保留，见[错误码对照表](/api/error/standard)。2.0 起各模块失败时通过 `UniError.errMsg` 直接提供错误信息，亦可经 `sinle-logger` 的 `getErrMsg(errCode)` 查询。

## 对应关系

- 旧 `snu.showToasty` → 新版 `snu.showSysToast`（调用系统原生 Toast）
- 全局弹窗（`showToast/showModal/showActionsheet/showLoading`）失败回调统一返回 `UniError`