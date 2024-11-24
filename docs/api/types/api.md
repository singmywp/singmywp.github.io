### SnTime

`sn-timer` 和 `sn-countdown` 等组件的 `change` 事件返回 `SnTime` 类型的时间数据，一些其他的时间相关的 API 也可能会使用此类型

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| d    | Number | 是   | 天   |
| h    | Number | 是   | 时   |
| m    | Number | 是   | 分   |
| s    | Number | 是   | 秒   |
| ms   | Number | 是   | 毫秒 |

### SnPointerEvent

`sn-view` 和 `sn-e-gesture` 点击类手势事件（`click`、`dbclick`、`down`）返回类型

| 名称  | 类型            | 必填 | 描述                                                                                                                           |
| :---- | :-------------- | :--- | :----------------------------------------------------------------------------------------------------------------------------- |
| type  | String          | 是   | 点击事件类型，分为：`click`、`dbclick`、`down`                                                                                 |
| x     | Number          | 是   | 点击点的横坐标                                                                                                                 |
| y     | Number          | 是   | 点击点的纵坐标                                                                                                                 |
| event | UniPointerEvent | 是   | 点击事件的原事件，可通过操作此属性实现阻止默认行为、阻止冒泡。`sn-e-gesture` 事件返回的相同结构的 UTSJSONObject 对象无此属性。 |

### SnTouch

`sn-view` 和 `sn-e-gesture` 触摸类手势事件（`touchstart`、`touchend`、`touchmove`、`touchcancel`）（Web PC 端的鼠标事件同样适用）触摸信息

| 名称      | 类型   | 必填 | 描述                                                                   |
| :-------- | :----- | :--- | :--------------------------------------------------------------------- |
| x         | Number | 是   | 触摸点的横坐标                                                         |
| y         | Number | 是   | 触摸点的纵坐标                                                         |
| diffX     | Number | 是   | 相对于上一次触摸点的横坐标差值，为正数则是向右移动，为负数则是向左移动 |
| diffY     | Number | 是   | 相对于上一次触摸点的纵坐标差值，为正数则是向下移动，为负数则是向上移动 |
| direction | String | 是   | 手指移动的方向                                                         |
| id        | Number | 是   | 手指 ID                                                                |

### SnTouchEvent

`sn-view` 和 `sn-e-gesture` 触摸类手势事件（`touchstart`、`touchend`、`touchmove`、`touchcancel`、`longpress`、`showpress`）（Web PC 端的鼠标事件同样适用）返回事件

| 名称    | 类型             | 必填 | 描述                                                                                               |
| :------ | :--------------- | :--- | :------------------------------------------------------------------------------------------------- |
| type    | String           | 是   | 触摸事件类型，分为：`touchstart`、`touchend`、`touchmove`、`touchcancel`、`longpress`、`showpress` |
| touches | Array\<SnTouch\> | 是   | 多根手指的触摸信息                                                                                 |
| event   | UniEvent         | 是   | 触摸事件的原事件，可通过操作此属性实现阻止默认行为、阻止冒泡。`sn-e-gesture` 事件无此属性。        |

### SnFlingEvent

 `sn-e-gesture` Android 原生 `Fling` 事件返回事件

| 名称   | 类型   | 必填 | 描述           |
| :----- | :----- | :--- | :------------- |
| type   | String | 是   | 事件类型       |
| beginX | Number | 是   | 开始时的横坐标 |
| beginY | Number | 是   | 开始时的纵坐标 |
| endX   | Number | 是   | 结束时的横坐标 |
| endY   | Number | 是   | 结束时的纵坐标 |
| vX     | Number | 是   | 横向速度       |
| vY     | Number | 是   | 纵向速度       |


### SnScaleEvent

 `sn-e-gesture` 和 `sn-view` 的 `scale` 事件返回事件类型

| 名称 | 类型   | 必填 | 描述                               |
| :--- | :----- | :--- | :--------------------------------- |
| zoom | Number | 是   | 缩放的倍数（相对于上一次缩放事件） |


### SnRotateEvent

 `sn-e-gesture` 和 `sn-view` 的 `roate` 事件返回事件类型

| 名称   | 类型   | 必填 | 描述                               |
| :----- | :----- | :--- | :--------------------------------- |
| rotate | Number | 是   | 旋转的角度（相对于上一次旋转事件） |


### SnRequestSystemPermissionOptions

 `snu.requestSystemPermission` 需要传入一个 `SnRequestSystemPermissionOptions` 类型的参数

| 名称        | 类型                                                     | 必填 | 描述                                                                     |
| :---------- | :------------------------------------------------------- | :--- | :----------------------------------------------------------------------- |
| permissions | String[]                                                 | 是   | 请求的系统权限列表                                                       |
| success     | (allRight : Boolean, grantedList : String[]) => Void     | 否   | 请求成功的回调函数，参数分别为是否所有权限都授权成功和授权成功的权限列表 |
| fail        | (doNotAskAgain : Boolean, deniedList : String[]) => Void | 否   | 请求失败的回调函数，参数分别为是否不再询问和被拒绝的权限列表             |

### SnRequestMediaPermissionOptionsType

  `SnRequestMediaPermissionOptions` 的 `types` 属性需要传入一个 `SnRequestMediaPermissionOptionsType[]` 类型的字符串数组

| 可选值                        |
| :---------------------------- |
| `image` \| `video` \| `audio` |

### SnRequestMediaPermissionOptions

 `snu.requestMediaPermission` 需要传入一个 `SnRequestMediaPermissionOptionsType` 类型的参数

| 名称    | 类型                                                     | 必填 | 描述                                                                     |
| :------ | :------------------------------------------------------- | :--- | :----------------------------------------------------------------------- |
| types   | SnRequestMediaPermissionOptionsType[]                    | 是   | 需要请求的媒体权限类型                                                   |
| success | (allRight : Boolean, grantedList : String[]) => Void     | 否   | 请求成功的回调函数，参数分别为是否所有权限都授权成功和授权成功的权限列表 |
| fail    | (doNotAskAgain : Boolean, deniedList : String[]) => Void | 否   | 请求失败的回调函数，参数分别为是否不再询问和被拒绝的权限列表             |

### SnColorBase<Badge type="warning" text="内部使用" />

`$snui.colors` 是一个 `SnColorBase` 类型的对象。

> [!TIP] 提示
>
> 以下颜色中后缀带有 `Dark` 的并非是暗黑模式颜色，而是相对于原有颜色更暗的颜色。对应的，后缀带有 `Light` 的则是相对原有颜色较浅的颜色。暗黑模式和亮色模式的颜色集分属于两个不同的 `SnColorBase` 对象。

| 名称               | 类型   | 描述                                                                 |
| :----------------- | :----- | :------------------------------------------------------------------- |
| transparent        | String | 透明颜色（非 `CSS` 的 `transparent` 颜色，此颜色变化时不会出现闪黑） |
| page               | String | 页面背景颜色                                                         |
| front              | String | 前景颜色，一般用作块状组件的背景色                                   |
| dark               | String | 在亮色模式呈现为黑色，在暗黑模式呈现为白色                           |
| disabled           | String | 禁用状态的颜色                                                       |
| disabledText       | String | 禁用状态的文字颜色                                                   |
| disabledDark       | String | 更深的禁用状态的背景颜色                                             |
| disabledDarkText   | String | 更深的禁用状态的文字颜色                                             |
| line               | String | 线条颜色                                                             |
| lineDark           | String | 更深的线条颜色                                                       |
| lineText           | String | 线条文字颜色                                                         |
| title              | String | 标题颜色                                                             |
| text               | String | 文本颜色                                                             |
| textLight          | String | 更浅的文本颜色                                                       |
| info               | String | 信息颜色                                                             |
| infoActive         | String | 激活状态信息                                                         |
| infoText           | String | 信息文字颜色                                                         |
| infoLight          | String | 更浅的信息颜色                                                       |
| infoLightActive    | String | 激活状态更浅的信息                                                   |
| infoLightText      | String | 更浅的信息文字颜色                                                   |
| infoDark           | String | 深色背景的信息颜色                                                   |
| infoDarkActive     | String | 激活状态深色背景的信息                                               |
| infoDarkText       | String | 深色背景的信息文字颜色                                               |
| primary            | String | 主题色                                                               |
| primaryActive      | String | 激活状态的主题色                                                     |
| primaryText        | String | 主题色背景上的文字颜色                                               |
| primaryLight       | String | 更浅的主题色                                                         |
| primaryLightActive | String | 更浅的激活状态的主题色                                               |
| primaryLightText   | String | 更浅的主题色背景上的文字颜色                                         |
| primaryDark        | String | 更深的主题色                                                         |
| primaryDarkActive  | String | 更深的激活状态的主题色                                               |
| primaryDarkText    | String | 更深的主题色背景上的文字颜色                                         |
| success            | String | 成功色                                                               |
| successActive      | String | 激活状态的成功色                                                     |
| successText        | String | 成功色背景上的文字颜色                                               |
| successLight       | String | 更浅的成功色                                                         |
| successLightActive | String | 更浅的激活状态的成功色                                               |
| successLightText   | String | 更浅的成功色背景上的文字颜色                                         |
| successDark        | String | 更深的成功色                                                         |
| successDarkActive  | String | 更深的激活状态的成功色                                               |
| successDarkText    | String | 更深的成功色背景上的文字颜色                                         |
| error              | String | 错误色                                                               |
| errorActive        | String | 激活状态的错误色                                                     |
| errorText          | String | 错误色背景上的文字颜色                                               |
| errorLight         | String | 更浅的错误色                                                         |
| errorLightActive   | String | 更浅的激活状态的错误色                                               |
| errorLightText     | String | 更浅的错误色背景上的文字颜色                                         |
| errorDark          | String | 更深的错误色                                                         |
| errorDarkActive    | String | 更深的激活状态的错误色                                               |
| errorDarkText      | String | 更深的错误色背景上的文字颜色                                         |
| warning            | String | 警告色                                                               |
| warningActive      | String | 激活状态的警告色                                                     |
| warningText        | String | 警告色背景上的文字颜色                                               |
| warningLight       | String | 更浅的警告色                                                         |
| warningLightActive | String | 更浅的激活状态的警告色                                               |
| warningLightText   | String | 更浅的警告色背景上的文字颜色                                         |
| warningDark        | String | 更深的警告色                                                         |
| warningDarkActive  | String | 更深的激活状态的警告色                                               |
| warningDarkText    | String | 更深的警告色背景上的文字颜色                                         |
| toast              | String | `sn-toast` 背景色                                                    |

### SnToastConfig

> [!WARNING] 注意
>
> 高版本 HBuilderX 支持编译器自动推导，无需手动 `import` 或 `as` 此类型。如必须手动导入，则需从 `@/uni_modules/sn-native/utssdk/interface.uts` 导入。

`snu.showToast` 需要传入一个 `SnToastConfig` 类型的对象作为提示框配置

| 名称     | 类型   | 必填 | 描述                                                                                                                           |
| :------- | :----- | :--- | :----------------------------------------------------------------------------------------------------------------------------- |
| text     | String | 是   | 提示框的文本内容                                                                                                               |
| type     | String | 否   | 提示框的类型，不同的类型有不同的颜色风格，默认为 `normal`<br />可选值：`normal` \| `success` \| `error` \| `warning` \| `info` |
| position | String | 否   | 提示框的位置，默认为 `center`。可选值：`top` \| `center`                                                                       | `bottom` |
| duration | String | 否   | 提示框的显示时间，默认为 `short`。可选值：`short` \| `long`                                                                    |
| offsetX  | Number | 否   | 提示框的横向偏移量，用于微调提示框的位置                                                                                       |
| offsetY  | Number | 否   | 提示框的纵向偏移量，用于微调提示框的位置                                                                                       |


### SnFile

SinleUI 文件对象类型。部分组件内部或回调函数中会使用此类型，如 `sn-upload-media` 组件。

| 名称     | 类型   | 必填 | 描述                 |
| :------- | :----- | :--- | :------------------- |
| filename | String | 是   | 文件名称             |
| path     | String | 是   | 文件路径             |
| size     | Number | 否   | 文件大小，单位为字节 |
| ext      | String | 是   | 文件扩展名           |

### SnChooseMediaOptions

`snu.chooseMedia` 需要传入一个 `SnChooseMediaOptions` 类型的对象作为选择媒体文件的配置选项

| 名称     | 类型                                               | 必填 | 描述                         |
| :------- | :------------------------------------------------- | :--- | :--------------------------- |
| type     | String                                             | 是   | 选择的类型。可选值：`image` \| `video` \| `all` |
| multiple | Boolean                                            | 否   | 是否多选                     |
| maxCount | Number                                             | 否   | 最大选择数量                 |
| success  | (files: [SnFile](/api/types/api#snfile)[]) => Void | 否   | 成功回调，返回选择的文件数组 |
| fail     | (error: [SnError](/api/error/snerror)) => Void     | 否   | 失败回调，返回错误信息       |

### SnShowActionsheetConfig

`snu.showActionsheet` 需要传入一个 `SnShowActionsheetConfig` 类型的对象作为配置

| 名称     | 类型                                                        | 必填 | 描述                             |
| :------- | :---------------------------------------------------------- | :--- | :------------------------------- |
| title        | String                                                         | 否   | 标题，默认为空         |
| actions      | [SnActionsheetItem](/api/types/components#snactionsheetitem)[] | 是   | 操作项列表             |
| showCancel   | Boolean                                                        | 否   | 是否显示取消按钮       |
| cancelText   | String                                                         | 否   | 取消按钮文本内容       |
| titleColor   | String                                                         | 否   | 标题颜色               |
| titleSize    | String                                                         | 否   | 标题字体大小           |
| bgColor      | String                                                         | 否   | 操作项文本字体大小     |
| itemTextSize | String                                                         | 否   | 操作项文本颜色         |
| itemPadding  | String                                                         | 否   | 操作项内边距           |
| borderRadius | String                                                         | 否   | 圆角大小               |
| maskOpacity  | Number                                                         | 否   | 遮罩层透明度           |
| aniTime      | String                                                         | 否   | 动画时长               |
| preventBack  | Boolean                                                        | 否   | 是否阻止返回事件       |
| disabled     | Boolean                                                        | 否   | 是否禁用               |
| maskClose    | Boolean                                                        | 否   | 是否允许点击遮罩层关闭 |
| customStyle  | UTSJSONObject                                                  | 否   | 自定义样式             |
| success  | (tapIndex: Number) => Void                                  | 否   | 成功回调，返回用户点击的按钮索引 |
| fail     | (error: [SnError](/api/error/snerror)) => Void              | 否   | 失败回调，返回错误信息           |
| complete | (res: Any) => Void                                          | 否   | 完成回调，返回成功或失败的参数   |

### SnPreviewImageLongPressActions

`snu.previewImage` 的参数的 `longPressActions` 需要传入一个 `SnPreviewImageLongPressActions` 类型的对象作为图片长按操作配置

| 名称       | 类型                                                           | 必填 | 描述                             |
| :--------- | :------------------------------------------------------------- | :--- | :------------------------------- |
| actions    | [SnActionsheetItem](/api/types/components#snactionsheetitem)[] | 是   | 操作项列表                       |
| showCancel | Boolean                                                        | 否   | 是否显示取消按钮                 |
| success    | (tapIndex: Number) => Void                                     | 否   | 成功回调，返回用户点击的按钮索引 |
| fail       | (error: [SnError](/api/error/snerror)) => Void                 | 否   | 失败回调，返回错误信息           |
| complete   | (res: Any) => Void                                             | 否   | 完成回调，返回成功或失败的参数   |

### SnPreviewImageConfig

`snu.previewImage` 的参数的 `config` 需要传入一个 `SnPreviewImageConfig` 类型的对象作为配置

| 名称             | 类型                                                              | 必填 | 描述           |
| :--------------- | :---------------------------------------------------------------- | :--- | :------------- |
| urls             | String[]                                                          | 是   | 图片地址数组   |
| longPressActions | [SnPreviewImageLongPressActions](#snpreviewimagelongpressactions) | 否   | 长按操作项配置 |

### SnShowToastConfig

`snu.showToast` 的参数的 `config` 需要传入一个 `SnShowToastConfig` 类型的对象作为配置

| 名称         | 类型                  | 必填 | 描述                                       |
| :----------- | :-------------------- | :--- | :----------------------------------------- |
| text         | String                | 否   | 提示文本内容                               |
| bgColor      | String                | 否   | 轻提示背景颜色                             |
| position     | String                | 否   | 轻提示位置。可选值：`top` \| `center` \| `bottom`                                 |
| duration     | Number                | 否   | 轻提示显示时间（单位：毫秒）               |
| textSize     | String                | 否   | 提示文本字体大小                           |
| textColor    | String                | 否   | 提示文本颜色                               |
| borderRadius | String                | 否   | 轻提示圆角大小                             |
| padding      | String                | 否   | 轻提示内边距                               |
| icon         | String                | 否   | 提示图标名称                               |
| iconSize     | String                | 否   | 图标大小                                   |
| iconColor    | String                | 否   | 图标颜色                                   |
| textAlign    | String                | 否   | 文本对齐方式                               |
| loading      | Boolean               | 否   | 是否显示加载中的图标                       |
| textLines    | Number                | 否   | 文本最大行数                               |
| customStyle  | UTSJSONObject         | 否   | 自定义轻提示样式                           |
| success      | (() => Void)          | 否   | 成功回调                                   |
| fail         | ((error: SnError) => Void) | 否   | 失败回调，参数为错误信息                 |
| complete     | ((res: Any \| Null) => Void)  | 否   | 完成回调，参数为成功或失败回调的参数       |


### SnShowModalConfig

`snu.showModal` 的参数的 `config` 需要传入一个 `SnShowModalConfig` 类型的对象作为配置

| 名称             | 类型                                                              | 必填 | 描述                                       |
| :--------------- | :---------------------------------------------------------------- | :--- | :----------------------------------------- |
| title            | String                                                     | 否   | 模态框标题                                 |
| titleAlign       | String                                                     | 否   | 标题对齐方式                               |
| titleSize        | String                                                     | 否   | 标题字体大小                               |
| titleFont        | String                                                     | 否   | 标题字体                                   |
| titleColor       | String                                                     | 否   | 标题颜色                                   |
| bgColor          | String                                                     | 否   | 背景颜色                                   |
| borderRadius     | String                                                     | 否   | 圆角大小                                   |
| content          | String                                                     | 否   | 内容                                       |
| contentAlign     | String                                                     | 否   | 内容对齐方式                               |
| contentSize      | String                                                     | 否   | 内容字体大小                               |
| contentColor     | String                                                     | 否   | 内容颜色                                   |
| contentFont      | String                                                     | 否   | 内容字体                                   |
| buttonType       | String                                                     | 否   | 按钮类型（`embed`：嵌入式，`float`：浮动式）   |
| buttonBorder     | String                                                     | 否   | 按钮边框样式                               |
| confirmText      | String                                                     | 否   | 确定按钮文本                               |
| confirmTextColor | String                                                     | 否   | 确定按钮文本颜色                           |
| confirmTextSize  | String                                                     | 否   | 确定按钮文本大小                           |
| showCancel       | Boolean                                                    | 否   | 是否显示取消按钮                           |
| showConfirm      | Boolean                                                    | 否   | 是否显示确定按钮                           |
| cancelText       | String                                                     | 否   | 取消按钮文本                               |
| cancelTextColor  | String                                                     | 否   | 取消按钮文本颜色                           |
| cancelTextSize   | String                                                     | 否   | 取消按钮文本大小                           |
| position         | String                                                     | 否   | 弹出位置                                   |
| aniTime          | String                                                     | 否   | 动画时长（单位：ms）                        |
| maskClose        | Boolean                                                    | 否   | 点击蒙层是否关闭                           |
| disabled         | Boolean                                                    | 否   | 是否禁用                                   |
| preventBack      | Boolean                                                    | 否   | 是否阻止返回事件                           |
| maskOpacity      | Number                                                     | 否   | 遮罩层透明度                               |
| customStyle      | UTSJSONObject                                              | 否   | 自定义模态框样式                           |
| success          | ((confirm: Boolean, cancel: Boolean) => Void)              | 否   | 成功回调。confirm 为 true 时，表示用户点击了确定按钮；cancel 为 true 时，表示用户点击了取消按钮（用于区分点击遮罩关闭还是点击取消按钮关闭） |
| fail             | ((error: [SnError](/api/error/snerror#snerror)) => Void)     | 否   | 失败回调，参数为错误信息                   |
| complete         | ((res: Any \| Null) => Void)                              | 否   | 完成回调，参数为成功或失败回调的参数       |




### 其他类型

**Color 颜色库**：[类型](../../libs/color/types)

**Date 日期库**：[类型](../../libs/date/types)