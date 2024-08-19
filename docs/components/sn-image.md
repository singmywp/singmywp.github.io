# Image 图片

## 基本使用

- 相比于内置 `image` 组件更加方便使用。
- 支持图片加载占位、图片预览、懒加载（同 `image` 组件）、动画效果（同 `image` 组件）
- 默认为 aspectFit 模式。此模式支持根据父容器自动设置图片长宽、给定宽度自动计算长度，设置 height 属性后此功能失效

```vue
<sn-image src="https://www.example.com/example.png"></sn-image>
```

**更多演示请下载 demo 查看**

## 属性

| 参数               | 说明                                                         | 类型          | 默认值      | 可选值                                                       |
| ------------------ | ------------------------------------------------------------ | ------------- | ----------- | ------------------------------------------------------------ |
| width              | 图片宽度（不填则自动铺满父元素）                             | String        | -           | -                                                            |
| height             | 图片高度（不填则自动根据 `width` 和图片内容计算）（不填 `width` 时也不得填 `height`，反之则可以） | String        | -           | -                                                            |
| src                | 图片路径（网络路径、本地路径皆可）（本地路径支持 `/static/xxx`，Android 平台支持`file:///xxx` 绝对路径以及 Content Provider 的`content://xxx`） | String        | -           | -                                                            |
| mode               | 图片裁剪、缩放方式。                                         | String        | `aspectFit` | `scaleToFill` \| `aspectFit` \| `aspectFill` \| `widthFix` \| `heightFix` \| `top` \| `bottom` \| `center` \| `left` \| `right` \| `top left` \| `top right` \| `bottom left` \| `bottom right` |
| borderRadius       | 图片圆角大小                                                 | String        | `$small`    | -                                                            |
| loadingBgColor     | 图片加载占位块背景颜色                                       | String        | `$info`     | -                                                            |
| loadingIconColor   | 图片加载占位块中的图标颜色                                   | String        | `$infoDark` | -                                                            |
| loadingSize        | 图片加载占位块尺寸                                           | String        | `80px`      | -                                                            |
| lazyLoad           | 图片懒加载。只针对page与scroll-view下的image有效。同内置 [`image`](https://doc.dcloud.net.cn/uni-app-x/component/image.html#%E5%B1%9E%E6%80%A7) | Boolean       | `false`     | `true` \| `false`                                            |
| fadeShow           | 图片显示动画效果。同内置 [`image`](https://doc.dcloud.net.cn/uni-app-x/component/image.html#%E5%B1%9E%E6%80%A7) | Boolean       | `false`     | `true` \| `false`                                            |
| enablePreview      | 点击后调用内置的 uni.previewImage 进行图片预览               | Boolean       | `false`     | `true` \| `false`                                            |
| customStyle        | 自定义图片容器样式                                           | UTSJSONObject | {}          | -                                                            |
| customImageStyle   | 自定义图片（内置 `image`）样式                               | UTSJSONObject | {}          | -                                                            |
| customLoadingStyle | 自定义图片加载占位块样式                                     | UTSJSONObject | {}          | -                                                            |

<DemoPhone name="sn-image" />