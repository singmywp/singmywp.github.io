# useHistory

增量操作日志式的撤销/重做存储引擎。

`useHistory` 把「一步操作」抽象为一条极轻量的记录 `[[SnHistoryStep@api]]`（`kind` / `ref` / `weight` 三个数字），只保存这一步在宿主文档中的定位与权重，**不保存文档快照、不复制宿主载荷**。时间线存放在环形缓冲中并按游标推进，撤销与重做只移动游标，定位复杂度为 O(1)；超出最大步数或最大权重预算时从最旧一步开始淘汰并立即释放其权重，不做数组整体移位。框架内 `sn-sketchpad`、`sn-signature` 的撤销/重做即由本引擎驱动。

它解决的是画板类场景里最常见的两个存储问题：一是把整幅画布或整个文档快照进历史导致内存随步数线性膨胀，二是把历史日志放进框架响应式状态导致每次读写都走代理陷阱。本引擎的时间线是调用方作用域内的普通数据，只把 `canUndo` / `canRedo` / `stats` 这类标量以 `computed` 暴露给视图层。

```typescript
import { useHistory } from '@/uni_modules/sinle-ui'
```

## 获取方式

```typescript
import { useHistory } from '@/uni_modules/sinle-ui'

const history = useHistory({
	maxSteps: () => 20,
	maxWeight: () => 120000
})

history.push({ kind: 0, ref: 0, weight: 12 } as SnHistoryStep)
history.undo()
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| stats | ComputedRef<[[SnHistoryStats@api]]> | 当前时间线统计：游标位置、总步数、累计权重、已淘汰步数 |
| canUndo | ComputedRef\<boolean\> | 是否可撤销 |
| canRedo | ComputedRef\<boolean\> | 是否可重做 |
| push | (step: [[SnHistoryStep@api]]) => void | 记录一步：截断重做侧后追加，超限自动淘汰最旧步 |
| undo | () => [[SnHistoryStep@api]] \| null | 回退一步并返回该步；无可回退时返回 null |
| redo | () => [[SnHistoryStep@api]] \| null | 前进一步并返回该步；无可前进时返回 null |
| peekUndo | () => [[SnHistoryStep@api]] \| null | 读取待撤销的一步但不移动游标 |
| peekRedo | () => [[SnHistoryStep@api]] \| null | 读取待重做的一步但不移动游标 |
| trim | () => void | 按当前的 `maxSteps` / `maxWeight` 立即裁剪时间线，用于上限被调小后即时生效 |
| reset | () => void | 清空时间线，游标、权重与淘汰计数一并归零 |

:::type-fields UseHistoryOptions

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| maxSteps | () => number | 最大历史步数，取值不大于 0 时按默认值 20 处理 |
| maxWeight | () => number | 最大累计权重（内存预算），取值不大于 0 表示只按步数限制 |

:::

:::type-fields SnHistoryStep

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| kind | number | 步类型，由调用方自定义语义（框架内 0 表示「新增一笔」） |
| ref | number | 载荷引用，通常是该步在调用方文档集合中的下标 |
| weight | number | 该步权重，参与最大权重预算淘汰，常用点数或字节量估算 |

:::

:::type-fields SnHistoryStats

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| cursor | number | 当前已应用步数（游标位置） |
| total | number | 时间线内保留的总步数 |
| weight | number | 时间线内保留步骤的累计权重 |
| evicted | number | 因超出步数或权重预算被淘汰的步数 |

:::

## 存储模型

时间线用「环形缓冲 + 游标」表达，而不是「撤销栈 + 重做栈」两个数组：

| 机制 | 做法 | 相对朴素实现的收益 |
| :--- | :--- | :--- |
| 增量日志 | 每条记录只存 `kind` / `ref` / `weight`，载荷由调用方自持 | 历史内存与「变更量」成正比，而不是与「文档总量」成正比 |
| 游标 | `undo` / `redo` 只移动游标，记录原地不动 | 无需在两个栈之间搬运对象，也无需按下标查找目标 |
| 环形缓冲 | 淘汰只推进头部偏移，累积到阈值才做一次压缩 | 出栈是 O(1)，没有 `splice(0, n)` 的整体移位 |
| 权重预算 | 除步数外再按 `weight` 累计值淘汰 | 内存上限由「字节/点数」保证，而不是由「步数」间接保证 |
| 视窗模型 | 框架内画板用「只追加池 + 可见数量」表达文档 | 撤销/重做不搬移笔画对象，重做不再需要额外的重做栈 |

三条值得注意的语义：

- **截断时机**：只有 `push`（产生新的已提交步骤）会截断重做侧。`reset` 会清空一切，除此之外没有任何操作会隐式丢弃重做。
- **淘汰语义**：被淘汰的最旧步骤仍在宿主文档中生效，只是无法再撤销；`stats.evicted` 可用于观测是否发生过淘汰。
- **游标与淘汰的关系**：游标小于总步数（即存在可重做步骤）时发生淘汰，游标会同步回退，保证 `cursor` 始终等于「已应用步数」。

## 示例

### 用操作日志驱动画板的撤销/重做

取自框架内 `sn-sketchpad` 的用法：文档是「只追加的笔画池 + 可见数量」，每一步记录新笔画在池中的下标。

```typescript
import { useHistory } from '@/uni_modules/sinle-ui'
import type { SnHistoryStep } from '@/uni_modules/sinle-ui'

const STEP_ADD = 0

let strokes: Stroke[] = []
let visibleCount = 0

const history = useHistory({
	maxSteps: () => 20,
	maxWeight: () => 120000
})

function commitStroke(s: Stroke): void {
	if (visibleCount < strokes.length) {
		strokes.splice(visibleCount)
	}
	strokes.push(s)
	visibleCount = strokes.length
	const step: SnHistoryStep = { kind: STEP_ADD, ref: visibleCount - 1, weight: s.points.length }
	history.push(step)
}

function undo(): void {
	const step = history.undo()
	if (step == null) {
		return
	}
	visibleCount = step.ref
	repaintStrokes(step.ref)
}

function redo(): void {
	const step = history.redo()
	if (step == null) {
		return
	}
	visibleCount = step.ref + 1
	drawStroke(strokes[step.ref])
}
```

### 只读派生状态

`canUndo` / `canRedo` / `stats` 都是 `computed`，可直接绑定到按钮的禁用状态；不要在 `push` 之后手动维护布尔量。

```vue
<sn-button :disabled="!history.canUndo" @click="onUndo">{{ history.stats.total }}</sn-button>
```

## 使用要点

- `maxSteps` 与 `maxWeight` 都是读取函数而不是值：调用方传入 props 派生值后，props 变化会即时生效，无需重建 hook。
- 淘汰只在 `push` 时进行；若上限在运行期被调小并希望立刻回收多余步骤，调用一次 `trim`。
- `push` 传入的 `weight` 由调用方估算，建议与「这一笔实际占用的内存或重放成本」同量级；权重恒定时等价于只按步数限制。
- `undo` / `redo` 返回被移动的那一步，调用方据此执行最小重绘；返回 `null` 表示游标已到边界。
- `peekUndo` / `peekRedo` 只读不移动，适合在重绘前预判下一步的目标，例如判断能否用脏矩形局部重绘。
- 时间线本身不是响应式的：不要在模板里直接读取它，请通过 `stats` / `canUndo` / `canRedo` 取值。
- 引擎不持有计时器与监听器，无需在 `onUnmounted` 中清理；但调用方应在组件卸载时丢弃自己持有的文档池。
