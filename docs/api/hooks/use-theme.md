# useTheme

获取与切换当前主题（亮色 / 暗色 / 自动跟随系统）。

```typescript
import { useTheme } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| theme | `Ref<string>` | 当前主题，`'light'` 或 `'dark'` |
| isDark | `Ref<boolean>` | 是否为暗色模式 |
| isLight | `Ref<boolean>` | 是否为亮色模式 |
| isAuto | `Ref<boolean>` | 是否跟随系统自动切换 |
| setTheme | (val: string) => void | 设置主题，同时关闭自动跟随 |
| setAutoTheme | (val: boolean) => void | 设置是否跟随系统自动切换 |
| toggleTheme | () => void | 在当前主题间切换，同时关闭自动跟随 |

## 示例

### 最小接入

取自框架 demo 的设置页：用 `sn-switch` 控制"跟随系统"与"暗黑模式"两个开关。注意 `onDarkChange` 里先关掉自动跟随再设置主题——因为 `setTheme` 内部本就会关闭 `autoTheme`，这里的显式调用是为了让开关状态与主题同步。

```vue
<template>
	<sn-page title="设置" :show-back="true">
		<view class="setting-row" flatten>
			<sn-text font-size="$14" color="$text">跟随系统</sn-text>
			<sn-switch :model-value="isAuto" active-bg-color="$primary" @change="onAutoChange" />
		</view>
		<view class="setting-row" flatten>
			<sn-text font-size="$14" color="$text">暗黑模式</sn-text>
			<sn-switch :model-value="isDark" active-bg-color="$primary" @change="onDarkChange" />
		</view>
	</sn-page>
</template>

<script lang="ts" setup>
import { useTheme } from '@/uni_modules/sinle-ui'

const { isAuto, isDark, setTheme, setAutoTheme } = useTheme()

function onAutoChange(val: boolean): void {
	setAutoTheme(val)
}

function onDarkChange(val: boolean): void {
	if (val) {
		setAutoTheme(false)
		setTheme('dark')
	} else {
		setTheme('light')
	}
}
</script>
```

### 按主题切换自定义颜色

框架颜色经 `var(--sn-xxx)` 由 `sn-page` 注入，自动随主题切换。框架外的元素（如 demo 中的说明文字）需自行按 `isDark` 取值：

```typescript
const { isDark } = useTheme()

const nameColor = computed<string>(() => isDark.value ? '#CBD5E1' : '#334155')
const valueColor = computed<string>(() => isDark.value ? '#73a2ff' : '#4d82ff')
```

```vue
<sn-text font-size="$12" :color="nameColor" custom-style="flex:1;">{{ item.name }}</sn-text>
```

### 使用要点

- 返回值中 `theme` / `isDark` / `isLight` / `isAuto` 均为 `computed`，模板中自动解包；在 `script` 中需写 `.value`。
- `setTheme` 与 `toggleTheme` **都会关闭自动跟随**（`autoTheme` 置为 `false`），这是为了让手动选择生效；想恢复跟随系统必须显式调用 `setAutoTheme(true)`。
- 样式与模板统一用 `var(--sn-xxx)` 或 `$` 简写（`$primary` 等自动转 `var(--sn-primary)`）；`$snui.colors.xxx` 只用于需要实色的原生弹层（配合 `resolveColorValue`），不要在脚本里用它拼样式值。
- 颜色由 `sn-page` 根节点上的 `sn-theme-light` / `sn-theme-dark` 类提供（随应用主题切换），样式中的 `@media (prefers-color-scheme: light|dark)` 作为系统外观兜底（需 HBuilderX 5.25+ 蒸汽模式）。应用主题优先于系统外观，手动切换后不会被相反的浏览器/系统外观覆盖。
- 框架已监听应用/系统外观变化（App 端 `uni.onAppThemeChange`、Web 端 `uni.onHostThemeChange`）并回写 `theme`，无需自行监听。
- App 端建议在 `manifest.json` 配置 `app.defaultAppTheme: "auto"`，冷启动首帧即跟随系统。
- App 端需在 `pages.json` 的 `globalStyle` 引用 `theme.json` 中的 `navigationBarTextStyle`，使新页面从首帧就能按主题显示状态栏文字。切换主题时框架会调用 `syncStatusBarColor` 同步当前页面状态栏前景色（亮色为黑色，暗色为白色）；Android 6.0 以下不支持动态切换状态栏前景色。
