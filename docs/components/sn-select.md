# Select  选择框

> [查看 sn-select 的 2.0 版本差异](/differences/components/sn-select)

## 基础用法

- 用于简单的单选数据选择：点击选择框后，在锚点下方弹出选项列表（下方空间不足时自动翻转到上方），点选即完成选择。
- v-model 绑定选中项索引；数据源为 `SnDataItem[]`，支持 `icon` 图标与 `disabled` 禁用项。
- 弹出层展开时自动滚动定位到当前选中项；选项列表由 `sn-cell` 渲染，选中态支持 `bg`（背景高亮）与 `check`（前置对钩）两种模式。
- 颜色与尺寸均支持 `$` 简写语法；使用时需放在 `sn-page` 根节点下（内含弹出层）。

```vue
<template>
	<sn-select v-model="value" :data="data" width="200px"></sn-select>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中项的索引 | Number | `0` | - |
| data | 选项数据源 | [[SnDataItem@api]][] | `[]` | - |
| width | 选择框宽度（弹出层宽度与其一致） | String \| Number | `100px` | - |
| bgColor | 选择框背景颜色 | String | `$front` | - |
| popBgColor | 弹出层背景颜色 | String | `$front` | - |
| selectedMode | 选中项展示模式：bg 为选中项背景高亮，check 为选中项前置对钩图标 | String | `bg` | `bg` \| `check` |
| selectedItemBgColor | 选中项背景颜色（selectedMode 为 bg 时生效） | String | `$infoDark` | - |
| selectedItemTextColor | 选中项文字颜色（selectedMode 为 bg 时生效） | String | `$primaryDark` | - |
| checkIconColor | 选中项对钩图标颜色（selectedMode 为 check 时生效） | String | `$primary` | - |
| checkIconSize | 选中项对钩图标大小（selectedMode 为 check 时生效） | String \| Number | `$14` | - |
| textSize | 选择框文本大小 | String \| Number | `$14` | - |
| textColor | 选择框文本颜色（下拉箭头同色） | String | `$text` | - |
| borderRadius | 选择框与弹出层圆角大小 | String \| Number | `$8` | - |
| maxHeight | 弹出层选项列表最大高度 | String \| Number | `500px` | - |
| maskOpacity | 弹出层蒙层透明度 | Number | `0` | `0~1` |
| aniTime | 弹出层动画时长 | String \| Number | `$200` | - |
| disabled | 是否禁用选择框（整体半透明且不可点击） | Boolean | `false` | `true` \| `false` |
| itemBorder | 选项之间是否显示分隔线（最后一项不显示） | Boolean | `true` | `true` \| `false` |
| itemStyle | 自定义选项（sn-cell）样式 | UTSJSONObject \| String | - | - |
| itemClass | 自定义选项外部样式类 | String | - | - |
| itemHoverStyle | 自定义选项按压态样式 | UTSJSONObject \| String | `background: var(--sn-info);` | - |
| itemTextStyle | 自定义选项文字样式 | UTSJSONObject \| String | - | - |
| itemIconStyle | 自定义选项图标样式 | UTSJSONObject \| String | - | - |
| hoverStyle | 选择框按压态样式 | UTSJSONObject \| String | `background: var(--sn-info);` | - |
| hoverStartTime | 按压态启动延时（ms） | Number | `50` | - |
| hoverStayTime | 松手后按压态保持时长（ms） | Number | `0` | - |
| hoverTransTime | 按压态过渡动画时长 | String \| Number | - （默认取 `$snui.aniTimeShort`） | - |
| customStyle | 自定义选择框根节点样式 | UTSJSONObject \| String | - | - |
| textStyle | 自定义选择框文本样式 | UTSJSONObject \| String | - | - |
| textClass | 自定义选择框文本外部样式类 | String | - | - |
| popStyle | 自定义弹出层容器样式 | UTSJSONObject \| String | - | - |
| popClass | 自定义弹出层容器外部样式类 | String | - | - |

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
| change | (value: Number) => Void | 选中项变化时触发，`value` 即为选中项索引 |

<DemoPhone name="sn-select" />
