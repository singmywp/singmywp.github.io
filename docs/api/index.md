# API

SinleUI 暴露出可操作的 API 对象 `$snui`，提供了丰富的 API 配置及方法。

>[!WARNING] 注意
>
>不可直接从插件内部任何 `uts` 文件导入对象或类型，所有对象及大部分类型均从 `@/uni_modules/sinle-ui` 导入，部分特殊类型请参考[类型](/api/types/index)或按照文档说明路径导入。

```typescript
import { $snui } from '@/uni_modules/sinle-ui'
```

---

# $snui

### 属性

| 名称    | 类型                                      | 只读 | 描述                                          |
| :------ | :---------------------------------------- | ---- | :-------------------------------------------- |
| colors  | [SnColorBase](/api/types/api#sncolorbase) | 是   | 提供当前主题和颜色模式下的颜色对象            |
| utils   | [UtilsLib](/libs/utils/index)             | 是   | Utils 工具库                                  |
| store   | [StoreLib](/libs/store/index)             | 是   | Store 状态管理                                |
| libs    | Core                                      | 是   | 其他核心库，[详见](/libs/utils/index)         |
| configs | [Configs](/api/config/index#configs)      | 否   | SinleUI 的全局配置，[详见](/api/config/index) |

### 方法

| 名称        | 参数                                                         | 返回值 | 描述                                                         |
| ----------- | :----------------------------------------------------------- | :----- | :----------------------------------------------------------- |
| setColor    | (theme: string, key: string, value: string)                  | -      | 设置指定主题中的指定颜色变量的值。`theme` 可选值：`light` \| `dark`。 |
| setColorSet | (theme: string, colorSet: [SnColorBase](/api/types/api#sncolorbase)) | -      | 设置指定主题中的所有颜色变量的集合，一键修改项目配色。`theme` 可选值：`light` \|`dark`。 |

