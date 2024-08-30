# Toast 轻提示
## 基础用法
- 很常见的吐司，但可玩性较高。通过 ref 方法使用。
- 提供 15+ 配置属性，支持 props 和方法参数两种配置方法，能够面对绝大部分使用场景。
```vue
<sn-toast ref="toastEle" text="这是一个提示信息"></sn-toast>
```
**更多演示请下载demo查看**

## 属性
| 参数         | 说明                         | 类型    | 默认值      | 可选值                        |
| ------------ | ---------------------------- | ------- | ----------- | ----------------------------- |
| text         | 提示文本内容                 | String  | -           | -                             |
| bgColor      | 轻提示背景颜色               | String  | `$toast`    | -                             |
| overlay      | 是否显示遮罩层（防穿透）     | Boolean | `false`     | `true` \| `false`             |
| position     | 轻提示位置                   | String  | `center`    | `center` \| `top` \| `bottom` |
| duration     | 轻提示显示时间（单位：毫秒） | Number  | `2000`      | -                             |
| textSize     | 提示文本字体大小             | String  | `$2`        | -                             |
| textColor    | 提示文本颜色                 | String  | `#fff`      | -                             |
| borderRadius | 轻提示圆角大小               | String  | `$normal`   | -                             |
| padding      | 轻提示内边距                 | String  | `12px 15px` | -                             |
| icon         | 提示图标名称                 | String  | -           | -                             |
| iconSize     | 图标大小                     | String  | `$5`        | -                             |
| iconColor    | 图标颜色                     | String  | `#fff`      | -                             |
| textAlign    | 文本对齐方式                 | String  | `center`    | -                             |
| loading      | 是否显示加载中的图标         | Boolean | `false`     | `true` \| `false`             |
| textLines    | 文本最大行数                 | Number  | `0`         | -                             |
| customStyle  | 自定义轻提示样式             | Object  | `{}`        | -                             |

## 方法
| 名称       | 参数                                                         | 返回值 | 描述                                                     |
| ---------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------- |
| show       | -                                                            | -      | 按照组件 props 配置显示轻提示。                          |
| configShow | (param: [SnToastParams](/api/types/components#sntoastparams) \| null) | -      | 按照传入的参数配置显示轻提示，无需改动属性               |
| close      | -                                                            | -      | 关闭轻提示（设置 `loading="true"` 时需要通过此方法关闭） |


<DemoPhone name="sn-toast" />