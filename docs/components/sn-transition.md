# Transition 过渡动画
## 基础用法
- 用于实现元素的过渡动画效果。
- 可通过不同的模式和动画时长自定义动画效果。
```vue
<sn-transition :show="value"></sn-transition>
```
**更多演示请下载demo查看**
## 属性
| 参数           | 说明                   | 类型    | 默认值     | 可选值                                                       |
| -------------- | ---------------------- | ------- | ---------- | ------------------------------------------------------------ |
| show           | 是否显示元素           | Boolean | `false`    | `true` \| `false`                                            |
| placed         | 元素隐藏时是否占位     | Boolean | `true`     | `true` \| `false`                                            |
| mode           | 动画模式               | String  | `fade`     | `fade` \| `zoom` \| `fadeZoom` \| `fadeUp` \| `fadeRight` \| `fadeDown` \| `fadeLeft` \| `slideUp` \| `slideRight` \| `slideDown` \| `slideLeft` |
| aniTime         | 动画时长 | String  | `$long`    | -                                                            |
| timingFunction | 动画时间函数           | String  | `ease-out` | -                                                            |
| customStyle    | 自定义样式             | Object  | `{}`       | -                                                            |
## 事件
| 名称          | 类型       | 说明                       |
| ------------- | ---------- | -------------------------- |
| beforeEnter   | `()=>void` | 动画开始前触发             |
| enter         | `()=>void` | 动画开始时触发             |
| afterEnter    | `()=>void` | 动画开始后触发             |
| beforeLeave   | `()=>void` | 动画结束前前触发           |
| leave         | `()=>void` | 动画结束时触发             |
| afterLeave    | `()=>void` | 动画结束后触发             |
| transitionend | `()=>void` | 每个过渡动画阶段结束时触发 |

## 插槽

| 名称    | 说明         |
| ------- | ------------ |
| default | 这里放置内容 |

<DemoPhone name="sn-transition" />