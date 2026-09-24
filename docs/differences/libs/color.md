# 颜色库（Color）差异

## 使用方式变化

| 项目 | 旧版 | 新版 |
| :--- | :--- | :--- |
| 获取入口 | `$snui.libs.color`（文档以 `colorLib` 代称） | `import { ColorLib, TinyColor } from '@/uni_modules/sinle-ui'` |
| 实现基础 | 基于第三方 `lime-color` | **完全自研**（`core/color/`，无三方依赖） |

## ColorLib 静态方法差异

| 方法 | 旧版 | 新版 | 说明 |
| :--- | :--- | :--- | :--- |
| `tinyColor(input, opts)` | √ | √ | 创建 TinyColor 实例 |
| `calcAPCA(...)` | √ | √ | APCA 对比度计算 |
| `generate(...)` | √ | √ | 色板生成（默认 10 阶 + 暗色模式支持） |
| `mean(...)` | √ | √ | 颜色平均 |
| `random()` | √ | √ | 随机颜色 |

方法名与主要行为保留，实现全部重写。

## TinyColor 方法差异

### 保留（签名不变或以等价实现保留）

`getBrightness` / `getLuminance` / `isLight` / `isDark` / `getAlpha` / `setAlpha` / `toHsv` / `toHsl` / `toRgb` / `toHex` / `toName` / `toNumber` / `toString` / `clone` / `lighten` / `brighten` / `darken` / `tint` / `shade` / `desaturate` / `saturate` / `greyscale` / `spin` / `mix` / `analogous` / `monochromatic` / `splitcomplement` / `complement` / `equals` / `onBackground` / `triad` / `tetrad` / `polyad`

### 新增

| 方法 | 说明 |
| :--- | :--- |
| toRgbString | 各类格式字符串输出（旧版仅 toString 间接支持） |  
| toHslString | 各类格式字符串输出（旧版仅 toString 间接支持） |  
| toHsvString | 各类格式字符串输出（旧版仅 toString 间接支持） |  
| toHsbString | 各类格式字符串输出（旧版仅 toString 间接支持） |  
| toPercentageRgbString | 各类格式字符串输出（旧版仅 toString 间接支持） |  
| toHex8 | 含透明度 8 位 HEX 输出（旧版须自行处理 alpha） |  
| toHex8String | 含透明度 8 位 HEX 输出（旧版须自行处理 alpha） |  
| toHexShortString | 含透明度 8 位 HEX 输出（旧版须自行处理 alpha） |  
| toHsb | HSB 对象输出 |  
| toPercentageRgb | 百分比 RGB 对象输出 |  
| isMonochrome | 判断是否单色（饱和度 0） |  

### 移除

| 方法 | 旧版状态 | 说明 |
| :--- | :--- | :--- |
| `contrasting` | 旧版存在（返回对比色） | 新版移除（可用 `onBackground`、`getLuminance` 组合实现或自取色调） |

### 输出行为差异

- `toHexString()` 默认仅取 r/g/b，含透明度时需使用 `toHex8String()` / `toHexShortString()`（旧版行为未严格区分）。

## 类型差异

- 旧版颜色类型从 `libs/color/types` 引入；新版 `LColorOptions`、`LGenerateOptions` 等颜色类型经 `sinle-ui` 插件入口重导出，`TinyColor` 内部结构类型（`RGBA`/`HSLA`/`HSVA`/`RGBAString` 等）命名保持不变。