# API

SinleUI 向外暴露全局可操作的框架对象 `$snui`（框架配置与全局能力）、`snu`（工具库聚合门面）、一系列钩子、核心库（颜色库 `ColorLib`/`TinyColor`、日期库 `DateLib`/`Dayuts`）以及大量类型定义。

>[!WARNING] 注意
>
>不可直接从插件内部任何 `.uts` 文件导入对象或类型，所有对象及类型均从 `@/uni_modules/sinle-ui` 导入；`UniError` / `SourceError` 等错误对象为 uni-app x 运行时内置全局对象，无需导入。

```typescript
import {
	$snui,
	snu,
	syncStatusBarColor,
	ColorLib,
	TinyColor,
	DateLib,
	Dayuts,
	dayuts,
	isDayuts,
	dayutsIntl,
	useTheme,
	useStyle,
	useFactors,
	useHover,
	useResolve,
	useI18n,
	t,
	locale,

	SUPPORTED_LOCALES,
	SN_DEFAULT_STYLE_ID,
	createCalendarDayPaint,
	createCalendarDayContent
} from '@/uni_modules/sinle-ui'
```

---

# 模块导出总览

| 分类 | 导出内容 | 说明 |
| :--- | :--- | :--- |
| 框架对象 | `$snui` | `Snui` 单例实例，框架全局配置与主题、风格控制入口 |
| 工具库 | `snu` | 工具方法聚合门面（静态类，包含随机、缓动、校验等 10 组方法），[详见](/libs/utils/index) |
| 钩子 | `useTheme` / `useStyle` / `useFactors` / `useHover` / `useResolve` / `useI18n` | 在组件中获取主题、风格、乘数、点击态、解析、国际化能力的 hooks |
| 颜色库 | `ColorLib` / `TinyColor` | 颜色解析、转换与色板生成，[详见](/libs/color/index) |
| 日期库 | `DateLib` / `Dayuts` / `dayuts` / `isDayuts` / `dayutsIntl` | 日期解析、格式化与国际化，[详见](/libs/date/index) |
| 全局函数 | `syncStatusBarColor` / `createCalendarDayPaint` / `createCalendarDayContent` / `t` | 状态栏颜色同步、日历天定制工具、国际化翻译 |
| 常量 | [[SN_DEFAULT_STYLE_ID@api]] / `SUPPORTED_LOCALES` / `locale` | 默认风格 id、支持的语言列表、当前组件语言 |
| 错误 | [[UniError@error]] | 统一错误类型（uni-app x 运行时内置），[详见](/api/error/error) |
| 类型 | 见[核心类型](/api/types/index) | [[SnColorBase@api]]、[[SnStyle@api]]、手势事件、弹窗配置等全部类型 |

:::type-fields SN_DEFAULT_STYLE_ID

```typescript
const SN_DEFAULT_STYLE_ID = 'default'
```

默认风格 id 常量。

---

:::
::: type-fields UniError

`UniError` 为 uni-app x 运行时内置的统一错误类型（uni 错误规范），全局 API 失败时通过 `fail` 回调返回。

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| errSubject | String | 错误主题（模块）名称，多级模块使用 `::` 分割 |
| errCode | Number | 错误码，见[错误码对照表](/api/error/standard) |
| errMsg | String | 错误描述信息 |
| cause | SourceError \| UniAggregateError \| null | 源错误信息 |

详见[错误处理机制](/api/error/error#unierror)。

:::
:::type-fields SnColorBase

`$snui.colors` 的类型。一个主题下的**全部语义化颜色集合**。字段分为特殊色与功能色两类，颜色随 `sn-page` 注入的 `--sn-*` CSS 变量自动切换主题。

> [!TIP] 提示
>
> 后缀带 `Dark` 的是比原色更深的颜色，并非暗黑主题专属；带 `Light` 的是更浅的颜色。暗黑主题与亮色主题分别拥有独立的 `SnColorBase` 对象。


| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| transparent | String | 透明色（非 CSS 的 `transparent`，变化时不会闪黑） |
| page | String | 页面背景色 |
| front | String | 前景色，一般用作块状组件背景色 |
| dark | String | 亮色模式为黑色，暗色模式为白色 |
| light | String | 亮色模式为白色，暗色模式为黑色 |
| disabled | String | 禁用状态颜色 |
| disabledText | String | 禁用状态文字颜色 |
| disabledDark | String | 更深的禁用背景色 |
| disabledDarkText | String | 更深的禁用文字颜色 |
| line | String | 线条颜色 |
| lineDark | String | 更深的线条颜色 |
| lineText | String | 线条文字颜色 |
| title | String | 标题颜色 |
| text | String | 文本颜色 |
| textLight | String | 更浅的文本颜色 |
| toast | String | 轻提示背景色 |
| shadow | String | 阴影颜色（2.0 新增） |


每种功能色包含 9 个字段（以 `primary` 为例，其余功能色将 `primary` 替换为 `info` / `success` / `error` / `warning`）：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| primary | String | 主题色（原色） |
| primaryActive | String | 激活态 |
| primaryText | String | 主题色背景上的文字前景色 |
| primaryLight | String | 更浅的主色 |
| primaryLightActive | String | 激活态更浅主色 |
| primaryLightText | String | 更浅主色背景上的前景色 |
| primaryDark | String | 更深的主题色 |
| primaryDarkActive | String | 激活态更深的主题色 |
| primaryDarkText | String | 更深的主题色背景上的前景色 |

---

:::
:::type-fields SnStyle

一套完整风格（皮肤）对象，即内置风格文件导出的结构。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| id | String | 风格唯一 id，如 `'default'` |
| colorBases | [[SnColorBases@api]] | 亮/暗两套颜色集 |
| topbarHeight | String | 导航栏高度（不含状态栏） |
| lightBgColor | String | 亮色模式页面默认背景色 |
| darkBgColor | String | 暗色模式页面默认背景色 |
| marginFactor | Number | 外间距乘数 |
| paddingFactor | Number | 内间距乘数 |
| radiusFactor | Number | 圆角乘数 |
| fontsizeFactor | Number | 字号乘数 |
| aniTimeFactor | Number | 动画时长乘数 |
| aniTimeShort | Number | 基础短动画时长（ms） |
| aniTimeNormal | Number | 基础标准动画时长（ms） |
| aniTimeLong | Number | 基础长动画时长（ms） |

:::type-fields SnColorBases

一套风格中亮/暗两套颜色集的容器。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| light | [SnColorBase](/api/types/api#sncolorbase) | 亮色主题颜色集 |
| dark | [SnColorBase](/api/types/api#sncolorbase) | 暗色主题颜色集 |

---

:::

---

:::

---

# $snui

`$snui` 是 `Snui` 类的单例实例，是 SinleUI 的全局配置中心。所有风格、主题、尺寸乘数、动画时长、页面背景等设置均通过它读写，修改后自动持久化，并实时驱动页面（`sn-page` 会差量更新 CSS 变量）。

### 属性

| 名称 | 类型 | 只读 | 描述 |
| :--- | :--- | ---- | :--- |
| colors | [[SnColorBase@api]] | 是 | 当前主题（light/dark）下的颜色集对象，例如 `$snui.colors.primaryText` |
| currentStyleId | String | 否 | 当前风格 id，赋值为不存在的 id 时仅输出警告并保持原值 |
| theme | String | 否 | 当前主题模式，可选值 `light` \| `dark`，设置时会自动关闭 `autoTheme` |
| autoTheme | Boolean | 否 | 是否跟随系统外观自动切换主题（默认开启） |
| grayMode | Boolean | 否 | 哀悼置灰（灰度模式）开关，开启后全局呈现黑白效果 |
| grayLevel | Number | 否 | 哀悼置灰程度（0-100，默认 100 全灰），仅当 grayMode 开启时生效 |
| topbarHeight | String | 否 | `sn-topbar` 导航栏高度（不含状态栏），默认 `88px` |
| lightBgColor | String | 否 | 亮色模式页面默认背景色 |
| darkBgColor | String | 否 | 暗色模式页面默认背景色 |
| logging | Boolean | 否 | 是否开启框架日志输出（默认开启） |
| locale | String | 否 | 当前组件语言（BCP 47 标签，如 `'zh-Hans'` / `'en'`），赋值即切换并持久化，不支持的语言仅输出警告并保持原值 |
| marginFactor | Number | 否 | 外间距乘数 |
| paddingFactor | Number | 否 | 内间距乘数 |
| radiusFactor | Number | 否 | 圆角乘数 |
| fontsizeFactor | Number | 否 | 字号乘数 |
| aniTimeFactor | Number | 否 | 动画时长乘数，`0` 关闭动画、`1` 标准速度、`2` 慢速 |
| aniTimeShort | Number | 否 | 短动画时长（ms），读取 = `rounded(baseAniTimeShort × aniTimeFactor)`；赋值按当前乘数反算写入基础时长并持久化（乘数为 0 时直接写入） |
| aniTimeNormal | Number | 否 | 标准动画时长（ms），读取 = `rounded(baseAniTimeNormal × aniTimeFactor)`；赋值按当前乘数反算写入基础时长并持久化（乘数为 0 时直接写入） |
| aniTimeLong | Number | 否 | 长动画时长（ms），读取 = `rounded(baseAniTimeLong × aniTimeFactor)`；赋值按当前乘数反算写入基础时长并持久化（乘数为 0 时直接写入） |
| baseAniTimeShort | Number | 否 | 基础短动画时长（ms），默认 `150` |
| baseAniTimeNormal | Number | 否 | 基础标准动画时长（ms），默认 `250` |
| baseAniTimeLong | Number | 否 | 基础长动画时长（ms），默认 `400` |

### 方法

| 名称 | 参数 | 返回值 | 描述 |
| ---- | ---- | ------ | ---- |
| setColor | (theme: string, key: string, value: string) | - | 设置指定主题（`light` \| `dark`）中指定颜色键的值。颜色键必须是 [[SnColorBase@api]] 中存在的字段，否则输出警告。设置后自动持久化 |
| setColorBase | (theme: string, colorBase: [[SnColorBase@api]]) | - | 整体替换指定主题的颜色集，一键修改项目配色 |

| syncSystemTheme | () | - | 若 `autoTheme` 为开启，则应用系统当前外观主题 |

### 示例

```typescript
// 切换主题
$snui.theme = 'dark'

// 修改字号乘数
$snui.fontsizeFactor = 1.2

// 自定义主题色
$snui.setColor('light', 'primary', '#4d82ff')
$snui.setColorBase('dark', myDarkColorBase)
```

---

# syncStatusBarColor

### **同步状态栏文字与背景颜色**

将原生状态栏文字颜色与背景色同步为当前主题下的样式（亮色下黑字白底，暗色下白字黑底）。

| 参数 | 返回值 | 描述 |
| ---- | ------ | ---- |
| 无 | - | 依据当前 `$snui.theme` 同步系统状态栏颜色 |

---

# createCalendarDayPaint / createCalendarDayContent

创建 `sn-calendar-view` 日期格定制所需的数据结构与内容。

| 名称 | 参数 | 返回值 | 描述 |
| ---- | ---- | ------ | ---- |
| createCalendarDayPaint | (input: [[SnCalendarDayPaintInput]]) | [[SnCalendarDayPaint]] | 创建日期涂色数据，用于自定义日期背景、文本颜色等 |
| createCalendarDayContent | (input: [[SnCalendarDayContentInput]]) | [[SnCalendarDayContent]] | 创建日期内容数据，用于自定义日期内图标、圆点等 |

:::type-fields SnCalendarDayPaintInput

`createCalendarDayPaint(input)` 的入参类型，字段与 [SnCalendarDayPaint](/api/types/component#sncalendardaypaint) 一致。

:::
:::type-fields SnCalendarDayPaint

日期格绘制配置（由 `SnCalendarDayContent.paint` 携带，经 formatter 或 `createCalendarDayPaint` 构造）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| backgroundColor | String | 否 | 背景颜色 |
| borderColor | String | 否 | 边框颜色 |
| borderWidth | Number | 否 | 边框宽度 |
| fontSize | String \| Number | 否 | 日期字号 |
| prefixColor | String | 否 | 前缀文字颜色 |
| textColor | String | 否 | 日期文字颜色 |
| suffixColor | String | 否 | 后缀文字颜色 |
| prefixFontSize | Number | 否 | 前缀字号 |
| suffixFontSize | Number | 否 | 后缀字号 |
| fontWeight | String | 否 | 字重 |
| showDot | Boolean | 否 | 是否显示圆点 |
| dotColor | String | 否 | 圆点颜色 |
| dotPosition | [[SnCalendarDayDotPosition]] | 否 | 圆点位置 |

:::type-fields SnCalendarDayDotPosition

圆点标记位置。

| 可选值 | 备注 |
| :--- | :--- |
| `left` | 左侧 |
| `right` | 右侧 |
| `top` | 顶部 |
| `bottom` | 底部 |

:::

:::
:::type-fields SnCalendarDayContentInput

`createCalendarDayContent(input)` 的入参类型：`prefix` / `text` / `suffix` / `showDot` / `dotColor` / `dotPosition` / `paint`（[SnCalendarDayPaintInput](/api/types/component#sncalendardaypaintinput)），快捷设置圆点相关字段。

:::
:::type-fields SnCalendarDayContent

日期格内容（formatter 返回值）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| prefix | String | 否 | 前缀文字（如「休」） |
| text | String | 否 | 日期文本（默认为日号） |
| suffix | String | 否 | 后缀文字（如「今天」） |
| paint | [[SnCalendarDayPaint]] \| null | 否 | 绘制配置 |


:::

---

# Snui（类）

`Snui` 类定义与 `$snui` 实例的属性、方法一致，完整风格对象结构参见 [SnStyle](/api/types/api#snstyle)。