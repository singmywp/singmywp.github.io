### SnAvatarShape 

| 可选值               |
| :------------------- |
| `circle` \| `square` |

### SnAvatarParams

部分内置 `sn-avatar` 的组件可通过 `SnAvatarParams` 类型的 `avatarConfig` 属性配置参数

| 名称          | 类型                            | 必填 | 描述 |
| :------------ | :------------------------------ | :--- | :--- |
| mode          | String                          | 否   | -    |
| imageMode     | String                          | 否   | -    |
| size          | String                          | 否   | -    |
| src           | String                          | 否   | -    |
| text          | String                          | 否   | -    |
| icon          | String                          | 否   | -    |
| iconSize      | String                          | 否   | -    |
| iconColor     | String                          | 否   | -    |
| shape         | [SnAvatarShape](#SnAvatarShape) | 否   | -    |
| textColor     | String                          | 否   | -    |
| bgColor       | String                          | 否   | -    |
| textSize      | String                          | 否   | -    |
| borderRadius  | String                          | 否   | -    |
| enablePreview | Boolean                         | 否   | -    |

### SnBadgeParams

部分内置 `sn-badge` 的组件可通过 `SnBadgeParams` 类型的 `badgeConfig` 属性配置参数

| 名称      | 类型      | 必填 | 描述 |
| :-------- | :-------- | :--- | :--- |
| value     | Number  | 否   | -    |
| max       | Number  | 否   | -    |
| size      | String  | 否   | -    |
| offset    | String  | 否   | -    |
| mode      | String  | 否   | -    |
| text      | String  | 否   | -    |
| showZero  | Boolean | 否   | -    |
| textColor | String  | 否   | -    |
| bgColor   | String  | 否   | -    |

### SnCountdownTime

`sn-countdown` 的 `change` 事件返回 `SnCountdownTime` 类型的时间数据

| 名称 | 类型     | 必填 | 描述 |
| :--- | :------- | :--- | :--- |
| d    | Number | 是   | -    |
| h    | Number | 是   | -    |
| m    | Number | 是   | -    |
| s    | Number | 是   | -    |
| ms   | Number | 是   | -    |

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

| 名称     | 类型                    | 必填 | 描述 |
| :------- | :---------------------- | :--- | :--- |
| field    | String                  | 是   | -    |
| instance | ComponentPublicInstance | 是   | -    |

### SnEmptyColorConfig<Badge type="warning" text="内部使用" />

`sn-empty` 内部传递组件参数数据类型

| 名称          | 类型     | 必填 | 描述 |
| :------------ | :------- | :--- | :--- |
| themeColor    | String | 是   | -    |
| hairColor     | String | 是   | -    |
| clothesColor  | String | 是   | -    |
| trousersColor | String | 是   | -    |
| shoesColor    | String | 是   | -    |
| itemColor     | String | 是   | -    |
| skinColor     | String | 是   | -    |
| elementColor  | String | 是   | -    |

### SnFormItemRule

`sn-form-item` 的 `rule` 属性需要传入一个 `SnFormItemRule` 类型的对象

| 名称      | 类型                   | 必填 | 描述 |
| :-------- | :--------------------- | :--- | :--- |
| type      | String                 | 是   | …    |
| required  | Boolean                | 否   | -    |
| message   | String                 | 否   | -    |
| pattern   | RegExp                 | 否   | -    |
| min       | Number                 | 否   | -    |
| max       | Number                 | 否   | -    |
| len       | Number                 | 否   | -    |
| enum      | Array\<Any\>           | 否   | -    |
| transform | (value: Any) => Any    | 否   | -    |
| valid     | (value: Any) => String | 否   | -    |

### SnFormItemVerifyResult<Badge type="warning" text="内部使用" />

`sn-form-item` 内部单一项校验结果数据类型

| 名称    | 类型      | 必填 | 描述 |
| :------ | :-------- | :--- | :--- |
| valid   | Boolean | 是   | -    |
| message | String  | 否   | -    |
| field   | String  | 是   | -    |

### SnFormValidResult

`sn-form` 的 `submit` 方法需要传入一个 `SnFormValidResult` 类型的回调对象

| 名称    | 类型                                            | 必填 | 描述 |
| :------ | :---------------------------------------------- | :--- | :--- |
| success | () => void                                      | 否   | -    |
| fail    | (failResults: SnFormItemVerifyResult[]) => void | 否   | -    |

### SnLoadmoreParams

部分内置 `sn-loadmore` 的组件可通过 `SnLoadmoreParams` 类型的 `loadmoreConfig` 属性配置参数

| 名称         | 类型      | 必填 | 描述 |
| :----------- | :-------- | :--- | :--- |
| loadmoreText | String  | 否   | -    |
| nomoreText   | String  | 否   | -    |
| loadingText  | String  | 否   | -    |
| textSize     | String  | 否   | -    |
| textColor    | String  | 否   | -    |
| iconSize     | String  | 否   | -    |
| iconColor    | String  | 否   | -    |
| lineColor    | String  | 否   | -    |
| lineHeight   | String  | 否   | -    |
| dashed       | Boolean | 否   | -    |
| disabled     | Boolean | 否   | -    |

### SnMediaStatus<Badge type="warning" text="内部使用" />

`sn-media` 组件的传递选择的媒体文件数据的 `status` 属性

| 可选值                                               |
| :--------------------------------------------------- |
| `uploaded` \| `uploading` \| `unuploaded` \| `error` |

### SnMedia<Badge type="warning" text="内部使用" />

`sn-media` 组件的传递选择的媒体文件数据

| 名称   | 类型           | 必填 | 描述                          |
| :----- | :------------- | :--- | :---------------------------- |
| file   | Any \| null    | 否   | File 对象                     |
| src    | String \| null | 否   | 选中文件临时路径              |
| thumb  | String \| null | 否   | 缩略图地址。视频类模式专用。  |
| name   | String         | 是   | 文件 uuid，由组件内部随机生成 |
| status | SnMediaStatus  | 是   | 媒体文件状态                  |

### SnRefresherParams

部分内置 `sn-refresher` 的组件可通过 `SnRefresherParams` 类型的 `refresherConfig` 属性配置参数

| 名称           | 类型     | 必填 | 描述 |
| :------------- | :------- | :--- | :--- |
| refreshText    | String | 否   | -    |
| refreshingText | String | 否   | -    |
| textSize       | String | 否   | -    |
| textColor      | String | 否   | -    |
| icon           | String | 否   | -    |
| iconSize       | String | 否   | -    |
| iconColor      | String | 否   | -    |

### SnScanParams

部分内置 `sn-scan` 的组件可通过 `SnScanParams` 类型的 `scanConfig` 属性配置参数

| 名称            | 类型      | 必填 | 描述 |
| :-------------- | :-------- | :--- | :--- |
| enableDing      | Boolean | 否   | -    |
| showTorch       | Boolean | 否   | -    |
| dingFileSrc     | String  | 否   | -    |
| scanType        | String  | 否   | -    |
| continuous      | Boolean | 否   | -    |
| scanOnlyOnce    | Boolean | 否   | -    |
| title           | String  | 否   | -    |
| initZoomScale   | Number  | 否   | -    |
| continuousSleep | Number  | 否   | -    |
| showAlbum       | Boolean | 否   | -    |
| showBackButton  | Boolean | 否   | -    |
| showAni         | Boolean | 否   | -    |
| enableZoom      | Boolean | 否   | -    |

### SnTabbarItem

`sn-tabbar` 组件的 `data` 属性需要传入一个 `SnTabbarItem[]` 类型的对象

| 名称        | 类型                            | 必填 | 描述                                                        |
| :---------- | :------------------------------ | :--- | :---------------------------------------------------------- |
| text        | String \| null                  | 否   | 子项文本                                                    |
| icon        | String \| null                  | 否   | 子项图标                                                    |
| image       | String \| null                  | 否   | 子项图片                                                    |
| activeText  | String \| null                  | 否   | 选中子项文本                                                |
| activeIcon  | String \| null                  | 否   | 选中子项图标                                                |
| activeImage | String \| null                  | 否   | 选中子项图片                                                |
| interceptor | () => Boolean                   | 否   | 拦截器方法，可以在此方法内鉴权。如果返回 `false` 则拦截跳转 |
| badge       | [SnBadgeParams](#SnBadgeParams) | 否   | 子项徽标配置                                                |

### SnTabParams

`sn-tabs` 组件的 `data` 属性需要传入一个 `SnTabParams[]` 类型的对象

| 名称        | 类型                            | 必填 | 描述                              |
| :---------- | :------------------------------ | :--- | :-------------------------------- |
| id          | String                          | 是   | 子项标识符。组件事件将返回此 `id` |
| text        | String                          | 是   | 子项文本                          |
| icon        | String                          | 否   | 子项图标                          |
| disabled    | Boolean                         | 否   | 是否禁用子项                      |
| badgeConfig | [SnBadgeParams](#SnBadgeParams) | 否   | 子项徽标配置                      |

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

| 名称         | 类型      | 必填 | 描述 |
| :----------- | :-------- | :--- | :--- |
| text         | String  | 否   | -    |
| bgColor      | String  | 否   | -    |
| overlay      | Boolean | 否   | -    |
| position     | String  | 否   | -    |
| duration     | Number  | 否   | -    |
| textSize     | String  | 否   | -    |
| textColor    | String  | 否   | -    |
| borderRadius | String  | 否   | -    |
| padding      | String  | 否   | -    |
| icon         | String  | 否   | -    |
| iconSize     | String  | 否   | -    |
| iconColor    | String  | 否   | -    |
| loading      | Boolean | 否   | -    |
| textLines    | Number  | 否   | -    |
| textAlign    | String  | 否   | -    |

### SnWaterfallItem<Badge type="warning" text="内部使用" />

`sn-waterfall` 及 `sn-waterfall-item` 组件内部传递数据使用

| 名称   | 类型                                   | 必填 | 描述         |
| :----- | :------------------------------------- | :--- | :----------- |
| id     | String                                 | 是   | 子项标识符。 |
| top    | Number                                 | 是   | -            |
| left   | Number                                 | 是   | -            |
| width  | Number                                 | 是   | -            |
| height | Number                                 | 是   | -            |
| niode  | SnWaterfallItemComponentPublicInstance | 是   | -            |
