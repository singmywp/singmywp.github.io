# 配置

> [!TIP] 提示
>
> SinleUI 框架目前支持暗黑模式、多主题切换，支持字体、字体大小、圆角大小、动画时长、层级、导航栏高度、页面背景色等全局配置，一处更新，全局生效。

---

# Configs

### 属性

| 名称    | 类型                            | 描述             |
| :------ | :------------------------------ | :--------------- |
| app     | [AppConfig](#appconfig)         | 应用基础配置     |
| page    | [PageConfig](#pageconfig)       | 全局页面配置     |
| font    | [FontConfig](#fontconfig)       | 全局字体配置     |
| radius  | [RadiusConfig](#radiusconfig)   | 全局圆角配置     |
| aniTime | [AniTimeConfig](#anitimeconfig) | 全局动画时长配置 |
| zIndex  | [zIndexStyles](#zindexstyles)   | 全局层级样式     |

---

# AppConfig

### 属性

| 名称      | 类型    | 只读 | 默认值  | 描述                                                  |
| :-------- | :------ | ---- | ------- | :---------------------------------------------------- |
| theme     | String  | 否   | `light` | 应用当前颜色模式。可修改，只支持 `light` \| `dark` 。 |
| autoTheme | Boolean | 否   | `true`  | 是否跟随系统暗黑模式自动切换。可修改。                |

---

# PageConfig

### 属性

| 名称         | 类型   | 只读 | 默认值    | 描述                                                            |
| :----------- | :----- | ---- | --------- | :-------------------------------------------------------------- |
| topbarHeight | String | 否   | `80px`    | 页面 `sn-topbar` （导航栏）组件高度（不计状态栏高度）。可修改。 |
| lightBgColor | String | 否   | `#f9f9f9` | 亮色模式页面默认背景颜色。可修改。                              |
| darkBgColor  | String | 否   | `#262628` | 暗黑模式页面默认背景颜色。可修改。                              |

---

# FontConfig

> [!TIP] 提示
>
> 设基本字号 `baseSize` 为 `v (v >= 5)`
>
> 则字号板为 `[v - 4, v - 2, v, v + 2, v + 6, v + 10, v + 16, v + 24, v + 32, v + 42, v + 54]`
>
> `size` 方法传入参数即为所需字号在字号板中的索引

### 属性

| 名称       | 类型   | 只读 | 默认值          | 描述                                         |
| :--------- | :----- | ---- | --------------- | :------------------------------------------- |
| baseSize   | String | 否   | `14px`          | 字体基本大小，单位为 `px` \| `rpx`。可修改。 |
| mainFamily | String | 否   | `misans-normal` | 全局字体名称。可修改。                       |

### 方法

| 名称 | 参数               | 返回值 | 描述                                                                                     |
| :--- | :----------------- | :----- | :--------------------------------------------------------------------------------------- |
| size | `(level:number=2)` | Number | 根据提供的字号等级，从字号板获取对应的字号。字号等级默认为 `2`，有效范围是 `0` 到 `10`。 |

---

# RadiusConfig

> [!TIP] 提示
>
> 下表中设圆角基本大小 `baseSize` 为 `v (v >= 0)`，且各圆角大小都不小于 `0px` 

### 属性

| 名称     | 类型   | 只读 | 默认值    | 描述                                      |
| :------- | :----- | ---- | --------- | :---------------------------------------- |
| baseSize | String | 否   | `12px`    | 圆角基本大小，单位为 `px` 。可修改。      |
| circle   | String | 是   | `12000px` | 最大圆角，值为 `1000v`，单位为 `px`。   |
| normal   | String | 是   | `12px`    | 普通圆角大小，值为 `v`，单位为 `px` 。    |
| xxsmall  | String | 是   | `4px`     | 更小圆角大小，值为 `v-8`，单位为 `px` 。  |
| xsmall   | String | 是   | `6px`     | 较小圆角大小，值为 `v-6`，单位为 `px` 。  |
| small    | String | 是   | `8px`     | 小圆角大小，值为 `v-4`，单位为 `px` 。    |
| large    | String | 是   | `16px`    | 大圆角大小，值为 `v+4`，单位为 `px` 。    |
| xlarge   | String | 是   | `20px`    | 较大圆角大小，值为 `v+8`，单位为 `px` 。  |
| xxlarge  | String | 是   | `24px`    | 更大圆角大小，值为 `v+12`，单位为 `px` 。 |

---

# AniTimeConfig

> [!TIP] 提示
>
> 下表中设动画基本时长 `baseTime` 为 `v (v >= 0)`，且各动画时长都不小于 `0ms` 

### 属性

| 名称     | 类型   | 只读 | 默认值  | 描述                                |
| :------- | :----- | ---- | ------- | :---------------------------------- |
| baseTime | String | 否   | `100ms` | 动画基本时长，单位为 `ms`。可修改。 |
| short    | String | 是   | `100ms` | 短时间，值为 `v`，单位为 `ms`。     |
| normal   | String | 是   | `200ms` | 正常时间，值为 `2v`，单位为 `ms`。  |
| long     | String | 是   | `300ms` | 长时间，值为 `3v`，单位为 `ms`。    |
| xlong    | String | 是   | `400ms` | 更长时间，值为 `4v`，单位为 `ms`。  |

---

# zIndexStyles

### 属性

| 名称      | 类型   | 只读 | 默认值 | 描述                    |
| :-------- | :----- | ---- | ------ | :---------------------- |
| navTabBar | Number | 是   | 100    | 导航标签栏层级。        |
| badge     | Number | 是   | 95     | 徽标层级。              |
| float     | Number | 是   | 991    | 浮动元素层级。          |
| overlay   | Number | 是   | 1000   | 遮罩层层级。            |
| popup     | Number | 是   | 1001   | 弹出层层级。            |
| toast     | Number | 是   | 1002   | `sn-toast` 轻提示层级。 |
