# Topbar 导航栏
## 基础用法
- 用于页面顶部导航，包含标题、返回按钮和功能按钮。
- 可固定在顶部，自定义样式。
```vue
<sn-topbar title="标题"></sn-topbar>
```
**更多演示请下载demo查看**
## 属性
| 参数                  | 说明               | 类型                                                    | 默认值                                             | 可选值                        |
| --------------------- | ------------------ | ------------------------------------------------------- | -------------------------------------------------- | ----------------------------- |
| height                | 导航栏高度         | String                                                  | `$topbarHeight`                                    | -                             |
| title                 | 标题文本           | String                                                  | -                                                  | -                             |
| titleColor            | 标题颜色           | String                                                  | `$title`                                           | -                             |
| titleFont             | 标题字体系列       | String                                                  | `alipuhuiheavy`                                    | -                             |
| titleSize             | 标题字体大小       | String                                                  | `$4`                                               | -                             |
| bgColor               | 背景颜色           | String                                                  | `$page`                                            | -                             |
| menuBgColor           | 菜单背景颜色       | String                                                  | `$front`（亮色模式）<br />`$info` （暗黑模式）     | -                             |
| menuBorderRadius      | 菜单圆角大小       | String                                                  | `$normal`                                          | -                             |
| activeMenuBgColor     | 激活菜单项背景颜色 | String                                                  | `$info`（亮色模式）<br />`$infoLight` （暗黑模式） | -                             |
| fixed                 | 是否固定在顶部     | Boolean                                                 | `true`                                             | `true` \| `false`             |
| boxShadow             | 导航栏阴影         | String                                                  | -                                                  | -                             |
| border                | 导航栏边框         | String                                                  | -                                                  | -                             |
| borderRadius          | 导航栏圆角大小     | String                                                  | -                                                  | -                             |
| backButton            | 是否显示返回按钮   | Boolean                                                 | `true`                                             | `true` \| `false`             |
| menuButton            | 是否显示菜单按钮   | Boolean                                                 | `false`                                            | `true` \| `false`             |
| buttonSize            | 按钮大小           | String                                                  | `35px`                                             | -                             |
| buttonBgColor         | 按钮背景颜色       | String                                                  | -                                                  | -                             |
| titleAlign            | 标题对齐方式       | String                                                  | `left`                                             | `left` \| `center` \| `right` |
| features              | 功能按钮数据       | Array\<[SnDataItem](/api/types/components#sndataitem)\> | -                                                  | -                             |
| menuData              | 菜单数据           | Array\<[SnDataItem](/api/types/components#sndataitem)\> | -                                                  | -                             |
| customTitleStyle      | 自定义标题样式     | Object                                                  | `{}`                                               | -                             |
| customButtonStyle     | 自定义按钮样式     | Object                                                  | `{}`                                               | -                             |
| customButtonIconStyle | 自定义按钮图标样式 | Object                                                  | `{}`                                               | -                             |
| customMenuStyle       | 自定义菜单样式     | Object                                                  | `{}`                                               | -                             |
| customStyle           | 自定义样式         | Object                                                  | `{}`                                               | -                             |
## 插槽
| 名称    | 说明                                             |
| ------- | ------------------------------------------------ |
| header  | 替换返回按钮                                     |
| default | 替换标题和功能按钮之间的区域，可以放置自定义内容 |
| footer  | 替换功能按钮区域                                 |
| menu    | 替换原有菜单                                     |
## 事件
| 名称         | 类型                         | 说明         |
| ------------ | ---------------------------- | ------------ |
| button-click | `(item: SnDataItem) => void` | 按钮点击事件 |
| menu-click   | `(item: SnDataItem) => void` | 菜单点击事件 |

<DemoPhone name="sn-topbar" />