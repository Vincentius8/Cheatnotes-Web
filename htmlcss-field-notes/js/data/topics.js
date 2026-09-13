/* =========================================================
   DATA: HTML & CSS Field Notes (js/data/topics.js)
   HTML topics = static (saan/kailan/bakit/code)
   CSS topics  = may dagdag na "demo" config para sa LiveDemo
   ========================================================= */

const PHASES = [
  { id: "phaseHtml", label: "HTML Fundamentals" },
  { id: "phaseBox", label: "CSS — Box Model & Spacing" },
  { id: "phaseType", label: "CSS — Colors & Typography" },
  { id: "phaseLayout", label: "CSS — Layout Systems" },
  { id: "phaseEffects", label: "CSS — Effects" },
];

const TOPICS = [

/* ============ HTML FUNDAMENTALS ============ */

{n:1, phase:"phaseHtml", id:"html-structure", title:"HTML Document Structure",
 saan:"Root ng bawat HTML page — ito ang minimum skeleton na kailangan bago pa man magsimula maglagay ng laman.",
 kailan:"Palagi — bawat .html file ay dapat magsimula sa parehong basic structure bago mo idagdag ang aktwal na content.",
 bakit:"Sinasabi ng <code>&lt;!DOCTYPE html&gt;</code> sa browser kung anong version ng HTML ang gagamitin (modern standard mode). Ang <code>&lt;head&gt;</code> ay naglalaman ng metadata (hindi nakikita sa page), at ang <code>&lt;body&gt;</code> ang laman na aktwal na makikita ng user.",
 code:`&lt;!DOCTYPE html&gt;
&lt;html lang=<span class="str">"tl"</span>&gt;
&lt;head&gt;
  &lt;meta charset=<span class="str">"UTF-8"</span>&gt;
  &lt;meta name=<span class="str">"viewport"</span> content=<span class="str">"width=device-width, initial-scale=1.0"</span>&gt;
  &lt;title&gt;Pangalan ng Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Kamusta, Mundo!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;`,
 table:{head:["Tag","Ginagawa"], rows:[
   ["<code>&lt;!DOCTYPE html&gt;</code>","Sinasabi na HTML5 ang standard na ginagamit"],
   ["<code>&lt;html&gt;</code>","Root element ng buong document"],
   ["<code>&lt;head&gt;</code>","Metadata — title, links, meta tags (hindi visible)"],
   ["<code>&lt;body&gt;</code>","Aktwal na visible na content ng page"]
 ]}},

{n:2, phase:"phaseHtml", id:"text-tags", title:"Common Text Tags (headings, paragraphs, links)",
 saan:"Anumang textual na laman ng page — titles, body text, hyperlinks.",
 kailan:"Kapag naglalagay ng nababasang content — <code>h1</code>-<code>h6</code> para sa headings (h1 ang pinaka-importante), <code>p</code> para sa paragraphs, <code>a</code> para sa links.",
 bakit:"Bibigyan nito ng meaning/hierarchy ang content — hindi lang para sa visual na laki, ginagamit din ito ng screen readers at search engines para maintindihan ang structure ng page.",
 code:`&lt;h1&gt;Pangunahing Judul&lt;/h1&gt;
&lt;h2&gt;Sub-judul&lt;/h2&gt;
&lt;p&gt;Ito ay isang paragraph ng text na naglalaman ng impormasyon.&lt;/p&gt;

&lt;a href=<span class="str">"https://example.com"</span>&gt;I-click dito&lt;/a&gt;
&lt;a href=<span class="str">"#seksyon"</span>&gt;Link papunta sa isang seksyon sa parehong page&lt;/a&gt;

&lt;strong&gt;Bold/importante na text&lt;/strong&gt;
&lt;em&gt;Naka-italicize na text&lt;/em&gt;`},

{n:3, phase:"phaseHtml", id:"semantic-html", title:"Semantic HTML5 Elements",
 saan:"Overall page structure — kapalit ng generic <code>&lt;div&gt;</code> para sa mga major sections ng page.",
 kailan:"Kapag naglalagay ng structural sections tulad ng navigation, main content, footer — sa halip na gumamit ng puro <code>div</code> na walang kahulugan.",
 bakit:"Ang mga semantic tags ay nagbibigay ng KAHULUGAN sa structure ng page (hindi lang box para sa styling) — mas maganda para sa SEO, accessibility (screen readers), at mas madaling basahin ng ibang developers ang code.",
 diagram:`<svg viewBox="0 0 600 380" xmlns="http://www.w3.org/2000/svg">
   <rect x="10" y="10" width="580" height="360" rx="8" fill="none" stroke="#2B3140" stroke-width="2"/>
   <rect x="20" y="20" width="560" height="60" rx="4" fill="#2965F1" fill-opacity="0.25" stroke="#2965F1" stroke-width="1.5"/>
   <text x="300" y="55" text-anchor="middle" fill="#DDE3F0" font-family="monospace" font-size="14">&lt;header&gt; + &lt;nav&gt;</text>

   <rect x="20" y="92" width="400" height="200" rx="4" fill="#38BDF8" fill-opacity="0.2" stroke="#38BDF8" stroke-width="1.5"/>
   <text x="220" y="115" text-anchor="middle" fill="#DDE3F0" font-family="monospace" font-size="14">&lt;main&gt;</text>
   <rect x="34" y="128" width="372" height="150" rx="4" fill="#38BDF8" fill-opacity="0.12" stroke="#38BDF8" stroke-width="1" stroke-dasharray="4 3"/>
   <text x="220" y="210" text-anchor="middle" fill="#8B93A7" font-family="monospace" font-size="13">&lt;article&gt;</text>

   <rect x="432" y="92" width="148" height="200" rx="4" fill="#E34F26" fill-opacity="0.2" stroke="#E34F26" stroke-width="1.5"/>
   <text x="506" y="185" text-anchor="middle" fill="#DDE3F0" font-family="monospace" font-size="14">&lt;aside&gt;</text>

   <rect x="20" y="304" width="560" height="56" rx="4" fill="#2965F1" fill-opacity="0.15" stroke="#2965F1" stroke-width="1.5" stroke-dasharray="4 3"/>
   <text x="300" y="336" text-anchor="middle" fill="#DDE3F0" font-family="monospace" font-size="14">&lt;footer&gt;</text>
 </svg>`,
 code:`&lt;header&gt;
  &lt;nav&gt;Navigation Links&lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;h2&gt;Blog Post Title&lt;/h2&gt;
    &lt;p&gt;Content ng artikulo...&lt;/p&gt;
  &lt;/article&gt;

  &lt;aside&gt;Sidebar content&lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&amp;copy; 2026 Company Name&lt;/p&gt;
&lt;/footer&gt;`,
 table:{head:["Tag","Kailan Gamitin"], rows:[
   ["<code>&lt;header&gt;</code>","Panimula ng page o section (logo, nav)"],
   ["<code>&lt;nav&gt;</code>","Grupo ng navigation links"],
   ["<code>&lt;main&gt;</code>","Pangunahing laman ng page (isa lang bawat page)"],
   ["<code>&lt;section&gt;</code>","Thematic na grupo ng content"],
   ["<code>&lt;article&gt;</code>","Self-contained na content (blog post, comment)"],
   ["<code>&lt;aside&gt;</code>","Sidebar o hindi-core na related content"],
   ["<code>&lt;footer&gt;</code>","Katapusan ng page o section"]
 ]}},

{n:4, phase:"phaseHtml", id:"attributes", title:"Attributes (id, class, src, href, data-*)",
 saan:"Halos lahat ng HTML tags — nagbibigay ng karagdagang impormasyon o behavior sa isang element.",
 kailan:"<code>id</code> → kapag kailangan ng UNIQUE identifier (isa lang bawat page). <code>class</code> → kapag maraming elements ang dapat pareho ang styling/behavior. <code>src/href</code> → kapag tumuturo sa ibang resource. <code>data-*</code> → custom data na kukunin ng JavaScript.",
 bakit:"Binibigyan ng attributes ang mga tags ng specific na configuration — nagbibigay-daan itong gawing flexible at reusable ang parehong tag para sa iba't-ibang gamit.",
 code:`&lt;div id=<span class="str">"main-header"</span> class=<span class="str">"container flex"</span>&gt;
  &lt;img src=<span class="str">"logo.png"</span> alt=<span class="str">"Company Logo"</span>&gt;
&lt;/div&gt;

&lt;a href=<span class="str">"/about"</span> target=<span class="str">"_blank"</span>&gt;Tungkol Sa Amin&lt;/a&gt;

<span class="cm">&lt;!-- data-* attributes — custom data para sa JavaScript --&gt;</span>
&lt;button data-user-id=<span class="str">"42"</span> data-role=<span class="str">"admin"</span>&gt;
  I-click
&lt;/button&gt;`},

{n:5, phase:"phaseHtml", id:"lists", title:"Lists (ul, ol, li, dl)",
 saan:"Anumang grupo ng related items — navigation menus, steps, feature lists, FAQ.",
 kailan:"<code>ul</code> (unordered) → kapag hindi importante ang pagkakasunod-sunod. <code>ol</code> (ordered) → kapag may specific na sequence (steps, ranking). <code>dl</code> (description list) → kapag may term-definition pairs.",
 bakit:"Nagbibigay ito ng semantic na structure para sa grouped content — mas maayos kaysa sa paglalagay lang ng maraming <code>&lt;p&gt;</code> tags na hindi malinaw kung magkakaugnay.",
 code:`<span class="cm">&lt;!-- Unordered list --&gt;</span>
&lt;ul&gt;
  &lt;li&gt;Mangga&lt;/li&gt;
  &lt;li&gt;Saging&lt;/li&gt;
&lt;/ul&gt;

<span class="cm">&lt;!-- Ordered list --&gt;</span>
&lt;ol&gt;
  &lt;li&gt;Buksan ang app&lt;/li&gt;
  &lt;li&gt;I-click ang login&lt;/li&gt;
&lt;/ol&gt;

<span class="cm">&lt;!-- Description list --&gt;</span>
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;Structure ng web page&lt;/dd&gt;
&lt;/dl&gt;`},

{n:6, phase:"phaseHtml", id:"tables", title:"Tables",
 saan:"Tabular na data — schedules, price lists, comparison charts, financial reports.",
 kailan:"Kapag ang datos ay talagang naka-organize sa rows at columns na may relationship sa isa't-isa — HINDI para sa layout ng buong page (gamitin ang CSS Grid/Flexbox para diyan).",
 bakit:"Nagbibigay ito ng tamang semantic structure para sa tabular data, kaya nauunawaan ng screen readers ang relasyon sa pagitan ng headers at ng mga cell values.",
 code:`&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Pangalan&lt;/th&gt;
      &lt;th&gt;Edad&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Juan&lt;/td&gt;
      &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;`},

{n:7, phase:"phaseHtml", id:"forms", title:"Forms & Input Types",
 saan:"Anumang paraan ng pagkuha ng input mula sa user — login, sign-up, search, contact forms.",
 kailan:"Kapag kailangan mong kumuha ng data mula sa user na ipapadala sa server o iproseso ng JavaScript.",
 bakit:"Ang mga tamang input types (email, number, date, atbp.) ay nagbibigay ng built-in na validation at mas mainam na mobile keyboard (hal. numeric keypad para sa type=\"tel\") nang hindi kailangan ng custom JavaScript.",
 code:`&lt;form action=<span class="str">"/submit"</span> method=<span class="str">"POST"</span>&gt;
  &lt;label for=<span class="str">"email"</span>&gt;Email:&lt;/label&gt;
  &lt;input type=<span class="str">"email"</span> id=<span class="str">"email"</span> name=<span class="str">"email"</span> required&gt;

  &lt;label for=<span class="str">"age"</span>&gt;Edad:&lt;/label&gt;
  &lt;input type=<span class="str">"number"</span> id=<span class="str">"age"</span> min=<span class="str">"0"</span>&gt;

  &lt;input type=<span class="str">"checkbox"</span> id=<span class="str">"agree"</span>&gt;
  &lt;label for=<span class="str">"agree"</span>&gt;Sumasang-ayon ako&lt;/label&gt;

  &lt;button type=<span class="str">"submit"</span>&gt;I-submit&lt;/button&gt;
&lt;/form&gt;`,
 table:{head:["Input Type","Gamit"], rows:[
   ["<code>text</code>","Plain text input"],
   ["<code>email</code>","May built-in email format validation"],
   ["<code>password</code>","Itinatago ang character (dots)"],
   ["<code>number</code>","Numeric input lang, may spinner"],
   ["<code>checkbox</code> / <code>radio</code>","Toggle o pagpili ng isa sa maraming options"],
   ["<code>date</code>","Built-in date picker"]
 ]}},

{n:8, phase:"phaseHtml", id:"media-elements", title:"Media Elements (img, video, audio, iframe)",
 saan:"Anumang visual o multimedia content — pictures, video players, embedded content mula sa ibang sites.",
 kailan:"Kapag naglalagay ng images, video/audio players, o embedded content (hal. YouTube video, Google Maps).",
 bakit:"Ang mga native media tags ay may built-in na browser controls at behavior (play/pause, volume) nang hindi kailangan ng custom JavaScript player mula sa zero.",
 code:`&lt;img src=<span class="str">"photo.jpg"</span> alt=<span class="str">"Deskripsyon ng larawan"</span> width=<span class="str">"400"</span>&gt;

&lt;video controls width=<span class="str">"500"</span>&gt;
  &lt;source src=<span class="str">"movie.mp4"</span> type=<span class="str">"video/mp4"</span>&gt;
&lt;/video&gt;

&lt;audio controls&gt;
  &lt;source src=<span class="str">"song.mp3"</span> type=<span class="str">"audio/mpeg"</span>&gt;
&lt;/audio&gt;

<span class="cm">&lt;!-- iframe — para sa embedded content mula sa ibang site --&gt;</span>
&lt;iframe src=<span class="str">"https://www.youtube.com/embed/VIDEO_ID"</span> width=<span class="str">"560"</span> height=<span class="str">"315"</span>&gt;&lt;/iframe&gt;`,
 note:"Laging maglagay ng <code>alt</code> attribute sa mga images — kritikal ito para sa accessibility (screen readers) at lalabas na fallback text kung hindi ma-load ang image."},


{n:9, phase:"phaseHtml", id:"input-types", title:"Input Types (Kumpletong Listahan)",
 saan:"Anumang form na kumukuha ng input mula sa user — hindi lang basic text, may specialized na types para sa bawat klaseng datos.",
 kailan:"Piliin ang input type base sa datos na kailangan mo — email para sa email address, date para sa petsa, range para sa slider, atbp.",
 bakit:"Ang bawat input type ay nagbibigay ng TAMANG mobile keyboard, built-in validation, at native na UI control (hal. calendar picker para sa date) nang walang extra JavaScript — mas mabilis at mas accessible kaysa gumamit lang ng puro <code>type=\"text\"</code> sa lahat.",
 showcase:`
   <div class="showcase-grid">
     <label class="showcase-item"><span>text</span><input type="text" placeholder="Juan Dela Cruz"></label>
     <label class="showcase-item"><span>email</span><input type="email" placeholder="juan@example.com"></label>
     <label class="showcase-item"><span>password</span><input type="password" placeholder="••••••••"></label>
     <label class="showcase-item"><span>number</span><input type="number" placeholder="25"></label>
     <label class="showcase-item"><span>tel</span><input type="tel" placeholder="0917-000-0000"></label>
     <label class="showcase-item"><span>url</span><input type="url" placeholder="https://example.com"></label>
     <label class="showcase-item"><span>search</span><input type="search" placeholder="Maghanap..."></label>
     <label class="showcase-item"><span>date</span><input type="date"></label>
     <label class="showcase-item"><span>time</span><input type="time"></label>
     <label class="showcase-item"><span>datetime-local</span><input type="datetime-local"></label>
     <label class="showcase-item"><span>month</span><input type="month"></label>
     <label class="showcase-item"><span>week</span><input type="week"></label>
     <label class="showcase-item"><span>color</span><input type="color" value="#2965F1"></label>
     <label class="showcase-item"><span>range</span><input type="range" min="0" max="100"></label>
     <label class="showcase-item"><span>file</span><input type="file"></label>
     <label class="showcase-item showcase-item-row"><input type="checkbox" id="sc-cb"><span>checkbox</span></label>
     <label class="showcase-item showcase-item-row"><input type="radio" name="sc-radio" id="sc-r1"><span>radio</span></label>
     <label class="showcase-item"><span>submit / button</span><input type="submit" value="Submit"></label>
   </div>
 `,
 code:`&lt;input type=<span class="str">"email"</span> placeholder=<span class="str">"juan@example.com"</span>&gt;
&lt;input type=<span class="str">"date"</span>&gt;
&lt;input type=<span class="str">"range"</span> min=<span class="str">"0"</span> max=<span class="str">"100"</span>&gt;
&lt;input type=<span class="str">"color"</span> value=<span class="str">"#2965F1"</span>&gt;
&lt;input type=<span class="str">"file"</span> accept=<span class="str">"image/*"</span>&gt;`,
 table:{head:["Type","Kailan Gamitin"], rows:[
   ["<code>email</code>","Email address — may format validation"],
   ["<code>tel</code>","Phone number — nagbibigay ng numeric keypad sa mobile"],
   ["<code>date/time/month/week</code>","Petsa/oras — may native na picker UI"],
   ["<code>range</code>","Slider para sa numeric value sa loob ng min-max"],
   ["<code>color</code>","Color picker"],
   ["<code>file</code>","Pag-upload ng file"],
   ["<code>hidden</code>","Datos na ipapadala pero hindi nakikita ng user"]
 ]},
 note:"Subukan mong i-click ang mga input sa itaas — totoong interactive sila (hindi larawan lang), kaya makikita mo mismo kung paano gumagana ang bawat isa sa browser mo."},

{n:10, phase:"phaseHtml", id:"accessibility", title:"Accessibility (a11y) Fundamentals",
 saan:"Bawat element sa page na nakikita o ginagamit ng user — mas kritikal ito sa images, forms, at interactive elements.",
 kailan:"Palagi — hindi ito 'extra feature' na idadagdag sa dulo, dapat kasabay ito ng pagsulat ng HTML mula sa umpisa.",
 bakit:"Maraming users ang umaasa sa screen readers, keyboard navigation, o iba pang assistive technology para magamit ang web. Ang tamang semantic HTML at attributes ang PUNDASYON ng accessibility — mas mahalaga pa ito kaysa anumang ARIA attribute.",
 showcase:`
   <div class="showcase-compare">
     <div class="showcase-bad">
       <div class="showcase-compare-label">MALI</div>
       <div class="showcase-fake-img">IMG</div>
       <div class="showcase-fake-input">Pangalan: <span class="showcase-plain-input"></span></div>
       <div class="showcase-fake-button">I-submit</div>
     </div>
     <div class="showcase-good">
       <div class="showcase-compare-label">TAMA</div>
       <div class="showcase-fake-img" title="May alt text">IMG<br><small>alt="Larawan ng produkto"</small></div>
       <label class="showcase-real-label">Pangalan: <input type="text" aria-label="Pangalan"></label>
       <button type="button" class="showcase-real-button">I-submit</button>
     </div>
   </div>
 `,
 code:`<span class="cm">&lt;!-- MALI: walang alt, walang label, div bilang button --&gt;</span>
&lt;img src=<span class="str">"product.jpg"</span>&gt;
&lt;div&gt;Pangalan: &lt;input type=<span class="str">"text"</span>&gt;&lt;/div&gt;
&lt;div onclick=<span class="str">"submit()"</span>&gt;I-submit&lt;/div&gt;

<span class="cm">&lt;!-- TAMA: descriptive alt, tunay na label, tunay na button --&gt;</span>
&lt;img src=<span class="str">"product.jpg"</span> alt=<span class="str">"Pulang sapatos na may white sole"</span>&gt;
&lt;label for=<span class="str">"pangalan"</span>&gt;Pangalan:&lt;/label&gt;
&lt;input type=<span class="str">"text"</span> id=<span class="str">"pangalan"</span>&gt;
&lt;button type=<span class="str">"submit"</span>&gt;I-submit&lt;/button&gt;`,
 table:{head:["Practice","Bakit Importante"], rows:[
   ["Descriptive <code>alt</code> text","Sinasabi sa screen reader ang laman ng image"],
   ["<code>&lt;label&gt;</code> sa bawat input","Nalalaman ng user (at screen reader) kung ano ang hinihingi ng field"],
   ["Tunay na <code>&lt;button&gt;</code>, hindi <code>&lt;div&gt;</code>","Awtomatikong keyboard-accessible (Tab + Enter) ang button, hindi ang div"],
   ["<code>aria-label</code>","Fallback na label kapag walang visible text (hal. icon-only button)"],
   ["Sapat na color contrast","Nababasa pa rin ng taong may low vision o color blindness"]
 ]},
 note:"Ang unang tuntunin ng accessibility: gamitin ang TAMANG semantic HTML element (button, input, nav) bago mag-isip ng ARIA attributes — 'No ARIA is better than Bad ARIA'."},

{n:11, phase:"phaseHtml", id:"meta-tags-head", title:"Meta Tags & Document Head",
 saan:"Loob ng <code>&lt;head&gt;</code> ng bawat page — hindi nakikita sa page mismo, pero ginagamit ng browsers, search engines, at social media platforms.",
 kailan:"Palagi — kritikal ang <code>viewport</code> at <code>charset</code> sa bawat page, at ang <code>description</code>/Open Graph tags kapag gusto mong ma-optimize para sa SEO at social sharing.",
 bakit:"Ang mga meta tags ang nagsasabi sa browser kung paano i-render ang page (mobile-responsive ba), sa Google kung ano ang ilalagay sa search results, at sa Facebook/Twitter kung anong preview card ang ipapakita kapag na-share ang link.",
 code:`&lt;head&gt;
  &lt;meta charset=<span class="str">"UTF-8"</span>&gt;
  &lt;meta name=<span class="str">"viewport"</span> content=<span class="str">"width=device-width, initial-scale=1.0"</span>&gt;
  &lt;title&gt;Pangalan ng Page&lt;/title&gt;

  <span class="cm">&lt;!-- Para sa search engines --&gt;</span>
  &lt;meta name=<span class="str">"description"</span> content=<span class="str">"Maikling deskripsyon ng page para sa Google search results"</span>&gt;

  <span class="cm">&lt;!-- Favicon --&gt;</span>
  &lt;link rel=<span class="str">"icon"</span> href=<span class="str">"/favicon.ico"</span>&gt;

  <span class="cm">&lt;!-- Open Graph — para sa preview kapag na-share sa Facebook/Twitter --&gt;</span>
  &lt;meta property=<span class="str">"og:title"</span> content=<span class="str">"Pangalan ng Page"</span>&gt;
  &lt;meta property=<span class="str">"og:image"</span> content=<span class="str">"/preview.jpg"</span>&gt;
&lt;/head&gt;`,
 table:{head:["Meta Tag","Ginagawa"], rows:[
   ["<code>charset</code>","Sinasabi kung anong character encoding ang gamit (UTF-8 = standard)"],
   ["<code>viewport</code>","Kailangan para gumana nang maayos ang responsive design sa mobile"],
   ["<code>description</code>","Text na lalabas sa Google search results"],
   ["<code>og:title</code> / <code>og:image</code>","Kontrolado ang preview card sa social media shares"]
 ]}},



/* ============ CSS: BOX MODEL & SPACING ============ */

{n:12, phase:"phaseBox", id:"box-model", title:"Box Model (padding, margin, border-width)",
 saan:"LITERAL bawat element sa page — bawat HTML element ay isang box na may content, padding, border, at margin.",
 kailan:"Kapag kailangan mong maglagay ng puwang sa loob ng isang element (padding) o sa labas nito (margin), o maglagay ng border.",
 bakit:"Ito ang pinaka-pundasyon ng CSS layout — kung hindi mo maintindihan kung paano nagsasama-sama ang content, padding, border, at margin, magiging predictable-kailanman ang mga layout bugs mo.",
 demo:{
   controls:[
     {key:'padding', label:'Padding', type:'range', min:0, max:60, step:4, unit:'px', default:16},
     {key:'margin', label:'Margin', type:'range', min:0, max:60, step:4, unit:'px', default:8},
     {key:'borderWidth', label:'Border Width', type:'range', min:0, max:20, step:1, unit:'px', default:2},
   ],
   previewText:'Content',
   onUpdate:(v, box) => {
     box.style.padding = v.padding + 'px';
     box.style.margin = v.margin + 'px';
     box.style.borderWidth = v.borderWidth + 'px';
     box.style.borderStyle = 'solid';
     box.style.borderColor = '#E34F26';
   }
 },
 code:`.box {
  padding: <span class="num">16</span>px;   <span class="cm">/* puwang sa LOOB, sa pagitan ng content at border */</span>
  margin: <span class="num">8</span>px;      <span class="cm">/* puwang sa LABAS, sa pagitan ng border at ibang elements */</span>
  border: <span class="num">2</span>px solid <span class="str">#E34F26</span>;
}`},

{n:13, phase:"phaseBox", id:"border-properties", title:"Border Properties",
 saan:"Anumang element na kailangan ng visual na outline — cards, buttons, input fields, dividers.",
 kailan:"Kapag gusto mong magdagdag ng linya sa paligid ng isang element, o i-round ang mga corners nito.",
 bakit:"Ang border ay isa sa apat na parte ng box model — nagbibigay ito ng visual separation sa pagitan ng elements nang hindi kinakailangan ng background color changes.",
 demo:{
   controls:[
     {key:'borderWidth', label:'Border Width', type:'range', min:0, max:16, step:1, unit:'px', default:4},
     {key:'borderStyle', label:'Border Style', type:'select', options:['solid','dashed','dotted','double','groove'], default:'solid'},
     {key:'borderRadius', label:'Border Radius', type:'range', min:0, max:60, step:2, unit:'px', default:8},
     {key:'borderColor', label:'Border Color', type:'color', default:'#E34F26'},
   ],
   previewText:'Box',
   onUpdate:(v, box) => {
     box.style.borderWidth = v.borderWidth + 'px';
     box.style.borderStyle = v.borderStyle;
     box.style.borderRadius = v.borderRadius + 'px';
     box.style.borderColor = v.borderColor;
   }
 },
 code:`.box {
  border-width: <span class="num">4</span>px;
  border-style: solid;      <span class="cm">/* solid | dashed | dotted | double | groove */</span>
  border-radius: <span class="num">8</span>px;   <span class="cm">/* pina-rounded ang corners */</span>
  border-color: <span class="str">#E34F26</span>;
}`},

{n:14, phase:"phaseBox", id:"box-sizing", title:"Width, Height & Box Sizing",
 saan:"Bawat element na may nakatakdang laki — containers, cards, images.",
 kailan:"Kapag kailangan mong i-control ang eksaktong laki ng isang element, at kailangan mong malaman kung paano nagbabago ang totoong laki kapag may padding/border.",
 bakit:"Default sa CSS, ang <code>width</code>/<code>height</code> ay sumasakop lang sa CONTENT — kaya lalaki pa ang totoong laki ng box kapag nagdagdag ka ng padding/border. Ang <code>box-sizing: border-box</code> ang solusyon dito, kaya kasama na ang padding/border sa binigay mong width.",
 demo:{
   controls:[
     {key:'width', label:'Width', type:'range', min:80, max:300, step:10, unit:'px', default:150},
     {key:'padding', label:'Padding', type:'range', min:0, max:40, step:4, unit:'px', default:20},
     {key:'boxSizing', label:'Box Sizing', type:'select', options:['content-box','border-box'], default:'content-box'},
   ],
   previewText:'Resize Me',
   onUpdate:(v, box) => {
     box.style.width = v.width + 'px';
     box.style.padding = v.padding + 'px';
     box.style.boxSizing = v.boxSizing;
     box.style.borderWidth = '4px';
     box.style.borderStyle = 'solid';
     box.style.borderColor = '#E34F26';
   }
 },
 code:`.box {
  width: <span class="num">150</span>px;
  padding: <span class="num">20</span>px;
  border: <span class="num">4</span>px solid;
  box-sizing: border-box; <span class="cm">/* kasama na ang padding+border sa 150px, hindi dagdag pa */</span>
}`,
 note:"Kapag <code>content-box</code> (default), ang TOTOONG width ay <code>width + padding + border</code> — kaya kapag tinaasan mo ang padding, LUMALAKI pa ang box. Kapag <code>border-box</code>, nananatili ang total width sa binigay mong value."},

{n:15, phase:"phaseBox", id:"background", title:"Background & Opacity",
 saan:"Anumang element na kailangan ng kulay o transparency sa background nito.",
 kailan:"Kapag nagse-set ng background color, at kailangan mong i-control kung gaano ka-transparent (opacity) ang buong element.",
 bakit:"Ang background properties ang isa sa pinaka-madalas gamitin sa CSS — pero mahalagang malaman ang pagkakaiba ng <code>opacity</code> (nagpapaputi/nagpapadilim ng LAHAT, kasama ang text) kumpara sa isang transparent na background color lang.",
 demo:{
   controls:[
     {key:'backgroundColor', label:'Background Color', type:'color', default:'#2965F1'},
     {key:'opacity', label:'Opacity', type:'range', min:0.1, max:1, step:0.1, unit:'', default:1},
     {key:'borderRadius', label:'Border Radius', type:'range', min:0, max:50, step:5, unit:'px', default:8},
   ],
   previewText:'Hello',
   onUpdate:(v, box) => {
     box.style.backgroundColor = v.backgroundColor;
     box.style.opacity = v.opacity;
     box.style.borderRadius = v.borderRadius + 'px';
   }
 },
 code:`.box {
  background-color: <span class="str">#2965F1</span>;
  opacity: <span class="num">1</span>;         <span class="cm">/* 0 = invisible, 1 = fully visible — apektado LAHAT (kasama text) */</span>
  border-radius: <span class="num">8</span>px;
}`},

/* ============ CSS: COLORS & TYPOGRAPHY ============ */

{n:16, phase:"phaseType", id:"typography", title:"Typography Basics",
 saan:"Anumang text sa page — headings, body copy, labels.",
 kailan:"Kapag kailangan mong i-control ang laki, bigat, spacing, o alignment ng text.",
 bakit:"Ang typography ang may pinaka-malaking epekto sa readability at 'feel' ng isang design — maliit na pagbabago sa line-height o letter-spacing ay malaking pagbabago sa dating ng text.",
 demo:{
   controls:[
     {key:'fontSize', label:'Font Size', type:'range', min:12, max:48, step:2, unit:'px', default:20},
     {key:'fontWeight', label:'Font Weight', type:'select', options:['300','400','600','700','900'], default:'400'},
     {key:'letterSpacing', label:'Letter Spacing', type:'range', min:-2, max:10, step:0.5, unit:'px', default:0},
     {key:'lineHeight', label:'Line Height', type:'range', min:1, max:2.5, step:0.1, unit:'', default:1.4},
   ],
   previewText:'Ang bilis ng mabuting pagbasa',
   onUpdate:(v, box) => {
     box.style.fontSize = v.fontSize + 'px';
     box.style.fontWeight = v.fontWeight;
     box.style.letterSpacing = v.letterSpacing + 'px';
     box.style.lineHeight = v.lineHeight;
     box.style.padding = '16px';
     box.style.width = '220px';
     box.style.textAlign = 'left';
   }
 },
 code:`p {
  font-size: <span class="num">20</span>px;
  font-weight: <span class="num">400</span>;
  letter-spacing: <span class="num">0</span>px;
  line-height: <span class="num">1.4</span>;
}`},

{n:17, phase:"phaseType", id:"text-decoration", title:"Text Decoration & Transform",
 saan:"Links, labels, at anumang text na kailangan ng special treatment — underline sa links, uppercase sa buttons.",
 kailan:"Kapag kailangan mong magdagdag ng linya (underline/strikethrough) o baguhin ang capitalization ng text nang hindi binabago ang mismong laman ng HTML.",
 bakit:"Ang <code>text-transform</code> ay nagbibigay-daan na baguhin ang display (uppercase, halimbawa) nang hindi kinakailangang isulat ang totoong text sa CAPS sa HTML — mas flexible kung sakaling magbago ang design.",
 demo:{
   controls:[
     {key:'textDecoration', label:'Text Decoration', type:'select', options:['none','underline','line-through','overline'], default:'none'},
     {key:'textTransform', label:'Text Transform', type:'select', options:['none','uppercase','lowercase','capitalize'], default:'none'},
     {key:'fontStyle', label:'Font Style', type:'select', options:['normal','italic'], default:'normal'},
   ],
   previewText:'sample text para sa demo',
   onUpdate:(v, box) => {
     box.style.textDecoration = v.textDecoration;
     box.style.textTransform = v.textTransform;
     box.style.fontStyle = v.fontStyle;
     box.style.fontSize = '18px';
     box.style.padding = '16px';
   }
 },
 code:`a {
  text-decoration: underline;
  text-transform: uppercase;
  font-style: normal;
}`},

{n:18, phase:"phaseType", id:"color-formats", title:"Color Formats (Hex, Opacity)",
 saan:"Anumang lugar na tumatanggap ng color value — background, text, border.",
 kailan:"Kapag nagse-set ng kulay, at kailangan mong i-control din ang transparency ng SPECIFIC na property lang (hindi buong element gaya ng opacity).",
 bakit:"May iba't-ibang paraan para mag-specify ng kulay sa CSS (hex, rgb, hsl) — ang bentahe ng rgba/hsla ay pwede kang mag-set ng transparency PARA LANG SA isang property (hal. background lang), hindi tulad ng <code>opacity</code> na apektado lahat.",
 demo:{
   controls:[
     {key:'color', label:'Color Swatch', type:'color', default:'#2965F1'},
     {key:'alpha', label:'Alpha (Transparency)', type:'range', min:0, max:1, step:0.1, unit:'', default:1},
   ],
   childrenCount:0,
   previewText:'rgba(41, 101, 241, 1)',
   onUpdate:(v, box) => {
     const hex = v.color.replace('#','');
     const r = parseInt(hex.substring(0,2),16);
     const g = parseInt(hex.substring(2,4),16);
     const b = parseInt(hex.substring(4,6),16);
     const rgba = `rgba(${r}, ${g}, ${b}, ${v.alpha})`;
     box.style.backgroundColor = rgba;
     const textEl = box.querySelector('[data-role="demo-text"]');
     if (textEl) textEl.textContent = rgba;
   }
 },
 code:`.box {
  <span class="cm">/* Hex — pinaka-karaniwan, walang built-in na alpha */</span>
  background-color: <span class="str">#2965F1</span>;

  <span class="cm">/* RGBA — may 4th value para sa alpha/transparency (0-1) */</span>
  background-color: rgba(<span class="num">41</span>, <span class="num">101</span>, <span class="num">241</span>, <span class="num">0.5</span>);
}`},

/* ============ CSS: LAYOUT SYSTEMS ============ */

{n:19, phase:"phaseLayout", id:"display", title:"Display Property",
 saan:"LAHAT ng HTML elements — ito ang pinaka-basic na desisyon kung paano kikilos ang isang element sa layout.",
 kailan:"Kapag kailangan mong baguhin kung paano nag-aarrange ang isang element kaugnay ng ibang elements — magkatabi (inline), naka-stack (block), o gamit ang modernong layout system (flex/grid).",
 bakit:"Ang display ang PINAKA-BASIC na desisyon sa CSS layout — dapat mo munang maintindihan ito bago ang Flexbox o Grid, dahil ang display: flex/grid mismo ang naga-activate ng mga sistemang iyon.",
 demo:{
   controls:[
     {key:'display', label:'Display', type:'select', options:['block','inline-block','flex','grid','none'], default:'flex'},
   ],
   childrenCount:3,
   onUpdate:(v, box) => {
     box.style.display = v.display;
     box.style.gap = '8px';
     box.style.gridTemplateColumns = 'repeat(3, 1fr)';
     box.style.width = '100%';
   }
 },
 code:`.container {
  display: flex; <span class="cm">/* block | inline-block | flex | grid | none */</span>
}`,
 note:"<code>none</code> ay TINATANGGAL ang element sa layout (parang wala talaga) — magkaiba ito sa <code>opacity: 0</code> na nagpapanatili pa rin ng puwang nito."},

{n:20, phase:"phaseLayout", id:"position", title:"Position Property",
 saan:"Mga elements na dapat lumabas sa specific na lokasyon — tooltips, modals, sticky headers, badges sa ibabaw ng icons.",
 kailan:"<code>relative</code> → kapag gusto mong i-offset ang isang element mula sa NORMAL nitong posisyon. <code>absolute</code> → kapag gusto mong i-position ito RELATIVE sa pinakamalapit na positioned na ancestor.",
 bakit:"Ang position ay hiwalay na mekanismo mula sa normal na document flow — pinapayagan kang mag-overlap ng elements o mag-anchor ng isang element sa specific na sulok ng parent nito.",
 demo:{
   controls:[
     {key:'position', label:'Position', type:'select', options:['static','relative','absolute','fixed'], default:'relative'},
     {key:'top', label:'Top', type:'range', min:-30, max:60, step:5, unit:'px', default:0},
     {key:'left', label:'Left', type:'range', min:-30, max:60, step:5, unit:'px', default:0},
   ],
   previewText:'Drag Me',
   draggable:true,
   onUpdate:(v, box) => {
     box.style.position = v.position;
     box.style.top = v.top + 'px';
     box.style.left = v.left + 'px';
   }
 },
 code:`.box {
  position: relative; <span class="cm">/* static | relative | absolute | fixed | sticky */</span>
  top: <span class="num">10</span>px;
  left: <span class="num">10</span>px;
}`,
 note:"Sa <code>static</code> (default), walang epekto ang top/left — kaya naka-freeze ang drag dito, gaya ng totoong CSS. Sa <code>relative</code>, naka-offset mula sa ORIHINAL nitong posisyon. Sa <code>absolute</code>, naka-anchor sa checkered na preview area mismo (ito ang pinakamalapit na positioned na ancestor). Sa <code>fixed</code>, naka-anchor ito sa VIEWPORT — kaya kung malayo ka mag-drag, puwede itong 'tumakas' palabas ng preview box; i-scroll pababa ang page para makita mo talagang naka-pin ito sa screen kahit gumalaw ang buong page. I-drag mismo ang kahon, o gamitin ang sliders para sa eksaktong numero. Ang <code>sticky</code> ay hindi kasama dito dahil kailangan nito ng scrollable na container para gumana — ibang usapan na 'yun."},

{n:21, phase:"phaseLayout", id:"flexbox", title:"Flexbox Container Properties",
 saan:"One-dimensional layouts — navbars, button rows, centered content, equal-width columns.",
 kailan:"Kapag kailangan mong i-align o i-distribute ang mga child elements sa isang direksyon (pahalang o patayo).",
 bakit:"Bago ang Flexbox, kailangan ng mga hacky na paraan (floats, inline-block na may whitespace issues) para lang mag-center ng content pahalang at patayo nang sabay. Sinolusyunan ito ng Flexbox nang malinaw at predictable.",
 demo:{
   controls:[
     {key:'flexDirection', label:'Flex Direction', type:'select', options:['row','column','row-reverse'], default:'row'},
     {key:'justifyContent', label:'Justify Content', type:'select', options:['flex-start','center','flex-end','space-between','space-around'], default:'center'},
     {key:'alignItems', label:'Align Items', type:'select', options:['stretch','flex-start','center','flex-end'], default:'center'},
     {key:'gap', label:'Gap', type:'range', min:0, max:40, step:4, unit:'px', default:12},
   ],
   childrenCount:3,
   onUpdate:(v, box) => {
     box.style.display = 'flex';
     box.style.flexDirection = v.flexDirection;
     box.style.justifyContent = v.justifyContent;
     box.style.alignItems = v.alignItems;
     box.style.gap = v.gap + 'px';
     box.style.width = '100%';
     box.style.minHeight = '160px';
   }
 },
 code:`.container {
  display: flex;
  flex-direction: row;
  justify-content: center; <span class="cm">/* pag-space sa MAIN axis */</span>
  align-items: center;      <span class="cm">/* pag-align sa CROSS axis */</span>
  gap: <span class="num">12</span>px;
}`},

{n:22, phase:"phaseLayout", id:"grid", title:"Grid Container Properties",
 saan:"Two-dimensional layouts — image galleries, dashboards, complex page structures.",
 kailan:"Kapag kailangan mo ng control sa PAREHONG rows at columns nang sabay — mas mahusay ito kaysa Flexbox para sa mga structured, grid-like na layouts.",
 bakit:"Sa Flexbox, isang direksyon lang ang tunay na kontrolado mo nang mahusay. Ang Grid ay dinisenyo mismo para sa dalawang-dimensyong layout, kaya mas malinaw ang pag-align sa parehong rows at columns.",
 demo:{
   controls:[
     {key:'gridTemplateColumns', label:'Grid Columns', type:'select', options:['repeat(2, 1fr)','repeat(3, 1fr)','1fr 2fr','repeat(4, 1fr)'], default:'repeat(3, 1fr)'},
     {key:'gap', label:'Gap', type:'range', min:0, max:30, step:2, unit:'px', default:10},
     {key:'justifyItems', label:'Justify Items', type:'select', options:['stretch','center','start','end'], default:'stretch'},
   ],
   childrenCount:6,
   onUpdate:(v, box) => {
     box.style.display = 'grid';
     box.style.gridTemplateColumns = v.gridTemplateColumns;
     box.style.gap = v.gap + 'px';
     box.style.justifyItems = v.justifyItems;
     box.style.width = '100%';
   }
 },
 code:`.container {
  display: grid;
  grid-template-columns: repeat(<span class="num">3</span>, <span class="num">1</span>fr); <span class="cm">/* 3 pantay na columns */</span>
  gap: <span class="num">10</span>px;
}`},

/* ============ CSS: EFFECTS ============ */

{n:23, phase:"phaseEffects", id:"transform", title:"Transform (translate, rotate, scale)",
 saan:"Hover effects, animations, icon rotations, image zoom effects.",
 kailan:"Kapag kailangan mong i-move, i-rotate, o i-resize ang isang element VISUALLY nang hindi inaapektuhan ang layout ng ibang elements sa paligid nito.",
 bakit:"Hindi tulad ng pagbabago ng <code>top/left</code> o <code>width/height</code>, ang transform ay hindi nakaka-trigger ng layout recalculation (reflow) sa ibang elements — mas performant ito para sa animations.",
 demo:{
   controls:[
     {key:'translateX', label:'Translate X', type:'range', min:-60, max:60, step:5, unit:'px', default:0},
     {key:'rotate', label:'Rotate', type:'range', min:-180, max:180, step:5, unit:'deg', default:0},
     {key:'scale', label:'Scale', type:'range', min:0.5, max:2, step:0.1, unit:'', default:1},
   ],
   previewText:'Box',
   onUpdate:(v, box) => {
     box.style.transform = `translateX(${v.translateX}px) rotate(${v.rotate}deg) scale(${v.scale})`;
   }
 },
 code:`.box {
  transform: translateX(<span class="num">20</span>px) rotate(<span class="num">15</span>deg) scale(<span class="num">1.2</span>);
}`},

{n:24, phase:"phaseEffects", id:"transition", title:"Transition Basics",
 saan:"Hover states, button clicks, modal open/close — anumang smooth na state change.",
 kailan:"Kapag gusto mong i-animate ang pagbabago mula sa isang CSS value papunta sa iba (hal. color, size, position) sa halip na biglaan itong lumipat.",
 bakit:"Ang biglaang pagbabago ng UI ay pakiramdam na 'harsh' — nagbibigay ang transitions ng maliit na animation na nagpapaganda ng perceived quality nang walang JavaScript animation library.",
 demo:{
   controls:[
     {key:'duration', label:'Duration', type:'range', min:0, max:2000, step:100, unit:'ms', default:400},
     {key:'timingFunction', label:'Timing Function', type:'select', options:['ease','linear','ease-in','ease-out','ease-in-out'], default:'ease'},
   ],
   previewText:'Hover Me',
   hoverKey:'hover',
   onUpdate:(v, box) => {
     box.style.transitionProperty = 'transform, background-color';
     box.style.transitionDuration = v.duration + 'ms';
     box.style.transitionTimingFunction = v.timingFunction;
     box.style.transform = v.hover ? 'translateX(80px)' : 'translateX(0)';
     box.style.backgroundColor = v.hover ? '#E34F26' : '#2965F1';
   }
 },
 code:`.box {
  transition-property: transform, background-color;
  transition-duration: <span class="num">400</span>ms;
  transition-timing-function: ease;
}

.box<span class="cm">:hover</span> {
  transform: translateX(<span class="num">80</span>px);
  background-color: <span class="str">#E34F26</span>;
}

<span class="cm">/* Kapag nagbago ang transform/background-color (dahil sa :hover), */</span>
<span class="cm">/* smooth ang animation sa halip na biglaan */</span>`,
 note:"I-hover lang mismo ang kahon sa preview (hindi na dropdown) para makita ang animation — ganito talaga ginagamit ang transition sa totoong CSS, naka-bind sa isang state tulad ng <code>:hover</code>. Ang duration at timing function ang kumokontrol kung gaano katagal at anong 'feel' ang animation."},

{n:25, phase:"phaseEffects", id:"box-shadow", title:"Box Shadow",
 saan:"Cards, buttons, modals, dropdown menus — anumang element na dapat magmukhang 'nakalutang' sa ibabaw ng page.",
 kailan:"Kapag kailangan mong magbigay ng depth/elevation sa isang element, o i-highlight ito mula sa background.",
 bakit:"Ang box-shadow ay nagbibigay ng visual hierarchy — nagsasabi ito sa user kung anong elements ang 'nasa itaas' at dapat bigyang-pansin, gaya ng modals o floating cards.",
 demo:{
   controls:[
     {key:'offsetX', label:'Offset X', type:'range', min:-20, max:20, step:1, unit:'px', default:0},
     {key:'offsetY', label:'Offset Y', type:'range', min:-20, max:20, step:1, unit:'px', default:8},
     {key:'blur', label:'Blur Radius', type:'range', min:0, max:40, step:2, unit:'px', default:16},
     {key:'shadowColor', label:'Shadow Color', type:'color', default:'#000000'},
   ],
   previewText:'Card',
   onUpdate:(v, box) => {
     box.style.boxShadow = `${v.offsetX}px ${v.offsetY}px ${v.blur}px ${v.shadowColor}`;
   }
 },
 code:`.card {
  box-shadow: <span class="num">0</span>px <span class="num">8</span>px <span class="num">16</span>px <span class="str">#000000</span>;
  <span class="cm">/* offset-x | offset-y | blur-radius | color */</span>
}`},

{n:26, phase:"phaseEffects", id:"opacity-filter", title:"Opacity & Filter",
 saan:"Loading states, disabled buttons, image effects (grayscale thumbnails, blur backgrounds).",
 kailan:"<code>opacity</code> → kapag gusto mong gawing transparent ang buong element. <code>filter</code> → kapag kailangan mo ng visual effects tulad ng blur o grayscale na hindi kaya ng opacity lang.",
 bakit:"Ang filter property ay nagbibigay-daan ng mga visual effects (blur, grayscale, brightness) na dating kailangan ng image editing software lang — direkta na itong nagagawa sa CSS nang real-time.",
 demo:{
   controls:[
     {key:'opacity', label:'Opacity', type:'range', min:0.1, max:1, step:0.1, unit:'', default:1},
     {key:'blur', label:'Blur', type:'range', min:0, max:10, step:0.5, unit:'px', default:0},
     {key:'grayscale', label:'Grayscale', type:'range', min:0, max:100, step:10, unit:'%', default:0},
   ],
   previewText:'Image',
   onUpdate:(v, box) => {
     box.style.opacity = v.opacity;
     box.style.filter = `blur(${v.blur}px) grayscale(${v.grayscale}%)`;
   }
 },
 code:`.box {
  opacity: <span class="num">0.8</span>;
  filter: blur(<span class="num">2</span>px) grayscale(<span class="num">50</span>%);
}`},

];
