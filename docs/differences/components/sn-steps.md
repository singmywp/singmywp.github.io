# sn-steps

> 旧版组件：无（v2 新增）

**旧版状态**：1.1.6 无此组件。

**差异明细**：

- v2 全新组件，与 sn-step 组合使用，通过 provide/inject 将容器配置统一下发到各步骤项
- 提供 `v-model` 当前步骤索引与 `change` 事件，支持点击切换（`selectable`）
- 支持横向 / 竖向（`vertical`）、圆点（default）/ 点状（`type="dot"`）两种形态
- 提供当前步骤状态 `status`（类型 SnStepStatus：`wait` \| `finish` \| `process` \| `error`），步骤项可用 `status` 单独覆盖
- 提供多组 externalStyle/Class（step / title / content / line / custom）
- sn-step 提供 `title` / `content` / `icon` 属性与 `icon`（作用域，可访问 status）/ `title` / `content` / `extra` 插槽
