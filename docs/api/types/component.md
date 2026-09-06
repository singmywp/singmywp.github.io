# 组件类型

SinleUI 组件专属类型的统一参考。全部类型（含扩展组件类型）均统一从 `@/uni_modules/sinle-ui` 导出，使用时从插件入口导入即可：

```typescript
import { SnDataItem, SnCalendarValue, SnTreeData } from '@/uni_modules/sinle-ui'
```

> [!TIP] 提示
>
> 标记「内部使用」的类型由框架组件之间传递，业务一般无需直接构造。组件与 API 公用或仅 API 使用的类型（颜色集、风格、手势事件、全局弹窗配置、权限等）见 [API 类型](/api/types/api)。本页类型按字母顺序排列。

---

# AgreementLinkDetail

`sn-agreement` 的 `open-link` 事件返回的链接详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 是 | 链接文本 |
| index | Number | 是 | 链接在协议中的序号（从 0 开始） |

---

# QrCellPoint

二维码绘制点，`QrCodeData` 的 `points` 列表项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| x | Number | 是 | 横向坐标 |
| y | Number | 是 | 纵向坐标 |
| type | Number | 是 | 模块类型（QrPointType 枚举值） |

---

# QrCodeData

二维码绘制数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| size | Number | 是 | 含留白的最终矩阵尺寸 |
| moduleCount | Number | 是 | 不含留白的原始模块数 |
| version | Number | 是 | 实际使用的二维码版本 |
| matrix | Boolean[][] | 是 | 模块矩阵 |
| typeTable | Number[][] | 是 | 各模块类型表（对应 QrPointType 枚举） |
| points | [QrCellPoint](#qrcellpoint)[] | 是 | 有效模块点列表（含坐标与类型） |

---

# QrEcLevel

二维码纠错等级。

| 可选值 |
| :--- |
| `low` \| `medium` \| `quartile` \| `high` |

---

# QrEncodeOptions

二维码编码配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| ecc | [QrEcLevel](#qreclevel) | 是 | 纠错等级，默认 `medium` |
| version | Number | 是 | 二维码版本，`0` 表示自动 |
| mask | Number | 是 | 掩码图样，`-1` 表示自动 |
| border | Number | 是 | 留白边距（模块数），默认 `2` |

---

# QrModuleShape

二维码模块形状。

| 可选值 |
| :--- |
| `square` \| `rounded` \| `circle` \| `diamond` |

---

# SnAvatarConfig

内置 `sn-avatar` 的组件（如列表项、发布卡）可通过 `avatarConfig` 属性统一配置头像参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| mode | [SnAvatarMode](#snavatarmode) | 否 | 显示模式，默认 `image` |
| src | String | 否 | 图片路径（`mode` 为 `image` 时生效） |
| text | String | 否 | 文本内容（`mode` 为 `text` 时生效） |
| icon | String | 否 | 图标名（`mode` 为 `icon` 时生效） |
| size | String \| Number | 否 | 尺寸大小 |
| shape | [SnAvatarShape](#snavatarshape) | 否 | 形状 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文本颜色 |
| iconColor | String | 否 | 图标颜色 |
| borderRadius | String \| Number | 否 | 圆角大小 |
| enablePreview | Boolean | 否 | 是否启用图片预览（`mode` 为 `image` 时生效） |

---

# SnAvatarGroupItem

`sn-avatar-group` 的 `data` 属性需要传入一个 `SnAvatarGroupItem[]` 类型的数组。此对象只能传入数据，样式请通过 `sn-avatar-group` 的属性统一设置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| src | String | 否 | 图片路径 |
| text | String | 否 | 文本内容 |
| icon | String | 否 | 图标名称 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文本颜色 |
| iconColor | String | 否 | 图标颜色 |

---

# SnAvatarMode

头像显示模式。

| 可选值 |
| :--- |
| `image` \| `text` \| `icon` |

---

# SnAvatarShape

头像形状。

| 可选值 |
| :--- |
| `square` \| `circle` |

---

# SnBadgeParams

内置 `sn-badge` 的组件可通过 `badgeConfig` 属性配置徽标参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | Number | 否 | 显示的值（仅 number 模式） |
| max | Number | 否 | 最大值，超过显示 `max+` |
| size | String | 否 | 大小 |
| offset | String | 否 | 偏移量（transform） |
| mode | String | 否 | 可选值 `number` \| `text` \| `dot` |
| text | String | 否 | 文本内容（仅 text 模式） |
| showZero | Boolean | 否 | 是否显示 0 |
| textColor | String | 否 | 文字颜色 |
| bgColor | String | 否 | 背景颜色 |

---

# SnBarcodeBarElement

条码单元。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| width | Number | 是 | 模块宽度 |
| bar | Boolean | 是 | 是否为条纹（`false` 为间隙） |

---

# SnBarcodeData

条码绘制数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| elements | [SnBarcodeBarElement](#snbarcodebarelement)[] | 是 | 条纹元素序列 |
| totalModules | Number | 是 | 总模块数 |
| value | String | 是 | 实际编码的文本（可能被截断） |

---

# SnBarcodeFormat

条码格式。

| 可选值 |
| :--- |
| `code128` \| `code39` \| `code93` \| `codabar` \| `ean8` \| `ean13` \| `upca` \| `upce` \| `itf` |

---

# SnCalendarDay

`formatter` 回调入参，单个日期格的完整信息。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当日 0 点时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月 |
| date | Number | 是 | 日 |
| weekday | Number | 是 | 星期（0-6） |
| text | String | 是 | 日期文本 |
| prefix | String | 是 | 前缀文字（默认空） |
| suffix | String | 是 | 后缀文字（默认空） |
| today | Boolean | 是 | 是否今天 |
| disabled | Boolean | 是 | 是否禁用 |
| currentMonth | Boolean | 是 | 是否当前显示月份 |
| state | [SnCalendarDayState](#sncalendardaystate) | 是 | 选中状态 |
| paint | [SnCalendarDayPaint](#sncalendardaypaint) \| null | 否 | 绘制配置 |

---

# SnCalendarDayContent

日期格内容（formatter 返回值）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| prefix | String | 否 | 前缀文字（如「休」） |
| text | String | 否 | 日期文本（默认为日号） |
| suffix | String | 否 | 后缀文字（如「今天」） |
| paint | [SnCalendarDayPaint](#sncalendardaypaint) \| null | 否 | 绘制配置 |

---

# SnCalendarDayContentInput

`createCalendarDayContent(input)` 的入参类型，在内容字段之外可快捷设置圆点相关字段。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| prefix | String | 否 | 前缀文字 |
| text | String | 否 | 日期文本 |
| suffix | String | 否 | 后缀文字 |
| showDot | Boolean | 否 | 是否显示圆点 |
| dotColor | String | 否 | 圆点颜色 |
| dotPosition | [SnCalendarDayDotPosition](#sncalendardaydotposition) | 否 | 圆点位置 |
| paint | [SnCalendarDayPaintInput](#sncalendardaypaintinput) | 否 | 绘制配置 |

---

# SnCalendarDayDotPosition

日历圆点标记位置。

| 可选值 |
| :--- |
| `left` \| `right` \| `top` \| `bottom` |

---

# SnCalendarDayFormatter

日期格格式化器：返回 `null` 表示使用默认内容。

```typescript
type SnCalendarDayFormatter = (day: SnCalendarDay) => SnCalendarDayContent | null
```

---

# SnCalendarDayPaint

日期格绘制配置（由 `SnCalendarDayContent.paint` 携带，经 formatter 或 `createCalendarDayPaint` 构造）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| backgroundColor | String | 否 | 背景颜色 |
| borderColor | String | 否 | 边框颜色 |
| borderWidth | Number | 否 | 边框宽度 |
| fontSize | String \| Number | 否 | 日期字号 |
| prefixColor | String | 否 | 前缀文字颜色 |
| textColor | String | 否 | 日期文字颜色 |
| suffixColor | String | 否 | 后缀文字颜色 |
| prefixFontSize | Number | 否 | 前缀字号 |
| suffixFontSize | Number | 否 | 后缀字号 |
| fontWeight | String | 否 | 字重 |
| showDot | Boolean | 否 | 是否显示圆点 |
| dotColor | String | 否 | 圆点颜色 |
| dotPosition | [SnCalendarDayDotPosition](#sncalendardaydotposition) | 否 | 圆点位置 |

---

# SnCalendarDayPaintInput

`createCalendarDayPaint(input)` 的入参类型，字段与 [SnCalendarDayPaint](#sncalendardaypaint) 一致。

---

# SnCalendarDayState

日历日期格状态。

| 可选值 |
| :--- |
| `normal` \| `selected` \| `range-start` \| `range-middle` \| `range-end` \| `range-start-end` |

日期格状态含义依次为：普通 / 选中 / 范围起点 / 范围中间 / 范围终点 / 起终点同日。

---

# SnCalendarLocaleText

日历文案配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| title | String | 是 | 弹层标题 |
| confirmText | String | 是 | 确认按钮文案 |
| confirmDisabledText | String | 是 | 确认按钮禁用态文案 |
| rangePrompt | String | 是 | 范围选择提示文案 |
| weekdays | String[] | 是 | 星期标题数组 |
| yearMonthFormat | String | 是 | 年月格式 |

---

# SnCalendarPanelChangeDetail

日历 `panel-change` 事件返回的面板切换详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 面板首日时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月 |

---

# SnCalendarPunchDay

打卡日历（sn-calendar-punch）单日信息。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当日 0 点时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月 |
| date | Number | 是 | 日 |
| fullDate | String | 是 | `YYYY-MM-DD` 格式日期字符串 |
| signed | Boolean | 是 | 当日是否已打卡 |
| supplementable | Boolean | 是 | 当日是否可补签 |
| today | Boolean | 是 | 是否今天 |

---

# SnCalendarSwitchMode

日历面板切换粒度。

| 可选值 |
| :--- |
| `month` \| `year-month` |

---

# SnCalendarType

日历选择模式。

| 可选值 |
| :--- |
| `single` \| `multiple` \| `range` |

---

# SnCalendarValue

日历选中值（`v-model`），随 `type` 变化：`single` 为时间戳 `number \| null`；`range` 为 `[]` 或 `[start, end]`（单点范围写成 `[same, same]`）；`multiple` 为时间戳数组 `number[]`。

```typescript
type SnCalendarValue = number | null | number[]
```

---

# SnCalendarWeekChangeDetail

周日历（sn-calendar-week）`week-change` 事件返回详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当前周首日时间戳 |
| year | Number | 是 | 年 |
| month | Number | 是 | 月 |

---

# SnCalendarWeekDay

周日历（sn-calendar-week）单日信息。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| timestamp | Number | 是 | 当日 0 点时间戳 |
| text | String | 是 | 日号文本 |
| weekTitle | String | 是 | 所属周标题 |
| today | Boolean | 是 | 是否今天 |
| disabled | Boolean | 是 | 是否禁用 |
| showDot | Boolean | 是 | 是否显示圆点 |
| dotColor | String | 是 | 圆点颜色 |

---

# SnCalendarWeekStartDay

日历周起始日。

| 可选值 |
| :--- |
| `sunday` \| `monday` \| `tuesday` \| `wednesday` \| `thursday` \| `friday` \| `saturday` |

---

# SnCascaderDetail

`sn-cascader` 的 `change` 事件返回的详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| values | String[] | 是 | 各级选中值 |
| labels | String[] | 是 | 各级选中文本 |
| options | [SnCascaderOption](#sncascaderoption)[] | 是 | 各级选中的选项对象 |

---

# SnCascaderLoadData

`sn-cascader` 的 `load-data` 属性接收 `SnCascaderLoadData` 函数：`parent` 为 `null` 表示加载第一级，`level` 为当前层级；成功经 `resolve(options)` 返回选项列表，失败调用 `reject()`。

```typescript
type SnCascaderResolve = (options: SnCascaderOption[]) => void
type SnCascaderReject = () => void
type SnCascaderLoadData = (parent: SnCascaderOption | null, level: number, resolve: SnCascaderResolve, reject: SnCascaderReject) => void
```

---

# SnCascaderOption

级联选项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | String | 是 | 选项值 |
| label | String | 是 | 选项显示文本 |
| disabled | Boolean | 否 | 是否禁用 |
| leaf | Boolean | 否 | 是否叶子节点（懒加载模式下标记不再展开） |
| children | [SnCascaderOption](#sncascaderoption)[] | 否 | 子级选项列表 |

---

# SnCascaderValue

级联选中值：各级选项 `value` 组成的数组（`v-model`）。

```typescript
type SnCascaderValue = string[]
```

---

# SnDataItem

通用数据项类型，`sn-picker-view`、`sn-select`、`sn-topbar` 等数据组件的 `data` 属性需要传入一个 `SnDataItem[]`，全局操作菜单（`snu.showActionsheet`）的 `actions` 同样使用它。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 数据的唯一标识 |
| text | String | 否 | 数据显示文本 |
| icon | String | 否 | 数据显示图标 |
| value | String | 否 | 关联值 |
| color | String | 否 | 文本颜色 |
| disabled | Boolean | 否 | 是否禁用子项 |

---

# SnDatetimePickerTimeModeValue

日期时间选择器时间选择粒度模式。

| 可选值 |
| :--- |
| `year` \| `month` \| `date` \| `hour` \| `minute` \| `second` |

---

# SnDatetimePickerValue

日期时间选择器选中值（`v-model`）：时间戳数字或时间格式字符串。

```typescript
type SnDatetimePickerValue = string | number
```

---

# SnEmptyColorConfig <Badge type="warning" text="内部使用" />

`sn-empty` 内部传递插画配色参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| themeColor | String | 是 | 主题颜色 |
| hairColor | String | 是 | 头发颜色 |
| clothesColor | String | 是 | 衣服颜色 |
| trousersColor | String | 是 | 裤子颜色 |
| shoesColor | String | 是 | 鞋子颜色 |
| itemColor | String | 是 | 项目颜色 |
| skinColor | String | 是 | 皮肤颜色 |
| elementColor | String | 是 | 元素颜色 |

---

# SnFile

上传媒体文件信息。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| filename | String | 是 | 文件名 |
| path | String | 是 | 文件路径 |
| size | Number | 否 | 文件大小 |
| ext | String | 是 | 扩展名 |

---

# SnFooterLink

`sn-footer` 链接项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| name | String | 否 | 链接名称 |
| url | String | 否 | 跳转地址 |
| openType | String | 否 | 打开方式 |

---

# SnFooterLogo

`sn-footer` Logo 配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| icon | String | 否 | 图标名 |
| title | String | 否 | 标题文本 |
| url | String | 否 | 跳转地址 |
| openType | String | 否 | 打开方式 |

---

# SnFormItemData <Badge type="warning" text="内部使用" />

`sn-form-item` 内部注册组件数据类型。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| field | String | 是 | 子项名称 |
| instance | ComponentPublicInstance | 是 | 子项实例 |

---

# SnFormItemRule

`sn-form-item` 的 `rule` 属性校验规则。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| type | String | 否 | 字段类型（如 `string` / `number` / `array` / `url` / `email` / `phone` 等） |
| required | Boolean | 否 | 是否必填 |
| message | String | 否 | 校验失败提示信息 |
| pattern | RegExp | 否 | 正则校验规则 |
| min | Number | 否 | 最小长度 |
| max | Number | 否 | 最大长度 |
| len | Number | 否 | 固定长度 |
| enum | any[] | 否 | 枚举校验，值须在列表内 |
| transform | (value: any) => any | 否 | 校验前对值进行转换 |
| valid | (value: any) => string | 否 | 自定义校验函数，返回非空字符串表示失败信息 |

---

# SnFormItemVerifyResult <Badge type="warning" text="内部使用" />

单项校验结果。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| valid | Boolean | 是 | 是否通过校验 |
| message | String | 否 | 失败信息 |
| field | String | 是 | 子项名称 |

---

# SnFormValidResult

`sn-form` 的 `valid` 属性回调配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| success | () => void | 否 | 全部通过回调 |
| fail | (failResults: [SnFormItemVerifyResult](#snformitemverifyresult)[]) => void | 否 | 失败回调，入参为失败结果数组 |

---

# SnLoadmoreParams

`sn-loadmore` / 列表加载更多的文案与样式配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| loadmoreText | String | 否 | 加载前文案 |
| nomoreText | String | 否 | 没有更多文案 |
| loadingText | String | 否 | 加载中文案 |
| textSize | String | 否 | 文本字号 |
| textColor | String | 否 | 文本颜色 |
| iconSize | String | 否 | 图标字号 |
| iconColor | String | 否 | 图标颜色 |
| lineColor | String | 否 | 线条颜色 |
| lineHeight | String | 否 | 线条高度 |
| dashed | Boolean | 否 | 线条是否虚线 |
| disabled | Boolean | 否 | 是否禁用 |

---

# SnLogItem

`sn-log` 组件日志项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 日志唯一 id |
| time | Number | 是 | 时间戳 |
| level | [SnLogLevel](#snloglevel) | 是 | 日志级别 |
| tag | String | 是 | 标签 |
| message | String | 是 | 日志内容 |
| detail | String | 是 | 附加详情 |

---

# SnLogLevel

日志级别。

| 可选值 |
| :--- |
| `debug` \| `info` \| `success` \| `warning` \| `error` |

---

# SnLogTimeFormat

日志时间显示格式。

| 可选值 |
| :--- |
| `full` \| `short` \| `relative` \| `hidden` |

---

# SnMedia <Badge type="warning" text="内部使用" />

上传媒体条目。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| file | any | 否 | 文件对象 |
| src | String | 否 | 预览路径 |
| thumb | String | 否 | 缩略图路径 |
| name | String | 是 | 文件名 |
| status | String | 是 | 上传状态，可选值 `uploaded` \| `uploading` \| `unuploaded` \| `error` |
| type | String | 是 | 媒体类型，可选值 `image` \| `video` |
| ext | String | 否 | 扩展名 |

---

# SnMessageLevel

消息条表现程度等级。

| 可选值 |
| :--- |
| `first` \| `second` \| `third` |

---

# SnMessageParams

`sn-message` 组件 `add` 方法入参。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 消息内容 |
| type | [SnMessageType](#snmessagetype) | 否 | 消息类型 |
| level | [SnMessageLevel](#snmessagelevel) | 否 | 消息等级 |
| position | [SnMessagePosition](#snmessageposition) | 否 | 队列位置 |
| duration | Number | 否 | 显示时长（ms） |
| showIcon | Boolean | 否 | 是否显示图标 |
| icon | String | 否 | 图标名 |
| closable | Boolean | 否 | 是否显示关闭按钮 |
| grouping | Boolean | 否 | 相同内容是否归并计数 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文字颜色 |
| iconColor | String | 否 | 图标颜色 |
| textSize | String | 否 | 文字字号 |
| borderRadius | String | 否 | 圆角 |
| customStyle | UTSJSONObject | 否 | 自定义样式 |

---

# SnMessagePosition

消息条队列位置。

| 可选值 |
| :--- |
| `top-left` \| `top` \| `top-right` \| `bottom-left` \| `bottom` \| `bottom-right` |

---

# SnMessageType

消息条类型。

| 可选值 |
| :--- |
| `primary` \| `success` \| `error` \| `info` \| `warning` |

---

# SnNotificationLevel

通知表现程度等级。

| 可选值 |
| :--- |
| `first` \| `second` \| `third` |

---

# SnNotificationParams

`sn-notification` 组件 `add` 方法入参。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| title | String | 否 | 通知标题 |
| content | String | 否 | 通知内容 |
| type | [SnNotificationType](#snnotificationtype) | 否 | 通知类型 |
| level | [SnNotificationLevel](#snnotificationlevel) | 否 | 通知等级 |
| position | [SnNotificationPosition](#snnotificationposition) | 否 | 队列位置，可选值 `top` \| `bottom` |
| duration | Number | 否 | 显示时长（ms） |
| showProgress | Boolean | 否 | 是否显示进度条 |
| showIcon | Boolean | 否 | 是否显示图标 |
| icon | String | 否 | 图标名 |
| closable | Boolean | 否 | 是否显示关闭按钮 |
| showAction | Boolean | 否 | 是否显示右侧操作插槽（`slot="action"`，需组件标签内定义插槽内容） |
| grouping | Boolean | 否 | 相同内容是否归并计数 |
| bgColor | String | 否 | 背景颜色 |
| titleColor | String | 否 | 标题颜色 |
| contentColor | String | 否 | 内容颜色 |
| iconColor | String | 否 | 图标颜色 |
| borderRadius | String | 否 | 圆角 |
| draggable | Boolean | 否 | 是否可拖拽 |
| dragThreshold | String \| Number | 否 | 拖拽关闭位移阈值 |
| customStyle | UTSJSONObject | 否 | 自定义样式 |

---

# SnNotificationPosition

通知队列位置。

| 可选值 |
| :--- |
| `top` \| `bottom` |

---

# SnNotificationType

通知类型。

| 可选值 |
| :--- |
| `primary` \| `success` \| `error` \| `info` \| `warning` |

---

# SnPostCardAction

动态卡片（sn-post-card）操作栏按钮配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 按钮 id |
| icon | String | 否 | 图标名 |
| text | String | 否 | 按钮文字（一般为数量） |
| disabled | Boolean | 否 | 是否禁用 |
| isActive | Boolean | 否 | 是否处于激活态（如已点赞） |
| iconColor | String | 否 | 图标颜色 |
| textColor | String | 否 | 文字颜色 |
| activeIconColor | String | 否 | 激活态图标颜色 |
| activeTextColor | String | 否 | 激活态文字颜色 |

---

# SnPostCardComment

动态卡片评论区条目。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 评论 id |
| user | String | 否 | 评论用户 |
| content | String | 否 | 评论内容 |
| replyTo | String | 否 | 回复的用户名（为空表示直接评论） |

---

# SnRefresherParams

下拉刷新区域文案与样式配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| refreshText | String | 否 | 下拉中文案 |
| refreshingText | String | 否 | 刷新中文案 |
| textSize | String | 否 | 文本字号 |
| textColor | String | 否 | 文本颜色 |
| icon | String | 否 | 图标名 |
| iconSize | String | 否 | 图标字号 |
| iconColor | String | 否 | 图标颜色 |

---

# SnRegionDetail

`sn-region-picker` 的 `change` 事件返回详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| codes | String[] | 是 | 各级区划代码数组 |
| names | String[] | 是 | 各级名称数组 |

---

# SnRegionLevel

行政区划层级。

| 可选值 |
| :--- |
| `province` \| `city` \| `county` |

---

# SnRegionNode

行政区划节点。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| code | String | 是 | 区划代码 |
| name | String | 是 | 名称 |
| children | [SnRegionNode](#snregionnode)[] | 否 | 子级节点 |

---

# SnRegionValue

`sn-region-picker` 选中值（`v-model`）：各级区划代码数组。

```typescript
type SnRegionValue = string[]
```

---

# SnScanParams

`sn-scan` 经 `uni.navigateTo` 打开扫码页时通过 `SnScanParams` 传参（`snu.openScanPage` 等封装亦使用）。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| scanType | String | 否 | 扫码类型，可选值 `barcode` \| `qrcode` \| `all`，默认 `all` |
| continuous | Boolean | 否 | 是否连续扫码 |
| scanOnlyOnce | Boolean | 否 | 是否识别一次后自动返回 |
| continuousSleep | Number | 否 | 连续扫码间隔（ms） |
| enableDing | Boolean | 否 | 识别成功提示音 |
| dingFileSrc | String | 否 | 自定义提示音文件路径 |
| showTorch | Boolean | 否 | 是否显示手电筒按钮 |
| showAlbum | Boolean | 否 | 是否显示相册选择按钮 |
| showBackButton | Boolean | 否 | 是否显示返回按钮 |
| showAni | Boolean | 否 | 是否显示扫码动画 |
| enableZoom | Boolean | 否 | 是否启用手势缩放 |
| initZoomScale | Number | 否 | 初始缩放倍数 |
| title | String | 否 | 页面标题 |
| titleSize | String \| Number | 否 | 标题字号 |
| titleColor | String | 否 | 标题颜色 |
| tip | String | 否 | 提示文本 |
| tipSize | String \| Number | 否 | 提示字号 |
| tipColor | String | 否 | 提示颜色 |
| customTitleStyle | UTSJSONObject \| String | 否 | 标题自定义样式 |
| customTipStyle | UTSJSONObject \| String | 否 | 提示自定义样式 |

---

# SnSignatureBrush

签名笔触类型。

| 可选值 |
| :--- |
| `default` \| `pen` \| `gel` \| `pencil` \| `marker` \| `brush` |

---

# SnStepStatus

步骤条步骤状态。

| 可选值 |
| :--- |
| `wait` \| `finish` \| `process` \| `error` |

状态含义依次为：等待 / 已完成 / 进行中 / 错误。

---

# SnTabbarItem

`sn-tabbar` 标签栏项数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 否 | 文本 |
| icon | String | 否 | 图标名 |
| image | String | 否 | 图片路径（优先于 icon） |
| activeIcon | String | 否 | 选中态图标名 |
| activeText | String | 否 | 选中态文本 |
| activeImage | String | 否 | 选中态图片路径 |
| interceptor | () => boolean | 否 | 切换拦截器，返回 `false` 阻止切换 |
| badge | [SnBadgeParams](#snbadgeparams) \| null | 否 | 徽标配置 |

---

# SnTabParams

`sn-tabs` 标签项数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| text | String | 是 | 标签文本 |
| icon | String | 否 | 图标名 |
| id | String | 是 | 标签唯一 id |
| disabled | Boolean | 否 | 是否禁用 |
| checked | Boolean | 否 | 是否选中 |
| showBadge | Boolean | 否 | 是否显示徽标 |
| badgeConfig | [SnBadgeParams](#snbadgeparams) \| null | 否 | 徽标配置 |

---

# SnTime

`sn-timer`、`sn-countdown` 等组件的 `change` 事件返回的时间结构。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| d | Number | 是 | 天 |
| h | Number | 是 | 时 |
| m | Number | 是 | 分 |
| s | Number | 是 | 秒 |
| ms | Number | 是 | 毫秒 |

---

# SnToastParams

`sn-toast` 组件 `show` 方法入参，字段与 [`SnShowToastConfig`](/api/types/api#snshowtoastconfig) 基本一致（无回调字段），另含 `overlay`（是否显示遮罩）。

---

# SnTreeData

树形数据集合，即 `sn-tree` 的 `data` 属性类型。

```typescript
type SnTreeData = SnTreeItem[]
```

---

# SnTreeItem

树节点数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 节点唯一 id |
| text | String | 是 | 节点显示文本 |
| icon | String | 否 | 节点图标名 |
| activeIcon | String | 否 | 选中态图标名 |
| rotate | Number | 否 | 图标展开旋转角度（deg） |
| disabled | Boolean | 否 | 是否禁用节点 |
| lazy | Boolean | 否 | 是否懒加载子节点（配合 `load-data`） |
| children | [SnTreeItem](#sntreeitem)[] | 否 | 子节点列表 |

---

# SnTreeLoadData

`sn-tree` 的 `load-data` 属性接收 `SnTreeLoadData` 函数：懒加载节点展开时调用，加载成功经 `resolve(children)` 返回子节点，失败调用 `reject()`。

```typescript
type SnTreeLoadResolve = (children: SnTreeData) => void
type SnTreeLoadReject = () => void
type SnTreeLoadData = (item: SnTreeItem, resolve: SnTreeLoadResolve, reject: SnTreeLoadReject) => void
```

---

# 其他说明

- 日期时间库类型（`DayutsConfig`、`DayutsUnit`、`DayutsFormats`、`DayutsRelativeTime`、`DayutsLocale`、`DayutsObject`）见 [Date 日期库类型](/libs/date/types)。
- 颜色库类型（`LColorOptions`、`LGenerateOptions`）见 [Color 颜色库类型](/libs/color/types)。
- `PermListener`（权限监听）见 [sn-perm-listener](/components/sn-perm-listener)。
- `UniError` 错误类型见 [错误处理机制](/api/error/error#unierror)。
- 少数仅框架内部使用的配置类型（如分组组件的 group config）不在公开文档范围。
