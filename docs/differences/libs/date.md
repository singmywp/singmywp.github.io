# 日期库（Date）差异

> 旧版参考：旧 `libs/date/`（`$snui.libs.date`）
>
> 新版参考：`E:\temp\docs\libs\date\`（`DateLib` / `Dayuts` / `dayuts` / `isDayuts` / `dayutsIntl`）

## 使用方式变化

| 项目 | 旧版 | 新版 |
| :--- | :--- | :--- |
| 获取入口 | `$snui.libs.date.dayuts(...)` | `import { dayuts, DateLib, Dayuts, isDayuts, dayutsIntl } from '@/uni_modules/sinle-ui'` |
| 实现基础 | 旧版封装 | **完全自研**（`core/date/`） |

> 旧版统一经 `dateLib.dayuts()` 创建 `Dayuts` 实例；新版提供同名 `dayuts()` 工厂函数直接导出，同时暴露 `DateLib` 静态工具入口。

## DateLib 静态方法（新增，旧版无此类入口）

| 方法 | 说明 |
| :--- | :--- |
| `dayuts(input, config)` | 创建 Dayuts 实例 |
| `newDate(...)` | 创建原生 Date |
| `toDate(...)` | 多种入参解析为 Date（支持字符串/数字/Date/Dayuts 等） |
| `fmtDate(...)` | 小写 token 格式化（`yyyy/MM/dd HH:mm` 风格，支持 周/星期/礼拜） |
| `now()` / `today()` | 当前时间 / 今日实例 |
| `weeks(...)` / `weekName(...)` | 周相关工具 |

## Dayuts 方法差异

### 保留不变

`isValid` / `isSame` / `isAfter` / `isBefore` / `isSameOrBefore` / `isSameOrAfter` / `isBetween` / `isLeapYear` / `isToday` / `unix` / `startOf` / `endOf` / `set` / `get` / `year` / `month` / `day` / `date` / `hour` / `minute` / `second` / `millisecond` / `add` / `subtract` / `format` / `utcOffset` / `diff` / `toDate` / `toJSON` / `toISOString` / `toObject` / `toArray` / `valueOf` / `daysInMonth` / `locale` / `clone` / `toString` / `dayOfYear` / `to` / `from` / `toNow` / `fromNow`

### 移除

| 方法 | 说明 |
| :--- | :--- |
| `fromToBase` | 从基础时间点计算相对时间的内部辅助方法，新版不再暴露 |

### format 模板差异

| 项目 | 旧版 | 新版 |
| :--- | :--- | :--- |
| token 体系 | 大写 token（`YYYY-MM-DD HH:mm:ss` 等，token 较少） | 大写 token 保留并扩展；**新增 `DateLib.fmtDate` 小写 token 体系**（`yyyy/MM/dd` 风格），支持 `周` / `星期` / `礼拜` 中文星期表述 |
| 相对时间 | 英文文案 | **支持本地化文案**（经语言包） |

## 国际化（新增）

- **`dayutsIntl`**：新版独有。提供 locale 注册（`use`）、切换（`set`）、检测（`has`），内置中文（zh-cn）与英文（en）语言包，驱动 `format` 中的周/月名称与相对时间文案。
- `Dayuts` 实例提供 `locale()` 设置实例语言。

## 类型差异

`DayutsConfig` / `DayutsUnit` / `DayutsFormats` / `DayutsRelativeTime` / `DayutsLocale` / `DayutsObject` 类型保留（字段以新版为准），经 `sinle-ui` 入口重导出。

## 平台行为说明

- `utcOffset`：原生端恒为 `0`（仅 Web 有实际含义）——与旧版同平台差异。
- `toISOString`：原生端走 `toString` 实现。