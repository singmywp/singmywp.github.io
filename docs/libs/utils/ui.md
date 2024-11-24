# snu.getPx()

### **获取像素值**

将长度字符串中的单位转换为以像素（px）为单位的值。仅支持 `px` \| `rpx`。不支持百分比。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

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

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型   | 必填 | 默认值 | 描述             |
| ----- | ------ | ---- | ------ | ---------------- |
| value | Number | 是   | -      | 需要转换的数字值 |

### 返回值

| 类型   | 必备 | 描述                           |
| ------ | ---- | ------------------------------ |
| String | 是   | 返回带有 `'px'` 单位的字符串。 |

### 示例

```typescript
snu.addPx(100) // '100px'
```

---

# snu.addUnit()

### **添加单位**

将一个长度值添加单位。如果值为数值，则加上unit参数的单位。如果值已有单位或为百分比数据，则直接原样返回。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型   | 必填 | 默认值 | 描述                      |
| ----- | ------ | ---- | ------ | ------------------------- |
| value | Any    | 是   | -      | 待添加单位的值。          |
| unit  | String | 否   | `'px'` | 单位字符串，默认值为 px。 |

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

| Web | Android |
| --- | ------- |
| √   | √       |

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

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型                      | 必填 | 默认值 | 描述                       |
| ----------- | ------------------------- | ---- | ------ | -------------------------- |
| instance    | `ComponentPublicInstance` | 是   | -      | 当前组件实例。             |
| parentNames | `string[]`                | 是   | -      | 需要查找的父系组件的名称。 |

### 返回值

| 类型                      | 必备 | 描述                                                                    |
| ------------------------- | ---- | ----------------------------------------------------------------------- |
| `ComponentPublicInstance` | 否   | 如果找到对应的父系组件，则返回该组件的实例；如果没有找到，则返回 null。 |

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

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称         | 类型                    | 必填 | 默认值 | 描述                         |
| ------------ | ----------------------- | ---- | ------ | ---------------------------- |
| instance     | ComponentPublicInstance | 是   | -      | 当前组件实例。               |
| brotherNames | String[]                | 是   | -      | 需要查找的兄弟组件名称数组。 |

### 返回值

| 类型                    | 必备 | 描述                                                                      |
| ----------------------- | ---- | ------------------------------------------------------------------------- |
| ComponentPublicInstance | 否   | 如果找到对应的兄弟组件，则返回该组件的实例；如果没有找到，则返回 `null`。 |

### 示例

```typescript
const instance = getCurrentInstance()!.proxy!  // 等价于选项式API的 this

onReady(()=>{ // 在 onReady 中可确保 DOM 已渲染
    const avatarEle = snu.findBrother(instance, ['sn-avatar'])
})
```

---

# snu.previewImage()

### **预览图片**

全局 API 预览图片，多端样式统一。支持手势缩放、拖拽，支持长按唤出自定义菜单。

可以在任意位置调用，无需放置组件。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型                                                 | 必填 | 默认值 | 描述                 |
| ------ | ---------------------------------------------------- | ---- | ------ | -------------------- |
| config | [SnPreviewImageConfig](/api/types/api#sntoastconfig) | 是   | -      | 预览图片的配置对象。 |

### 返回值

无

### 示例

```typescript
snu.previewImage({
    urls: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
})
```

---

# snu.showActionsheet()

### **打开操作菜单**

根据配置信息显示全局操作菜单。

与 `sn-actionsheet` 不同的是，它可以在任意位置调用，无需放置组件。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称   | 类型                     | 必填 | 描述             |
| ------ | ------------------------ | ---- | ---------------- |
| config | [SnShowActionsheetConfig](/api/types/api#snshowactionsheetconfig) | 是   | 操作菜单的配置对象。 |

### 示例

```typescript
snu.showActionsheet({
    actions: [{
        text: '选项1'
    },
    {
        text: '选项2',
    },
    {
        text: '选项3',
    },
    {
        text: '选项4',
    }]
} as SnShowActionsheetConfig)
```

---


# snu.showToast()

### **显示轻提示**

根据配置信息显示全局轻提示。

与 `sn-toast` 不同的是，它可以在任意位置调用，无需放置组件。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称   | 类型                     | 必填 | 描述             |
| ------ | ------------------------ | ---- | ---------------- |
| config | [SnShowToastConfig](/api/types/api#snshowtoastconfig) | 是   | 轻提示的配置对象。 |

### 示例

```typescript
snu.showToast({
	text: '轻提示',
	loading: true
})
```

---

# snu.showModal()

### **显示模态框**

根据配置信息显示全局模态框。

与 `sn-modal` 不同的是，它可以在任意位置调用，无需放置组件。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称   | 类型                     | 必填 | 描述             |
| ------ | ------------------------ | ---- | ---------------- |
| config | [SnShowModalConfig](/api/types/api#snshowmodalconfig) | 是   | 模态框的配置对象。 |

### 示例

```typescript
snu.showModal({
	title: 'Modal',
	content: 'Hello World',
	buttonType: 'float',
})
```

---

# snu.getDistance()

### **计算两点距离**

计算第一个触点（touch1）到第二个触点（touch2）的距离。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称    | 类型   | 必填 | 描述                |
| ------- | ------ | ---- | ------------------- |
| touch1X | number | 是   | 第一个触摸点的X坐标 |
| touch1Y | number | 是   | 第一个触摸点的Y坐标 |
| touch2X | number | 是   | 第二个触摸点的X坐标 |
| touch2Y | number | 是   | 第二个触摸点的Y坐标 |

### 返回值

| 类型   | 必备 | 描述           |
| ------ | ---- | -------------- |
| number | 是   | 两点之间的距离 |

### 示例
``` typescript
const distance = snu.getDistance(50, 50, 100, 100); // 计算距离
```

---


---

# snu.getRotateAngle()

### **计算旋转角度**

计算从第一个触点（touch1）到第二个触点（touch2）的连线与水平轴（X轴）之间的夹角，可用于计算手势旋转角度。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 参数

| 名称    | 类型   | 必填 | 描述                |
| ------- | ------ | ---- | ------------------- |
| touch1X | number | 是   | 第一个触摸点的X坐标 |
| touch1Y | number | 是   | 第一个触摸点的Y坐标 |
| touch2X | number | 是   | 第二个触摸点的X坐标 |
| touch2Y | number | 是   | 第二个触摸点的Y坐标 |

### 返回值

| 类型   | 必备 | 描述     |
| ------ | ---- | -------- |
| number | 是   | 旋转角度 |

### 示例
``` typescript
const angle = snu.getRotateAngle(0, 0, 100, 100); // 计算角度
```
