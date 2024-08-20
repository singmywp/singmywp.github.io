import{_ as d,D as e,c as a,I as s,a5 as o,o as i}from"./chunks/framework.BhjPWYS5.js";const m=JSON.parse('{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-backtop.md","filePath":"components/sn-backtop.md"}'),n={name:"components/sn-backtop.md"},c=o(`<h1 id="backtop-回到顶部" tabindex="-1">Backtop 回到顶部 <a class="header-anchor" href="#backtop-回到顶部" aria-label="Permalink to &quot;Backtop 回到顶部&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>用于长页面，滑动一定距离后，出现回到顶部按钮，点击按钮快速返回顶部。自动绑定同级或父级 <code>sn-scroll</code>/<code>sn-longlist</code>/<code>sn-page</code>（不可用作 <code>sn-longlist</code> 子节点）</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-backtop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-backtop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-page</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>icon</td><td>回到顶部按钮内部图标</td><td>String</td><td><code>skip-up-line</code></td><td>-</td></tr><tr><td>shape</td><td>回到顶部按钮形状</td><td>String</td><td><code>circle</code></td><td><code>circle</code> | <code>square</code></td></tr><tr><td>type</td><td>回到顶部按钮主题样式类型</td><td>String</td><td><code>primary</code></td><td><code>info</code> |<code>primary</code> |<code>success</code> |<code>error</code> | <code>warning</code></td></tr><tr><td>level</td><td>回到顶部按钮等级</td><td>String</td><td><code>first</code></td><td><code>first</code> |<code>second</code> |<code>third</code> | <code>least</code></td></tr><tr><td>bgColor</td><td>回到顶部按钮背景颜色，设置后将覆盖 <code>type</code> 和 <code>level</code> 所设置的主题色</td><td>String</td><td>-</td><td>-</td></tr><tr><td>zIndex</td><td>回到顶部按钮的 <code>z-index</code></td><td>Number</td><td><code>$floatButton</code></td><td>-</td></tr><tr><td>aniTime</td><td>回到顶部按钮动画时长</td><td>Number</td><td><code>$normal</code></td><td>-</td></tr><tr><td>size</td><td>回到顶部按钮尺寸</td><td>String</td><td><code>50px</code></td><td>-</td></tr><tr><td>top</td><td>滚动条滑动多少距离时显示，单位 <code>px</code></td><td>Number</td><td><code>400</code></td><td>-</td></tr><tr><td>right</td><td>回到顶部按钮距右边界距离，单位 <code>px</code></td><td>Number</td><td><code>30</code></td><td>-</td></tr><tr><td>bottom</td><td>回到顶部按钮距下边界距离，单位 <code>px</code></td><td>Number</td><td><code>100</code></td><td>-</td></tr><tr><td>iconColor</td><td>回到顶部按钮内部图标颜色</td><td>String</td><td>-</td><td>-</td></tr><tr><td>iconSize</td><td>回到顶部按钮内部图标大小</td><td>String</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>是否禁用</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>customStyle</td><td>自定义回到顶部按钮样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>click</td><td><code>(e: UniEvent) =&gt; void</code></td><td>点击按钮时触发</td></tr></tbody></table>`,9);function r(l,h,p,k,E,g){const t=e("DemoPhone");return i(),a("div",null,[c,s(t,{name:"sn-backtop"})])}const u=d(n,[["render",r]]);export{m as __pageData,u as default};
