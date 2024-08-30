import{_ as t,c as e,o as l,a5 as a}from"./chunks/framework.BhjPWYS5.js";const x=JSON.parse('{"title":"View  视图容器","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-view.md","filePath":"components/sn-view.md"}'),n={name:"components/sn-view.md"},i=a(`<h1 id="view-视图容器" tabindex="-1">View 视图容器 <a class="header-anchor" href="#view-视图容器" aria-label="Permalink to &quot;View  视图容器&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>用于包裹各种元素内容。</li><li>用法与内置 <code>view</code> 组件无异。更好地设置组件样式；扩展了组件的手势事件，相当于简化版的 <code>sn-e-gesture</code></li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;sn-button text=&quot;这是一个由 sn-view 包裹的按钮&quot;&gt;&lt;/sn-button&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="手势事件" tabindex="-1">手势事件 <a class="header-anchor" href="#手势事件" aria-label="Permalink to &quot;手势事件&quot;">​</a></h2><p><code>sn-view</code> 支持 按下（down）、单击（click）、长按（longpress）、双击（dbclick）、手指落下（touchstart）、手指移动（touchmove）、手指抬起（touchend）、触摸打断（touchcancel）等多种手势事件。</p><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">loading</td><td style="text-align:left;">是否显示加载动画</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;">bgColor</td><td style="text-align:left;">背景颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">borderRadius</td><td style="text-align:left;">圆角大小</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">margin</td><td style="text-align:left;">外边距</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">padding</td><td style="text-align:left;">内边距</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">boxShadow</td><td style="text-align:left;">阴影</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">customStyle</td><td style="text-align:left;">自定义样式</td><td style="text-align:left;">UTSJSONObject</td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">click</td><td style="text-align:left;">(event: <a href="/api/types/api#snpointerevent">SnPointerEvent</a>) =&gt; void</td><td style="text-align:left;">点击事件</td></tr><tr><td style="text-align:left;">longpress</td><td style="text-align:left;">(event: <a href="/api/types/api#sntouchevent">SnTouchEvent</a>) =&gt; void</td><td style="text-align:left;">长按事件</td></tr><tr><td style="text-align:left;">dbclick</td><td style="text-align:left;">(event: <a href="/api/types/api#snpointerevent">SnPointerEvent</a>) =&gt; void</td><td style="text-align:left;">双击事件</td></tr><tr><td style="text-align:left;">touchstart</td><td style="text-align:left;">(event: <a href="/api/types/api#sntouchevent">SnTouchEvent</a>) =&gt; void</td><td style="text-align:left;">手指落下事件</td></tr><tr><td style="text-align:left;">touchmove</td><td style="text-align:left;">(event: <a href="/api/types/api#sntouchevent">SnTouchEvent</a>) =&gt; void</td><td style="text-align:left;">手指移动事件</td></tr><tr><td style="text-align:left;">touchend</td><td style="text-align:left;">(event: <a href="/api/types/api#sntouchevent">SnTouchEvent</a>) =&gt; void</td><td style="text-align:left;">手指抬起事件</td></tr><tr><td style="text-align:left;">touchcancel</td><td style="text-align:left;">(event: <a href="/api/types/api#sntouchevent">SnTouchEvent</a>) =&gt; void</td><td style="text-align:left;">触摸打断事件</td></tr><tr><td style="text-align:left;">down</td><td style="text-align:left;">(event: <a href="/api/types/api#snpointerevent">SnPointerEvent</a>) =&gt; void</td><td style="text-align:left;">按下事件</td></tr></tbody></table>`,11),d=[i];function s(o,r,g,h,c,f){return l(),e("div",null,d)}const p=t(n,[["render",s]]);export{x as __pageData,p as default};
