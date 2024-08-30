import{_ as d,D as e,c as o,I as a,a5 as i,o as s}from"./chunks/framework.BhjPWYS5.js";const m=JSON.parse('{"title":"Transition 过渡动画","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-transition.md","filePath":"components/sn-transition.md"}'),n={name:"components/sn-transition.md"},r=i('<h1 id="transition-过渡动画" tabindex="-1">Transition 过渡动画 <a class="header-anchor" href="#transition-过渡动画" aria-label="Permalink to &quot;Transition 过渡动画&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>用于实现元素的过渡动画效果。</li><li>可通过不同的模式和动画时长自定义动画效果。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-transition</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载demo查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>show</td><td>是否显示元素</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>placed</td><td>元素隐藏时是否占位</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>mode</td><td>动画模式</td><td>String</td><td><code>fade</code></td><td><code>fade</code> | <code>zoom</code> | <code>fadeZoom</code> | <code>fadeUp</code> | <code>fadeRight</code> | <code>fadeDown</code> | <code>fadeLeft</code> | <code>slideUp</code> | <code>slideRight</code> | <code>slideDown</code> | <code>slideLeft</code></td></tr><tr><td>aniTime</td><td>动画时长（单位：毫秒）</td><td>Number</td><td><code>$long</code></td><td>-</td></tr><tr><td>timingFunction</td><td>动画时间函数</td><td>String</td><td><code>ease-out</code></td><td>-</td></tr><tr><td>customStyle</td><td>自定义样式</td><td>Object</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>beforeEnter</td><td><code>()=&gt;void</code></td><td>动画开始前触发</td></tr><tr><td>enter</td><td><code>()=&gt;void</code></td><td>动画开始时触发</td></tr><tr><td>afterEnter</td><td><code>()=&gt;void</code></td><td>动画开始后触发</td></tr><tr><td>beforeLeave</td><td><code>()=&gt;void</code></td><td>动画结束前前触发</td></tr><tr><td>leave</td><td><code>()=&gt;void</code></td><td>动画结束时触发</td></tr><tr><td>afterLeave</td><td><code>()=&gt;void</code></td><td>动画结束后触发</td></tr><tr><td>transitionend</td><td><code>()=&gt;void</code></td><td>每个过渡动画阶段结束时触发</td></tr></tbody></table>',9);function c(h,l,p,k,g,u){const t=e("DemoPhone");return s(),o("div",null,[r,a(t,{name:"sn-transition"})])}const f=d(n,[["render",c]]);export{m as __pageData,f as default};
