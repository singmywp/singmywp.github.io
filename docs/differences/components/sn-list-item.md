# sn-list-item

**旧版状态**：v1 提供列表项 `sn-list-item`，支持 `title` / `note` 双行文本、`avatarConfig` 头像配置、`icon` / `iconSize` / `iconColor` 图标、`showAvatar` / `showIcon` 开关、`disabled` 禁用态、`ellipsis` 行数、`arrow` 右箭头，以及 `titleColor` / `noteColor` / `disabledTextColor` 等颜色属性与 `header` 插槽；需要配合 `sn-list` 父容器使用。

**删除结论**：v2 **已移除** `sn-list-item` 组件，能力由 `sn-cell` 承接。

**删除原因**：

- v1 的列表类子组件存在 `sn-list-item`（双行图文）、`sn-list-chat`（聊天样式）、`sn-menu-item`（菜单项）三套高度重叠的实现，属性命名各不相同（`titleSize` / `textSize` / `noteSize`），维护与学习成本高。
- 三者的差异仅在图标位置、行数、箭头等少量排版细节，属于同一抽象的变体，拆成三个组件属于冗余设计。
- v2 明确「内部列表项 / 子项布局统一复用 `sn-cell`」，并配套 `itemStyle` / `itemHoverStyle` / `itemTextStyle` / `itemIconStyle` / `itemClass` / `itemBorder` 的标准传递链，组件内部列表也全部改由 `sn-cell` 实现。

**替代方案**：

- 使用 `sn-cell` 替代 `sn-list-item`：

```vue
<template>
	<sn-cell title="主标题" label="描述文字" value="右侧内容" icon="user-line" :border="true" @click="onClick" />
</template>
```

- 属性对应关系：

| 旧版 `sn-list-item` | 替代方案 |
| ------------------- | -------- |
| `title` | `sn-cell` 的 `title` |
| `note` | `sn-cell` 的 `label` |
| `icon` / `iconSize` / `iconColor` | `sn-cell` 的 `icon` / `iconSize` / `iconColor` |
| `showIcon` | 不传 `icon` 即不显示 |
| `avatarConfig` / `showAvatar` | 用 `icon` 插槽自定义头像节点 |
| `arrow` | `sn-cell` 的 `showRightIcon` / `rightIcon` |
| `ellipsis` | `sn-cell` 的 `titleStyle` 中设置 `lines`（`sn-text` 能力） |
| `disabled` | `sn-cell` 的 `disabled` |
| `titleColor` / `noteColor` | `sn-cell` 的 `titleStyle` / `labelStyle` |
| `customTitleStyle` | `sn-cell` 的 `titleStyle`（已去除 `custom` 前缀） |

- 旧版依赖 `sn-list` 提供分割线与背景色，v2 直接由 `sn-cell` 的 `border` 与父容器样式控制。
- 需要更自由的排版时使用 `sn-cell` 的 `title` / `label` / `value` / `icon` / `right-icon` 插槽。
