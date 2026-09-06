# Search  搜索框

> [查看 sn-search 的 2.0 版本差异](/differences/components/sn-search)

## 基础用法

- 基于 `sn-input` 二次封装的搜索框，键盘确认按钮固定为 `search`，开箱即用。
- 聚焦时右侧「取消」按钮平滑展开，点击取消会清空输入内容并触发 `cancel` 事件；`fixCancel` 可让取消按钮常驻。
- 值变化时触发 `change` 事件；`clearable` 开启后显示一键清空按钮。
- 前后图标可通过 `prefixIcon` / `suffixIcon` 更换，或用 `prefix` / `suffix` 插槽自定义。

```vue
<template>
	<sn-search v-model="keyword" @change="onChange" @confirm="onConfirm" @cancel="onCancel"></sn-search>
</template>

<script lang="uts" setup>
const keyword = ref<string>('')

function onChange(value: string): void {
	console.log(value)
}

function onConfirm(e: UniInputConfirmEvent): void {
	console.log(e.detail.value)
}

function onCancel(): void {
	console.log('取消搜索')
}
</script>
```

**更多演示请下载 demo 查看**

## 自定义取消按钮

通过 `showCancel` 控制是否显示取消按钮（默认隐藏，聚焦时展开），`fixCancel` 让其常驻显示，文案与样式可用 `cancelText` / `cancelTextSize` / `cancelTextColor` 或 `cancelClass` / `cancelStyle` 定制。

```vue
<template>
	<sn-search v-model="keyword" fix-cancel cancel-text="搜索"
		cancel-text-color="$error"></sn-search>
</template>

<script lang="uts" setup>
const keyword = ref<string>('')
</script>
```

## 自定义图标与插槽

```vue
<template>
	<sn-search v-model="keyword" suffix-icon="scan-line" @suffix-click="onScan">
		<template #prefix>
			<sn-icon name="emotion-laugh-line" :size="20" color="$primary"></sn-icon>
		</template>
	</sn-search>
</template>

<script lang="uts" setup>
const keyword = ref<string>('')

function onScan(): void {
	console.log('扫码')
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定值 | String | `''` | - |
| placeholder | 占位文本 | String | `请输入搜索内容` | - |
| type | 输入框键盘类型 | String | `text` | `text` \| `number` \| `digit` \| `tel` \| `idcard` \| `nickname` |
| padding | 输入框内边距 | String | `8px 12px` | - |
| textColor | 输入文本颜色 | String | `''` | - |
| textSize | 输入文本大小 | String \| Number | `''` | - |
| loading | 是否显示加载状态 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用输入框 | Boolean | `false` | `true` \| `false` |
| readonly | 是否只读 | Boolean | `false` | `true` \| `false` |
| clearable | 是否显示清除按钮 | Boolean | `false` | `true` \| `false` |
| focus | 是否获得焦点 | Boolean | `false` | `true` \| `false` |
| showBorder | 是否显示边框 | Boolean | `true` | `true` \| `false` |
| showActiveBorder | 聚焦时是否切换为激活边框颜色 | Boolean | `true` | `true` \| `false` |
| showCancel | 是否显示取消按钮（聚焦时平滑展开） | Boolean | `false` | `true` \| `false` |
| fixCancel | 取消按钮是否常驻显示（不随聚焦收起） | Boolean | `false` | `true` \| `false` |
| cancelText | 取消按钮文本 | String | `取消` | - |
| cancelTextSize | 取消按钮文本大小 | String \| Number | `''`（默认 14px × 字体乘数） | - |
| cancelTextColor | 取消按钮文本颜色 | String | `''`（默认主题 primaryDark 色） | - |
| bgColor | 输入框背景颜色 | String | `''`（默认主题 info 色） | - |
| activeBgColor | 聚焦时的背景颜色 | String | `''`（默认主题 info 色） | - |
| activeBorderColor | 聚焦时的边框颜色 | String | `'$line'` | - |
| borderRadius | 输入框圆角大小 | String \| Number | `''` | - |
| borderColor | 输入框边框颜色 | String | `'$line'` | - |
| borderWidth | 输入框边框宽度 | String \| Number | `1px` | - |
| cursorColor | 光标颜色 | String | `''` | - |
| prefixIcon | 前置图标名称，存在 prefix 插槽时不显示 | String | `search-2-line` | - |
| suffixIcon | 后置图标名称，存在 suffix 插槽时不显示 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| inputStyle | 自定义内部输入框样式 | UTSJSONObject \| String | `''` | - |
| inputClass | 内部输入框的外部类 | String | `''` | - |
| cancelStyle | 自定义取消按钮样式 | UTSJSONObject \| String | `''` | - |
| cancelClass | 取消按钮的外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: string) => Void | 绑定值变化时触发，参数为当前输入内容 |
| focus | (event: UniInputFocusEvent) => Void | 输入框聚焦时触发 |
| blur | (event: UniInputBlurEvent) => Void | 输入框失去焦点时触发 |
| confirm | (event: UniInputConfirmEvent) => Void | 点击键盘搜索按钮时触发 |
| cancel | () => Void | 点击取消按钮时触发，同时会清空输入内容 |
| suffix-click | () => Void | 点击后置图标时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| prefix | 自定义前置内容，使用后前置图标不显示 |
| suffix | 自定义后置内容，使用后后置图标不显示 |

<DemoPhone name="sn-search" />
