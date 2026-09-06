# LColorOptions

### **TinyColor 构造选项**

`TinyColor` 构造函数与 `ColorLib.tinyColor()` 方法可接收的选项对象，用于指定颜色格式与渐变类型。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| format | LColorFormats? | 输入颜色的格式，影响 `toString()` 的默认输出 |
| gradientType | string? | 渐变类型描述 |

`format` 可选值与含义：

| 值 | 含义 |
| --- | --- |
| rgb | RGB 格式（rgb()/rgba()） |  
| prgb | 百分比 RGB 格式 |  
| hex | HEX 格式 |  
| hex3 | 3/4/6/8 位 HEX 格式 |  
| hex4 | 3/4/6/8 位 HEX 格式 |  
| hex6 | 3/4/6/8 位 HEX 格式 |  
| hex8 | 3/4/6/8 位 HEX 格式 |  
| name | CSS 颜色名 |  
| hsl | HSL 格式 |  
| hsv | HSV 格式 |  
| hsb | HSB 格式（与 HSV 同义） |  

---

# LGenerateOptions

### **色板生成选项**

`ColorLib.generate()` 方法可接收的选项对象，用于控制色板主题与暗色背景。

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| theme | 'dark' \| 'default'? | 色板主题：`'default'` 返回常规色阶；`'dark'` 返回适配暗色背景的色阶 |
| backgroundColor | string? | 暗色主题下混合用的背景色（默认 `'#141414'`） |

> 说明：`backgroundColor` 仅在 `theme: 'dark'` 时参与计算，用于将色阶与所选背景色混合。