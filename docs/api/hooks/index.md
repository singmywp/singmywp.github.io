# 钩子

SinleUI 采用 Vue3 组合式 API 设计，向组件与开发者暴露一组钩子，用于获取框架状态并在组件内响应式使用。所有 hooks 统一从插件入口导出：

```typescript
import { useTheme, useStyle, useFactors, useGrayMode, useHover, useResolve } from '@/uni_modules/sinle-ui'
```

> [!TIP] 提示
>
> 框架内部组件同样通过这些 hooks 获取主题、乘数、解析等能力，因此任何修改都会自动触发依赖它的组件更新。

## 钩子总览

| Hook | 功能描述 | 来源 |
| :--- | :--- | :--- |
| [useTheme](/api/hooks/use-theme) | 获取与切换当前主题（light / dark / auto） | 插件出口导出 |
| [useStyle](/api/hooks/use-style) | 获取当前风格与切换风格 | 插件出口导出 |
| [useFactors](/api/hooks/use-factors) | 响应式读取五个全局尺寸乘数 | 插件出口导出 |
| [useGrayMode](/api/hooks/use-gray-mode) | 哀悼置灰（灰度模式）状态与开关 | 插件出口导出 |
| [useHover](/api/hooks/use-hover) | 统一点击态（按下反馈）机制 | 插件出口导出 |
| [useResolve](/api/hooks/use-resolve) | `$` 前缀动态尺寸解析与颜色简写解析 | 插件出口导出 |
| [useExternalStyle](/api/hooks/use-external-style) | 外部样式（UTSJSONObject / String）转样式字符串 | 组件内部使用，可复用 |
| [useBacktop](/api/hooks/use-backtop) | 滚动容器与 sn-backtop 回顶联动机制 | 组件内部使用，可复用 |

其中 `useTheme` / `useStyle` / `useFactors` / `useGrayMode` / `useHover` / `useResolve` 从插件入口 `@/uni_modules/sinle-ui` 导出，可直接在业务代码中使用；`useExternalStyle` 与 `useBacktop` 主要供框架内部组件复用，自定义组件开发时同样可以引入使用（从对应源文件路径导入）。

## 使用约定

- hooks 必须在组件 `<script setup>`（或钩子）中调用，返回值中的响应式状态为 Vue `computed` / `ref`，在模板中自动解包。
- 一个 hook 可多次调用，各调用之间共享同一框架全局状态。
- 框架内部还有若干仅供组件内部复用的工具型 hook，不在此文档范围内。
