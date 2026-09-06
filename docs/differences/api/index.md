# API 新旧版本差异

> 旧版参考：`E:\Projects\singmywp.github.io\docs\api\index.md`（SinleUI 1.x，最高版本 1.1.6）
>
> 新版参考：`E:\temp\docs\api\index.md`（SinleUI 2.0 beta）

## 总览

SinleUI 2.0 对框架 API 做了**结构性重构**：旧版以 `$snui` 挂载 `configs / utils / store / libs` 四大子对象；新版改为**扁平化属性 + 独立命名导出**。核心变化：

- `$snui.utils` → 独立导出 `snu`（工具库门面）
- `$snui.libs.color` / `$snui.libs.date` → 独立导出 `ColorLib/TinyColor` 与 `DateLib/Dayuts/dayuts/isDayuts/dayutsIntl`
- `$snui.store` → **独立导出 `store` / `frameStore` / `StoreLib`**（不再挂载 `$snui`，与 `snu` / `ColorLib` / `DateLib` 一致）
- `$snui.configs`（App/Page/Font/Radius/AniTime/zIndex 六大子配置）→ **移除**，改为 `$snui` 上的扁平属性直接读写（theme、autoTheme、currentStyleId、topbarHeight 等），并新增多风格切换与乘数体系
- 入口导出：旧版根 `index.uts` 几乎只导出 `$snui` 与少量类型；新版导出 18 个值（对象/hooks/工具/常量/函数）+ 大量类型

## $snui 差异明细

| 旧版 | 新版 | 说明 |
| :--- | :--- | :--- |
| `colors`（只读） | `colors`（只读） | 保留，语义不变 |
| `utils` | 移除 | 改为独立导出 `snu` |
| `store` | 独立导出 | Store 库重建为独立导出（`store` / `frameStore` / `StoreLib`），不再挂载 `$snui` |
| `libs` | 移除 | 颜色/日期库改为独立导出 |
| `configs` | 移除 | 见下方配置体系差异 |
| - | `theme`（可写） | 新增，切换亮/暗主题，自动关闭 autoTheme |
| - | `autoTheme`（可写） | 新增，跟随系统外观 |
| - | `currentStyleId`（可写） | 新增，多风格切换 |
| - | `topbarHeight` / `lightBgColor` / `darkBgColor`（可写） | 新增，旧 PageConfig 扁平化 |
| - | `logging`（可写） | 新增，框架日志开关 |
| - | `marginFactor` / `paddingFactor` / `radiusFactor` / `fontsizeFactor` / `aniTimeFactor`（可写） | 新增，五尺寸/动画乘数体系 |
| - | `aniTimeShort` / `aniTimeNormal` / `aniTimeLong`（只读） | 新增，基础时长 × 加速乘数的计算结果 |
| - | `baseAniTimeShort` / `baseAniTimeNormal` / `baseAniTimeLong`（可写） | 新增，三个基础动画时长（150/250/400ms） |
| `setColorSet(theme, colorSet)` | `setColorBase(theme, colorBase)` | **更名**，功能一致（整体替换某主题颜色集） |
| - | `syncSystemTheme()` | 新增，autoTheme 开启时应用系统主题，一般不需要开发者调用，框架内部会自动管理 |

## 导出清单变化

旧版插件入口仅导出 `$snui`、及各种类型。

新版 `@/uni_modules/sinle-ui` 直接导出：

- **对象**：`$snui`、`snu`
- **核心库**：`ColorLib`、`TinyColor`、`DateLib`、`Dayuts`、`dayuts`、`isDayuts`、`dayutsIntl`
- **钩子**：`useTheme`、`useStyle`、`useFactors`、`useHover`
- **全局函数**：`syncStatusBarColor`、`createCalendarDayPaint`、`createCalendarDayContent`
- **常量**：`SN_DEFAULT_STYLE_ID`（`'default'`）
- **错误**：`UniError`（uni-app x 运行时内置，遵循 uni 错误规范；日志与错误码查询经 `sinle-logger`）
- **类型**：`SnColorBase`、`SnStyle`、`SnThemeMode`、`SnFunctionalColor`、`UseHoverOptions`、全部手势事件类型、全局弹窗配置类型等 90+ 个

钩子体系为 2.0 全新引入：`useTheme` / `useStyle` / `useFactors` / `useHover` 让组件与开发者以组合式方式响应式获取框架状态，详见 [钩子](/api/hooks/index)。

相关差异：- [配置体系差异](./config.md) - [类型差异](./types.md) - [错误体系差异](./error.md)