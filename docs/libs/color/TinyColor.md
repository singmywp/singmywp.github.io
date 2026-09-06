# TinyColor  颜色实例

`TinyColor` 是颜色库中对单个颜色的实例化封装，用于颜色的解析、计算与变换。构造后可读取 r/g/b/a 等通道，并调用方法获取指定格式或完成颜色运算。

```typescript
import { TinyColor } from '@/uni_modules/sinle-ui'

let c = new TinyColor('rgb(255, 0, 0)', {})
```

实例方法按功能可分为六类：**解析与比较**（`toString` / `equals`）、**明暗与亮度**（`isDark` / `isLight` / `getBrightness` / `getLuminance` / `isMonochrome`）、**Alpha 通道**（`getAlpha` / `setAlpha`）、**格式输出**（`toRgb` / `toHex` / `toHsl` / `toHsv` / `toHsb` / `toName` / `toNumber` 等系列）、**颜色变换**（明暗与饱和度调整、混合叠加）、**色轮配色**（类似色、互补色、三角/四角色等）。除颜色变换与色轮配色类方法返回新实例（不修改原对象）外，其余方法仅读取计算或返回自身。

## 属性

以下实例属性在构造时解析填充：

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| r | number | 红色通道（0-255） |
| g | number | 绿色通道（0-255） |
| b | number | 蓝色通道（0-255） |
| a | number | 透明度（0-1） |
| format | LColorFormats? | 输入颜色格式 |
| originalInput | LColorInput | 原始输入值 |
| isValid | boolean | 输入是否为有效颜色 |
| gradientType | string? | 渐变类型 |
| roundA | number | 舍入后的透明度值 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| toString | format?: LColorFormats | string | 解析与比较。按指定格式输出字符串，缺省时用解析到的 format；未识别格式时回退为 `#hex` |
| equals | other?: LColorInput | boolean | 解析与比较。判断两个颜色是否相等 |
| isDark | - | boolean | 明暗与亮度。是否为深色（亮度 < 128） |
| isLight | - | boolean | 明暗与亮度。是否为浅色（!isDark） |
| getBrightness | - | number | 明暗与亮度。感知亮度（加权 RGB 亮度，0-255） |
| getLuminance | - | number | 明暗与亮度。相对亮度（WCAG 相对亮度 0-1） |
| isMonochrome | - | boolean | 明暗与亮度。是否单色（饱和度 0） |
| getAlpha | - | number | Alpha 通道。获取透明度（0-1） |
| setAlpha | alpha?: string \| number | TinyColor | Alpha 通道。设置透明度，返回自身，可链式调用 |
| toRgb | - | RGBA | 格式输出。输出 RGB 对象（r/g/b/a） |
| toRgbString | - | string | 格式输出。输出 `rgb()` / `rgba()` 字符串 |
| toPercentageRgb | - | RGBAString | 格式输出。输出百分比 RGB 对象 |
| toPercentageRgbString | - | string | 格式输出。输出百分比 `rgb()%` / `rgba()%` 字符串 |
| toHex | allow3Char = false | string | 格式输出。输出 HEX（可选 3 位缩写） |
| toHexString | allow3Char = false | string | 格式输出。输出带 `#` 的 HEX 字符串 |
| toHex8 | allow4Char = false | string | 格式输出。输出含透明度的 8 位 HEX |
| toHex8String | allow4Char = false | string | 格式输出。输出 `#` + 8 位 HEX |
| toHexShortString | allowShortChar = false | string | 格式输出。根据透明度输出 6 或 8 位 HEX |
| toHsl | - | HSLA | 格式输出。输出 HSL 对象 |
| toHslString | - | string | 格式输出。输出 `hsl()` / `hsla()` 字符串 |
| toHsv | - | HSVA | 格式输出。输出 HSV 对象 |
| toHsvString | - | string | 格式输出。输出 `hsv()` / `hsva()` 字符串 |
| toHsb | - | HSBA | 格式输出。输出 HSB 对象 |
| toHsbString | - | string | 格式输出。输出 `hsb()` / `hsba()` 字符串 |
| toName | - | string \| null | 格式输出。输出 CSS 颜色名（无对应名称时为 null） |
| toNumber | - | number | 格式输出。输出数字（0xRRGGBB） |
| lighten | amount = 10 | TinyColor | 颜色变换。提高明度（amount 为百分比数值） |
| darken | amount = 10 | TinyColor | 颜色变换。降低明度 |
| brighten | amount = 10 | TinyColor | 颜色变换。向白方向提亮 |
| tint | amount = 10 | TinyColor | 颜色变换。与白色混合 amount% |
| shade | amount = 10 | TinyColor | 颜色变换。与黑色混合 amount% |
| saturate | amount = 10 | TinyColor | 颜色变换。提高饱和度 |
| desaturate | amount = 10 | TinyColor | 颜色变换。降低饱和度 |
| greyscale | - | TinyColor | 颜色变换。转为灰度（desaturate 100） |
| spin | amount: number | TinyColor | 颜色变换。旋转色相（按角度，支持负值） |
| mix | color: LColorInput / amount = 50 | TinyColor | 颜色变换。与另一颜色按比例混合（amount 为混合比例） |
| onBackground | background: LColorInput | TinyColor | 颜色变换。将当前色叠加到背景色上（alpha 合成） |
| clone | - | TinyColor | 颜色变换。克隆当前实例 |
| analogous | results = 6 / slices = 30 | TinyColor[] | 色轮配色。类似色（相邻色相配色） |
| complement | - | TinyColor | 色轮配色。互补色（色相 +180°） |
| monochromatic | results = 6 | TinyColor[] | 色轮配色。单色系（同色相不同亮度） |
| splitcomplement | - | TinyColor[] | 色轮配色。分裂互补色（含当前色的 3 色） |
| triad | - | TinyColor[] | 色轮配色。三色配色 |
| tetrad | - | TinyColor[] | 色轮配色。四色配色 |
| polyad | n: number | TinyColor[] | 色轮配色。多色配色（按 n 均分色相环） |

> 备注：`toHexString()` 默认只取 r/g/b；含透明度时请使用 `toHex8String()` / `toHexShortString()` 获取带 alpha 的 HEX。

## 示例

```typescript
let c = new TinyColor('rgb(255, 0, 0)')
c.toString()              // 'rgb(255, 0, 0)'
c.toString('hex')         // '#ff0000'
c.equals('#ff0000')       // true

let dark = new TinyColor('#333333')
dark.isDark()             // true
dark.getBrightness()      // 约 51
dark.getLuminance()       // 约 0.04

let alpha = new TinyColor('#ff0000')
alpha.getAlpha()          // 1
alpha.setAlpha(0.5).toString()  // 返回自身，可链式调用

let rgba = new TinyColor('rgba(255, 0, 0, 0.5)')
rgba.toRgbString()        // 'rgba(255, 0, 0, 0.5)'
rgba.toHexString()        // 默认只取 r/g/b：'#ff0000'
rgba.toHslString()        // 'hsla(0, 100%, 50%, 0.5)'
rgba.toName()             // null（含透明度时无颜色名）

let base = new TinyColor('#1890ff')
base.lighten(20)          // 变亮
base.darken(10)           // 变暗
base.saturate(20)         // 更饱和
base.spin(120)            // 色相旋转 120°
base.mix('#0000ff', 50)   // 与蓝色各半混合
base.onBackground('#ffffff')  // 叠加到白色背景
base.clone()              // 克隆实例

let wheel = new TinyColor('#ff0000')
wheel.complement()        // 青色
wheel.analogous()         // 6 个类似色
wheel.triad()             // 3 个三色配色
wheel.polyad(5)           // 5 个均分布配色
wheel.splitcomplement()   // 3 个分裂互补色
wheel.monochromatic()     // 6 个单色系
```
