# 类型

SinleUI 的全部类型（含扩展组件类型）均统一从 `@/uni_modules/sinle-ui` 导出，使用时从插件入口导入即可，例如：

```typescript
import { SnColorBase, SnStyle, SnDataItem } from '@/uni_modules/sinle-ui'
```

类型分为两类展示：

- [API 类型](/api/types/api)：组件与 API 公用、或仅 API 使用的框架级类型（颜色集、风格、手势事件、全局弹窗配置、权限、解析类型等）。
- [组件类型](/api/types/component)：组件专属类型（如 `SnCalendarValue`、`SnTreeData`、`SnFormItemRule`、`AgreementLinkDetail` 等）。

`UniError` / `SourceError` 等错误对象为 uni-app x 运行时内置全局对象，无需导入，详见[错误与日志](/api/error/error)。

本页与[组件类型](/api/types/component)覆盖框架内**全部**类型定义：既包括供开发者使用的公开类型，也包括仅框架内部使用的类型（如分组组件的 group config、子组件内部注入与回传的类型）。内部类型同样完整列出字段与类型，并在各自章节以「内部使用」标记说明其用途，便于理解组件行为与排查问题——但业务侧**不应**依赖这些内部类型，其字段可能随版本调整。
