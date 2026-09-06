# Blurview  高斯模糊

> [查看 sn-e-blurview 的 2.0 版本差异](/differences/components/sn-e-blurview)

## 基础用法

- 毛玻璃（高斯模糊）容器组件，对组件**背后的内容**进行模糊处理，插槽内的内容悬浮在毛玻璃上、不会被模糊。
- 一般需要设置为 `fixed`（或 `absolute`）定位，并通过 `custom-style` 给出半透明背景色，模糊效果才明显。
- 组件实质上是一个毛玻璃背景层，圆角、宽高、边距等样式可通过 `custom-style` 与 `custom-class` 随意定制。

```vue
<template>
	<sn-e-blurview :radius="50" custom-style="position: fixed;top: 0;right: 0;left: 0;height: 100px;background-color: rgba(255,255,255,0.2);">
		<sn-text text="内部内容不会被模糊处理，而是会悬浮在毛玻璃上"></sn-text>
	</sn-e-blurview>
</template>
```

**更多演示请下载 demo 查看**

## 实现机制

不同平台与引擎下自动采用不同实现（编译期确定，运行时零开销）：

| 场景 | 实现 |
| --- | --- |
| Web 等非 APP 端 | CSS `backdrop-filter: blur(radius)` |
| Android · 非蒸汽模式（VDOM） | `com.eightbitlab:blurview` + `RenderScriptBlur` 原生模糊 |
| Android · 蒸汽模式（uniVersion < 5.25） | 退化为普通 view（不引入原生代码，避免崩溃） |
| Android · 蒸汽模式（uniVersion >= 5.25） | CSS `backdrop-filter: blur(radius)` |

> 注意：Android 非蒸汽（VDOM）分支依赖 `com.eightbitlab:blurview`，使用该分支的工程需打包自定义基座。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| radius | 模糊半径（px） | Number | `15` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置毛玻璃上的内容，不会被模糊处理 |

<DemoPhone name="sn-e-blurview" />
