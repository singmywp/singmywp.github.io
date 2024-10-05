# snu.getPx()

### **获取像素值**

将长度字符串中的单位转换为以像素（px）为单位的值。仅支持 `px` \| `rpx`。不支持百分比。

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称  | 类型   | 必填 | 默认值 | 描述           |
| ----- | ------ | ---- | ------ | -------------- |
| value | String | 是   | -      | 待转换的字符串 |

### 返回值

| 类型   | 必备 | 描述                 |
| ------ | ---- | -------------------- |
| Number | 是   | 返回转换后的像素值。 |

### 示例

```typescript
snu.getPx('100px') // 100
snu.getPx('750rpx') // 375
```

---

# snu.addPx()

### **添加像素单位**

将数字值转换为带有 `'px'` 单位的字符串。

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称  | 类型   | 必填 | 默认值 | 描述             |
| ----- | ------ | ---- | ------ | ---------------- |
| value | Number | 是   | -      | 需要转换的数字值 |

### 返回值

| 类型   | 必备 | 描述                         |
| ------ | ---- | ---------------------------- |
| String | 是   | 返回带有 `'px'` 单位的字符串。 |

### 示例

```typescript
snu.addPx(100) // '100px'
```

---

# snu.addUnit()

### **添加单位**

将一个长度值添加单位。如果值为数值，则加上unit参数的单位。如果值已有单位或为半分比数据，则直接原样返回。

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称  | 类型   | 必填 | 默认值 | 描述                      |
| ----- | ------ | ---- | ------ | ------------------------- |
| value | Any    | 是   | -      | 待添加单位的值。          |
| unit  | String | 否   | `'px'`   | 单位字符串，默认值为 px。 |

### 返回值

| 类型   | 必备 | 描述                     |
| ------ | ---- | ------------------------ |
| String | 是   | 返回添加单位后的字符串。 |

### 示例

```typescript
snu.addUnit(100)            // '100px'
snu.addUnit('150')          // '150px'
snu.addUnit('375px', 'rpx') // '375px'
snu.addUnit('50%')          // '50%'
```

---

# snu.getInnerRadius()

### **获取内圆角半径**

根据父组件（矩形）宽度、父组件圆角半径、子组件（矩形）宽度计算子组件的圆角半径。

方法来源：[关于内角圆半径的计算公式](https://www.zcool.com.cn/article/ZMzk2NDUy.html)

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称       | 类型   | 必填 | 默认值 | 描述               |
| ---------- | ------ | ---- | ------ | ------------------ |
| outwidth   | Number | 是   | -      | 父组件（矩形）宽度 |
| outradius  | Number | 是   | -      | 父组件圆角半径     |
| innerwidth | Number | 是   | -      | 子组件（矩形）宽度 |

### 返回值

| 类型   | 必备 | 描述                 |
| ------ | ---- | -------------------- |
| Number | 是   | 返回子组件圆角半径。 |

### 示例

```typescript
const outwidth = 100
const outradius = 50
const innerwidth = 10
const innerRadius = snu.getInnerRadius(outwidth, outradius, innerwidth) // 5
```

---

# snu.findParent()

### **查找父系组件**

在组件树中层层向上查找指定名称的父组件。

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称        | 类型                    | 必填 | 默认值 | 描述                       |
| ----------- | ----------------------- | ---- | ------ | -------------------------- |
| instance    | `ComponentPublicInstance` | 是   | -      | 当前组件实例。             |
| parentNames | `string[]`                | 是   | -      | 需要查找的父系组件的名称。 |

### 返回值

| 类型                    | 必备 | 描述                                                         |
| ----------------------- | ---- | ------------------------------------------------------------ |
| `ComponentPublicInstance` | 否 | 如果找到对应的父系组件，则返回该组件的实例；如果没有找到，则返回 null。 |

### 示例

```typescript
const instance = getCurrentInstance()!.proxy!  // 等价于选项式API的 this

onReady(()=>{ // 在 onReady 中可确保 DOM 已渲染
    const parent = snu.findParent(instance, ['list-view'])
})
```

---

# snu.findBrother()

### **查找兄弟组件**

在组件树中查找指定名称的兄弟组件。

### 兼容性

| Web  | Android |
| ---- | ------- |
| √    | √       |

### 属性

| 名称         | 类型                    | 必填 | 默认值 | 描述                         |
| ------------ | ----------------------- | ---- | ------ | ---------------------------- |
| instance     | `ComponentPublicInstance` | 是   | -      | 当前组件实例。               |
| brotherNames | `string[]`                | 是   | -      | 需要查找的兄弟组件名称数组。 |

### 返回值

| 类型                    | 必备 | 描述                                                         |
| ----------------------- | ---- | ------------------------------------------------------------ |
| `ComponentPublicInstance` | 否 | 如果找到对应的兄弟组件，则返回该组件的实例；如果没有找到，则返回 `null`。 |

### 示例

```typescript
const instance = getCurrentInstance()!.proxy!  // 等价于选项式API的 this

onReady(()=>{ // 在 onReady 中可确保 DOM 已渲染
    const avatarEle = snu.findBrother(instance, ['sn-avatar'])
})
```
