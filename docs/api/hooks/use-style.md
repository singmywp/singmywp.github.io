# useStyle

获取当前风格（Style，应用皮肤）与切换风格。

```typescript
import { useStyle } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| style | Ref<[[SnStyle@api]]> | 当前完整风格对象 |
| styleId | `Ref<string>` | 当前风格 id |
| availableStyles | `Ref<string[]>` | 全部已注册的风格 id 列表 |
| setStyle | (id: string) => boolean | 切换风格，目标 id 存在时返回 `true` |

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

## 示例

### 最小接入

取自框架 demo 的设置页：用 `sn-select` 切换风格。`availableStyles` 只有 id，中文名需自行映射；`styleId` 变化后需同步回选中索引。

```vue
<template>
	<sn-page title="设置" :show-back="true">
		<view class="setting-row" flatten>
			<sn-text font-size="$14" color="$text" flatten>风格</sn-text>
			<sn-select v-model="styleIdx" :data="styleOptions" width="132px" selected-mode="check"
				@change="onStyleChange" />
		</view>
	</sn-page>
</template>

<script lang="uts" setup>
import { useStyle } from '@/uni_modules/sinle-ui/index.uts'
import type { SnDataItem } from '@/uni_modules/sinle-ui/core/types/index.uts'

const { styleId, setStyle } = useStyle()

const styleOptions = computed<SnDataItem[]>(() => [
	{ id: 'default', text: '默认' },
	{ id: 'ink', text: '水墨' },
	{ id: 'chinese', text: '国风' },
	{ id: 'new-year', text: '新年' },
	{ id: 'morandi-green', text: '莫兰迪绿' },
	{ id: 'orange', text: '活力橙' }
])

const styleIdx = ref<number>(0)

function syncStyleIdx(): void {
	const list = styleOptions.value
	for (let i = 0; i < list.length; i++) {
		if (list[i].id == styleId.value) {
			styleIdx.value = i
			return
		}
	}
	styleIdx.value = 0
}

function onStyleChange(idx: number): void {
	const list = styleOptions.value
	if (idx >= 0 && idx < list.length) {
		const id = list[idx].id
		if (id != null) {
			setStyle(id)
		}
	}
}

onMounted((): void => {
	syncStyleIdx()
})

watch(styleId, (): void => {
	syncStyleIdx()
})
</script>
```

### 遍历全部已注册风格

`availableStyles`（返回 `Ref<string[]>`）可直接用于遍历：

```typescript
const { styleId, availableStyles, setStyle } = useStyle()

const ids = computed<string[]>(() => availableStyles.value)
```

```vue
<sn-cell
	v-for="item in ids"
	:key="item"
	:title="item"
	:value="item == styleId ? '使用中' : ''"
	@click="setStyle(item)"
/>
```

### 使用要点

- `setStyle(id)` 内部为 `switchStyle(id)`：目标 id 不存在时返回 `false` 并输出警告、保持原风格，可用于做失败提示。
- 框架内置 6 套风格：`default`、`ink`、`chinese`、`new-year`、`morandi-green`、`orange`。`availableStyles` 只返回 id 列表，展示中文名需自行维护映射（demo 中通过 i18n 键 `style.default` 等获取）。
- 切换风格时框架会**深拷贝**目标风格再替换当前风格，避免互相污染；修改也随之持久化到 storage。
- `style` 为完整 `SnStyle` 对象，切换后整体替换。不要解构它的字段，应在 `computed` 中访问 `style.value.xxx`。
- 若仅需微调颜色或乘数而不整套换肤，直接改 `$snui.setColor()` / `$snui.fontsizeFactor` 等属性即可，无需调用本 hook。
