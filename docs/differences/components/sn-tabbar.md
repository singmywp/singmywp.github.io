# sn-tabbar

**旧版状态**：1.1.6 已提供，同样是 data 驱动 + tab1~tab10 插槽的底部导航栏，支持拦截鉴权与角标。

**差异明细**：

- 新增属性：`hoverStyle`、`hoverStartTime`、`hoverStayTime`、`hoverTransTime`、`hoverStopPropagation`（子项统一按压态交互属性）、`customClass`（主体外部样式类）、`blur` / `blurRadius` / `blurOpacity`（主体毛玻璃背景）
- 移除属性：无
- 类型或默认值变化：
  - `index` 默认值 `0`→`1`（首次显示索引，从 1 开始）
  - `imageSize` 默认值 `35px`→`''`（空时解析为 `$22`）
  - `padding` 默认值 `5px`→`$10`
  - `itemPadding` 默认值改为 `$5 0`，透传到子项新增的 `padding` 属性；子项默认上下内边距随 paddingFactor 缩放，左右为 0，显式设置可覆盖
  - `textSize` 默认值 `$0`→`''`（空时解析为 `$11`）
  - `iconSize` 默认值 `$4`→`''`（空时解析为 `$22`）
  - 尺寸类属性（imageSize/padding/margin/itemBorderRadius/itemPadding/itemSpacing/borderRadius/textSize/iconSize）类型 String→String \| Number
  - `customStyle` / `customContainStyle` 类型 UTSJSONObject→UTSJSONObject \| String，默认值 `{}`→`''`
  - 颜色类属性（bgColor/itemBgColor/itemActiveBgColor/textColor/activeTextColor/iconColor/activeIconColor）默认值 `$front`/`$transparent`/`$text`/`$primary`→`''`（空时自动取主题色）
- 行为变化：导航栏主体统一为单层容器，固定与内嵌模式共用；移除自动底部安全区 padding、额外背景层与 VDOM 原生模糊层，模糊直接作用于主体；data 驱动、tab1~tab10 插槽、interceptor 拦截与 badge 角标能力均保留
- 事件：`change`、`heightchange` 保留，签名一致
- 方法：`changeToIndex` 保留
- 新增事件、方法、插槽：hover 交互属性为新增；插槽 tab1~tab10 保留

## 单层容器与布局

新增 `tabbarKey`（默认空字符串）：固定模式在最近的 `sn-page` 作用域登记实际高度，子页面通过新增钩子 `useTabbarHeights` 读取。高度记录仅在内存中保存，key 变化、取消固定定位、组件或页面卸载时清理；同页重复 key 不覆盖其他实例。占位放在子页面滚动内容末尾，避免外侧空白带使毛玻璃采样不到内容。

安全距离和内容占位由使用方或页面容器处理。`v-model:height` / `heightchange` 输出主体实际高度，不含外边距、底部偏移和自动安全区；旧调用若依赖安全区高度，需在使用方额外计入。

背景色、圆角、边框、外边距、内边距与 `customStyle` 均作用于唯一主体容器，`margin` 不再强制清除顶部外边距。毛玻璃仅作用于主体，关闭 `blur` 时清除滤镜；默认背景透明度由 `blurOpacity` 控制，显式 `bgColor` 保留自身透明度。

子页面容器独立于主体，`customContainStyle` 作用于子页面容器；未提供子页面插槽时，为兼容旧调用合并到主体，建议新调用使用 `margin` / `padding` / `customStyle`。`showPages=false` 不渲染子页面。
