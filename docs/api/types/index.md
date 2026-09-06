# 类型

SinleUI 的全部类型（含扩展组件类型）均统一从 `@/uni_modules/sinle-ui` 导出，使用时从插件入口导入即可，例如：

```typescript
import { SnColorBase, SnStyle, SnDataItem } from '@/uni_modules/sinle-ui'
```

类型分为两类展示：

- [API 类型](/api/types/api)：组件与 API 公用、或仅 API 使用的框架级类型（颜色集、风格、手势事件、全局弹窗配置、权限、解析类型等）。
- [组件类型](/api/types/component)：组件专属类型（如 `SnCalendarValue`、`SnTreeData`、`SnFormItemRule`、`AgreementLinkDetail` 等）。

`UniError` / `SourceError` 等错误对象为 uni-app x 运行时内置全局对象，无需导入，详见[错误与日志](/api/error/error)。

少数仅框架内部使用的配置类型（如分组组件的 group config）不在公开文档范围。
