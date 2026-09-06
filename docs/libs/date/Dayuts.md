# 日期库  Dayuts

`Dayuts` 是 SinleUI 日期库的核心实例类，封装了日期解析、格式化、读取/设置、加减运算、区间计算、相对时间、类型转换与本地化等全部能力。推荐通过 `dayuts()` 工厂函数创建实例，而非直接 `new Dayuts()`。

```typescript
import { dayuts, Dayuts, isDayuts } from '@/uni_modules/sinle-ui'
```

实例方法按功能可分为七类：**创建与克隆**（`clone`）、**有效性判断**（`isValid` / `isSame` / `isAfter` / `isBefore` / `isSameOrBefore` / `isSameOrAfter` / `isBetween` / `isLeapYear` / `isToday` / `unix` / `utcOffset`）、**格式化**（`format`）、**读取与设置**（`get` / `set` / `year` / `month` / `day` / `date` / `hour` / `minute` / `second` / `millisecond` / `dayOfYear` / `daysInMonth`）、**加减与区间边界**（`add` / `subtract` / `startOf` / `endOf`）、**时间差与相对时间**（`diff` / `from` / `to` / `fromNow` / `toNow`）、**类型转换与本地化**（`toDate` / `toJSON` / `toISOString` / `toObject` / `toArray` / `valueOf` / `toString` / `locale`）。所有返回新实例的方法均不修改原实例。

---

# Dayuts

### 属性

| 名称 | 类型 | 只读 | 描述 |
| :--- | :--- | ---- | :--- |
| $L | String | 否 | 当前实例使用的语言名（如 `'en'`、`'zh-cn'`） |

### 方法

| 名称 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| clone | - | Dayuts | 创建与克隆。返回当前实例的深拷贝，共享相同的时间戳与语言 |
| isValid | - | Boolean | 有效性判断。是否为有效日期，解析失败（如无法识别的字符串）时无效 |
| isSame | input: any, units: DayutsUnit = `'millisecond'` | Boolean | 有效性判断。按指定时间单位判断是否与目标时间处于同一区间，未传单位时按毫秒精确比较；目标值支持 `string` / `Number` / `Date` / `Dayuts` / `UTSJSONObject` |
| isAfter | input: any, units: DayutsUnit = `'millisecond'` | Boolean | 有效性判断。当前实例是否晚于目标时间 |
| isBefore | input: any, units: DayutsUnit = `'millisecond'` | Boolean | 有效性判断。当前实例是否早于目标时间 |
| isSameOrBefore | input: any, units: DayutsUnit = `'millisecond'` | Boolean | 有效性判断。是否相同于或早于目标时间（`isSame \|\| isBefore`） |
| isSameOrAfter | input: any, units: DayutsUnit = `'millisecond'` | Boolean | 有效性判断。是否相同于或晚于目标时间（`isSame \|\| isAfter`） |
| isBetween | input: any, input2: any, units: DayutsUnit = `'millisecond'`, interval: String = `'()'` | Boolean | 有效性判断。是否落在 `input` 与 `input2` 构成的区间内；`interval` 遵循数学区间记法：`'('` / `')'` 开区间（不含端点）、`'['` / `']'` 闭区间（含端点） |
| isLeapYear | - | Boolean | 有效性判断。所在年份是否为闰年 |
| isToday | - | Boolean | 有效性判断。日期部分（`YYYY-MM-DD`）是否与今天相同 |
| unix | - | Number | 有效性判断。Unix 秒级时间戳（`Math.floor(毫秒值 / 1000)`） |
| utcOffset | - | Number | 有效性判断。相对 UTC 的分钟偏移量；Web 端由 `getTimezoneOffset` 计算，APP-ANDROID / APP-IOS 端恒为 `0` |
| format | formatStr: string \| null = `'YYYY-MM-DDTHH:mm:ssZ'` | String | 格式化。按格式模板输出字符串，模板中英文字母识别为 token（详见 [format 模板说明](./format)），可使用中文作为字面量；无效日期返回 `'Invalid Date'` |
| get | units: DayutsUnit | Number | 读取与设置。按时间单位读取对应数值，如 `'year'` / `'month'` / `'day'` / `'date'` / `'hour'` / `'minute'` / `'second'` / `'millisecond'` / `'week'` |
| set | units: DayutsUnit, int: Number | Dayuts | 读取与设置。设置指定时间单位的值，返回新实例 |
| year / month / date / day / hour / minute / second / millisecond | 无参读取 / 传参写入 | Number / Dayuts | 读取与设置。同名读写方法：不传参数返回对应单位数值，传参设置并返回新实例。注意 `day()` 读的是星期几（0 起，0=周日），`date()` 读的是日（1 起），`month()` 月份 0 起 |
| dayOfYear | input: number \| null = null | Number / Dayuts | 读取与设置。不传参数返回当年第几天（1 起），传参设置并返回新实例 |
| daysInMonth | - | Number | 读取与设置。当月总天数 |
| add | number: Number, units: DayutsUnit | Dayuts | 加减与区间边界。增加指定数量的时间单位，返回新实例；如 `add(1, 'month')` 自动封顶到月末 |
| subtract | number: Number, units: DayutsUnit | Dayuts | 加减与区间边界。减少指定数量的时间单位，等价于 `add(number * -1, units)` |
| startOf | units: DayutsUnit, startOf: Boolean = `true` | Dayuts | 加减与区间边界。归一到指定单位的起始点（`startOf` 为 `false` 时取终点），支持 `year` / `month` / `week` / `day` / `hour` / `minute` / `second` 等，周以语言配置的 `weekStart` 为起始（zh-cn 为周一） |
| endOf | units: DayutsUnit | Dayuts | 加减与区间边界。归一到指定单位的结束点，等价于 `startOf(units, false)` |
| diff | input: any, units: DayutsUnit = `'millisecond'`, float: Boolean = `false` | Number | 时间差。计算与目标时间的差值；月份差按日历月、年份差按 12 个月计算，其余单位按毫秒差转换；`float` 为 `true` 时返回浮点值，否则取整 |
| from | input: any, withoutSuffix: Boolean = `false` | String | 相对时间。返回相对目标时间的人类可读描述，`withoutSuffix` 为 `true` 时省略「前 / 后」等前后缀，文案随语言变化（zh-cn 如 `"3 天前"`） |
| to | input: any, withoutSuffix: Boolean = `false` | String | 相对时间。从目标时间视角描述当前实例，语义与 `from` 相反 |
| fromNow | withoutSuffix: Boolean = `false` | String | 相对时间。描述当前实例相对此刻的时间（等价于 `from(dayuts(), withoutSuffix)`） |
| toNow | withoutSuffix: Boolean = `false` | String | 相对时间。描述从现在到当前实例的相对时间（等价于 `to(dayuts(), withoutSuffix)`） |
| toDate | - | Date | 类型转换。返回对应的原生 `Date` 对象（新实例，互不影响） |
| toObject | - | DayutsObject | 类型转换。返回含各时间单位字段的 `DayutsObject` 对象 |
| toArray | - | Number[] | 类型转换。返回 `[年, 月(0起), 日, 时, 分, 秒, 毫秒]` 数值数组 |
| valueOf | - | Number | 类型转换。毫秒时间戳（`getTime()`） |
| toISOString | - | String | 类型转换。ISO 8601 字符串；Web 端为标准 `toISOString()`，APP-ANDROID / APP-IOS 端返回 `Date.toString()` |
| toJSON | - | String \| null | 类型转换。有效日期返回 ISO 字符串（等价于 `toISOString()`），无效日期返回 `null` |
| toString | - | String | 类型转换。返回 `Date.toString()` 字符串表示 |
| locale | preset: string \| DayutsLocale, object: DayutsLocale \| null = null | Dayuts | 本地化。以当前实例为基础返回指定语言副本；`preset` 为已注册语言名或语言包对象，`object` 为配套语言包（传字符串语言名时可选） |

### 示例

```typescript
const d = dayuts('2024-05-20 15:30:00')
d.clone()                                   // 克隆实例
d.isValid()                                 // true
d.isSame('2024-05-20 20:00:00', 'day')      // true
d.isAfter('2024-05-19')                     // true
d.isBetween('2024-05-19', '2024-05-21', 'day', '[)')  // true
d.format('YYYY年M月D日 dddd')               // "2024年5月20日 星期一"
d.get('year')                               // 2024
d.month()                                   // 4（0 起，5 月为 4）
d.day()                                     // 1（周一）
d.date()                                    // 20
d.hour(22)                                  // 2024-05-20 22:30:00
d.add(1, 'month')                           // 2024-06-20
d.subtract(1, 'month')                      // 2024-04-20
d.startOf('day')                            // 2024-05-20 00:00:00
d.endOf('month')                            // 2024-05-31 23:59:59.999
dayuts('2024-05-23').diff('2024-05-20', 'day')  // 3
d.from('2024-05-23')                        // "3 天前"
d.subtract(3, 'day').fromNow()              // "3 天前"
d.toArray()                                 // [2024, 4, 20, 15, 30, 0, 0]
d.valueOf()                                 // 毫秒时间戳
dayuts('2024-05-20').locale('zh-cn').format('dddd')  // "星期一"
dayuts('2020-01-01').isLeapYear()           // true
dayuts().isToday()                          // true
dayuts('2024-05-20').unix()                 // 1716163200
dayuts('2024-02-01').daysInMonth()          // 29
dayuts('2024-01-01').dayOfYear()            // 1
```

---

# dayuts()

### **创建 Dayuts 实例**

工厂函数，根据传入的日期值创建一个新的 `Dayuts` 实例。支持字符串、时间戳、日期数组、原生 `Date`、`UTSJSONObject`、`Dayuts` 及空值（当前时间）等多种入参。若传入的是 `Dayuts` 实例，则返回其克隆。

原生端（APP-ANDROID / APP-IOS）`fact.format` 参数不生效；Web 端 `format` 参数参与字符串解析。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| date | any \| null | 否 | `null` | 日期值。支持 `string`、`Date`、`Number`（毫秒时间戳）、日期数组、`UTSJSONObject`、`Dayuts`；为 `null` 时取当前时间 |
| format | string \| null | 否 | `null` | 解析格式（仅 Web 端生效） |
| locale | string \| null | 否 | `null` | 指定实例语言，未指定时使用全局默认语言 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Dayuts | 是 | 返回一个 `Dayuts` 实例 |

### 示例

```typescript
dayuts()                              // 当前时间
dayuts('2024-05-20 10:30:00')         // 解析日期字符串
dayuts(1716191400000)                 // 毫秒时间戳
dayuts([2024, 5, 20, 10, 30, 0])      // [年, 月, 日, 时, 分, 秒]
dayuts('2024-05-20', 'YYYY-MM-DD')    // 指定格式（Web 端）
dayuts('2024-05-20', undefined, 'zh-cn')  // 指定语言
```

---

# isDayuts()

### **判断是否 Dayuts 实例**

判断传入值是否为 `Dayuts` 实例。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| date | any \| null | 否 | `null` | 待判断的值 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Boolean | 是 | 是 `Dayuts` 实例返回 `true`，否则 `false` |

### 示例

```typescript
isDayuts(dayuts())  // true
isDayuts('2024')   // false
```
