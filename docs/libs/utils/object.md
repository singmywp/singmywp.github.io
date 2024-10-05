# snu.formatNumber()

### **格式化数字**

返回给定数字的格式化结果，如果数字为整数，则返回整数部分；如果数字为小数，则返回原数字。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必填 | 默认值 | 描述         |
| ---- | ------ | ---- | ------ | ------------ |
| num  | Number | 是   | -      | 输入的数字。 |

### 返回值

| 类型   | 必备 | 描述                 |
| ------ | ---- | -------------------- |
| Number | 是   | 返回格式化后的数字。 |

### 示例
```typescript
snu.formatNumber(123.0); // 123
snu.formatNumber(123.456); // 123.456
```

---

# snu.deepClone()

### **深拷贝**

使用 UTS 实现的深拷贝方法，支持 UTS 的标准内置类型（[详见](https://doc.dcloud.net.cn/uni-app-x/uts/buildin-object-api/number.html)，不包括 Element、Math、Promise、Console 等非数据对象）和自定义类型复制，在 Web 端还支持一些 JS 内置对象，如 Blob、File、URL。对于不支持的对象，将返回源数据。复制大量数据时性能高于 JSON 序列化，经测试速度约为其 4 倍。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型 | 必填 | 默认值 | 描述             |
| ----- | ---- | ---- | ------ | ---------------- |
| value | T  | 是   | -      | 需要深拷贝的对象 |

### 返回值

| 类型 | 必备 | 描述               |
| ---- | ---- | ------------------ |
| T  | 是   | 返回深拷贝后的对象 |

### 示例
```typescript
const obj = ref({ a: 1, b: [0,1] });
const cloneObj = snu.deepClone(obj.value);
obj.value['b'] = [2,3];
console.log(obj); // { a: 1, b: [2,3] }
console.log(cloneObj); // { a: 1, b: [0,1] }
```
---

# snu.reArray()

### **数组重装（数组浅拷贝）**

将一个数组浅拷贝为一个新的数组，主要用于解决 uni-app 在 WEB 端自动将一些特殊数组转为特殊类型，导致无法使用例如 forEach, includes 等数组方法的问题。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称     | 类型    | 必填 | 默认值 | 描述           |
| -------- | ------- | ---- | ------ | -------------- |
| oldArray | Any[] | 是   | -      | 需要拷贝的数组 |

### 返回值

| 类型    | 必备 | 描述                                     |
| ------- | ---- | ---------------------------------------- |
| Any[] | 是   | 返回一个新的数组，是 `oldArray` 的浅拷贝 |

### 示例
```typescript
// 注意：element 为 UniElement 类型的对象
const arr = element.children; // 元素子节点数组，在 Web 可能不是 Array 类型，无法使用 forEach, includes 等方法
const newArr = snu.reArray(arr); // 返回一个新的数组，是 arr 的浅拷贝，可以正常使用数组方法
```

---

# snu.shuffle()

### **数组洗牌**

使用 Fisher–Yates 算法对数组进行洗牌，打乱数组的顺序。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型    | 必填 | 默认值 | 描述           |
| ---- | ------- | ---- | ------ | -------------- |
| arr  | Any[] | 是   | -      | 需要洗牌的数组 |

### 返回值

| 类型    | 必备 | 描述             |
| ------- | ---- | ---------------- |
| Any[] | 是   | 返回洗牌后的数组 |

### 示例
```typescript
const arr = [1, 2, 3, 4, 5];
const shuffledArr = snu.shuffle(arr);
console.log(shuffledArr); // 可能为 [3, 1, 5, 2, 4]
```

---

# snu.isNumber()

### **是否为Number类型**

检查输入的值是否为 Number 类型。支持 Android 和 iOS 的原生数字类型，如 Int、Double 等。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型 | 必填 | 默认值 | 描述 |
| ----- | ---- | ---- | ------ | ---- |
| value | Any  | 否   | 是     | -    |

### 返回值

| 类型    | 必备 | 描述                            |
| ------- | ---- | ------------------------------- |
| Boolean | 是   | 如果是 Number 类型，返回 `true` |

### 示例
```typescript
snu.isNumber(120.0.toFloat());  // true
snu.isNumber('123');            // false
snu.isNumber(123 as Int)        // true
snu.isNumber(123.456);          // true
```

---

# snu.setDataset()

### **设置元素Dataset**

设置UniElement的Dataset，主要用于解决 uni-app 在 WEB 端自动将 Dataset 转为特殊类型，导致无法使用例如 set, get 等方法的问题。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型         | 必填 | 默认值 | 描述 |
| ----- | ------------ | ---- | ------ | ---- |
| el    | `UniElement` | 是   | -      | 元素 |
| key   | String       | 是   | -      | 键   |
| value | Any          | 是   | -      | 值   |

### 返回值

无

### 示例
```typescript
// 注意：element 为 UniElement 类型的对象
snu.setDataset(element, 'key', 'value');
```

---

# snu.getDataset()

### **获取元素Dataset**

获取UniElement的Dataset，主要用于解决 uni-app 在 WEB 端自动将 Dataset 转为特殊类型，导致无法使用例如 set, get 等方法的问题。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型         | 必填 | 默认值 | 描述 |
| ---- | ------------ | ---- | ------ | ---- |
| el   | `UniElement` | 是   | -      | 元素 |
| key  | String       | 是   | -      | 键   |

### 返回值

| 类型 | 必备 | 描述                |
| ---- | ---- | ------------------- |
| Any  | 是   | 返回元素Dataset的值 |

### 示例
```typescript
// 注意：element 为 UniElement 类型的对象
snu.getDataset(element, 'key'); // 'value'
```
