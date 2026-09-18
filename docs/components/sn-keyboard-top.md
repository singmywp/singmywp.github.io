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

## 多个实例

**建议同一时间只显示一个实例**。组件**不做多实例仲裁**——同一页面若同时显示多个 `sn-keyboard-top`，它们会重叠吸附在键盘上方（可用 `zIndex` 与 `offset` 自行错开，但不推荐）。需要多个面板切换时，用 `show` 控制只保留一个：

```vue
<template>
	<sn-page>
		<sn-button @click="showPanel('comment')">评论栏</sn-button>
		<sn-button @click="showPanel('reply')">回复框</sn-button>

		<!-- 三个实例常驻，用 show 控制同一时间只显示一个 -->
		<sn-keyboard-top :show="panel == 'comment'">
			<view class="comment-bar">…</view>
		</sn-keyboard-top>

		<sn-keyboard-top :show="panel == 'reply'">
			<view class="reply-bar">…</view>
		</sn-keyboard-top>
	</sn-page>
</template>
```

## 插槽作用域

默认插槽会实时下发键盘高度与聚焦状态，方便在区域内部自行展示、布局与接管输入框焦点：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| keyboardHeight | Number | 当前键盘高度（px） |
| show | Boolean | 本实例当前是否显示中 |
| focus | Boolean | 是否应聚焦区域内输入框（由 `requestFocus` 驱动，区域显示时组件会自动请求一次） |
| requestFocus | () => Void | 主动请求聚焦区域内输入框（走 `false` → `nextTick` → `true`，保证原生能识别到 focus 变化） |

区域内输入框建议这样绑定，焦点由组件统一驱动，避免出现“输入框点不动、无占位文本”：

```vue
<template>
	<sn-keyboard-top ref="panelRef">
		<template v-slot:default="slotProps">
			<sn-input v-model="text" :focus="slotProps.focus" :hold-keyboard="true" placeholder="说点什么…" />
		</template>
	</sn-keyboard-top>
</template>
```

也可以调用组件实例方法主动聚焦：`panelRef.value?.$callMethod('requestFocus')`。

## 使用注意

### 推荐架构：页面内只读触发器 + 区域内的真实输入框

页面内的输入框设为 `readonly` 作为**触发器**（点击它不自己聚焦，而是让区域内的输入框获得焦点），两处用同一个 `v-model` 同步值。这样键盘始终属于区域内那一个输入框，能同时满足：

- 点击**区域内的空白处**不收起键盘（区域内输入框开启 `hold-keyboard`）；
- 点击**页面其他位置**正常收起键盘；
- 切到二级面板（如回复框）时焦点自然转移，不会出现区域内输入框“点不动、无占位文本”的情况。

```vue
<template>
	<sn-page>
		<!-- 页面内的只读触发器 -->
		<view class="trigger" @click="openPanel">
			<sn-input v-model="text" :readonly="true" :adjust-position="false" placeholder="说点什么…" />
		</view>

		<sn-keyboard-top ref="panelRef">
			<template v-slot:default="slotProps">
				<sn-input v-model="text" :focus="slotProps.focus" :hold-keyboard="true" placeholder="说点什么…" />
			</template>
		</sn-keyboard-top>
	</sn-page>
</template>

<script setup lang="uts">
	import type { ComponentPublicInstance } from 'vue'

	const text = ref<string>('')
	const panelRef = ref<ComponentPublicInstance | null>(null)

	function openPanel(): void {
		panelRef.value?.$callMethod('requestFocus')
	}
</script>
```

注意触发器的 `adjust-position` 要设为 `false`：触发器本身不承载输入，若保持默认 `true`，键盘弹出时原生会滚动页面上推该输入框，出现“打开键盘页面滚动、收起又滚回”的现象。

### 其它注意

- 区域内的输入框建议设置 `:hold-keyboard="true"`：uni-app x App-Android 平台下点击输入框以外的屏幕会自动收起软键盘；开启后点击区域内空白处键盘保留（**注意**：未采用上面的只读触发器方案时，`hold-keyboard` 也会让点击页面其他位置同样无法收起键盘，此时需自行调用 `uni.hideKeyboard()`）。
- 区域内的 `sn-input` / `sn-textarea` 建议设置 `:adjust-position="false"`，由组件自身负责吸附，避免原生页面二次上推导致位置抖动。
- 插槽内使用 `textarea` 时建议设置 `fixed`（`sn-textarea` 的 `fixed` 属性）以获得更好的原生表现。
- 需要“紧贴键盘”时 `offset` 保持默认 `0`；键盘自带完成栏/候选栏时可用 `offset` 让位。
- Android / iOS / 微信小程序依赖 `uni.onKeyboardHeightChange`（HBuilderX 4.71+，鸿蒙 5.08+）；Web 端该 API 不支持，组件自动使用 `visualViewport` 降级测量，桌面浏览器无软键盘时区域不会显示。
- 组件为 `fixed` 定位不占文档流，页面最后一块内容可能被面板遮住；**预留空白必须放在滚动内容末尾**（如末尾加一个 `height:60px` 的占位 `view`），不要写成 `sn-page` 的 `custom-style="padding-bottom:..."`——`sn-page` 根节点包着 `scroll-view`，padding 落在滚动容器之外会形成一条永远存在的固定空白带。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| aniTime | 显隐过渡动画时长（支持 `$` 简写），为空时使用框架标准动画时长 | String \| Number | `''` | - |
| zIndex | 键盘上方区域的 `z-index` 层级 | Number | `990` | - |
| offset | 距离键盘顶部的额外偏移（支持 `$` 简写，用于避开键盘自带的完成栏等） | String \| Number | `0` | - |
| width | 键盘上方区域宽度（支持 `$` 简写），为空时铺满屏幕宽度 | String \| Number | `''` | - |
| show | 是否允许显示，设为 `false` 时即使键盘打开也不显示 | Boolean | `true` | `true` \| `false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点外部样式类 | String | `''` | - |
| externalStyle | 额外内联样式 | UTSJSONObject \| String | `''` | - |
| externalClass | 额外外部样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (visible: boolean) => Void | 键盘上方区域显示状态变化时触发（键盘弹出收起、`show` 变化时触发） |

## 插槽

| 名称 | 作用域参数 | 说明 |
| --- | --- | --- |
| default | `keyboardHeight`（键盘高度 px）、`show`（是否显示中）、`focus`（是否应聚焦输入框）、`requestFocus`（主动请求聚焦） | 区域内容 |

<DemoPhone name="sn-keyboard-top" />
