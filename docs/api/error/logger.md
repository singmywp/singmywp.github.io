# 日志管理机制

框架（及 SinleUI 相关插件）的日志统一经 `sinle-logger` 插件输出，带 `[Snui]` 前缀，可通过全局开关控制。组件内部禁止直接使用 `console`，控制台信息只经 `sinle-logger` 的 logger 统一管理。

## 日志方法

从 `@/uni_modules/sinle-logger` 导入：

```typescript
import { log, info, debug, warn, error } from '@/uni_modules/sinle-logger'
```

| 名称 | 参数 | 描述 |
| :--- | :--- | :--- |
| log | (message: string) => void | 普通日志（`console.log`） |
| info | (message: string) => void | 信息日志（`console.info`） |
| debug | (message: string) => void | 调试日志（`console.debug`） |
| warn | (err: [UniError](/api/error/error#unierror)) => void | 警告：输出警告日志后**抛出**所传入的 `UniError`（抛出型 API） |
| error | (err: [UniError](/api/error/error#unierror)) => void | 错误：输出错误日志后**抛出**所传入的 `UniError`（抛出型 API） |

> [!WARNING] 注意
>
> `warn` / `error` 是抛出型 API，调用会中断执行流程，仅用于真正的编程性错误（参数非法等）。非中断提示、降级、失败回调记录一律使用 `log` / `info` / `debug`；异步失败通过 `fail` 回调返回 `UniError`。

## 错误码查询

| 名称 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| getErrMsg | (errCode: number) | string | 按[错误码对照表](/api/error/standard)查询错误信息，未登记的错误码返回空字符串 |

## 日志开关

| 名称 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| setLogging | (val: boolean) => void | - | 开关相关插件日志输出 |
| getLogging | () | boolean | 查询当前是否输出日志 |

框架侧也可通过 `$snui.logging` 读写同一开关：

```typescript
import { $snui } from '@/uni_modules/sinle-ui'

$snui.logging = true
```