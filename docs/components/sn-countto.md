# Countto 数字滚动

## 基础用法

- 滚动的数字，常用在 PPT 的大屏上

```vue
<template>
	<sn-countto :endVal="6666"></sn-countto>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数        | 说明                                                         | 类型            | 默认值  | 可选值            |
| :---------- | :----------------------------------------------------------- | :-------------- | :------ | :---------------- |
| aniTime      | 动画时长（单位 `ms`）                                        | Number        | `2000`  | -                 |
| startVal    | 开始值                                                       | Number        | `0`     | -                 |
| endVal      | 结束值                                                       | Number        | `0`     | -                 |
| decimals    | 小数位数（值为 `0` 则不显示小数部分）                        | Number        | `0`     | -                 |
| separate    | 分割数字位数（值为 `0` 则不分割）                            | Number        | `0`     | -                 |
| easing      | 以 easeOutSine 缓动动画代替默认的 linear 动画，使得动画在结束前减速 | Boolean       | `false` | `true` \|`false`  |
| autoplay    | 自动开始计时                                                 | Boolean       | `true`  | `true` \| `false` |
| textSize    | 数字滚动文本字体大小                                         | String        | `$2`    | -                 |
| textColor   | 数字滚动文本颜色                                             | String        | `$text` | -                 |
| customStyle | 自定义数字滚动样式                                           | UTSJSONObject | `{}`    | -                 |

## 事件

| 名称   | 类型         | 说明               |
| :----- | :----------- | :----------------- |
| finish | `() => void` | 动画播放完成时触发 |

## 方法

| 名称  | 参数 | 返回值 | 描述                       |
| :---- | :--- | :----- | :------------------------- |
| play  | -    | -      | 播放动画                   |
| pause | -    | -      | 暂停动画                   |
| stop  | -    | -      | 停止动画（达到 `endVal`）  |
| reset | -    | -      | 进度清空，自动重新播放动画 |

<DemoPhone name="sn-countto" />