# 权限类

`snu` 的权限分组（`Perm`，对应 `core/utils/perm.uts`），负责系统权限的检查、申请与设置页跳转，以及权限提示弹层的内容配置、样式配置与申请监听。

- 权限检查 / 申请类方法（`checkSystemPermissionGranted` / `getSystemPermissionDenied` / `requestSystemPermission` / `gotoSystemPermissionActivity` / `requestMediaPermission` / `checkMediaPermission`）在 Web 与 Android 端均可调用。
- 权限提示与申请监听类方法（`setPermTips` / `setPermTipsStyle` / `registerPermListener` / `unregisterPermListener` / `hidePermTips`）由 `sn-perm-listener` 插件支撑：Android 端为原生弹层 + 系统权限弹窗监听；Web 端为空实现（调用不报错、无效果）。
- 提示内容支持**简化模式**（`title` / `content` / `icon`，`icon` 为 24×24 viewBox 的 svg path d 值）与 **HTML 富文本模式**（`html`，Android 原生 TextView 渲染）；同时设置 `html` 与 `title` / `content` / `icon` 时 HTML 优先。
- 提示弹层样式高度可配置（背景色、圆角、边距、标题 / 内容 / 图标颜色与字号、间距、最大宽度、动画时长），展示中更新样式会实时刷新。
- 权限提示只在单页面生效（进入页面注册、离开页面注销）；当权限已授予或永久拒绝后，不再弹出。

> [!TIP] 提示
>
> v2 起权限提示由 UI 组件形态改为 **API 插件形态**，不再使用 `<sn-perm-listener>` 组件标签，统一经 `snu` 权限 API 调用。差异说明见 [sn-perm-listener 的 2.0 版本差异](/differences/components/sn-perm-listener)。

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

[`snu.requestSystemPermission`](/libs/utils/permission#snu-requestsystempermission) 的配置。

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

---

# snu.setPermTips()

### **配置权限提示内容**

为各权限配置权限提示气泡的展示内容（标题、正文、图标等）。`tips` 以"权限名 → 提示配置"的 `Map` 形式传入。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型                          | 必备 | 默认值 | 描述 |
| ---- | ----------------------------- | ---- | ------ | ---- |
| tips | Map[string, [[SnPermTipConfig@api]]] | 是 | - | 权限名与提示配置的映射 |

:::type-fields SnPermTipConfig

[`setPermTips`](/libs/utils/permission) 中单个权限的提示内容配置，四个字段均可省略。`html` 非空时优先展示（替代 `title` / `content`）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| html | String | 否 | 自定义 HTML 内容（Android 原生 TextView 渲染） |
| title | String | 否 | 提示标题 |
| content | String | 否 | 提示正文 |
| icon | String | 否 | 提示图标 svg path d 值（24×24 viewBox） |

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.setPermTips(new Map<string, SnPermTipConfig>([
	['android.permission.CAMERA', {
		title: '正在请求相机权限',
		content: '仅用于扫描二维码，不会将您的任何隐私数据上传云端',
		icon: 'M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z'
	}],
	['android.permission.READ_CALENDAR', {
		html: '<h4>正在请求日历权限</h4><font color="#999999" size="2">仅用于辅助填写日程</font>'
	}]
]))
```

---

# snu.setPermTipsStyle()

### **配置权限提示样式**

配置权限提示气泡的整体样式（位置、颜色、尺寸、动画等）。该样式会随主题切换自动更新，无需重复调用；弹层展示中更新样式会实时刷新。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称  | 类型                   | 必备 | 默认值 | 描述 |
| ----- | ---------------------- | ---- | ------ | ---- |
| style | [[SnPermTipsStyleConfig@api]] | 是 | - | 提示气泡样式配置 |

:::type-fields SnPermTipsStyleConfig

[`setPermTipsStyle`](/libs/utils/permission) 的提示气泡样式配置，各字段均可省略（省略时使用内置默认值）。颜色字段支持 `$主题色` 简写，尺寸字段支持 `$` 简写（随主题 / 乘数联动）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| position | String | 否 | 弹出位置，可选值 `top` \| `bottom`，默认 `top` |
| bgColor | String | 否 | 气泡背景颜色，默认 `$front` |
| radius | String \| Number | 否 | 气泡圆角，默认 `$12` |
| padding | String \| Number | 否 | 内边距，默认 `'$16px $20px'` |
| margin | String \| Number | 否 | 外边距，默认 `'$12px'` |
| titleColor | String | 否 | 标题颜色，默认 `$title` |
| titleSize | String \| Number | 否 | 标题字号，默认 `$16` |
| contentColor | String | 否 | 正文颜色，默认 `$text` |
| contentSize | String \| Number | 否 | 正文字号，默认 `$14` |
| iconColor | String | 否 | 图标颜色，默认 `$title` |
| iconSize | String \| Number | 否 | 图标字号，默认 `$22` |
| spacing | String \| Number | 否 | 行与行、图标与文本的间距，默认 `$10` |
| maxWidth | String \| Number | 否 | 气泡最大宽度（px），`0` 表示不限制 |
| aniTime | String \| Number | 否 | 出入动画时长，默认 `$250` |

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.setPermTipsStyle({
	position: 'top',
	bgColor: '#333333',
	radius: '12',
	contentSize: '$14'
})
```

---

# snu.registerPermListener()

### **注册权限监听器**

注册权限监听器，用于接收权限相关状态变化的回调，并接管说明弹层的显示 / 隐藏。传 `null` 可清除当前监听。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称     | 类型         | 必备 | 默认值 | 描述 |
| -------- | ------------ | ---- | ------ | ---- |
| listener | [PermListener](#permlistener) \| null | 是 | - | 权限监听回调对象；`null` 表示清除 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.registerPermListener({
	onRequest: (permissions: Array<string>): void => {},
	onConfirm: (permissions: Array<string>): void => {},
	onComplete: (res: UTSJSONObject): void => {}
})
```

---

# snu.unregisterPermListener()

### **注销权限监听器**

注销已注册的权限监听器，停止接收权限变化回调，并关闭当前说明弹层。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称     | 类型         | 必备 | 默认值 | 描述 |
| -------- | ------------ | ---- | ------ | ---- |
| listener | [PermListener](#permlistener) \| null | 是 | - | 传入 `null` 即可 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
onUnload(() => {
	snu.unregisterPermListener(null)
})
```

---

# snu.hidePermTips()

### **隐藏权限提示**

立即（带动画）隐藏当前展示的权限提示气泡。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

无

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.hidePermTips()
```

---

# PermListener

:::type-fields PermListener

`PermListener` 为权限申请监听回调对象，三个回调均可选。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| onRequest | `(permissions: Array<string>) => Void` | 否 | 业务代码发起权限申请时触发，`permissions` 为申请权限数组 |
| onConfirm | `(permissions: Array<string>) => Void` | 否 | 系统授权弹窗弹出时触发（说明弹层同步展示） |
| onComplete | `(permissions: UTSJSONObject) => Void` | 否 | 权限申请完成时触发，值为权限名到 `'grant'` / `'denied'` 的映射（说明弹层同步隐藏） |

:::

<DemoPhone type="custom" name="api/perm-listener" />
