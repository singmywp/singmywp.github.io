# 配置体系差异

## 总览

旧版将全局配置收敛在 `$snui.configs` 下的六个子配置对象中（`app / page / font / radius / aniTime / zIndex`），其中字号、圆角、动画采用"基本值 + 固定等级板"的静态结构。

新版**移除了 `Configs` 体系**，全部配置改为 `$snui` 直接属性，并且：

- 由"子配置对象 + 等级板"改为"**全局乘数 + 基础值**"的响应式体系
- 新增**多风格（Style）切换**维度（`currentStyleId`），配置项归属到 `SnStyle` 对象并整体持久化
- 配置修改自动持久化，`sn-page` 差量更新 CSS 变量实时生效

## 逐项差异

| 旧版配置 | 旧版内容 | 新版对应 | 说明 |
| :--- | :--- | :--- | :--- |
| `configs.app.theme` | 主题模式 | `$snui.theme` | 直接属性，写法变化 |
| `configs.app.autoTheme` | 跟随系统 | `$snui.autoTheme` | 直接属性，默认开启 |
| `configs.app.grayMode` | 哀悼置灰模式（1.1.4 新增） | `$snui.grayMode`（+ `$snui.grayLevel`） | 改为 `$snui` 直接属性；旧版写 `$snui.configs.app.grayMode`，新版写 `$snui.grayMode`；另新增 `$snui.grayLevel`（0-100）控制灰度程度，默认 `100` 全灰 |
| `configs.page.topbarHeight` | 导航栏高度，默认 `80px` | `$snui.topbarHeight` | 默认值改为 **`88px`** |
| `configs.page.lightBgColor` | 亮色页面背景，默认 `#f9f9f9` | `$snui.lightBgColor` | 默认值改为 `#EEF2FF` |
| `configs.page.darkBgColor` | 暗色页面背景，默认 `#262628` | `$snui.darkBgColor` | 默认值改为 `#0F172A` |
| `configs.font.baseSize` + `size(level)` | 基础字号 `14px` + 11 级字号板 | `$snui.fontsizeFactor` | **字号板移除**，改为全局字号乘数 |
| `configs.font.mainFamily` | 全局字体名（misans-normal） | - | **移除**（内置字体已不再随框架分发） |
| `configs.radius.baseSize` + 8 固定等级 | 基础圆角 `12px` + xxsmall~xxlarge/circle 等级板 | `$snui.radiusFactor` | **等级板移除**，改为全局圆角乘数 |
| `configs.aniTime.baseTime` + short/normal/long/xlong | 基础时长 `100ms` + 4 级 | `$snui.baseAniTimeShort/Normal/Long` + `aniTimeFactor` | 4 级改 3 级（short/normal/long），新增时长乘数 |
| `configs.zIndex` | navTabBar/badge/float/overlay/popup/toast 六项层级 | - | **移除**，层级改由组件自身控制 |

## 初始化方式差异

- **旧版**：在 `main.uts` 中通过 `$snui.configs.xxx = xxx` 逐项配置初始化，如：

```typescript
$snui.configs.page.topbarHeight = '88px'
$snui.configs.font.baseSize = '16px'
```

- **新版**：直接读写 `$snui` 属性，或切换整套风格：

```typescript
$snui.fontsizeFactor = 1.2
$snui.radiusFactor = 1
$snui.setColor('light', 'primary', '#4d82ff')
$snui.currentStyleId = 'ink'
```

## 行为变化要点

- 旧版 configs 修改**不持久化**（仅 app.theme/autoTheme 例外）；新版所有属性修改（theme、autoTheme、style、factors、baseAniTime 等）**一律自动写入 storage**，重启恢复。
- 旧版字号/圆角/动画为固定等级板（离散取值）；新版为连续乘数（任意数值），且 `$` 动态尺寸语法（`resolveSize`）可直接按组件 props 乘以对应乘数。
- 多风格切换为新版独有能力：`currentStyleId` 可从内置 6 套风格（default/ink/chinese/new-year/morandi-green/orange）或自定义风格间切换。