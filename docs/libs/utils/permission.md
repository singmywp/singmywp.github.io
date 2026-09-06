# snu.setPermTips()

### **配置权限提示内容**

为各权限配置权限提示气泡的展示内容（标题、正文、图标等）。`tips` 以"权限名 → 提示配置"的 `Map` 形式传入。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型                          | 必备 | 默认值 | 描述 |
| ---- | ----------------------------- | ---- | ------ | ---- |
| tips | Map[string, [[SnPermTipConfig@api]]] | 是 | - | 权限名与提示配置的映射 |

:::type-fields SnPermTipConfig

[`setPermTips`](/libs/utils/permission) 中单个权限的提示内容配置，四个字段均可省略。`html` 非空时优先展示（替代 `title` / `content`）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| html | String | 否 | 自定义 HTML 内容 |
| title | String | 否 | 提示标题 |
| content | String | 否 | 提示正文 |
| icon | String | 否 | 提示图标名 |

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
let tips = new Map<string, object>()
tips.set('camera', { title: '需要相机权限', content: '用于拍照', icon: 'camera' })
snu.setPermTips(tips)
```

---

# snu.setPermTipsStyle()

### **配置权限提示样式**

配置权限提示气泡的整体样式（位置、颜色、尺寸、动画等）。该样式会随主题切换自动更新，无需重复调用。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型                   | 必备 | 默认值 | 描述 |
| ----- | ---------------------- | ---- | ------ | ---- |
| style | [[SnPermTipsStyleConfig@api]] | 是 | - | 提示气泡样式配置 |

:::type-fields SnPermTipsStyleConfig

[`setPermTipsStyle`](/libs/utils/permission) 的提示气泡样式配置，各字段均可省略（省略时使用内置默认值）。

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

注册权限监听器，用于接收权限相关状态变化的回调。传 `null` 可清除当前监听。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称     | 类型         | 必备 | 默认值 | 描述 |
| -------- | ------------ | ---- | ------ | ---- |
| listener | PermListener/null | 是 | - | 权限监听器；`null` 表示清除 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.registerPermListener({
	onChange: (perm) => {}
})
```

---

# snu.unregisterPermListener()

### **注销权限监听器**

注销已注册的权限监听器，停止接收权限变化回调。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称     | 类型         | 必备 | 默认值 | 描述 |
| -------- | ------------ | ---- | ------ | ---- |
| listener | PermListener/null | 是 | - | 待注销的监听器 |

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.unregisterPermListener(listener)
```

---

# snu.hidePermTips()

### **隐藏权限提示**

隐藏当前展示的权限提示气泡。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

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