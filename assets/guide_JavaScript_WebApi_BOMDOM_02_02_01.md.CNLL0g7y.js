import{_ as s,c as i,o as a,a2 as e}from"./chunks/framework.BLHWSx9w.js";const g=JSON.parse('{"title":"其他对象","description":"","frontmatter":{},"headers":[],"relativePath":"guide/JavaScript/WebApi/BOMDOM/02/02_01.md","filePath":"guide/JavaScript/WebApi/BOMDOM/02/02_01.md","lastUpdated":1696990534000}'),n={name:"guide/JavaScript/WebApi/BOMDOM/02/02_01.md"},l=e(`<h1 id="其他对象" tabindex="-1">其他对象 <a class="header-anchor" href="#其他对象" aria-label="Permalink to &quot;其他对象&quot;">​</a></h1><h2 id="_1-navigator" tabindex="-1">1. navigator <a class="header-anchor" href="#_1-navigator" aria-label="Permalink to &quot;1. navigator&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>Navigator</code> 接口表示用户代理的状态和标识。它允许脚本查询它和注册自己进行一些活动。可以使用只读的 <code>window.navigator</code> 属性检索 <code>navigator</code> 对象。</li></ol><h3 id="标准属性-都为只读属性" tabindex="-1">标准属性(都为只读属性) <a class="header-anchor" href="#标准属性-都为只读属性" aria-label="Permalink to &quot;标准属性(都为只读属性)&quot;">​</a></h3><ol><li><code>Navigator.cookieEnabled</code>，当忽略 <code>Cookie</code> 时返回 <code>false</code>，否则返回 <code>true</code>。</li><li><code>Navigator.geolocation</code>，返回一个 <code>Geolocation</code> 对象，据之可访问设备的地理位位置信息。</li><li><code>NavigatorConcurrentHardware.hardwareConcurrency</code>，返回可用的逻辑处理器核心数。</li><li><code>NavigatorLanguage.language</code>，返回 <code>DOMString</code> 表示用户的首先语言，通常是浏览器用户界面的语言。当未知的时，返回 <code>null</code>。</li><li><code>NavigatorLanguage.languages</code>，返回一个表示用户已知语言的 <code>DOMString</code> 数组，并按优先顺序排列。</li><li><code>Navigator.maxTouchPoints</code>，返回当前设备支持的同时触摸接触点的最大数量。</li><li><code>NavigatorOnLine.onLine</code>，返回 <code>Boolean</code> 来表明浏览器是否联网。</li><li><code>Navigator.oscpu</code>，返回当前操作系统名。</li><li><code>Navigator.serviceWorker</code>，返回 <code>ServiceWorkerContainer</code> 对象用于提供注册、删除、更新以及为了 <code>associated document</code> 的 <code>ServiceWorker</code> 对象之间的通信。</li><li><code>NavigatorStorage.storage</code>，返回用于逐个站点/逐个应用程序管理持久性权限和估计可用存储的<code>singleton StorageManager</code>对象。</li><li><code>NavigatorID.userAgent</code>，返回当前浏览器的用户代理。</li></ol><h3 id="标准方法" tabindex="-1">标准方法 <a class="header-anchor" href="#标准方法" aria-label="Permalink to &quot;标准方法&quot;">​</a></h3><ol><li><code>navigator.registerContentHandler</code>，允许网站将自己注册为给定MIME类型的可能处理程序。</li><li><code>navigator.registerProtocolHandler(scheme, url, title)</code>，允许网站将为自身注册用于打开或处理特定 URL 方案（又名协议）的能力。 <ul><li>scheme，一个包含站点希望处理的协议的字符串。例如，你可以通过传入 &quot;sms&quot; 来注册处理 SMS 文本信息链接。</li><li>url 处理器的 URL，string 类型。这个字符串应该包含一个&quot;%s&quot;的占位符，其会被将要受理的文档的 escaped 链接所替换。这个链接可能是一个真实的 URL，或者是一个电话号码，邮件地址之类的。</li><li>title 已弃用，一个用户可理解的处理器标题，标题会展示给用户。</li></ul></li><li><code>Navigator.vibrate(pattern)</code>，方法使设备（有震动硬件）产生有频率的震动。 <ul><li>若设备不支持震动，该方法将无效。若某震动方式已经在进行中（当该方法调用时），则前一个震动方式停止，新的取而代之。</li><li>该方法若因为提供无效的参数使得无法使设备震动，它将返回 false，否则返回 true。若振动方案导致长时间的震动，它会被截断。</li><li><code>pattern</code> 提供一个震动、暂停间隔的模式。每一个值表示交替震动或者暂停的毫秒数。你可以提供一个单个的值（震动一次的毫秒数）或者一个包含整数的数组。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.navigator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vibrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// vibrate for 200ms</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.navigator.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vibrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h2 id="_2-screen" tabindex="-1">2. screen <a class="header-anchor" href="#_2-screen" aria-label="Permalink to &quot;2. screen&quot;">​</a></h2><h3 id="概述-1" tabindex="-1">概述 <a class="header-anchor" href="#概述-1" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>screen</code> 接口表示一个屏幕窗口，往往指的是当前正在被渲染的 <code>window</code> 对象，可以使用 <code>window.screen</code> 获取它。</li><li>它的方法继承自其父接口 <code>EventTarget</code>，我们一般用 <code>screen</code>属性来获取和修改屏幕的相关信息。</li></ol><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><ol><li><code>Screen.availTop</code>，浏览器窗口在屏幕上的可占用空间上边距离屏幕上边界的像素值。</li><li><code>Screen.availLeft</code>，返回浏览器可用空间左边距离屏幕（系统桌面）左边界的距离。</li><li><code>Screen.availHeight</code>，返回浏览器窗口在屏幕上可占用的垂直空间，即最大高度。</li><li><code>Screen.availWidth</code>，返回浏览器窗口可占用的水平宽度（单位：像素）。</li><li><code>Screen.colorDepth</code>，返回屏幕的颜色深度<code>color depth</code>。根据 <code>CSSOM</code>( <code>CSS</code> 对象模型 ) 视图，为兼容起见，该值总为 <code>24</code>。</li><li><code>Screen.height</code>，返回屏幕的高度（单位：像素）。</li><li><code>Screen.left</code>，返回从最左边界到当前屏幕的像素值。</li><li><code>Screen.orientation</code>，返回当前屏幕的转向。</li><li><code>Screen.pixelDepth</code>，返回屏幕的位深度/色彩深度<code>bit depth</code>。根据 <code>CSSOM</code>( <code>CSS</code> 对象模型 ) 视图，为兼容起见，该值总为 <code>24</code>。</li><li><code>Screen.top</code>，返回最上边界到当前屏幕的像素值。</li><li><code>Screen.width</code>，返回屏幕的宽度。</li><li><code>Screen.mozEnabled</code>，布尔值。如果设置为 <code>false</code> 将关闭设备的屏幕。</li><li><code>Screen.mozBrightness</code>，控制设备屏幕的亮度。期望参数是 <code>0-1.0</code> 之间的浮点数。</li></ol><h2 id="_3-history" tabindex="-1">3. History <a class="header-anchor" href="#_3-history" aria-label="Permalink to &quot;3. History&quot;">​</a></h2><h3 id="概述-2" tabindex="-1">概述 <a class="header-anchor" href="#概述-2" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>History</code> 接口允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录。</li><li><code>History</code> 接口不继承于任何属性。</li></ol><h3 id="属性-1" tabindex="-1">属性 <a class="header-anchor" href="#属性-1" aria-label="Permalink to &quot;属性&quot;">​</a></h3><ol><li><code>length</code>，只读。返回一个整数，该整数表示会话历史中元素的数目，包括当前加载的页。</li><li><code>scrollRestoration</code> ，允许 <code>Web</code> 应用程序在历史导航上显式地设置默认滚动恢复行为。 <ul><li>此属性可以是自动的<code>auto</code>或者手动的<code>manual</code>。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (history.scrollRestoration) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  history.scrollRestoration </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;manual&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>state</code>，只读。返回一个表示历史堆栈顶部的状态的任意值。这是一种不必等待 <code>popstate</code> 事件而查看状态的方式。 <ul><li>如果不进行<code>pushState()</code>或<code>replaceState()</code>的调用，<code>state</code> 的值将会是 <code>null</code>。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`History.state before pushState: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">history</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 值为 null 因为我们还没有修改 history 栈</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">history.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replaceState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pushState example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;page3.html&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 现在 push 一些数据到栈里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`History.state after pushState: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">history</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">state</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 现在 state 已经有值了</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h3 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ol><li><code>back()</code>，此异步方法转到浏览器会话历史的上一页，与用户单击浏览器的<code>Back</code>按钮的行为相同。等价于<code>history.go(-1)</code>。</li><li><code>forward()</code>，此异步方法转到浏览器会话历史的下一页，与用户单击浏览器的 Forward 按钮的行为相同。等价于<code>history.go(1)</code> 。调用此方法超越浏览器历史记录中最新的页面没有效果并且不会引发异常。</li><li><code>go()</code>，通过当前页面的相对位置从浏览器历史记录异步加载页面。 <ul><li>参数为<code>-1</code>为返回上一页，参数为<code>1</code>的时候为进入下一页。</li><li>当你指定了一个越界值时，这个方法没有任何效果也不会报错。</li><li>调用没有参数的<code>go()</code>方法或者参数值为<code>0</code>时，重新载入当前页面。</li><li><code>Internet Explorer</code> 允许你指定一个字符串，而不是整数，以转到历史记录列表中的特定 <code>URL</code>。</li></ul></li><li><code>pushState(state, unused[, url])</code>，向浏览器的会话历史栈增加了一个条目。该方法是异步的，为 <code>popstate</code> 事件增加监听器，以确定导航何时完成。<code>state</code> 参数将在其中可用。该函数没有返回值。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(state, unused)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(state, unused, url)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li><code>state</code>，是一个<code>JavaScript</code>对象，其与通过<code>pushState()</code>创建的新历史条目相关联。每当用户导航到新的<code>state</code>，都会触发 <code>popstate</code>事件，并且该事件的<code>state</code>属性包含历史条目<code>state</code>对象的副本。</li><li><code>unused</code>，由于历史原因，该参数存在且不能忽略；传递一个空字符串是安全的，以防将来对该方法进行更改。</li><li><code>url</code>，可选参数，新历史条目的<code>URL</code>。新的<code>URL</code>必须与当前<code>URL</code>同源；否则<code>pushState()</code> 将抛出异常。如果该参数没有指定，则将其设置为当前文档的<code>URL</code>。</li></ul></li><li><code>replaceState(stateObj, title[, url])</code>，按指定的数据、名称和<code>URL</code>，更新<code>history</code>栈上最新的条目。 <ul><li><code>stateObj</code>，状态对象是一个 <code>JavaScript</code> 对象，它与传递给 <code>replaceState</code> 方法的历史记录实体相关联。</li><li><code>title</code>，大部分浏览器忽略这个参数, 将来可能有用。在此处传递空字符串应该可以防止将来对方法的更改。或者，你可以为该状态传递简短标题。</li><li><code>url</code>，历史记录实体的<code>URL</code>。新的<code>URL</code>跟当前的<code>URL</code>必须是同源，否则 <code>replaceState</code> 抛出一个异常。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stateObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">history.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stateObj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> stateObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">history.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pushState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(stateObj, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><h2 id="_4-location" tabindex="-1">4. location <a class="header-anchor" href="#_4-location" aria-label="Permalink to &quot;4. location&quot;">​</a></h2><h3 id="概述-3" tabindex="-1">概述 <a class="header-anchor" href="#概述-3" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>Window.location</code> 只读属性返回一个 <code>Location</code> 对象，其中包含有关文档当前位置的信息。</li><li><code>Window.location</code> 是一个只读对象，但是你仍然可以将字符串赋值给它。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Window.location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://www.example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 等价于</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://www.example.com&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ol><h3 id="属性-2" tabindex="-1">属性 <a class="header-anchor" href="#属性-2" aria-label="Permalink to &quot;属性&quot;">​</a></h3><ol><li><code>Location.href</code>，返回一个包含了完整 <code>URL</code> 的 <code>USVString</code> 值，且允许 <code>href</code> 的更新。</li><li><code>Location.protocol</code>，包含 <code>URL</code> 对应协议的一个<code>DOMString</code>，最后有一个<code>:</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Let&#39;s an &lt;a id=&quot;myAnchor&quot; href=&quot;https://developer.mozilla.org/en-US/Location.protocol&quot;&gt; element be in the document</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> anchor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myAnchor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor.protocol </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns:&#39;https:&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>Location.host</code>，包含了域名的一个<code>DOMString</code>，可能在该串最后带有一个<code>:</code>并跟上 <code>URL</code> 的端口号<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://developer.mozilla.org/en-US/Location.host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;developer.mozilla.org&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://developer.mozilla.org:443/en-US/Location.host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;developer.mozilla.org&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里 host 中没有包含端口号，因为 443 是 https 协议的默认端口号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;https://developer.mozilla.org:4097/en-US/Location.host&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">anchor.host </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;developer.mozilla.org:4097&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></li><li><code>Location.hostname</code>，包含 <code>URL</code> 域名的一个<code>DOMString</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在文档流中声明了一个元素： &lt;a id=&quot;myAnchor&quot; href=&quot;https://developer.mozilla.org/zh-CN/docs/Location.hostname&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myAnchor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor.hostname </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns:&#39;developer.mozilla.org&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>Location.port</code>，包含端口号的一个<code>DOMString</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Let&#39;s an &lt;a id=&quot;myAnchor&quot; href=&quot;https://developer.mozilla.org:443/en-US/docs/Location.port&quot;&gt; element be in the document</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> anchor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementByID</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myAnchor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor.port; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns:&#39;443&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>Location.pathname</code>，包含 URL 中路径部分的一个<code>DOMString</code>，开头有一个 <code>/</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Let&#39;s say we are on the URL https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname#examples</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(location.pathname); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;/en-US/docs/Web/API/Location/pathname&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li><li><code>Location.search</code>，包含 URL 参数的一个<code>DOMString</code>，开头有一个<code>?</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设文档中有一个 &lt;a id=&quot;myAnchor&quot; href=&quot;/en-US/docs/Location.search?q=123&quot;&gt; 元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> anchor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myAnchor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> queryString</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor.search </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回：&#39;?q=123&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 进一步解析：</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> params</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> URLSearchParams</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(queryString)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(params.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;q&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 是数字 123</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><code>Location.hash</code>，包含块标识符的<code>DOMString</code>，开头有一个<code>#</code>。<div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &lt;a id=&quot;myAnchor&quot; href=&quot;/zh-CN/docs/Location.href#Examples&quot;&gt;Examples&lt;/a&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> anchor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;myAnchor&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(anchor.hash) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 返回&#39;#Examples&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><code>Location.username</code>，包含<code>URL</code>中域名前的用户名的一个<code>DOMString</code>。</li><li><code>Location.password</code>，包含<code>URL</code>域名前的密码的一个<code>DOMString</code>。</li><li><code>Location.origin</code>，包含页面来源的域名的标准形式<code>DOMString</code>。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// On this page, returns the origin</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.location.origin; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Returns:&#39;https://developer.mozilla.org&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="方法-1" tabindex="-1">方法 <a class="header-anchor" href="#方法-1" aria-label="Permalink to &quot;方法&quot;">​</a></h3><ol><li><p><code>Location.assign()</code>，方法会触发窗口加载并显示指定的 <code>URL</code> 的内容。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">assign</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(url)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><code>Location.reload()</code>，重新加载来自当前 URL 的资源。就像刷新按钮一样。可选参数为 <code>Boolean</code>。</p><ul><li>该参数为 <code>true</code> 时会导致该方法引发的刷新一定会从服务器上加载数据</li><li><code>false</code>或没有制定这个参数，浏览器可能从缓存当中加载页面。</li></ul></li><li><p><code>Location.replace()</code>，用给定的 URL 替换掉当前的资源。</p><ul><li>与 <code>assign()</code> 方法不同的是用<code>replace()</code>替换的新页面不会被保存在会话的历史<code>History</code>中，这意味着用户将不能用后退按钮转到该页面。</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.location.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;https://developer.mozilla.org/zh-CN/docs/Web/API/Location/reload&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li><li><p><code>Location.toString()</code>，返回一个<code>DOMString</code>，包含整个<code>URL</code>。类似于<code>Location.href</code>的只读版本，它不能够修改 <code>Location</code> 的值的。</p></li></ol><h2 id="_5-document" tabindex="-1">5. document <a class="header-anchor" href="#_5-document" aria-label="Permalink to &quot;5. document&quot;">​</a></h2><h3 id="概述-4" tabindex="-1">概述 <a class="header-anchor" href="#概述-4" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>window.document</code> 是一个指向<code>document</code>对象的引用。所以说<code>BOM</code>包含了<code>DOM</code>。</li><li>一些常用的方法可以<a href="/guide/JavaScript/WebApi/BOMDOM/01/01_01.html#_8-其他节点的操作方法">点击查看详情</a>。</li><li>所有 <code>document</code> 对象的相关属性与方法可以<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document" target="_blank" rel="noreferrer">点击查看详情</a>。</li></ol>`,31),t=[l];function h(o,p,d,r,c,k){return a(),i("div",null,t)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};