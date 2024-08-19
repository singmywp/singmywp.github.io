### SnAvatarParams

部分内置 `sn-avatar` 的组件可通过 `SnAvatarParams` 类型的 `avatarConfig` 属性配置参数

| 名称          | 类型      | 必填 | 描述 |
| :------------ | :-------- | :--- | :--- |
| mode          | String  | 否   | -    |
| imageMode     | String  | 否   | -    |
| size          | String  | 否   | -    |
| src           | String  | 否   | -    |
| text          | String  | 否   | -    |
| icon          | String  | 否   | -    |
| iconSize      | String  | 否   | -    |
| iconColor     | String  | 否   | -    |
| shape         | String  | 否   | -    |
| textColor     | String  | 否   | -    |
| bgColor       | String  | 否   | -    |
| textSize      | String  | 否   | -    |
| borderRadius  | String  | 否   | -    |
| enablePreview | Boolean | 否   | -    |

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

### SnFormItemData<Badge type="warning" text="内部使用" />

`sn-form-item` 内部注册组件数据类型

| 名称     | 类型                      | 必填 | 描述 |
| :------- | :------------------------ | :--- | :--- |
| field    | String                  | 是   | -    |
| instance | `ComponentPublicInstance` | 是   | -    |

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

| 名称      | 类型                     | 必填 | 描述 |
| :-------- | :----------------------- | :--- | :--- |
| type      | String                 | 是   | …    |
| required  | Boolean                | 否   | -    |
| message   | String                 | 否   | -    |
| pattern   | `RegExp`                 | 否   | -    |
| min       | Number                 | 否   | -    |
| max       | Number                 | 否   | -    |
| len       | Number                 | 否   | -    |
| enum      | `Array<any>`             | 否   | -    |
| transform | `(value: any) => any`    | 否   | -    |
| valid     | `(value: any) => string` | 否   | -    |

### SnFormItemVerifyResult<Badge type="warning" text="内部使用" />

`sn-form-item` 内部单一项校验结果数据类型

| 名称    | 类型      | 必填 | 描述 |
| :------ | :-------- | :--- | :--- |
| valid   | Boolean | 是   | -    |
| message | String  | 否   | -    |
| field   | String  | 是   | -    |

### SnFormValidResult

`sn-form` 的 `submit` 方法需要传入一个 `SnFormValidResult` 类型的回调对象

| 名称    | 类型                                              | 必填 | 描述 |
| :------ | :------------------------------------------------ | :--- | :--- |
| success | `() => void`                                      | 否   | -    |
| fail    | `(failResults: SnFormItemVerifyResult[]) => void` | 否   | -    |

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

### SnTabParams

`sn-tabs` 组件的 `data` 属性需要传入一个 `SnTabParams[]` 类型的对象

| 名称        | 类型            | 必填 | 描述 |
| :---------- | :-------------- | :--- | :--- |
| id          | String        | 是   | -    |
| text        | String        | 是   | -    |
| icon        | String        | 否   | -    |
| disabled    | Boolean       | 否   | -    |
| badgeConfig | `SnBadgeParams` | 否   | -    |

### SnTimerTime

`sn-timer` 的 `change` 事件返回 `SnTimerTime` 类型的时间数据

| 名称 | 类型     | 必填 | 描述 |
| :--- | :------- | :--- | :--- |
| d    | Number | 是   | -    |
| h    | Number | 是   | -    |
| m    | Number | 是   | -    |
| s    | Number | 是   | -    |
| ms   | Number | 是   | -    |

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

### SnDataItem

`sn-picker-view` 、`sn-select` 、`sn-topbar` 等数据组件的 `data` 属性需要传入一个 `SnDataItem[]` 的对象，组件事件触发时返回 `SnDataItem` 对象

| 名称     | 类型    | 必填 | 描述                                       |
| :------- | :------ | :--- | :----------------------------------------- |
| id       | String  | 是   | 数据的唯一标识                             |
| text     | String  | 否   | 数据显示文本（不一定必备，视组件具体要求） |
| icon     | String  | 否   | 数据显示图标（不一定必备，视组件具体要求） |
| disabled | Boolean | 否   | 是否禁用子项（不一定必备，视组件具体要求） |
