# 日期库 类型定义

本篇列出日期库导出的全部类型定义。类型从 `@/uni_modules/sinle-ui` 导入：

```typescript
import type {
	DayutsConfig,
	DayutsUnit,
	DayutsFormats,
	DayutsRelativeTime,
	DayutsLocale,
	DayutsObject
} from '@/uni_modules/sinle-ui'
```

---

# DayutsConfig

创建 `Dayuts` 实例时使用的配置对象类型。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| date | any \| null | 日期值，支持 `string`/`Date`/`Number`/数组/`UTSJSONObject`/`Dayuts`；`null` 表示当前时间 |
| format | string \| null | 解析格式（仅 Web 端生效） |
| locale | string \| null | 实例语言名 |

---

# DayutsUnit

时间单位联合类型，用于 `add`/`subtract`/`diff`/`startOf`/`endOf`/`get`/`set` 等方法。

值为以下字符串之一：

- `'year'` — 年
- `'month'` — 月
- `'day'` — 日
- `'week'` — 周
- `'date'` — 日期（同日）
- `'hour'` — 时
- `'minute'` — 分
- `'second'` — 秒
- `'millisecond'` — 毫秒
- `'quarter'` — 季度

> 在方法调用时也接受对应单字符别名（如 `'y'`·`'M'`·`'d'`·`'w'`·`'h'`·`'m'`·`'s'`·`'ms'`·`'Q'`），并自动忽略末尾的 `s`。

---

# DayutsFormats

本地化预设格式模板类型，供语言包 `formats` 字段使用。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| LT | String | 时间格式，如 `HH:mm` |
| LTS | String | 带秒时间格式，如 `HH:mm:ss` |
| L | String | 短日期格式，如 `YYYY/MM/DD` |
| LL | String | 长日期格式，如 `YYYY年M月D日` |
| LLL | String | 长日期+时间格式，如 `YYYY年M月D日Ah点mm分` |
| LLLL | String | 完整日期+时间格式，如 `YYYY年M月D日ddddAh点mm分` |
| l | String | 更短日期格式，如 `YYYY/M/D` |
| ll | String | 精简长日期格式 |
| lll | String | 精简长日期+时间格式 |
| llll | String | 精简完整日期+时间格式 |

---

# DayutsRelativeTime

相对时间文案类型，供语言包 `relativeTime` 字段使用。除 `future`/`past` 外，各字段可使用 `%d` 占位符表示数字。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| future | String | 未来时间前缀模板，如 `in %s` / `%s内` |
| past | String | 过去时间前缀模板，如 `%s ago` / `%s前` |
| s | String | 几秒（`a few seconds` / `几秒`） |
| m | String | 1 分钟 |
| mm | String | 多分钟，如 `%d minutes` / `%d 分钟` |
| h | String | 1 小时 |
| hh | String | 多小时 |
| d | String | 1 天 |
| dd | String | 多天 |
| M | String | 1 个月 |
| MM | String | 多个月 |
| y | String | 1 年 |
| yy | String | 多年 |

---

# DayutsLocale

语言包类型，传入 `dayutsIntl.use()` / `dayutsIntl.set()` 或 `Dayuts.locale()` 使用。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| name | String | 语言名（注册名） |
| weekdays | String[] | 星期全名数组（7 项，周日起始） |
| weekdaysShort? | String[] | 星期缩写数组 |
| weekdaysMin? | String[] | 星期最小形式数组 |
| months | String[] | 月份全名数组（12 项） |
| monthsShort? | String[] | 月份缩写数组 |
| ordinal | (number: Number, period: String) => String | 序数格式化函数 |
| weekStart? | Number | 周起始日（0=周日），如 zh-cn 为 `1`（周一） |
| yearStart? | Number | 年初所在周（1-4 月），如 zh-cn 为 `4` |
| formats? | [DayutsFormats](#dayutsformats) | 预设格式模板 |
| relativeTime? | [DayutsRelativeTime](#dayutsrelativetime) | 相对时间文案 |
| meridiem? | (hour: Number, minute: Number, isLowercase: Boolean) => String | 上午/下午文案函数 |

---

# DayutsObject

`Dayuts.toObject()` 的返回类型。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| years | Number | 年 |
| months | Number | 月（0 起） |
| date | Number | 日 |
| hours | Number | 时 |
| minutes | Number | 分 |
| seconds | Number | 秒 |
| milliseconds | Number | 毫秒 |
