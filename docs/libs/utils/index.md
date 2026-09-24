# SnUI 工具库

`snu` 是 SinleUI 提供的工具库聚合门面（facade）。它把分布在多个分组静态类中的工具方法统一收敛到一个入口，使用户只需从一个地方导入即可调用全部工具方法，无需关心各方法所属的分组。

## 导入方式

```typescript
import { snu } from '@/uni_modules/sinle-ui'

// 调用示例
let id = snu.randomComId()
let rounded = snu.roundAmount('123.456', 2, 'round')
let isUrl = snu.isURL('https://example.com')
```

## 分组结构

`snu` 门面下的方法按业务/功能划分为以下分组（对应 `uni_modules/sinle-ui/core/utils/` 下的分组静态类）。组件内部通常直接导入分组类调用；用户侧则统一经 `snu` 门面调用。本页只介绍各分组的定位，具体方法清单见各分组文档。

| 分组静态类 | 模块文件 | 功能描述 | 文档 |
| --- | --- | --- | --- |
| `Random` | `random.uts` | 提供各类随机数据的生成能力，供界面开发与测试场景取用 | [Random](/libs/utils/random) |
| `Basic` | `basic.uts` | 提供节流、防抖与数值范围约束等基础控制能力，服务于高频交互与数值收窄场景 | [Basic](/libs/utils/basic) |
| `Easing` | `easing.uts` | 提供缓动函数集合，供动画与过渡的插值计算使用 | [Easing](/libs/utils/easing) |
| `ObjectUtils` | `object.uts` | 提供对象与数组的通用处理能力，覆盖数值格式化、拷贝、类型判断与元素 dataset 读写 | [ObjectUtils](/libs/utils/object) |
| `System` | `platform.uts` | 封装系统级能力（链接、提示、剪贴板、主题等），屏蔽各平台差异 | [System](/libs/utils/platform) |
| `Sort` | `sort.uts` | 提供常用排序算法的实现，供列表数据排序使用 | [Sort](/libs/utils/sort) |
| `Text` | `text.uts` | 提供文本处理能力，覆盖命名风格转换、金额处理、敏感信息脱敏与数字分段 | [Text](/libs/utils/text) |
| `Ui` | `ui.uts` | 提供界面开发辅助能力，覆盖单位换算、几何计算、节点查找与全局弹窗调用 | [Ui](/libs/utils/ui) |
| `Perm` | `perm.uts` | 负责系统权限的检查、申请、设置页跳转，以及权限提示气泡的内容配置、样式配置和申请监听 | [Perm](/libs/utils/permission) |
| `Verify` | `verify.uts` | 提供常见数据格式的合法性校验能力，覆盖日期、网络、号码、证件等类型 | [Verify](/libs/utils/verify) |
