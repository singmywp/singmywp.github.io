# Badge  徽标

## 基本使用

- 用以展示未读消息及消息提示。

```vue
<template>
	<sn-badge :value="15">
    	<sn-avatar src="https://www.example.com/example.png"></sn-avatar>
	</sn-badge>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数               | 说明                                                         | 类型            | 默认值   | 可选值                      |
| ------------------ | ------------------------------------------------------------ | --------------- | -------- | --------------------------- |
| mode               | 徽标显示模式，可选 数字模式 Number 、文本模式 `text`、浮点模式 `dot` | String      | `number` | `number` \| `dot` \| `text` |
| value              | 数字模式下徽标的数字值                                       | Number        | `0`      | -                           |
| max                | 数字模式下徽标的最大数字值。超过此值会显示 `${max}+` 。值为 -1 时不限制最大值。 | Number        | `-1`     | -                           |
| text               | 文本模式下徽标的文本内容                                     | String        | -        | -                           |
| bgColor            | 徽标的背景颜色                                               | String        | `$error` | -                           |
| textColor          | 数字、文本模式下徽标的数字/文本颜色                          | String        | `#fff`   | -                           |
| size               | 数字、文本模式下徽标内数字/文本大小；浮点模式                | String        | `$1`     | -                           |
| showZero           | 数字模式下徽标的数字值为 `0` 时是否显示（默认不显示）        | Boolean       | `false`  | `true` \| `false`           |
| offset             | 徽标的偏移量（对徽标的位置不满意可以通过这个属性调整。格式同 css 属性 `transform` ） | String        | -        | -                           |
| customStyle        | 自定义徽标样式                                               | UTSJSONObject | `{}`     | -                           |
| customTextStyle    | 自定义数字、文本模式下徽标内部文本样式                       | UTSJSONObject | `{}`     | -                           |
| customDotStyle     | 自定义浮点模式下徽标样式                                     | UTSJSONObject | `{}`     | -                           |
| customContainStyle | 自定义徽标外部容器样式                                       | UTSJSONObject | `{}`     | -                           |

## 插槽

| 名称    | 说明                       |
| ------- | -------------------------- |
| default | 必选。需要显示徽标的组件。 |

<DemoPhone name="sn-badge" />