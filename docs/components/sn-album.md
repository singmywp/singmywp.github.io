# Album  相册

## 基础用法

- 用于展示一组图片（九宫格/相册），常用于动态、详情页的图片列表。
- 默认 3 列等宽方形排列，支持自定义列数、间距与圆角。
- 图片加载中或加载失败时显示占位图标（或占位图）。
- 点击图片默认调用系统图片预览，可通过 `preview` 关闭；超出 `maxRow` 行数时最后一张图上显示 `+n` 数量遮罩。

```vue
<template>
	<sn-album :urls="urls"></sn-album>
</template>
<script lang="uts" setup>
const urls: string[] = [
	'https://example.com/1.jpg',
	'https://example.com/2.jpg',
	'https://example.com/3.jpg'
]
</script>
```

**更多演示请下载 demo 查看**

## 最大行数与长按菜单

设置 `max-row` 后，超出 `maxRow × rowCount` 的图片折叠，最后一张上显示 `+n` 遮罩；`preview-actions` 设置预览时长按图片弹出的操作菜单。

```vue
<template>
	<sn-album :urls="urls" :max-row="2" :preview-actions="actions"></sn-album>
</template>
<script lang="uts" setup>
const actions: string[] = ['保存图片', '发送给朋友']
</script>
```

## 点击事件

`preview` 设为 `false` 可关闭默认预览，仅监听 `@click` 事件（参数为图片索引）。

```vue
<template>
	<sn-album :urls="urls" :preview="false" @click="onClick"></sn-album>
</template>
<script lang="uts" setup>
function onClick(index: number): void {
	console.log(`点击了第 ${index + 1} 张图片`)
}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| urls | 图片地址列表 | String[] | `[]` | - |
| rowCount | 每行图片数量 | Number | `3` | - |
| maxRow | 最大行数，超出部分折叠为数量遮罩（0 表示不限制） | Number | `0` | - |
| space | 图片间距，支持 `$` 简写 | String \| Number | `$6` | - |
| borderRadius | 图片圆角，支持 `$` 简写 | String \| Number | `$8` | - |
| imageMode | 图片裁剪缩放模式（同内置 image 组件 mode） | String | `aspectFill` | `aspectFill` \| `aspectFit` \| `scaleToFill` \| `widthFix` 等 |
| lazyLoad | 是否懒加载图片 | Boolean | `true` | `true` \| `false` |
| preview | 点击图片时是否调用系统图片预览 | Boolean | `true` | `true` \| `false` |
| showMore | 超出 maxRow 时是否在最后一张上显示 `+n` 遮罩 | Boolean | `true` | `true` \| `false` |
| previewActions | 预览时长按图片弹出的操作菜单文本列表（非空时启用长按菜单） | String[] | `[]` | - |
| placeholderImage | 占位图片地址（加载中/加载失败时显示，优先于占位图标） | String | `''` | - |
| placeholderIcon | 占位图标名称 | String | `image-line` | - |
| placeholderColor | 占位区背景颜色 | String | `$info` | - |
| placeholderIconColor | 占位图标颜色 | String | `$infoDark` | - |
| placeholderIconSize | 占位图标大小，支持 `$` 简写 | String \| Number | `24px` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类（external-class：`custom-class`） | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| click | (index: number) => Void | 点击图片时触发，参数为图片在 `urls` 中的索引；`preview` 为 true 时同时打开系统图片预览 |

<DemoPhone name="sn-album" />
