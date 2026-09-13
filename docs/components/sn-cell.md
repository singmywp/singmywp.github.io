# Cell  单元格

## 基础用法

- 单元格组件，用于列表项展示：左侧标题与描述信息，右侧值与箭头图标。
- `title` / `label` / `value` 分别设置标题、描述与右侧内容；`icon` 设置左侧图标，`right-icon` 设置右侧图标。
- 设置 `right-icon="arrow-right"` 显示右箭头（配合 `arrow-direction` 可变换方向），此时单元格自动可点击并有按压反馈；`clickable` 也可单独开启点击态。
- 点击时触发 `click` 事件并携带 `name` 标识符；`disabled` 禁用后不触发事件且整体半透明。
- `border` 控制底部 1px 分隔线，默认显示，分隔线会自动避开左侧图标。

```vue
<template>
	<sn-cell title="单元格" value="内容" label="描述信息" right-icon="arrow-right"
		@click="onCellClick"></sn-cell>
</template>

<script lang="uts" setup>
function onCellClick(name: string | number): void {
	console.log(name)
}
</script>
```

**更多演示请下载 demo 查看**

## 自定义各部分内容

每个区域均可通过插槽自定义，插槽优先级高于同名属性。

```vue
<template>
	<sn-cell right-icon="arrow-right">
		<template #icon>
			<sn-icon name="user-line" size="18" color="#fff"></sn-icon>
		</template>
		<template #title>
			<sn-text type="title" font-size="$14">自定义标题</sn-text>
		</template>
		<template #value>
			<sn-text type="primary" font-size="$12">自定义内容</sn-text>
		</template>
	</sn-cell>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 单元格标题 | String \| Number | `''` | - |
| label | 标题下方的描述信息 | String \| Number | `''` | - |
| value | 右侧内容 | String \| Number | `''` | - |
| icon | 左侧图标名称 | String | `''` | - |
| disabled | 是否禁用，禁用后不触发点击且整体半透明 | Boolean | `false` | `true` \| `false` |
| border | 是否显示底部 1px 分隔线 | Boolean | `true` | `true` \| `false` |
| clickable | 是否开启可点击状态（显示按压反馈） | Boolean | `false` | `true` \| `false` |
| rightIcon | 右侧图标名称，设置后单元格自动可点击 | String | `''` | - |
| arrowDirection | 箭头方向，仅对 `arrow-right` 图标生效 | String | `right` | `left` \| `up` \| `down` \| `right` |
| stop | 点击时是否阻止事件冒泡 | Boolean | `true` | `true` \| `false` |
| name | 点击事件携带的标识符 | String \| Number | `''` | - |
| bgColor | 背景颜色 | String | `var(--sn-front)` | - |
| padding | 内边距，空时使用组件默认内边距（随间距乘数缩放） | String | `''` | - |
| hoverStyle | 按压时应用的样式 | UTSJSONObject \| String | `background: var(--sn-info);` | - |
| hoverStopPropagation | 按压态是否阻止向父节点传播 | Boolean | `false` | `true` \| `false` |
| hoverStartTime | 按压态启动延时（ms） | Number | `0` | - |
| hoverStayTime | 松手后按压态保持时长（ms） | Number | `0` | - |
| hoverTransTime | 按压态过渡动画时长，支持 `$` 简写，空时取动画短时长 | String \| Number | `''` | - |
| iconStyle | 自定义左侧图标样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 左侧图标外部类 | String | `''` | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 标题外部类 | String | `''` | - |
| rightIconStyle | 自定义右侧图标样式 | UTSJSONObject \| String | `''` | - |
| rightIconClass | 右侧图标外部类 | String | `''` | - |
| customStyle | 自定义单元格根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 单元格根节点外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| click | (name: string \| number) => Void | 点击单元格时触发，参数为 `name` 标识符；禁用时不触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| icon | 替换左侧图标 |
| title | 替换标题内容 |
| label | 替换描述信息内容 |
| value | 替换右侧内容 |
| right-icon | 替换右侧图标 |

<DemoPhone name="sn-cell" />
