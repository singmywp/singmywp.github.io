# 框架设计

本页详细介绍 SinleUI 的整体架构、核心机制与设计理念，帮助您理解框架如何工作、为何这样设计。



## 概述

SinleUI 是一个面向 uni-app x 蒸汽模式（vapor）的轻量级移动端 UI 框架，以 `uni_modules` 形式分发，目标平台为 Android（Kotlin）与 Web（JavaScript），未来计划适配鸿蒙、iOS 与小程序。

框架坚持以下设计原则：

- **简洁轻量**：核心无运行时依赖，按需打包
- **跨平台一致**：通过条件编译与平台目录（`utssdk/app-android` 等）隔离平台差异
- **主题化驱动**：风格（Style）与主题（Theme）双层体系，全局一处修改、处处生效
- **组合式 API**：向组件与开发者提供 `hooks` 复用框架能力
- **性能颜值平衡**：追求更优秀的 UI 设计，一切设计都在考虑性能的情况下尽可能优化 UI 设计。

---

## 目录结构

`uni_modules/sinle-ui/` 插件目录结构如下：

| 目录/文件 | 说明 |
| :--- | :--- |
| `components/` | 全部 `sn-*` 组件，每个组件一个独立目录（如 `sn-button/sn-button.uvue`） |
| `core/` | 框架核心模块 |
| `core/snui.uts` | `Snui` 单例类定义，`$snui` 全局实例 |
| `core/state.uts` | 全局响应式状态（主题、风格）、持久化与主题监听 |
| `core/types/index.uts` | 全部核心类型定义与导出（SnColorBase、SnStyle 等） |
| `core/theme/` | 内置风格文件（`default-style`、`ink-style`、`chinese-style` 等 6 套）与风格注册中心 |
| `core/utils/` | 工具库分组静态类（Random、Basic、Easing、ObjectUtils、System、Resolve、Sort、Text、Ui、Perm、Verify） |
| `core/utils/index.uts` | `snu` 聚合门面 |
| `core/color/` | 颜色库（`ColorLib`、`TinyColor`） |
| `core/date/` | 日期库（`DateLib`、`Dayuts`、国际化） |
| `core/private/` | 内部钩子与机制（`use-theme`、`use-style`、`use-factors`、`use-hover`、`use-external-style`、`use-backtop`、`logger`、`dialog-store`） |
| `pages/popups/` | 全局弹窗页面（showModal、showActionsheet、showLoading） |
| `pages_init.json` | 注册插件内置弹窗页面 |
| `index.uts` | 插件入口，统一导出全部公开 API |



---

## 风格系统（Style）

一个应用可同时注册多套风格（皮肤），如现代、简约、古风、梦幻、科幻等。每套风格是一个 `SnStyle` 对象，包含：颜色集（亮/暗两套）、导航栏高度、亮/暗页面背景色，以及五个乘数与三个基础动画时长。

- **注册与切换**：`core/theme/index.uts` 在框架加载时执行 `initStyles()` 注册内置风格；`$snui.currentStyleId` 切换风格（`switchStyle` 会深拷贝目标风格再替换当前风格，避免互相污染）。

- **内置风格**：`default`（默认）、`ink`（水墨）、`chinese`（国风）、`new-year`（新年）、`morandi-green`（莫兰迪绿）、`orange`（活力橙）共 6 套。

- **持久化**：`switchStyle` 与各 setter 修改后调用 `persistCurrentStyle()`，将当前完整风格写入 storage（key：`sinleui_current_style`），风格 id 单独存储（key：`sinleui_current_style_id`）。应用重启自动恢复。

- **运行时微调**：开发者可直接修改 `$snui` 上的乘数与颜色等属性，改的是当前风格对象，随后自动持久化，覆盖预置值。

  #### SnStyle

  一套完整风格（皮肤）对象，即内置风格文件导出的结构。

  | 字段           | 类型                          | 描述                        |
  | :------------- | :---------------------------- | :-------------------------- |
  | id             | String                        | 风格唯一 id，如 `'default'` |
  | colorBases     | [SnColorBases](#sncolorbases) | 亮/暗两套颜色集             |
  | topbarHeight   | String                        | 导航栏高度（不含状态栏）    |
  | lightBgColor   | String                        | 亮色模式页面默认背景色      |
  | darkBgColor    | String                        | 暗色模式页面默认背景色      |
  | marginFactor   | Number                        | 外间距乘数                  |
  | paddingFactor  | Number                        | 内间距乘数                  |
  | radiusFactor   | Number                        | 圆角乘数                    |
  | fontsizeFactor | Number                        | 字号乘数                    |
  | aniTimeFactor  | Number                        | 动画时长乘数                |
  | aniTimeShort   | Number                        | 基础短动画时长（ms）        |
  | aniTimeNormal  | Number                        | 基础标准动画时长（ms）      |
  | aniTimeLong    | Number                        | 基础长动画时长（ms）        |

---

## 主题系统（Theme）

主题指亮色（`light`）与暗色（`dark`）两种颜色模式。一套风格的 `colorBases` 包含两套 `SnColorBase` 颜色集。

- **切换**：`$snui.theme = 'light' | 'dark'`；`autoTheme`（默认开启）跟随系统外观，内部监听 `uni.onOsThemeChange`（App）/ `window.matchMedia`（Web）自动切换。
- **状态栏同步**：切换与初始化时会调用 `syncStatusBarColor()` 同步原生状态栏文字/背景色。
- **App 端原生主题**：通过 `uni.setAppTheme` 同步系统暗黑模式，保证 `window` 等系统 UI 与页面一致。

`core/state.uts` 中导出的响应式状态构成了框架状态的根基：`currentStyleId`、`currentStyle`、`currentTheme`、`autoTheme`，以及由 `currentStyle × currentTheme` 计算出的 `colors`（当前颜色集）。

---

## 颜色系统

`SnColorBase` 定义了完整的语义化颜色集，分为**功能色**与**特殊色**两类（字段明细见[核心类型](/api/types/api#sncolorbase)）。

功能色共 5 种语义：`primary`（主色）、`info`（信息）、`success`（成功）、`error`（错误）、`warning`（警告）。每种功能色在亮/暗模式下各有 3 个深浅程度（原色 / `Light` 更浅 / `Dark` 更深），每个程度配套 `Active`（激活态）与 `Text`（该色背景上的文字前景色）。

> 注意：后缀带 `Dark` 的是比原色更深的颜色，并非暗黑主题专属；带 `Light` 的是更浅的颜色。暗黑主题与亮色主题各自拥有独立的 `SnColorBase` 对象。

- **页面注入**：`sn-page` 在 `onLoad` 时把当前 `colors` 注入为 CSS 变量（`--sn-*` 命名），监听风格/主题变化做**差量更新**（仅更新变化的颜色变量）。页面内所有组件与弹出层（必须位于 `sn-page` 根节点下）通过 `var(--sn-xxx)` 引用即随主题自动切换。
- **`$` 简化语法**：颜色类 props 统一经 [useResolve](/api/hooks/use-resolve) 钩子的 `resolveColor` 处理，`$primaryTextDark` 自动转换为 `var(--sn-primary-text-dark)`，非 `$` 开头的值原样返回。



## 大小乘数与动画时长

框架通过五个全局乘数控制 UI 的密度与动效节奏，均可在 `$snui` 上读写并持久化：

| 乘数属性 | 作用 |
| :--- | :--- |
| fontsizeFactor | 字号乘数 |
| radiusFactor | 圆角乘数 |
| marginFactor | 外间距乘数 |
| paddingFactor | 内间距乘数 |
| aniTimeFactor | 动画时长乘数 |

还提供了三个常用动画时长，以保持应用全局动画的一致性： `$snui.aniTimeShort(150ms)` / `$snui.aniTimeNormal(250ms)` / `$snui.aniTimeLong(400ms)`。这些常用动画时长会自动适配 `aniTimeFactor` 机制，无需您自行处理。并提供 `uts` 和 `css` 两种使用方法，`CSS` 变量由 `sn-page` 以 `--ani-time-short/normal/long` CSS 变量注入页面。

#### **`$` 动态尺寸语法**

尺寸类 props 统一交给 [useResolve](/api/hooks/use-resolve) 钩子的 `resolveSize` / `resolveSizeNum` 处理——`16px`（无 `$`）返回原始值；`:16`（number）返回原始值；`"$16px"`（带 `$`）提取数值乘以对应乘数。解析类型由 `SnResolveType` 指定（`font` / `radius` / `margin` / `padding` / `aniTime`）。

---

## 工具库三层架构

1. **分组静态类**（`core/utils/*.uts`）：按功能拆分为 Random、Basic、Easing、ObjectUtils、System、Resolve、Sort、Text、Ui、Perm、Verify 共 11 组。
2. **聚合门面**（`core/utils/index.uts`）：`snu` 静态类，每个方法一行转发。
3. **插件出口**（`index.uts`）：`export { snu }`。

用户侧统一使用 `snu.xxx`；组件内部为减小体积直接导入分组类。平台相关方法（系统、权限等）经 `sinle-api` 插件按平台目录（`utssdk/app-android`）分别实现，无需条件编译。

---

## 钩子

框架向组件与开发者暴露 4 个核心 hooks（`useTheme` / `useStyle` / `useFactors` / `useHover`），详见[钩子](/api/hooks/index)。组件的主题、风格、乘数、点击态、解析等能力均经由 hooks 获取，保证响应式（状态变化自动触发重渲染）。对外导出的 hooks 有 `useTheme` / `useStyle` / `useFactors` / `useGrayMode` / `useHover` / `useResolve`；另有内部复用 hooks：`useExternalStyle`（外部样式转字符串）、`useBacktop`（滚动容器与返回顶部联动）。

---

## 全局弹窗机制

`snu.showToast` / `snu.showModal` / `snu.showActionsheet` / `snu.showLoading` 实现"任意位置调用、无需放置组件"的全局弹窗：

1. 框架内置 3 个弹窗页面（showModal、showActionsheet、showLoading），经 `pages_init.json` 注册；
2. `core/private/dialog-store.uts` 提供一个键值存储，保存本次弹窗的配置对象；
3. `snu` 的 UI 方法把配置写入 dialog-store，并通过 `uni.openDialogPage` 打开对应弹窗页；弹窗页 `onLoad` 时按 id 取回配置并展示，交互完成后触发 `success/fail/complete` 回调并关闭页面。

`showToast` 与 `highlight` 类轻提示由组件实现而非页面，其中 `showToast` 同样可在任意位置调用。

---

## 日志与错误

- **日志**：框架内部统一使用 `core/private/logger.uts`（转发自 `sinle-logger` 插件）输出 `[Snui]` 前缀日志，受 `$snui.logging` 控制开关。组件禁止直接使用 `console`。
- **错误**：`UniError` 为框架统一错误类型（遵循 uni 错误规范），全局 API 失败时通过 `fail` 回调返回，详见[错误与日志](/api/error/error)。