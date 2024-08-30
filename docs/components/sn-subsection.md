# Subsection 分段器
## 基础用法
- 该分段器一般用于用户从几个选项中选择某一个的场景
- 支持自定义分段样式、颜色等。
```vue
<template>
<sn-subsection  v-model="value" :data="listData"></sn-subsection>
</template>
```
**更多演示请下载 demo 查看**
## 属性
| 参数                 | 说明                                   | 类型            | 默认值                                                  | 可选值            |
| -------------------- | -------------------------------------- | --------------- | ------------------------------------------------------- | ----------------- |
| vModel              | 当前选中的分段索引                     | Number          | `0`                                                     | -                 |
| data                 | 分段数据，数组中的每个元素代表一个分段 | Array\<String\> | `[]`                                                    | -                 |
| disabled             | 是否禁用分段选择器                     | Boolean         | `false`                                                 | `true` \| `false` |
| padding              | 分段之间的间距                         | String          | `3px`                                                   | -                 |
| blockPadding         | 分段块的内部padding                    | String          | `10px`                                                  | -                 |
| borderRadius         | 分段边框的圆角                         | String          | `$normal`                                               | -                 |
| textSize             | 分段文本大小                           | String          | `$2`                                                    | -                 |
| bgColor              | 分段背景颜色                           | String          | `$info`（亮色模式）<br>`$front`（暗黑模式）             | -                 |
| disabledBgColor      | 禁用状态分段背景颜色                   | String          | `$disabled`（亮色模式）<br/>`$disabledDark`（暗黑模式） | -                 |
| blockBgColor         | 分段块背景颜色                         | String          | `$front`（亮色模式）<br/>`$info`（暗黑模式）            | -                 |
| disabledBlockBgColor | 禁用状态分段块背景颜色                 | String          | `$disabledDark`（亮色模式）<br/>`$disabled`（暗黑模式） | -                 |
| textColor            | 分段文本颜色                           | String          | `$text`                                                 | -                 |
| activeTextColor      | 激活状态分段文本颜色                   | String          | `$primaryDark`                                          | -                 |
| disabledTextColor    | 禁用状态分段文本颜色                   | String          | `$disabledText`                                         | -                 |
| customStyle          | 自定义分段选择器样式                   | UTSJSONObject   | `{}`                                                    | -                 |
| customItemStyle      | 自定义分段样式                         | UTSJSONObject   | `{}`                                                    | -                 |
| customBlockStyle     | 自定义分段块样式                       | UTSJSONObject   | `{}`                                                    | -                 |
## 事件

| 名称   | 类型                      | 说明           |
| :----- | :------------------------ | :------------- |
| change | `(value: number) => void` | 数据变化时触发 |



<DemoPhone name="sn-subsection" />