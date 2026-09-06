# Fullscreen  原位展开全屏

> [查看 sn-fullscreen 的 2.0 版本差异](/differences/components/sn-fullscreen)

## 基础用法
- 让一块内容“原位”拉伸占满整个视口（如卡片、模拟播放器），收起时动画回到原位置
- 展开期间原位置由等高占位节点撑住，页面布局不塌陷；内容随之重新布局填满全屏
- 默认点击内容即可展开；全屏时是否点击关闭由 `click-close` 控制，也可通过 ref 调用 `open`/`close`/`toggle` 方法

```vue
<template>
	<sn-fullscreen layer-style="width:100px;height:40px;" :click-close="true">
		<text>点我全屏</text>
	</sn-fullscreen>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 关闭按钮模式

设置 `trigger-click="false"` 关闭点击自动展开，改由按钮或内容内关闭图标控制，适合播放器等场景。

```vue
<template>
	<sn-fullscreen ref="fsRef" :trigger-click="false">
		<view>
			<view @click="closeFs">
				<sn-icon name="close-line" :size="18" color="#fff" />
			</view>
		</view>
	</sn-fullscreen>
</template>
<script lang="uts" setup>
	const fsRef = ref<SnFullscreenComponentPublicInstance | null>(null)
	function openFs() {
		fsRef.value?.$callMethod('open')
	}
	function closeFs() {
		fsRef.value?.$callMethod('close')
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| triggerClick | 非全屏状态下点击内容层时自动展开全屏 | Boolean | `true` | `true` \| `false` |
| clickClose | 全屏状态下点击内容层时收起回到原位 | Boolean | `false` | `true` \| `false` |
| aniTime | 展开与收起的动画时长，`0` 为瞬时切换，支持 `$short`/`$normal`/`$long`（也接受不带 `$` 的同名写法），数字单位为 ms | String \| Number | `$long` | - |
| zIndex | 全屏时内容层的层级 | Number | `999` | - |
| disabled | 是否禁用（禁用后点击与方法均不生效） | Boolean | `false` | `true` \| `false` |
| layerClass | 内容层外部样式类 | String | `''` | - |
| layerStyle | 自定义内容层样式（通常用它设置内容的初始宽高） | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| open | () => Void | 开始展开全屏时触发 |
| close | () => Void | 开始收起（关闭全屏）时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 展开全屏；正在动画或已全屏、或内容层尺寸无效时不执行 |
| close | - | - | 收起并动画回到原位置；非全屏或正在动画时不执行 |
| toggle | - | - | 在全屏与原位之间切换 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 内容层内容，全屏时随容器拉伸重新布局 |

<DemoPhone name="sn-fullscreen" />
