# Timer 计时器
## 基础用法
- 顾名思义，就是一个计时器。
- 推荐使用插槽布局为主，样式更好调。
- 可设置自动计时和毫秒级精度，支持 API 控制计时。
```vue
<template>
	<sn-timer></sn-timer>
</template>
```
**更多演示请下载demo查看**

## 属性
| 参数        | 说明                                                         | 类型          | 默认值     | 可选值            |
| ----------- | ------------------------------------------------------------ | ------------- | ---------- | ----------------- |
| format      | 时间格式（参考 [`Day.js`](https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%A0%BC%E5%BC%8F)） | String        | `HH:mm:ss` | -                 |
| autoplay    | 自动开始计时                                                 | Boolean       | `true`     | `true` \| `false` |
| millisecond | 毫秒级精度（如果要显示毫秒请务必开启）                       | Boolean       | `false`    | `true` \| `false` |
| textSize    | 倒计时文本字体大小                                           | String        | `$2`       | -                 |
| textColor   | 倒计时文本颜色                                               | String        | `$text`    | -                 |
| customStyle | 自定义倒计时样式                                             | UTSJSONObject | `{}`       | -                 |


## 插槽
| 名称    | 说明                                     |
| ------- | ---------------------------------------- |
| default | 替换倒计时内部原有的文本，可以是任意组件 |


## 事件
| 名称   | 类型                                                         | 说明           |
| ------ | ------------------------------------------------------------ | -------------- |
| change | (value: [SnTimerTime](/api/types/components#sntimertime)) => void | 时间变化时触发 |


## 方法
| 名称  | 参数 | 返回值 | 描述                   |
| ----- | ---- | ------ | ---------------------- |
| start | -    | -      | 开始计时               |
| pause | -    | -      | 暂停计时               |
| reset | -    | -      | 重置计时器（进度归零） |


<DemoPhone name="sn-timer" />