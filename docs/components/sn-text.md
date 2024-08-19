# Text  文本

## 基本使用

- 只支持通过 `text` 属性传值（这个要是用插槽，反而会多套一层 `text`）

```vue
<sn-text text="这是一段文本"></sn-text>
```

**更多演示请下载 demo 查看**

## 文本模式

目前支持通过 `mode` 属性设置文本的模式，轻松实现常见功能，为您减少代码量。

- text

  默认模式，与内置 `text` 组件无异。

- date

  日期模式，支持通过传入时间戳（需转换为String类型），实现自动格式化日期为 `yyyy-mm-dd` 的形式（以后会支持自定义格式）。

- date-cn

  日期模式（中文），与 `date` 用法相同，但是能转成中文 `yyyy年mm月dd日`。

- price

  价格模式，很简单的功能，将传入的文本前加一个 ￥（挺没用的哈，以后可能会加以改进，支持更多功能，比如汇率、国际化之类的）

- price-upper

  价格模式（大写），自动识别传入数字，并将其转换为中文大写金额，精确到分。使用 [`snu.numToUpper()` ](/libs/utils/text#snu-numtoupper) 方法

  例：`168201.03 => 壹拾陆万捌仟贰佰零壹元零叁分`

- name 

  姓名模式，需搭配 `encrypt` 属性使用，否则与 `text` 模式效果相同。

- phone

  电话模式，点击后向用户发送请求，用户同意后直接拨打电话。

- phone-direct

  电话模式（直接拨打），点击后无需征求用户同意，直接拨打电话（但如果没有权限，还是会先请求拨号权限）。

## 属性

| 参数            | 说明                                                         | 类型    | 默认值        | 可选值                                                       |
| :-------------- | :----------------------------------------------------------- | :------ | :------------ | :----------------------------------------------------------- |
| mode            | 文本显示模式                                                 | String  | `text`        | `date` | `price` | `name` | `bankcard` | `idcard` | `email` | `phone` |
| text            | 文本内容                                                     | String  | -             | -                                                            |
| color           | 文本颜色                                                     | String  | -             | -                                                            |
| type            | 文本类型                                                     | String  | `info`        | `warning` | `error` | `success` | `primary`                  |
| font            | 字体名称                                                     | String  | `$mainFamily` | -                                                            |
| size            | 字体大小                                                     | String  | `$2`          | -                                                            |
| align           | 对齐方式                                                     | String  | `left`        | `right` | `center`                                           |
| overflow        | 文本溢出处理                                                 | String  | `ellipsis`    | -                                                            |
| decorationLine  | 文本装饰线                                                   | String  | -             | -                                                            |
| space           | 字符间距。同 [text](https://doc.dcloud.net.cn/uni-app-x/component/text.html#%E5%B1%9E%E6%80%A7)。 | String  | -             | -                                                            |
| decode          | 是否解码 (app平台如需解析字符实体，需要配置为 true)。同 [text](https://doc.dcloud.net.cn/uni-app-x/component/text.html#%E5%B1%9E%E6%80%A7)。 | Boolean | `false`       | `true` | `false`                                             |
| selectable      | 是否可选择同 [text](https://doc.dcloud.net.cn/uni-app-x/component/text.html#%E5%B1%9E%E6%80%A7)。 | Boolean | `false`       | `true` | `false`                                             |
| bold            | 是否加粗                                                     | Boolean | `false`       | `true` | `false`                                             |
| encrypt         | 是否加密                                                     | Boolean | `false`       | `true` | `false`                                             |
| customStyle     | 自定义样式                                                   | Object  | `{}`          | -                                                            |
| customTextStyle | 自定义文本样式                                               | Object  | `{}`          | -                                                            |

<DemoPhone name="sn-text" />