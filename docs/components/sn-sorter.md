# Sorter  排序

> [查看 sn-sorter 的 2.0 版本差异](/differences/components/sn-sorter)

## 基础用法

- 排序组件，常用于列表排序切换，点击后通过 `v-model` 在无序（`0`）、升序（`1`）、降序（`-1`）之间循环切换
- 默认在升序和降序之间切换；`allow-reset` 开启后为无序、升序、降序三态循环；`desc-first` 控制首次点击进入降序
- 箭头通过颜色区分激活方向，`active-color` / `inactive-color` 自定义

```vue
<template>
	<sn-sorter v-model="value" label="发布时间" @change="onChange"></sn-sorter>
</template>
```

**更多演示请下载 demo 查看**

## 自定义内容

默认插槽可替换标签内容，`arrow` 作用域插槽可完全自定义箭头区域（作用域参数 `{ value: number }`）。

```vue
<template>
	<sn-sorter v-model="value" allow-reset>
		<view class="slot-label">
			<sn-icon name="filter-3-line" :size="16" color="$primary" />
			<text>筛选结果</text>
		</view>
	</sn-sorter>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 排序状态：`0` 无序、`1` 升序、`-1` 降序 | Number | `0` | `0` \| `1` \| `-1` |
| label | 排序标签文本 | String | `''` | - |
| allowReset | 是否允许重置为无序（开启后按无序、升序、降序三态循环） | Boolean | `false` | `true` \| `false` |
| descFirst | 首次点击是否进入降序 | Boolean | `false` | `true` \| `false` |
| activeColor | 激活方向箭头的颜色 | String | `` `$primary` `` | - |
| inactiveColor | 非激活方向箭头的颜色 | String | `` `$textLight` `` | - |
| arrowSize | 箭头尺寸 | String \| Number | `$20` | - |
| disabled | 是否禁用 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点样式类 | String | `''` | - |
| labelStyle | 自定义标签样式 | UTSJSONObject \| String | `''` | - |
| labelClass | 自定义标签样式类 | String | `''` | - |
| arrowStyle | 自定义箭头区域样式 | UTSJSONObject \| String | `''` | - |
| arrowClass | 自定义箭头区域样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number) => Void | 排序状态变化时触发，携带新状态值（`0` 无序、`1` 升序、`-1` 降序） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换标签文本内容 |
| arrow | 替换箭头区域，作用域参数 `{ value: number }` 为当前排序状态 |

<DemoPhone name="sn-sorter" />
