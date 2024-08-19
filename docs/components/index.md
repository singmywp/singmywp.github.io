# 组件

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

在本文档内，组件的属性介绍中， “默认值” 一栏可能会出现以 `$` 符号开头的特殊变量/表达式。

这些变量/表达式所指代的内容各有不同，具体需根据相应的属性查看原值。

::: warning 注意

使用这些以 `$` 开头的简写表达式仅是为了简化文档，开发时不可使用

例如：文档中出现 `$primary`，代码中只支持 `$snui.colors.primary`

:::

#### 对于 **颜色相关** 的属性：

`$xxxx` 意为 `$snui.colors.xxxx`。如 `$primary` ，指 `$snui.colors.primary`

#### 对于 **字体大小相关** 的属性：

`$xxxx` 意为 `$snui.configs.font.size(xxxx)`。如 `$3`，指 `$snui.configs.font.size(3)`。

#### 对于 **圆角大小相关** 的属性：

`$xxxx` 意为 `$snui.configs.radius.xxxx`。如 `$small`，指 `$snui.configs.radius.small`。

#### 对于 **动画时长相关** 的属性：

`$xxxx` 意为 `$snui.configs.aniTime.xxxx`。如 `$normal`，指 `$snui.configs.aniTime.normal`。

#### 对于 **其他部分** 属性：

`$topbarHeight` 意为 `$snui.configs.page.topbarHeight`。



::: tip 注意

`$snui.configs` 下的 `aniTime`、`radius`、`font.size()` 各配置项返回的都是带单位的字符串。

如果组件的属性是 `Number` 类型，这时默认值 `$xxxx` 实际指 `parseFloat($snui.configs.xxx.xxxx)`

有时默认值内还会出现计算表达式，同样也是自动将配置项转为 Number。例如 `$3+1`，实际指

```typescript
`${parseFloat($snui.configs.font.size(3)) + 1)}px`
```



:::





