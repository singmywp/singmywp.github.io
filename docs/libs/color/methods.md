# colorLib.tinyColor()

### 创建TinyColor实例

本函数的字符串解析非常宽容，目的是使输入颜色尽可能简单。所有的逗号、百分比、括号都是可选的，大多数输入允许使用 0-1、0%-100% 或 0-n（其中 n 取决于值的 100、255 或 360）。 HSL 和 HSV 都需要 0%-100% 或 0-1 作为 S/L/V 属性。H（色相）可以在 0%-100% 或 0-360 之间取值。 RGB 输入需要 0-255 或 0%-100%。

同时也支持传入 UTSJSONObject、`RGB`、`RGBA`、`HSL`、`HSLA`、`HSV`、`HSVA`、`HSB`、`HSBA` 等多种类型。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型 | 必填 | 默认值 | 描述     |
| ----- | ---- | ---- | ------ | -------- |
| color | Any  | 否   | `''`   | 输入颜色 |

### 返回值

| 类型      | 必备 | 描述          |
| --------- | ---- | ------------- |
| TinyColor | 是   | TinyColor实例 |

### 示例

#### Hex, 8-digit (RGBA) Hex

```typescript
colorLib.tinyColor('#000');
colorLib.tinyColor('000');
colorLib.tinyColor('#369C');
colorLib.tinyColor('369C');
colorLib.tinyColor('#f0f0f6');
colorLib.tinyColor('f0f0f6');
colorLib.tinyColor('#f0f0f688');
colorLib.tinyColor('f0f0f688');
```

#### RGB, RGBA

```typescript
colorLib.tinyColor('rgb (255, 0, 0)');
colorLib.tinyColor('rgb 255 0 0');
colorLib.tinyColor('rgba (255, 0, 0, .5)');
colorLib.tinyColor({ r: 255, g: 0, b: 0 });
```

#### HSL, HSLA

```typescript
colorLib.tinyColor('hsl(0, 100%, 50%)');
colorLib.tinyColor('hsla(0, 100%, 50%, .5)');
colorLib.tinyColor('hsl(0, 100%, 50%)');
colorLib.tinyColor('hsl 0 1.0 0.5');
colorLib.tinyColor({ h: 0, s: 1, l: 0.5 });
```

#### HSV, HSVA

```typescript
colorLib.tinyColor('hsv(0, 100%, 100%)');
colorLib.tinyColor('hsva(0, 100%, 100%, .5)');
colorLib.tinyColor('hsv (0 100% 100%)');
colorLib.tinyColor('hsv 0 1 1');
colorLib.tinyColor({ h: 0, s: 100, v: 100 });
```

#### Named

```typescript
colorLib.tinyColor('RED');
colorLib.tinyColor('blanchedalmond');
colorLib.tinyColor('darkblue');
```

#### Number

```typescript
colorLib.tinyColor(0x0);
colorLib.tinyColor(0xaabbcc);
```

<br /><br /><br /><br /><br />

---

# colorLib.calcAPCA()

### **计算APCA**

计算指定文本色与背景色的感知亮度对比数值（`Lc`），范围为 `-108 ~ +106`，浅色背景深色文字为正数、深色背景浅色文字为负数，背景与文字颜色互换后返回的是原数值的相反数。数值绝对值越大，对比越强。

> **可访问的感知对比度算法**（Accessible Perceptual Contrast Algorithm，简称 APCA），基于字形属性、文本与背景的感知亮度差异、环境与上下文等特征进行对比度计算，目标是更接近人眼的实际感受。

APCA 是 WCAG 3.0 无障碍标准候选方法之一。由于 WCAG 2.0 对暗黑背景的支持较差，故选用了APCA 作为计算文字-背景颜色对比度的方法。

因该项目处于实验阶段，未来可能会进行一定调整。

参考： [GitHub - Myndex/SAPC-APCA](https://link.zhihu.com/?target=https%3A//github.com/Myndex/SAPC-APCA)、[不要依赖 WCAG 2 的对比度计算，试试 APCA](https://zhuanlan.zhihu.com/p/555769196)。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称       | 类型    | 必填 | 默认值 | 描述                     |
| ---------- | ------- | ---- | ------ | ------------------------ |
| frontColor | Any     | 是   | -      | 前景色。                 |
| bgColor    | Any     | 是   | -      | 背景颜色。               |
| round      | Boolean | 否   | `true` | 是否对结果进行四舍五入。 |

### 返回值

| 类型   | 必备 | 描述         |
| ------ | ---- | ------------ |
| Number | 是   | 返回APCA值。 |

---

# colorLib.generate()

### **生成色板**

引用 Ant Design 色板生成工具，仅通过提供一个主题色，快速生成1-10共10个系列颜色。支持暗色模式。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称  | 类型               | 必填 | 默认值 | 描述                                                           |
| ----- | ------------------ | ---- | ------ | -------------------------------------------------------------- |
| color | Any                | 是   | -      | 输入的颜色值，可以是十六进制、RGB、RGBA、HSL、HSLA或颜色名称。 |
| opts  | `LGenerateOptions` | 否   | `{}`   | 可选的生成选项，用于指定生成色彩模式的行为，例如主题。         |

### 返回值

| 类型       | 必备 | 描述                                     |
| ---------- | ---- | ---------------------------------------- |
| `string[]` | 是   | 返回一个包含生成的颜色模式的字符串数组。 |

---

# colorLib.mean()

### **计算平均颜色**

获取平均颜色。即返回若干个颜色的平均值。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

| 名称   | 类型    | 必填 | 默认值 | 描述         |
| ------ | ------- | ---- | ------ | ------------ |
| colors | `any[]` | 是   | -      | 颜色值数组。 |

### 返回值

| 类型      | 必备 | 描述           |
| --------- | ---- | -------------- |
| TinyColor | 是   | 返回平均颜色。 |

---

# colorLib.random()

### **生成随机颜色**

生成一个随机的颜色。

### 兼容性

| Web | Android |
| --- | ------- |
| √   | √       |

### 属性

无

### 返回值

| 类型      | 必备 | 描述               |
| --------- | ---- | ------------------ |
| TinyColor | 是   | 返回一个随机颜色。 |
