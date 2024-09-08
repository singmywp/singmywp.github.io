# Menu Item 菜单项

## 基础用法
- 主要作为菜单型组件的子项，可设置图标、文本、背景颜色等多个属性
- 设置 `listMode` 后支持作为 `list-view` 的子组件

```vue
<template>
	<sn-menu-item text="菜单项文本" icon="check-line"></sn-menu-item>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数              | 说明                        | 类型          | 默认值          | 可选值            |
| ----------------- | --------------------------- | ------------- | --------------- | ----------------- |
| listMode          | 是否作为 `list-view` 的子项 | Boolean       | `false`         | `true` \| `false` |
| icon              | 菜单项图标名称              | String        | -               | -                 |
| text              | 菜单项文本                  | String        | -               | -                 |
| borderRadius      | 菜单项圆角大小              | String        | -               | -                 |
| iconColor         | 菜单项图标颜色              | String        | `$text`         | -                 |
| iconSize          | 菜单项图标大小              | String        | `$4`            | -                 |
| textColor         | 菜单项文本颜色              | String        | `$text`         | -                 |
| textSize          | 菜单项文本大小              | String        | `$2`            | -                 |
| textAlign         | 菜单项文本对齐方式          | String        | `left`          | -                 |
| padding           | 菜单项内边距                | String        | `12px 15px`     | -                 |
| disabled          | 是否禁用菜单项              | Boolean       | `false`         | `true` \| `false` |
| bgColor           | 菜单项背景颜色              | String        | `$front`        | -                 |
| activeBgColor     | 激活时的菜单项背景颜色      | String        | `$info`         | -                 |
| disabledBgColor   | 禁用时的菜单项背景颜色      | String        | `$disabled`     | -                 |
| disabledTextColor | 禁用时的菜单项文本颜色      | String        | `$disabledText` | -                 |
| disabledIconColor | 禁用时的菜单项图标颜色      | String        | `$disabledText` | -                 |
| customIconStyle   | 自定义图标样式              | UTSJSONObject | `{}`            | -                 |
| customTextStyle   | 自定义文本样式              | UTSJSONObject | `{}`            | -                 |
| customStyle       | 自定义样式                  | UTSJSONObject | `{}`            | -                 |
## 插槽
| 名称    | 说明           |
| ------- | -------------- |
| default | 替换菜单项内容 |



<DemoPhone name="sn-menu-item" />