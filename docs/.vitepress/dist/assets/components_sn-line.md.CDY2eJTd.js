import{_ as d,D as e,c as a,I as s,a5 as i,o as n}from"./chunks/framework.BhjPWYS5.js";const m=JSON.parse('{"title":"Line 分割线","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-line.md","filePath":"components/sn-line.md"}'),o={name:"components/sn-line.md"},r=i(`<h1 id="line-分割线" tabindex="-1">Line 分割线 <a class="header-anchor" href="#line-分割线" aria-label="Permalink to &quot;Line 分割线&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>用于在页面中创建分割线，可以包含文本。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-line</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是分割线&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>width</td><td>分割线宽度</td><td>String</td><td><code>100%</code></td><td>-</td></tr><tr><td>height</td><td>分割线高度</td><td>String</td><td><code>1px</code></td><td>-</td></tr><tr><td>lineColor</td><td>分割线颜色</td><td>String</td><td><code>$line</code></td><td>-</td></tr><tr><td>textColor</td><td>分割线文本颜色</td><td>String</td><td><code>$lineText</code></td><td>-</td></tr><tr><td>margin</td><td>分割线外边距</td><td>String</td><td><code>10px 0</code></td><td>-</td></tr><tr><td>dashed</td><td>是否显示为虚线</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>dot</td><td>是否显示为点状</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>text</td><td>分割线文本内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>textSize</td><td>分割线文本大小</td><td>String</td><td><code>$1</code></td><td>-</td></tr><tr><td>borderRadius</td><td>分割线圆角大小</td><td>String</td><td>-</td><td>-</td></tr><tr><td>customStyle</td><td>自定义分割线样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr><tr><td>customTextStyle</td><td>自定义分割线文本样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>替换分割线内部原有的文本，可以是任意组件</td></tr></tbody></table>`,9);function l(h,c,p,k,E,g){const t=e("DemoPhone");return n(),a("div",null,[r,s(t,{name:"sn-line"})])}const _=d(o,[["render",l]]);export{m as __pageData,_ as default};
