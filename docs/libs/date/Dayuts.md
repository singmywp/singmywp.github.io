# Dayuts

> [!INFO] 提示
>
> 本库基于 [Day.js](https://dayjs.fenxianglu.cn/category/) 设计，可参考 [Day.js](https://dayjs.fenxianglu.cn/category/) 文档。二者如有冲突，以本文档为准。

### 构造函数

> [!IMPORTANT]
>
> 构造颜色对象请不要直接 `new Dayuts()`，而是通过 `dateLib.dayuts()` 函数创建。

| 名称 | 类型          | 必备 | 默认值 | 描述                 |
| :--- | :------------ | :--- | :----- | :------------------- |
| cfg  | LDayutsConfig | 是   | -      | 处理后的输入日期配置 |

### 方法

| 名称           | 参数                                                         | 返回值           | 描述                                                         |
| :------------- | :----------------------------------------------------------- | :--------------- | :----------------------------------------------------------- |
| isValid        | -                                                            | Boolean          | 检查日期对象是否有效。                                       |
| isSame         | `(input: string\|number\|Date\|Dayuts, units?: string = null)` | Boolean          | 检查当前日期是否与给定的日期在指定的时间单位内相同。         |
| isAfter        | `(input: string\|number\|Date\|Dayuts, units?: string = null)` | Boolean          | 检查给定的日期或时间是否在当前 `Dayuts` 对象的指定时间单位之后。 |
| isBefore       | `(input: string\|number\|Date\|Dayuts, units?: string = null)` | Boolean          | 检查给定的日期或时间是否在当前 `Dayuts` 对象的指定时间单位之前。 |
| isSameOrBefore | `(input: string\|number\|Date\|Dayuts, units?: string = null)` | Boolean          | 根据指定的时间单位，判断当前 `Dayuts` 对象是否与给定的输入在同一时间或之前。 |
| isSameOrAfter  | `(input: string\|number\|Date\|Dayuts, units?: string = null)` | Boolean          | 根据指定的时间单位，判断当前 `Dayuts` 对象是否与给定的输入在同一时间或之后。 |
| isBetween      | `(input: any, input2: any, units: LDayutsUnit = 'millisecond', interval : string = '()')` | Boolean          | 根据指定的时间单位，判断当前 `Dayuts` 对象是否在给定的两个时间之间。 |
| isLeapYear     | -                                                            | Boolean          | 判断当前Dayuts对象所在的年份是否为闰年                       |
| isToday        | -                                                            | Boolean          | 判断当前Dayuts对象所在日期是否是今天                         |
| unix           | -                                                            | Number           | 获取当前 `Dayuts` 对象的 Unix 时间戳（以秒为单位）。         |
| startOf        | `(units : LDayutsUnit, startOf : boolean = true)`            | Dayuts           | 将当前 `Dayuts` 对象设置到一个时间的开始。                   |
| endOf          | `(units : LDayutsUnit, startOf : boolean = true)`            | Dayuts           | 将当前 `Dayuts` 对象设置到一个时间的结束。                   |
| set            | `(string : LDayutsUnit, int : number)`                       | Dayuts           | 创建一个当前对象的副本，并设置指定的时间单位的值。           |
| get            | `(units : LDayutsUnit)`                                      | Number           | 获取当前 `Dayuts` 对象的指定时间单位的值。                   |
| year           | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置年份。传入参数则设置为指定年份并返回当前对象，不传入参数则返回年份。 |
| month          | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置月份。传入参数则设置为指定月份并返回当前对象，不传入参数则返回月份。 |
| day            | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置星期几。传入参数则设置为指定星期几并返回当前对象，不传入参数则返回星期几。 |
| date           | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置月份中的某一天。传入参数则设置为指定月份中的某一天并返回当前对象，不传入参数则返回月份中的某一天。 |
| hour           | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置小时。传入参数则设置为指定小时并返回当前对象，不传入参数则返回小时。 |
| minute         | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置分钟。传入参数则设置为指定分钟并返回当前对象，不传入参数则返回分钟。 |
| second         | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置秒。传入参数则设置为指定秒并返回当前对象，不传入参数则返回秒。 |
| millisecond    | `(input ?: number = null)`                                   | Number \| Dayuts | 获取或设置毫秒。传入参数则设置为指定毫秒并返回当前对象，不传入参数则返回毫秒。 |
| add            | `(number : number, units : LDayutsUnit)`                     | Dayuts           | 在当前 `Dayuts` 实例上添加指定的时间长度。                   |
| subtract       | `(number : number, units : LDayutsUnit)`                     | Dayuts           | 在当前 `Dayuts` 实例上减去指定的时间长度。                   |
| format         | `(formatStr ?: string = null) `                              | String           | 根据给定格式（包含格式占位符），返回格式化后的日期文本       |
| utcOffset      | -                                                            | Number           | 获取 `Dayuts` 实例的 UTC 偏移量（以分钟为单位）。            |
| diff           | `(input : string\|number\|Date\|Dayuts, units : LDayutsUnit = 'millisecond', float : boolean = false)` | Number           | 计算两个日期之间的差值。`float=true` 时返回浮点数结果。      |
| toDate         | -                                                            | Date             | 将当前 Dayuts 对象转换为原生 Date 对象。                     |
| toJSON         | -                                                            | String \| null   | 如果 `Dayuts` 对象有效，则返回 ISO 8601 格式的字符串，否则返回 `null` |
| toISOString    | -                                                            | String           | 返回 ISO 8601 格式的字符串                                   |
| toObject       | -                                                            | String           | 返回 LDayutsObject 类型的对象                                |
| toArray        | -                                                            | Array\<Number\>  | 返回包含当前时间信息的数组                                   |
| valueOf        | -                                                            | Number           | 获取当前日期的毫秒数                                         |
| daysInMonth    | -                                                            | Number           | 获取当前 `Dayuts` 对象所在月份的天数。                       |
| locale         | `(preset ?: string = null)`                                  | String \| Dayuts | 设置或获取 `Dayuts` 实例的本地化配置。如果传入参数，则返回国际化后的 `Dayuts` 实例，否则返回当前实例的语言名称 |
| clone          | -                                                            | Dayuts           | 返回复制后的 `Dayuts` 对象                                   |
| toString       | -                                                            | String           | 返回字符串                                                   |
| dayOfYear      | `(input ?: number = null) `                                  | Number \| Dayuts | 计算给定日期在当年的第几天，或者设置给定日期为当年的第几天。如果提供了输入值，则返回调整后的日期。如果没有提供输入值，则返回当前日期在当年的第几天。 |
| fromToBase     | `(input : string\|number\|Date\|Dayuts, withoutSuffix : boolean, instance : Dayuts, isFrom : boolean)` | String           | 根据输入的时间计算与当前时间的相对时间差，并以指定的格式返回。 |
| to             | `(input : string\|number\|Date\|Dayuts, withoutSuffix : boolean = false)` | String           | 返回当前实例到 X 的相对时间                                  |
| from           | `(input : string\|number\|Date\|Dayuts, withoutSuffix : boolean = false)` | String           | 返回 X 到当前实例的相对时间。                                |
| toNow          | `(withoutSuffix : boolean = false)`                          | String           | 返回当前实例到现在的相对时间。                               |
| fromNow        | `(withoutSuffix : boolean = false)`                          | String           | 返回现在到当前实例的相对时间。                               |