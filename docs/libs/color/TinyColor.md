# TinyColor

### 构造函数

> [!important]
> 构造颜色对象请不要直接 `new TinyColor()`，而是通过 `colorLib.tinyColor()` 函数创建。

| 名称  | 类型          | 必备 | 默认值                | 描述             |
| :---- | :------------ | :--- | :-------------------- | :--------------- |
| color | Any           | 否   | `''`                    | 处理后的输入颜色 |
| opts  | [LColorOptions](/libs/color/types#lcoloroptions) | 否   | `{} as LColorOptions` | 颜色配置         |

### 属性

| 名称          | 类型    | 描述                                                         |
| :------------ | :------ | :----------------------------------------------------------- |
| originalInput | Any     | 传递到构造函数中用于创建 TinyColor 实例的原始输入          |
| format        | String  | 返回用于创建 TinyColor 实例的格式                          |
| isValid       | Boolean | 一个布尔值，指示颜色是否成功被解析。注意：如果颜色无效，那么输出颜色值时默认黑色 |

### 方法

| 名称                  | 参数                                         | 返回值      | 描述                                                         |
| :-------------------- | :------------------------------------------- | ----------- | :----------------------------------------------------------- |
| getBrightness         | -                                            | Number      | 返回颜色的感知亮度，范围从 0-255，这是根据 [Web内容无障碍指南（第1版）](http://www.w3.org/TR/AERT#color-contrast) 定义的。 |
| isLight               | -                                            | Boolean     | 返回一个布尔值，指示颜色的感知亮度是否为浅色。               |
| isDark                | -                                            | Boolean     | 返回一个布尔值，指示颜色的感知亮度是否为深色。               |
| getLuminance          | -                                            | Number      | 返回颜色的感知亮度（luminance），范围从 0-1，这是根据 [Web内容无障碍指南（第2版）](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef) 定义的。 |
| getAlpha              | -                                            | Number      | 返回颜色的`alpha`（透明度）值，范围从 `0-1`。                |
| setAlpha              | `(alpha: number)`                            | -           | 在当前颜色上设置`alpha`（透明度）值。接受的范围是 `0-1` 之间。 |
| onBackground          | `(background: any)`                          | -           | 计算颜色在背景上的显示效果。当颜色完全透明（即 `getAlpha() == 0`）时，结果将是背景颜色。当颜色完全不透明（即 `getAlpha() == 1`）时，结果将是颜色本身。否则，你将得到一个计算结果。 |
| toHsv                 | -                                            | HSVA        | 转为 `HSVA` 颜色对象                                         |
| toHsvString           | -                                            | String      | 转为 `HSVA` 颜色字符串                                       |
| toHsl                 | -                                            | HSLA        | 转为 `HSLA` 颜色对象                                         |
| toHslString           | -                                            | String      | 转为 `HSLA` 颜色字符串                                       |
| toNumber              | -                                            | Number      | 转为数字                                                     |
| toHex                 | -                                            | String      | 转为 `Hex` 颜色（不带 `#` ）                                 |
| toHexString           | -                                            | String      | 转为 `Hex` 颜色字符串（带 `#` ）                             |
| toHex8                | -                                            | String      | 转为 `Hex` 颜色（不带 `#` 、有透明度）                       |
| toHex8String          | -                                            | String      | 转为 `Hex` 颜色（带 `#` 、有透明度）                         |
| toHexShortString      | -                                            | String      | 根据颜色的透明度（`alpha` 值）返回较短的十六进制值，并且带 `#` |
| toRgb                 | -                                            | RGBA        | 转为 `RGBA` 颜色对象                                         |
| toRgbString           | -                                            | String      | 转为 `RGBA` 颜色字符串                                       |
| toPercentageRgb       | -                                            | RGBAString  | 将当前颜色转换为百分比表示的 `RGBA`                          |
| toPercentageRgbString | -                                            | String      | 将当前颜色转换为百分比表示的 `RGBA`                          |
| toName                | -                                            | String      | 尽可能转换为颜色名称                                         |
| toString              | `(format: string)`                           | String      | 根据输入格式打印成字符串。你也可以通过向函数中传入以下之一来覆盖这个行为：`"rgb", "prgb", "hex6", "hex3", "hex8", "name", "hsl", "hsv"` |
| lighten               | `(amount: Number = 10)`                      | TinyColor   | 根据给定的量（从0到100）淡化颜色。提供100将始终返回白色.     |
| brighten              | `(amount: Number = 10)`                      | TinyColor   | 根据给定的量（从0到100）调高颜色亮度。提供100将始终返回白色. |
| darken                | `(amount: Number = 10)`                      | TinyColor   | 根据给定的量（从0到100）深化颜色。提供100将始终返回白色.     |
| tint                  | `(amount: Number = 10)`                      | TinyColor   | 将颜色与纯白色混合，范围从0到100。提供0将不进行任何操作，提供100将始终返回白色. |
| shade                 | `(amount: Number = 10)`                      | TinyColor   | 将颜色与纯黑色混合，范围从0到100。提供0将不进行任何操作，提供100将始终返回黑色. |
| desaturate            | `(amount: Number = 10)`                      | TinyColor   | 根据给定的量（从0到100）降低颜色的饱和度。提供100将与调用`greyscale`相同。 |
| saturate              | `(amount: Number = 10)`                      | TinyColor   | 根据给定的量（从0到100）增加颜色的饱和度。                   |
| greyscale             | -                                            | TinyColor   | 完全降低颜色的饱和度，使其变为灰度。与调用`desaturate(100)`相同。 |
| spin                  | `(amount: Number = 0)`                       | TinyColor   | 根据给定的量（从-360到360）旋转色相。调用时使用0、360或-360将不进行任何操作（因为它将色相设置回原来的值）。 |
| mix                   | `(amount: Number = 50)`                      | TinyColor   | 将当前颜色与另一种颜色按给定量（从0到100）混合。0表示不混合（返回当前颜色）。 |
| analogous             | `(results: Number = 6, slices: Number = 30)` | TinyColor[] | 生成一组与当前颜色相似的颜色。这些颜色在色相环上是相邻的，形成一个类似于彩虹的颜色序列。<br />results - 要生成的相似颜色的数量；<br />slices - 将色相环划分为多少个部分 |
| monochromatic         | `(results: Number = 6)`                      | TinyColor[] | 生成一组与当前颜色具有相同色相和饱和度的颜色。这些颜色的亮度值不同，形成一个单色调的颜色序列。<br />results - 要生成的单色调颜色的数量 |
| splitcomplement       | -                                            | TinyColor[] | 生成当前颜色的分裂补色。分裂补色是指在色相环上位于当前颜色的两侧的颜色，它们的色相差为 180°。 |
| triad                 | -                                            | TinyColor[] | 生成当前颜色的三色调。                                       |
| tetrad                | -                                            | TinyColor[] | 生成当前颜色的四色调。                                       |
| polyad                | `(n: number)`                                | TinyColor[] | 生成当前颜色的 `n` 色调。                                    |
| complement            | -                                            | TinyColor   | 计算当前颜色的补色。                                         |
| equals                | `(color?:any)`                               | Boolean     | 判断两色是否相同                                             |
| clone                 | -                                            | TinyColor   | 使用相同的颜色实例化一个新的TinyColor对象。对新的对象的任何更改都不会影响旧的对象。 |
| contrasting           | -                                            | TinyColor   | 获取以当前颜色为背景时前景的最佳颜色（黑色或白色）。即判断黑色与白色哪一个与当前颜色的视觉对比最大。 |
