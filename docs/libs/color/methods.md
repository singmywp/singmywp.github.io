# ColorLib.tinyColor()

### **创建 TinyColor 实例**

根据传入的颜色值（可以是 HEX、RGB、HSL、HSV、颜色名、数字等任意受支持格式）创建一个 TinyColor 实例。若传入的本身就是一个 TinyColor 实例，则返回其克隆，不会修改原实例。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| color | any | 否 | `''` | 任意受支持的颜色输入（HEX、RGB、颜色名、数字、TinyColor 等） |
| opts | LColorOptions | 否 | `{}` | 构造选项，可指定 format / gradientType |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| TinyColor | 是 | 返回解析后的 TinyColor 实例 |

### 示例

```typescript
import { ColorLib } from '@/uni_modules/sinle-ui'

let c = ColorLib.tinyColor('#ff0000')
let d = ColorLib.tinyColor(c) // 传入 TinyColor，返回克隆
```

---

# ColorLib.calcAPCA()

### **计算 APCA 对比度**

计算前景色与背景色之间的 APCA（Accessible Perceptual Contrast Algorithm，感知对比度算法）对比度值。适用于可访问性判断，对比度绝对值越大，可读性越强。当 `round` 为 false 时不进行结果舍入。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| frontColor | any | 是 | - | 前景色（文本色），任意受支持的颜色输入 |
| bgColor | any | 是 | - | 背景色，任意受支持的颜色输入 |
| round | boolean | 否 | `true` | 是否对结果进行舍入处理 |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| number | 是 | APCA 对比度值（正负号表示前景/背景明暗关系） |

### 示例

```typescript
import { ColorLib } from '@/uni_modules/sinle-ui'

let contrast = ColorLib.calcAPCA('#333333', '#ffffff')
```

---

# ColorLib.generate()

### **生成色板**

基于主色生成一组颜色色板，返回字符串（HEX 格式）数组。默认（theme 为 default）返回 10 个由浅到深的色阶；当 `theme` 为 `'dark'` 时返回 10 个适配暗色背景的色阶。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| color | any | 是 | - | 主色，任意受支持的颜色输入 |
| opts | LGenerateOptions | 否 | `{}` | 生成选项，可指定 theme 与 backgroundColor |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| string[] | 是 | 色板 HEX 字符串数组（含 `#` 前缀） |

### 示例

```typescript
import { ColorLib } from '@/uni_modules/sinle-ui'

// 生成默认 10 色阶
let palette = ColorLib.generate('#1890ff')
// 生成暗色主题色板，背景色 #141414
let darkPalette = ColorLib.generate('#1890ff', { theme: 'dark' as const })
```

---

# ColorLib.mean()

### **计算平均颜色**

对一组颜色进行算术平均，返回一个新的颜色实例。每个通道（r、g、b、a）分别取所有输入颜色的平均值。空数组时各通道均按 0 处理。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称 | 类型 | 必备 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| colors | any[] | 是 | - | 颜色数组，元素为任意受支持的颜色输入 |

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| TinyColor | 是 | 平均后的 TinyColor 实例 |

### 示例

```typescript
import { ColorLib } from '@/uni_modules/sinle-ui'

let avg = ColorLib.mean(['#ff0000', '#0000ff'])
```

---

# ColorLib.random()

### **生成随机颜色**

通过随机 RGB 分量生成一个随机的 TinyColor 实例。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无。

### 返回值

| 类型 | 必备 | 描述 |
| --- | --- | --- |
| TinyColor | 是 | 随机生成的 TinyColor 实例 |

### 示例

```typescript
import { ColorLib } from '@/uni_modules/sinle-ui'

let c = ColorLib.random()
```