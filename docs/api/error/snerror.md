# SnError

### 构造函数

| 名称       | 类型        | 必备 | 默认值                       | 描述                |
| :--------- | :---------- | :--- | :--------------------------- | :------------------ |
| moduleName | String      | 是   | -                            | 发生错误的模块名称  |
| apiname    | String      | 是   | -                            | 发生错误的 API 名称 |
| errCode    | Number | 是   | -                            | 错误代码，用于标识具体的错误类型，[详见](./standard)            |
| cause      | Error \| Null                | 否   | -                       | 可选的错误原因，用于错误追踪 |

### 属性

| 名称       | 类型          | 描述                                                 |
| :--------- | :------------ | :--------------------------------------------------- |
| errSubject | String        | 错误主题，格式为 `$moduleName-$apiname`              |
| errCode    | Number   | 错误代码，用于标识具体的错误类型，[详见](./standard) |
| errMsg     | String        | 根据错误代码获取的错误消息，如果未找到则为空字符串   |
| cause      | Error \| Null | 可选的错误原因，如果提供，则用于错误追踪             |

### 示例

```typescript
// 创建一个错误实例，指定模块和 API 名称，以及错误代码
const error = new SnError('utils', 'chooseMedia', 1);
```

---

# SnNativeError

此类与 `SnError` 除名称外，其余完全一致。单独设置此类型是由于 UTS 插件间不支持类型相互引用，因此无法 `sn-native` 内的方法直接使用 `sinle-ui` 插件导出的类型 `SnError`。
