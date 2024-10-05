# 类型

### LDayutsConfig

| 名称   | 类型   | 必填 | 描述                                                   |
| :----- | :----- | :--- | :----------------------------------------------------- |
| date   | Any    | 否   | 输入日期                                               |
| format | String | 否   | 字符串日期格式                                         |
| locale | String | 否   | 语言。目前内置了中英两种语言，如有需要自行添加新的语言 |

### LDayutsUnit

| 可选值                                                                                                         |
| :------------------------------------------------------------------------------------------------------------- |
| `year` \| `month` \| `day` \| `week` \| `date` \| `hour` \| `minute` \| `second` \| `millisecond` \| `quarter` |

### LDayutsFormats

| 名称 | 类型   | 描述                                                     |
| :--- | :----- | :------------------------------------------------------- |
| LT   | String | 小时和分钟的格式化字符串。                               |
| LTS  | String | 小时、分钟和秒的格式化字符串。                           |
| L    | String | 年份、月份和日期的格式化字符串。                         |
| LL   | String | 年份、月份、日期和星期的格式化字符串。                   |
| LLL  | String | 年份、月份、日期、星期和小时的格式化字符串。             |
| LLLL | String | 年份、月份、日期、星期、小时和分钟的格式化字符串。       |
| l    | String | 缩小的年份、月份和日期的格式化字符串。                   |
| ll   | String | 缩小的年份、月份、日期和星期的格式化字符串。             |
| lll  | String | 缩小的年份、月份、日期、星期和小时的格式化字符串。       |
| llll | String | 缩小的年份、月份、日期、星期、小时和分钟的格式化字符串。 |

### LDayutsRelativeTime

| 名称   | 类型   | 描述                           |
| :----- | :----- | :----------------------------- |
| future | String | 时间单位之后的格式化字符串。   |
| past   | String | 时间单位之前的格式化字符串。   |
| s      | String | 秒的格式化字符串。             |
| m      | String | 分钟的格式化字符串。           |
| mm     | String | 分钟（带前缀）的格式化字符串。 |
| h      | String | 小时的格式化字符串。           |
| hh     | String | 小时（带前缀）的格式化字符串。 |
| d      | String | 天的格式化字符串。             |
| dd     | String | 天（带前缀）的格式化字符串。   |
| M      | String | 月的格式化字符串。             |
| MM     | String | 月（带前缀）的格式化字符串。   |
| y      | String | 年的格式化字符串。             |
| yy     | String | 年（带前缀）的格式化字符串。   |

### LDayutsLocale

| 名称          | 类型                                                           | 必填 | 描述                                 |
| :------------ | :------------------------------------------------------------- | :--- | :----------------------------------- |
| name          | String                                                         | 是   | 区域设置名称。                       |
| weekdays      | Array\<String\>                                                | 是   | 一周中每天的完整名称。               |
| weekdaysShort | Array\<String\>                                                | 否   | 一周中每天的缩写名称。               |
| weekdaysMin   | Array\<String\>                                                | 否   | 一周中每天的最小缩写名称。           |
| months        | Array\<String\>                                                | 是   | 一年中的每个月份的名称。             |
| monthsShort   | Array\<String\>                                                | 否   | 一年中的每个月份的缩写名称。         |
| ordinal       | (number: Number, period: String) => String                     | 是   | 返回序数词的函数。                   |
| weekStart     | Number                                                         | 否   | 一周的开始日期（星期几）。           |
| yearStart     | Number                                                         | 否   | 年的开始月份。                       |
| formats       | LDayutsFormats                                                 | 否   | 日期和时间格式化选项。               |
| relativeTime  | LDayutsRelativeTime                                            | 否   | 相对时间格式化选项。                 |
| meridiem      | (hour: Number, minute: Number, isLowercase: Boolean) => String | 否   | 根据小时和分钟返回上午或下午的函数。 |

### LDayutsObject

| 名称         | 类型   | 必填 | 描述   |
| :----------- | :----- | :--- | :----- |
| years        | Number | 是   | 年份   |
| months       | Number | 是   | 月份   |
| date         | Number | 是   | 日期   |
| hours        | Number | 是   | 小时   |
| minutes      | Number | 是   | 分钟   |
| seconds      | Number | 是   | 秒数   |
| milliseconds | Number | 是   | 毫秒数 |