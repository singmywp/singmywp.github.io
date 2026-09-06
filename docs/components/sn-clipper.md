# Clipper  图片裁剪

> [查看 sn-clipper 的 2.0 版本差异](/differences/components/sn-clipper)

## 基础用法
- 内置完整裁剪交互的图片裁剪器：手势拖动/双指缩放图片，8 向手柄调整裁剪框，底部提供比例预设、旋转/镜像工具与还原按钮
- 点击右上角对勾按钮或调用 `crop` 方法导出裁剪结果，结果为 base64 图片（PNG），并通过 `confirm` 事件返回尺寸、比例、旋转等详细信息
- 可作为卡片嵌入页面，也可配合 `fill-viewport` 作为整页裁剪器使用

```vue
<template>
	<sn-clipper image-url="/static/images/photo.png" @confirm="onConfirm"></sn-clipper>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 作为整页裁剪器

设置 `fill-viewport` 后裁剪区自动占满父容器剩余空间，适合放在全屏页面中。

```vue
<template>
	<sn-page fill-content>
		<sn-clipper image-url="/static/images/photo.png" fill-viewport @cancel="onCancel"
			@confirm="onConfirm"></sn-clipper>
	</sn-page>
</template>
```

### 自定义比例预设

通过 `ratio-list` 自定义比例按钮，`ratio` 为 `0` 表示自由比例；`initial-ratio-id` 指定初始选中项。

```vue
<template>
	<sn-clipper image-url="/static/images/photo.png" initial-ratio-id="id-card"
		:ratio-list="ratios"></sn-clipper>
</template>
<script lang="uts" setup>
	const ratios = [
		{ id: 'free', text: '自由', ratio: 0 },
		{ id: 'id-card', text: '身份证', ratio: 85.6 / 54.0 }
	] as SnClipperRatioItem[]
</script>
```

### 通过 ref 控制

```vue
<template>
	<sn-clipper ref="clipperRef" image-url="/static/images/photo.png"></sn-clipper>
</template>
<script lang="uts" setup>
	const clipperRef = ref<SnClipperComponentPublicInstance | null>(null)
	function rotate() {
		clipperRef.value?.$callMethod('rotateClockwise')
	}
	function exportImage() {
		clipperRef.value?.$callMethod('crop')
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| imageUrl | 要裁剪的图片路径，为空时显示“请传入图片”占位 | String | `''` | - |
| bgColor | 裁剪预览区背景颜色，支持 `$` 主题色简写 | String | `$page` | - |
| previewHeight | 预览区高度，数字单位为 px；`fill-viewport` 为 `true` 时忽略此值 | String \| Number | `360` | - |
| fillViewport | 是否让预览区撑满父容器剩余空间（整页裁剪模式） | Boolean | `false` | `true` \| `false` |
| tabBodyHeight | 底部工具面板主体区高度（预留，当前未生效，实际高度随字体大小乘数固定） | String \| Number | `''` | - |
| minCropWidth | 裁剪框最小宽度，数字单位为 px，为空时不限制 | String \| Number | `''` | - |
| minCropHeight | 裁剪框最小高度，数字单位为 px，为空时不限制 | String \| Number | `''` | - |
| minScale | 图片最小缩放比例 | Number | `1` | - |
| minCropPixels | 裁剪框对应原图的最小像素边长，用于限制最大放大倍数 | Number | `4` | - |
| outputScale | 输出倍率，导出图片尺寸 = 裁剪框尺寸 × 该倍率（再乘设备像素比） | Number | `1` | - |
| quality | 导出图片质量（0-1），当前导出固定为 PNG 格式 | Number | `1` | - |
| initialRatioId | 初始选中的比例项 id | String | `ratio-1-1` | - |
| ratioList | 比例预设列表，为空数组时使用默认列表（自由、1:1、3:4、4:3、9:16、16:9） | SnClipperRatioItem[] | `自由、1:1、3:4、4:3、9:16、16:9 六项` | - |
| borderColor | 裁剪框边框与四角颜色 | String | `#FFFFFF` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |

`SnClipperRatioItem` 结构：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| id | String | 比例项唯一标识 |
| text | String | 按钮文本 |
| ratio | Number | 宽高比（宽/高），`0` 表示自由比例 |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| ready | (detail: UTSJSONObject) => Void | 图片加载成功时触发，`detail` 包含 `width`、`height`（图片原始尺寸）与 `ratio`（当前比例） |
| change | (detail: UTSJSONObject) => Void | 裁剪状态变化时触发（拖动、缩放、旋转、镜像、切换比例等），`detail` 包含 `rotation`、`flipX`、`flipY`、`scale`、`translateX`、`translateY`、`cropLeft`、`cropTop`、`cropWidth`、`cropHeight`、`ratio` |
| confirm | (detail: SnClipperConfirmDetail) => Void | 裁剪导出成功时触发 |
| cancel | () => Void | 点击取消（×）按钮时触发 |
| error | (error: UTSJSONObject) => Void | 图片加载失败或导出失败时触发，`error.message` 为错误信息 |

`confirm` 事件参数 `SnClipperConfirmDetail` 结构：

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| dataUrl | String | 裁剪结果 base64 图片数据（PNG） |
| width | Number | 输出图片宽度（像素） |
| height | Number | 输出图片高度（像素） |
| ratio | Number | 当前裁剪比例 |
| rotation | Number | 旋转角度（0/90/180/270） |
| flipX | Number | 水平镜像系数（1 正常，-1 镜像） |
| flipY | Number | 垂直镜像系数（1 正常，-1 镜像） |
| imageWidth | Number | 原图宽度 |
| imageHeight | Number | 原图高度 |
| cropLeft | Number | 裁剪框在预览区中的横向位置 |
| cropTop | Number | 裁剪框在预览区中的纵向位置 |
| cropWidth | Number | 裁剪框宽度 |
| cropHeight | Number | 裁剪框高度 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| crop | - | - | 执行裁剪导出，成功后触发 `confirm` 事件；图片/画布未就绪时 toast 提示 |
| restore | - | - | 还原所有变换（旋转、镜像、缩放、平移、比例）至初始状态 |
| rotateCounterclockwise | - | - | 逆时针旋转 90°（别名 `rotateLeft`） |
| rotateClockwise | - | - | 顺时针旋转 90°（别名 `rotateRight`） |
| flipHorizontal | - | - | 左右镜像 |
| flipVertical | - | - | 上下镜像 |
| setRatio | (item: SnClipperRatioItem) | - | 切换为指定比例项并最大化裁剪框 |

<DemoPhone name="sn-clipper" />
