# Watermark  水印

## 基础用法
- 在页面或卡片内容上方平铺一层倾斜重复的水印文本，水印层不拦截点击事件（`pointer-events: none`），内部按钮、开关等可正常操作
- `content` 支持换行实现多行水印；字号、行距、列距、旋转角度、透明度均可调
- 组件根节点为相对定位容器，水印层绝对定位铺满最上层（z-index 999）

```vue
<template>
	<sn-watermark content="SinleUI" custom-style="border-radius:16px;">
		<view>
			<sn-text text="内容区示例"></sn-text>
		</view>
	</sn-watermark>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 多行水印

`content` 中使用换行符即可生成多行水印。

```vue
<template>
	<sn-watermark :content="'机密文件\n请勿外传'" color="rgba(239, 68, 68)" :font-size="16" :rotate="0">
		<view>
			<sn-text text="内部资料"></sn-text>
		</view>
	</sn-watermark>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| content | 水印文本内容，支持 `\n` 换行 | String | `SinleUI` | - |
| color | 水印文字颜色 | String | `rgba(0, 0, 0)` | - |
| fontSize | 水印字号，数字单位为 px，支持 `$` 动态尺寸语法 | String \| Number | `$24` | - |
| letterSpacing | 水印文字字间距，数字单位为 px | String \| Number | `2` | - |
| lineHeight | 水印文字行高，数字单位为 px，最小取字号大小，支持 `$` 动态尺寸语法 | String \| Number | `$24` | - |
| rowGap | 水印行间距，数字单位为 px，支持 `$` 动态尺寸语法 | String \| Number | `$80` | - |
| colGap | 水印列间距，数字单位为 px，支持 `$` 动态尺寸语法 | String \| Number | `$100` | - |
| rotate | 水印旋转角度（deg），范围 -90 ~ 90，超范围自动截断 | Number | `-30` | `-90 ~ 90` |
| opacity | 水印整体透明度（0-1） | Number | `0.2` | `0 ~ 1` |
| minHeight | 容器最小高度，数字单位为 px，为空时不设置 | String \| Number | `''` | - |
| contentStyle | 自定义内容区样式 | UTSJSONObject \| String | `''` | - |
| layerStyle | 自定义水印层样式 | UTSJSONObject \| String | `''` | - |
| textStyle | 自定义水印文字样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |
| contentClass | 内容区外部样式类 | String | `''` | - |
| layerClass | 水印层外部样式类 | String | `''` | - |
| textClass | 水印文字外部样式类 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 被水印覆盖的内容 |
| content | 同默认插槽一样渲染在内容区，可作为多节点内容的补充插槽 |

<DemoPhone name="sn-watermark" />
