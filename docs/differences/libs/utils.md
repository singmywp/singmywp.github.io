# 工具库（snu）差异

## 使用方式变化

| 项目 | 旧版 | 新版 |
| :--- | :--- | :--- |
| 获取入口 | `import { $snui } from '@/uni_modules/sinle-ui'` → `const snu = $snui.utils` | `import { snu } from '@/uni_modules/sinle-ui'`（独立命名导出） |
| 分组 | 分组不对外强调 | 11 个分组静态类 + `snu` 聚合门面，三层架构 |

## 方法级差异

### 保留不变（全部同签名）

| 分组 | 方法 |
| :--- | :--- |
| Random | `randint` / `randomNumber` / `uuid` |
| Basic | `throttle(fun, wait, id='default')` / `debounce` / `clamp(value, min, max=null)` |
| Easing | 全部 31 个缓动方法（sine~bounce 缓入/缓出/缓入缓出 + linear） |
| ObjectUtils | `formatNumber` / `deepClone` / `reArray` / `shuffle` / `isNumber` / `setDataset` / `getDataset` |
| System | `openLink` / `showSysToast` / `viewUrlByWebview` / `getOsTheme` / `setClipboardData` / `getClipboardData` |
| Sort | 8 个排序算法（冒泡/选择/插入/快排/归并/堆/希尔/桶） |
| Text | `isEmpty` / `len` / `kebabCaseToCamelCase` / `camelCaseToKebabCase` / `numToUpper` / `encryptName` / `encryptPhone` / `encryptIDCard` / `encryptEmail` / `encryptBankCard` / `separateNumber` |
| Ui | `getPx` / `addUnit` / `getInnerRadius` / `getDistance` / `getRotateAngle` / `findParent` / `findBrother` / `showToast` / `hideToast` / `showModal` / `showActionsheet` |
| Verify | 全部 17 个校验方法（isDate~isFloat） |

### 新增方法

| 分组 | 新增 | 说明 |
| :--- | :--- | :--- |
| Text | `roundAmount(value, decimals=2, mode='round')` | 字符串级金额舍入（round/ceil/floor/trunc），避免 toFixed 浮点陷阱 |
| Text | `numToUpperAmount(value)` | 金额中文大写转换（符合央行票据规范） |
| Ui | `showLoading(config)` / `hideLoading()` | 全局加载弹层（旧版无独立 loading 弹窗 API） |
| Resolve | `resolveSize` / `resolveSizeNum` / `resolveColor` | **全新分组**，`$` 动态尺寸/颜色解析（驱动组件尺寸乘数与主题色语法） |
| Perm | `setPermTips` / `setPermTipsStyle` / `registerPermListener` / `unregisterPermListener` / `hidePermTips` | **全新分组**，权限用途提示配置与监听（配套 `sn-perm-listener` 插件）；另有自 platform 分组迁入的 `checkSystemPermissionGranted` / `getSystemPermissionDenied` / `requestSystemPermission` / `gotoSystemPermissionActivity` / `requestMediaPermission` / `checkMediaPermission`（签名不变） |

### 移除方法

| 方法 | 旧版状态 | 新版 | 替代建议 |
| :--- | :--- | :--- | :--- |
| `makePhoneCall` | platform 分组 | 移除 | 使用 `uni.makePhoneCall` |
| `vibrate` | os 分组 | 移除 | 使用 `uni.vibrateLong` / `uni.vibrateShort` |
| `addPx` | ui 分组 | 移除 | 使用 `getPx` / `addUnit` |
| `share` | os 分组（1.1.5 已废弃） | 移除 | `uni.shareWithSystem` |
| `chooseMedia` | os 分组（1.1.7 已废弃） | 移除 | `uni.chooseMedia` |
| `previewImage` | 全局（1.1.7 已废弃） | 移除 | `uni.previewImage` |
| `showToasty` | 全局（更名产物） | 移除 | 新版统一为 `showSysToast`（系统 Toast）与 `showToast`（框架轻提示） |

### 更名/归属调整

- `randomComId`：旧版归入 Basic 分组，新版归入 **Random** 分组（对外用法不变）。
- `getOsTheme`：旧 platform 分组，新版归入 System 分组（平台.uts）。
- 权限相关方法旧版分散在 `permission.md`/`platform.md`，新版统一归入 **Perm 分组**（`core/utils/perm.uts`）。

## 行为变化要点

- `resolveColor`/`resolveSize` 由新版组件内部大量依赖，配合 `sn-page` CSS 变量注入实现 `$primary` 等 $ 语法（旧版组件无此机制）。
- 全局弹窗配置类型签名有变（见 API 类型差异）：`showActionsheet` 的 `actions` 改为 `SnDataItem[]`，并新增样式链字段。