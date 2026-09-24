# Label Checkbox  标签多选

> [查看 sn-label-checkbox 的 2.0 版本差异](/differences/components/sn-label-checkbox)

## 基础用法

- 标签形式的多选组件，与 Checkbox 相比只需提供数据即可，使用更简单
- 通过 `data` 数组驱动选项，`v-model` 绑定选中项索引数组（自动按升序排列）
- 选中项显示图标并高亮文本；`disabled` 禁用整组，`data` 项的 `disabled` 字段可单独禁用某一项
- 颜色、尺寸类属性均支持 `$` 简写（如 `item-bg-color="$successLight"`、`text-size="$16"`）

```vue
<template>
	<sn-label-checkbox v-model="selected" :data="data"></sn-label-checkbox>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 选中的选项索引数组 | number[] | `[]` | - |
| data | 选项数据数组 | [[SnDataItem@api]][] | `[]` | - |
| disabled | 是否禁用所有选项 | Boolean | `false` | `true` \| `false` |
| itemBgColor | 选项背景颜色 | String | `$front` | - |
| activeItemBgColor | 选项按压时的背景颜色 | String | `$info` | - |
| disabledItemBgColor | 禁用选项的背景颜色 | String | `$disabled` | - |
| disabledTextColor | 禁用选项的文本颜色 | String | `$disabledText` | - |
| disabledIconColor | 禁用且选中选项的图标颜色 | String | `$disabledText` | - |
| itemPadding | 选项内边距 | String | `12px 20px` | - |
| textColor | 选项文本颜色 | String | `$text` | - |
| activeTextColor | 选中时选项文本颜色 | String | `$primary` | - |
| textSize | 选项文本大小 | String \| Number | `$14` | - |
| icon | 选中项显示的图标名称，为空时不显示图标 | String | `check-line` | - |
| iconPosition | 图标位置 | String | `left` | `left` \| `right` |
| iconColor | 选中项图标颜色 | String | `$primary` | - |
| iconSize | 图标大小 | String \| Number | `$16` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| itemStyle | 自定义每个选项的样式 | UTSJSONObject \| String | `''` | - |
| itemClass | 自定义每个选项的样式类 | String | `''` | - |

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
| change | (value: number[]) => Void | 选中项变化时触发，携带最新的选中索引数组 |

<DemoPhone name="sn-label-checkbox" />
