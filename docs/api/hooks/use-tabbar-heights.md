# useTabbarHeights

读取当前 `sn-page` 作用域内的 Tabbar 实际高度，用于在子页面滚动内容末尾放置占位，使内容能经过固定导航栏背后呈现毛玻璃效果。

```typescript
import { useTabbarHeights } from '@/uni_modules/sinle-ui'
const { tabbarHeights } = useTabbarHeights()
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| tabbarHeights | ComputedRef\<UTSJSONObject\> | 当前 sn-page 的高度字典，以 tabbarKey 为键、实际高度（px 数值）为值；未登记时读取为 null 或 undefined，请使用 ?? 0；只读，不直接修改 |
| setHeight | (key: string, height: number) => void | 框架内部登记或更新当前组件拥有的高度记录，非有限值按 0 处理，四舍五入且不小于 0；同作用域重复 key 不覆盖其他组件记录 |
| removeHeight | (key: string) => void | 框架内部移除当前组件拥有的记录，不删除其他组件拥有的同名记录 |

## 使用方式

固定导航栏放在 `sn-page` 内，显式指定 `tabbar-key`：

```vue
<sn-page fill-content>
	<home-content />
	<sn-tabbar tabbar-key="home" :data="data" :blur="true" />
</sn-page>
```

`home-content` 等后代组件在自身 `<script setup>` 调用钩子，占位必须位于滚动容器内部、内容末尾：

```vue
<template>
	<scroll-view direction="vertical" class="content-scroll">
		<view class="content-body"><slot /></view>
		<view :style="placeholderStyle" flatten />
	</scroll-view>
</template>

<script lang="ts" setup>
import { useTabbarHeights } from '@/uni_modules/sinle-ui'
const { tabbarHeights } = useTabbarHeights()
const placeholderStyle = computed<string>(() => {
	const height = (tabbarHeights.value['home'] as number | null) ?? 0
	return `height: ${height}px; flex-shrink: 0;`
})
</script>
```

若 Tabbar 通过 `bottom` 设置安全距离，或配置了底部外边距，占位高度需额外加上这些距离。登记高度仅是主体的渲染高度，不自动包含它们。

## 隔离与生命周期

- `frameStore` 是框架全局单例；每个 `sn-page` 在 setup 中提供独立的 `tabbarHeights:<实例 uid>` 存储键，不以路由或当前页面栈顶作为作用域。
- 存储内容为纯数值记录及组件归属，不存放 Vue ref 或组件实例，不持久化到 Storage。
- `tabbarHeights` 是按字符串 key 访问的高度字典，不是按数字索引排序的数组。
- 不同 `sn-page` 可以使用相同 `tabbarKey`，包括同一路由的多个实例和嵌套 `sn-page`；后代读取最近的 `sn-page` 作用域。
- 同一作用域内多个固定 Tabbar 必须使用不同 key。重复 key 发出框架日志，后登记的组件不覆盖前一个组件，也不能误删其记录。
- Tabbar 首次登记为 0，渲染测量后更新；尺寸变化、页面再次显示会重新测量。`tabbarKey` 变化或 `fixed=false` 会移除旧记录。
- 登记组件卸载时只清理自己拥有的记录；`sn-page` 卸载时清理整个页面作用域。
- `tabbarKey=''` 不参与登记；`__proto__`、`constructor`、`prototype` 不能用作 key。
- 钩子必须在 `sn-page` 后代组件 setup 中调用。包含 `<sn-page>` 的页面自身 setup 不是其后代，不能从那里读取该组件提供的作用域；没有作用域时读取为空，尝试登记会输出日志。

## 兼容能力

`v-model:height` 与 `heightchange` 保留，仍可用于已有布局；跨子页面共享高度优先使用本钩子。业务只读取 `tabbarHeights`，`setHeight` / `removeHeight` 主要由 `sn-tabbar` 内部调用。
