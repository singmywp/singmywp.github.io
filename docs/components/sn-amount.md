# Amount  金额

## 基础用法

- 用于格式化展示金额，将数值拆分为货币符号、整数、小数三部分渲染，可分别控制字号与颜色。
- `value` 支持 Number 或字符串；字符串可自带货币符号与千分位分隔符（如 `'¥888,888.88'`），内部自动解析。
- 舍入基于字符串精确计算（不经过浮点 `toFixed`），提供 round / ceil / floor / trunc 四种模式，避免浮点精度误差。
- 支持中文大写金额（`to-upper`，符合央行票据规范）、千分位分隔、语义配色、可选中复制等能力。

```vue
<template>
	<sn-amount :value="123456.789" currency="¥"></sn-amount>
</template>
```

**更多演示请下载 demo 查看**

## 舍入模式与小数位

`rounding-mode` 四种规则：`round` 四舍五入、`ceil` 进一法（向正无穷）、`floor` 退一法（向负无穷）、`trunc` 截断法（向零）；`decimals` 控制保留位数，不足自动补 0。

```vue
<template>
	<sn-amount :value="'1.005'" currency="¥" :decimals="2" rounding-mode="round"></sn-amount>
	<sn-amount :value="'-1.005'" currency="¥" :decimals="2" rounding-mode="ceil"></sn-amount>
	<sn-amount :value="'1234.56789'" currency="$" :decimals="4"></sn-amount>
</template>
```

## 中文大写金额

`to-upper` 显示中文大写金额，支持负数与万亿级数值；此时可配合 `type`、`bold` 等统一控制样式。

```vue
<template>
	<sn-amount :value="12345.67" :to-upper="true" type="primary"></sn-amount>
	<sn-amount :value="'-12345678901234.56'" :decimals="2" :to-upper="true"></sn-amount>
</template>
```

## 分部分样式

`currency-font-size` / `int-font-size` / `decimal-font-size` 与 `currency-color` / `int-color` / `decimal-color` 分别控制三部分字号与颜色（优先于 `font-size` / `color`），也可用对应的外部样式类定制。

```vue
<template>
	<sn-amount :value="'88888.66'" currency="¥"
		currency-font-size="14px" currency-color="$textLight"
		int-font-size="28px" int-color="$primary"
		decimal-font-size="14px" decimal-color="$textLight" bold></sn-amount>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| value | 金额值，支持 Number 或字符串（字符串可含货币符号、千分位分隔符，解析时自动去除） | String \| Number | `0` | - |
| currency | 货币符号，为空时不显示 | String | `''` | - |
| decimals | 保留小数位数，`0` 表示不显示小数部分 | Number | `2` | - |
| rounding-mode | 舍入模式 | String | `round` | `round` \| `ceil` \| `floor` \| `trunc` |
| separator | 整数千分位分隔符，传空字符串不分割 | String | `,` | - |
| separator-digits | 千分位分隔位数 | Number | `3` | - |
| to-upper | 是否显示中文大写金额 | Boolean | `false` | `true` \| `false` |
| type | 语义配色类型（与 sn-text 一致），可被 `color` 覆盖 | String | `text` | `title` \| `text` \| `text-light` \| `primary` \| `info` \| `success` \| `warning` \| `error` |
| font-size | 统一字号，支持 `$` 前缀动态尺寸；由 `type` 决定（title 为 `$16`、其余 `$14`） | String \| Number | - | - |
| currency-font-size | 货币符号字号，优先于 font-size | String \| Number | `''` | - |
| int-font-size | 整数部分字号，优先于 font-size | String \| Number | `''` | - |
| decimal-font-size | 小数部分（含小数点）字号，优先于 font-size | String \| Number | `''` | - |
| color | 统一文字颜色，支持 `$` 简写 | String | `''` | - |
| currency-color | 货币符号颜色，优先于 color | String | `''` | - |
| int-color | 整数部分颜色，优先于 color | String | `''` | - |
| decimal-color | 小数部分颜色，优先于 color | String | `''` | - |
| bold | 是否加粗（字重 600） | Boolean | `false` | `true` \| `false` |
| lines | 最大行数，`0` 表示不限制，超出部分省略 | Number | `0` | - |
| selectable | 是否可长按选中复制 | Boolean | `false` | `true` \| `false` |
| currency-style | 货币符号外部样式 | UTSJSONObject \| String | `''` | - |
| currency-class | 货币符号外部样式类 | String | `''` | - |
| int-style | 整数部分外部样式 | UTSJSONObject \| String | `''` | - |
| int-class | 整数部分外部样式类 | String | `''` | - |
| decimal-style | 小数部分外部样式 | UTSJSONObject \| String | `''` | - |
| decimal-class | 小数部分外部样式类 | String | `''` | - |
| text-class | 大写金额文本外部样式类（to-upper 为 true 时作用） | String | `''` | - |
| custom-style | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| custom-class | 根节点外部样式类 | String | `''` | - |

<DemoPhone name="sn-amount" />
