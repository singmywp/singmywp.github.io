# PostCard  动态卡片

## 基础用法

- 用于展示社交动态/帖子卡片，包含头部（头像、昵称、时间、扩展操作区）、正文、底部操作栏与评论区。
- 头部由 `avatarConfig`、`nickname`、`datetime` 等数据驱动，也可通过插槽整体替换。
- 操作栏与评论区支持数组数据渲染，操作项支持激活态与禁用态。
- 头像、昵称、头部、正文、操作按钮、评论用户名、评论文本均有独立点击事件。

```vue
<template>
	<sn-post-card :avatar-config="avatarConfig" nickname="林间有风" :datetime="datetime"
		:actions="actions" @action-click="onActionClick">
		<sn-text text="周末去郊外徒步，山顶的风景太治愈了。"></sn-text>
		<template #header-action>
			<sn-icon name="more-line" :size="18" color="$textLight"></sn-icon>
		</template>
	</sn-post-card>
</template>
<script lang="uts" setup>
import type { SnAvatarConfig, SnPostCardAction } from '@/uni_modules/sinle-ui/core/types/index.uts'

const datetime: number = Date.now()
const avatarConfig: SnAvatarConfig = {
	mode: 'text',
	text: '林',
	size: '40px',
	shape: 'circle',
	bgColor: '$primary',
	textColor: '#FFFFFF'
}
const actions: SnPostCardAction[] = [
	{ id: 'like', icon: 'heart-3-line', text: '86', activeIconColor: '$error', activeTextColor: '$error' },
	{ id: 'comment', icon: 'chat-1-line', text: '32' }
]

function onActionClick(action: SnPostCardAction, index: number): void {
	if (action.id == 'like') {
		action.isActive = !(action.isActive ?? false)
		action.icon = action.isActive ? 'heart-3-fill' : 'heart-3-line'
	}
}
</script>
```

**更多演示请下载 demo 查看**

## 评论区

通过 `comments` 数组渲染评论列表，评论项的 `replyTo` 生成「xxx 回复 xxx」结构；`show-more` 显示展开评论按钮。

```vue
<template>
	<sn-post-card :avatar-config="avatarConfig" nickname="林间有风" :datetime="datetime"
		:comments="comments" :show-more="true"
		@comment-user-click="onCommentUserClick" @comment-click="onCommentClick" @more-click="onMoreClick">
		<sn-text text="看到一个填词挑战，也试着填一下。"></sn-text>
	</sn-post-card>
</template>
<script lang="uts" setup>
import type { SnAvatarConfig, SnPostCardComment } from '@/uni_modules/sinle-ui/core/types/index.uts'

const comments: SnPostCardComment[] = [
	{ id: 'c1', user: '聆江', content: '写得很安静，喜欢。' },
	{ id: 'c2', user: '猫屋', content: '喵喵喵？', replyTo: '聆江' }
]
</script>
```

## 插槽自定义

头部（`header`）、头像（`avatar`）、昵称/时间区（`info`）、头部扩展操作区（`header-action`）、底部操作栏（`action`）、评论区（`comment`）均可整体替换。

```vue
<template>
	<sn-post-card>
		<template #avatar>
			<sn-avatar text="A" :size="40" shape="circle" bg-color="$warning" text-color="#FFFFFF"></sn-avatar>
		</template>
		<template #info>
			<sn-text bold font-size="$14" color="$title" text="Aiden"></sn-text>
		</template>
		<template #action>
			<sn-button level="second" text="评论"></sn-button>
			<sn-button level="second" text="转发"></sn-button>
		</template>
		<sn-text text="城市的傍晚自带滤镜，随手一拍就是壁纸。"></sn-text>
	</sn-post-card>
</template>
```

## 属性

**基础**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| avatarConfig | 头像配置，字段见文末 [[SnAvatarConfig]]（src/text/icon 均为空时不显示头像） | [[SnAvatarConfig]] | `{}` | - |
| nickname | 昵称 | String | `''` | - |
| datetime | 时间戳（毫秒），大于 0 时显示 | Number | `0` | - |
| dateFormat | 时间格式化模板 | String | `YYYY-MM-DD HH:mm:ss` | - |

:::type-fields SnAvatarConfig

内置 `sn-avatar` 的组件（如列表项、发布卡）可通过 `avatarConfig` 属性统一配置头像参数。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| mode | [[SnAvatarMode]] | 否 | 显示模式，默认 `image` |
| src | String | 否 | 图片路径（`mode` 为 `image` 时生效） |
| text | String | 否 | 文本内容（`mode` 为 `text` 时生效） |
| icon | String | 否 | 图标名（`mode` 为 `icon` 时生效） |
| size | String \| Number | 否 | 尺寸大小 |
| shape | [[SnAvatarShape]] | 否 | 形状 |
| bgColor | String | 否 | 背景颜色 |
| textColor | String | 否 | 文本颜色 |
| iconColor | String | 否 | 图标颜色 |
| borderRadius | String \| Number | 否 | 圆角大小 |
| enablePreview | Boolean | 否 | 是否启用图片预览（`mode` 为 `image` 时生效） |

:::type-fields SnAvatarMode

头像显示模式：图片 / 文本 / 图标。

| 可选值 | 备注 |
| :--- | :--- |
| `image` | 图片 |
| `text` | 文本 |
| `icon` | 图标 |

:::
:::type-fields SnAvatarShape

头像形状：方形 / 圆形。

| 可选值 | 备注 |
| :--- | :--- |
| `square` | 方形 |
| `circle` | 圆形 |

:::

:::

**颜色与字号**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| bgColor | 卡片背景颜色 | String | `$front` | - |
| nicknameColor | 昵称颜色 | String | `$title` | - |
| nicknameSize | 昵称字体大小，支持 `$` 简写 | String \| Number | `$14` | - |
| datetimeColor | 时间文本颜色 | String | `$textLight` | - |
| datetimeSize | 时间字体大小，支持 `$` 简写 | String \| Number | `$11` | - |
| actionColor | 操作按钮默认颜色（图标与文本未单独指定时生效） | String | `$textLight` | - |
| actionSize | 操作文本字体大小，支持 `$` 简写 | String \| Number | `$12` | - |
| actionIconSize | 操作图标大小，支持 `$` 简写 | String \| Number | `$18` | - |
| commentUserColor | 评论用户名颜色 | String | `$primary` | - |
| commentColor | 评论文本颜色 | String | `$text` | - |
| commentSize | 评论字体大小，支持 `$` 简写 | String \| Number | `$14` | - |

**数据**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| actions | 底部操作项列表，字段见文末 [[SnPostCardAction]] | [[SnPostCardAction]][] | `[]` | - |
| comments | 评论列表，字段见文末 [[SnPostCardComment]] | [[SnPostCardComment]][] | `[]` | - |
| showMore | 是否显示展开评论按钮（评论区无内容且 showMore 为 true 时也会渲染） | Boolean | `false` | `true` \| `false` |
| moreText | 展开评论按钮文本 | String | `查看更多评论` | - |

:::type-fields SnPostCardAction

操作栏按钮配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 按钮 id |
| icon | String | 否 | 图标名 |
| text | String | 否 | 按钮文字（一般为数量） |
| disabled | Boolean | 否 | 是否禁用 |
| isActive | Boolean | 否 | 是否处于激活态（如已点赞） |
| iconColor | String | 否 | 图标颜色 |
| textColor | String | 否 | 文字颜色 |
| activeIconColor | String | 否 | 激活态图标颜色 |
| activeTextColor | String | 否 | 激活态文字颜色 |

:::
:::type-fields SnPostCardComment

评论区条目。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 否 | 评论 id |
| user | String | 否 | 评论用户 |
| content | String | 否 | 评论内容 |
| replyTo | String | 否 | 回复的用户名（为空表示直接评论） |

---

:::

**样式扩展**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| customStyle | 根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部样式类（external-class：custom-class） | String | `''` | - |
| headerStyle | 头部区域样式 | UTSJSONObject \| String | `''` | - |
| headerClass | 外部样式类 | String | `''` | - |
| infoStyle | 昵称与时间容器样式 | UTSJSONObject \| String | `''` | - |
| infoClass | 外部样式类 | String | `''` | - |
| nicknameStyle | 昵称样式 | UTSJSONObject \| String | `''` | - |
| nicknameClass | 外部样式类 | String | `''` | - |
| datetimeStyle | 时间样式 | UTSJSONObject \| String | `''` | - |
| datetimeClass | 外部样式类 | String | `''` | - |
| contentStyle | 正文区域样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 外部样式类 | String | `''` | - |
| actionStyle | 底部操作栏样式 | UTSJSONObject \| String | `''` | - |
| actionClass | 外部样式类 | String | `''` | - |
| actionBtnStyle | 操作按钮样式 | UTSJSONObject \| String | `''` | - |
| actionBtnClass | 外部样式类 | String | `''` | - |
| commentsStyle | 评论区容器样式 | UTSJSONObject \| String | `''` | - |
| commentsClass | 外部样式类 | String | `''` | - |
| commentStyle | 单条评论样式 | UTSJSONObject \| String | `''` | - |
| commentClass | 外部样式类 | String | `''` | - |
| moreStyle | 展开评论按钮样式 | UTSJSONObject \| String | `''` | - |
| moreClass | 外部样式类 | String | `''` | - |

头部区域在 `nickname`、`datetime`（大于 0）、`avatarConfig` 含 src/text/icon、或 `header`/`avatar`/`info`/`header-action` 插槽任一存在时渲染；正文、操作栏、评论区分别在其数据或插槽存在时渲染。

## 事件

| 名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| avatar-click | (event: UniPointerEvent) => Void | 点击头像时触发 |
| nickname-click | (event: UniPointerEvent) => Void | 点击昵称时触发 |
| header-click | (event: UniPointerEvent) => Void | 点击头部区域时触发 |
| content-click | (event: UniPointerEvent) => Void | 点击正文区域时触发 |
| action-click | (action: [[SnPostCardAction]], index: number) => Void | 点击底部操作按钮时触发（禁用项不触发） |
| comment-click | (comment: [[SnPostCardComment]], index: number) => Void | 点击评论文本时触发 |
| comment-user-click | (comment: [[SnPostCardComment]], name: string) => Void | 点击评论中的用户名或被回复用户名时触发 |
| more-click | () => Void | 点击展开评论按钮时触发 |

## 插槽

| 名称 | 说明 |
| :--- | :--- |
| default | 正文内容 |
| header | 整体替换头部区域（含头像、昵称、时间与扩展操作区） |
| avatar | 自定义头像（替换 avatarConfig 渲染的头像） |
| info | 自定义昵称与时间区域 |
| header-action | 头部右侧扩展操作区（如「更多」按钮） |
| action | 整体替换底部操作栏 |
| comment | 整体替换评论列表（`show-more` 对应的展开按钮仍按需渲染在评论区底部） |

## 类型

:::type-fields SnPostCardAction

操作项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 操作项标识，可用于点击回调中区分操作 |
| icon | String | 否 | 操作图标名称，不传则只显示文本 |
| text | String | 否 | 操作文本（如点赞数），不传则只显示图标 |
| disabled | Boolean | 否 | 是否禁用（降低透明度且不可点击） |
| isActive | Boolean | 否 | 是否激活，激活时图标与文本使用 active 系列颜色 |
| iconColor | String | 否 | 图标颜色 |
| textColor | String | 否 | 文本颜色 |
| activeIconColor | String | 否 | 激活状态图标颜色 |
| activeTextColor | String | 否 | 激活状态文本颜色 |

---

:::

:::type-fields SnPostCardComment

评论项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 评论标识 |
| user | String | 是 | 评论用户名，点击可触发 `comment-user-click` 事件 |
| content | String | 是 | 评论内容 |
| replyTo | String | 否 | 被回复用户名，传入后渲染「xxx 回复 xxx」结构，被回复用户名同样可点击 |

---

:::

:::type-fields SnAvatarMode

头像显示模式：图片 / 文本 / 图标。

| 可选值 | 备注 |
| :--- | :--- |
| `image` | 图片 |
| `text` | 文本 |
| `icon` | 图标 |

:::
:::type-fields SnAvatarShape

头像形状：方形 / 圆形。

| 可选值 | 备注 |
| :--- | :--- |
| `square` | 方形 |
| `circle` | 圆形 |

:::

<DemoPhone name="sn-post-card" />
