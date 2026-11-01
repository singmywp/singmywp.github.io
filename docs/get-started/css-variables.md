# CSS 变量

SinleUI 通过页面根组件 [sn-page](/components/sn-page) 向页面注入一整套 CSS 变量，页面内所有子组件（含 `sn-popup`、`sn-modal`、`sn-toast` 等弹出层类组件）只需用 `var(--xxx)` 引用，即可自动获得**主题配色**、**尺寸乘数**与**动画时长**，无需脚本参与上色。

这套变量共分三类：

| 分类 | 命名 | 数量 | 作用 |
| :--- | :--- | :--- | :--- |
| 颜色 | `--sn-*` | 61 | 亮/暗主题下的语义化颜色，随主题自动切换 |
| 尺寸乘数 | `--xxxFactor` 与缩写（`--mf`、`--pf` 等） | 5 + 5 | 字号、圆角、内外间距、动画时长的全局缩放系数 |
| 动画时长 | `--ani-time-*` | 3 | 短 / 标准 / 长三档动画时长（已乘动画乘数） |

::: danger 变量只存在于 sn-page 子树内
变量注入在 `sn-page` 根节点上，只对其后代生效。页面必须以 `sn-page` 为根节点，所有组件都放在其下，否则 `var(--sn-*)`、`var(--ani-time-*)` 引用会失效，颜色与动画时长错乱。
:::

---

## 变量总览

### 颜色变量

命名规则：**`$snui.colors` 的字段名由小驼峰转为 kebab-case，加 `--sn-` 前缀**。例如 `primaryLightActive` → `--sn-primary-light-active`、`disabledText` → `--sn-disabled-text`。

#### 特殊色

| CSS 变量 | 对应 `$snui.colors` 字段 | 用途 |
| :--- | :--- | :--- |
| `--sn-transparent` | `transparent` | 透明色（非 CSS 的 `transparent`，主题切换时不会闪黑，框架内透明背景一律用它） |
| `--sn-page` | `page` | 页面背景色 |
| `--sn-front` | `front` | 前景色，一般用作卡片等块状组件背景 |
| `--sn-dark` | `dark` | 亮色模式为黑色，暗色模式为白色 |
| `--sn-disabled` | `disabled` | 禁用状态背景色 |
| `--sn-disabled-text` | `disabledText` | 禁用状态文字色 |
| `--sn-disabled-dark` | `disabledDark` | 更深的禁用背景色 |
| `--sn-disabled-dark-text` | `disabledDarkText` | 更深的禁用文字色 |
| `--sn-line` | `line` | 线条色（分割线、边框） |
| `--sn-line-dark` | `lineDark` | 更深的线条色 |
| `--sn-line-text` | `lineText` | 线条区域的文字色 |
| `--sn-title` | `title` | 标题文字色 |
| `--sn-text` | `text` | 正文文字色 |
| `--sn-text-light` | `textLight` | 更浅的正文文字色（辅助说明） |
| `--sn-toast` | `toast` | 轻提示背景色 |
| `--sn-shadow` | `shadow` | 阴影色 |

#### 功能色

功能色共 5 种语义：`primary`（主色）、`info`（信息）、`success`（成功）、`error`（错误）、`warning`（警告）。每种语义在亮/暗模式下各有 3 个深浅程度（原色 / `light` 更浅 / `dark` 更深），每个程度配套 `active`（激活态）与 `text`（该色背景上的文字前景色）——即每种功能色有 9 个变量，5 种合计 45 个。

以 `primary` 为例：

| CSS 变量 | 对应 `$snui.colors` 字段 | 用途 |
| :--- | :--- | :--- |
| `--sn-primary` | `primary` | 主题色（原色） |
| `--sn-primary-active` | `primaryActive` | 主题色激活态 |
| `--sn-primary-text` | `primaryText` | 主题色背景上的文字色 |
| `--sn-primary-light` | `primaryLight` | 更浅的主题色 |
| `--sn-primary-light-active` | `primaryLightActive` | 更浅主题色的激活态 |
| `--sn-primary-light-text` | `primaryLightText` | 更浅主题色背景上的文字色 |
| `--sn-primary-dark` | `primaryDark` | 更深的主题色 |
| `--sn-primary-dark-active` | `primaryDarkActive` | 更深主题色的激活态 |
| `--sn-primary-dark-text` | `primaryDarkText` | 更深主题色背景上的文字色 |

`info` / `success` / `error` / `warning` 的变量名把上表的 `primary` 换成对应语义即可（如 `--sn-success-light-text`、`--sn-error-dark`）。

> 后缀带 `dark` 的是比原色更深的颜色，**不是暗黑主题专属**；带 `light` 的是更浅的颜色。暗黑主题与亮色主题是两个独立的颜色集。

### 乘数变量

五个乘数控制全局的尺寸密度与动效节奏，每个乘数同时提供一个同值缩写变量（缩写与全称是各自独立的字面值，不是 `var()` 引用）：

| 全称变量 | 缩写变量 | 对应 `$snui` 属性 | 用途 | 典型写法 |
| :--- | :--- | :--- | :--- | :--- |
| `--marginFactor` | `--mf` | `marginFactor` | 外间距乘数 | `margin-bottom: calc(var(--mf) * 10px);` |
| `--paddingFactor` | `--pf` | `paddingFactor` | 内间距乘数 | `padding: calc(var(--pf) * 16px);` |
| `--radiusFactor` | `--rf` | `radiusFactor` | 圆角乘数 | `border-radius: calc(var(--rf) * 12px);` |
| `--fontsizeFactor` | `--ff` | `fontsizeFactor` | 字号乘数 | `font-size: calc(var(--ff) * 14px);` |
| `--aniTimeFactor` | `--af` | `aniTimeFactor` | 动画时长乘数 | 仅作标记与调试，**不可用于 `calc()`**（时间类型不支持） |

乘数变量是**无单位的纯数字**，必须放在 `calc()` 中与固定设计值相乘，不能直接当长度值使用（`padding: var(--pf)` 无效）。

### 动画时长变量

| CSS 变量 | 对应 `$snui` 属性 | 说明 |
| :--- | :--- | :--- |
| `--ani-time-short` | `aniTimeShort` | 短动画时长，基础值 150ms × `aniTimeFactor` |
| `--ani-time-normal` | `aniTimeNormal` | 标准动画时长，基础值 250ms × `aniTimeFactor` |
| `--ani-time-long` | `aniTimeLong` | 长动画时长，基础值 400ms × `aniTimeFactor` |

变量值为带 `ms` 单位的字符串（如 `250ms`），可直接赋给 `transition-duration` 等时长属性。框架内动效统一走这三档时长（样式表引用变量、脚本读取 `$snui.aniTime*`），`aniTimeFactor` 变化时全站动画节奏同步变化。

---

## 使用示例

### 在样式表中引用颜色与动画时长

```scss
.card {
	background-color: var(--sn-front);
	border-bottom: 1px solid var(--sn-line);
	box-shadow: 0 4px 12px var(--sn-shadow);
	transition-property: background-color, border-color;
	transition-duration: var(--ani-time-normal);
}

.card-title {
	color: var(--sn-title);
	font-size: 16px;
}

.card-desc {
	color: var(--sn-text-light);
}

/* 带功能色的标签块：浅色底 + 对应文字色 */
.tag-primary {
	background-color: var(--sn-primary-light);
	color: var(--sn-primary-light-text);
	transition-duration: var(--ani-time-short);
}

/* 禁用态与透明背景 */
.btn-disabled {
	background-color: var(--sn-disabled);
	color: var(--sn-disabled-text);
}

.mask {
	background-color: var(--sn-transparent);
}
```

### 用 calc() 结合乘数变量

```scss
.block {
	padding: calc(var(--pf) * 16px);
	margin-bottom: calc(var(--mf) * 12px);
	border-radius: calc(var(--rf) * 12px);
}

.block-title {
	font-size: calc(var(--ff) * 16px);
	line-height: 1.4em;
}
```

> `calc()` 中 `+` / `-` 两侧必须留空格，`*` / `/` 至少一方必须是纯数字；乘数变量只能参与长度类属性（`width`、`padding`、`margin`、`border-radius` 等），不能用于时间、角度或颜色。

### 在模板与组件属性中引用

组件内置的 `$` 简写与 `var(--sn-*)` 等价：`color="$primary"` 会被框架自动转换为 `var(--sn-primary)`，因此**能用 `$` 简写的属性优先用 `$`，其余场合（`custom-style`、`style`、样式表）直接写 `var(--sn-*)`**。`$` 的完整规则（单位补全、`$short` / `$normal` / `$long` 命名值、各解析类型与乘数的对应关系）见 [框架设计 · `$` 动态尺寸语法](/get-started/framework#动态尺寸语法)。

```vue
<template>
	<sn-page title="CSS 变量">
		<!-- $ 简写：自动转 var(--sn-*)，随主题切换 -->
		<sn-card title="主题色卡片" title-color="$title" bg-color="$front" border="1px solid $line">
			<sn-text font-size="$14" color="$text" text="正文文字，使用 --sn-text" />
			<sn-text font-size="$12" color="$textLight" text="辅助文字，使用 --sn-text-light" />
			<view class="bar" :style="barStyles" />
		</sn-card>

		<!-- 直接写 CSS 变量同样有效 -->
		<sn-button text="主要操作" type="primary" radius="$20"
			custom-style="margin:calc(var(--mf) * 12px) 0;"></sn-button>
	</sn-page>
</template>

<script lang="ts" setup>
const barStyles = computed<Map<string, any>>(() => {
	const styles = new Map<string, any>()
	styles.set('height', '6px')
	styles.set('backgroundColor', 'var(--sn-primary)')
	styles.set('borderRadius', 'calc(var(--rf) * 3px)')
	return styles
})
</script>
```

### 在 JS 中拼样式

脚本里拼样式与编写自定义组件时，样式值同样使用 `var(--sn-*)` 字符串，**必须放在 `computed` 中**，否则主题或乘数变化后不会重算：

```typescript
import { useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

const panelStyles = computed<Map<string, any>>(() => {
	const styles = new Map<string, any>()
	styles.set('backgroundColor', 'var(--sn-front)')
	styles.set('borderRadius', resolver.resolveSize('$12', 'radius'))
	styles.set('padding', resolver.resolveSize('$16', 'padding'))
	styles.set('transitionDuration', 'var(--ani-time-normal)')
	return styles
})
```

### 颜色变量的两个来源

| 场景 | 颜色变量来源 |
| :--- | :--- |
| 使用内置**默认**风格（未调用 `setColor` / `setColorBase`） | `sn-page` 根节点的 `sn-theme-light` / `sn-theme-dark` 类（随应用主题切换），样式中的 `@media (prefers-color-scheme: light \| dark)` 作为系统外观兜底（需 HBuilderX 5.25+ 蒸汽模式） |
| 调用过 `setColor` / `setColorBase`，或切换到其它内置风格 | 改由脚本按当前主题把颜色写成 `sn-page` 根节点的**内联变量**（覆盖类色板与媒体查询色板），切换主题时按新主题重写 |

无论哪种来源，页面内的写法都是 `var(--sn-*)`，不需要区分。乘数与动画时长变量则由 `sn-page` 差量写入，与颜色无关。

::: info 应用主题优先于系统外观
颜色变量按「内联 > `sn-theme-*` 类 > `prefers-color-scheme` 媒体查询」的顺序生效。这意味着**用户在应用内切换主题后，颜色以应用选择为准**，不会因为浏览器或系统外观相反而出现底色与文字割裂；只有当 `autoTheme` 开启、应用跟随系统外观时，两者才一致。
:::

三个内置弹窗页（`snu.showModal` / `snu.showActionsheet` / `snu.showLoading`）是独立的 dialogPage，不在任何 `sn-page` 子树内，页面会自行把颜色、动画时长与五个乘数变量注入自己的根节点，因此在它们的 `customStyle` 中写 `calc(var(--xxxFactor) * Npx)` 同样有效。`snu.showToast` 走原生弹层、不涉及 CSS 变量，尺寸只走 `$` 动态值。

---

## 与 CSS 变量同功能的 JS 方式

CSS 变量负责**"在样式里用颜色"**，JS 负责**"读取与修改"**。两者能力对照：

| 能力 | CSS 变量方式 | JS 方式 |
| :--- | :--- | :--- |
| 在样式中使用主题色 | `var(--sn-primary)` | `useResolve().resolveColor('$primary')` → `'var(--sn-primary)'` |
| 读取颜色当前的实际色值 | 不支持 | `$snui.colors.primary` |
| 在原生弹层 / 原生元素中使用主题色 | 不支持（原生层不解析 CSS 变量） | `useResolve().resolveColorValue('$primary')` → `'#4d82ff'` |
| 修改单个颜色键 | 不支持 | `$snui.setColor('light', 'primary', '#4d82ff')` |
| 整体替换一套配色 | 不支持 | `$snui.setColorBase('dark', myColorBase)` |
| 切换亮 / 暗主题 | `sn-theme-*` 类自动切换 | `$snui.theme = 'dark'`、`useTheme().setTheme()` |
| 跟随系统外观 | — | `$snui.autoTheme = true`、`useTheme().setAutoTheme()` |
| 在样式中使用尺寸乘数 | `calc(var(--pf) * 16px)` | `useResolve().resolveSize('$16', 'padding')` → `'16px'` |
| 读取尺寸乘数 | 不支持 | `$snui.paddingFactor` 等、`useFactors()` |
| 修改尺寸乘数 | 不支持 | `$snui.paddingFactor = 1.2` |
| 读取动画时长 | `var(--ani-time-normal)` | `$snui.aniTimeNormal` |
| 修改动画时长 / 动画乘数 | 不支持 | `$snui.baseAniTimeNormal = 300`、`$snui.aniTimeFactor = 0` |

### 读取颜色与实际色值

```typescript
import { $snui, useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

// 实际色值：$snui.colors 是当前主题（light/dark）下的颜色集，只读
const brandText = computed<string>(() => $snui.colors.primary)

// 等价于 CSS 变量写法，用于拼样式
const brandVar = resolver.resolveColor('$primary')

// 脱离 CSS 变量作用域的场景（原生弹层、原生元素等）必须取实际色值
const brandValue = resolver.resolveColorValue('$primary')
```

`$snui.colors` 是响应式的：放在 `computed` 中，主题或配色变化时会自动重算。

### 修改主题颜色

```typescript
import { $snui } from '@/uni_modules/sinle-ui'

// ① 修改单个颜色键（theme 取 'light' | 'dark'，key 取 SnColorBase 的字段名）
$snui.setColor('light', 'primary', '#4d82ff')
$snui.setColor('dark', 'primary', '#4d82ff')

// 特殊色同理，例如修改页面背景色（等价于 $snui.lightBgColor）
$snui.setColor('light', 'page', '#f5f7fa')

// ② 整体替换某个主题的颜色集，一键换肤（myDarkColors 为完整的 SnColorBase 对象，构造方式见下）
$snui.setColorBase('dark', myDarkColors)
```

- `$snui.setColor` 的颜色键必须是 `SnColorBase` 中存在的字段（如 `primary`、`primaryLightText`、`textLight`、`shadow`），传入不存在的键只会输出警告、不生效。
- `$snui.setColorBase` 的入参是**完整的颜色集对象**，`SnColorBase` 的全部字段都必填，需要整块换肤时使用：

```typescript
import { $snui } from '@/uni_modules/sinle-ui'
import type { SnColorBase } from '@/uni_modules/sinle-ui'

// 以当前亮色颜色集为底稿（$snui.colors 即当前主题颜色集），替换主色系后整体写回
const light = $snui.colors

// 注意：SnColorBase 的 61 个字段全部必填，下面的值对象需写全，未改动字段从 light 照抄
const myLightColors: SnColorBase = {
	primary: '#22c55e',
	primaryActive: '#4ade80',
	primaryText: '#ffffff',
	primaryLight: '#dcfce7',
	primaryLightActive: '#bbf7d0',
	primaryLightText: '#22c55e',
	primaryDark: '#16a34a',
	primaryDarkActive: '#22c55e',
	primaryDarkText: '#ffffff'
	// …余下 52 个字段（transparent / page / front / info 系 / success 系 / error 系 / warning 系 …）照抄 light
}

$snui.setColorBase('light', myLightColors)
```

只改少量颜色时用 `$snui.setColor` 逐个写入更省事，无需改动整份颜色集。两种修改都会自动持久化（应用重启后保持），并把颜色变量的来源切换为内联写入，页面内的 `var(--sn-*)` 与组件配色即时更新，无需刷新页面。

### 切换主题与跟随系统

```typescript
import { $snui } from '@/uni_modules/sinle-ui'

$snui.theme = 'dark' // 切换到暗黑模式，同时自动关闭 autoTheme
$snui.theme = 'light' // 切换回亮色模式
$snui.autoTheme = true // 重新跟随系统外观
```

钩子形式（响应式，适合在设置页做开关）：

```typescript
import { useTheme } from '@/uni_modules/sinle-ui'

const { theme, isDark, isLight, isAuto, setTheme, setAutoTheme, toggleTheme } = useTheme()

function onDarkChange(val: boolean): void {
	setAutoTheme(false)
	setTheme(val ? 'dark' : 'light')
}
```

主题切换由框架驱动，`sn-page` 注入的颜色变量会随之更新，页面内所有 `var(--sn-*)` 自动换色——这也是**优先用 CSS 变量而不是在脚本里写死颜色**的原因。

### 读写乘数与动画时长

```typescript
import { $snui, useFactors } from '@/uni_modules/sinle-ui'

// 修改乘数（自动持久化；页面内带 $ 的 props 与 calc(var(--xf) * Npx) 样式即时重算）
$snui.fontsizeFactor = 1.2
$snui.paddingFactor = 1.1
$snui.radiusFactor = 1.5
$snui.marginFactor = 1
$snui.aniTimeFactor = 0 // 0 关闭动画、1 标准速度、2 慢速

// 读取乘数
const pf = $snui.paddingFactor

// 动画时长：读取为「基础时长 × aniTimeFactor」，赋值按当前乘数反算写回基础时长
const normal = $snui.aniTimeNormal
$snui.baseAniTimeNormal = 300 // 直接改基础时长（默认 250ms）
```

钩子形式（响应式读值）：

```typescript
import { useFactors } from '@/uni_modules/sinle-ui'

const { marginFactor, paddingFactor, radiusFactor, fontsizeFactor, aniTimeFactor } = useFactors()

const fontsizeText = computed<string>(() => `${fontsizeFactor.value}×`)
```

### 解析函数：resolveColor 与 resolveColorValue

| 函数 | 输入示例 | 输出 | 适用场景 |
| :--- | :--- | :--- | :--- |
| `resolveColor` | `'$primary'` | `'var(--sn-primary)'` | 页面内组件的样式（依赖 `sn-page` 注入变量，随主题实时切换） |
| `resolveColorValue` | `'$primary'` | `'#4d82ff'` 等实际色值 | 原生弹层、原生元素等脱离 CSS 变量作用域的场景 |
| `resolveSize` | `'$16'` + `'font'` | `'16px'`（× 字号乘数） | 尺寸类 props 与自定义样式，等价于 `calc(var(--ff) * 16px)` |

```typescript
import { useResolve } from '@/uni_modules/sinle-ui'

const resolver = useResolve()

const styles = computed<Map<string, any>>(() => {
	const out = new Map<string, any>()
	out.set('color', resolver.resolveColor('$primary')) // 'var(--sn-primary)'
	out.set('padding', resolver.resolveSize('$16', 'padding')) // 与 calc(var(--pf) * 16px) 等效
	return out
})

// 原生弹层（如 snu.showToast）不接受 CSS 变量，必须用实际色值
const toastColor = resolver.resolveColorValue('$primary')
```

---

## 注意事项

1. **变量只对 `sn-page` 后代生效**：页面必须以 `sn-page` 为根节点、所有组件放在其下；脱离 `sn-page` 的独立组件不会自动获得这些变量。
2. **不要写死颜色**：组件颜色类 props 用 `$` 简写（`$primary`、`$text`、`$line` 等），样式表用 `var(--sn-*)`，脚本拼样式也返回 `var(--sn-*)` 字符串；只有在原生弹层等无法解析 CSS 变量的场景才取实际色值（`resolveColorValue` / `$snui.colors`）。
3. **透明背景统一用 `var(--sn-transparent)`**，不要用 CSS 的 `transparent` 或 `rgba(0,0,0,0)`，避免主题切换瞬间出现闪黑。
4. **乘数变量必须包在 `calc()` 里**：`calc(var(--pf) * 16px)`；`--aniTimeFactor`（`--af`）不可用于 `calc()`。
5. **脚本中解析结果必须写在 `computed` 内**：主题、风格、乘数变化时才会计入重算。
6. **作用域提醒**：CSS 变量的可见范围等于 `sn-page` 根节点子树，同一页面内不同 `sn-page` 各自注入，互不影响。

相关阅读：[框架设计 · 颜色系统](/get-started/framework#颜色系统)、[框架设计 · 大小乘数与动画时长](/get-started/framework#大小乘数与动画时长)、[sn-page 组件](/components/sn-page)、[useResolve](/api/hooks/use-resolve)、[useTheme](/api/hooks/use-theme)、[useFactors](/api/hooks/use-factors)、[`$snui` API](/api/index)。
