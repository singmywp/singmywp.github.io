import{_ as d,D as s,c as e,I as i,a5 as a,o as n}from"./chunks/framework.BhjPWYS5.js";const u=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-drawer.md","filePath":"components/sn-drawer.md"}'),l={name:"components/sn-drawer.md"},h=a(`<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>通常用于半屏窗口的场景。</li><li>请注意区分 <code>sn-popup</code> 和 <code>sn-drawer</code>。<code>sn-popup</code>只控制动画和显隐逻辑，UI 需要自己写。而 <code>sn-drawer</code> 则是在 <code>sn-popup</code> 的基础上加了一层 UI 模板。</li><li>请注意区分 <code>sn-drawer</code>和 <code>sn-float-board</code>。 <code>sn-drawer</code>是弹出层，需要调用方法才能显示；而 <code>sn-float-board</code> 则始终显示，且可以通过用户手势操作完全显露。（可以把 <code>sn-drawer</code> 理解为关闭的抽屉， <code>sn-float-board</code> 则是半开的抽屉）</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-drawer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;drawerEle&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-drawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;打开&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> drawerEle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SnDrawerComponentPublicInstance</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    drawerEle.value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>position</td><td>抽屉显示的位置</td><td>String</td><td><code>bottom</code></td><td><code>top</code> | <code>right</code> | <code>bottom</code> | <code>left</code></td></tr><tr><td>showLine</td><td>是否显示指示条</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>slideClose</td><td>是否启用滑动关闭</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>width</td><td>当 <code>position</code> 为 <code>left</code> | <code>right</code> 时抽屉的宽度</td><td>String</td><td><code>300px</code></td><td>-</td></tr><tr><td>height</td><td>当 <code>position</code> 为 <code>top</code> | <code>bottom</code> 时抽屉的高度</td><td>String</td><td><code>300px</code></td><td>-</td></tr><tr><td>slideHeight</td><td>抽屉纵向滑动阈值（达到阈值则关闭）</td><td>String</td><td><code>100px</code></td><td>-</td></tr><tr><td>slideWidth</td><td>抽屉横向滑动阈值（达到阈值则关闭）</td><td>String</td><td><code>100px</code></td><td>-</td></tr><tr><td>bgColor</td><td>抽屉的背景颜色</td><td>String</td><td><code>$front</code></td><td>-</td></tr><tr><td>lineColor</td><td>抽屉指示条颜色</td><td>String</td><td><code>$lineText</code></td><td>-</td></tr><tr><td>padding</td><td>抽屉内边距</td><td>String</td><td><code>25px 15px 10px 15px</code></td><td>-</td></tr><tr><td>borderRadius</td><td>抽屉圆角大小</td><td>String</td><td><code>$xlarge</code></td><td>-</td></tr><tr><td>aniTime</td><td>抽屉显示/关闭动画时长（单位 <code>ms</code>）</td><td>Number</td><td><code>$long</code></td><td>-</td></tr><tr><td>preventBack</td><td>抽屉显示时是否阻止页面返回事件</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>maskClose</td><td>是否启用点击遮罩关闭</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>maskOpacity</td><td>遮罩透明度</td><td>Number</td><td><code>0.3</code></td><td>-</td></tr><tr><td>customStyle</td><td>自定义抽屉样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">在抽屉内部放置组件</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td><code>() =&gt; void</code></td><td>打开抽屉时触发</td></tr><tr><td>close</td><td><code>() =&gt; void</code></td><td>关闭抽屉时触发</td></tr><tr><td>clickMask</td><td><code>() =&gt; void</code></td><td>（仅 <code>maskClose</code> 为<code>true</code> 时）点击遮罩时触发</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">open</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">打开抽屉</td></tr><tr><td style="text-align:left;">close</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">关闭抽屉</td></tr></tbody></table>`,13);function o(r,p,k,c,E,g){const t=s("DemoPhone");return n(),e("div",null,[h,i(t,{name:"sn-drawer"})])}const b=d(l,[["render",o]]);export{u as __pageData,b as default};
