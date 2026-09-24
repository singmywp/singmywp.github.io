# Agreement  协议

## 基础用法

- 用户协议勾选组件，通过 `v-model` 双向绑定勾选状态，勾选框为自绘的受控样式
- 通过 `links` 指定协议文本中的链接子串，组件自动将文本分段渲染：链接段显示为主题主色，点击链接段触发 `open-link` 事件（不切换勾选状态）；点击勾选框或普通文本则切换勾选
- `links` 中每个链接文本在 `text` 中按首次出现位置匹配；未在 `text` 中出现的链接不渲染，与其他链接重叠时按传入顺序先到先得
- `disabled` 仅禁用勾选切换，协议链接仍可点击

```vue
<template>
	<sn-agreement v-model="agreed" text="我已阅读并同意《用户协议》和《隐私政策》" :links="['《用户协议》', '《隐私政策》']"
		@change="onChange" @open-link="onOpenLink"></sn-agreement>
</template>
```

**更多演示请下载 demo 查看**

## 自定义样式

可通过 `link-color`、`font-size`、`box-size` 等属性定制外观，也可通过 `box-style` / `box-class`、`text-style` / `text-class`、`link-style` / `link-class` 细调勾选框、文本与链接的样式。

```vue
<template>
	<sn-agreement v-model="agreed" text="我已仔细阅读并完全理解《会员服务协议》《个人信息保护政策》及《免责声明》的全部内容"
		:links="['《会员服务协议》', '《个人信息保护政策》', '《免责声明》']" link-color="$error" font-size="$14"
		box-size="20px"></sn-agreement>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 勾选状态 | Boolean | `false` | `true` \| `false` |
| text | 协议文本内容 | String | `''` | - |
| links | 需要渲染为链接的文本，在 text 中匹配并分段；支持单个链接文本或链接文本数组 | String \| String[] | `''` | - |
| disabled | 禁用组件，仅禁用勾选切换，链接仍可点击 | Boolean | `false` | `true` \| `false` |
| fontSize | 文本字体大小，支持 `$` 前缀按字体大小乘数缩放 | String \| Number | `$13` | - |
| color | 文本颜色，支持 `$` 前缀简写，禁用时为 `$disabledText` | String | `$text` | - |
| linkColor | 链接文本颜色，支持 `$` 前缀简写 | String | `$primary` | - |
| boxSize | 勾选框边长，支持 `$` 前缀按间距乘数缩放 | String \| Number | `$19` | - |
| customStyle | 组件根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 组件根节点自定义样式类名 | String | `''` | - |
| boxStyle | 勾选框自定义样式 | UTSJSONObject \| String | `''` | - |
| boxClass | 勾选框自定义样式类名 | String | `''` | - |
| textStyle | 文本自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 文本自定义样式类名 | String | `''` | - |
| linkStyle | 链接文本自定义样式 | UTSJSONObject \| String | `''` | - |
| linkClass | 链接文本自定义样式类名 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: boolean) => Void | 用户点击勾选框或普通文本切换勾选状态时触发，参数为切换后的勾选状态 |
| open-link | (detail: [[AgreementLinkDetail]]) => Void | 点击链接文本时触发（不切换勾选状态）；detail 包含 text（点击的链接文本）与 index（该链接在 links 中的序号，从 0 开始） |

:::type-fields AgreementLinkDetail

`open-link` 事件返回的链接详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 是 | 链接文本 |
| index | Number | 是 | 链接在协议中的序号（从 0 开始） |

---

:::

<DemoPhone name="sn-agreement" />
