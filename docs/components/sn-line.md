# Line  分割线

> [查看 sn-line 的 2.0 版本差异](/differences/components/sn-line)

## 基础用法

分割线组件，可包含文本或圆点。

- 支持水平与垂直方向，长度可指定
- 支持虚线，可在水平分割线中间显示文本或以圆点代替文本
- 颜色默认取主题线条色并可自定义，与上下（或左右）内容的间距可调

```vue
<template>
	<sn-line text="这是分割线" margin="16"></sn-line>
</template>
```

**更多演示请下载 demo 查看**

## 垂直分割线

垂直分割线常用于行内内容之间的分隔，需在水平排列的容器中使用。

```vue
<template>
	<view class="row">
		<text>文字</text>
		<sn-line direction="vertical" :length="20" margin="12"></sn-line>
		<text>文字</text>
	</view>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| direction | 分割线方向 | String | `horizontal` | `horizontal` \| `vertical` |
| color | 分割线颜色 | String | `$line` | - |
| length | 分割线长度（px），水平时为宽度、垂直时为高度；非数值时水平占满宽度、垂直使用默认高度 | String \| Number | - | - |
| thickness | 分割线粗细（px） | String \| Number | `1` | - |
| margin | 分割线外边距（px），水平时作用于上下、垂直时作用于左右 | String \| Number | `0` | - |
| dashed | 是否显示为虚线 | Boolean | `false` | `true` \| `false` |
| dot | 是否以圆点"•"代替文本（仅水平方向有效） | Boolean | `false` | `true` \| `false` |
| text | 分割线中间显示的文本（仅水平方向有效） | String | `''` | - |
| customStyle | 自定义分割线样式（仅无文本模式生效） | UTSJSONObject \| String | `''` | - |

<DemoPhone name="sn-line" />
