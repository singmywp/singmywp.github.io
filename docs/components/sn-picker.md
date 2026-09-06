# Picker  选择器

> [查看 sn-picker 的 2.0 版本差异](/differences/components/sn-picker)

## 基础用法

- 从底部弹出的多列滚动选择器，基于 `sn-drawer` + `sn-picker-view` 封装，适合数据量较大或较复杂的数据选择；简单数据选择推荐使用 `sn-select` 组件。
- 通过 ref 调用 `open()` 打开，仅点击「确定」按钮才会把当前选择写入 v-model 并触发 `change` 事件；点击「取消」、遮罩或关闭按钮均不写入。
- 支持自定义标题、关闭按钮、取消/确定按钮，以及选项颜色、字号、圆角等样式；颜色与尺寸均支持 `$` 简写语法。
- 使用时需放在 `sn-page` 根节点下。

```vue
<template>
	<sn-picker ref="pickerEle" v-model="value" :data="data" title="请选择" @confirm="onConfirm"></sn-picker>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中的选项索引数组 | Number[] | `[]` | - |
| data | 选择器数据数组，每个子数组代表一列 | [[SnDataItem@api]][][] | `[]` | - |
| disabled | 是否禁用选择器（选项不可滚动、按钮不可点击） | Boolean | `false` | `true` \| `false` |
| maskClose | 是否可以通过点击蒙层关闭选择器 | Boolean | `true` | `true` \| `false` |
| maskOpacity | 蒙层透明度 | Number | `0.4` | `0~1` |
| preventBack | 是否阻止返回键/返回手势关闭选择器 | Boolean | `false` | `true` \| `false` |
| height | 选择器整体高度（含标题与按钮区域） | String \| Number | `350px` | - |
| title | 选择器标题，为空时不显示标题 | String | - | - |
| titleAlign | 标题对齐方式 | String | `center` | `left` \| `center` \| `right` |
| titleColor | 标题颜色 | String | `$title` | - |
| titleSize | 标题大小 | String \| Number | `$14` | - |
| cancelText | 取消按钮文字 | String | `取消` | - |
| confirmText | 确定按钮文字 | String | `确定` | - |
| cancelTextSize | 取消按钮文字大小 | String \| Number | `$14` | - |
| confirmTextSize | 确定按钮文字大小 | String \| Number | `$14` | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` | `true` \| `false` |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | `true` \| `false` |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true` \| `false` |
| columnSpacing | 列之间的间距 | String \| Number | `10px` | - |
| actionSpacing | 取消/确定按钮之间的间距 | String \| Number | `10px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小 | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight`（亮色模式）/ `$lineText`（暗黑模式） | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| headerStyle | 自定义标题栏样式 | UTSJSONObject \| String | - | - |
| headerClass | 自定义标题栏外部样式类 | String | - | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | - | - |
| titleClass | 自定义标题外部样式类 | String | - | - |
| closeButtonStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | - | - |
| closeButtonClass | 自定义关闭按钮外部样式类 | String | - | - |
| actionsStyle | 自定义底部按钮栏样式 | UTSJSONObject \| String | - | - |
| actionsClass | 自定义底部按钮栏外部样式类 | String | - | - |
| cancelButtonStyle | 自定义取消按钮样式 | UTSJSONObject \| String | - | - |
| cancelButtonClass | 自定义取消按钮外部样式类 | String | - | - |
| confirmButtonStyle | 自定义确定按钮样式 | UTSJSONObject \| String | - | - |
| confirmButtonClass | 自定义确定按钮外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 自定义选项外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 自定义列外部样式类 | String | - | - |

:::type-fields SnDataItem

通用数据项类型，全局弹窗操作菜单与多数列表类组件共用（组件侧详见[组件类型](/api/types/component#sndataitem)）。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 项 id |
| text | String | 否 | 显示文本 |
| icon | String | 否 | 图标名 |
| value | String | 否 | 关联值 |
| color | String | 否 | 文本颜色 |
| disabled | Boolean | 否 | 是否禁用 |

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number[]) => Void | 点击确定后，选中值写入 v-model 时触发 |
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

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开选择器（打开前会将 v-model 当前值复制为内部临时值，仅确定后才写回） |
| close | - | - | 关闭选择器 |

---

## sn-picker-view 选择器容器

`sn-picker-view` 是基于官方 `picker-view` 封装的多列选择器容器，可独立在页面内使用，也是 `sn-picker` 的内部核心。扩展了禁用项（滚动到禁用项会回弹）、禁用状态拦截与指示器、选项样式定制；颜色与尺寸均支持 `$` 简写语法。

```vue
<template>
	<sn-picker-view v-model="value" :data="data"></sn-picker-view>
</template>
```

### sn-picker-view 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中的选项索引数组 | Number[] | `[]` | - |
| data | 选择器数据数组，每个子数组代表一列 | [[SnDataItem@api]][][] | `[]` | - |
| disabled | 是否禁用选择器容器（通过透明遮罩拦截操作） | Boolean | `false` | `true` \| `false` |
| height | 选择器容器高度 | String \| Number | `250px` | - |
| itemHeight | 选项高度 | String \| Number | `$50` | - |
| itemBorderRadius | 选项圆角大小（同时作用于指示器圆角） | String \| Number | `$8` | - |
| itemTextColor | 选项文字颜色 | String | `$textLight`（亮色模式）/ `$lineText`（暗黑模式） | - |
| itemTextSize | 选项文字大小 | String \| Number | `$13` | - |
| activeItemTextColor | 激活选项文字颜色 | String | `$text` | - |
| disabledItemTextColor | 禁用选项文字颜色 | String | `$disabledText` | - |
| columnSpacing | 列间距 | String \| Number | `10px` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| itemStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| itemClass | 自定义选项外部样式类 | String | - | - |
| columnStyle | 自定义列样式 | UTSJSONObject \| String | - | - |
| columnClass | 自定义列外部样式类 | String | - | - |

### sn-picker-view 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number[]) => Void | 滚动选择导致选中值变化时触发（实时触发，不等确认） |

### SnDataItem

`data` 中每一项的类型：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| id | String | 选项标识 |
| text | String | 选项显示文字 |
| icon | String | 选项图标 |
| value | String | 选项值 |
| color | String | 选项颜色 |
| disabled | Boolean | 是否禁用该选项（滚动到该选项会回弹） |

<DemoPhone name="sn-picker" />
