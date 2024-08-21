# View  视图容器

## 基本使用

- 用于包裹各种元素内容。
- 用法与内置 `view` 组件无异。更好地设置组件样式；扩展了组件的手势事件，相当于简化版的 `sn-e-gesture`

```vue
<sn-view>
  <sn-button text="这是一个由 sn-view 包裹的按钮"></sn-button>
</sn-view>
```

## 手势事件

`sn-view` 支持 按下（down）、单击（click）、长按（longpress）、双击（dbclick）、手指落下（touchstart）、手指移动（touchmove）、手指抬起（touchend）、触摸打断（touchcancel）等多种手势事件。

**更多演示请下载 demo 查看**

## 属性

| 参数         | 说明             | 类型          | 默认值  | 可选值           |
| :----------- | :--------------- | :------------ | :------ | :--------------- |
| loading      | 是否区域加载状态，为 `true` 时不会载入默认插槽的组件 | Boolean       | `false` | `true` \| `false` |
| disabled | 是否区域禁用状态，为 `true` 时会屏蔽区域内所有组件的使用 | Boolean | `false` | `true` \| `false` |
| bgColor      | 背景颜色         | String        | -       | -                |
| borderRadius | 圆角大小         | String        | -       | -                |
| margin       | 外边距           | String        | `0`     | -                |
| padding      | 内边距           | String        | `0`     | -                |
| boxShadow    | 阴影，一般不要设置，`uni-app x` 的阴影在 App 端时有异常 | String        | -       | -                |
| customStyle  | 自定义样式       | UTSJSONObject | `{}`    | -                |

## 事件

| 名称        | 类型                                                         | 说明         |
| :---------- | :----------------------------------------------------------- | :----------- |
| click       | (event: [SnPointerEvent](/api/types/api#snpointerevent)) => void | 点击事件     |
| longpress   | (event: [SnTouchEvent](/api/types/api#sntouchevent)) => void | 长按事件     |
| dbclick     | (event: [SnPointerEvent](/api/types/api#snpointerevent)) => void | 双击事件     |
| touchstart  | (event: [SnTouchEvent](/api/types/api#sntouchevent)) => void | 手指落下事件 |
| touchmove   | (event: [SnTouchEvent](/api/types/api#sntouchevent)) => void | 手指移动事件 |
| touchend    | (event: [SnTouchEvent](/api/types/api#sntouchevent)) => void | 手指抬起事件 |
| touchcancel | (event: [SnTouchEvent](/api/types/api#sntouchevent)) => void | 触摸打断事件 |
| down        | (event: [SnPointerEvent](/api/types/api#snpointerevent)) => void | 按下事件     |
