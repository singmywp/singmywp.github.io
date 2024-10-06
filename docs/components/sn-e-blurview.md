# Blurview 高斯模糊

:::info 扩展插件
SinleUI 框架实现高斯模糊/毛玻璃效果的组件都依赖此插件，故 HBuilderX 安装 SinleUI 插件时会自动安装此插件，无需手动下载
:::

---

## 基础用法

- 快速展示模糊内容，实现毛玻璃效果。一般需要设置其为 `fixed` 定位且背景颜色透明。

``` vue
<template>
	<sn-e-blurview :radius="50"
	style="position: fixed;top:0;right:0;left:0;height: 100px;">
		<sn-text text="内部内容不会被模糊处理，而是会悬浮在毛玻璃上，下方的元素会模糊"></sn-text>
	</sn-e-blurview>
</template>
```

**更多演示请下载 demo 查看**

## 兼容性

| Web  | Android |
| :--- | :------ |
| √    | √       |

## 属性

| 参数   | 说明     | 类型   | 默认值 | 可选值 |
| :----- | :------- | :----- | :----- | :----- |
| radius | 模糊半径 | Number | `15`   | -      |

## 插槽

| 名称    | 说明                               |
| :------ | :--------------------------------- |
| default | 放置毛玻璃上的内容，不会被模糊处理 |



<DemoPhone name="sn-e-blurview" />