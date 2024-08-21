# Icon  图标

## 基本使用

- 内置开源图标库 [Remix Icon](https://remixicon.com/)。

```vue
<sn-icon name="user-smile-fill"></sn-icon>
```

**更多演示请下载 demo 查看**

## 自定义图标库

如果你觉得内置的 [Remix Icon](https://remixicon.com/) 不满足你的需求，或者需要同时使用多个图标库，可以直接修改源码，参考组件目录下的`icons.uts` 自行编写图标数据，并在 `sn-icon.uvue` 中导入数据（只不过麻烦了亿点点:grin:主要还是因为 `uni-app x` CSS 不支持伪类，因此图标也很麻烦

## 属性

| 参数        | 说明                                             | 类型          | 默认值      | 可选值 |
| ----------- | ------------------------------------------------ | ------------- | ----------- | ------ |
| name        | 图标名称（不需要加前缀），支持多个图标，逗号隔开 | String        | -           | -      |
| font        | 图标字体名                                       | String        | `remixicon` | -      |
| color       | 图标颜色                                         | String        | -           | -      |
| size        | 图标大小                                         | String        | -           | -      |
| customStyle | 自定义图标样式                                   | UTSJSONObject | {}          | -      |

<DemoPhone name="sn-icon" />