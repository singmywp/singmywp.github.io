# snu.openLink()

### **打开外部链接**

打开一个外部链接（浏览器/系统跳转）。`href` 为完整的链接地址。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必备 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| href | String | 是 | - | 待打开的链接地址 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.openLink('https://example.com')
```

---

# snu.showSysToast()

### **显示系统级 Toast**

调用系统级原生 Toast 提示（非自绘 Toast）。`params` 为系统级提示的配置参数对象。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型          | 必备 | 默认值 | 描述 |
| ------ | ------------- | ---- | ------ | ---- |
| params | UTSJSONObject | 是 | - | 系统 Toast 参数（如文本内容等） |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.showSysToast({ text: '保存成功' } as UTSJSONObject)
```

---

# snu.viewUrlByWebview()

### **经 WebView 打开 URL**

使用原生 WebView 打开指定 URL 页面（常用于 App 内打开网页）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必备 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| url | String | 是 | - | 待打开的网页地址 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.viewUrlByWebview('https://example.com')
```

---

# snu.getOsTheme()

### **获取系统主题**

获取操作系统当前主题模式，通常返回 `'light'` 或 `'dark'`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| String | 是   | 系统当前主题（如 `light` / `dark`） |

### 示例

```typescript
let theme = snu.getOsTheme()
```

---

# snu.setClipboardData()

### **写入剪贴板**

将文本数据写入系统剪贴板。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型   | 必备 | 默认值 | 描述 |
| ---- | ------ | ---- | ------ | ---- |
| data | String | 是 | - | 待写入剪贴板的文本 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.setClipboardData('要复制的文本')
```

---

# snu.getClipboardData()

### **读取剪贴板**

读取系统剪贴板文本内容，返回一个 `Promise<string>`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型          | 必备 | 描述 |
| ------------- | ---- | ---- |
| Promise[string] | 是   | 剪贴板文本内容 |

### 示例

```typescript
let text = await snu.getClipboardData()
```

