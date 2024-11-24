# Actionsheet 操作菜单
## 基础用法
- 从底部弹出一个操作菜单，供用户选择。
- 本组件类似于 uni.showActionSheet API，不同的是样式更倾向于 iOS 而非微信，且样式配置更加自由
``` vue
<template>
	<sn-actionsheet :actions="actions" @clickItem="handleClick">
  </sn-actionsheet>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数         | 说明                       | 类型                       | 默认值      | 可选值            |
| :----------- | :------------------------- | :------------------------- | :---------- | :---------------- |
| title        | 操作菜单标题，为空则不显示 | String                     | -           | -                 |
| actions      | 操作菜单项数组             | Array\<[SnActionsheetItem](/api/types/components#snactionsheetitem)\> | `[]`        | -                 |
| showCancel   | 是否显示取消按钮           | Boolean                    | `true`      | `true` \| `false` |
| titleColor   | 标题颜色                   | String                     | `$title`    | -                 |
| titleSize    | 标题大小                   | String                     | `$2`        | -                 |
| bgColor      | 背景颜色                   | String                     | `$info`     | -                 |
| itemTextSize | 选项文字大小               | String                     | `$3`        | -                 |
| itemPadding  | 选项内边距                 | String                     | `14px 10px` | -                 |
| cancelText   | 取消按钮文字               | String                     | `取消`      | -                 |
| borderRadius | 圆角大小                   | String                     | `$normal`   | -                 |
| maskOpacity  | 遮罩透明度                 | Number                     | `0.4`       | -                 |
| aniTime      | 动画时长（单位：ms）       | String                     | `$long`     | -                 |
| preventBack  | 是否阻止返回事件           | Boolean                    | `false`     | `true` \|`false`  |
| disabled     | 是否禁用操作菜单           | Boolean                    | `false`     | `true` \|`false`  |
| maskClose    | 点击遮罩是否关闭操作菜单   | Boolean                    | `true`      | `true` \|`false`  |
| customStyle  | 自定义操作菜单样式         | UTSJSONObject              | `{}`        | -                 |
## 事件

| 名称      | 类型                             | 说明               |
| :-------- | :------------------------------- | :----------------- |
| clickMask | () => Void                     | 点击遮罩时触发     |
| clickItem | (e: SnActionsheetItem) => Void | 点击选项时触发     |
| cancel    | () => Void                     | 取消操作时触发     |
| close     | () => Void                     | 操作菜单关闭时触发 |
| open      | () => Void                     | 操作菜单打开时触发 |

## 方法

| 名称   | 参数 | 返回值 | 描述                       |
| :----- | :--- | :----- | :------------------------- |
| open   | -    | -      | 打开操作菜单               |
| close  | -    | -      | 关闭操作菜单               |
| cancel | -    | -      | 关闭操作菜单并触发取消事件 |



<DemoPhone name="sn-actionsheet" />