# Countdown 倒计时

## 基础用法

- 用于显示某个活动的截止时间
- 推荐使用插槽布局为主，样式更好调。

```vue
<template>
	<sn-countdown :time="5 * 60 * 1000"></sn-countdown>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数        | 说明                                                         | 类型            | 默认值     | 可选值           |
| :---------- | :----------------------------------------------------------- | :-------------- | :--------- | :--------------- |
| format      | 时间格式（参考 [`Day.js`](https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%A0%BC%E5%BC%8F)） | String        | `HH:mm:ss` | -                |
| time        | 总时长（单位 `ms`）                                          | Number        | `0`        | -                |
| autoplay    | 自动开始计时                                                 | Boolean       | `true`     | `true` \|`false` |
| millisecond | 毫秒级精度（如果要显示毫秒请务必开启）                       | Boolean       | `false`    | `true` \|`false` |
| textSize    | 倒计时文本字体大小                                           | String        | `$2`       | -                |
| textColor   | 倒计时文本颜色                                               | String        | `$text`    | -                |
| customStyle | 自定义倒计时样式                                             | UTSJSONObject | `{}`       | -                |

## 插槽

| 名称    | 说明                                              |
| :------ | :------------------------------------------------ |
| default | 在这里放置布局组件，通过绑定 `ref` 对象实现倒计时 |

## 事件

| 名称   | 类型                                                         | 说明                 |
| :----- | :----------------------------------------------------------- | :------------------- |
| finish | () => Void                                                 | 倒计时完成时触发     |
| change | (value: [`SnTime`](/api/types/components#sntime) ) => Void | 倒计时时间变化时触发 |

## 方法

| 名称  | 参数 | 返回值 | 描述                       |
| :---- | :--- | :----- | :------------------------- |
| start | -    | -      | 开始计时                   |
| pause | -    | -      | 暂停计时                   |
| stop  | -    | -      | 停止计时（归零）           |
| reset | -    | -      | 进度清空，自动重新开始计时 |

<DemoPhone name="sn-countdown" />