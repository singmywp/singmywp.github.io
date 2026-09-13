# useI18n

组件语言（插件 i18n）响应式读取。

::: warning 仅供框架内部使用
`useI18n` 是框架给自身组件（如 sn-calendar、sn-modal、sn-search 等内置文案翻译）使用的 hook。**开发者不应调用它返回的 `t`** 翻译自己的文案——框架内置消息表不包含业务键，也无法扩展。开发者的文案翻译请使用宿主项目自己的 i18n 方案（如 `vue-i18n`）。

开发者使用本 hook 只需读取 `locale`（响应式获取当前组件语言），用于渲染语言选择器、同步等场景。
:::

```typescript
import { useI18n } from '@/uni_modules/sinle-ui'

const { locale } = useI18n()
```

| 返回 | 类型 | 说明 |
| :--- | :--- | :--- |
| t | (key: string, params?: UTSJSONObject) => string | 框架内部翻译函数，仅供框架组件翻译内置文案使用，**开发者不得调用** |
| locale | `ComputedRef<string>` | 当前组件语言（BCP 47 标签），响应式 |

## 说明

- `useI18n` 面向框架内部：框架组件用它翻译内置文案（如星期、月份、按钮文案等），开发者无需也不应调用 `t`。
- 开发者读取的 `locale` 是响应式的，语言切换后自动更新。
- 切换语言请使用 `$snui.locale`（赋值即切换并持久化），详见[框架国际化](/api/framework#国际化-i18n)。

## 支持的语言

| 语言 | 标签 |
| :--- | :--- |
| 简体中文 | `zh-Hans` |
| 英语 | `en` |
| 法语 | `fr` |
| 俄语 | `ru` |
| 日语 | `ja` |
| 繁体中文 | `zh-Hant` |
| 韩语 | `ko` |
| 西班牙语 | `es` |
| 德语 | `de` |
| 意大利语 | `it` |
| 葡萄牙语 | `pt` |

完整列表见 `SUPPORTED_LOCALES`（含本地化名称，可直接渲染为语言选择器）。

## 示例

### 读取当前语言

读取当前组件语言（响应式），用于展示或同步到语言选择器：

```vue
<template>
	<sn-page :title="pageTitle" :show-back="true">
		<sn-text font-size="$14" color="$text" flatten>{{ currentLocale }}</sn-text>
	</sn-page>
</template>

<script lang="uts" setup>
import { useI18n } from '@/uni_modules/sinle-ui'

const { locale } = useI18n()

const currentLocale = computed<string>(() => locale.value)
</script>
```

### 语言切换（配合宿主项目自己的 i18n）

框架 demo 的设置页同时维护了两套 i18n：插件语言经 `$snui.locale` 切换，宿主项目语言经 `vue-i18n` 的 `locale` 切换。二者相互独立，需分别设置。

```typescript
import { useI18n } from 'vue-i18n'
import { $snui } from '@/uni_modules/sinle-ui/index.uts'

const { t, locale: appLocale } = useI18n()

let appLocaleIdx = ref<number>(0)

function onAppLocaleChange(idx: number): void {
	if (idx >= 0 && idx < appLocaleOptions.length) {
		const id = appLocaleOptions[idx].id
		if (id != null) {
			appLocale.value = id
			$snui.locale = id
		}
	}
}
```

### 渲染语言选择器

用 `SUPPORTED_LOCALES` 生成语言列表，套进 `sn-select` 的 `data`。注意 `sn-select` 的 `v-model` 绑定的是索引，切换后需把 `locale` 变化同步回索引：

```typescript
import { $snui, SUPPORTED_LOCALES } from '@/uni_modules/sinle-ui'

const appLocaleOptions = ref<SnDataItem[]>(SUPPORTED_LOCALES.map((item) => {
	return { id: item.code, text: item.name } as SnDataItem
}))
```

```vue
<sn-select v-model="appLocaleIdx" :data="appLocaleOptions" width="132px" selected-mode="check"
	@change="onAppLocaleChange" />
```

### 使用要点

- `locale` 为只读 `computed`；切换语言请用 `$snui.locale = 'en'`（赋值即切换并持久化，不支持的语言仅输出警告并保持原值）。
- `settings.uvue` 中通过 `watch(appLocale)` 把语言变化同步回 `sn-select` 的选中索引，避免手动切换后下拉框显示不同步。
- 插件 i18n 与宿主项目的 vue-i18n 相互独立，二者语言不会自动同步；如需一致，需在业务层分别设置。
- 语言切换后自动持久化到 `current_locale`，应用重启时恢复。