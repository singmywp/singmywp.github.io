# snu.getPx()

### **转换为 px 数值**

将尺寸字符串（支持 `px`、`rpx`/`upx`、百分比，或纯数字）换算为以 px 为单位的数值。百分比基于屏幕宽度计算；`rpx`/`upx` 通过系统转换换算为 px。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型   | 必备 | 默认值 | 描述 |
| ----- | ------ | ---- | ------ | ---- |
| value | String | 是 | - | 尺寸字符串（如 `'16px'`、`'32rpx'`、`'50%'`） |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| Number | 是   | 换算后的 px 数值 |

### 示例

```typescript
let px = snu.getPx('32rpx')
```

---

# snu.addUnit()

### **为数值补充单位**

为数值补充指定单位（默认 `px`）。若是百分比直接返回；若是纯数字/数字字符串则补单位；若是 `rpx`/`upx` 则将数值取出后改补指定单位；其余情况原样返回。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型      | 必备 | 默认值 | 描述 |
| ----- | --------- | ---- | ------ | ---- |
| value | any | 是 | - | 待处理的值 |
| unit | String | 否 | `'px'` | 单位后缀 |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| String | 是   | 补充单位后的字符串 |

### 示例

```typescript
let s = snu.addUnit(16)      // '16px'
let p = snu.addUnit(16, 'rpx') // '16rpx'
```

---

# snu.getInnerRadius()

### **计算内层建议圆角**

根据外层宽、外层圆角与内层宽计算内层元素的建议圆角值，用于"外圆角内缩"的嵌套元素圆角计算。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称      | 类型   | 必备 | 默认值 | 描述 |
| --------- | ------ | ---- | ------ | ---- |
| outwidth | Number | 是 | - | 外层宽度 |
| outradius | Number | 是 | - | 外层圆角 |
| innerwidth | Number | 是 | - | 内层宽度 |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| Number | 是   | 内层元素建议圆角值 |

### 示例

```typescript
let r = snu.getInnerRadius(100, 12, 80)
```

---

# snu.getDistance()

### **计算两点距离**

计算两个触摸点（坐标）之间的直线距离。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型   | 必备 | 默认值 | 描述 |
| ------ | ------ | ---- | ------ | ---- |
| touch1X | Number | 是 | - | 点 1 横坐标 |
| touch1Y | Number | 是 | - | 点 1 纵坐标 |
| touch2X | Number | 是 | - | 点 2 横坐标 |
| touch2Y | Number | 是 | - | 点 2 纵坐标 |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| Number | 是   | 两点间欧氏距离 |

### 示例

```typescript
let d = snu.getDistance(0, 0, 3, 4) // 5
```

---

# snu.getRotateAngle()

### **计算两点连线旋转角度**

计算两点连线相对水平方向的旋转角度（单位：度，返回范围为 -180°~180°）。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型   | 必备 | 默认值 | 描述 |
| ------ | ------ | ---- | ------ | ---- |
| touch1X | Number | 是 | - | 点 1 横坐标 |
| touch1Y | Number | 是 | - | 点 1 纵坐标 |
| touch2X | Number | 是 | - | 点 2 横坐标 |
| touch2Y | Number | 是 | - | 点 2 纵坐标 |

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| Number | 是   | 连线相对水平方向的角度（度） |

### 示例

```typescript
let angle = snu.getRotateAngle(0, 0, 10, 10) // 45
```

---

# snu.findParent()

### **向上查找父组件**

从当前组件实例向上遍历父组件链，查找名称匹配 `parentNames`（任一）的最近父组件；找到返回该实例，否则返回 `null`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称        | 类型                    | 必备 | 默认值 | 描述 |
| ----------- | ----------------------- | ---- | ------ | ---- |
| instance | ComponentPublicInstance | 是 | - | 当前组件实例 |
| parentNames | String[] | 是 | - | 目标父组件名称列表（任一命中） |

### 返回值

| 类型                    | 必备 | 描述 |
| ----------------------- | ---- | ---- |
| ComponentPublicInstance/null | 是   | 命中的父组件实例；未找到为 `null` |

### 示例

```typescript
let parent = snu.findParent(getCurrentInstance().proxy as any, ['sn-cell'])
```

---

# snu.findBrother()

### **查找兄弟组件**

从当前组件实例的父组件的子组件中，查找名称匹配 `brotherNames`（任一）且非自身的兄弟组件；找到返回该实例，否则返回 `null`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称         | 类型                    | 必备 | 默认值 | 描述 |
| ------------ | ----------------------- | ---- | ------ | ---- |
| instance | ComponentPublicInstance | 是 | - | 当前组件实例 |
| brotherNames | String[] | 是 | - | 目标兄弟组件名称列表（任一命中） |

### 返回值

| 类型                    | 必备 | 描述 |
| ----------------------- | ---- | ---- |
| ComponentPublicInstance/null | 是   | 命中的兄弟组件实例；未找到为 `null` |

### 示例

```typescript
let bro = snu.findBrother(instance, ['sn-icon'])
```

---

# snu.showToast()

### **显示轻提示**

根据配置信息显示全局轻提示，可在任意位置调用，无需放置组件（底层由 `sn-e-toast` 原生插件支撑，弹出与消失均带渐隐 + 缩放动画）。如需自由定制内容与样式的轻提示，请使用 [`sn-toast` 组件](/components/sn-toast)。`config` 为 [`SnShowToastConfig`](/api/types/api#snshowtoastconfig) 配置对象。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型             | 必备 | 默认值 | 描述 |
| ------ | ---------------- | ---- | ------ | ---- |
| config | [[SnShowToastConfig@api]] | 是 | - | Toast 配置对象 |

:::type-fields SnShowToastConfig

[`snu.showToast`](/libs/utils/ui#snu-showtoast) 的配置。`text` 与 `title` 兼容（仅有 `title` 时当 `text` 用，两者并存忽略 `title`）。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 提示文本 |
| title | String | 否 | 兼容 `uni.showToast` 写法：仅有 `title` 时当作 `text` 使用；`text` 与 `title` 同时存在时忽略 `title` |
| bgColor | String | 否 | 背景色（默认 `$snui.colors.toast`） |
| position | String | 否 | `'top'` \| `'center'` \| `'bottom'`，默认 `center` |
| duration | Number | 否 | 显示时长（ms），默认 2000 |
| textSize | String | 否 | 提示文本字号，默认 `$14` |
| textColor | String | 否 | 提示文本颜色，默认 `'#fff'` |
| borderRadius | String | 否 | 轻提示圆角，默认 `$12` |
| padding | String | 否 | 内边距，默认 `'$12px $15px'`（支持多段写法） |
| icon | String | 否 | 提示图标名（`success` / `error` / `info` / `warning` 等标准值） |
| iconSize | String | 否 | 图标字号，默认 `$20` |
| iconColor | String | 否 | 图标颜色，默认 `'#fff'` |
| textAlign | String | 否 | 文本对齐方式 |
| loading | Boolean | 否 | 是否显示加载图标（优先生效于 icon） |
| textLines | Number | 否 | 文本最大行数，超出省略；默认 0 不限制 |
| passThrough | Boolean | 否 | 是否穿透点击，默认 `true` |
| customStyle | UTSJSONObject | 否 | 自定义样式 |
| success | () => void | 否 | 成功回调（同步触发） |
| fail | (error: UniError) => void | 否 | 失败回调 |
| complete | (res: any \| null) => void | 否 | 完成回调 |

:::

### 返回值

| 类型 | 必备 | 描述 |
| ---- | ---- | ---- |
| Void | 否   | 无返回值 |

### 示例

```typescript
snu.showToast({ text: '保存成功', icon: 'success' })

snu.showToast({
	text: '加载中...',
	loading: true,
	duration: 3000
})

snu.showToast({ text: '在顶部显示', position: 'top' })
```

---

# snu.hideToast()

### **隐藏轻提示**

立即关闭当前显示的轻提示（对 `snu.showToast` 显示的内容生效）。

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
snu.hideToast()
```

---

# snu.showModal()

### **显示 Modal 弹窗**

打开一个 Modal 弹窗（经 dialogPage 弹出），并返回该弹窗的唯一 ID。`config` 为 `SnShowModalConfig` 配置对象。

完整字段见 API 类型文档 `SnShowModalConfig`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型             | 必备 | 默认值 | 描述 |
| ------ | ---------------- | ---- | ------ | ---- |
| config | [[SnShowModalConfig@api]] | 是 | - | Modal 配置对象 |

:::type-fields SnShowModalConfig

[`snu.showModal`](/libs/utils/ui#snu-showmodal) 的配置。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| title | String | 否 | 标题文本 |
| titleAlign | String | 否 | 标题对齐方式 |
| titleSize | String | 否 | 标题字号 |
| titleFont | String | 否 | 标题字体 |
| titleColor | String | 否 | 标题颜色 |
| content | String | 否 | 内容文本 |
| contentAlign | String | 否 | 内容对齐方式 |
| contentSize | String | 否 | 内容字号 |
| contentColor | String | 否 | 内容颜色 |
| contentFont | String | 否 | 内容字体 |
| bgColor | String | 否 | 弹窗背景色 |
| borderRadius | String | 否 | 弹窗圆角 |
| buttonType | String | 否 | `'embed'`（嵌入式）\| `'float'`（浮动式） |
| buttonBorder | String | 否 | 按钮边框样式 |
| confirmText | String | 否 | 确定按钮文字 |
| confirmTextColor | String | 否 | 确定按钮文字颜色 |
| confirmTextSize | String | 否 | 确定按钮文字字号 |
| showCancel | Boolean | 否 | 是否显示取消按钮 |
| showConfirm | Boolean | 否 | 是否显示确定按钮 |
| cancelText | String | 否 | 取消按钮文字 |
| cancelTextColor | String | 否 | 取消按钮文字颜色 |
| cancelTextSize | String | 否 | 取消按钮文字字号 |
| position | String | 否 | `'center'` \| `'top'` \| `'bottom'` \| `'left'` \| `'right'` |
| aniTime | String \| Number | 否 | 动画时长 |
| maskClose | Boolean | 否 | 点击遮罩关闭 |
| maskOpacity | Number | 否 | 遮罩透明度 |
| disabled | Boolean | 否 | 禁用弹窗交互 |
| preventBack | Boolean | 否 | 阻止返回键关闭 |
| openAnimation | [SnModalAnimationFn](#snmodalanimationfn) | 否 | 自定义打开动画 |
| closeAnimation | [SnModalAnimationFn](#snmodalanimationfn) | 否 | 自定义关闭动画 |
| customStyle | UTSJSONObject | 否 | 自定义样式 |
| success | (confirm: boolean, cancel: boolean) => void | 否 | 成功回调，可区分点击确定/取消/遮罩关闭 |
| fail | (error: UniError) => void | 否 | 失败回调 |
| complete | (res: any \| null) => void | 否 | 完成回调 |

:::type-fields SnModalAnimationFn

```typescript
type SnModalAnimationFn = (mask: UniElement | null, content: UniElement | null, duration: number) => void
```

自定义弹窗开合动画函数，接收遮罩元素、内容元素与动画时长。

---


来自 `@/uni_modules/sinle-api`，经 `sinle-ui` 重导出。

:::

:::

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| String | 是   | 本次弹窗的唯一 ID |

### 示例

```typescript
snu.showModal({
	title: '提示',
	content: '确定删除吗？',
	success: (confirm, cancel) => {}
})
```

---

# snu.showActionsheet()

### **显示操作菜单**

打开一个操作菜单（ActionSheet）弹窗（经 dialogPage 弹出），并返回该菜单的唯一 ID。`config` 为 `SnShowActionsheetConfig` 配置对象。

完整字段见 API 类型文档 `SnShowActionsheetConfig`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型                     | 必备 | 默认值 | 描述 |
| ------ | ------------------------ | ---- | ------ | ---- |
| config | [[SnShowActionsheetConfig@api]] | 是 | - | 操作菜单配置对象 |

:::type-fields SnShowActionsheetConfig

[`snu.showActionsheet`](/libs/utils/ui#snu-showactionsheet) 的配置。除与模态框类似的常用字段外：

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| actions | Array\<[SnDataItem](#sndataitem)\> | 是 | 操作项列表 |
| title | String | 否 | 标题文本 |
| titleColor | String | 否 | 标题颜色 |
| titleSize | String | 否 | 标题字号 |
| showCancel | Boolean | 否 | 是否显示取消项 |
| cancelText | String | 否 | 取消项文案 |
| bgColor | String | 否 | 面板背景色 |
| borderRadius | String | 否 | 面板圆角 |
| maskOpacity | Number | 否 | 遮罩透明度 |
| itemTextSize | String | 否 | 操作项字号 |
| itemPadding | String | 否 | 操作项内边距 |
| aniTime | String \| Number | 否 | 动画时长 |
| preventBack | Boolean | 否 | 阻止返回键关闭 |
| disabled | Boolean | 否 | 禁用操作菜单 |
| maskClose | Boolean | 否 | 点击遮罩关闭 |
| wrapStyle | UTSJSONObject | 否 | 队列容器样式 |
| wrapClass | String | 否 | 队列容器外部样式类 |
| panelStyle | UTSJSONObject | 否 | 面板样式 |
| panelClass | String | 否 | 面板外部样式类 |
| itemStyle | UTSJSONObject | 否 | 操作项样式（复用 sn-cell 样式链，透传 cell customStyle） |
| itemBorder | Boolean | 否 | 操作项是否显示分隔线（透传 cell border） |
| itemHoverStyle | UTSJSONObject | 否 | 操作项点击态样式（透传 cell hoverStyle） |
| openAnimation | [SnModalAnimationFn](#snmodalanimationfn) | 否 | 自定义打开动画 |
| closeAnimation | [SnModalAnimationFn](#snmodalanimationfn) | 否 | 自定义关闭动画 |
| success | (tapIndex: number) => void | 否 | 成功回调，返回点击的操作项索引 |
| fail | (error: UniError) => void | 否 | 失败回调 |
| complete | (res: any \| null) => void | 否 | 完成回调 |

:::type-fields SnDataItem

通用数据项类型，全局弹窗操作菜单与多数列表类组件共用（组件侧详见[组件类型](/api/types/component#sndataitem)）。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 项 id |
| text | String | 否 | 显示文本 |
| icon | String | 否 | 图标名 |
| value | String | 否 | 关联值 |
| color | String | 否 | 文本颜色 |
| disabled | Boolean | 否 | 是否禁用 |

---

:::

:::

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| String | 是   | 本次菜单的唯一 ID |

### 示例

```typescript
snu.showActionsheet({
	title: '请选择',
	actions: [{ text: '拍照' }, { text: '相册' }],
	success: (tapIndex) => {}
})
```

---

# snu.showLoading()

### **显示 Loading**

打开一个 Loading 加载弹窗（经 dialogPage 弹出），并返回该 Loading 的唯一 ID。配合 `hideLoading()` 关闭。`config` 为 `SnShowLoadingConfig` 配置对象。

完整字段见 API 类型文档 `SnShowLoadingConfig`。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型               | 必备 | 默认值 | 描述 |
| ------ | ------------------ | ---- | ------ | ---- |
| config | [[SnShowLoadingConfig@api]] | 是 | - | Loading 配置对象 |

:::type-fields SnShowLoadingConfig

[`snu.showLoading`](/libs/utils/ui#snu-showloading) 的配置。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 提示文本 |
| overlay | Boolean | 否 | 是否显示遮罩 |
| maskOpacity | Number | 否 | 遮罩透明度 |
| shadow | Boolean | 否 | 是否显示阴影 |
| aniTime | String | 否 | 动画时长 |
| iconColor | String | 否 | 图标颜色 |
| iconSize | String | 否 | 图标字号 |
| textColor | String | 否 | 文本颜色 |
| textSize | String | 否 | 文本字号 |
| bgColor | String | 否 | 背景色 |
| borderRadius | String | 否 | 圆角 |
| padding | String | 否 | 内边距 |
| preventBack | Boolean | 否 | 阻止返回 |
| customStyle | UTSJSONObject | 否 | 自定义样式 |
| success | () => void | 否 | 成功回调 |
| fail | (error: UniError) => void | 否 | 失败回调 |
| complete | (res: any \| null) => void | 否 | 完成回调 |

:::

### 返回值

| 类型   | 必备 | 描述 |
| ------ | ---- | ---- |
| String | 是   | 本次 Loading 的唯一 ID |

### 示例

```typescript
snu.showLoading({ text: '加载中...' })
```

---

# snu.hideLoading()

### **隐藏 Loading**

关闭当前显示的 Loading 弹窗。

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
snu.hideLoading()
```