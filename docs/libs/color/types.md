# 类型

### RGB

| 名称 | 类型   | 必填 | 描述 |
| ---- | ------ | ---- | ---- |
| r    | Number | 是   | -    |
| g    | Number | 是   | -    |
| b    | Number | 是   | -    |

### RGBA

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| r    | Number | 是   | -    |
| g    | Number | 是   | -    |
| b    | Number | 是   | -    |
| a    | Number | 是   | -    |

### RGBAString

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| r    | String | 是   | -    |
| g    | String | 是   | -    |
| b    | String | 是   | -    |
| a    | Number | 是   | -    |

### HSL

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| l    | Number | 是   | -    |

### HSLA

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| l    | Number | 是   | -    |
| a    | Number | 是   | -    |

### HSV

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| v    | Number | 是   | -    |

### HSVA

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| v    | Number | 是   | -    |
| a    | Number | 是   | -    |

### HSB

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| b    | Number | 是   | -    |

### HSBA

| 名称 | 类型   | 必填 | 描述 |
| :--- | :----- | :--- | :--- |
| h    | Number | 是   | -    |
| s    | Number | 是   | -    |
| b    | Number | 是   | -    |
| a    | Number | 是   | -    |

### LColorInfo

| 名称   | 类型          | 必填 | 描述 |
| :----- | :------------ | :--- | :--- |
| ok     | Boolean       | 否   | -    |
| format | `LColorFormats` | 否   | -    |
| r      | Number        | 是   | -    |
| g      | Number        | 是   | -    |
| b      | Number        | 是   | -    |
| a      | Number        | 是   | -    |

### LColorFormats

| 可选值                                                       |
| ------------------------------------------------------------ |
| `"rgb","prgb","hex","hex3","hex4","hex6","hex8","name","hsl","hsb","hsv"` |



### LColorOptions

| 名称         | 类型          | 必填 | 描述 |
| :----------- | :------------ | :--- | :--- |
| format       | `LColorFormats` | 否   | -    |
| gradientType | String        | 否   | -    |

### LGenerateOptions

| 名称            | 类型     | 必填      | 描述 |
| :-------------- | :------- | :-------- | :--- |
| theme           | `"dark"` | `"light"` | 否   |
| backgroundColor | String   | 否        | -    |

|      |      |      |      |
| :-------------- | :------------------- | :--- | :--- |
|      |      |      |      |
|      |      |      |      |