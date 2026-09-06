# 错误处理机制

SinleUI 的错误处理完全遵循 [uni 错误规范](https://doc.dcloud.net.cn/uni-app-x/err-spec.html)，统一使用 `UniError` 对象。框架全局 API（`snu.showToast` 等）失败时通过 `fail` 回调返回 `UniError` 实例；主题、风格等设置异常时则输出警告日志。

`UniError` / `SourceError` / `UniAggregateError` 为 uni-app x 运行时内置全局对象，无需导入，直接构造使用：

- `UniError`：统一错误信息，包含 `errSubject` / `errCode` / `errMsg` / `cause` / `data`
- `SourceError`：源错误（如底层 SDK、系统调用、uni API 的原始错误），用作 `UniError.cause`
- `UniAggregateError`：多个 `SourceError` 的聚合，仅存在多个源错误时使用

```typescript
// 构造一个 UniError
const err = new UniError('sinle-ui::component::sn-avatar', 9010011, '参数不合法')
err.cause = new SourceError('底层错误信息')
```

## UniError

### 构造

```typescript
new UniError(errSubject: string, errCode: number, errMsg: string)
```

### 属性

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| errSubject | String | 错误主题（模块）名称。存在多级模块时使用 `::` 分割，即 `模块名称::二级模块名称`。如 sinle-ui 的组件 `sn-avatar` → `'sinle-ui::component::sn-avatar'`；`snu.showToast` → `'sinle-ui::api::utils::showToast'` |
| errCode | Number | 统一错误码，通常 `0` 表示成功。含义见[错误码对照表](/api/error/standard) |
| errMsg | String | 统一错误描述信息，准确描述引起错误的原因 |
| data | Object \| null | 可选，错误时返回的数据 |
| cause | SourceError \| UniAggregateError \| null | 可选，源错误信息。只有一个源错误时为 `SourceError`，多个时为 `UniAggregateError`（访问 `cause.errors` 获取数组） |

## 抛出与降级约定

- 非中断提示、降级、失败回调记录一律使用 `log` / `info` / `debug`；异步失败通过 `fail` 回调返回 `UniError` 实例，插件内部不随意 `throw`。
- 真正的编程性错误（参数非法等）经 sinle-logger 的 `warn(err)` / `error(err)` 输出日志后**抛出**所传入的 `UniError`。
- SinleUI 相关插件（sinle-ui、sinle-api、sn-e-toast、sn-perm-listener 等）统一接入该机制，控制台信息只经 sinle-logger 输出，禁止直接 `console`。