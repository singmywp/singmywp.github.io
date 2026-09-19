# Signature  签名

> [查看 sn-signature 的 2.0 版本差异](/differences/components/sn-signature)

## 基础用法
- 基于 canvas 的手写签名板，底部操作栏提供横/竖屏切换、撤销、重做、清空、设置与导出
- 内置 17 种笔触（钢笔、毛笔、蜡笔、喷漆等），设置面板采用 Tabs + Swiper 分类：「笔触」（笔触类型、线条颜色与粗细）与「画布」（画布背景、网格背景），左右滑动或点选标签切换
- 通过 ref 调用 `undo`、`redo`、`clear`、`exportImage`、`setLandscape` 方法可编程控制签名板
- 设置面板为组件内部自实现的覆盖层（非 `sn-drawer`），左右滑出动画只做 `transform` 过渡、显隐交给 `visibility`，无打开闪动；面板展开期间画布区不响应落笔，面板内 Tabs、滑块、开关等交互不受影响，横竖屏下表现一致

```vue
<template>
	<sn-signature @exported="onExported"></sn-signature>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 自定义笔触

通过 `brush` 属性指定初始笔触，设置面板内也可实时切换；`show-brush-settings` 为 `false` 时隐藏面板中的笔触选项。

```vue
<template>
	<sn-signature brush="pen" height="220" :show-brush-settings="true"></sn-signature>
</template>
```

### 横屏签名

点击操作栏的横屏图标可全屏横置签名板（Web 端以固定定位铺满视口，App 端调用原生全屏横屏）；也可通过 ref 调用 `setLandscape` 方法控制。

```vue
<template>
	<sn-signature ref="sigRef"></sn-signature>
</template>
<script lang="uts" setup>
	const sigRef = ref<SnSignatureComponentPublicInstance | null>(null)
	function toLandscape() {
		sigRef.value?.$callMethod('setLandscape', true)
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| width | 签名板宽度，支持 `$` 动态尺寸语法 | String \| Number | `100%` | - |
| height | 签名板（画布区）高度，数字单位为 px，支持 `$` 动态尺寸语法 | String \| Number | `280` | - |
| bgColor | 画布背景颜色，同时作为导出图片的背景色 | String | `#FFFFFF` | - |
| lineColor | 签名线条颜色 | String | `#1F1F1F` | - |
| lineWidth | 线条粗细（px） | Number | `3` | - |
| brush | 笔触样式 | [[SnSignatureBrush]] | `default` | `default`(默认) \| `pen`(钢笔) \| `gel`(中性笔) \| `pencil`(铅笔) \| `brush`(毛笔) \| `marker`(马克笔) \| `crayon`(蜡笔) \| `fur`(毛皮) \| `ink`(墨水) \| `longfur`(长绒毛) \| `ribbon`(丝带) \| `shaded`(阴影) \| `sketchy`(速写) \| `spray`(喷漆) \| `squares`(方格) \| `circle`(圆泡) \| `web`(蛛网) |
| showBrushSettings | 设置面板中是否显示笔触选项 | Boolean | `true` | `true` \| `false` |
| gridEnabled | 是否显示网格背景 | Boolean | `false` | `true` \| `false` |
| gridColor | 网格线颜色 | String | `#B8B8B8` | - |
| gridLineWidth | 网格线宽（px） | Number | `1` | - |
| gridDensity | 网格密度，即网格间距（px） | Number | `20` | - |
| maxHistory | 最大撤销历史记录数 | Number | `20` | - |
| showActionBar | 是否显示底部操作栏（横竖屏、撤销、重做、清空、设置、导出） | Boolean | `true` | `true` \| `false` |
| drawerPosition | 设置面板滑出的方向 | String | `right` | `left` \| `right`（`top`/`bottom` 视为 `right`） |
| drawerWidth | 设置面板宽度 | String \| Number | `300px` | - |
| aniTime | 设置面板动画时长，支持 `$` 动态时长语法 | String \| Number | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |
| canvasWrapClass | 画布容器外部样式类 | String | `''` | - |
| canvasWrapStyle | 自定义画布容器样式 | UTSJSONObject \| String | `''` | - |
| barClass | 操作栏外部样式类 | String | `''` | - |
| barStyle | 自定义操作栏样式 | UTSJSONObject \| String | `''` | - |
| toolClass | 操作栏工具按钮外部样式类 | String | `''` | - |

:::type-fields SnSignatureBrush

签名笔触类型。

| 可选值 | 备注 |
| :--- | :--- |
| `default` | 默认 |
| `pen` | 钢笔 |
| `gel` | 中性笔 |
| `pencil` | 铅笔 |
| `marker` | 马克笔 |
| `brush` | 毛笔 |
| `crayon` | 蜡笔 |
| `fur` | 毛皮 |
| `ink` | 墨水 |
| `longfur` | 长绒毛 |
| `ribbon` | 丝带 |
| `shaded` | 阴影 |
| `sketchy` | 速写 |
| `spray` | 喷漆 |
| `squares` | 方格 |
| `circle` | 圆泡 |
| `web` | 蛛网 |

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (data: SignatureData) => Void | 签名内容变化时触发（一笔结束、撤销、重做、清空），`data.dataUrl` 为空字符串，`width`/`height` 为当前画布尺寸 |
| exported | (data: SignatureData) => Void | 导出签名图片成功后触发，`data.dataUrl` 为 base64 图片数据，`width`/`height` 为图片实际像素尺寸（已乘设备像素比） |
| undo | () => Void | 撤销签名时触发 |
| redo | () => Void | 重做签名时触发 |
| clear | () => Void | 清空签名板时触发 |
| orientationchange | (landscape: boolean) => Void | 横竖屏切换时触发，参数为是否横屏 |

:::type-fields SignatureData

`change`、`exported` 事件回调参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| dataUrl | String | 是 | base64 图片数据（`change` 事件中为空字符串） |
| width | Number | 是 | 图片宽度 |
| height | Number | 是 | 图片高度 |

---

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| undo | - | - | 撤销上一笔签名 |
| redo | - | - | 重做上一笔撤销的签名 |
| clear | - | - | 清空签名板 |
| exportImage | - | - | 将签名导出为 base64 图片并通过 `exported` 事件返回；画布未就绪或无内容时以 toast 提示且不导出 |
| setLandscape | (land: Boolean) | - | 设置横屏（全屏）模式，`true` 进入横屏、`false` 退出 |

<DemoPhone name="sn-signature" />
