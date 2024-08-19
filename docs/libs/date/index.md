# Date 日期库

基于 [陌上华年](https://ext.dcloud.net.cn/publisher?id=242774) 大佬的开源组件 [`lime-dayuts`](https://ext.dcloud.net.cn/plugin?name=lime-dayuts) 实现的一个轻量级日期处理库，几乎和 [Day.js](https://day.js.org/zh-CN/) 保持一样的API。部分方法有改动。

配置方法如下：

```typescript
import { $snui } from '@/uni_modules/sinle-ui'
const dateLib = $snui.libs.date
```

接下来，本文档均以 `dateLib` 代指 `$snui.libs.date`。