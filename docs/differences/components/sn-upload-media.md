# sn-upload-media
> 旧版组件：sn-upload-media.md
**旧版状态**：v1 已内置基础版（sn-upload-media）与 uniCloud 版（sn-upload-media-unicloud），v2 功能与属性基本一致，主要差异在属性类型放宽与默认值调整。
**差异明细**：
- 类型变化：`customStyle` / `customItemStyle` 旧 UTSJSONObject → 新 UTSJSONObject | String
- 类型变化：`width` / `height` / `iconSize` 旧 String → 新 String | Number
- 默认值变化：`itemBgColor` 旧 `` `$line` `` → 新 ``（留空时回退 `$line`）；`itemBorderRadius` 旧 `` `$small` `` → 新 ``（留空按 `8 × radiusFactor` 计算）
- 行为变化：Web 端 `mode=all` 改用文件选择器（chooseMediaWeb）实现；选择失败、上传失败统一返回 `UniError`
- uniCloud 版：仍无 `url` / `timeout` / `formData` 属性，`directory` 默认 `uploadImages/` 不变
- 事件、方法、插槽：无变化（6 个事件、`upload` 方法、default 插槽均保留）
