# Signature 签名
## 基本使用
- 基于 canvas 的签名板，适配各端
- 内置一套精美模版，提供 20+ 属性，支持插槽定制操作栏，任意搭配
```vue
<template>
	<sn-signature></sn-signature>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                  | 说明                   | 类型          | 默认值                                 | 可选值            |
| --------------------- | ---------------------- | ------------- | -------------------------------------- | ----------------- |
| text                  | 签名板上的提示文本     | String        | `请签名`                               | -                 |
| textFont              | 提示文本的字体         | String        | -                                      | -                 |
| textColor             | 提示文本颜色           | String        | `$line`                                | -                 |
| penSize               | 笔触大小               | Number        | `3`                                    | -                 |
| penColor              | 笔触颜色               | String        | `$text`                                | -                 |
| height                | 签名板高度             | String        | `150px`                                | -                 |
| bgColor               | 签名板背景颜色         | String        | `$front`                               | -                 |
| disabled              | 是否禁用签名板         | Boolean       | `false`                                | `true` \| `false` |
| borderRadius          | 签名板圆角大小         | String        | `$normal`                              | -                 |
| buttonSpacing         | 操作按钮之间的间距     | String        | `5px`                                  | -                 |
| maxHistory            | 最大历史记录数         | Number        | `20`                                   | -                 |
| clearTip              | 清空签名的提示信息     | String        | `清空后数据无法找回，您确定要清空吗？` | -                 |
| showClearTip          | 是否显示清空提示信息   | Boolean       | `true`                                 | `true` \| `false` |
| showAction            | 是否显示操作按钮区域   | Boolean       | `true`                                 | `true` \| `false` |
| showUndo              | 是否显示撤销按钮       | Boolean       | `true`                                 | `true` \| `false` |
| showRedo              | 是否显示重做按钮       | Boolean       | `true`                                 | `true` \| `false` |
| showConfirm           | 是否显示确定按钮       | Boolean       | `true`                                 | `true` \| `false` |
| showClear             | 是否显示清空按钮       | Boolean       | `true`                                 | `true` \| `false` |
| undoText              | 撤销按钮文本           | String        | `撤销`                                 | -                 |
| redoText              | 重做按钮文本           | String        | `重做`                                 | -                 |
| clearText             | 清空按钮文本           | String        | `清空`                                 | -                 |
| confirmText           | 确定按钮文本           | String        | `确定`                                 | -                 |
| customStyle           | 自定义签名板样式       | UTSJSONObject | `{}`                                   | -                 |
| customCanvasStyle     | 自定义画布样式         | UTSJSONObject | `{}`                                   | -                 |
| customActionAreaStyle | 自定义操作按钮区域样式 | UTSJSONObject | `{}`                                   | -                 |
## 插槽

| 名称   | 说明                             |
| ------ | -------------------------------- |
| action | 在这里放置内容以替换原有的操作栏 |

## 事件

| 名称    | 类型       | 说明     |
| :------ | :--------- | :------- |
| confirm | () => void | 确定事件 |
| undo    | () => void | 撤销事件 |
| redo    | () => void | 重做事件 |
| clear   | () => void | 清空事件 |

## 方法

| 名称      | 参数 | 返回值 | 描述                     |
| :-------- | :--- | :----- | :----------------------- |
| undo      | -    | -      | 撤销上一笔签名           |
| redo      | -    | -      | 重做上一笔撤销的签名     |
| clear     | -    | -      | 清空签名板               |
| getBase64 | -    | String | 将签名导出为 base64 图片 |

<DemoPhone name="sn-signature" />