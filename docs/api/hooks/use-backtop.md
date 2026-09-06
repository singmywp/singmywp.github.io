# useBacktop

滚动容器与返回顶部联动机制。`sn-scroll-view` / `sn-list-view` / `sn-waterflow` / `sn-page` 等滚动容器复用此 hook，通过 provide/inject 与 `sn-backtop` 联动。

从对应源文件导入：

```typescript
import { useBacktop } from '@/uni_modules/sinle-ui/core/private/use-backtop.uts'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| scrollTop | Ref\\<number\\> | 当前纵向滚动距离（px） |
| registerBacktop | (update: (scrollTop: number) => void) => void | 注册滚动更新回调（`sn-backtop` 显式 target 绑定时调用） |
| notifyBacktop | (top: number) => void | 容器在 scroll 事件中调用，同步 `scrollTop` 并通知全部已注册回调 |

## 工作机制

- 滚动容器在 scroll 事件中调用 `notifyBacktop(top)`：既更新响应式 `scrollTop`，也通知所有已注册回调。
- `sn-backtop` 通过 inject 拿到容器 hook 实例，读取 `scrollTop` 决定是否显示；未通过 provide 链绑定时（显式 `target` 指定容器）经 `registerBacktop` 注册回调获取滚动位置。
