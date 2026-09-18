# KeyboardTop 键盘上方区域

## 基础用法

- 把任意内容（评论输入框、回复框、工具栏等）固定到系统键盘上方：**键盘未打开时不显示**，键盘打开时以 `fixed` 定位吸附在键盘正上方，并随键盘高度变化实时跟随。
- 键盘高度经 `uni.onKeyboardHeightChange` 全局监听（同一页面只注册一次），`height` 为 0 即视为键盘收起；Web 端该 API 不支持，自动降级为 `visualViewport` 视口测量。
- 组件根节点为 `fixed` 定位且不占文档流，请像弹出层一样**直接放在页面根节点（`sn-page`）下**，否则取不到 `sn-page` 注入的 `--sn-*` CSS 变量。
- 宽度默认铺满屏幕，高度由插槽内容撑开；宽高、背景、圆角、内边距、阴影等全部可通过 `customStyle` / `customClass` 自由定制。

```vue
<template>
	<sn-page>
		<!-- 页面内容 -->
		<sn-scroll-view>
			<sn-input v-model="comment" placeholder="说点什么…" :adjust-position="false" />
		</sn-scroll-view>

		<!-- 键盘上方区域：直接放在 sn-page 根节点下 -->
		<sn-keyboard-top>
			<view class="comment-bar">
				<sn-input v-model="comment" placeholder="说点什么…" :adjust-position="false" />
				<sn-button type="primary" @click="send">发送</sn-button>
			</view>
		</sn-keyboard-top>
	</sn-page>
</template>

<style lang="scss">
	.comment-bar {
		flex-direction: row;
		align-items: center;
		padding: 8px 12px;
		background-color: var(--sn-front);
		border-top-width: 1px;
		border-top-style: solid;
		border-top-color: var(--sn-line);
	}
</style>
```

**更多演示请下载 demo 查看**

## 自定义样式

宽度默认铺满屏幕，可用 `width` 直接改（如 `width="94%"`）；间距、圆角、背景、内边距建议直接写在插槽内容上，或通过 `customStyle` / `customClass` 定制根节点。

`offset` 用于在键盘顶部再让出一点距离（例如避开键盘自带的完成栏、候选词栏），支持 `$` 简写。

```vue
<template>
	<sn-keyboard-top width="94%" :offset="10" :z-index="995">
		<view class="toolbar">
			<sn-input v-model="text" placeholder="工具栏输入框…" :adjust-position="false" />
			<sn-button type="primary" @click="done">完成</sn-button>
		</view>
	</sn-keyboard-top>
</template>

<style lang="scss">
	.toolbar {
		flex-direction: row;
		align-items: center;
		padding: 8px 12px;
		background-color: var(--sn-front);
		border-radius: 15px 15px 0 0;
	}
</style>
```

## 过渡动画

键盘弹出时，区域从屏幕下方上滑并淡入；**取消显示（键盘收起、失去显示权或 `show` 为 false）时立即使节点不可见并移出屏幕，不做收起动画**，避免收起过程与键盘动画叠加产生残影。

`aniTime` 控制淡入时长（支持 `$` 简写，随 `aniTimeFactor` 缩放），为空时使用框架标准时长；传 `0` 则显隐都无过渡。

隐藏态位移按**实测像素高度**计算（组件挂载后与隐藏时测量自身高度），不使用百分比终点——uni-app x 的 `transition` 不支持结束属性值为百分比，用百分比会让 App 端动画退化为瞬跳。

```vue
<template>
	<sn-keyboard-top ani-time="$400">…</sn-keyboard-top>
</template>
```

## 多实例覆盖

同一页面存在多个 `sn-keyboard-top` 时（例如一级评论栏 + 二级回复框），组件会自动仲裁出**唯一**显示实例：

- `priority` 数值大者显示；`priority` 相同时**后挂载者**显示（后打开的回复框自动覆盖评论栏，回复框卸载后自动回退到评论栏）；
- 设 `priority="-1"` 可让某个实例退出显示队列（例如只想预览、不参与覆盖）；
- 未被选中的实例立即隐藏（无过渡动画），不参与交互，也不会遮挡页面。

```vue
<template>
	<sn-page>
		<!-- 一级评论栏 -->
		<sn-keyboard-top>
			<view class="comment-bar">…</view>
		</sn-keyboard-top>

		<!-- 二级回复框：priority 更高，挂载后立即接管显示 -->
		<sn-keyboard-top v-if="replyVisible" :priority="10">
			<view class="reply-bar">…</view>
		</sn-keyboard-top>
	</sn-page>
</template>
```

## 插槽作用域

默认插槽会实时下发键盘高度，方便在区域内部自行展示或做随高度变化的布局。

```vue
<template>
	<sn-keyboard-top>
		<template #default="{ keyboardHeight, show }">
			<view class="bar">
				<sn-text font-size="$12">键盘高度：{{ keyboardHeight }}px</sn-text>
			</view>
		</template>
	</sn-keyboard-top>
</template>
```

## 使用注意

- **点击面板空白处不收起键盘（推荐）**：uni-app x App-Android 平台下，点击输入框以外的屏幕会自动收起软键盘（见 [input 文档](https://doc.dcloud.net.cn/uni-app-x/component/input.html)）。因此面板内的输入框应设置 `:hold-keyboard="true"` —— 此时面板整块区域的点击都不会收起键盘（输入框失焦但键盘保留），只有点击页面其他位置或按系统返回键才收起，与微信评论栏等主流交互一致。
- 区域内的 `sn-input` / `sn-textarea` 建议设置 `:adjust-position="false"`，由组件自身负责吸附，避免原生页面二次上推导致位置抖动。
- 插槽内使用 `textarea` 时建议设置 `fixed`（`sn-textarea` 的 `fixed` 属性）以获得更好的原生表现。
- Android / iOS / 微信小程序依赖 `uni.onKeyboardHeightChange`（HBuilderX 4.71+，鸿蒙 5.08+）；Web 端该 API 不支持，组件自动使用 `visualViewport` 降级测量，桌面浏览器无软键盘时区域不会显示。
- 组件为 `fixed` 定位不占文档流，页面最后一块内容可能被面板遮住；**预留空白必须放在滚动内容末尾**（如末尾加一个 `height:60px` 的占位 `view`），不要写成 `sn-page` 的 `custom-style="padding-bottom:..."`——`sn-page` 根节点包着 `scroll-view`，padding 落在滚动容器之外会形成一条永远存在的固定空白带。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| aniTime | 显隐过渡动画时长（支持 `$` 简写），为空时使用框架标准动画时长 | String \| Number | `''` | - |
| zIndex | 键盘上方区域的 `z-index` 层级 | Number | `990` | - |
| offset | 距离键盘顶部的额外偏移（支持 `$` 简写，用于避开键盘自带的完成栏等） | String \| Number | `0` | - |
| priority | 多实例显示优先级，数值大者显示，相同值后挂载者优先，`-1` 表示不参与显示 | Number | `0` | - |
| width | 键盘上方区域宽度（支持 `$` 简写），为空时铺满屏幕宽度 | String \| Number | `''` | - |
| show | 是否允许显示，设为 `false` 时即使键盘打开也不显示 | Boolean | `true` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点外部样式类 | String | `''` | - |
| externalStyle | 额外内联样式 | UTSJSONObject \| String | `''` | - |
| externalClass | 额外外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (visible: boolean) => Void | 键盘上方区域显示状态变化时触发（键盘弹出收起、被其他实例覆盖、`show` 变化时触发） |

## 插槽

| 名称 | 作用域参数 | 说明 |
| --- | --- | --- |
| default | `keyboardHeight: number`（当前键盘高度 px）、`show: boolean`（是否显示中） | 区域内容 |

<DemoPhone name="sn-keyboard-top" />
