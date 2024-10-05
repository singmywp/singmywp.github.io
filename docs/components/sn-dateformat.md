# DateFormat 日期格式化

::: info

此组件用法基本与 `uni-dateformat` 对齐，部分细节有差异

:::

## 基础用法
- 用于将日期和时间格式化为指定的字符串。
- 支持自定义格式、阈值和本地化。
```vue
<template>
	<sn-dateformat :date="Date.now()"></sn-dateformat>
</template>
```
**更多演示请下载 demo 查看**

## 阈值



格式化组件会对时间进行用户友好转化，threshold 就是用来控制转化的时间阈值的。

以`[60000, 86400000]`为例，将传入时间与当前时间差的绝对值记为delta（单位毫秒）

- `delta < 60000`时，时间会被转化为“刚刚|马上”
- `delta >= 60000 && delta < 86400000`时，时间会被转化为“xx分钟前|xx分钟后”，如果超过1小时会显示成“xx小时前|xx小时后”，以此类推
- `delta >= 86400000`时，会按照format参数传入的格式进行格式化

如果不想转化为“马上|刚刚”可以传入`:threshold = "[0,86400000]"`。默认值`[0,0]`既不会转换为“马上|刚刚”也不会转化为“xx分钟前|xx分钟后”

## 格式

*本组件支持的解析占位符同 Date 日期库，与 uni-dateformat 略有差异*

| 占位符 |       示例       |            描述             |
| :----: | :--------------: | :-------------------------: |
|  `YY`  |        01        |        两位数的年份         |
| `YYYY` |       2001       |        四位数的年份         |
|  `M`   |       1-12       |      月份，从1开始计数      |
|  `MM`  |      01-12       |        月份，两位数         |
| `MMM`  |     Jan-Dec      |       缩写的月份名称        |
| `MMMM` | January-December |       完整的月份名称        |
|  `D`   |       1-31       |       一个月的某一天        |
|  `DD`  |        01        |   一个月的某一天，两位数    |
|  `H`   |       0-23       |           小时数            |
|  `HH`  |      00-23       |       小时数，两位数        |
|  `h`   |       1-12       |      12小时制的小时数       |
|  `hh`  |      01-12       |  12小时制的小时数，两位数   |
|  `m`   |       0-59       |           分钟数            |
|  `mm`  |      00-59       |       分钟数，两位数        |
|  `s`   |       0-59       |            秒数             |
|  `ss`  |      00-59       |        秒数，两位数         |
|  `S`   |       0-9        |      百毫秒数，一位数       |
|  `SS`  |      00-99       |      十毫秒数，两位数       |
| `SSS`  |     000-999      |       毫秒数，三位数        |
|  `Z`   |      -05:00      |      相对于UTC的偏移量      |
|  `ZZ`  |      -0500       | 相对UTC的紧凑偏移量，两位数 |
|  `A`   |      AM PM       |    上午或下午，大写字母     |
|  `a`   |      am pm       |    上午或下午，小写字母     |


## 属性
| 参数      | 说明                               | 类型            | 默认值            | 可选值            |
| --------- | ---------------------------------- | --------------- | ----------------- | ----------------- |
| date      | 需要格式化的日期                   | Number          | `Date.now()`        | -                 |
| format    | 日期格式                           | String          | `YYYY-MM-DD HH:mm:ss` | -                 |
| threshold | 阈值，用于判断显示相对时间还是格式化时间 | Array\<Number[]\> | `[60000, 86400000]` | -                 |
| locale    | 本地化语言                         | String          | `zh-cn`           | `zh-cn`, `en`     |
| textColor | 文本颜色                           | String          | -                 | -                 |
| textSize  | 文本大小                           | String          | -                 | -                 |
| textFont  | 文本字体                           | String          | -                 | -                 |
| customStyle | 自定义样式                         | UTSJSONObject   | `{}`                | -                 |

<DemoPhone name="sn-dateformat" />