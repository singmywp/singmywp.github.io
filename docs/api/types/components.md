### SnAvatarParams

部分内置 `sn-avatar` 的组件可通过 `SnAvatarParams` 类型的 `avatarConfig` 属性配置参数

| 名称          | 类型    | 必填 | 描述                                           |
| :------------ | :------ | :--- | :--------------------------------------------- |
| mode          | String  | 否   | 显示模式。可选值为 `image` \| `text` \| `icon` |
| imageMode     | String  | 否   | 图片显示模式                                   |
| size          | String  | 否   | 尺寸大小                                       |
| src           | String  | 否   | 图片路径                                       |
| text          | String  | 否   | 文本内容                                       |
| icon          | String  | 否   | 图标名称                                       |
| iconSize      | String  | 否   | 图标大小                                       |
| iconColor     | String  | 否   | 图标颜色                                       |
| shape         | String  | 否   | 形状。可选值：`circle` \| `square`             |
| textColor     | String  | 否   | 文本颜色                                       |
| bgColor       | String  | 否   | 背景颜色                                       |
| textSize      | String  | 否   | 文本大小                                       |
| borderRadius  | String  | 否   | 圆角大小                                       |
| enablePreview | Boolean | 否   | 是否启用图片预览                               |

### SnAvatarGroupItem

`sn-avatar-group` 的 `data` 属性需要传入一个 `SnAvatarGroupItem[]` 类型的数组。

此对象只能传入数据，设置样式请直接通过 `sn-avatar-group` 的属性统一设置。

| 名称      | 类型   | 必填 | 描述                                           |
| :-------- | :----- | :--- | :--------------------------------------------- |
| mode      | String | 否   | 显示模式。可选值为 `image` \| `text` \| `icon` |
| imageMode | String | 否   | 图片显示模式                                   |
| src       | String | 否   | 图片路径                                       |
| text      | String | 否   | 文本内容                                       |
| icon      | String | 否   | 图标名称                                       |

### SnBadgeParams

部分内置 `sn-badge` 的组件可通过 `SnBadgeParams` 类型的 `badgeConfig` 属性配置参数

| 名称      | 类型    | 必填 | 描述                     |
| :-------- | :------ | :--- | :----------------------- |
| value     | Number  | 否   | 显示的值（仅number模式） |
| max       | Number  | 否   | 最大值（仅number模式）   |
| size      | String  | 否   | 大小                     |
| offset    | String  | 否   | 偏移量，徽标的 transform |
| mode      | String  | 否   | 模式。可选值：`number`   | `text` | `dot` |
| text      | String  | 否   | 文本内容                 |
| showZero  | Boolean | 否   | 是否显示0                |
| textColor | String  | 否   | 文字颜色                 |
| bgColor   | String  | 否   | 背景颜色                 |

### SnCountdownTime

`sn-countdown` 的 `change` 事件返回 `SnCountdownTime` 类型的时间数据

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| d    | Number | 是   | 天   |
| h    | Number | 是   | 小时 |
| m    | Number | 是   | 分钟 |
| s    | Number | 是   | 秒   |
| ms   | Number | 是   | 毫秒 |

### SnDataItem

`sn-picker-view` 、`sn-select` 、`sn-topbar` 等数据组件的 `data` 属性需要传入一个 `SnDataItem[]` 的对象，组件事件触发时返回 `SnDataItem` 对象

| 名称     | 类型    | 必填 | 描述                                       |
| :------- | :------ | :--- | :----------------------------------------- |
| id       | String  | 是   | 数据的唯一标识                             |
| text     | String  | 否   | 数据显示文本（不一定必备，视组件具体要求） |
| icon     | String  | 否   | 数据显示图标（不一定必备，视组件具体要求） |
| disabled | Boolean | 否   | 是否禁用子项（不一定必备，视组件具体要求） |

### SnFormItemData<Badge type="warning" text="内部使用" />

`sn-form-item` 内部注册组件数据类型

| 名称     | 类型                    | 必填 | 描述     |
| :------- | :---------------------- | :--- | :------- |
| field    | String                  | 是   | 子项名称 |
| instance | ComponentPublicInstance | 是   | 子项实例 |

### SnEmptyColorConfig<Badge type="warning" text="内部使用" />

`sn-empty` 内部传递组件参数数据类型

| 名称          | 类型   | 必填 | 描述     |
| :------------ | :----- | :--- | :------- |
| themeColor    | String | 是   | 主题颜色 |
| hairColor     | String | 是   | 头发颜色 |
| clothesColor  | String | 是   | 衣服颜色 |
| trousersColor | String | 是   | 裤子颜色 |
| shoesColor    | String | 是   | 鞋子颜色 |
| itemColor     | String | 是   | 项目颜色 |
| skinColor     | String | 是   | 皮肤颜色 |
| elementColor  | String | 是   | 元素颜色 |


### SnFormItemRule

`sn-form-item` 的 `rule` 属性需要传入一个 `SnFormItemRule` 类型的对象

| 名称      | 类型                   | 必填 | 描述                                                                                                                                                                                                                                         |
| :-------- | :--------------------- | :--- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | String                 | 否   | 字段类型。可选值：`String` \| `number` \| `Boolean` \| `integer` \| `float` \| `array` \| `object` \| `enum` \| `url` \| `email` \| `qqnumber` \| `chinese` \| `abc` \| `phone` \| `landline` \| `ipv6` \| `ipv4` \| `idcard` \| `carnumber` |
| required  | Boolean                | 否   | 是否必填                                                                                                                                                                                                                                     |
| message   | String                 | 否   | 校验失败提示信息                                                                                                                                                                                                                             |
| pattern   | Regexp                 | 否   | 正则校验规则                                                                                                                                                                                                                                 |
| min       | Number                 | 否   | 最小长度                                                                                                                                                                                                                                     |
| max       | Number                 | 否   | 最大长度                                                                                                                                                                                                                                     |
| len       | Number                 | 否   | 值的长度，同时设置 min、max 和 len 时，以 len 的值为准                                                                                                                                                                                       |
| enum      | Array\<Any\>           | 否   | 值的枚举值，限制值只能为此枚举数组的子项。对于字符串枚举类型，这里的值应为字符串数组                                                                                                                                                         |
| transform | (value: Any) => Any    | 否   | 数据转换函数，校验前先执行此函数对原始数据进行处理                                                                                                                                                                                           |
| valid     | (value: Any) => String | 否   | 自定义校验函数，在默认的校验前先执行此函数。返回空文本串表示校验通过；返回其他字符串表示校验失败，且返回的字符串将作为校验失败的提示信息                                                                                                     |


### SnFormItemVerifyResult<Badge type="warning" text="内部使用" />

`sn-form-item` 内部单一项校验结果数据类型

| 名称    | 类型    | 必填 | 描述                   |
| :------ | :------ | :--- | :--------------------- |
| valid   | Boolean | 是   | 子项校验是否通过       |
| message | String  | 否   | 子项校验失败的提示信息 |
| field   | String  | 是   | 子项的名称             |


### SnFormValidResult

`sn-form` 的 `submit` 方法需要传入一个 `SnFormValidResult` 类型的回调对象

| 名称    | 类型                                                                       | 必填 | 描述                                                                          |
| :------ | :------------------------------------------------------------------------- | :--- | :---------------------------------------------------------------------------- |
| success | () => void                                                                 | 否   | 表单校验成功回调                                                              |
| fail    | (failResults: [SnFormItemVerifyResult](#snformitemverifyresult)[]) => void | 否   | 表单校验失败回调，会将所有校验失败的子项的错误信息作为 `failResults` 数组参数 |


### SnLoadmoreParams

部分内置 `sn-loadmore` 的组件可通过 `SnLoadmoreParams` 类型的 `loadmoreConfig` 属性配置参数

| 名称         | 类型    | 必填 | 描述                 |
| :----------- | :------ | :--- | :------------------- |
| loadmoreText | String  | 否   | 加载更多时的文本     |
| nomoreText   | String  | 否   | 没有更多内容时的文本 |
| loadingText  | String  | 否   | 加载中的文本         |
| textSize     | String  | 否   | 文本大小             |
| textColor    | String  | 否   | 文本颜色             |
| iconSize     | String  | 否   | 图标大小             |
| iconColor    | String  | 否   | 图标颜色             |
| lineColor    | String  | 否   | 线条颜色             |
| lineHeight   | String  | 否   | 线条高度             |
| dashed       | Boolean | 否   | 是否显示虚线         |
| disabled     | Boolean | 否   | 是否禁用加载更多功能 |


### SnMedia<Badge type="warning" text="内部使用" />

`sn-media` 组件的传递选择的媒体文件数据

| 名称   | 类型   | 必填 | 描述                                                                       |
| :----- | :----- | :--- | :------------------------------------------------------------------------- |
| file   | Any    | 否   | File 对象                                                                  |
| src    | String | 否   | 选中文件临时路径                                                           |
| thumb  | String | 否   | 缩略图地址。视频类模式专用。                                               |
| name   | String | 是   | 文件 uuid，由组件内部随机生成                                              |
| status | String | 是   | 媒体文件状态。可选值：`uploaded` \| `uploading` \| `unuploaded` \| `error` |

### SnRefresherParams

部分内置 `sn-refresher` 的组件可通过 `SnRefresherParams` 类型的 `refresherConfig` 属性配置参数

| 名称           | 类型   | 必填 | 描述             |
| :------------- | :----- | :--- | :--------------- |
| refreshText    | String | 否   | 刷新时的文本     |
| refreshingText | String | 否   | 正在刷新时的文本 |
| textSize       | String | 否   | 文本大小         |
| textColor      | String | 否   | 文本颜色         |
| icon           | String | 否   | 图标名称         |
| iconSize       | String | 否   | 图标大小         |
| iconColor      | String | 否   | 图标颜色         |


### SnScanParams

部分内置 `sn-scan` 的组件可通过 `SnScanParams` 类型的 `scanConfig` 属性配置参数

### SnScanParams
| 名称            | 类型    | 必填 | 描述                                                                              |
| :-------------- | :------ | :--- | :-------------------------------------------------------------------------------- |
| enableDing      | Boolean | 否   | 是否启用扫描成功提示声                                                            |
| showTorch       | Boolean | 否   | 是否启用手电筒                                                                    |
| dingFileSrc     | String  | 否   | 扫描成功提示音文件路径                                                            |
| scanType        | String  | 否   | 扫描类型，可选值：`barcode` \| `qrcode` \| `all`                                  |
| continuous      | Boolean | 否   | 是否连续扫描（即扫描成功后触发 `scanned` 事件 但不会触发 `goin` 事件）            |
| scanOnlyOnce    | Boolean | 否   | 是否只扫描一次（同时设置 `scanOnlyOnce` 和 `continuous`，以 `scanOnlyOnce` 为准） |
| title           | String  | 否   | 扫描页面标题                                                                      |
| initZoomScale   | Number  | 否   | 初始缩放比例                                                                      |
| continuousSleep | Number  | 否   | 连续扫描间隔时间（单位 ms）                                                       |
| showAlbum       | Boolean | 否   | 是否显示相册按钮                                                                  |
| showBackButton  | Boolean | 否   | 是否显示返回按钮                                                                  |
| showAni         | Boolean | 否   | 是否启用动画                                                                      |
| enableZoom      | Boolean | 否   | 是否启用手势缩放                                                                  |


### SnTabbarItem

`sn-tabbar` 组件的 `data` 属性需要传入一个 `SnTabbarItem[]` 类型的对象

| 名称        | 类型                            | 必填 | 描述                                                        |
| :---------- | :------------------------------ | :--- | :---------------------------------------------------------- |
| text        | String                          | 否   | 子项文本                                                    |
| icon        | String                          | 否   | 子项图标                                                    |
| image       | String                          | 否   | 子项图片                                                    |
| activeText  | String                          | 否   | 选中子项文本                                                |
| activeIcon  | String                          | 否   | 选中子项图标                                                |
| activeImage | String                          | 否   | 选中子项图片                                                |
| interceptor | () => Boolean                   | 否   | 拦截器方法，可以在此方法内鉴权。如果返回 `false` 则拦截跳转 |
| badge       | [SnBadgeParams](#snbadgeparams) | 否   | 子项徽标配置                                                |

### SnTabParams

`sn-tabs` 组件的 `data` 属性需要传入一个 `SnTabParams[]` 类型的对象

| 名称        | 类型                            | 必填 | 描述                              |
| :---------- | :------------------------------ | :--- | :-------------------------------- |
| id          | String                          | 是   | 子项标识符。组件事件将返回此 `id` |
| text        | String                          | 是   | 子项文本                          |
| icon        | String                          | 否   | 子项图标                          |
| disabled    | Boolean                         | 否   | 是否禁用子项                      |
| badgeConfig | [SnBadgeParams](#snbadgeparams) | 否   | 子项徽标配置                      |

### SnTimerTime

`sn-timer` 的 `change` 事件返回 `SnTimerTime` 类型的时间数据

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| d    | Number | 是   | 天   |
| h    | Number | 是   | 时   |
| m    | Number | 是   | 分   |
| s    | Number | 是   | 秒   |
| ms   | Number | 是   | 毫秒 |

### SnToastParams

- 部分内置 `sn-toast` 的组件可通过 `SnToastParams` 类型的 `toastConfig` 属性配置参数
- `sn-toast` 组件的 `configShow` 方法需要传入一个 `SnToastParams` 类型的对象

| 名称         | 类型    | 必填 | 描述                                                                                |
| :----------- | :------ | :--- | :---------------------------------------------------------------------------------- |
| text         | String  | 否   | 文本内容                                                                            |
| bgColor      | String  | 否   | 背景颜色                                                                            |
| overlay      | Boolean | 否   | 是否显示透明遮罩层（防穿透）                                                        |
| position     | String  | 否   | 显示位置，可选值：`top` \| `center` \| `bottom`                                     |
| duration     | Number  | 否   | 显示时长（单位 ms）                                                                 |
| textColor    | String  | 否   | 文本颜色                                                                            |
| borderRadius | String  | 否   | 圆角大小                                                                            |
| padding      | String  | 否   | 内边距                                                                              |
| icon         | String  | 否   | 图标名称                                                                            |
| iconColor    | String  | 否   | 图标颜色                                                                            |
| iconSize     | String  | 否   | 图标大小                                                                            |
| loading      | Boolean | 否   | 是否加载中（设置后 `duration` 失效，默认不会自动消失，可通过调用 `close` 方法关闭） |
| textLines    | Number  | 否   | 文本行数                                                                            |
| textAlign    | String  | 否   | 文本对齐方式                                                                        |


### SnWaterfallItem<Badge type="warning" text="内部使用" />

`sn-waterfall` 及 `sn-waterfall-item` 组件内部传递数据使用

| 名称   | 类型                                   | 必填 | 描述                     |
| :----- | :------------------------------------- | :--- | :----------------------- |
| id     | String                                 | 是   | 瀑布流子项的唯一标识符   |
| top    | Number                                 | 是   | 瀑布流子项距离顶部的距离 |
| left   | Number                                 | 是   | 瀑布流子项距离左侧的距离 |
| width  | Number                                 | 是   | 瀑布流子项的宽度         |
| height | Number                                 | 是   | 瀑布流子项的高度         |
| node   | SnWaterfallItemComponentPublicInstance | 是   | 瀑布流子项对应的组件实例 |

### SnActionsheetItem

`sn-actionsheet` 的 `actions` 属性需要传入一个 `SnActionsheetItem[]` 类型的数组

| 名称     | 类型    | 必填 | 描述           |
| :------- | :------ | :--- | :------------- |
| text     | String  | 是   | 操作项文本内容 |
| color    | String  | 否   | 操作项颜色     |
| disabled | Boolean | 否   | 是否禁用操作项 |
