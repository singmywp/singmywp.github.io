# SVG 可缩放矢量图形

* 主要因为 uni-app x 内置的 `image` 组件不支持 `svg` 格式，故使用此组件
* SinleUI 框架基于 SVG 实现的组件都依赖此组件，故 HBuilderX 安装 SinleUI 插件时会自动安装此组件


```vue
<template>
	<sn-e-svg src="/static/svg1.svg"></sn-e-svg>
</template>
```

## 兼容性

| Web  | Android |
| :--- | :------ |
| √    | √       |

## 属性

| 参数 | 说明           | 类型   | 默认值 | 可选值 |
| ---- | -------------- | ------ | ------ | ------ |
| src  | SVG 图片的路径 | String | -      | -      |