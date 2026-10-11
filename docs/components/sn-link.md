# Link  链接

> [查看 sn-link 的 2.0 版本差异](/differences/components/sn-link)

## 基础用法

可点击跳转的文本链接，默认以主题深主色显示。

- 支持系统方式打开与内置 Webview 打开两种跳转方式
- 支持前后缀图标，图标大小随链接字号自动匹配
- 支持下划线与自定义按压配色；跳转地址为空时点击不跳转并派发错误事件

```vue
<template>
	<sn-link text="这是一个链接" href="https://www.example.com"></sn-link>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 链接文本内容 | String | `''` | - |
| href | 链接跳转地址，为空时点击触发 `error` 事件 | String | `''` | - |
| prefixIcon | 链接前缀图标名称 | String | `''` | - |
| suffixIcon | 链接后缀图标名称 | String | `''` | - |
| color | 链接文本与图标颜色 | String | `$primaryDark` | - |
| size | 链接文本大小 | String \| Number | `$14` | - |
| underline | 是否显示下划线 | Boolean | `false` | `true` \| `false` |
| hoverBgColor | 按压时背景颜色，设置后显示圆角背景点击态 | String | `''` | - |
| hoverTextColor | 按压时文字与图标颜色 | String | `''` | - |
| local | 是否使用内置 Webview 打开链接 | Boolean | `false` | `true` \| `false` |
| customStyle | 自定义链接根节点样式 | UTSJSONObject \| String | `''` | - |
| textStyle | 自定义链接文本样式 | UTSJSONObject \| String | `''` | - |
| textClass | 链接文本外部类 | String | `''` | - |
| iconStyle | 自定义图标样式 | UTSJSONObject \| String | `''` | - |
| iconClass | 图标外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| error | (message: string) => Void | `href` 为空时点击触发，参数为错误信息 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换链接文本内容 |
| prefix | 替换链接前缀图标 |
| suffix | 替换链接后缀图标 |

<DemoPhone name="sn-link" />
