/* =========================================================
   DATA: Tailwind CSS Roadmap — 24 topics sa 5 Phases (js/data/topics.js)
   ========================================================= */

const PHASES = [
  { id: "phase1", label: "Phase 1 — Utility-First Mindset" },
  { id: "phase2", label: "Phase 2 — Layout Systems" },
  { id: "phase3", label: "Phase 3 — State & Interaction" },
  { id: "phase4", label: "Phase 4 — Customization & Scaling" },
  { id: "phase5", label: "Phase 5 — Production-Level" },
];

const TOPICS = [

/* ============ PHASE 1: UTILITY-FIRST MINDSET ============ */

{n:1, phase:"phase1", id:"utility-first-mindset", title:"Utility-First Mindset (Bakit Ganito ang Approach)",
 saan:"Bawat styling decision sa buong project — ito ang pundasyon ng buong Tailwind approach, hindi lang isang feature.",
 kailan:"Palagi — sa halip na mag-isip ng bagong class name kada element, dapat mag-isip ka na sa 'anong mga utilities ang kailangan ko para dito'.",
 bakit:"Sa plain CSS, gumagawa ka ng bagong class kada element (<code>.card-title</code>, <code>.card-desc</code>...) — parang gumagawa ka ng sariling recipe kada ulam. Sa Tailwind, may paubos na 'ingredients' (utilities) na pwede mong i-combine kahit anong ulam gawin mo. Mas mabilis, mas consistent, at hindi ka na naghahanap ng magandang pangalan para sa bawat class.",
 code:`<span class="cm">/* Traditional CSS — bagong class kada element */</span>
<span class="fn">.card-title</span> {
  font-size: <span class="num">1.25rem</span>;
  font-weight: <span class="num">700</span>;
  color: <span class="str">#1f2937</span>;
  margin-bottom: <span class="num">0.5rem</span>;
}

<span class="cm">&lt;!-- Tailwind — direktang i-compose gamit ang utilities --&gt;</span>
&lt;h2 <span class="kw">class</span>=<span class="str">"text-xl font-bold text-gray-800 mb-2"</span>&gt;
  Judul
&lt;/h2&gt;`},

{n:2, phase:"phase1", id:"installation", title:"Pag-install ng Tailwind CSS (Windows/Mac/Linux + Frameworks)",
 saan:"Simula ng bawat bagong project — kailangan mong i-setup ito minsan bago mo magamit ang kahit anong utility class.",
 kailan:"Sa simula ng project. Ang eksaktong hakbang ay nagbabago-bago depende sa framework (Vite, Next.js, plain HTML), pero pareho lang ang install command sa Windows, Mac, at Linux dahil npm-based ito.",
 bakit:"Kailangan ng Tailwind ng build step (PostCSS) para i-scan ang mga files mo at i-generate lang ang mga utility classes na aktwal mong ginagamit — hindi ito basta static na CSS file na i-download mo lang.",
 code:`<span class="cm">// Ang npm install command ay PAREHO sa Windows, macOS, at Linux,</span>
<span class="cm">// basta may Node.js (v18+) na naka-install ka.</span>

<span class="cm">// 1. I-verify muna kung may Node.js (lahat ng OS)</span>
node -v
npm -v

<span class="cm">// 2. Gumawa ng bagong Vite project (pinaka-karaniwan ngayon)</span>
npm create vite@latest my-app
cd my-app
npm install

<span class="cm">// 3. I-install ang Tailwind CSS</span>
npm install tailwindcss @tailwindcss/vite

<span class="cm">// 4. Idagdag sa vite.config.js</span>
<span class="kw">import</span> tailwindcss <span class="kw">from</span> <span class="str">'@tailwindcss/vite'</span>;
<span class="kw">export default</span> {
  plugins: [tailwindcss()],
};

<span class="cm">// 5. Idagdag sa main CSS file (hal. src/style.css)</span>
<span class="cm">@import "tailwindcss";</span>`,
 table:{head:["OS","Paano Mag-install ng Node.js"], rows:[
   ["Windows","I-download ang installer sa nodejs.org, o gamitin ang <code>winget install OpenJS.NodeJS</code>"],
   ["macOS","<code>brew install node</code> (gamit ang Homebrew)"],
   ["Linux (Ubuntu/Debian)","<code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -</code> pagkatapos <code>sudo apt install nodejs</code>"]
 ]},
 note:"Simula Tailwind CSS v4, walang na hiwalay na <code>tailwind.config.js</code> at <code>npx tailwindcss init</code> na kailangan bilang default — gamit na lang ang <code>@import \"tailwindcss\"</code> sa CSS file at optional na CSS-based config (tingnan ang topic tungkol dito sa Phase 4/5)."},

{n:3, phase:"phase1", id:"spacing", title:"Spacing Utilities",
 saan:"Padding, margin, at gap sa pagitan ng elements — literal na lahat ng layout na may spacing.",
 kailan:"Kapag kailangan mong maglagay ng distansya sa loob (padding) o labas (margin) ng isang element, o pagitan ng mga child elements (gap).",
 bakit:"Sa halip na mag-isip ng exact pixel values palagi, may consistent na scale ang Tailwind (0, 1, 2, 4, 6, 8...) na naka-base sa <code>0.25rem</code> increments — ito ang nagbibigay ng visual consistency sa buong app nang hindi mo kailangang i-memorize ang custom values.",
 code:`<span class="cm">&lt;!-- p = padding, m = margin --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"p-4"</span>&gt;...&lt;/div&gt;      <span class="cm">// padding: 1rem lahat ng sides</span>
&lt;div <span class="kw">class</span>=<span class="str">"px-6 py-2"</span>&gt;...&lt;/div&gt; <span class="cm">// px = padding-left+right, py = top+bottom</span>
&lt;div <span class="kw">class</span>=<span class="str">"m-2"</span>&gt;...&lt;/div&gt;      <span class="cm">// margin: 0.5rem lahat ng sides</span>
&lt;div <span class="kw">class</span>=<span class="str">"mt-4 mb-8"</span>&gt;...&lt;/div&gt; <span class="cm">// mt = margin-top, mb = margin-bottom</span>

<span class="cm">&lt;!-- gap = pagitan ng mga flex/grid children --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"flex gap-3"</span>&gt;
  &lt;div&gt;Item 1&lt;/div&gt;
  &lt;div&gt;Item 2&lt;/div&gt;
&lt;/div&gt;`,
 table:{head:["Scale","Value","Halimbawa"], rows:[
   ["<code>1</code>","0.25rem (4px)","<code>p-1</code>"],
   ["<code>2</code>","0.5rem (8px)","<code>m-2</code>"],
   ["<code>4</code>","1rem (16px)","<code>gap-4</code>"],
   ["<code>8</code>","2rem (32px)","<code>py-8</code>"]
 ]}},

{n:4, phase:"phase1", id:"sizing", title:"Sizing Utilities",
 saan:"Pagtakda ng width at height ng elements — containers, images, buttons, full-page layouts.",
 kailan:"Kapag kailangan mong i-control kung gaano kalaki (o kaliit) ang isang element, o kapag gusto mong kumuha ito ng buong laki ng parent o ng screen.",
 bakit:"Nagbibigay ito ng malinaw na paraan para mag-set ng fixed, relative, o viewport-based na sizes nang hindi kailangan bumaba sa custom CSS — mula sa simpleng percentage hanggang sa complex na max-width constraints.",
 code:`&lt;div <span class="kw">class</span>=<span class="str">"w-full"</span>&gt;...&lt;/div&gt;      <span class="cm">// width: 100%</span>
&lt;div <span class="kw">class</span>=<span class="str">"h-screen"</span>&gt;...&lt;/div&gt;    <span class="cm">// height: 100vh</span>
&lt;div <span class="kw">class</span>=<span class="str">"w-1/2"</span>&gt;...&lt;/div&gt;      <span class="cm">// width: 50%</span>
&lt;div <span class="kw">class</span>=<span class="str">"max-w-lg"</span>&gt;...&lt;/div&gt;    <span class="cm">// max-width: 32rem</span>
&lt;div <span class="kw">class</span>=<span class="str">"min-h-screen"</span>&gt;...&lt;/div&gt; <span class="cm">// min-height: 100vh</span>

<span class="cm">&lt;!-- Karaniwang pattern: centered card na may max width --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"max-w-md mx-auto w-full"</span>&gt;
  Content
&lt;/div&gt;`},

{n:5, phase:"phase1", id:"colors", title:"Colors",
 saan:"Background, text, border, at halos anumang visual property na may kulay.",
 kailan:"Kapag naglalagay ng kulay sa kahit anong element — mula sa buong page background hanggang sa maliit na icon.",
 bakit:"May consistent na color palette ang Tailwind (bawat kulay may 11 shades mula 50 hanggang 950) na sumusunod sa isang predictable na naming pattern — ibig sabihin, kahit gaanong kulay ang gamitin ng team, magkakatugma pa rin ito dahil parehong scale ang ginagamit.",
 code:`&lt;div <span class="kw">class</span>=<span class="str">"bg-blue-500"</span>&gt;...&lt;/div&gt;      <span class="cm">// background color</span>
&lt;p <span class="kw">class</span>=<span class="str">"text-gray-800"</span>&gt;...&lt;/p&gt;         <span class="cm">// text color</span>
&lt;div <span class="kw">class</span>=<span class="str">"border border-red-300"</span>&gt;...&lt;/div&gt; <span class="cm">// border color</span>

<span class="cm">&lt;!-- Shade scale: 50 (pinakamaliwanag) hanggang 950 (pinakamadilim) --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-cyan-50"</span>&gt;...&lt;/div&gt;   <span class="cm">// napakaliwanag</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-cyan-500"</span>&gt;...&lt;/div&gt;  <span class="cm">// base color</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-cyan-950"</span>&gt;...&lt;/div&gt;  <span class="cm">// napakadilim</span>

<span class="cm">&lt;!-- Opacity modifier gamit ang slash syntax --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-black/50"</span>&gt;...&lt;/div&gt; <span class="cm">// 50% opacity na black</span>`},

{n:6, phase:"phase1", id:"typography", title:"Typography Utilities",
 saan:"Anumang text sa page — headings, paragraphs, labels, buttons.",
 kailan:"Kapag kailangan mong i-control ang laki, bigat, linya-space, o alignment ng text.",
 bakit:"Binibigyan ka nito ng type scale na consistent (text-sm hanggang text-9xl) at mga utilities para sa buong typographic hierarchy nang hindi kailangang mag-define ng custom font sizes sa bawat lugar.",
 code:`&lt;h1 <span class="kw">class</span>=<span class="str">"text-4xl font-bold"</span>&gt;Malaking Title&lt;/h1&gt;
&lt;p <span class="kw">class</span>=<span class="str">"text-base leading-relaxed"</span>&gt;
  Regular paragraph na may relaxed line-height para sa mas madaling basahin.
&lt;/p&gt;
&lt;span <span class="kw">class</span>=<span class="str">"text-sm text-gray-500"</span>&gt;Caption text&lt;/span&gt;

<span class="cm">&lt;!-- Font weight scale --&gt;</span>
&lt;p <span class="kw">class</span>=<span class="str">"font-light"</span>&gt;Light&lt;/p&gt;
&lt;p <span class="kw">class</span>=<span class="str">"font-normal"</span>&gt;Normal&lt;/p&gt;
&lt;p <span class="kw">class</span>=<span class="str">"font-semibold"</span>&gt;Semibold&lt;/p&gt;
&lt;p <span class="kw">class</span>=<span class="str">"font-bold"</span>&gt;Bold&lt;/p&gt;

<span class="cm">&lt;!-- Text alignment at truncation --&gt;</span>
&lt;p <span class="kw">class</span>=<span class="str">"text-center truncate"</span>&gt;Naka-center at pinuputol kung sobra ang haba&lt;/p&gt;`},


/* ============ PHASE 2: LAYOUT SYSTEMS ============ */

{n:7, phase:"phase2", id:"flexbox", title:"Flexbox",
 saan:"One-dimensional layouts — navbars, button groups, card content na naka-row o naka-column.",
 kailan:"Kapag kailangan mong i-align o i-distribute ang mga elements sa isang direksyon (pahalang o pababa), lalo na kung dynamic ang bilang ng items.",
 bakit:"Layout ang 'skeleton' ng bawat UI. Kung mali ang buto, kahit gaano kaganda ang kulay, gigiba pa rin. Flexbox ang pinaka-madalas gamitin para sa mga simpleng alignment problems bago pa man kailanganin ang buong Grid system.",
 code:`&lt;div <span class="kw">class</span>=<span class="str">"flex justify-between items-center"</span>&gt;
  &lt;span&gt;Logo&lt;/span&gt;
  &lt;nav&gt;Menu Links&lt;/nav&gt;
&lt;/div&gt;

<span class="cm">&lt;!-- flex-col para sa vertical stacking --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"flex flex-col gap-2"</span>&gt;
  &lt;div&gt;Item 1&lt;/div&gt;
  &lt;div&gt;Item 2&lt;/div&gt;
&lt;/div&gt;

<span class="cm">&lt;!-- flex-wrap kapag gusto mong lumipat ng linya kapag sobra na --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"flex flex-wrap gap-3"</span>&gt;...&lt;/div&gt;`,
 table:{head:["Utility","Ginagawa"], rows:[
   ["<code>flex-row</code> / <code>flex-col</code>","Direksyon ng layout (default: row)"],
   ["<code>justify-between/center/start/end</code>","Pag-space sa main axis"],
   ["<code>items-center/start/end</code>","Pag-align sa cross axis"],
   ["<code>flex-1</code>","Kunin ang lahat ng available na space"],
   ["<code>flex-wrap</code>","Payagan mag-wrap sa susunod na linya"]
 ]}},

{n:8, phase:"phase2", id:"grid", title:"Grid",
 saan:"Two-dimensional layouts — image galleries, dashboard cards, complex page structures na may rows at columns.",
 kailan:"Kapag kailangan mo ng control sa PAREHONG rows at columns nang sabay, hindi lang isang direksyon (na siyang limitasyon ng Flexbox).",
 bakit:"Mas mahusay ang Grid kaysa Flexbox para sa mga layout na may consistent na structure sa magkabilang direksyon — hal. isang gallery na may 3 columns kada row, kahit gaano karaming items.",
 code:`<span class="cm">&lt;!-- 3-column grid na may consistent gap --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"grid grid-cols-3 gap-4"</span>&gt;
  &lt;div&gt;Card 1&lt;/div&gt;
  &lt;div&gt;Card 2&lt;/div&gt;
  &lt;div&gt;Card 3&lt;/div&gt;
&lt;/div&gt;

<span class="cm">&lt;!-- Responsive grid — magbabago ang columns depende sa screen size --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"</span>&gt;
  ...
&lt;/div&gt;

<span class="cm">&lt;!-- col-span para sa isang item na dapat mas malawak --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"grid grid-cols-3 gap-4"</span>&gt;
  &lt;div <span class="kw">class</span>=<span class="str">"col-span-2"</span>&gt;Malawak na item&lt;/div&gt;
  &lt;div&gt;Regular item&lt;/div&gt;
&lt;/div&gt;`},

{n:9, phase:"phase2", id:"responsive", title:"Responsive Design (sm/md/lg/xl prefixes)",
 saan:"Halos lahat ng modernong website — dapat gumana nang maayos mula phone hanggang desktop monitor.",
 kailan:"Kapag kailangan mong magbago ang layout, spacing, o visibility ng isang element depende sa laki ng screen.",
 bakit:"Gumagamit ang Tailwind ng <b>mobile-first approach</b> — ang base class (walang prefix) ay para sa PINAKAMALIIT na screen (phone), at dinadagdagan mo ng override paakyat sa mas malaking screens. Ito ang kabaligtaran ng maling akala na 'desktop muna, tapos i-adjust pababa'.",
 code:`<span class="cm">&lt;!-- Base (walang prefix) = para sa mobile/phone --&gt;</span>
<span class="cm">&lt;!-- md: at pataas = override para sa mas malaking screens --&gt;</span>

&lt;div <span class="kw">class</span>=<span class="str">"text-sm md:text-base lg:text-lg"</span>&gt;
  Maliit sa phone, medium sa tablet, malaki sa desktop
&lt;/div&gt;

&lt;div <span class="kw">class</span>=<span class="str">"flex flex-col md:flex-row"</span>&gt;
  <span class="cm">// naka-stack (patayo) sa phone, naka-row (pahalang) sa tablet pataas</span>
&lt;/div&gt;

&lt;div <span class="kw">class</span>=<span class="str">"hidden lg:block"</span>&gt;
  Sidebar na lalabas lang sa desktop, tago sa phone/tablet
&lt;/div&gt;`,
 table:{head:["Prefix","Minimum Width","Karaniwang Device"], rows:[
   ["(wala)","0px","Phone (base/default)"],
   ["<code>sm:</code>","640px","Malaking phone"],
   ["<code>md:</code>","768px","Tablet"],
   ["<code>lg:</code>","1024px","Laptop"],
   ["<code>xl:</code>","1280px","Desktop"]
 ]}},

{n:10, phase:"phase2", id:"container-centering", title:"Container & Max-Width Centering",
 saan:"Buong page layouts — pag-limit ng content sa isang max width at pag-center nito sa gitna ng screen.",
 kailan:"Kapag ayaw mong sumingaw ang content sa buong lapad ng napakalaking monitor — karaniwang pattern sa halos lahat ng modernong website.",
 bakit:"Nagbibigay ito ng 'reading-friendly' na width limit at consistent na centering nang hindi paulit-ulit isinusulat ang parehong pattern (max-width + auto margins) sa bawat page.",
 code:`<span class="cm">&lt;!-- mx-auto = margin-left at margin-right: auto (nagce-center) --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"max-w-4xl mx-auto px-4"</span>&gt;
  Naka-center ang content, may max width, at may padding sa gilid
  para hindi dumikit sa edge kapag maliit ang screen.
&lt;/div&gt;

<span class="cm">&lt;!-- container class — kumukuha ng max-width base sa breakpoint --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"container mx-auto"</span>&gt;
  Awtomatikong nagbabago ang max-width depende sa breakpoint
&lt;/div&gt;`},

{n:11, phase:"phase2", id:"aspect-ratio-object-fit", title:"Aspect Ratio & Object Fit",
 saan:"Images, videos, at embeds na dapat mapanatili ang proportion nito kahit magbago ang laki ng container.",
 kailan:"Kapag naglalagay ng thumbnail, video embed, o anumang media na dapat consistent ang hugis kahit magkaiba ang orihinal na dimensions ng source file.",
 bakit:"Bago ang <code>aspect-*</code> utilities, kailangan ng padding-hack (padding-top percentage trick) para lang mapanatili ang ratio — mas simple at direkta na ngayon.",
 code:`<span class="cm">&lt;!-- Palaging 16:9 kahit anong laki ng container --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"aspect-video"</span>&gt;
  &lt;iframe src=<span class="str">"..."</span> <span class="kw">class</span>=<span class="str">"w-full h-full"</span>&gt;&lt;/iframe&gt;
&lt;/div&gt;

<span class="cm">&lt;!-- Square thumbnail — object-cover para hindi mabaluktot ang image --&gt;</span>
&lt;img src=<span class="str">"photo.jpg"</span> <span class="kw">class</span>=<span class="str">"aspect-square object-cover w-full"</span> /&gt;

<span class="cm">&lt;!-- object-contain kapag ayaw mong ma-crop ang image --&gt;</span>
&lt;img src=<span class="str">"logo.png"</span> <span class="kw">class</span>=<span class="str">"aspect-square object-contain"</span> /&gt;`},

/* ============ PHASE 3: STATE & INTERACTION ============ */

{n:12, phase:"phase3", id:"hover-focus", title:"Hover & Focus States",
 saan:"Buttons, links, form inputs, at anumang interactive element sa page.",
 kailan:"Kapag gusto mong magbago ang itsura ng element kapag hinover ng mouse o na-focus (hal. kapag nag-tab papunta sa isang input field).",
 bakit:"Hindi static ang UI — may buhay, may reaction sa user. Ang mga state modifiers ay nagbibigay ng visual feedback na kailangan para malaman ng user na interactive ang isang element.",
 code:`&lt;button <span class="kw">class</span>=<span class="str">"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"</span>&gt;
  Click Me
&lt;/button&gt;

<span class="cm">&lt;!-- focus:ring — visible outline kapag naka-focus (importante para sa accessibility) --&gt;</span>
&lt;input <span class="kw">class</span>=<span class="str">"border focus:ring-2 focus:ring-blue-400 focus:outline-none px-3 py-2"</span> /&gt;

<span class="cm">&lt;!-- pwede ring i-combine ang multiple states --&gt;</span>
&lt;button <span class="kw">class</span>=<span class="str">"bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 disabled:opacity-50"</span>&gt;
  Submit
&lt;/button&gt;`},

{n:13, phase:"phase3", id:"dark-mode", title:"Dark Mode",
 saan:"Buong application — mas standard na ngayon ang pagbibigay ng dark mode option sa modernong apps.",
 kailan:"Kapag gusto mong magkaroon ng magkaibang color scheme depende sa preference ng user (dark vs light).",
 bakit:"Sa halip na mag-maintain ng magkahiwalay na stylesheet, hinahayaan kang i-define ang dark mode variant DIRECTLY sa parehong class list — mas madaling i-maintain at makita agad kung ano ang magbabago.",
 code:`<span class="cm">&lt;!-- Awtomatikong lumilipat base sa system preference (default sa Tailwind v4) --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-white dark:bg-gray-900 text-gray-900 dark:text-white"</span>&gt;
  Content na umaangkop sa light/dark mode
&lt;/div&gt;

<span class="cm">&lt;!-- Kung gusto ng manual toggle (hindi system-based), i-configure sa CSS: --&gt;</span>
<span class="cm">@custom-variant dark (&:where(.dark, .dark *));</span>

<span class="cm">&lt;!-- Tapos, i-toggle ang 'dark' class sa &lt;html&gt; via JS --&gt;</span>
document.documentElement.classList.toggle(<span class="str">'dark'</span>);`},

{n:14, phase:"phase3", id:"group-peer", title:"Group & Peer Modifiers",
 saan:"Mga UI patterns kung saan ang isang element ay dapat magbago batay sa state ng KAPITBAHAY o PARENT nito — cards na may hover effect sa child, custom checkboxes.",
 kailan:"<code>group-*</code> → kapag ang PARENT ang trigger, at child ang tumutugon. <code>peer-*</code> → kapag ang isang SIBLING element ang trigger, at kapitbahay nito ang tumutugon.",
 bakit:"Sa plain CSS, kailangan mo ng JavaScript o kumplikadong selectors (<code>~</code>, <code>+</code>) para dito. Binibigyan ka ng Tailwind ng declarative na paraan na direktang nasa class list mo makikita.",
 code:`<span class="cm">&lt;!-- GROUP: parent triggers child --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"group cursor-pointer"</span>&gt;
  &lt;img <span class="kw">class</span>=<span class="str">"opacity-75 group-hover:opacity-100"</span> /&gt;
  &lt;p <span class="kw">class</span>=<span class="str">"hidden group-hover:block"</span>&gt;Lalabas kapag naka-hover ang buong card&lt;/p&gt;
&lt;/div&gt;

<span class="cm">&lt;!-- PEER: sibling triggers sibling --&gt;</span>
&lt;input type=<span class="str">"checkbox"</span> <span class="kw">class</span>=<span class="str">"peer"</span> /&gt;
&lt;p <span class="kw">class</span>=<span class="str">"hidden peer-checked:block"</span>&gt;
  Lalabas lang kapag naka-check ang checkbox sa itaas
&lt;/p&gt;

&lt;input type=<span class="str">"email"</span> <span class="kw">class</span>=<span class="str">"peer border"</span> /&gt;
&lt;p <span class="kw">class</span>=<span class="str">"hidden peer-invalid:block text-red-500"</span>&gt;
  Invalid email format
&lt;/p&gt;`},

{n:15, phase:"phase3", id:"transitions-animations", title:"Transitions & Animations",
 saan:"Hover effects, modal open/close, loading spinners, at anumang smooth na visual change.",
 kailan:"Kapag gusto mong i-smooth-out ang isang state change (hal. color change sa hover) sa halip na biglaan itong lumipat.",
 bakit:"Ang biglaang pagbabago ng UI ay pakiramdam na 'harsh' at hindi polished — nagbibigay ang transitions ng maliit na animation na nagpapaganda ng perceived quality ng interface.",
 code:`<span class="cm">&lt;!-- transition + duration + property na babaguhin --&gt;</span>
&lt;button <span class="kw">class</span>=<span class="str">"bg-cyan-500 hover:bg-cyan-700 transition-colors duration-300"</span>&gt;
  Smooth Color Change
&lt;/button&gt;

<span class="cm">&lt;!-- transition-all kapag maraming properties ang nagbabago --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"scale-100 hover:scale-105 transition-transform duration-200"</span>&gt;
  Lumalaki nang bahagya kapag na-hover
&lt;/div&gt;

<span class="cm">&lt;!-- Built-in animations — spin, pulse, bounce --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"animate-spin"</span>&gt;Loading Icon&lt;/div&gt;
&lt;div <span class="kw">class</span>=<span class="str">"animate-pulse"</span>&gt;Skeleton Loader&lt;/div&gt;`},

/* ============ PHASE 4: CUSTOMIZATION & SCALING ============ */

{n:16, phase:"phase4", id:"extending-config", title:"Extending tailwind.config.js (o CSS-based @theme)",
 saan:"Buong project-level na configuration — sariling color palette, spacing scale, custom fonts.",
 kailan:"Kapag lumalaki ang project, kailangan mo ng sariling 'design language,' hindi puro default — hal. brand colors ng company, custom font family.",
 bakit:"Kahit malawak ang default palette ng Tailwind, kailangan pa rin ng karamihan ng projects ng sariling brand colors at consistent na custom values — sa halip na paulit-ulit isulat ang parehong arbitrary value, i-define mo ito minsan sa config.",
 code:`<span class="cm">// tailwind.config.js (Tailwind v3 style)</span>
<span class="kw">module</span>.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          <span class="num">500</span>: <span class="str">'#0EA5B7'</span>,
          <span class="num">600</span>: <span class="str">'#0B8494'</span>,
        }
      },
      spacing: {
        <span class="str">'128'</span>: <span class="str">'32rem'</span>,
      }
    }
  }
}

<span class="cm">/* Tailwind v4 style — direkta sa CSS gamit ang @theme */</span>
<span class="cm">@theme {
  --color-brand-500: #0EA5B7;
  --spacing-128: 32rem;
}</span>

<span class="cm">&lt;!-- Pagkatapos, gamitin gaya ng normal na utility --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-brand-500 p-128"</span>&gt;...&lt;/div&gt;`,
 note:"Sa Tailwind v4, minamabuti nang gamitin ang CSS-based <code>@theme</code> sa halip na JS config file — mas malapit ito sa native CSS at mas mabilis ang build."},

{n:17, phase:"phase4", id:"apply-directive", title:"@apply Directive",
 saan:"Mga component na may sobrang haba nang class list na paulit-ulit ginagamit — buttons, cards na may fixed na set ng styles.",
 kailan:"Bihira lang, at may pag-iingat — kapag talagang paulit-ulit ang EKSAKTONG parehong combination ng utilities sa maraming lugar, at hindi practical ang component extraction (hal. sa plain HTML na walang framework).",
 bakit:"Pero mag-ingat: kapag sobra ang gamit ng <code>@apply</code>, babalik ka na naman sa 'custom CSS classes' na problema na dapat iniwasan mo sa unang lugar. Ang totoong solusyon sa duplication ay component extraction (React/Vue components), hindi @apply.",
 code:`<span class="cm">/* styles.css */</span>
<span class="fn">.btn-primary</span> {
  <span class="cm">@apply bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded font-semibold;</span>
}

<span class="cm">&lt;!-- Gamit sa HTML --&gt;</span>
&lt;button <span class="kw">class</span>=<span class="str">"btn-primary"</span>&gt;Click Me&lt;/button&gt;`,
 note:"<b>Babala:</b> kung sasabihin mong 'gagawa lang ako ng .btn-primary, .btn-secondary, .card, .card-header...' — huminto ka, dahil parang ginagawa mo na naman ang parehong sistema na iniiwasan ng utility-first approach. Component extraction (Phase 5) ang mas tamang solusyon."},

{n:18, phase:"phase4", id:"arbitrary-values", title:"Arbitrary Values",
 saan:"Mga sitwasyon kung saan walang eksaktong utility na tumutugma sa specific na value na kailangan mo.",
 kailan:"Emergency escape hatch LANG, hindi habit — hal. kapag may design spec na eksaktong <code>137px</code> ang width, at wala talagang malapit na value sa default scale.",
 bakit:"Binibigyan ka nito ng flexibility para sa mga edge cases nang hindi kailangang lumabas sa Tailwind at gumawa ng custom CSS file — pero kung palagi mo itong ginagamit, senyales ito na dapat mo nang i-extend ang config sa halip.",
 code:`<span class="cm">&lt;!-- Arbitrary value gamit ang square bracket syntax --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"w-[137px]"</span>&gt;...&lt;/div&gt;
&lt;div <span class="kw">class</span>=<span class="str">"top-[117px]"</span>&gt;...&lt;/div&gt;
&lt;div <span class="kw">class</span>=<span class="str">"bg-[#1da1f2]"</span>&gt;...&lt;/div&gt;

<span class="cm">&lt;!-- Pwede rin sa mismong CSS property (arbitrary property) --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"[mask-type:luminance]"</span>&gt;...&lt;/div&gt;

<span class="cm">&lt;!-- MALI na paggamit: paulit-ulit sa maraming lugar --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"w-[137px]"</span>&gt;...&lt;/div&gt;
&lt;div <span class="kw">class</span>=<span class="str">"w-[137px]"</span>&gt;...&lt;/div&gt;
<span class="cm">// Kung paulit-ulit ito, dapat idagdag na sa config bilang 'spacing.hero-width'</span>`},

{n:19, phase:"phase4", id:"conditional-classes-react", title:"Conditional Classes sa React (clsx / tailwind-merge)",
 saan:"React/Vue components kung saan nagbabago ang classes base sa props o state — buttons na may variant, active states.",
 kailan:"Kapag kailangan mong i-conditionally apply ang ilang classes depende sa isang boolean o variant prop, at gusto mong maiwasan ang messy na string concatenation.",
 bakit:"Ang plain template literals para sa conditional classes ay nagiging magulo at error-prone (lalo na kapag maraming conditions) — ang mga library tulad ng <code>clsx</code> ay nagbibigay ng malinis na syntax, at ang <code>tailwind-merge</code> ay nag-a-ayos ng conflicts kapag may duplicate/magkasalungat na utilities.",
 code:`<span class="kw">import</span> clsx <span class="kw">from</span> <span class="str">'clsx'</span>;
<span class="kw">import</span> { twMerge } <span class="kw">from</span> <span class="str">'tailwind-merge'</span>;

<span class="kw">function</span> <span class="fn">Button</span>({ variant, disabled, className }) {
  <span class="kw">return</span> (
    &lt;button
      className={twMerge(clsx(
        <span class="str">'px-4 py-2 rounded font-semibold'</span>,
        variant === <span class="str">'primary'</span> && <span class="str">'bg-cyan-500 text-white'</span>,
        variant === <span class="str">'secondary'</span> && <span class="str">'bg-gray-200 text-gray-800'</span>,
        disabled && <span class="str">'opacity-50 cursor-not-allowed'</span>,
        className <span class="cm">// pinapayagan i-override mula sa labas nang walang conflict</span>
      ))}
    &gt;
      Click Me
    &lt;/button&gt;
  );
}`,
 note:"Ang <code>twMerge</code> ay solusyon sa isang common na bug: kapag pinagsama mo ang <code>'p-2'</code> at <code>'p-4'</code> sa plain string, PAREHONG mananatili ang dalawa sa output at magulo ang resulta — inaayos ito ni twMerge para manalo lang ang huling isa."},

/* ============ PHASE 5: PRODUCTION-LEVEL ============ */

{n:20, phase:"phase5", id:"component-extraction", title:"Component Extraction sa React/Vue",
 saan:"Malalaking projects na may paulit-ulit na UI patterns — buttons, cards, form inputs na ginagamit sa maraming pahina.",
 kailan:"Kapag napansin mong paulit-ulit mo nang isinusulat ang parehong (o halos parehong) combination ng utility classes sa maraming lugar.",
 bakit:"Ito ang TUNAY na solusyon sa duplication sa Tailwind ecosystem — sa halip na gumawa ng custom CSS class (@apply) para dito, ginagawa mong reusable na component ang buong element (kasama ang markup, hindi lang ang classes).",
 code:`<span class="cm">// Button.jsx — reusable component na naka-Tailwind</span>
<span class="kw">function</span> <span class="fn">Button</span>({ children, variant = <span class="str">'primary'</span>, ...props }) {
  <span class="kw">const</span> baseClasses = <span class="str">'px-4 py-2 rounded font-semibold transition-colors'</span>;
  <span class="kw">const</span> variants = {
    primary: <span class="str">'bg-cyan-500 hover:bg-cyan-600 text-white'</span>,
    secondary: <span class="str">'bg-gray-200 hover:bg-gray-300 text-gray-800'</span>,
  };

  <span class="kw">return</span> (
    &lt;button className={<span class="str">\`\${baseClasses} \${variants[variant]}\`</span>} {...props}&gt;
      {children}
    &lt;/button&gt;
  );
}

<span class="cm">// Gamit sa ibang lugar — walang paulit-ulit na class list</span>
&lt;Button variant=<span class="str">"primary"</span>&gt;Save&lt;/Button&gt;
&lt;Button variant=<span class="str">"secondary"</span>&gt;Cancel&lt;/Button&gt;`},

{n:21, phase:"phase5", id:"jit-compilation", title:"JIT Compilation & Content Scanning",
 saan:"Sa likod ng build process ng bawat Tailwind project — hindi mo ito direktang ginagamit, pero ito ang nagpapaliit sa final CSS bundle mo.",
 kailan:"Awtomatiko itong tumatakbo kapag nag-build ka ng project — sinusuri nito ang mga files na nakalista sa <code>content</code> config (o awtomatikong na-detect sa v4).",
 bakit:"Hindi lang gumagana, dapat mabilis at maintainable din. Sinusuri ni Tailwind (Just-In-Time engine) ang mga source files mo (JSX, HTML, Vue, atbp.) at pinuputol lang ang mga utility classes na AKTWAL mong ginamit — kaya kahit libu-libong posibleng utility classes ang meron ang Tailwind, maliit lang ang final CSS na ipinapadala sa browser.",
 code:`<span class="cm">// tailwind.config.js — content array ang sinusuri</span>
<span class="kw">module</span>.exports = {
  content: [
    <span class="str">"./src/**/*.{js,jsx,ts,tsx}"</span>,
    <span class="str">"./index.html"</span>,
  ],
  <span class="cm">// ...</span>
}

<span class="cm">// Paalala: dapat KUMPLETO ang class name sa source code,</span>
<span class="cm">// hindi ito kayang i-detect kung dynamic na tinatayo (concatenated):</span>

<span class="cm">// MALI — hindi makikita ng scanner ang buong class name</span>
<span class="kw">const</span> color = <span class="str">'blue'</span>;
&lt;div className={<span class="str">\`bg-\${color}-500\`</span>}&gt;&lt;/div&gt;

<span class="cm">// TAMA — kumpleto ang bawat posibleng class name sa source</span>
<span class="kw">const</span> colorClasses = {
  blue: <span class="str">'bg-blue-500'</span>,
  red: <span class="str">'bg-red-500'</span>,
};
&lt;div className={colorClasses[color]}&gt;&lt;/div&gt;`,
 note:"Ito ang dahilan kung bakit ligtas gumamit ng maraming utility classes nang hindi tumataba ang final bundle — pero dapat sundin ang pattern na 'buo ang class name sa code', hindi dynamic string building."},

{n:22, phase:"phase5", id:"design-tokens", title:"Design Tokens (Figma Variables → Config)",
 saan:"Koneksyon sa pagitan ng design team (Figma) at development team (code) — pag-align ng parehong 'source of truth' para sa colors, spacing, typography.",
 kailan:"Kapag may established na design system ang team, at kailangan mong tiyakin na ang mga values sa Tailwind config ay eksaktong tumutugma sa mga variables na ginagamit ng designers.",
 bakit:"Kung magkaiba ang color values sa Figma at sa code, unti-unting lumilihis ang UI mula sa disenyo — sa pag-align ng Tailwind config sa design tokens, iisa lang ang source of truth para sa parehong disenyo at code.",
 code:`<span class="cm">/* Figma variables (halimbawa): */</span>
<span class="cm">// color/brand/primary = #0EA5B7</span>
<span class="cm">// spacing/section-gap = 48px</span>

<span class="cm">/* I-mirror sa Tailwind config (o CSS @theme sa v4) gamit ang parehong pangalan */</span>
<span class="cm">@theme {
  --color-brand-primary: #0EA5B7;
  --spacing-section-gap: 3rem;
}</span>

<span class="cm">&lt;!-- Ngayon, ang class name mismo ay sumasalamin sa design token --&gt;</span>
&lt;section <span class="kw">class</span>=<span class="str">"bg-brand-primary gap-section-gap"</span>&gt;
  ...
&lt;/section&gt;`,
 note:"May mga plugins/tools (hal. Figma Tokens, Style Dictionary) na kayang mag-export ng design tokens papunta sa format na direktang magagamit sa Tailwind config, para awtomatiko ang pag-sync sa halip na manual copy-paste."},

{n:23, phase:"phase5", id:"official-plugins", title:"Official Plugins (@tailwindcss/typography, /forms)",
 saan:"Mga karaniwang UI patterns na mahirap i-style gamit lang ang base utilities — long-form content (blog posts, CMS content), form elements.",
 kailan:"<code>@tailwindcss/typography</code> → kapag naglalagay ng HTML content na galing sa CMS o markdown (walang kontrol ka sa individual elements). <code>@tailwindcss/forms</code> → kapag gusto mong magkaroon ng consistent, resettable na base styles ang form inputs bago i-customize.",
 bakit:"Mahirap mag-utility-first sa content na hindi mo kontrolado ang structure (hal. HTML mula sa isang rich text editor) — binibigyan ka ng typography plugin ng isang class (<code>prose</code>) na nag-aayos sa lahat ng nested elements nang sabay-sabay.",
 code:`<span class="cm">// I-install ang plugin</span>
npm install @tailwindcss/typography @tailwindcss/forms

<span class="cm">/* I-register sa CSS (v4 style) */</span>
<span class="cm">@plugin "@tailwindcss/typography";
@plugin "@tailwindcss/forms";</span>

<span class="cm">&lt;!-- Gamit ang 'prose' class sa CMS/markdown content --&gt;</span>
&lt;article <span class="kw">class</span>=<span class="str">"prose lg:prose-lg"</span>&gt;
  {dangerouslySetHTML(markdownContent)}
&lt;/article&gt;

<span class="cm">&lt;!-- Forms plugin — awtomatikong maayos ang base styling --&gt;</span>
&lt;select <span class="kw">class</span>=<span class="str">"rounded border-gray-300"</span>&gt;
  &lt;option&gt;Option 1&lt;/option&gt;
&lt;/select&gt;`},

{n:24, phase:"phase5", id:"tailwind-v4-css-first", title:"Tailwind v4: CSS-First Configuration",
 saan:"Bagong Tailwind projects (v4 pataas) — pinalitan nito ang lumang paraan ng configuration.",
 kailan:"Kapag nagsisimula ng bagong project gamit ang Tailwind v4, o kapag nagmi-migrate mula sa v3 papunta sa v4.",
 bakit:"Sa v3, kailangan ng hiwalay na JavaScript config file (<code>tailwind.config.js</code>) para sa customization. Sa v4, direkta na itong nasa CSS gamit ang <code>@theme</code> block — mas malapit sa native CSS, mas mabilis ang build, at mas kaunting configuration files na kailangang i-maintain.",
 code:`<span class="cm">/* v3 style — hiwalay na JS file */</span>
<span class="cm">// tailwind.config.js
module.exports = {
  theme: {
    extend: { colors: { brand: '#0EA5B7' } }
  }
}</span>

<span class="cm">/* v4 style — direkta sa CSS, walang hiwalay na config file */</span>
<span class="cm">/* app.css */</span>
<span class="cm">@import "tailwindcss";

@theme {
  --color-brand: #0EA5B7;
  --font-display: "Inter", sans-serif;
  --breakpoint-3xl: 1920px;
}</span>

<span class="cm">&lt;!-- Direktang magagamit bilang utility --&gt;</span>
&lt;div <span class="kw">class</span>=<span class="str">"bg-brand font-display 3xl:text-2xl"</span>&gt;...&lt;/div&gt;`,
 note:"Backward-compatible pa rin ang v4 sa JS config files kung kinakailangan (hal. para sa complex logic), pero ang CSS-first approach na ang default at inirerekomendang paraan."},

];
