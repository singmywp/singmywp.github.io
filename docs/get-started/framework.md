# 框架设计

本页详细介绍 SinleUI 的整体架构、核心机制与设计理念，帮助您理解框架如何工作、为何这样设计。



## 概述

SinleUI 是一个面向 uni-app x 蒸汽模式（vapor）的轻量级移动端 UI 框架，以 `uni_modules` 形式分发，目标平台为 Android（Kotlin）、iOS（Swift）、HarmonyOS 与 Web（JavaScript）。

框架坚持以下设计原则：

- **简洁轻量**：核心无运行时依赖，按需打包
- **跨平台一致**：通过条件编译与平台目录（`utssdk/app-android`、`utssdk/app-ios` 等）隔离平台差异
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
| `core/snui.ts` | `Snui` 单例类定义，`$snui` 全局实例 |
| `core/state.ts` | 全局响应式状态（主题、风格）、持久化与主题监听 |
| `core/types/index.ts` | 全部核心类型定义与导出（SnColorBase、SnStyle 等） |
| `core/theme/` | 内置风格文件（`default-style`、`ink-style`、`chinese-style` 等 6 套）与风格注册中心 |
| `core/utils/` | 工具库分组静态类（Random、Basic、Easing、ObjectUtils、System、Sort、Text、Ui、Perm、Verify） |
| `core/utils/index.ts` | `snu` 聚合门面 |
| `core/color/` | 颜色库（`ColorLib`、`TinyColor`） |
| `core/date/` | 日期库（`DateLib`、`Dayuts`、国际化） |
| `core/private/` | 内部钩子与机制（`use-theme`、`use-style`、`use-factors`、`use-hover`、`use-external-style`、`use-backtop`、`logger`、`dialog-store`） |
| `pages/popups/` | 全局弹窗页面（showModal、showActionsheet、showLoading） |
| `pages_init.json` | 注册插件内置弹窗页面 |
| `index.ts` | 插件入口，统一导出全部公开 API |



---

## 风格系统（Style）

一个应用可同时注册多套风格（皮肤），如现代、简约、古风、梦幻、科幻等。每套风格是一个 `SnStyle` 对象，包含：颜色集（亮/暗两套）、导航栏高度、亮/暗页面背景色，以及五个乘数与三个基础动画时长。

- **注册与切换**：`core/theme/index.ts` 在框架加载时执行 `initStyles()` 注册内置风格；`$snui.currentStyleId` 切换风格（`switchStyle` 会深拷贝目标风格再替换当前风格，避免互相污染）。

- **内置风格**：`default`（默认）、`ink`（水墨）、`chinese`（国风）、`new-year`（新年）、`morandi-green`（莫兰迪绿）、`orange`（活力橙）共 6 套。

- **持久化**：`switchStyle` 与各 setter 修改后调用 `persistCurrentStyle()`，将当前完整风格写入 storage（key：`sinleui_current_style`），风格 id 单独存储（key：`sinleui_current_style_id`）。应用重启自动恢复。

- **运行时微调**：开发者可直接修改 `$snui` 上的乘数与颜色等属性，改的是当前风格对象，随后自动持久化，覆盖预置值。

  #### SnStyle

  一套完整风格（皮肤）对象，即内置风格文件导出的结构。

  | 字段           | 类型                          | 描述                        |
  | :------------- | :---------------------------- | :-------------------------- |
  | id             | String                        | 风格唯一 id，如 `'default'` |
  | colorBases     | [SnColorBases](#sncolorbases) | 亮/暗两套颜色集             |
  | topbarHeight   | String                        | 导航栏高度（不含状态栏），默认 `48px` |
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

- **切换**：`$snui.theme = 'light' | 'dark'`；`autoTheme`（默认开启）跟随系统外观。两者都经 `uni.setAppTheme` 驱动框架应用主题，框架再回写 `currentTheme`（App 端 `uni.onAppThemeChange`、Web 端 `window.matchMedia`）。App 端建议在 `manifest.json` 配置 `app.defaultAppTheme: "auto"`，让冷启动首帧即与系统一致。
- **状态栏同步**：切换与初始化时会调用 `syncStatusBarColor()` 同步原生状态栏文字/背景色。
- **App 端原生主题**：通过 `uni.setAppTheme` 同步系统暗黑模式，保证 `window` 等系统 UI 与页面一致。

`core/state.ts` 中导出的响应式状态构成了框架状态的根基：`currentStyleId`、`currentStyle`、`currentTheme`、`autoTheme`、`cssPalette`（颜色变量是否由媒体查询提供），以及由 `currentStyle × currentTheme` 计算出的 `colors`（当前颜色集）。

---

## 颜色系统

`SnColorBase` 定义了完整的语义化颜色集，分为**功能色**与**特殊色**两类（字段明细见[核心类型](/api/types/api#sncolorbase)）。

功能色共 5 种语义：`primary`（主色）、`info`（信息）、`success`（成功）、`error`（错误）、`warning`（警告）。每种功能色在亮/暗模式下各有 3 个深浅程度（原色 / `Light` 更浅 / `Dark` 更深），每个程度配套 `Active`（激活态）与 `Text`（该色背景上的文字前景色）。

> 注意：后缀带 `Dark` 的是比原色更深的颜色，并非暗黑主题专属；带 `Light` 的是更浅的颜色。暗黑主题与亮色主题各自拥有独立的 `SnColorBase` 对象。

- **颜色变量（媒体查询驱动）**：`sn-page` 的样式里用 `@media (prefers-color-scheme: light)` / `@media (prefers-color-scheme: dark)` 声明内置默认风格的全部 `--sn-*` 颜色变量，主题变化由框架重新匹配媒体查询完成，脚本不参与上色（需 HBuilderX 5.25+ 蒸汽模式）。页面内所有组件与弹出层（必须位于 `sn-page` 根节点下）通过 `var(--sn-xxx)` 引用即随主题自动切换；乘数与动画时长变量仍由 `sn-page` 差量写入。
- **自定义配色的回落**：调用 `$snui.setColor` / `setColorBase` 或切换到非默认内置风格后，颜色改由脚本写入内联变量（覆盖媒体查询色板），切换主题时脚本会按新主题重写。
- **`$` 简化语法**：颜色类 props 统一经 [useResolve](/api/hooks/use-resolve) 钩子的 `resolveColor` 处理，`$primaryTextDark` 自动转换为 `var(--sn-primary-text-dark)`，非 `$` 开头的值原样返回。

全部 `--sn-*` 颜色变量的命名规则、完整清单与用法示例，以及与它们等价的 JS 读写方式，见 [CSS 变量](/get-started/css-variables)。



## 大小乘数与动画时长

框架通过五个全局乘数控制 UI 的密度与动效节奏，均可在 `$snui` 上读写并持久化：

| 乘数属性 | 作用 |
| :--- | :--- |
| fontsizeFactor | 字号乘数 |
| radiusFactor | 圆角乘数 |
| marginFactor | 外间距乘数 |
| paddingFactor | 内间距乘数 |
| aniTimeFactor | 动画时长乘数 |

还提供了三个常用动画时长，以保持应用全局动画的一致性： `$snui.aniTimeShort(150ms)` / `$snui.aniTimeNormal(250ms)` / `$snui.aniTimeLong(400ms)`。这些常用动画时长会自动适配 `aniTimeFactor` 机制，无需您自行处理。脚本侧直接读 `$snui` 属性，样式侧引用 `sn-page` 注入的 `--ani-time-short` / `--ani-time-normal` / `--ani-time-long`，两套写法的对应关系见 [CSS 变量 · 动画时长变量](/get-started/css-variables#动画时长变量)。

### 乘数的三种用法

**① 组件 props 上的 `$` 语法**（页面开发最常用）

尺寸类 props 的值写成 `$16` 即跟随对应乘数缩放，写成 `16px` 则固定不变，详见下方 [`$` 动态尺寸语法](#动态尺寸语法)。

**② JS 中直接读写乘数**

五个乘数都可通过 `$snui` 直接读取或修改，修改后会持久化到当前风格：

```typescript
$snui.paddingFactor = 1.2
const padding = 12 * $snui.paddingFactor
const radius = 8 * $snui.radiusFactor
```

**③ CSS 中的乘数变量**

使用 HBuilderX Alpha 5.31 或更高版本时，`sn-page` 还会注入五个数值 CSS 变量：`--marginFactor`、`--paddingFactor`、`--radiusFactor`、`--fontsizeFactor`、`--aniTimeFactor`，并为每个乘数并列注入一个同值缩写变量：`--mf`、`--pf`、`--rf`、`--ff`、`--af`（缩写与全称是各自独立的字面值，不是 `var()` 引用）。它们适合直接用于 `calc()`，写起来更短：

```scss
.card {
  padding: calc(var(--pf) * 12px);
  border-radius: calc(var(--rf) * 8px);
  font-size: calc(var(--ff) * 14px);
}
```

| 全称变量 | 缩写变量 | 对应乘数 |
| :--- | :--- | :--- |
| `--marginFactor` | `--mf` | 外间距乘数 |
| `--paddingFactor` | `--pf` | 内间距乘数 |
| `--radiusFactor` | `--rf` | 圆角乘数 |
| `--fontsizeFactor` | `--ff` | 字号乘数 |
| `--aniTimeFactor` | `--af` | 动画时长乘数（不可用于 `calc()`） |

CSS 变量的作用域是 `sn-page` 根节点及其后代。乘数变化时，`sn-page` 会差量更新变量；脱离 `sn-page` 的独立组件不会自动获得这些变量。框架内的三个弹窗页（`snu.showModal` / `snu.showActionsheet` / `snu.showLoading`）是 dialogPage，不在任何 `sn-page` 子树内，页面会自行把颜色、动画时长与五个乘数变量一并注入到自己的根节点，因此在这些弹窗的 `customStyle` 中写 `calc(var(--xxxFactor) * Npx)` 同样有效；而 `snu.showToast` 走原生弹层、不涉及 CSS 变量，尺寸只走 `$` 动态值。

三类变量的完整清单（含每个变量的用途与典型写法）与更多示例见 [CSS 变量](/get-started/css-variables)。

#### **`$` 动态尺寸语法**

`$` 是尺寸类 props 的"动态"标记：**带 `$` 的值随对应乘数缩放，不带 `$` 的值按固定值处理、不乘任何乘数**。想要跟随风格与用户调节整体缩放的尺寸（字号、圆角、间距、动画时长）就加 `$`，需要写死的尺寸就不加。不带 `$` 的纯数字字符串会自动补单位（`border-radius="10"` → `10px`，动画时长类补 `ms`），`16px`、`50%` 等已带单位的写法原样输出。

**一、写在组件 props 上**

尺寸类 props 的值直接写成 `$数值` 即可（单位可省略：动画时长为 `ms`，其余为 `px`，也可显式写 `$16px`）：

```vue
<template>
	<sn-page>
		<!-- 带 $：跟随全局乘数缩放 -->
		<sn-text font-size="$16" text="字号随 fontsizeFactor 缩放" />
		<sn-avatar size="$48" text="M" bg-color="$primary" />
		<sn-button text="按钮" radius="$20" />
		<sn-popup ani-time="$normal" />
		<!-- 不带 $：固定尺寸，任何风格、任何乘数下都不变；纯数字自动补 px -->
		<sn-text font-size="16px" text="固定 16px" />
		<sn-button text="固定圆角" radius="20" />
	</sn-page>
</template>
```

每个 prop 用哪个乘数由组件内部指定，各组件属性表会标注该 prop 的 `$` 支持与对应乘数（形如「支持 `$` 前缀按 ✕✕ 乘数缩放」），使用时以属性表标注为准。五类解析类型与乘数的对应关系如下：

| 解析类型 | 对应乘数 | 适用 props 举例 | 写法 → 结果（乘数为 1 时） |
| :--- | :--- | :--- | :--- |
| `font` | fontsizeFactor | 字号类：`fontSize`（sn-text）、`textSize` / `iconSize`（sn-alert） | `font-size="$14"` → `14px` |
| `radius` | radiusFactor | 圆角类：`radius`（sn-button）、`borderRadius` | `radius="$8"` → `8px` |
| `margin` | marginFactor | 外间距类：`margin`（sn-card、sn-view）、`gap`（sn-pagination）、`spacing`（sn-avatar-group） | `margin="$12"` → `12px` |
| `padding` | paddingFactor | 内间距类：`padding`（sn-toast、sn-tooltip）、`size`（sn-avatar） | `padding="$16px $20px"` → `16px 20px` |
| `aniTime` | aniTimeFactor | 动画时长类：`aniTime`（sn-popup）、`hoverTransTime`（sn-button） | `ani-time="$250"` → `250ms` |

动画时长类 props 还接受三个命名值：`$short`、`$normal`、`$long`，分别对应 `$snui.aniTimeShort`（150ms）、`$snui.aniTimeNormal`（250ms）、`$snui.aniTimeLong`（400ms），同样随 `aniTimeFactor` 缩放，不带 `$` 的 `short` / `normal` / `long` 写法等价。

**二、在 JS 中自己拼样式**

自行拼接样式或开发自定义组件时，用 [useResolve](/api/hooks/use-resolve) 的 `resolveSize`（返回带单位字符串）/ `resolveSizeNum`（返回数值），第二个参数为解析类型（`font` / `radius` / `margin` / `padding` / `aniTime`）。**必须放在 `computed` 中求值**，否则乘数变化后不会重算：

```typescript
import { useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

const cardStyleC = computed<string>(() => {
	return `padding:${resolver.resolveSize('$12', 'padding')};border-radius:${resolver.resolveSize('$8', 'radius')};`
})

const iconSizeC = computed<number>(() => resolver.resolveSizeNum('$16', 'font'))
```

**三、完整示例**

带 `$` 与固定值混用、运行时调节乘数的完整页面：

```vue
<template>
	<sn-page title="动态尺寸">
		<view :style="previewStyleC">
			<sn-text font-size="$14" text="带 $ 的字号：随 fontsizeFactor 缩放" />
			<sn-avatar size="$44" text="M" bg-color="$primary" />
			<sn-text font-size="14px" text="不带 $ 的字号：固定 14px" />
		</view>
		<sn-button text="放大字号" @click="enlarge" />
	</sn-page>
</template>

<script setup lang="ts">
import { $snui, useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

const previewStyleC = computed<Map<string, any>>(() => {
	const styles = new Map<string, any>()
	styles.set('padding', resolver.resolveSize('$12', 'padding'))
	styles.set('borderRadius', resolver.resolveSize('$8', 'radius'))
	styles.set('backgroundColor', 'var(--sn-primary-light)')
	return styles
})

function enlarge(): void {
	$snui.fontsizeFactor = Math.round(($snui.fontsizeFactor + 0.2) * 10) / 10
}
</script>
```

点击「放大字号」调大 `fontsizeFactor` 后，带 `$` 的字号随之变大，固定 `14px` 的文本保持不变；头像尺寸由 `size` 决定、属间距类 props，跟随 `paddingFactor` 缩放，调大该乘数同样会变。demo 的「设计 → 大小乘数」页（`pages/design/factors`）提供字号、圆角、外间距、内间距、动画时长五个乘数滑块的完整可交互版本。

**使用要点**

- `$` 只在组件暴露的尺寸类 props 上生效：写在 `custom-style`、`style` 或 `<style>` 里的 `$` 不会被解析，CSS 侧请改用 [③ 中的 `calc(var(--xxxFactor) * Npx)`](#乘数的三种用法) 写法。
- `$` 后只支持纯数字（可含小数与负号）以及可选的 `px`（动画时长为 `ms`）单位，不支持表达式；解析失败时原样返回输入值，即不会缩放。
- 空格分隔的多段值按段解析，如 `margin="$12px auto"` → `12px auto`（每段各自套用上述规则）。
- 乘数在 [`$snui`](/api/index) 上读写并自动持久化；改动后模板中带 `$` 的 props 会即时重算，JS 中自行解析的值需放在 `computed` 内才会更新。

---

## 工具库三层架构

1. **分组静态类**（`core/utils/*.ts`）：按功能拆分为 Random、Basic、Easing、ObjectUtils、System、Sort、Text、Ui、Perm、Verify 共 10 组。
2. **聚合门面**（`core/utils/index.ts`）：`snu` 静态类，每个方法一行转发。
3. **插件出口**（`index.ts`）：`export { snu }`。

用户侧统一使用 `snu.xxx`；组件内部为减小体积直接导入分组类。平台相关方法（系统、权限等）经 `sinle-api` 插件按平台目录（`utssdk/app-android`、`utssdk/app-ios`、`utssdk/app-harmony`）分别实现，无需条件编译。

---

## 钩子

框架向组件与开发者暴露 4 个核心 hooks（useTheme / useStyle / useFactors / useHover），详见[钩子](/api/hooks/index)。组件的主题、风格、乘数、点击态、解析等能力均经由 hooks 获取，保证响应式（状态变化自动触发重渲染）。对外导出的 hooks 有 `useTheme` / `useStyle` / `useFactors` / `useHover` / `useResolve`；另有内部复用 hooks：`useExternalStyle`（外部样式转字符串）、`useBacktop`（滚动容器与返回顶部联动）。

---

## 全局弹窗机制

`snu.showToast` / `snu.showModal` / `snu.showActionsheet` / `snu.showLoading` 实现"任意位置调用、无需放置组件"的全局弹窗：

1. 框架内置 3 个弹窗页面（showModal、showActionsheet、showLoading），经 `pages_init.json` 注册；
2. `core/private/dialog-store.ts` 提供一个键值存储，保存本次弹窗的配置对象；
3. `snu` 的 UI 方法把配置写入 dialog-store，并通过 `uni.openDialogPage` 打开对应弹窗页；弹窗页 `onLoad` 时按 id 取回配置并展示，交互完成后触发 `success/fail/complete` 回调并关闭页面。

`showToast` 与 `highlight` 类轻提示由组件实现而非页面，其中 `showToast` 同样可在任意位置调用。

---

## 日志与错误

- **日志**：框架内部统一使用 `core/private/logger.ts`（转发自 `sinle-logger` 插件）输出 `[Snui]` 前缀日志，受 `$snui.logging` 控制开关。组件禁止直接使用 `console`。
- **错误**：`UniError` 为框架统一错误类型（遵循 uni 错误规范），全局 API 失败时通过 `fail` 回调返回，详见[错误与日志](/api/error/error)。
---


## 国际化（i18n）

SinleUI 内置一套**独立于宿主项目**的国际化系统：框架内所有组件内置文本（确定/取消/加载中/上传/刷新/签名/扫码等）默认均通过翻译函数渲染，**不含任何硬编码文字**，并随组件语言自动切换。

> [!IMPORTANT] 独立性
>
> 插件 i18n 与宿主项目自身的 i18n（如项目按 [uni-app x 国际化文档](https://doc.dcloud.net.cn/uni-app-x/i18n.html) 搭建的 vue-i18n）**互相独立、互不影响**。插件不依赖项目是否接入 vue-i18n，因此 sinle-* 插件可安全地用于任何已适配或未适配 i18n 的项目。

### 支持的语言

共 11 种：

- 简体中文 `zh-Hans`
- 英语 `en`
- 法语 `fr`
- 俄语 `ru`
- 日语 `ja`
- 繁体中文 `zh-Hant`
- 韩语 `ko`
- 西班牙语 `es`
- 德语 `de`
- 意大利语 `it`
- 葡萄牙语 `pt`

### 默认语言策略

初始化时按「存储值 > 系统语言（自动匹配近似标签）> 简体中文」取默认值；切换后自动持久化（storage key：`sinleui_current_locale`），重启恢复。

### 使用方式

```typescript
import { $snui, t, locale, useI18n, SUPPORTED_LOCALES } from '@/uni_modules/sinle-ui'

// 切换组件语言（全局生效，自动持久化）
$snui.locale = 'en'

// 组件内翻译（响应式，语言变化自动重渲染）
const label = t('common.confirm')
const range = t('calendar.rangePrompt', { maxRange: '7' }) // 参数插值

// hooks 形式（模板中使用 t / locale）
const { t, locale } = useI18n()

// 支持的语言列表（含本地化名称，可直接渲染为语言选择器）
SUPPORTED_LOCALES // [{ code: 'zh-Hans', name: '简体中文' }, ...]
```

### 消息文件

- 插件消息：`uni_modules/sinle-ui/core/i18n/locale/*.ts`（每语言一个文件，键形如 `common.confirm`、`loadmore.more`）。
- 组件 props 默认值均已改为空串 + `t()` 兜底：用户传入自定义文本时优先显示用户值，否则回落到当前语言。
- 日历、日期格式化等组件（weekdays / 月份 / 相对时间）同样接入插件 i18n。
