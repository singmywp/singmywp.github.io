# More  查看更多

> [查看 sn-more 的 2.0 版本差异](/differences/components/sn-more)

## 基础用法

- 用于展示一段可折叠的长内容：内容高度超过 `min-height` 时显示"展开查看更多"按钮，点击在收起与展开间切换，带高度过渡动画。
- 收起时内容底部显示与背景色一致的渐变遮罩，提示下方还有内容。
- 支持自定义提示文本、图标、颜色、动画时长、禁用等；内容未超过 `min-height` 时不显示展开按钮。
- `text-color`、`bg-color` 等颜色属性支持 `$` 简写（如 `$primary`）。

```vue
<template>
	<sn-more :min-height="80">
		<sn-text>这里是一段可能很长的内容，超过收起高度时会出现展开按钮。</sn-text>
	</sn-more>
</template>
```

**更多演示请下载 demo 查看**

## 自定义文案与图标

`unfold-text` / `fold-text` 自定义展开与收起提示；`icon` 自定义图标时会覆盖默认的上下箭头（默认根据状态切换 `arrow-down-s-line` / `arrow-up-s-line`）。

```vue
<template>
	<sn-more :min-height="80" unfold-text="查看完整描述" fold-text="收起描述" icon="add-line">
		<sn-text>需要折叠的内容。</sn-text>
	</sn-more>
</template>
```

## 自定义颜色与动画

`text-color` / `bg-color` 支持 `$` 简写，背景色同时决定遮罩渐变色；`ani-time` 控制高度过渡动画时长（ms），传 `0` 关闭动画。

```vue
<template>
	<sn-more :min-height="80" text-color="$primary" bg-color="$primaryLight" :ani-time="300">
		<sn-text>需要折叠的内容。</sn-text>
	</sn-more>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| min-height | 收起时的内容区高度，支持 `$` 前缀动态尺寸 | String \| Number | `100px` | - |
| unfold-text | 展开提示文本 | String | `展开查看更多` | - |
| fold-text | 收起提示文本 | String | `收起` | - |
| icon | 自定义图标名称，会覆盖默认展开/收起时的上下箭头图标 | String | `''` | - |
| text-size | 提示文本大小，支持 `$` 前缀动态尺寸 | String \| Number | `''` | - |
| text-color | 提示文本颜色，支持 `$` 简写 | String | `''` | - |
| bg-color | 内容区背景颜色（同时决定收起遮罩渐变色），支持 `$` 简写 | String | `''` | - |
| disabled | 是否禁用展开/收起操作，文本与图标显示禁用色 | Boolean | `false` | `true` \| `false` |
| ani-time | 高度过渡动画时长（ms），支持 `$` 前缀动态时长，传 `0` 关闭动画 | String \| Number | `$300` | - |
| content-style | 内容区（含遮罩）外部样式 | UTSJSONObject \| String | `''` | - |
| content-class | 内容区外部样式类 | String | `''` | - |
| wrap-style | 内容包裹层外部样式 | UTSJSONObject \| String | `''` | - |
| wrap-class | 内容包裹层外部样式类 | String | `''` | - |
| fold-text-style | 展开/收起提示文本外部样式 | UTSJSONObject \| String | `''` | - |
| fold-text-class | 展开/收起提示文本外部样式类 | String | `''` | - |
| custom-style | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| fold | () => Void | 收起时触发 |
| unfold | () => Void | 展开时触发 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 折叠区域的内容，内容高度超过 min-height 时出现展开/收起按钮 |

<DemoPhone name="sn-more" />
