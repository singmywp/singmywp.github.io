# 注意事项

> [!important]
> 请仔细阅读此页内容，对于正确使用 SinleUI **非常重要**。

1. SinleUI 推荐**使用 `px` 作为基本长度单位**。SinleUI 部分组件涉及布局计算，现阶段对于其他单位如 `rpx` 、`%` 的支持并不太好（下期会改进）。因此，除非设置 css 或组件行内样式 `style`，否则不推荐在 SinleUI 组件中使用 `px` 外的长度单位。
2. SinleUI 推荐**使用 `ms` 作为基本时长单位**。SinleUI 部分组件涉及时长处理，默认以 `ms` 作为单位。因此，除非设置 css 或组件行内样式 `style`，否则不推荐在 SinleUI 组件中使用 `ms` 外的时长单位。
3. SinleUI 框架内置字体体积较大，如不需要可自行删除（**勿删 remixicon**）
4. 获取组件 Ref 实例时，如果是选项式 API，使用 `this.$refs[xxxx]` 获取即可。<br />如果是组合式 API，必须设置一个**与组件 `ref` 属性同名**的、**组件实例类型**的响应式对象。例如：
   ```vue
   <template>
     <sn-modal ref="modalEle" title="标题" content="内容"></sn-modal>
   </template>
   <script setup>
     const modalEle = ref(null as SnModalComponentPublicInstance | null)
   </script>
   ```
5. 调用组件的方法需要通过 `ref` 获取组件实例，且**必须保证组件已渲染**。
   例如：
   ```vue
   <template>
     <sn-modal ref="modalEle" title="标题" content="内容"></sn-modal>
   </template>
   <script setup>
     const modalEle = ref(null as SnModalComponentPublicInstance | null)

     // onReady 可以保证 DOM 已渲染
     onReady(()=>{
       // 示例1 - 安全调用，组件未渲染也不会报错
       modalEle.value?.open?.()

       // 示例2 - 显性判空，仅当组件已渲染时调用
       if (modalEle.value != null) {
           modalEle.value!.close()
       }
     }) 
   </script>
   ```
