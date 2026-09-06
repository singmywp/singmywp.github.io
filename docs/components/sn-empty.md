# Empty  缺省页

> [查看 sn-empty 的 2.0 版本差异](/differences/components/sn-empty)

## 基础用法

- 页面处于异常、无内容、加载等状态时给予用户友好提示
- 内置 20 种缺省插图模式，插图以内联 SVG 渲染，可通过 `themeColor` 等属性自由换肤（支持 `$` 主题色简写）
- 提供 `image`、`text`、`action` 三个插槽，可分别替换插图、提示文本与操作区

```vue
<template>
	<sn-empty mode="data" text="Oops! 数据丢失了"></sn-empty>
</template>
```

**更多演示请下载 demo 查看**

## 多模式

目前共支持 20 种模式。

| 模式 | 名称 | 模式 | 名称 |
| --- | --- | --- | --- |
| schedule | 日程 | loading | 加载中 |
| card | 卡包 | message | 消息 |
| favor | 收藏 | star | 喜爱 |
| coupon | 优惠券 | permission | 权限 |
| data | 数据 | record | 记录 |
| location | 位置 | search | 搜索 |
| fail | 载入失败 | server | 服务器 |
| folder | 文件夹 | shopping | 购物车 |
| page1 | 页面丢失1 | network | 无网络 |
| page2 | 页面丢失2 | slow | 网速缓慢 |

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 缺省页模式 | String | `data` | 见上方多模式表 |
| text | 缺省页提示文本 | String | `''` | - |
| textSize | 提示文本字体大小，支持 `$` 前缀按字体乘数缩放，空值时为 14px × 字体乘数 | String \| Number | `''` | - |
| textColor | 提示文本颜色 | String | `''`（空值时为 `$lineText`） | - |
| themeColor | 缺省插图主题色 | String | `$primary` | - |
| hairColor | 缺省插图人物头发颜色 | String | `#483029` | - |
| clothesColor | 缺省插图人物上衣颜色 | String | `#EDA20C` | - |
| trousersColor | 缺省插图人物裤子颜色，空值时同 `themeColor` | String | `''` | - |
| shoesColor | 缺省插图人物鞋子颜色，空值时同 `themeColor` | String | `''` | - |
| itemColor | 缺省插图物品颜色 | String | `#483029` | - |
| skinColor | 缺省插图人物皮肤颜色 | String | `#ffcda5` | - |
| elementColor | 缺省插图元素颜色 | String | `#ffffff` | - |
| imageSize | 缺省插图尺寸，支持 `$` 前缀按间距乘数缩放 | String \| Number | `200px` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| textStyle | 提示文本自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 提示文本外部样式类 | String | `''` | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| image | 替换默认缺省插图 |
| text | 替换默认提示文本 |
| action | 操作区，可放置按钮等操作组件 |

<DemoPhone name="sn-empty" />
