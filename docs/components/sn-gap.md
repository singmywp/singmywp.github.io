# Gap 占位间隔

## 基本使用

- 顾名思义，就是单纯用来占位的

```vue
<template>
	<sn-gap></sn-gap>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数        | 说明                                                 | 类型          | 默认值   | 可选值                                            |
| ----------- | ---------------------------------------------------- | ------------- | -------- | ------------------------------------------------- |
| mode        | 占位间隔模式。可选自定义高度、状态栏高度、安全区高度 | String        | `custom` | `custom` \| `statusbar` \| `safearea` |
| height      | 占位间隔高度（仅 `mode` 为 `custom` 时生效）。       | String        | -        | -                                                 |
| bgColor     | 占位间隔背景颜色                                     | String        | -        | -                                                 |
| customStyle | 自定义占位间隔样式                                   | UTSJSONObject | `{}`     | -                                                 |



<DemoPhone name="sn-gap" />