import{_ as s,D as i,c as a,I as l,a5 as e,o as n}from"./chunks/framework.BhjPWYS5.js";const x=JSON.parse('{"title":"Grid 宫格布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-grid.md","filePath":"components/sn-grid.md"}'),h={name:"components/sn-grid.md"},d=e(`<h1 id="grid-宫格布局" tabindex="-1">Grid 宫格布局 <a class="header-anchor" href="#grid-宫格布局" aria-label="Permalink to &quot;Grid 宫格布局&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>一般用于同时展示多个同类项目</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;项目1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;项目2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;项目3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      		&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;项目4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  		&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-grid-group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p><strong>sn-grid-group</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">col</td><td style="text-align:left;">宫格布局列数</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>4</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">宫格布局子项不完全时的对齐方式</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>left</code></td><td style="text-align:left;"><code>left</code> | <code>center</code> | <code>right</code></td></tr><tr><td style="text-align:left;">customStyle</td><td style="text-align:left;">自定义宫格布局样式</td><td style="text-align:left;">UTSJSONObject</td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">-</td></tr></tbody></table><p><strong>sn-grid-item</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">bgColor</td><td style="text-align:left;">宫格布局背景颜色</td><td style="text-align:left;">String</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">customStyle</td><td style="text-align:left;">自定义宫格布局子项样式</td><td style="text-align:left;">UTSJSONObject</td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><p><strong>sn-grid-group</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">在这里放置子组件 <code>sn-grid-item</code></td></tr></tbody></table><p><strong>sn-grid-item</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">宫格布局子项内部放置内容。</td></tr></tbody></table>`,15);function k(p,E,r,g,y,o){const t=i("DemoPhone");return n(),a("div",null,[d,l(t,{name:"sn-grid"})])}const f=s(h,[["render",k]]);export{x as __pageData,f as default};
