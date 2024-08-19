import{_ as d,D as e,c as o,I as a,a5 as s,o as r}from"./chunks/framework.BhjPWYS5.js";const b=JSON.parse('{"title":"Toast 轻提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-toast.md","filePath":"components/sn-toast.md"}'),i={name:"components/sn-toast.md"},n=s('<h1 id="toast-轻提示" tabindex="-1">Toast 轻提示 <a class="header-anchor" href="#toast-轻提示" aria-label="Permalink to &quot;Toast 轻提示&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>很常见的吐司，但可玩性较高。通过 ref 方法使用。</li><li>提供 15+ 配置属性，支持 props 和方法参数两种配置方法，能够面对绝大部分使用场景。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-toast</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;toastEle&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;这是一个提示信息&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-toast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载demo查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>text</td><td>提示文本内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>bgColor</td><td>轻提示背景颜色</td><td>String</td><td><code>$toast</code></td><td>-</td></tr><tr><td>overlay</td><td>是否显示遮罩层（防穿透）</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>position</td><td>轻提示位置</td><td>String</td><td><code>center</code></td><td><code>center</code> | <code>top</code> | <code>bottom</code></td></tr><tr><td>duration</td><td>轻提示显示时间（单位：毫秒）</td><td>Number</td><td><code>2000</code></td><td>-</td></tr><tr><td>textSize</td><td>提示文本字体大小</td><td>String</td><td><code>$2</code></td><td>-</td></tr><tr><td>textColor</td><td>提示文本颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>borderRadius</td><td>轻提示圆角大小</td><td>String</td><td><code>$normal</code></td><td>-</td></tr><tr><td>padding</td><td>轻提示内边距</td><td>String</td><td><code>12px 15px</code></td><td>-</td></tr><tr><td>icon</td><td>提示图标名称</td><td>String</td><td>-</td><td>-</td></tr><tr><td>iconSize</td><td>图标大小</td><td>String</td><td><code>$5</code></td><td>-</td></tr><tr><td>iconColor</td><td>图标颜色</td><td>String</td><td><code>#fff</code></td><td>-</td></tr><tr><td>textAlign</td><td>文本对齐方式</td><td>String</td><td><code>center</code></td><td>-</td></tr><tr><td>loading</td><td>是否显示加载中的图标</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>textLines</td><td>文本最大行数</td><td>Number</td><td><code>0</code></td><td>-</td></tr><tr><td>customStyle</td><td>自定义轻提示样式</td><td>Object</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>参数</th><th>返回值</th><th>描述</th></tr></thead><tbody><tr><td>show</td><td>-</td><td>-</td><td>按照组件 props 配置显示轻提示。</td></tr><tr><td>configShow</td><td>(param: <a href="/api/types/components#sntoastparams">SnToastParams</a> | null)</td><td>-</td><td>按照传入的参数配置显示轻提示，无需改动属性</td></tr><tr><td>close</td><td>-</td><td>-</td><td>关闭轻提示（设置 <code>loading=&quot;true&quot;</code> 时需要通过此方法关闭）</td></tr></tbody></table>',9);function c(h,l,p,k,g,u){const t=e("DemoPhone");return r(),o("div",null,[n,a(t,{name:"sn-toast"})])}const E=d(i,[["render",c]]);export{b as __pageData,E as default};
