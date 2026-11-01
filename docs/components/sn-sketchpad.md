# Sketchpad 画板

## 基础用法

独立的手写画板组件，适用于签名、涂鸦、笔记等自由绘制场景。

- 支持画笔、橡皮与取色器，内置 18 种笔触与侧面色板
- 支持撤销 / 重做、清空与导出图片，可随时新建指定尺寸画布
- 支持网格背景与漫游模式（拖动画布、捏合缩放、松手惯性滑行），配色跟随主题

```vue
<template>
	<sn-sketchpad @exported="onExported" />
</template>
```

**更多演示请下载 demo 查看**

## 笔触与操作栏

内置 18 种笔触（含橡皮），完整取值可在属性表 `brush` 行展开查看。画笔与橡皮的粗细相互独立：切换工具后，颜色与粗细弹层、设置面板中的粗细滑块会自动指向当前工具的独立数值，互不干扰。画笔粗细范围为 1–128px、橡皮为 2–128px；蜡笔等笔触的粗细已与铅笔对齐，小尺寸下不再异常粗重。

顶部悬浮操作组提供漫游模式、重置视图、撤销、重做、清空、横竖屏切换与导出。竖屏底部控制区分为两行：上排为可横向拖动的紧凑笔触按钮，选中时显示主题色描边、浅色背景，图标与文字同步高亮；下排的画笔、橡皮、取色器与设置入口采用图标在上、文字在下的无底框布局，图标缩小但保持原有触控区域，中间保留圆形颜色与粗细入口。横屏时快捷笔触栏并入工具行，留出更多绘图区；横向拖动后可继续点击可见的笔触按钮。

设置面板采用抽屉样式与 Tabs 分类：「笔触」（全部笔触、线条颜色与粗细、端点样式）、「画布」（画布尺寸、画布背景、网格样式与参数、最大撤销步骤数）与「功能」（漫游模式、取色器、侧面色板、多指绘制开关与缩放控制）；点选标签或左右滑动内容区切换分类。内容区和选项按钮采用紧凑内边距；各分类的内容可纵向惯性滚动并独立保留滚动位置，滚动后可继续操作当前可见的按钮、色块、滑块与开关；底部完成按钮保持紧凑高度。

操作栏和设置面板中的按钮、色块均由原生视图实现；设置按钮通过统一点击态机制提供按下反馈。

`lineCap`（默认 `round`）控制笔触端点形状：`butt` 平头、`square` 方头、`round` 圆头，设置面板「笔触」分类内以「平头 / 方头 / 圆头」显示并可切换。它对线型笔触（默认、钢笔、中性笔、马克笔、铅笔、毛笔等以线条描边为主的笔触）生效，每笔落笔时固定，改变设置只影响之后的笔画。

`multiTouch`（默认 `false`）控制多指绘制：开启后可用多根手指同时在画布上绘制，多笔并行互不干扰；关闭时仅响应第一根手指。漫游模式下点击画笔 / 橡皮 / 取色器按钮或任一画笔类型（即使点击的是当前已选中的笔刷）都会自动退出漫游模式并切回绘制模式，仅调整颜色与粗细不会退出。

## 全屏画板

将 `height` 设为 `fill`，并配合 `sn-page` 的 `fill-content` 属性（内容区填满剩余高度、不滚动）即可让画板铺满整个页面：

绘制事件仅在实际画布范围内生效。自适应画布已有内容时，页面可用空间变化会同步调整逻辑画布并迁移已有笔迹。

::: warning 横竖屏切换
如果需要切换横竖屏后保持绘制内容不变形，必须选定画布尺寸（同时指定 `canvasWidth` 和 `canvasHeight`，或在设置面板选择固定尺寸），不要使用「适应组件」。
:::

```vue
<template>
	<sn-page title="画板" :show-back="true" fill-content>
		<sn-sketchpad height="fill" />
	</sn-page>
</template>
```

Demo 页收到导出成功事件后，竖屏直接以 `sn-popup` 展示导出图片；横屏先调用 `setLandscape(false)` 退出全屏，待 `orientationchange(false)` 后再打开弹窗。预览使用 `image` 的 `aspectFit` 模式，点击关闭按钮或遮罩可返回画板。

## 横屏模式

点击顶部悬浮栏的横屏图标可进入原生全屏横屏，再次点击退出；也可通过 ref 调用 `setLandscape` 方法控制。横屏后画板根据原生全屏事件获取当前窗口尺寸，绘图区自动占据底部工具栏之外的全部空间；默认底部设置抽屉在横屏下适当增高，左右两侧叠加屏幕安全区和固定留白，避开刘海、挖孔区域（自定义抽屉尺寸保持原值）；组件卸载时会自动退出全屏。

横屏时首次触发页面返回会退出横屏并留在当前页面；恢复竖屏后再次返回，由页面按默认行为处理。iOS 侧滑返回默认不触发页面返回事件，不在此拦截范围内。

```vue
<template>
	<sn-sketchpad ref="padRef" />
</template>
<script lang="ts" setup>
	import type { ComponentPublicInstance } from 'vue'

	const padRef = ref<ComponentPublicInstance | null>(null)
	function toLandscape() {
		padRef.value?.$callMethod('setLandscape', true)
	}
</script>
```

## 网格样式

`gridStyle` 支持 `dot`（点阵）、`square`（方格）、`line`（横线）三种样式，与「无网格」组成设置面板中的四态选择；`gridEnabled` 为 `false` 时等同于「无」，不显示网格。

```vue
<template>
	<sn-sketchpad grid-enabled grid-style="dot" :grid-density="24"></sn-sketchpad>
	<sn-sketchpad grid-enabled grid-style="line" :grid-density="30"></sn-sketchpad>
</template>
```

## 画布尺寸

通过 `canvasWidth` / `canvasHeight` 指定画布逻辑尺寸（px，取值 64–4096），需同时大于 0 才生效；任一为 0（默认）时画布自动适应组件尺寸。画布尺寸大于组件显示区域时会等比缩放适配显示，导出位图的 `width` / `height` 以实际渲染倍率为准；该倍率只由画布尺寸、组件显示尺寸与设备像素比决定，**与当前漫游缩放倍率无关**，因此同一画布在不同缩放下导出结果一致。

也可通过 ref 调用 `newCanvas(width, height)` 随时新建指定尺寸画布，新画布会清空当前笔画与历史（`width`、`height` 传 0 或省略时恢复自适应尺寸）：

```vue
<template>
	<sn-sketchpad ref="padRef" :canvas-width="1080" :canvas-height="1440" />
	<sn-button text="新建 512×512 画布" @click="onNewCanvas"></sn-button>
</template>

<script lang="uts" setup>
	const padRef = ref<SnSketchpadComponentPublicInstance | null>(null)

	function onNewCanvas() {
		padRef.value?.$callMethod('newCanvas', 512, 512)
	}
</script>
```

设置面板「画布」分类内置 `适应组件`、`1:1`、`4:3`、`16:9`、`9:16` 比例预设与自定义宽高输入。

画布之外会露出垫层（底色）：垫层颜色可在设置面板「画布」→「画布垫层」中配置，或通过 `underlayColor` 属性指定，画布自身带一圈可见边界线，便于区分画布范围；橡皮擦除只作用在笔画层，擦掉处露出画布背景与网格。

## 漫游模式

`roamEnabled` 为 `true`（默认）时，左上角悬浮操作组首位显示漫游开关；开启后单指拖动画布、双指捏合缩放（缩放范围 25%–800%），拖动松手后按松手速度惯性滑行并指数阻尼减速，撞到平移边界立即停止；此时画布不接受落笔；点击画笔 / 橡皮 / 取色器，或切换笔触（快捷笔刷栏与设置面板中的笔触选项）会自动退出漫游模式，仅调整颜色或粗细不会退出。漫游中悬浮组会依次显示「重置视图」、缩小、放大按钮（每次缩放步长由 `zoomStep` 控制，默认 10%），设置面板「功能」分类也提供缩小、重置、放大控制与当前缩放比例显示（缩放比例在松手后更新，避免手势中反复刷新面板）。

平移范围受限，画布不会被移出屏幕：画布边角最远只能移动到视口中心，即画布始终覆盖视口中心点——因此拖动可以露出画布边界外的垫层，但画布始终有一部分留在视口内、不会被整体移出。缩小 / 放大以视口中心为锚点（捏合则以两指中点为锚点），视角不会因缩放而跳动。

### 渲染与清晰度

画板由底图层和笔画层组成，两层同处一个合成层（漫游时只改这一层的合成变换、不做任何重绘），因此手势始终跟手：

- **底图**：画布背景与网格，整幅画布尺寸；
- **笔画层**：全部笔画的全幅画布，内容变化时仅重绘该层，手势过程不触发整幅位图重建。

画布位图尺寸由画布尺寸、组件显示尺寸与设备像素比决定：App 平台画布位图尺寸只读、由平台按画布元素布局尺寸决定（`canvas.width/height` 赋值不生效），Web 端由框架按设备像素比设置。绘制倍率始终按画布**实际位图尺寸**反推（`canvas.width / 画布逻辑宽度`），保证屏幕坐标与画布内容坐标严格一致。

App 端笔画层在创建时与画布尺寸变化时按位图像素预算一次性预留放大分辨率（通过画布元素的布局尺寸实现，位图随布局自动放大到该分辨率），因此放大后笔画依然清晰。漫游缩放与平移全程只做合成变换，不重建位图、不改变画布尺寸与内容，手势期间无闪动、无偏移。

::: info
放大分辨率受位图像素预算（约 800 万像素）封顶，极大画布或极高倍率下会优先保证稳定性；App 平台画布位图尺寸只读，清晰度上限由设备像素比与画布布局尺寸决定。
:::

拖动 / 缩放过程中只对整个 stage 做合成变换；快速连续拖动或缩放不会重绘画布。

### 大画布与大量笔画

笔画较多时，整幅重建会被拆成按帧预算（约 8ms）执行的分片任务，在 `requestAnimationFrame` 回调间推进：UI 线程不会被一次重建长时间占住，按钮、面板等交互全程可用，画面则从旧内容平滑地补全为新内容。笔画很少时（不超过 150 笔）仍然一次性同步完成，避免无谓的分帧开销。同一时刻只存在一个重建任务，新的手势、撤销重做、清空、导出都会正确接管或取消它。

笔画渲染本身的复杂度也已收敛：`shaded`、`sketchy`、`fur`、`longfur`、`web` 这类"纤维"笔刷原先对每一段都回溯该笔画此前的**全部**点（长笔画退化为 O(n²)），现在改为只回溯弧长范围内的邻近点，长笔画的开销与点数线性相关。

```vue
<template>
	<sn-sketchpad roam-enabled :canvas-width="2000" :canvas-height="2000" />
</template>
```

## 取色器与侧面色板

`eyedropperEnabled`（默认 `true`）控制工具栏吸管工具，点击画布任意位置吸取颜色：吸取结果会设为当前笔触颜色、触发 `pick` 事件，并在侧面色板开启时自动加入色板。橡皮工具旁的吸管图标仅在开启时显示。

`paletteEnabled`（默认 `true`）控制画布侧边的色板：色点为圆形排列，点击应用为当前笔触颜色（可快速切换笔刷颜色），长按删除色点；「+」按钮打开颜色选择器（弹窗内同时展示内置预设颜色），横屏下会先退出横屏、待布局恢复后再打开颜色选择器，点击已有色点则保持横屏并直接选色。色板同步展示在弹窗底部的 `extra` 插槽中——点击色点将该颜色载入取色面板（再点「确定」生效），长按色点删除，直接用取色面板选好颜色后点「确定」即可把新颜色加入色板，色板为空时插槽内会显示空状态提示；`palettePosition` 可设为 `left` 或 `right`（默认）决定色板所在侧，`paletteColors` 提供初始色板颜色。色板容量随画布显示高度自适应，超出时不再允许添加。

:::tip 提示
uvue 的事件系统不提供右键事件（`UniMouseEvent` 无按键信息），色点删除统一使用长按（触屏）或按住鼠标左键（Web）约 0.65 秒实现。
:::

```vue
<template>
	<sn-sketchpad :palette-colors="['#1F1F1F', '#EF4444', '#3B82F6']" palette-position="left"
		@pick="onPick" @palettechange="onPaletteChange" />
</template>
```

## 撤销与重做

撤销/重做的历史由框架的 [`useHistory`](/api/hooks/use-history) 增量操作日志引擎驱动，理解它的存储模型有助于正确设置 `maxHistory`：

- **一笔即一步**：每一笔完整笔画（含橡皮笔画与点按产生的短笔画）记录为一步，不做按时间窗口的连笔合并，撤销语义与「撤销上一笔」完全一致。
- **不存快照**：历史只记录每一步在笔画池中的下标与权重，既不复制笔画，也不缓存画布位图，因此历史内存与「笔画的点数」成正比，而不是与步数 × 画布面积成正比。
- **两步预算**：`maxHistory` 是步数上限；此外引擎还有 12 万点的权重预算，笔画特别密集时实际可撤销步数会少于 `maxHistory`，但内存占用始终有上限。
- **可在设置面板调节**：设置面板「画布」分类底部提供「最大撤销步骤数」滑块，范围 1–100（`maxHistory` 传入大于 100 时滑块上限随之扩展）；面板改动即时生效，调小后立刻回收多余的历史步骤，`maxHistory` prop 变化时也会同步回面板。
- **重做失效时机**：只有「当前笔结束、产生新的一步」会清空重做；切换工具、改颜色、改网格、横竖屏切换都不会丢弃已撤销的内容。
- **清空会重置历史**：调用 `clear` 方法（或点击清空按钮）后撤销栈一并清空，此前的内容无法再撤销。
- **落笔期间不接受撤销**：手指未离开画布时调用 `undo`、`redo` 或 `clear` 会被忽略，避免历史与画布内容不同步。

撤销只对受影响的区域做增量重绘：先清掉被撤销笔画的包围盒，再按顺序重放与之相交的笔画；重做则只补画被恢复的那一笔。因此撤销、重做的开销与「相交笔画数」相关，而不是与总笔画数相关。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 画板宽度，支持 `$` 动态尺寸语法 | String \| Number | `100%` | - |
| height | 画布高度，数字单位为 px，传入 `fill` 时画布占满组件剩余高度（配合 `sn-page` 的 `fill-content` 可铺满全屏） | String \| Number | `280` | - |
| canvasWidth | 指定画布逻辑宽度（px，64–4096），需与 `canvasHeight` 同时大于 0；任一为 0 时画布自适应组件尺寸 | Number | `0` | - |
| canvasHeight | 指定画布逻辑高度（px，64–4096），需与 `canvasWidth` 同时大于 0；任一为 0 时画布自适应组件尺寸 | Number | `0` | - |
| bgColor | 画布背景和导出图片背景颜色，为空时跟随主题（亮色 `#FFFFFF`、暗色 `#28292A`） | String | `跟随主题` | - |
| underlayColor | 画布垫层（画布边界之外的底衬）颜色，为空时跟随主题（亮色 `#E5E7EB`、暗色 `#141416`） | String | `跟随主题` | - |
| lineColor | 笔触颜色，为空时跟随主题（亮色 `#1F1F1F`、暗色 `#F1F1F1`） | String | `跟随主题` | - |
| lineWidth | 笔触粗细，单位 px | Number | `3` | - |
| eraserWidth | 橡皮粗细，单位 px | Number | `16` | - |
| brush | 初始笔触类型 | [[SnSketchpadBrush]] | `default` | - |
| lineCap | 笔触端点样式，设置面板「笔触」分类内可切换 | String | `round` | `butt` \| `square` \| `round` |
| showBrushSettings | 是否显示快捷笔刷栏与设置面板中的笔触选项 | Boolean | `true` | `true` \| `false` |
| multiTouch | 是否开启多指绘制（设置面板「功能」分类内可切换） | Boolean | `false` | `true` \| `false` |
| gridEnabled | 是否显示网格背景 | Boolean | `false` | `true` \| `false` |
| gridStyle | 网格样式，`gridEnabled` 为 `true` 时生效 | [[SnSketchpadGridStyle]] | `square` | `dot` \| `square` \| `line` |
| gridColor | 网格颜色 | String | `#B8B8B8` | - |
| gridLineWidth | 网格线宽，单位 px | Number | `1` | - |
| gridDensity | 网格间距，单位 px | Number | `20` | - |
| maxHistory | 最大撤销步骤数，设置面板内可直接调节（默认上限 100） | Number | `20` | - |
| roamEnabled | 是否启用漫游模式（左上角悬浮按钮与设置面板开关） | Boolean | `true` | `true` \| `false` |
| eyedropperEnabled | 是否启用取色器（工具栏吸管工具与设置面板开关） | Boolean | `true` | `true` \| `false` |
| paletteEnabled | 是否启用侧面色板 | Boolean | `true` | `true` \| `false` |
| palettePosition | 侧面色板位置 | String | `right` | `left` \| `right` |
| paletteColors | 侧面色板初始颜色 | Array\<String\> | `空` | - |
| zoomStep | 漫游缩放按钮每次放大 / 缩小的百分比步长 | Number | `10` | - |
| showActionBar | 是否显示操作栏（顶部悬浮按钮与底部控制区） | Boolean | `true` | `true` \| `false` |
| drawerPosition | 设置面板方向 | String | `bottom` | `top` \| `right` \| `bottom` \| `left` |
| drawerWidth | 设置面板尺寸，`left`/`right` 为宽度、`top`/`bottom` 为高度，支持百分比 | String \| Number | `70%` | - |
| aniTime | 设置面板动画时长 | String \| Number | `''` | - |
| customStyle | 根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |
| canvasWrapClass | 画布容器外部样式类 | String | `''` | - |
| canvasWrapStyle | 画布容器样式 | UTSJSONObject \| String | `''` | - |
| barClass | 底部控制区外部样式类 | String | `''` | - |
| barStyle | 底部控制区样式 | UTSJSONObject \| String | `''` | - |
| toolClass | 操作按钮外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | `(data: SketchpadData) => Void` | 一笔结束、撤销、重做、清空或画布尺寸变化后触发 |
| exported | `(data: SketchpadData) => Void` | 导出图片成功后触发，`dataUrl` 为 base64 图片数据 |
| undo | `() => Void` | 撤销成功后触发 |
| redo | `() => Void` | 重做成功后触发 |
| clear | `() => Void` | 清空成功后触发 |
| pick | `(color: string) => Void` | 取色器吸取颜色后触发 |
| palettechange | `(colors: Array<String>) => Void` | 侧面色板颜色增删后触发 |
| orientationchange | `(landscape: Boolean) => Void` | 横竖屏模式切换后触发 |

## 方法

| 名称 | 参数 | 说明 |
| --- | --- | --- |
| undo | - | 撤销上一笔 |
| redo | - | 重做上一笔撤销的内容 |
| clear | - | 清空画板 |
| exportImage | - | 导出为 base64 图片并触发 `exported` |
| setLandscape | `land: Boolean` | 设置横屏或竖屏模式 |
| newCanvas | `width?: Number, height?: Number` | 新建指定尺寸画布并覆盖当前画布（清空笔画与历史）；传 0 或省略恢复自适应尺寸 |
| resetView | - | 重置漫游视图（缩放恢复 100%、平移归零） |

:::type-fields SnSketchpadBrush

画板笔触类型：`default`、`pen`、`gel`、`pencil`、`marker`、`brush`、`eraser`、`crayon`、`fur`、`ink`、`longfur`、`ribbon`、`shaded`、`sketchy`、`spray`、`squares`、`circle`、`web`。

:::

:::type-fields SnSketchpadGridStyle

画板网格样式：`dot`（点阵）、`square`（方格）、`line`（横线）。

:::

:::type-fields SketchpadData

`change` 和 `exported` 事件回调参数。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| dataUrl | String | base64 图片数据，`change` 事件中为空字符串 |
| width | Number | 当前画布宽度或导出图片实际像素宽度 |
| height | Number | 当前画布高度或导出图片实际像素高度 |

:::

<DemoPhone name="sn-sketchpad" />
