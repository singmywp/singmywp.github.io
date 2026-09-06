# sn-post-card

> 旧版组件：无（v2 新增）

**旧版状态**：v2 新增的动态/帖子卡片组件，旧版无此组件。

**差异明细**：

- 新增属性：`avatarConfig`、`nickname`、`datetime`、`dateFormat`、`bgColor`、`nicknameColor`、`nicknameSize`、`datetimeColor`、`datetimeSize`、`actionColor`、`actionSize`、`actionIconSize`、`actions`、`comments`、`showMore`、`moreText`、`commentUserColor`、`commentColor`、`commentSize`，以及 `customStyle`/`customClass` 与 `header`/`info`/`nickname`/`datetime`/`content`/`action`/`actionBtn`/`comments`/`comment`/`more` 各区域的 `xxxStyle`/`xxxClass` 样式扩展属性
- 新增事件：`avatar-click`、`nickname-click`、`header-click`、`content-click`、`action-click`、`comment-click`、`comment-user-click`、`more-click`
- 新增插槽：`default`、`header`、`avatar`、`info`、`header-action`、`action`、`comment`
- 新增类型：`SnPostCardAction`（底部操作项）、`SnPostCardComment`（评论项），头像复用 `SnAvatarConfig`
- 移除属性、更名、类型或默认值变化、行为变化、新增方法：无
