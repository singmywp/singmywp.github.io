# Dateformat  日期格式化

> [查看 sn-dateformat 的 2.0 版本差异](/differences/components/sn-dateformat)

## 基础用法

- 将时间戳格式化为指定格式的日期字符串，或转化为用户友好的相对时间（如"3分钟前"、"2天后"）。
- `mode` 支持两种模式：`realtime` 实时模式（默认，每秒刷新相对时间）与 `fixed` 固定模式（仅在传入值变化时计算）。
- `locale` 支持 `zh-cn` 与 `en` 两种本地化文案。

```vue
<script setup lang="uts">
	const date = Date.now()
</script>
<template>
	<sn-dateformat :date="date"></sn-dateformat>
</template>
```

**更多演示请下载 demo 查看**

## 相对时间与阈值

组件会对与当前时间较近的日期做友好转化，`threshold`（单位 ms）用于控制转化阈值。将传入时间与当前时间差的绝对值记为 delta（以默认阈值 `[60000, 86400000]` 为例）：

- `delta < 60000` 时，过去的时间显示为"刚刚"，未来的时间显示为"马上"（`en` 下为 "just now" / "right away"）
- `60000 <= delta < 86400000` 时，显示为"N秒前|N秒后"、"N分钟前|N分钟后"、"N小时前|N小时后"、"N天前|N天后"、"N个月前|N个月后"、"N年前|N年后"（`en` 下为 "N minutes ago|later" 等）
- `delta >= 86400000` 时，按 `format` 参数传入的格式进行格式化输出

如果不想转化为"马上|刚刚"，可以传入 `:threshold="[0, 86400000]"`；传入空数组则使用默认阈值。

固定模式（`mode="fixed"`）下相对时间仅在 `date` 等值变化时计算，适合列表等静态展示场景；实时模式（`mode="realtime"`）默认开启，每秒自动刷新。

## 日期格式

`format` 支持以下占位符（星期、月份名称随 `locale` 变化）：

| 占位符 | 示例 | 描述 |
| :--- | :--- | :--- |
| `YYYY` | 2001 | 四位数的年份 |
| `YY` | 01 | 两位数的年份 |
| `MMMM` | January | 月份名称 |
| `MM` | 01-12 | 月份，两位数 |
| `M` | 1-12 | 月份，从 1 开始计数 |
| `DD` | 01 | 一个月的某一天，两位数 |
| `D` | 1-31 | 一个月的某一天 |
| `dddd` | Monday | 星期全称 |
| `ddd` | Mon | 星期缩写 |
| `dd` | Mo | 星期简写 |
| `d` | 0-6 | 星期数（周日为 0） |
| `HH` | 00-23 | 小时数（24 小时制），两位数 |
| `H` | 0-23 | 小时数（24 小时制） |
| `hh` | 01-12 | 小时数（12 小时制），两位数 |
| `h` | 1-12 | 小时数（12 小时制） |
| `mm` | 00-59 | 分钟数，两位数 |
| `m` | 0-59 | 分钟数 |
| `ss` | 00-59 | 秒数，两位数 |
| `s` | 0-59 | 秒数 |
| `SSS` | 000-999 | 毫秒数，三位数 |
| `A` | AM PM | 上午或下午，大写 |
| `a` | am pm | 上午或下午，小写 |
| `Z` | -05:00 | 相对于 UTC 的偏移量 |

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| date | 需要格式化的时间戳（单位 ms） | Number | `Date.now()` | - |
| format | 日期格式，占位符见上方"日期格式" | String | `YYYY-MM-DD HH:mm:ss` | - |
| threshold | 相对时间阈值（单位 ms），第一个值为"刚刚/马上"阈值，第二个值为格式化阈值 | Number[] | `[60000, 86400000]` | - |
| mode | 显示模式：`realtime` 每秒实时刷新相对时间，`fixed` 仅在值变化时计算 | String | `realtime` | `fixed` \| `realtime` |
| locale | 本地化语言 | String | `zh-cn` | `zh-cn` \| `en` |
| textColor | 文本颜色，支持 `$` 主题色简写 | String | `$text` | - |
| textSize | 文本字体大小，支持 `$` 动态尺寸 | String \| Number | `$14` | - |
| textFont | 文本字体 | String | `''` | - |
| customClass | 根节点（即文本节点）外部样式类 | String | `''` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 文本外部样式类 | String | `''` | - |
| textStyle | 文本自定义样式 | UTSJSONObject \| String | `''` | - |

<DemoPhone name="sn-dateformat" />
