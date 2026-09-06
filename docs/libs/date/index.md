# 日期库  Date

SinleUI 内置的日期/时间处理库，基于 uni-app x 原生能力构建，提供日期解析、格式化、加减、区间计算、相对时间、国际化等能力。整个库分为三层：

- **`Dayuts` 类**：核心日期实例，封装所有日期运算与格式化方法。
- **`dayuts()` 工厂函数**：创建 `Dayuts` 实例的入口，支持多种日期入参。
- **`DateLib` 静态工具类**：提供 `toDate`/`fmtDate`/`now`/`today`/`weeks` 等面向业务场景的便捷方法。
- **`dayutsIntl`**：语言注册与切换的国际化管理器，内置 `en`、`zh-cn` 两套语言。

## 导出项

| 导出名 | 类型 | 说明 |
| --- | --- | --- |
| `Dayuts` | 类 | 日期实例类，含全部日期运算与格式化方法 |
| `dayuts` | 函数 | 工厂函数，创建 `Dayuts` 实例 |
| `isDayuts` | 函数 | 判断传入值是否为 `Dayuts` 实例 |
| `dayutsIntl` | 对象 | 国际化管理器（语言注册/切换） |
| `DateLib` | 类 | 静态日期工具类 |
| `DayutsConfig` | 类型 | 创建实例的配置对象类型 |
| `DayutsUnit` | 类型 | 时间单位联合类型 |
| `DayutsFormats` | 类型 | 本地化格式模板类型 |
| `DayutsRelativeTime` | 类型 | 相对时间文案类型 |
| `DayutsLocale` | 类型 | 语言包类型 |
| `DayutsObject` | 类型 | `toObject()` 返回的对象类型 |

## 导入方式

```typescript
import {
	Dayuts,
	dayuts,
	isDayuts,
	dayutsIntl,
	DateLib
} from '@/uni_modules/sinle-ui'
```

## 基本用法

### 创建实例

```typescript
const now = dayuts()                                   // 当前时间
const d1 = dayuts('2024-05-20 10:30:00')               // 解析日期字符串
const d2 = dayuts(1716191400000)                       // 时间戳（毫秒）
const d3 = dayuts([2024, 5, 20, 10, 30, 0])            // 数组 [年, 月, 日, 时, 分, 秒]
const d4 = dayuts('2024-05-20', 'YYYY-MM-DD', 'zh-cn') // 指定格式与语言
```

### 格式化

```typescript
const d = dayuts('2024-05-20 10:30:00', undefined, 'zh-cn')
d.format('YYYY-MM-DD HH:mm:ss')  // "2024-05-20 10:30:00"
d.format('YYYY年M月D日 dddd')     // "2024年5月20日 星期一"
```

### 加减与区间

```typescript
const d = dayuts('2024-05-20')
d.add(3, 'day')        // 2024-05-23
d.subtract(1, 'month') // 2024-04-20
d.startOf('week')      // 本周一（zh-cn 语言下周一为周起始）
d.endOf('month')       // 2024-05-31
```

### 相对时间

```typescript
const d = dayuts().subtract(3, 'day')
d.fromNow(true)   // "3 天"（zh-cn 语言，不带前后缀）
d.fromNow()       // "3 天前"
```

### 工具方法

```typescript
const lib = new DateLib()
lib.now()                          // "2024-05-20 10:30:00"
lib.today(-1)                      // 昨天 "2024-05-19"
lib.toDate('2024-05-20')           // Date 对象
lib.fmtDate('2024-05-20', 'yyyy年MM月dd日')  // "2024年05月20日"
```

## 语言

库默认语言为 `en`，内置 `zh-cn`。可通过 `dayutsIntl.locale` 切换全局默认语言，也可在创建实例时通过第三个参数指定语言。

```typescript
dayutsIntl.locale = 'zh-cn'
dayuts('2024-05-20').format('YYYY年MM月DD日')  // "2024年05月20日"
```
