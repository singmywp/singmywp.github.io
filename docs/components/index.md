# 组件

> [查看组件 2.0 版本差异](/differences/components/index)

SinleUI 所有组件均可在文档和 Demo 中查看用法说明及示例。

::: warning 注意

本文档部分由 AI 辅助生成，如有谬误之处，还请指出 :grin:

:::

## 阅读须知

### 颜色属性

SinleUI 主题内置有 `primary`、`info`、`warning`、`success`、`error` 五个主题，并且每个主题在亮色模式和暗黑模式下都各有三种程度：原色、更浅、更深。

一些组件内置了一系列与 SinleUI 配套的颜色主题，如 `sn-button`、`sn-tag` 、`sn-alert` 等。这些组件提供两个属性：`type` 和 `level`。`type` 的可选值即为五个主题；而 `level` 的可选值为 `first`、`second`、`third`、`least`（并非绝对，以具体组件文档为准），四种等级对应不同的颜色程度，如图所示：

![等级](/assets/images/levels.png)

---

### 特殊值

在本文档内，组件的属性介绍中， “默认值” 一栏可能会出现以 `$` 符号开头的特殊写法。

这类以 `$` 开头的写法在代码中同样支持，框架会在运行时将其解析为对应的目标值。颜色类属性支持 `$颜色字段名` 形式；尺寸类属性支持 `$数字` 或 `$数字px` 形式，不支持计算表达式。

示例：

```vue
<template>
	<sn-alert type="primary" 
	iconColor="$error"
	textSize="$16px"
	text="通知" 
	icon="notification-fill">
</template>
```

#### 对于 **颜色相关** 的属性：

`$xxxx` 意为当前主题下的对应颜色变量。如 `$primary`，即功能色 `primary`，会随主题（亮色/暗黑）自动切换。

#### 对于 **字体大小相关** 的属性：

`$xxxx` 意为 `xxxx × $snui.fontsizeFactor`。如 `$16px`，指 `16px × 字号乘数`。

#### 对于 **圆角大小相关** 的属性：

`$xxxx` 意为 `xxxx × $snui.radiusFactor`。如 `$12px`，指 `12px × 圆角乘数`。

#### 对于 **间距相关** 的属性：

`$xxxx` 意为 `xxxx × $snui.marginFactor`（外间距）或 `xxxx × $snui.paddingFactor`（内间距）。

#### 对于 **动画时长相关** 的属性：

`$xxxx` 意为 `xxxxms × $snui.aniTimeFactor`。如 `$250`，指 `250ms × 动画时长乘数`。



