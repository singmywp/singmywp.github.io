# KeyboardTop 键盘上方区域

## 基础用法

- 把一个区域固定到软键盘上方：没有弹出键盘时按默认方式定位，与普通 `view` 完全一致，正常参与文档流布局。
- 弹出键盘时区域整体上移到键盘正上方：Web 端切换为 `fixed` 绝对定位，App 端保持文档流定位并通过 `bottom` 上移。
- App 端不采用 `fixed`：App 端元素设置 `position: fixed` 时会被调整到页面根节点参与层级比较，运行时切换 `fixed` 会重新挂载节点，导致其内部已聚焦的输入框失焦、软键盘立刻收起。
- 组件适用于停靠在页面底部的区域（如聊天输入栏）：请将它放在滚动容器之外、页面底部，键盘弹出时才会正好落在键盘上方。
- 高度、宽度、背景色、圆角、内边距等外观全部通过 `customStyle` / `customClass` 自由设置，组件内部不干预任何外观。
- 键盘高度：Android 端使用 `uni.onKeyboardHeightChange` / `uni.offKeyboardHeightChange` 全局监听，Web 端使用 `visualViewport` 计算，当前仅适配 Android 与 Web 平台。
- 与输入框配合使用时，请把输入框的 `adjust-position` 设为 `false` 关闭系统默认的页面上推，否则键盘弹出时页面被整体上推会导致位置偏移。

```vue
<template>
	<sn-page fill-content>
		<scroll-view class="chat-list"></scroll-view>
		<sn-keyboard-top>
			<view class="chat-bar">
				<sn-input :adjust-position="false" v-model="text" placeholder="说点什么"></sn-input>
				<sn-button text="发送" type="primary" @click="send"></sn-button>
			</view>
		</sn-keyboard-top>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 停靠位置

组件通过整体上移实现避让，上移量等于键盘高度，因此需要把区域停靠在页面底部：放在滚动容器之外，让它的底边与页面底边对齐，键盘弹出时它就会落在键盘正上方。

```vue
<template>
	<sn-page fill-content>
		<sn-scroll-view custom-style="flex:1;">
			<!-- 可滚动内容 -->
		</sn-scroll-view>
		<sn-keyboard-top>
			<!-- 停靠在页面底部的区域 -->
		</sn-keyboard-top>
	</sn-page>
</template>
```

## 自定义样式

组件不提供尺寸、颜色类属性：`customStyle` 与 `customClass` 直接作用于根节点，高度、宽度、背景色、圆角、阴影等均可任意设置。未弹出键盘时它就是普通 `view`，弹出键盘后整体上移键盘高度的距离。

```vue
<template>
	<sn-keyboard-top custom-style="height:64px;padding:0 16px;background-color:var(--sn-front);border-top-width:1px;border-top-style:solid;border-top-color:var(--sn-line);">
		<text>自定义外观的操作栏</text>
	</sn-keyboard-top>
</template>
```

## 键盘状态

`change` 事件在键盘高度变化时触发，`detail.height` 为键盘高度（px，未弹出为 `0`），`detail.visible` 表示键盘是否已弹出，可据此做滚动到底部等联动。

```vue
<template>
	<sn-keyboard-top @change="onKeyboardChange">
		<text>键盘高度：{{ keyboardHeight }}</text>
	</sn-keyboard-top>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| zIndex | 区域层级 | Number | `990` | - |
| aniTime | 过渡动画时长（支持 `$` 简写），为空时使用框架标准动画时长；键盘跟随时如出现迟滞可设为 `0` 关闭动画 | String \| Number | `''` | - |
| customStyle | 自定义根节点样式，高度、宽度、背景色、圆角等外观均在此设置 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| change | (detail: SnKeyboardTopChangeDetail) => Void | 键盘高度变化时触发，`detail.height` 为键盘高度（px，`0` 表示未弹出），`detail.visible` 为键盘是否已弹出 |

<DemoPhone name="sn-keyboard-top" />
