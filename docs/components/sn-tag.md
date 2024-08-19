# Tag  标签

## 基本使用

- 和 `sn-button` 的用法没什么区别，你可以把它看做一个简化版的 `sn-button` ，甚至可以把它放进 `sn-button-group`里………其实是作者太懒了，去除了小部分，保留了大部分button的代码。

```vue
<sn-tag text="标签"></sn-tag>
```

**更多演示请下载 demo 查看**

## API

### Tag Props

| 参数              | 说明                                                         | 类型          | 默认值     | 可选值                                     |
| ----------------- | ------------------------------------------------------------ | ------------- | ---------- | ------------------------------------------ |
| loading           | 是否加载状态                                                 | Boolean       | `false` | `true` \|``false``            |
| closable          | 是否可关闭                                                   | Boolean       | `false` | `true` \|``false``            |
| disabled          | 是否禁用                                                     | Boolean       | `false` | `true` \|``false``            |
| text              | 标签内文本内容                                               | String        | - | -                                          |
| align             | 标签内文本对齐方向                                           | String        | `center`  | -                   |
| type              | 标签主题样式类型（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `info`     | `info` \|`primary` \|`success` \|`error` \|`warning` |
| level        | 标签等级（下列自定义颜色默认为空，主题默认颜色与自定义颜色冲突时，以自定义颜色为主） | String        | `first`    | `first` \|`second` \|`third` \|`least` |
| textColor         | 标签文本颜色                                                 | String        | - | -                                          |
| disabledTextColor | 禁用状态下标签文本颜色                                       | String        | - | -                                          |
| bgColor           | 标签背景颜色                                                 | String        | - | -                                          |
| disabledBgColor   | 禁用状态下标签背景颜色                                       | String        | `$disabled` | -                                          |
| textSize          | 标签文本大小                                                 | String        | `$2`   | -                                          |
| iconColor         | 关闭图标和加载图标颜色                                       | String        | - | -                                          |
| disabledIconColor | 禁用状态下关闭图标和加载图标颜色                             | String        | - | -                                          |
| iconSize          | 关闭图标和加载图标大小                                       | String        | `$3`   | -                                          |
| customTextStyle   | 自定义标签内文本样式                                         | UTSJSONObject | {}         | -                                          |
| customStyle       | 自定义标签样式                                               | UTSJSONObject | {}         | -                                          |

### Tag Slots

| 名称    | 说明                                       |
| ------- | ------------------------------------------ |
| default | 替换标签内部原有的 `text` ，可以是任意组件 |

