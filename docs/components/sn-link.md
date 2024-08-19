# Link 链接
## 基本使用
- 用于创建可点击的文本链接。
- 可添加图标前缀和后缀。
```vue
<template>
	<sn-link text="这是一个链接" href="https://www.example.com"></sn-link>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数            | 说明                                             | 类型          | 默认值              | 可选值            |
| --------------- | ------------------------------------------------ | ------------- | ------------------- | ----------------- |
| text            | 链接文本内容                                     | String        | -                   | -                 |
| prefixIcon      | 链接前图标名称                                   | String        | -                   | -                 |
| suffixIcon      | 链接后图标名称                                   | String        | -                   | -                 |
| href            | 链接跳转地址                                     | String        | -                   | -                 |
| color           | 链接文本颜色                                     | String        | `$primaryDark`      | -                 |
| size            | 链接文本大小                                     | String        | `$3`                | -                 |
| underline       | 链接文本是否显示下划线                           | Boolean       | `false`             | `true` \| `false` |
| local           | 是否使用本地内置 Webview 打开（仅对Web URL生效） | Boolean       | `false`             | `true` \| `false` |
| customStyle     | 自定义链接样式                                   | UTSJSONObject | `{margin: '0 5px'}` | -                 |
| customTextStyle | 自定义链接文本样式                               | UTSJSONObject | `{}`                | -                 |
| customIconStyle | 自定义链接图标样式                               | UTSJSONObject | `{}`                | -                 |
## 插槽
| 名称   | 说明           |
| ------ | -------------- |
| prefix | 替换链接前图标 |
| suffix | 替换链接后图标 |
<DemoPhone name="sn-link" />