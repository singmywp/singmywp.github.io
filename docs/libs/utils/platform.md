# snu.openLink()

### **打开链接**

使用默认应用打开链接（Url、Schemes等）。Android 必须加上协议，否则会报错。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必填 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| href | String | 是   | -      | 链接 |

### 返回值

无

### 示例
```typescript
snu.openLink('https://www.baidu.com')
```

---

# snu.makePhoneCall()

### **拨打电话**

直接拨打指定的电话号码。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型   | 必填 | 默认值 | 描述               |
| ----------- | ------ | ---- | ------ | ------------------ |
| phoneNumber | String | 是   | -      | 需要拨打的电话号码 |

### 返回值

无

### 示例
```typescript
snu.makePhoneCall('10086')
```

---

# snu.setClipboardData()

### **写入剪切板**

将文本写入剪切板。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必填 | 默认值 | 描述     |
| ---- | ------ | ---- | ------ | -------- |
| data | String | 是   | -      | 数据文本 |

### 返回值

无

### 示例
```typescript
snu.setClipboardData('Hello World')
```

---

# *async*   snu.getClipboardData()

### **从剪切板读取**

从剪切板读取文本数据。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型                | 必备 | 描述           |
| ------------------- | ---- | -------------- |
| `Promise\<string\>` | 是   | 返回文本数据。 |

### 示例
```typescript
snu.getClipboardData().then((text:string)=>{
    console.log("剪切板内容：",text)
})
```

---

# snu.showSysToast()

### **显示原生提示框**

在不同平台上显示原生提示框。Android 平台可设置提示框的显示时长和位置。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称            | 类型          | 必填 | 默认值    | 描述                                                         |
| --------------- | ------------- | ---- | --------- | ------------------------------------------------------------ |
| params          | UTSJSONObject | 是   | -         | 提示框的配置参数。                                           |
| params.title    | String        | 否   | -      | 提示框的标题文本。                                           |
| params.type     | String        | 否   | `short` | 提示框的显示时长，可选值为 `'short'` 或 `'long'`。           |
| params.position | String        | 否   | `center`      | 提示框的显示位置，可选值为 `'top'`, `'center'`, `'bottom'`。 |

### 返回值

无

### 示例
```typescript
snu.showSysToast({
    title: 'Hello World'
})
```

---

# snu.showToast()

### **显示提示框**

在各端提供基本一致的提示框样式。

> *风格设计及 Android 端代码来自：[Toasty](https://github.com/GrenderG/Toasty)*

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型                                          | 必填 | 默认值 | 描述               |
| ------ | --------------------------------------------- | ---- | ------ | ------------------ |
| config | [SnToastConfig](/api/types/api#sntoastconfig) | 是   | -      | 提示框的配置参数。 |

### 返回值

无

### 示例
```typescript
snu.showToast({
    text: 'Hello World',
    type: 'info'
})
```

---

# snu.viewUrlByWebview()

### **使用内置全屏Webview打开网址**

使用内置全屏 Webview 打开网址。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必填 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| url  | String | 是   | -      | 网址 |

### 返回值

无

### 示例
```typescript
snu.viewUrlByWebview('https://www.baidu.com')
```

---

# snu.getOsTheme()

### **获取平台主题**

获取当前平台的主题设置，包括暗黑模式和浅色模式。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型   | 必备 | 描述                                               |
| ------ | ---- | -------------------------------------------------- |
| String | 是   | 返回当前平台的主题，可以是 `'dark'` 或 `'light'`。 |

### 示例
```typescript
const theme = snu.getOsTheme() // 'dark' 或 'light'
```
