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

 `sn-e-gesture` Android 原生 `Scale` 事件返回事件

| 名称 | 类型   | 必填 | 描述                     |
| :--- | :----- | :--- | :----------------------- |
| zoom | Number | 是   | 缩放的倍数（相对于之前） |

### SnRequestSystemPermissionOptions

 `snu.requestSystemPermission` 需要传入一个 `SnRequestSystemPermissionOptions` 类型的参数

| 名称        | 类型                                                     | 必填 | 描述                                                                     |
| :---------- | :------------------------------------------------------- | :--- | :----------------------------------------------------------------------- |
| permissions | String[]                                                 | 是   | 请求的系统权限列表                                                       |
| success     | (allRight : Boolean, grantedList : String[]) => void     | 否   | 请求成功的回调函数，参数分别为是否所有权限都授权成功和授权成功的权限列表 |
| fail        | (doNotAskAgain : Boolean, deniedList : String[]) => void | 否   | 请求失败的回调函数，参数分别为是否不再询问和被拒绝的权限列表             |

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
| success | (allRight : Boolean, grantedList : String[]) => void     | 否   | 请求成功的回调函数，参数分别为是否所有权限都授权成功和授权成功的权限列表 |
| fail    | (doNotAskAgain : Boolean, deniedList : String[]) => void | 否   | 请求失败的回调函数，参数分别为是否不再询问和被拒绝的权限列表             |

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

### SnShareConfig

`snu.share` 需要传入一个 `SnShareConfig` 类型的对象作为分享配置

| 名称     | 类型                        | 必填 | 描述                                                                                                  |
| :------- | :-------------------------- | :--- | :---------------------------------------------------------------------------------------------------- |
| type     | String                      | 是   | 分享类型，可选值 `text` \| `image` \| `video` \| `audio` \| `file`                                    |
| title    | String                      | 否   | 分享标题                                                                                              |
| content  | String                      | 否   | 分享内容（当 `type` 为 `text `时，`content` 为必填）                                                  |
| path     | String                      | 否   | 分享文件路径（当 `type` 不为 `text` 时，`path` 为必填，支持本地路径、绝对路径、项目相对路径自动转换） |
| success  | () => void                  | 否   | 分享成功回调                                                                                          |
| fail     | (err: Error) => void        | 否   | 分享失败回调                                                                                          |
| complete | (res?: Any \| null) => void | 否   | 分享完成回调                                                                                          |

### SnToastConfig

`snu.showToast` 需要传入一个 `SnToastConfig` 类型的对象作为提示框配置

| 名称     | 类型   | 必填 | 描述                                                         |
| :------- | :----- | :--- | :----------------------------------------------------------- |
| text     | String | 是   | 提示框的文本内容                                             |
| type     | String | 否   | 提示框的类型，不同的类型有不同的颜色风格，默认为 `normal`<br />可选值：`normal` \| `success` \| `error` \| `warning` \| `info` |
| position | String | 否   | 提示框的位置，默认为 `center`。可选值：`top` \| `center` | `bottom` |
| duration | String | 否   | 提示框的显示时间，默认为 `short`。可选值：`short` \| `long`  |
| offsetX  | Number | 否   | 提示框的横向偏移量，用于微调提示框的位置                     |
| offsetY  | Number | 否   | 提示框的纵向偏移量，用于微调提示框的位置                     |

### 其他类型

**Color 颜色库**：[类型](../../libs/color/types)

**Date 日期库**：[类型](../../libs/date/types)