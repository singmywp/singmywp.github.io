# useStyle

获取当前风格（Style，应用皮肤）与切换风格。

```typescript
import { useStyle } from '@/uni_modules/sinle-ui'
```

## 返回值

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| style | Ref\<[[SnStyle@api]]\> | 当前完整风格对象 |
| styleId | Ref\\<string\\> | 当前风格 id |
| availableStyles | Ref\\<string[]\\> | 全部已注册的风格 id 列表 |
| setStyle | (id: string) => boolean | 切换风格，目标 id 存在时返回 `true` |

:::type-fields SnStyle

一套完整风格（皮肤）对象，即内置风格文件导出的结构。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| id | String | 风格唯一 id，如 `'default'` |
| colorBases | [[SnColorBases@api]] | 亮/暗两套颜色集 |
| topbarHeight | String | 导航栏高度（不含状态栏） |
| lightBgColor | String | 亮色模式页面默认背景色 |
| darkBgColor | String | 暗色模式页面默认背景色 |
| marginFactor | Number | 外间距乘数 |
| paddingFactor | Number | 内间距乘数 |
| radiusFactor | Number | 圆角乘数 |
| fontsizeFactor | Number | 字号乘数 |
| aniTimeFactor | Number | 动画时长乘数 |
| aniTimeShort | Number | 基础短动画时长（ms） |
| aniTimeNormal | Number | 基础标准动画时长（ms） |
| aniTimeLong | Number | 基础长动画时长（ms） |

:::type-fields SnColorBases

一套风格中亮/暗两套颜色集的容器。

| 字段 | 类型 | 描述 |
| :--- | :--- | :--- |
| light | [SnColorBase](/api/types/api#sncolorbase) | 亮色主题颜色集 |
| dark | [SnColorBase](/api/types/api#sncolorbase) | 暗色主题颜色集 |

---

:::

---

:::

## 示例

```vue
<script setup>
	const { styleId, availableStyles, setStyle } = useStyle()
</script>
```
