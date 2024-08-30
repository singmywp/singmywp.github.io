# Tooltip 提示框
## 基础用法
- 也许当你想要动态介绍某个按钮的用途时会用到它
- 可自定义宽度、高度、背景颜色等。
```vue
<sn-tooltip text="这是一个提示信息"></sn-tooltip>
```
**更多演示请下载demo查看**
## 属性
| 参数               | 说明                 | 类型   | 默认值      | 可选值                                                       |
| ------------------ | -------------------- | ------ | ----------- | ------------------------------------------------------------ |
| width              | 提示框宽度           | String | -           | -                                                            |
| height             | 提示框高度           | String | -           | -                                                            |
| borderRadius       | 提示框圆角大小       | String | `12px`      | -                                                            |
| position           | 提示框位置           | String | `top-start` | `top-start` \| `top` \| `top-end` \| `bottom-start` \| `bottom` \| `bottom-end` \| `left-start` \| `left` \| `left-end` \| `right-start` \| `right` \| `right-end` |
| padding            | 提示框内边距         | String | `10px 10px` | -                                                            |
| bgColor            | 提示框背景颜色       | String | -           | -                                                            |
| boxShadow          | 提示框阴影           | String | -           | -                                                            |
| customStyle        | 自定义提示框容器样式 | Object | `{}`        | -                                                            |
| customTooltipStyle | 自定义提示框样式     | Object | `{}`        | -                                                            |
| customTriggerStyle | 自定义触发器样式     | Object | `{}`        | -                                                            |
## 插槽

| 名称    | 说明                                                  |
| :------ | :---------------------------------------------------- |
| trigger | 放置触发组件（例如一个 Button），点击组件自动弹出提示 |
| default | 在弹出提示内部放置组件                                |

<DemoPhone name="sn-tooltip" />