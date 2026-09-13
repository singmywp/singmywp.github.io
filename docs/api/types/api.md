# API 类型

组件与 API 公用、或仅 API 使用的框架级类型。全部类型从 `@/uni_modules/sinle-ui` 导入：

```typescript
import { SnColorBase, SnStyle, SnDataItem } from '@/uni_modules/sinle-ui'
```

> 组件专属类型（日历、树、级联、消息通知、媒体等）见[组件类型](/api/types/component)。本页类型按字母顺序排列。

> [!TIP] 提示
>
> 其中 `SnRequestSystemPermissionOptions` / `SnRequestMediaPermissionOptions` 来自 `@/uni_modules/sinle-api`，经 `sinle-ui` 重导出。

---

# SN_DEFAULT_STYLE_ID

```typescript
const SN_DEFAULT_STYLE_ID = 'default'
```

默认风格 id 常量。

---

# SnColorBase

`$snui.colors` 的类型。一个主题下的**全部语义化颜色集合**，字段分为特殊色与功能色两类，颜色随 `sn-page` 注入的 `--sn-*` CSS 变量自动切换主题。

> [!TIP] 提示
>
> 后缀带 `Dark` 的是比原色更深的颜色，并非暗黑主题专属；带 `Light` 的是更浅的颜色。暗黑主题与亮色主题分别拥有独立的 `SnColorBase` 对象。

### 特殊色

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| transparent | String | 透明色（非 CSS 的 `transparent`，变化时不会闪黑） |
| page | String | 页面背景色 |
| front | String | 前景色，一般用作块状组件背景色 |
| dark | String | 亮色模式为黑色，暗色模式为白色 |
| light | String | 亮色模式为白色，暗色模式为黑色 |
| disabled | String | 禁用状态颜色 |
| disabledText | String | 禁用状态文字颜色 |
| disabledDark | String | 更深的禁用背景色 |
| disabledDarkText | String | 更深的禁用文字颜色 |
| line | String | 线条颜色 |
| lineDark | String | 更深的线条颜色 |
| lineText | String | 线条文字颜色 |
| title | String | 标题颜色 |
| text | String | 文本颜色 |
| textLight | String | 更浅的文本颜色 |
| toast | String | 轻提示背景色 |
| shadow | String | 阴影颜色（2.0 新增） |

### 功能色（primary/info/success/error/warning 五组同构）

每种功能色包含 9 个字段（以 `primary` 为例，其余功能色将 `primary` 替换为 `info` / `success` / `error` / `warning`）：

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| primary | String | 主题色（原色） |
| primaryActive | String | 激活态 |
| primaryText | String | 主题色背景上的文字前景色 |
| primaryLight | String | 更浅的主色 |
| primaryLightActive | String | 激活态更浅主色 |
| primaryLightText | String | 更浅主色背景上的前景色 |
| primaryDark | String | 更深的主题色 |
| primaryDarkActive | String | 激活态更深的主题色 |
| primaryDarkText | String | 更深的主题色背景上的前景色 |

---

# SnColorBases

一套风格中亮/暗两套颜色集的容器。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| light | [SnColorBase](#sncolorbase) | 亮色主题颜色集 |
| dark | [SnColorBase](#sncolorbase) | 暗色主题颜色集 |

---

# SnDataItem

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

# SnFlingEvent

`sn-view`、`sn-gesture` 等组件的快速滑动（fling）手势事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型 |
| beginX | Number | 是 | 起始点横坐标 |
| beginY | Number | 是 | 起始点纵坐标 |
| endX | Number | 是 | 结束点横坐标 |
| endY | Number | 是 | 结束点纵坐标 |
| vX | Number | 是 | 横向速度 |
| vY | Number | 是 | 纵向速度 |

---

# SnFunctionalColor

五种功能色枚举，用于 `type` 类属性。

| 可选值 | 备注 |
| :--- | :--- |
| `primary` | 主色 |
| `info` | 信息色 |
| `success` | 成功色 |
| `error` | 错误色 |
| `warning` | 警告色 |

---

# SnModalAnimationFn

自定义弹窗开合动画函数，接收遮罩元素、内容元素与动画时长。

| 参数 | 类型 | 说明 |
| :--- | :--- | :--- |
| mask | UniElement \| null | 遮罩元素 |
| content | UniElement \| null | 内容元素 |
| duration | number | 动画时长（ms） |
| 返回值 | void | - |

---

# SnPermTipConfig

[`setPermTips`](/libs/utils/permission) 中单个权限的提示内容配置，四个字段均可省略。`html` 非空时优先展示（替代 `title` / `content`）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| html | String | 否 | 自定义 HTML 内容 |
| title | String | 否 | 提示标题 |
| content | String | 否 | 提示正文 |
| icon | String | 否 | 提示图标名 |

---

# SnPermTipsStyleConfig

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

---

# SnPointerEvent

`sn-view`、`sn-gesture` 等组件的指针事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`click` \| `dbclick` \| `down` |
| x | Number | 是 | 点击点横坐标 |
| y | Number | 是 | 点击点纵坐标 |
| event | UniPointerEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

---

# SnRequestMediaPermissionOptions

`snu.requestMediaPermission` 的配置。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| types | [SnRequestMediaPermissionOptionsType](#snrequestmediapermissionoptionstype)[] | 是 | 请求的媒体权限类型列表 |
| success | (allRight: boolean, grantedList: string[]) => void | 否 | 成功回调：是否全部授权、已授权列表 |
| fail | (doNotAskAgain: boolean, deniedList: string[]) => void | 否 | 失败回调：是否不再询问、被拒绝列表 |

---

# SnRequestMediaPermissionOptionsType

媒体权限类型。

| 可选值 | 备注 |
| :--- | :--- |
| `image` | 图片 |
| `video` | 视频 |
| `audio` | 音频 |

---

# SnRequestSystemPermissionOptions

[`snu.requestSystemPermission`](/libs/utils/platform#snu-requestsystempermission) 的配置。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| permissions | String[] | 是 | 请求的系统权限列表 |
| success | (allRight: boolean, grantedList: string[]) => void | 否 | 成功回调：是否全部授权、已授权列表 |
| fail | (doNotAskAgain: boolean, deniedList: string[]) => void | 否 | 失败回调：是否不再询问、被拒绝列表 |

---

# SnResolveType

[useResolve](/api/hooks/use-resolve) 解析函数的解析类型，决定 `$xxx` 乘以哪个乘数：`font` 字号、`radius` 圆角、`margin` 外间距、`padding` 内间距、`aniTime` 动画时长。

| 可选值 | 备注 |
| :--- | :--- |
| `font` | 字号 |
| `radius` | 圆角 |
| `margin` | 外间距 |
| `padding` | 内间距 |
| `aniTime` | 动画时长 |

---

# SnRotateEvent

`sn-view`、`sn-gesture` 等组件的旋转手势事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| degree | Number | 是 | 相对上一次旋转事件的角度增量（deg），顺时针为正 |

---

# SnScaleEvent

`sn-view`、`sn-gesture` 等组件的缩放手势事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| zoom | Number | 是 | 缩放倍数（相对上一次缩放事件） |

---

# SnShowActionsheetConfig

[`snu.showActionsheet`](/libs/utils/ui#snu-showactionsheet) 的配置。除与模态框类似的常用字段外：

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| actions | Array<[SnDataItem](#sndataitem)> | 是 | 操作项列表 |
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

---

# SnShowLoadingConfig

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

---

# SnShowModalConfig

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
| buttonType | String | 否 | 可选值 `embed`（嵌入式）\| `float`（浮动式） |
| buttonBorder | String | 否 | 按钮边框样式 |
| confirmText | String | 否 | 确定按钮文字 |
| confirmTextColor | String | 否 | 确定按钮文字颜色 |
| confirmTextSize | String | 否 | 确定按钮文字字号 |
| showCancel | Boolean | 否 | 是否显示取消按钮 |
| showConfirm | Boolean | 否 | 是否显示确定按钮 |
| cancelText | String | 否 | 取消按钮文字 |
| cancelTextColor | String | 否 | 取消按钮文字颜色 |
| cancelTextSize | String | 否 | 取消按钮文字字号 |
| position | String | 否 | 可选值 `center` \| `top` \| `bottom` \| `left` \| `right` |
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

---

# SnShowToastConfig

[`snu.showToast`](/libs/utils/ui#snu-showtoast) 的配置。`text` 与 `title` 兼容（仅有 `title` 时当 `text` 用，两者并存忽略 `title`）。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 提示文本 |
| title | String | 否 | 兼容 `uni.showToast` 写法：仅有 `title` 时当作 `text` 使用；`text` 与 `title` 同时存在时忽略 `title` |
| bgColor | String | 否 | 背景色（默认 `$snui.colors.toast`） |
| position | String | 否 | 可选值 `top` \| `center` \| `bottom`，默认 `center` |
| duration | Number | 否 | 显示时长（ms），默认 `2000` |
| textSize | String | 否 | 提示文本字号，默认 `$14` |
| textColor | String | 否 | 提示文本颜色，默认 `'#fff'` |
| borderRadius | String | 否 | 轻提示圆角，默认 `$12` |
| padding | String | 否 | 内边距，默认 `'$12px $15px'`（支持多段写法） |
| icon | String | 否 | 提示图标名（`success` / `error` / `info` / `warning` 等标准值） |
| iconSize | String | 否 | 图标字号，默认 `$20` |
| iconColor | String | 否 | 图标颜色，默认 `'#fff'` |
| textAlign | String | 否 | 文本对齐方式 |
| loading | Boolean | 否 | 是否显示加载图标（优先生效于 icon） |
| textLines | Number | 否 | 文本最大行数，超出省略；默认 `0` 不限制 |
| passThrough | Boolean | 否 | 是否穿透点击，默认 `true` |
| customStyle | UTSJSONObject | 否 | 自定义样式 |
| success | () => void | 否 | 成功回调（同步触发） |
| fail | (error: UniError) => void | 否 | 失败回调 |
| complete | (res: any \| null) => void | 否 | 完成回调 |

---

# SnStyle

一套完整风格（皮肤）对象，即内置风格文件导出的结构。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| id | String | 风格唯一 id，如 `'default'` |
| colorBases | [SnColorBases](#sncolorbases) | 亮/暗两套颜色集 |
| topbarHeight | String | 导航栏高度（不含状态栏） |
| lightBgColor | String | 亮色模式页面默认背景色 |
| darkBgColor | String | 暗色模式页面默认背景色 |
| marginFactor | Number | 外间距乘数 |
| paddingFactor | Number | 内间距乘数 |
| radiusFactor | Number | 圆角乘数 |
| fontsizeFactor | Number | 字号乘数 |
| aniTimeFactor | Number | 动画时长乘数 |
| aniTimeShort | Number | 基础短动画时长（ms） |
| aniTimeNormal | Number | 基础标准动画时长（ms） |
| aniTimeLong | Number | 基础长动画时长（ms） |

---

# SnThemeMode

主题（颜色模式）枚举。

| 可选值 | 备注 |
| :--- | :--- |
| `light` | 亮色模式 |
| `dark` | 暗色模式 |

---

# SnToastParams

`sn-toast` 组件参数型轻提示的配置，见[组件类型](/api/types/component#sntoastparams)。

---

# SnTouch

单指触摸点信息，`sn-view`、`sn-gesture` 等组件的手势事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| x | Number | 是 | 触摸点横坐标 |
| y | Number | 是 | 触摸点纵坐标 |
| diffX | Number | 是 | 相对上一次触摸点的横向差值（正右负左） |
| diffY | Number | 是 | 相对上一次触摸点的纵向差值（正下负上） |
| direction | String | 是 | 手指移动方向 |
| id | Number | 是 | 手指 ID |

---

# SnTouchEvent

`sn-view`、`sn-gesture` 等组件的触摸事件返回类型。

| 字段 | 类型 | 必备 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 是 | 事件类型：`touchstart` \| `touchend` \| `touchmove` \| `touchcancel` \| `longpress` \| `showpress` |
| touches | Array<[SnTouch](#sntouch)> | 是 | 多指触摸信息 |
| event | UniEvent | 否 | 原事件，可用以阻止默认行为、阻止冒泡 |

---

# UseHoverOptions

[useHover](/api/hooks/use-hover) 的参数类型，各字段为返回当前配置的函数。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| enabled | () => boolean | 是否启用点击态 |
| startTime | () => number | 按下到进入点击态的延迟（ms） |
| stayTime | () => number | 抬起后点击态保留时长（ms） |
| transTime | () => number | 点击态过渡时长（ms） |
| normalTime | () => number | 常态过渡时长（ms） |

---

# 其他类型

- 颜色库类型 `LColorOptions` / `LGenerateOptions` 见 [Color 颜色库类型](/libs/color/types)。
- 日期库类型 `DayutsConfig` / `DayutsUnit` / `DayutsFormats` / `DayutsRelativeTime` / `DayutsLocale` / `DayutsObject` 见 [Date 日期库类型](/libs/date/types)。
- `PermListener` 见 [sn-perm-listener](/components/sn-perm-listener)。
- `UniError` 错误类型见 [错误处理机制](/api/error/error#unierror)。
