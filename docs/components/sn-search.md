# Search 搜索框
## 基础用法
- Search 是基于 Input 的二次封装，比 Input 更为简洁，更方便实现一个搜索框
- 支持输入模式、背景颜色、边框颜色等属性。
```vue
<template>
	<sn-search v-model="searchText"></sn-search>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数              | 说明                                                         | 类型          | 默认值           | 可选值                                                       |
| ----------------- | ------------------------------------------------------------ | ------------- | ---------------- | ------------------------------------------------------------ |
| vModel            | 输入框的值                                                   | String        | ``               | -                                                            |
| placeholder       | 输入框占位文本                                               | String        | `请输入搜索内容` | -                                                            |
| type              | 输入框类型。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`           | `text` \|` number` \|` digit` \|`tel`                        |
| inputmode         | 输入模式。同 [`input`](https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7)。 | String        | `text`           | `none` \|` text` \|` decimal` \|` numeric` \|` tel` \|` search` \|` email` \|`url` |
| padding           | 输入框内边距                                                 | String        | `4px 10px`       | -                                                            |
| textColor         | 输入文本颜色                                                 | String        | -                | -                                                            |
| textSize          | 输入文本大小                                                 | String        | -                | -                                                            |
| loading           | 是否显示加载状态                                             | Boolean       | `false`          | `true` \|`false`                                             |
| disabled          | 是否禁用输入框                                               | Boolean       | `false`          | `true` \|`false`                                             |
| readonly          | 是否只读                                                     | Boolean       | `false`          | `true` \|`false`                                             |
| clearable         | 是否显示清除按钮                                             | Boolean       | `false`          | `true` \|`false`                                             |
| focus             | 是否获得焦点                                                 | Boolean       | `false`          | `true` \| `false`                                            |
| showBorder        | 是否显示边框                                                 | Boolean       | `true`           | `true` \|`false`                                             |
| showActiveBorder  | 是否在输入时显示活动边框                                     | Boolean       | `true`           | `true` \|`false`                                             |
| showCancel        | 是否显示取消按钮                                             | Boolean       | `true`           | `true` \|`false`                                             |
| cancelText        | 取消按钮文本                                                 | String        | `取消`           | -                                                            |
| cancelTextSize    | 取消按钮文本大小                                             | String        | `$2`             | -                                                            |
| cancelTextColor   | 取消按钮文本颜色                                             | String        | `$primaryDark`   | -                                                            |
| bgColor           | 输入框背景颜色                                               | String        | `$info`          | -                                                            |
| activeBgColor     | 活动状态下的背景颜色                                         | String        | `$info`          | -                                                            |
| activeBorderColor | 活动状态下的边框颜色                                         | String        | `transparent`    | -                                                            |
| borderRadius      | 输入框圆角大小                                               | String        | -                | -                                                            |
| borderColor       | 输入框边框颜色                                               | String        | `transparent`    | -                                                            |
| borderWidth       | 输入框边框宽度                                               | String        | `2px`            | -                                                            |
| activeBorder      | 活动状态下的边框样式                                         | String        | `transparent`    | -                                                            |
| cursorColor       | 光标颜色                                                     | String        | `$primary`       | -                                                            |
| prefixIcon        | 前置图标名称                                                 | String        | `search-2-line`  | -                                                            |
| suffixIcon        | 后置图标名称                                                 | String        | -                | -                                                            |
| customStyle       | 自定义搜索框样式                                             | UTSJSONObject | {}               | -                                                            |
| customInputStyle  | 自定义内部输入框样式                                         | UTSJSONObject | {}               | -                                                            |

## 插槽

| 名称   | 说明                         |
| ------ | ---------------------------- |
| prefix | 替换输入框内部原有的前置图标 |
| suffix | 替换输入框内部原有的后置图标 |

## 事件

| 事件名       | 类型                                   | 说明                                                                    |
| ------------ | -------------------------------------- | ----------------------------------------------------------------------- |
| focus        | (event: UniInputFocusEvent) => Void   | 输入框聚焦时触发，`event.detail = { value, height }`，height 为键盘高度 |
| blur         | (event : UniInputBlurEvent)=>Void`    | 输入框失去焦点时触发，`event.detail = {value: value}`                   |
| confirm      | (event : UniInputConfirmEvent)=>Void` | 点击完成按钮时触发，`event.detail = {value: value}`                     |
| cancel       | ()=>Void                             | 点击取消按钮时触发                                                      |
| change       | (data : String)=>Void                  | 数据变化时触发                                                          |
| suffix-click | ()=>Void                             | 点击后置图标时触发                                                      |

<DemoPhone name="sn-search" />