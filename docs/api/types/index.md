# 类型

SinleUI 框架本体（不含扩展组件）的**所有类型**均已在 `@/uni_modules/sinle-ui/index.uts` 导出。
使用时务必从 `@/uni_modules/sinle-ui` 导入，例如：

```typescript
import { SnTimerTime } from '@/uni_modules/sinle-ui'
```

扩展组件内部的类型，请从组件目录下的 `interface.uts` 导入。