# snu.formatNumber()

### **数值格式化**

格式化数字：若一个数字的小数部分为零（即为整数），则去掉小数尾返回整数形式，否则原样返回。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必备 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| num | Number | 是 | - | 待格式化的数值 |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| Number | 是   | 整数返回整数值，否则返回原浮点数 |

### 示例

```typescript
let a = snu.formatNumber(1.0) // 1
let b = snu.formatNumber(1.5) // 1.5
```

---

# snu.deepClone()

### **深拷贝**

深拷贝数据。递归拷贝数组、普通对象（`UTSJSONObject`）、`Set`、`Map`、`RegExp`、`Date` 及各种二进制/类型化数组等，并先用 `toRaw` 剥离响应式代理。字符串、数字、布尔等基本类型原样返回。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| s | T | 是 | - | 待深拷贝的数据 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| T    | 是   | 深拷贝得到的新的同类型数据 |

### 示例

```typescript
let obj = { a: 1, b: [1, 2, 3] } as UTSJSONObject
let copy = snu.deepClone(obj)
```

---

# snu.reArray()

### **克隆数组**

浅拷贝数组，返回一个新的数组，元素为原数组元素的引用（不修改原数组）。新数组与原数组独立，但元素本身未深拷贝。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称     | 类型 | 必备 | 默认值 | 描述 |
| -------- | ---- | ---- | ------ | ---- |
| oldArray | T[] | 是 | - | 原数组 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| T[]  | 是   | 原数组的浅拷贝新数组 |

### 示例

```typescript
let copy = snu.reArray([1, 2, 3])
```

---

# snu.shuffle()

### **数组洗牌**

使用 Fisher-Yates 算法原地打乱数组元素顺序，并返回该数组。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必备 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| arr | any[] | 是 | - | 待打乱的数组 |

### 返回值

| 类型  | 必备 | 描述 |
| ----- | ---- | ---- |
| any[] | 是   | 打乱后的原数组（原地修改） |

### 示例

```typescript
let arr = [1, 2, 3, 4, 5]
let shuffled = snu.shuffle(arr)
```

---

# snu.isNumber()

### **判断是否为数字**

判断传入值是否为数字类型。在非 App 平台判断 `typeof value == 'number'` 且非 `NaN`；在 App 平台兼容各类原生数字类型（Int、Float、Double 等）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型     | 必备 | 默认值 | 描述 |
| ----- | -------- | ---- | ------ | ---- |
| value | any/null | 是 | - | 待判断的值 |

### 返回值

| 类型    | 必备 | 描述 |
| ------- | ---- | ---- |
| Boolean | 是   | 是否为数字类型 |

### 示例

```typescript
let r1 = snu.isNumber(3)   // true
let r2 = snu.isNumber('3') // false
```

---

# snu.setDataset()

### **写入元素 dataset**

向元素（`UniElement`）的 `dataset` 中写入一个键值对。App 端直接写键；Web 端会自动将键转换为 camelCase 后写入。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型        | 必备 | 默认值 | 描述 |
| ----- | ----------- | ---- | ------ | ---- |
| el | UniElement | 是 | - | 目标元素 |
| key | String | 是 | - | 数据键名 |
| value | any | 是 | - | 要写入的数据值 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
let el = document.getElementById('myId')
snu.setDataset(el, 'my-key', 'value1')
```

---

# snu.getDataset()

### **读取元素 dataset**

读取元素（`UniElement`）的 `dataset` 中指定键的值，未找到时返回空字符串 `''`。Web 端会自动将键转换为 camelCase 后读取。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型       | 必备 | 默认值 | 描述 |
| ---- | ---------- | ---- | ------ | ---- |
| el | UniElement | 是 | - | 目标元素 |
| key | String | 是 | - | 数据键名 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| any  | 是   | 键对应值；不存在时返回 `''` |

### 示例

```typescript
let val = snu.getDataset(el, 'my-key')
```