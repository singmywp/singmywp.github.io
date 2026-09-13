# Perm Listener  权限申请监听

> [查看 sn-perm-listener 的 2.0 版本差异](/differences/components/sn-perm-listener)

## 概述

监听系统权限申请，在系统授权弹窗出现的同时，展示带打开 / 消失动画的原生说明弹层，向用户说明权限用途。只在单页面生效（进入页面注册、离开页面注销）；当权限已授予或永久拒绝后，不再弹出。

v2 起由 UI 组件形态改为 **API 插件形态**，不再使用 `<sn-perm-listener>` 组件标签，通过 sinle-ui 的 `snu.setPermTips` / `snu.setPermTipsStyle` / `snu.registerPermListener` / `snu.unregisterPermListener` / `snu.hidePermTips` 调用。插件底层也直接导出 `registerPermListener` / `unregisterPermListener` / `setPermTips` / `setPermTipsStyle` / `hidePermTips` 五个方法，使用方法一致。

- 内容支持**简化模式**（`title` / `content` / `icon`，`icon` 为 24×24 viewBox 的 svg path d 值）与 **HTML 富文本模式**（`html`，Android 原生 TextView 渲染）；同时设置 `html` 与 `title` / `content` / `icon` 时 HTML 优先。
- 弹层样式高度可配置（背景色、圆角、边距、标题 / 内容 / 图标颜色与字号、间距、最大宽度、动画时长），展示中更新样式会实时刷新。
- Android 端完整实现（原生 PopupWindow 弹层 + 渐隐缩放动画）；Web 端为空实现（浏览器无系统权限弹窗监听，调用不报错、无效果）。

## 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

**更多演示请下载 demo 查看**

---

# snu.setPermTips()

### **设置权限说明内容**

为各权限配置说明弹窗内容。key 为权限全名（如 `android.permission.CAMERA`），value 为 `SnPermTipConfig` 说明对象。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| tips | Map<string, [[SnPermTipConfig@api]]> | 是 | - | 权限名到说明内容的映射 |

无

### 示例

```typescript
snu.setPermTips(new Map<string, SnPermTipConfig>([
	['android.permission.CAMERA', {
		title: '正在请求相机权限',
		content: '仅用于扫描二维码，不会将您的任何隐私数据上传云端',
		icon: 'M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM9 2 ...'
	}],
	['android.permission.READ_CALENDAR', {
		html: '<h4>正在请求日历权限</h4><font color="#999999" size="2">仅用于辅助填写日程</font>'
	}]
]))
```

---

# SnPermTipConfig

:::type-fields SnPermTipConfig

`SnPermTipConfig` 为 `snu.setPermTips()` 中每条权限说明的配置对象（**同时设置 `html` 与 `title` / `content` / `icon` 时 HTML 优先**）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| html | String | 否 | HTML 富文本内容（Android 原生 TextView 渲染） |
| title | String | 否 | 简化模式：标题文本 |
| content | String | 否 | 简化模式：内容文本 |
| icon | String | 否 | 简化模式：图标 svg path d 值（24×24 viewBox） |

---

:::

> HTML 支持的标签：`<b>` `<i>` `<u>` `<p>` `<div>` `<h1>`~`<h6>` `<ul>` `<ol>` `<li>` `<br>` `<font color="..." size="...">` `<big>` `<small>` `<sub>` `<sup>` `<tt>` `<s>` 等。

---

# snu.setPermTipsStyle()

### **设置说明弹层样式**

随时可更新，弹层展示中会实时刷新。颜色字段支持 `$主题色` 简写，尺寸字段支持 `$` 简写（经 sinle-ui 的 `resolveColor` / `resolveSize` 处理，随主题 / 乘数联动）。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| style | [[SnPermTipsStyleConfig@api]] | 是 | - | 弹层样式配置对象 |

[`setPermTipsStyle`](/libs/utils/permission) 配置：`position`（`'top' | 'bottom'`）、`bgColor`、`radius`、`padding`、`margin`、`titleColor/titleSize`、`contentColor/contentSize`、`iconColor/iconSize`、`spacing`、`maxWidth`、`aniTime`。

- 颜色库类型 `LColorOptions` / `LGenerateOptions` 见 [Color 颜色库类型](/libs/color/types)。
- 日期库类型 `DayutsConfig` / `DayutsUnit` / `DayutsFormats` / `DayutsRelativeTime` / `DayutsLocale` / `DayutsObject` 见 [Date 日期库类型](/libs/date/types)。
- `PermListener` 见 [sn-perm-listener](/components/sn-perm-listener)。
- `UniError` 错误类型见 [错误处理机制](/api/error/error#unierror)。

### 返回值

无

### 示例

```typescript
snu.setPermTipsStyle({
	position: 'top',
	radius: '$12',
	padding: '$16px $20px',
	margin: '$12px',
	spacing: '$10',
	aniTime: '$250'
})
```

---

# SnPermTipsStyleConfig

:::type-fields SnPermTipsStyleConfig

`SnPermTipsStyleConfig` 为 `snu.setPermTipsStyle()` 的样式配置对象。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| position | String | 否 | 弹层贴靠位置：`'top'` 顶部 \| `'bottom'` 底部，默认 `'top'` |
| bgColor | String | 否 | 弹层背景色，默认主题前景色（`$front`） |
| radius | String \| Number | 否 | 背景圆角（px），默认 `$12` |
| padding | String \| Number | 否 | 内边距，CSS 风格空格分隔：`上` / `上下 左右` / `上 右 下 左`，支持 `px` 或纯数字，默认 `'$16px $20px'` |
| margin | String \| Number | 否 | 弹层距屏幕边缘边距，格式同上；`position` 为 `'top'` 时第一个值生效于弹层与状态栏之间，默认 `'$12px'` |
| titleColor | String | 否 | 标题颜色，默认主题标题色（`$title`） |
| titleSize | String \| Number | 否 | 标题字号（px），默认 `$16` |
| contentColor | String | 否 | 内容颜色，默认主题正文色（`$text`） |
| contentSize | String \| Number | 否 | 内容字号（px），默认 `$14` |
| iconColor | String | 否 | 图标着色，默认主题标题色（`$title`） |
| iconSize | String \| Number | 否 | 图标尺寸（px），默认 `$22` |
| spacing | String \| Number | 否 | 行与行、图标与文本的间距（px），默认 `$10` |
| maxWidth | String \| Number | 否 | 弹层最大宽度（px），`0` 表示不限制（弹层固定为屏幕宽度的 85%）；设置后取两者较小值，默认 `0` |
| aniTime | String \| Number | 否 | 打开 / 消失动画时长（ms），默认 `$250` |

---

:::

---

# snu.registerPermListener()

### **注册权限申请监听**

注册系统权限申请监听，并接管说明弹窗的显示 / 隐藏。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| listener | [PermListener](#permlistener) \| null | 是 | - | 权限监听回调对象，传 `null` 亦可 |

### 返回值

无

### 示例

```typescript
snu.registerPermListener({
	onRequest: (permissions: Array<string>): void => {
		console.log('发起申请：', permissions)
	},
	onConfirm: (permissions: Array<string>): void => {
		console.log('系统授权弹窗弹出：', permissions)
	},
	onComplete: (res: UTSJSONObject): void => {
		console.log('申请完成：', res['android.permission.CAMERA'])
	}
})
```

---

# snu.unregisterPermListener()

### **取消权限申请监听**

取消监听并关闭当前说明弹层。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| ---- | ---- | ---- | ------ | ---- |
| listener | [PermListener](#permlistener) \| null | 是 | - | 传入 `null` 即可 |

### 返回值

无

### 示例

```typescript
onUnload(() => {
	snu.unregisterPermListener(null)
})
```

---

# snu.hidePermTips()

### **立即隐藏说明弹层**

立即（带动画）隐藏当前说明弹层。

### 兼容性

| Web | Android |
| --- | ------- |
| ×   | √       |

### 属性

无

### 返回值

无

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
| onComplete | (permissions: UTSJSONObject) => Void | 否 | 权限申请完成时触发，值为权限名到 `'grant'` / `'denied'` 的映射（说明弹层同步隐藏） |

---

:::

<DemoPhone type="custom" name="api/perm-listener" />
