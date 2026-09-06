# ColorLib  颜色库

颜色库是 SinleUI 内置的一套轻量级颜色处理工具，基于 TinyColor 思路实现，提供颜色的解析、计算、格式转换、变换与配色方案生成等能力，并附带 APCA 对比度计算与基于主色的色板生成功能。

## 特性

- **统一入口**：ColorLib 静态类提供 5 个便捷静态方法；TinyColor 类可独立操作单个颜色。
- **强大解析**：支持 HEX、RGB、HSL、HSV/HSB、百分比 RGB、CSS 颜色名、数字等多种格式输入。
- **色彩变换**：提供变亮/变暗、混合、饱和度调整、色调旋转等变换方法。
- **配色方案**：内置类似色、互补色、单色、分裂互补、三色、四色等色轮配色算法。
- **可访问性**：内置 APCA 对比度计算，辅助选择可读性良好的前景/背景组合。

## 导入方式

颜色库从插件统一入口导出，可直接按需引入：

```typescript
import { ColorLib, TinyColor } from '@/uni_modules/sinle-ui'
```

- `ColorLib`：静态工具类，包含 `tinyColor`、`calcAPCA`、`generate`、`mean`、`random` 五个静态方法（详见 [methods](./methods)）。
- `TinyColor`：颜色实例类，封装对单个颜色的解析、计算与变换（详见 [tinycolor](./TinyColor)）。

## ColorLib 静态方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| tinyColor | color: any = '' / opts?: LColorOptions | TinyColor | 创建 TinyColor 实例，传入 TinyColor 时返回其克隆 |
| calcAPCA | frontColor: any / bgColor: any / round? : boolean = true | number | 计算两个颜色之间的 APCA 对比度 |
| generate | color: any / opts?: LGenerateOptions | string[] | 基于主色生成一组色板（HEX 数组） |
| mean | colors: any[] | TinyColor | 计算一组颜色的平均颜色 |
| random | - | TinyColor | 生成一个随机颜色 |

每个方法的详细说明见 [ColorLib 方法文档](./methods)。

## TinyColor 类

`TinyColor` 是一个封装单个颜色的实例类，所有计算后的方法返回新实例（不修改原对象）。主要能力包括：

- **明暗亮度**：`isDark` / `isLight` / `getBrightness` / `getLuminance` / `isMonochrome`。
- **格式输出**：`toRgb` / `toHex` / `toHsl` / `toHsv` / `toHsb` / `toRgbString` / `toHexString` / `toName` / `toNumber` 等。
- **颜色变换**：`lighten` / `darken` / `brighten` / `tint` / `shade` / `saturate` / `desaturate` / `greyscale` / `spin` / `mix` / `onBackground`。
- **色轮配色**：`analogous` / `complement` / `monochromatic` / `splitcomplement` / `triad` / `tetrad` / `polyad`。

完整方法清单见 [TinyColor 类文档](./TinyColor)。

## 类型定义

颜色库内置若干类型别名，详见 [类型定义](./types)：

- `LColorOptions`：`TinyColor` 构造选项（`format`、`gradientType`）。
- `LGenerateOptions`：`ColorLib.generate` 色板生成选项（`theme`、`backgroundColor`）。
- 相关颜色结构类型：`RGB` / `RGBA` / `HSLA` / `HSVA` / `HSBA` 等。