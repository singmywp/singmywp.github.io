# Drawer 抽屉

## 基础用法

- 通常用于半屏窗口的场景。
- 请注意区分 `sn-popup` 和 `sn-drawer`。`sn-popup`只控制动画和显隐逻辑，UI 需要自己写。而  `sn-drawer` 则是在 `sn-popup` 的基础上加了一层 UI 模板。
- 请注意区分  `sn-drawer`和 `sn-float-board`。 `sn-drawer`是弹出层，需要调用方法才能显示；而  `sn-float-board` 则始终显示，且可以通过用户手势操作完全显露。（可以把  `sn-drawer` 理解为关闭的抽屉， `sn-float-board` 则是半开的抽屉）

``` vue
<template>
	<sn-drawer ref="drawerEle"></sn-drawer>
  <sn-button text="打开"
  @click="show"></sn-button>
</template>

<script setup>
  const drawerEle = ref(null as SnDrawerComponentPublicInstance | null)
  function show(){
    drawerEle.value!.open()
  }
</script>
```



**更多演示请下载 demo 查看**

## 属性

| 参数         | 说明                                            | 类型            | 默认值                | 可选值                                 |
| ------------ | ----------------------------------------------- | --------------- | --------------------- | -------------------------------------- |
| position     | 抽屉显示的位置                                  | String        | `bottom`              | `top` \| `right` \| `bottom` \| `left` |
| renderMode | 渲染模式 | String | `v-if` | `v-if` \| `v-show` |
| showLine     | 是否显示指示条                                  | Boolean       | `true`                | `true` \| `false`                      |
| slideClose   | 是否启用滑动关闭                                | Boolean       | `true`                | `true` \| `false`                      |
| width        | 当 `position` 为 `left` \| `right` 时抽屉的宽度 | String        | `300px`               | -                                      |
| height       | 当 `position` 为 `top` \| `bottom` 时抽屉的高度 | String        | `300px`               | -                                      |
| slideHeight  | 抽屉纵向滑动阈值（达到阈值则关闭）              | String        | `100px`               | -                                      |
| slideWidth   | 抽屉横向滑动阈值（达到阈值则关闭）              | String        | `100px`               | -                                      |
| bgColor      | 抽屉的背景颜色                                  | String        | `$front`              | -                                      |
| lineColor    | 抽屉指示条颜色                                  | String        | `$lineText`           | -                                      |
| padding      | 抽屉内边距                                      | String        | `25px 15px 10px 15px` | -                                      |
| borderRadius | 抽屉圆角大小                                    | String        | `$xlarge`             | -                                      |
| aniTime       | 抽屉显示/关闭动画时长              | String        | `$long`               | -                                      |
| preventBack  | 抽屉显示时是否阻止页面返回事件                  | Boolean       | `false`               | `true` \| `false`                      |
| maskClose    | 是否启用点击遮罩关闭                            | Boolean       | `true`                | `true` \| `false`                      |
| maskOpacity  | 遮罩透明度                                      | Number        | `0.3`                 | -                                      |
| customStyle  | 自定义抽屉样式                                  | UTSJSONObject | `{}`                  | -                                      |

## 插槽

| 名称    | 说明               |
| :------ | :----------------- |
| default | 在抽屉内部放置组件 |

## 事件

| 名称      | 类型         | 说明                                         |
| --------- | ------------ | -------------------------------------------- |
| open      | `() => void` | 打开抽屉时触发                               |
| close     | `() => void` | 关闭抽屉时触发                               |
| clickMask | `() => void` | （仅 `maskClose` 为`true` 时）点击遮罩时触发 |

## 方法

| 名称  | 参数 | 返回值 | 描述     |
| :---- | :--- | :----- | :------- |
| open  | -    | -      | 打开抽屉 |
| close | -    | -      | 关闭抽屉 |

<DemoPhone name="sn-drawer" />