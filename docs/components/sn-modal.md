# Modal  模态框

> [查看 sn-modal 的 2.0 版本差异](/differences/components/sn-modal)

## 基础用法

- 自带完整 UI 模板的模态对话框：标题 + 内容 + 确定/取消按钮
- 弹出层类组件，必须放在 `sn-page` 中使用（作为 `sn-page` 的子节点或页面根节点），组件依赖 `sn-page` 注入的 CSS 变量
- 内容区内置 scroll-view，超过窗口高度 80% 时自动限高滚动
- 通过 ref 绑定组件后调用 `open` / `close` 方法控制显隐；`confirm` / `cancel` 事件在点击对应按钮时触发，按钮点击后自动关闭模态框
- 与 API `snu.showModal` 的区别：组件需先放置到页面并用 ref 调用，但支持三个插槽自由定制内容，适用于特殊场景；一般场景用 API 即可

```vue
<template>
	<sn-modal ref="modalEle" title="提示" content="确定执行此操作吗？" @confirm="onConfirm" @cancel="onCancel"></sn-modal>
</template>
```

**更多演示请下载 demo 查看**

## 自定义动画

`openAnimation` / `closeAnimation` 传入函数后完全接管默认动画，函数签名为 `(mask: UniElement | null, content: UniElement | null, duration: number) => void`：`mask` 为遮罩节点，`content` 为模态框节点，`duration` 为本次动画时长（ms）。

```vue
<template>
	<sn-modal ref="modalEle" title="弹跳进入" :open-animation="bounceOpenAnim"></sn-modal>
</template>

<script lang="uts" setup>
	const bounceOpenAnim = (mask: UniElement | null, content: UniElement | null, duration: number): void => {
		if (mask != null) {
			mask.animate(
				[{ opacity: '0' } as UniAnimationKeyframe, { opacity: '1' } as UniAnimationKeyframe],
				{ duration: duration, easing: 'ease-out', fill: 'forwards' }
			)
		}
		if (content != null) {
			content.animate(
				[
					{ transform: 'scale(0.6)' } as UniAnimationKeyframe,
					{ transform: 'scale(1.08)' } as UniAnimationKeyframe,
					{ transform: 'scale(1)' } as UniAnimationKeyframe
				],
				{ duration: duration, easing: 'ease-out', fill: 'forwards' }
			)
		}
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 模态框标题 | String | `''` | - |
| titleAlign | 标题对齐方式 | String | `center` | `left` \| `center` \| `right` |
| titleSize | 标题字体大小，空值时为 `$17` | String \| Number | `''` | - |
| titleFont | 标题字体 | String | `''` | - |
| titleColor | 标题颜色，支持 `$` 简写主题色，空值时使用主题标题色 | String | `''` | - |
| bgColor | 模态框背景颜色，支持 `$` 简写主题色，空值时使用主题前景色 `$front` | String | `''` | - |
| borderRadius | 模态框圆角大小，空值时为 `$12` | String \| Number | `''` | - |
| content | 模态框内容 | String | `''` | - |
| contentAlign | 内容对齐方式 | String | `center` | `left` \| `center` \| `right` |
| contentSize | 内容字体大小，空值时为 `$15` | String \| Number | `''` | - |
| contentColor | 内容颜色，支持 `$` 简写主题色，空值时使用主题正文色 | String | `''` | - |
| contentFont | 内容字体 | String | `''` | - |
| buttonType | 按钮类型，`embed` 为底部嵌入式文字按钮，`float` 为浮动式 sn-button 并排展示 | String | `embed` | `embed` \| `float` |
| buttonBorder | 嵌入式按钮分隔边框样式，颜色支持 `$` 简写主题色，空值时为 `0.5px solid $line` | String | `''` | - |
| confirmText | 确定按钮文本 | String | `确定` | - |
| confirmTextColor | 确定按钮文本颜色，支持 `$` 简写主题色，空值时使用主题 `$primaryDark` 色 | String | `''` | - |
| confirmTextSize | 确定按钮文本大小，空值时为 `$16` | String \| Number | `''` | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` | `true` \| `false` |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | `true` \| `false` |
| cancelText | 取消按钮文本 | String | `取消` | - |
| cancelTextColor | 取消按钮文本颜色，支持 `$` 简写主题色，空值时使用主题正文色 | String | `''` | - |
| cancelTextSize | 取消按钮文本大小，空值时为 `$16` | String \| Number | `''` | - |
| position | 弹出位置，弹出动画随位置变化 | String | `center` | `center` \| `top` \| `bottom` \| `left` \| `right` |
| aniTime | 动画时长（ms），支持 `$` 前缀按动画乘数缩放，空值时使用框架长动画时长 | String \| Number | `''` | `$long` \| `$normal` \| `$short` \| 数值 |
| maskClose | 点击遮罩是否关闭模态框 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用操作按钮，禁用后点击无效且颜色变为禁用色 | Boolean | `false` | `true` \| `false` |
| preventBack | 是否阻止返回键关闭模态框 | Boolean | `false` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.4` | - |
| openAnimation | 自定义打开动画函数，传入后接管默认打开动画 | Function \| null | `null` | - |
| closeAnimation | 自定义关闭动画函数，传入后接管默认关闭动画 | Function \| null | `null` | - |
| customStyle | 自定义模态框主体样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| open | () => Void | 打开时触发 |
| close | () => Void | 关闭时触发 |
| clickMask | () => Void | 点击遮罩时触发 |
| confirm | () => Void | 点击确定按钮时触发，触发后自动关闭模态框 |
| cancel | () => Void | 点击取消按钮时触发，触发后自动关闭模态框 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开模态框 |
| close | - | - | 关闭模态框（不触发 confirm / cancel 事件） |
| confirm | - | - | 相当于点击确定按钮：触发 confirm 事件并关闭模态框（禁用状态下无效） |
| cancel | - | - | 相当于点击取消按钮：触发 cancel 事件并关闭模态框（禁用状态下无效） |

## 插槽

| 名称 | 说明 |
| --- | --- |
| header | 替换标题区域 |
| content | 替换内容区域 |
| actions | 替换操作按钮区域 |

<DemoPhone name="sn-modal" />
