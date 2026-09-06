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

---

# snu.checkSystemPermissionGranted()

### **检查系统权限是否已授予**

检查一组系统权限是否**全部**已授予，全部授予返回 `true`，任一项未授予返回 `false`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型     | 必备 | 默认值 | 描述 |
| ----------- | -------- | ---- | ------ | ---- |
| permissions | String[] | 是 | - | 待检查的权限名数组 |

### 返回值

| 类型    | 必备 | 描述 |
| ------- | ---- | ---- |
| Boolean | 是   | 是否全部已授予 |

### 示例

```typescript
let ok = snu.checkSystemPermissionGranted(['android.permission.CAMERA'])
```

---

# snu.getSystemPermissionDenied()

### **获取未授予的系统权限**

返回传入权限数组中尚未被授予的权限列表。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型     | 必备 | 默认值 | 描述 |
| ----------- | -------- | ---- | ------ | ---- |
| permissions | String[] | 是 | - | 待检查的权限名数组 |

### 返回值

| 类型     | 必备 | 描述 |
| -------- | ---- | ---- |
| String[] | 是   | 尚未授予的权限列表 |

### 示例

```typescript
let denied = snu.getSystemPermissionDenied(['android.permission.CAMERA'])
```

---

# snu.requestSystemPermission()

### **请求系统权限**

发起系统权限申请。`options` 为 `SnRequestSystemPermissionOptions` 配置（包含要申请的权限及授权回调等）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称    | 类型                                | 必备 | 默认值 | 描述 |
| ------- | ----------------------------------- | ---- | ------ | ---- |
| options | [[SnRequestSystemPermissionOptions@api]] | 是 | - | 系统权限申请配置 |

:::type-fields SnRequestSystemPermissionOptions

[`snu.requestSystemPermission`](/libs/utils/platform#snu-requestsystempermission) 的配置。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| permissions | String[] | 是 | 请求的系统权限列表 |
| success | (allRight: boolean, grantedList: string[]) => void | 否 | 成功回调：是否全部授权、已授权列表 |
| fail | (doNotAskAgain: boolean, deniedList: string[]) => void | 否 | 失败回调：是否不再询问、被拒绝列表 |

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.requestSystemPermission({
	permissions: ['android.permission.CAMERA'],
	success: () => {}
})
```

---

# snu.gotoSystemPermissionActivity()

### **跳转系统权限设置页**

跳转到系统应用权限设置页面，帮助用户手动开启指定权限。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型     | 必备 | 默认值 | 描述 |
| ----------- | -------- | ---- | ------ | ---- |
| permissions | String[] | 是 | - | 需要在设置页确认的权限名数组 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.gotoSystemPermissionActivity(['android.permission.CAMERA'])
```

---

# snu.requestMediaPermission()

### **请求媒体权限**

申请媒体相关权限（相机/相册/麦克风等）。`options` 为 `SnRequestMediaPermissionOptions` 配置。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称    | 类型                             | 必备 | 默认值 | 描述 |
| ------- | -------------------------------- | ---- | ------ | ---- |
| options | [[SnRequestMediaPermissionOptions@api]] | 是 | - | 媒体权限申请配置 |

:::type-fields SnRequestMediaPermissionOptions

`snu.requestMediaPermission` 的配置，字段 `types: SnRequestMediaPermissionOptionsType[]`（`'image' | 'video' | 'audio'`）及与上一致的 `success` / `fail` 回调。

---

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.requestMediaPermission({
	types: ['camera'],
	success: () => {}
})
```

---

# snu.checkMediaPermission()

### **检查媒体权限是否已授予**

检查一组媒体权限类型是否**全部**已授予。`types` 为媒体权限类型数组（如 `camera`、`album` 等）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型                                  | 必备 | 默认值 | 描述 |
| ----- | ------------------------------------- | ---- | ------ | ---- |
| types | SnRequestMediaPermissionOptionsType[] | 是 | - | 媒体权限类型数组 |

### 返回值

| 类型    | 必备 | 描述 |
| ------- | ---- | ---- |
| Boolean | 是   | 是否全部已授予 |

### 示例

```typescript
let ok = snu.checkMediaPermission(['camera', 'album'])
```