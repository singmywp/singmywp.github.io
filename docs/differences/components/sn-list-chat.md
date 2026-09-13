# sn-list-chat

> 旧版组件：sn-list-chat.md

**旧版状态**：v1 提供聊天列表项 `sn-list-chat`，在 `sn-list-item` 基础上针对会话场景调整排版（头像 + 标题 + 摘要 + 时间/未读数），支持 `avatarConfig`、`showAvatar`、`title`、`note` 等属性与 `header` 插槽，需配合 `sn-list` 父容器使用。

**删除结论**：v2 **已移除** `sn-list-chat` 组件，能力由 `sn-cell` 组合插槽承接。

**删除原因**：

- 与 `sn-list-item` 属于同一抽象的排版变体，差异仅在摘要行、时间戳、未读标记等少量元素，单独成组件造成 API 重复。
- 聊天会话项的内容结构差异较大（时间戳位置、未读角标、置顶标记等），固定属性难以覆盖，实际项目中普遍需要插槽自定义，属性封装价值低。
- 统一收敛到 `sn-cell` 后，框架内部列表布局与用户侧列表布局使用同一套组件与样式传递链（`itemStyle` / `itemTextStyle` / `itemIconStyle` 等），行为一致。

**替代方案**：

- 使用 `sn-cell` + 插槽组合实现会话项：

```vue
<template>
	<sn-cell :border="true" @click="openChat(item)">
		<template #icon>
			<sn-avatar :src="item.avatar" size="$40px" />
		</template>
		<template #title>
			<sn-text :text="item.name" font-size="$14" />
		</template>
		<template #label>
			<sn-text :text="item.lastMessage" font-size="$12" color="$textLight" :lines="1" />
		</template>
		<template #value>
			<sn-text :text="item.time" font-size="$12" color="$textLight" />
		</template>
	</sn-cell>
</template>
```

- 未读数角标使用 `sn-badge` 放在 `value` 插槽内：

```vue
<template #value>
	<view class="chat-value">
		<sn-text :text="item.time" font-size="$12" color="$textLight" />
		<sn-badge :value="item.unread" v-if="item.unread > 0" />
	</view>
</template>
```

- 长会话列表请使用 `sn-list-view`（数据驱动 + 作用域插槽），并可通过 `initialScrollBottom` 让初始渲染定位到底部（聊天场景）。
