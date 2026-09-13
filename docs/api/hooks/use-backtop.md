# useBacktop

滚动容器与返回顶部联动机制。`sn-scroll-view` / `sn-list-view` / `sn-waterflow` / `sn-page` 等滚动容器复用此 hook，通过 provide/inject 与 `sn-backtop` 联动。

从对应源文件导入：

```typescript
import { useBacktop } from '@/uni_modules/sinle-ui/core/private/use-backtop.uts'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| scrollTop | `Ref<number>` | 当前纵向滚动距离（px） |
| registerBacktop | (update: (scrollTop: number) => void) => void | 注册滚动更新回调（`sn-backtop` 显式 target 绑定时调用） |
| notifyBacktop | (top: number) => void | 容器在 scroll 事件中调用，同步 `scrollTop` 并通知全部已注册回调 |

## 工作机制

- 滚动容器在 scroll 事件中调用 `notifyBacktop(top)`：既更新响应式 `scrollTop`，也通知所有已注册回调。
- 自动绑定时 `sn-backtop` 经 `inject` 取容器 provide 的 `'snBacktopScrollTop'`（响应式滚动位置）并 `watch` 它决定显隐，回顶则经 `'snBacktopScrollTo'` 调用容器的滚动方法；该路径规避了 App 端 `$callMethod` 传函数回调的兼容问题。
- 显式 `target` 绑定时（或 provide 链断开时）`sn-backtop` 调用容器的 `registerBacktop(setScrollTop)` 注册回调，容器在后续 scroll 中经 `notifyBacktop` 逐个通知。
- 容器未传 `target` 时会自动查找：先同级、后父级，识别 `sn-scroll-view` / `sn-list-view` / `sn-waterflow` / `sn-page`。

## 示例

### 滚动容器接入

`sn-page` 是框架中最简的接入范例：`onScroll` 里通知滚动位置，再经 provide 暴露给 `sn-backtop`。

```typescript
import { useBacktop } from '../../core/private/use-backtop.uts'

const backtop = useBacktop()

function onScroll(e: UniScrollEvent): void {
	emit('scroll', e)
	backtop.notifyBacktop(e.detail.scrollTop)
}

provide('snBacktopScrollTop', backtop.scrollTop)
provide('snBacktopScrollTo', (top: number, left: number): void => {
	scrollTo(top, left)
})
```

### 组件化滚动容器（推荐）

`sn-scroll-view` / `sn-list-view` / `sn-waterflow` 的完整做法：既 provide 响应式滚动位置，又把 `registerBacktop` 通过 `defineExpose` 暴露出去，兼容 `sn-backtop` 的 `target` 显式绑定。

```typescript
const backtopCtx = useBacktop()

provide('snBacktopScrollTop', backtopCtx.scrollTop)
provide('snBacktopScrollTo', (top: number, left: number): void => {
	scrollTo(top, left)
})

function onScroll(e: UniScrollEvent): void {
	emit('scroll', e)
	backtopCtx.notifyBacktop(e.detail.scrollTop)
}

defineExpose({
	scrollTo,
	registerBacktop: backtopCtx.registerBacktop,
	startRefresh,
	stopRefresh
})
```

### 显式 target 绑定

当 `sn-backtop` 与容器不构成 provide/inject 链时（如跨层级），它会调用容器的 `registerBacktop` 注册回调。容器侧只需保证该方法已通过 `defineExpose` 暴露：

```vue
<sn-scroll-view ref="scrollRef" class="scroll-box">
	<sn-backtop target="scrollRef"></sn-backtop>
</sn-scroll-view>
```

### 使用要点

- 每次滚动必须调用 `notifyBacktop`，它同时负责更新 `scrollTop` 与通知全部已注册回调；只更新其中一项会导致按钮显隐或回顶位置不同步。
- provide 的键为 `'snBacktopScrollTop'`（传 `backtop.scrollTop`，即 `Ref<number>`）与 `'snBacktopScrollTo'`（传 `(top, left) => void` 的回顶方法），`sn-backtop` 端以 `inject` 取用。
- `registerBacktop` 需通过 `defineExpose` 暴露，`sn-backtop` 内部以 `$callMethod('registerBacktop', ...)` 调用；这也是它比 provide 响应式位置更"兜底"的一条路径。
- 自动查找顺序为「先同级、后父级」；`target` 可传父作用域中的 ref 名，或元素 id（Web 端也支持选择器与原生 scroll 监听）。
- 框架已在 `sn-scroll-view` / `sn-list-view` / `sn-waterflow` / `sn-page` 中内置该 hook。日常使用直接组合这些容器与 `sn-backtop` 即可，**仅在开发自定义滚动容器时**才需要自行接入。
- `scrollTop` 为 `Ref<number>`，除供 `sn-backtop` 判断显隐外，也可在容器外部用于吸顶导航、滚动进度条等联动。
