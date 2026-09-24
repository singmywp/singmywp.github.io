# 类型体系差异

## 导入方式变化

| 旧版 | 新版 |
| :--- | :--- |
| 框架本体类型从 `@/uni_modules/sinle-ui` 导入；**组件专属类型从组件自身 `interface.uts` 导入**（如 `SnActionsheetItem` 等） | 全部类型统一**从 `@/uni_modules/sinle-ui` 重导出**，不再要求从组件目录导入 |
| 旧版部分类型需手动 `import` 或 `as` 处理（如 `SnToastConfig` 从 `sn-native` 导入） | 新版编译器可自动推导，类型经插件入口统一导出 |

## SnColorBase 差异

字段整体保持不变，仅 **新增 `shadow`（阴影色）字段**：

> 旧版 `transparent / page / front / dark / disabled / disabledText / disabledDark / disabledDarkText / line / lineDark / lineText / title / text / textLight` + 五功能色 × 9 + `toast`
>
> 新版相同 + **`shadow`**

5 种功能色（`primary/info/success/error/warning`）× 亮/暗两套颜色集、每种含原色/`Light`/`Dark` + `Active`/`Text` 的结构完全保留，未变。

## 手势事件类型差异

| 类型 | 变化 |
| :--- | :--- |
| `SnPointerEvent` | 保留（type/x/y/event） |
| `SnTouch` | 保留（x/y/diffX/diffY/direction/id），旧版 **direction 字段为独立 `SnTouch` 属性、含义为"手指移动方向"**，保持不变 |
| `SnTouchEvent` | 保留 |
| `SnScaleEvent` | 保留 |
| `SnRotateEvent` | **不再单独导出**，旋转事件在新版中由组件事件内联携带角度（以组件文档为准） |
| `SnFlingEvent` | 保留 |

## 全局弹窗配置类型差异

| 类型 | 变化 |
| :--- | :--- |
| `SnShowToastConfig` | 保留并扩展：新增 `title` 兼容字段（仅有 `title` 时当 `text` 用）、`passThrough`（点击穿透）；余字段基本一致 |
| `SnShowModalConfig` | 保留并扩展：新增 `openAnimation` / `closeAnimation`（`SnModalAnimationFn` 自定义开合动画）；新增 `position` 支持 `left/right` |
| `SnShowActionsheetConfig` | `actions` 类型由旧 `SnActionsheetItem[]` 改为 **`SnDataItem[]`**；新增 `wrapStyle/wrapClass`、`panelStyle/panelClass`、`itemStyle/itemBorder/itemHoverStyle` 样式链字段；新增 `openAnimation/closeAnimation` |
| `SnShowLoadingConfig` | 新增（旧版仅有 `showLoading` 但未独立成文档类型） |
| `SnToastParams` | 新增（`sn-toast` 参数型轻提示配置） |
| `SnModalAnimationFn` | 新增（自定义动画函数类型） |

## 废弃类型清理

旧版已标注废弃的类型在新版中**全部移除**：

- `SnShareConfig`（1.1.5 废弃，`snu.share` 移除）
- `SnChooseMediaOptions`（1.1.7 废弃，`snu.chooseMedia` 移除）
- `SnPreviewImageLongPressActions`、`SnPreviewImageConfig`（1.1.7 废弃，`snu.previewImage` 移除）
- `SnToastyConfig`（旧 showToasty 参数类型）

## 权限类型

`SnRequestSystemPermissionOptions`、`SnRequestMediaPermissionOptions`、`SnRequestMediaPermissionOptionsType` 完全保留，现由 `sinle-api` 定义、`sinle-ui` 重导出。

## 新增类型（新版独有）

- 通用数据项 `SnDataItem`、`SnTime`（计时/倒计时事件返回）
- 权限提示：`SnPermTipConfig`、`SnPermTipsStyleConfig`
- 消息与通知：`SnMessageType/Level/Position/Params`、`SnNotificationType/Level/Position/Params`
- 核心类型：`SnStyle`（完整风格对象）、`SnColorBases`、`SnThemeMode`、`SnFunctionalColor`、`SnResolveType`、`UseHoverOptions`、`SN_DEFAULT_STYLE_ID`
- 组件专属类型大量扩充（`SnAvatarConfig`、`SnTreeData`、`SnCalendar*`、`SnRegion*`、`SnFormItemRule`、`SnFooterLink`、`SnBarcodeFormat`、`QrEncodeOptions`、`SnSignatureBrush` 等），均随组件文档说明