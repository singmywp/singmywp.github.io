import{_ as d,D as e,c as i,I as a,a5 as s,o}from"./chunks/framework.BhjPWYS5.js";const b=JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-switch.md","filePath":"components/sn-switch.md"}'),r={name:"components/sn-switch.md"},l=s(`<h1 id="switch-开关" tabindex="-1">Switch 开关 <a class="header-anchor" href="#switch-开关" aria-label="Permalink to &quot;Switch 开关&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>跟官方的很相似，但扩展了一些功能</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-switch</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model</td><td>当前开关状态</td><td>Boolean</td><td><code>false</code></td><td>-</td></tr><tr><td>width</td><td>开关宽度</td><td>String</td><td><code>50px</code></td><td>-</td></tr><tr><td>height</td><td>开关高度</td><td>String</td><td><code>25px</code></td><td>-</td></tr><tr><td>text</td><td>开关文本内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>icon</td><td>开关图标名称</td><td>String</td><td>-</td><td>-</td></tr><tr><td>iconSize</td><td>开关图标大小</td><td>String</td><td>-</td><td>-</td></tr><tr><td>padding</td><td>开关内边距</td><td>String</td><td><code>5px</code></td><td>-</td></tr><tr><td>borderRadius</td><td>开关边框圆角</td><td>String</td><td><code>$circle</code></td><td>-</td></tr><tr><td>bgColor</td><td>开关背景颜色</td><td>String</td><td><code>$line</code></td><td>-</td></tr><tr><td>activeBgColor</td><td>开启时背景颜色</td><td>String</td><td><code>$primary</code></td><td>-</td></tr><tr><td>disabledBgColor</td><td>禁用状态背景颜色</td><td>String</td><td><code>$disabled</code></td><td>-</td></tr><tr><td>disabledActiveBgColor</td><td>禁用状态下开启时背景颜色</td><td>String</td><td><code>$disabledDark</code></td><td>-</td></tr><tr><td>blockColor</td><td>小球颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>activeBlockColor</td><td>开启时小球颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>disabledBlockColor</td><td>禁用状态小球颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>disabledActiveBlockColor</td><td>禁用状态下开启时的小球颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>blockBorderRadius</td><td>小球圆角大小</td><td>String</td><td><code>$circle</code></td><td>-</td></tr><tr><td>textColor</td><td>开关文本颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>textSize</td><td>开关文本大小</td><td>String</td><td><code>$2</code></td><td>-</td></tr><tr><td>loading</td><td>是否进入加载状态</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>disabled</td><td>是否禁用开关</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>customStyle</td><td>自定义开关样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;"><code>(value: boolean) =&gt; void</code></td><td style="text-align:left;">状态改变时触发</td></tr></tbody></table>`,9);function n(c,h,p,k,g,E){const t=e("DemoPhone");return o(),i("div",null,[l,a(t,{name:"sn-switch"})])}const S=d(r,[["render",n]]);export{b as __pageData,S as default};
