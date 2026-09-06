# RegionPicker  地区选择器

> [查看 sn-region-picker 的 2.0 版本差异](/differences/components/sn-region-picker)

## 基础用法

- 从底部弹出的省/市/县三级行政区划滚动选择器，基于 `sn-drawer` + `sn-region-picker-view` 封装（视图懒渲染，首开性能更佳），内置中国省市区数据，无需业务传入数据源。
- v-model 绑定各区划代码数组（String[]，按列顺序排列）；`change` 事件额外携带 `SnRegionDetail`（含 `codes` 与对应 `names`）。
- 仅点击「确定」按钮才把当前选择写入 v-model 并触发 `change` 事件；点击「取消」、遮罩或关闭按钮均不写入。
- `mode` 控制显示省、市、县（区）列的组合，支持汉字或位掩码；列始终以省开头（mode 未含省时自动补充省列）。直辖市在市列显示自身，区县列为其下辖区县。
- 省列变化时市/县列自动级联重置为该级首项；v-model 为空时自动填充各级首项。
- 使用时需放在 `sn-page` 根节点下。

```vue
<template>
	<sn-region-picker ref="pickerEle" v-model="value" title="请选择地区" @change="onChange"></sn-region-picker>
</template>
```

**更多演示请下载 demo 查看**

## 模式组合

`mode` 属性控制显示省、市、县（区）列的组合，支持传入汉字或位掩码数字：

- **汉字组合**：支持 `省`、`市`、`县`、`区`（`县`/`区` 等价），如 `省市`、`省县`。
- **位掩码**：`1` 省、`2` 市、`4` 县（区），可传按位或运算表达式的结果（如 `7` 即省市县），也支持英文 `province` / `city` / `county` 混合写法。

```vue
<template>
	<sn-region-picker v-model="value1" mode="省市"></sn-region-picker>
	<sn-region-picker v-model="value2" :mode="1"></sn-region-picker>
	<sn-region-picker v-model="value3" :mode="7"></sn-region-picker>
</template>
```

默认 `mode` 为 `7`（省市县）。

## 过滤项

传入 `customFilter` 函数可对各列选项数组进行过滤（如剔除特定省份）。此函数在每一列均会执行一次，请做好条件判断。

函数类型：`(type: SnRegionLevel, columns: SnDataItem[]) => SnDataItem[]`

- type：当前列类型，为 `province` / `city` / `county` 枚举值。
- columns：当前列的子项列表（`SnDataItem[]`，`id` 为区划代码、`text` 为区划名称）。

```vue
<template>
	<sn-region-picker v-model="value" :custom-filter="filter"></sn-region-picker>
</template>
<script lang="uts" setup>
	const filter = (type: SnRegionLevel, columns: SnDataItem[]): SnDataItem[] => {
		if (type == 'province') {
			return columns.filter((item: SnDataItem): boolean => item.id != '110000')
		}
		return columns
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 选中地区的区划代码数组（按省、市、县列顺序） | SnRegionValue | `[]` | - |
| mode | 选择器模式（详见模式组合） | String \| Number | `7` | - |
| customFilter | 自定义过滤项函数（详见过滤项） | Function | `null` | - |
| disabled | 是否禁用选择器（选项不可滚动、按钮不可点击） | Boolean | `false` | `true \| false` |
| maskClose | 是否可以通过点击蒙层关闭选择器 | Boolean | `true` | `true \| false` |
| maskOpacity | 蒙层透明度 | Number | `0.4` | `0~1` |
| preventBack | 是否阻止返回键/返回手势关闭选择器 | Boolean | `false` | `true \| false` |
| height | 选择器整体高度（含标题与按钮区域） | String \| Number | `350px` | - |
| title | 选择器标题，为空时不显示标题 | String | - | - |
| titleAlign | 标题对齐方式 | String | `center` | `left \| center \| right` |
| titleColor | 标题颜色 | String | `$title` | - |
| titleSize | 标题大小 | String \| Number | `$14` | - |
| cancelText | 取消按钮文字 | String | `取消` | - |
| confirmText | 确定按钮文字 | String | `确定` | - |
| cancelTextSize | 取消按钮文字大小 | String \| Number | `$14` | - |
| confirmTextSize | 确定按钮文字大小 | String \| Number | `$14` | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` | `true \| false` |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | `true \| false` |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true \| false` |
| columnSpacing | 列之间的间距 | String \| Number | `10px` | - |
| actionSpacing | 取消/确定按钮之间的间距 | String \| Number | `10px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight（亮色模式）/ $lineText（暗黑模式）` | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| headerStyle | 自定义标题栏样式 | UTSJSONObject \| String | - | - |
| headerClass | 外部样式类 | String | - | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | - | - |
| titleClass | 外部样式类 | String | - | - |
| closeButtonStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | - | - |
| closeButtonClass | 外部样式类 | String | - | - |
| actionsStyle | 自定义底部按钮栏样式 | UTSJSONObject \| String | - | - |
| actionsClass | 外部样式类 | String | - | - |
| cancelButtonStyle | 自定义取消按钮样式 | UTSJSONObject \| String | - | - |
| cancelButtonClass | 外部样式类 | String | - | - |
| confirmButtonStyle | 自定义确定按钮样式 | UTSJSONObject \| String | - | - |
| confirmButtonClass | 外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 外部样式类 | String | - | - |

:::type-fields SnRegionValue

```typescript
type SnRegionValue = string[]
```

选中值（`v-model`）：各级区划代码数组。

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnRegionValue]], detail: [[SnRegionDetail]]) => Void | 点击确定后，选中值写入 v-model 时触发，`detail` 含代码与名称 |
| confirm | () => Void | 点击确定按钮时触发（在 change 之前触发） |
| cancel | () => Void | 点击取消按钮时触发 |
| open | () => Void | 选择器打开后触发 |
| close | () => Void | 选择器关闭后触发 |
| clickoverlay | () => Void | 点击蒙层时触发 |
| beforeenter | () => Void | 进入动画开始前触发 |
| enter | () => Void | 进入动画开始时触发 |
| afterenter | () => Void | 进入动画结束后触发 |
| beforeleave | () => Void | 离开动画开始前触发 |
| leave | () => Void | 离开动画开始时触发 |
| afterleave | () => Void | 离开动画结束后触发 |

:::type-fields SnRegionDetail

`change` 事件返回详情：`codes`（各级代码数组）、`names`（各级名称数组）。

---

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开选择器（打开前会将 v-model 当前值复制为内部临时值，仅确定后才写回） |
| close | - | - | 关闭选择器 |

---

## sn-region-picker-view 地区选择器容器

`sn-region-picker-view` 基于 `sn-picker-view` 封装，是地区选择的核心视图，可独立在页面内使用。滚动选择实时生效，`change` 防抖 120ms 后触发。

```vue
<template>
	<sn-region-picker-view v-model="value" @change="onChange"></sn-region-picker-view>
</template>
```

### sn-region-picker-view 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 选中地区的区划代码数组（按列顺序） | SnRegionValue | `[]` | - |
| mode | 选择器模式（同 sn-region-picker） | String \| Number | `7` | - |
| customFilter | 自定义过滤项函数 | Function | `null` | - |
| disabled | 是否禁用选择器容器 | Boolean | `false` | `true \| false` |
| height | 选择器容器高度 | String \| Number | `250px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight（亮色模式）/ $lineText（暗黑模式）` | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| columnSpacing | 列间距 | String \| Number | `10px` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 外部样式类 | String | - | - |

### sn-region-picker-view 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnRegionValue]], detail: [[SnRegionDetail]]) => Void | 滚动选择后触发（防抖 120ms），`detail` 含代码与名称 |

## 类型

### SnRegionLevel

`'province' | 'city' | 'county'` —— 列类型枚举。

### SnRegionNode

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| code | String | 行政区划代码 |
| name | String | 区划名称 |
| children | [[SnRegionNode]][] | 下级区划 |

:::type-fields SnRegionNode

行政区划节点：`code`（区划代码）、`name`（名称）、`children`（子级节点）。

:::

### SnRegionValue

`String[]`：选中地区各级区划代码数组（按列顺序）。

### SnRegionDetail

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| codes | String[] | 选中各级区划代码 |
| names | String[] | 选中各级区划名称（无对应项时为空字符串） |

<DemoPhone name="sn-region-picker" />
