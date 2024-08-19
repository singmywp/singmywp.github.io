# 快速上手

本节将介绍如何在项目中使用 SinleUI。

## 使用方法

1. 首先，请[安装SinleUI](../get-started/setup.md)。

2. 在项目根目录下 `App.uvue` 中导入 `CSS` 文件。

   ```vue
   <style lang="scss">
   	@import "@/uni_modules/sinle-ui/static/styles/fonts.scss";
   </style>
   ```
   
3. 组件符合 [easycom](https://uniapp.dcloud.net.cn/collocation/pages?id=easycom) 规范，无需 import，直接在项目中使用。

4. SinleUI API 则需要 import 相应对象后使用。

   ```typescript
   import { $snui } from '@/uni_modules/sinle-ui'
   ```

::: warning 注意
不可直接从插件内部任何 `uts` 文件导入对象或类型，所有对象/类型均从 `@/uni_modules/sinle-ui` 导入

:::
