# 日期库  dayutsIntl

`dayutsIntl` 是日期库的国际化管理器，负责语言包的注册与全局默认语言的切换。库内置 `en`（默认）与 `zh-cn` 两套语言包，除通过 `dayutsIntl` 管理外，也可在创建实例时用第三个参数临时指定语言，或用 `Dayuts.locale()` 为单个实例切换语言。

```typescript
import { dayutsIntl } from '@/uni_modules/sinle-ui'
```

---

# DayutsIntl

全局单例 `dayutsIntl` 为 `DayutsIntl` 类的实例。

### 属性

| 名称 | 类型 | 只读 | 描述 |
| :--- | :--- | ---- | :--- |
| locale | String | 否 | 全局默认语言名，读取当前语言，赋值即切换全局语言 |

> 说明：`locale` 是 `DayutsIntl` 的读/写属性。读取返回当前默认语言（初始为 `'en'`）；赋值时若该语言已注册则切换为默认语言，若未注册则打印警告并列出已注册语言、不生效。

### 方法

| 名称 | 参数 | 返回值 | 描述 |
| ---- | ---- | ------ | ---- |
| `use` | (locale: DayutsLocale) | DayutsIntl | 注册一个语言包，返回自身以支持链式调用 |
| `set` | (name: string, locale: DayutsLocale) | Void | 以指定名称注册一个语言包 |
| `has` | (name: string) | Boolean | 判断指定语言是否已注册 |

---

# dayutsIntl.use()

### **注册语言包**

注册一个 `DayutsLocale` 语言包，以该语言包的 `name` 字段作为注册名，返回 `dayutsIntl` 自身以便链式调用。注册后可通过 `locale` 赋值或 `locale()` 使用。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| locale | DayutsLocale | 是 | - | 语言包对象，含 `name` 及各文案字段 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| DayutsIntl | 是 | 返回自身（支持链式调用） |

### 示例

```typescript
dayutsIntl.use({
	name: 'zh-tw',
	weekdays: ['星期日', ...],
	months: [...],
	ordinal: (n: number, period: string): string => `${n}日`
} as DayutsLocale)
```

---

# dayutsIntl.set()

### **按名称注册语言包**

以显式传入的名称注册一个语言包（`name` 参数不必与语言包内 `name` 字段一致）。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| name | String | 是 | - | 注册使用的语言名 |
| locale | DayutsLocale | 是 | - | 语言包对象 |

### 返回值

无

### 示例

```typescript
dayutsIntl.set('zh-tw', zhTwLocale)
```

---

# dayutsIntl.has()

### **判断语言是否已注册**

判断指定语言名是否已在 `dayutsIntl` 中注册。

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| name | String | 是 | - | 语言名 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Boolean | 是 | 已注册返回 `true`，否则 `false` |

### 示例

```typescript
dayutsIntl.has('en')      // true
dayutsIntl.has('zh-cn')   // true
dayutsIntl.has('ja')      // false
```

---

# dayutsIntl.locale（属性）

### **切换全局默认语言**

读取当前默认语言，或通过赋值切换默认语言。仅当目标语言已注册时切换生效。

### 示例

```typescript
dayutsIntl.locale            // "en"（初始）
dayutsIntl.locale = 'zh-cn'  // 切换全局默认语言为中文
dayuts('2024-05-20').format('YYYY年M月D日')  // "2024年5月20日"
```

## 内置语言包

| 语言名 | 说明 |
| --- | --- |
| `en` | 英文（默认语言） |
| `zh-cn` | 简体中文 |
