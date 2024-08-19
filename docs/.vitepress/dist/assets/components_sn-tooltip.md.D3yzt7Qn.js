import{_ as d,D as e,c as o,I as a,a5 as i,o as s}from"./chunks/framework.BhjPWYS5.js";const u=JSON.parse('{"title":"Tooltip 提示框","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-tooltip.md","filePath":"components/sn-tooltip.md"}'),r={name:"components/sn-tooltip.md"},l=i('<h1 id="tooltip-提示框" tabindex="-1">Tooltip 提示框 <a class="header-anchor" href="#tooltip-提示框" aria-label="Permalink to &quot;Tooltip 提示框&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>也许当你想要动态介绍某个按钮的用途时会用到它</li><li>可自定义宽度、高度、背景颜色等。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-tooltip</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是一个提示信息&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-tooltip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载demo查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>width</td><td>提示框宽度</td><td>String</td><td>-</td><td>-</td></tr><tr><td>height</td><td>提示框高度</td><td>String</td><td>-</td><td>-</td></tr><tr><td>borderRadius</td><td>提示框圆角大小</td><td>String</td><td><code>12px</code></td><td>-</td></tr><tr><td>position</td><td>提示框位置</td><td>String</td><td><code>top-start</code></td><td><code>top-start</code> | <code>top</code> | <code>top-end</code> | <code>bottom-start</code> | <code>bottom</code> | <code>bottom-end</code> | <code>left-start</code> | <code>left</code> | <code>left-end</code> | <code>right-start</code> | <code>right</code> | <code>right-end</code></td></tr><tr><td>padding</td><td>提示框内边距</td><td>String</td><td><code>10px 10px</code></td><td>-</td></tr><tr><td>bgColor</td><td>提示框背景颜色</td><td>String</td><td>-</td><td>-</td></tr><tr><td>boxShadow</td><td>提示框阴影</td><td>String</td><td>-</td><td>-</td></tr><tr><td>customStyle</td><td>自定义提示框容器样式</td><td>Object</td><td><code>{}</code></td><td>-</td></tr><tr><td>customTooltipStyle</td><td>自定义提示框样式</td><td>Object</td><td><code>{}</code></td><td>-</td></tr><tr><td>customTriggerStyle</td><td>自定义触发器样式</td><td>Object</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">trigger</td><td style="text-align:left;">放置触发组件（例如一个 Button），点击组件自动弹出提示</td></tr><tr><td style="text-align:left;">default</td><td style="text-align:left;">在弹出提示内部放置组件</td></tr></tbody></table>',9);function n(c,h,p,g,k,b){const t=e("DemoPhone");return s(),o("div",null,[l,a(t,{name:"sn-tooltip"})])}const _=d(r,[["render",n]]);export{u as __pageData,_ as default};
