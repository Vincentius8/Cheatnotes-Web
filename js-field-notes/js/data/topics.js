

const TOPICS = [
{n:1, id:"variables", title:"Variables (var, let, const)",
 saan:"Literal lahat ng JS program — pag-iimbak ng anumang datos na gagamitin mo (numbers, text, results, user input).",
 kailan:"<code>let</code> → kapag magbabago ang value sa paglipas ng panahon. <code>const</code> → kapag hindi na dapat magbago ang value. <code>var</code> → matandang paraan, halos hindi na ginagamit sa modernong code.",
 bakit:"Kailangan ng paraan para 'pangalanan' at itago ang datos sa memory para magamit-gamit ulit sa ibang parte ng code, sa halip na paulit-ulit na isulat ang literal na value.",
 code:`<span class="kw">let</span> edad = <span class="num">20</span>;      
edad = <span class="num">21</span>;             

<span class="kw">const</span> pi = <span class="num">3.14</span>;      


<span class="kw">var</span> luma = <span class="str">"iwasan na gamitin"</span>; `,
 table:{head:["Keyword","Pwede bang mag-reassign?","Scope"], rows:[
   ["<code>var</code>","Oo","Function-scoped (may quirks)"],
   ["<code>let</code>","Oo","Block-scoped"],
   ["<code>const</code>","Hindi","Block-scoped"]
 ]}},

{n:2, id:"data-types", title:"Data Types (Primitive & Reference)",
 saan:"Bawat variable na ginagawa mo — kailangan mong malaman kung anong klaseng datos ang hawak nito.",
 kailan:"Tuwing nagde-declare ng variable, awtomatikong may kasamang type ang value (JS ay dynamically-typed — hindi mo kailangang i-declare ang type nang manual).",
 bakit:"Para malaman ng JS kung paano dapat pakitunguhan ang datos — halimbawa, hindi pwedeng i-multiply ang isang text/string nang direkta, at magkaiba ang comparison rules ng bawat type.",
 code:`
<span class="kw">let</span> pangalan = <span class="str">"Juan"</span>;     
<span class="kw">let</span> edad = <span class="num">25</span>;             
<span class="kw">let</span> tama = <span class="kw">true</span>;              
<span class="kw">let</span> wala = <span class="kw">null</span>;              
<span class="kw">let</span> hindiPaSetTo;              


<span class="kw">let</span> mgaPrutas = [<span class="str">"Mangga"</span>, <span class="str">"Saging"</span>]; 
<span class="kw">let</span> user = { name: <span class="str">"Maria"</span> };         

console.<span class="fn">log</span>(<span class="kw">typeof</span> edad);   
console.<span class="fn">log</span>(<span class="kw">typeof</span> mgaPrutas); `,
 table:{head:["Type","Uri","Halimbawa"], rows:[
   ["String","Primitive","<code>\"hello\"</code>"],
   ["Number","Primitive","<code>25</code>, <code>3.14</code>"],
   ["Boolean","Primitive","<code>true</code> / <code>false</code>"],
   ["Undefined","Primitive","Variable na walang value pa"],
   ["Null","Primitive","Sinadyang 'walang laman'"],
   ["Object / Array","Reference","<code>{}</code>, <code>[]</code>"]
 ]}},

{n:3, id:"operators", title:"Operators (Arithmetic, Comparison, Logical, Assignment)",
 saan:"Kalkulasyon, paghahambing ng values, pagbuo ng conditions sa if-statements at loops.",
 kailan:"Arithmetic → kapag kumakalkula (math). Comparison → kapag naghahambing ng dalawang values. Logical → kapag maraming conditions na pinagsasama. Assignment → kapag nagbibigay ng value sa variable.",
 bakit:"Ito ang mga basic building blocks para makapagdesisyon at makapag-compute ang program — walang operators, walang logic ang code.",
 code:`
<span class="kw">let</span> total = <span class="num">10</span> + <span class="num">5</span>; 


console.<span class="fn">log</span>(<span class="num">5</span> === <span class="str">"5"</span>);  
console.<span class="fn">log</span>(<span class="num">5</span> == <span class="str">"5"</span>);   


<span class="kw">let</span> tanggapin = (edad >= <span class="num">18</span>) && (may_ID === <span class="kw">true</span>);


<span class="kw">let</span> score = <span class="num">10</span>;
score += <span class="num">5</span>;  `,
 table:{head:["Uri","Halimbawa","Gamit"], rows:[
   ["Arithmetic","<code>+ - * / % **</code>","Math computations"],
   ["Comparison","<code>=== !== > < >= <=</code>","Paghahambing"],
   ["Logical","<code>&& || !</code>","Pagsasama ng conditions"],
   ["Assignment","<code>= += -= *=</code>","Pagbibigay ng value"]
 ]}},

{n:4, id:"conditionals", title:"Conditionals (if/else, switch, ternary)",
 saan:"Anumang desisyon sa code — validation, routing, UI logic (show/hide, enable/disable).",
 kailan:"<code>if/else</code> → maramihang/kumplikadong conditions. <code>switch</code> → kapag maraming specific values na susuriin sa iisang variable. <code>ternary</code> → simpleng one-line na desisyon.",
 bakit:"Para makapag-branch ang program — magkaiba ang gagawin depende sa kalagayan ng datos, sa halip na iisang linear na daloy lang.",
 code:`
<span class="kw">if</span> (grade >= <span class="num">90</span>) {
  console.<span class="fn">log</span>(<span class="str">"A"</span>);
} <span class="kw">else if</span> (grade >= <span class="num">80</span>) {
  console.<span class="fn">log</span>(<span class="str">"B"</span>);
} <span class="kw">else</span> {
  console.<span class="fn">log</span>(<span class="str">"C"</span>);
}


<span class="kw">switch</span>(day) {
  <span class="kw">case</span> <span class="str">"Mon"</span>: console.<span class="fn">log</span>(<span class="str">"Lunes"</span>); <span class="kw">break</span>;
  <span class="kw">case</span> <span class="str">"Tue"</span>: console.<span class="fn">log</span>(<span class="str">"Martes"</span>); <span class="kw">break</span>;
  <span class="kw">default</span>: console.<span class="fn">log</span>(<span class="str">"Unknown"</span>);
}


<span class="kw">let</span> status = edad >= <span class="num">18</span> ? <span class="str">"Adult"</span> : <span class="str">"Minor"</span>;`},

{n:5, id:"loops", title:"Loops (for, while, do-while, for...of, for...in)",
 saan:"Pag-uulit ng gawain — pag-print ng listahan, pagproseso ng array, pag-render ng UI items.",
 kailan:"<code>for</code> → alam mo na kung ilang beses uulitin. <code>while</code> → depende sa condition, hindi alam kung ilang beses. <code>do-while</code> → dapat tumakbo ng minsan bago i-check ang condition. <code>for...of</code> → pag-loop sa values ng array. <code>for...in</code> → pag-loop sa keys ng object.",
 bakit:"Para maiwasan ang paulit-ulit na pagsulat ng parehong code — automated ang pag-uulit ng gawain hanggang sa matupad ang condition.",
 code:`
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i < <span class="num">5</span>; i++) {
  console.<span class="fn">log</span>(i);
}


<span class="kw">let</span> i = <span class="num">0</span>;
<span class="kw">while</span> (i < <span class="num">5</span>) {
  console.<span class="fn">log</span>(i);
  i++;
}


<span class="kw">for</span> (<span class="kw">const</span> prutas <span class="kw">of</span> [<span class="str">"Mangga"</span>, <span class="str">"Saging"</span>]) {
  console.<span class="fn">log</span>(prutas);
}


<span class="kw">const</span> user = { name: <span class="str">"Juan"</span>, age: <span class="num">25</span> };
<span class="kw">for</span> (<span class="kw">const</span> key <span class="kw">in</span> user) {
  console.<span class="fn">log</span>(key, user[key]);
}`},

{n:6, id:"functions", title:"Functions",
 saan:"Anumang reusable na block ng logic — calculations, validations, event handlers, API calls.",
 kailan:"Kapag may gawain kang paulit-ulit gagawin, o gusto mong hatiin ang malaking problema sa maliliit, pinangalanang piraso.",
 bakit:"Para maiwasan ang duplicate code (DRY — Don't Repeat Yourself) at para mas madaling basahin/i-maintain ang program.",
 code:`
<span class="kw">function</span> <span class="fn">bati</span>(pangalan) {
  <span class="kw">return</span> <span class="str">\`Kamusta, \${pangalan}!\`</span>;
}


<span class="kw">const</span> multiply = <span class="kw">function</span>(a, b) {
  <span class="kw">return</span> a * b;
};


<span class="kw">const</span> add = (a, b) => a + b;

console.<span class="fn">log</span>(<span class="fn">bati</span>(<span class="str">"Ana"</span>)); 
console.<span class="fn">log</span>(<span class="fn">add</span>(<span class="num">2</span>, <span class="num">3</span>));    `},

{n:7, id:"arrays-basics", title:"Arrays (Basics)",
 saan:"Pag-iimbak ng listahan ng magkakatulad na datos — todo lists, cart items, mga pangalan.",
 kailan:"Kapag kailangan mong mag-imbak ng maraming values sa iisang variable, at ordered/may pagkakasunod-sunod ang datos.",
 bakit:"Sa halip na gumawa ng hiwa-hiwalay na variable para sa bawat item (name1, name2, name3...), maiipon mo lahat sa isang listahan na madaling i-loop at i-access.",
 code:`<span class="kw">const</span> mgaPrutas = [<span class="str">"Mangga"</span>, <span class="str">"Saging"</span>, <span class="str">"Ubas"</span>];

console.<span class="fn">log</span>(mgaPrutas[<span class="num">0</span>]);      
console.<span class="fn">log</span>(mgaPrutas.length); 

mgaPrutas[<span class="num">1</span>] = <span class="str">"Bayabas"</span>; `},

{n:8, id:"objects-basics", title:"Objects (Basics)",
 saan:"Pag-representa ng isang 'bagay' na may maraming properties — user profile, product info, settings.",
 kailan:"Kapag ang datos ay may pangalan-value pairs (key-value) at magkakaugnay sa isa't-isa (hal. lahat ng info ng isang user).",
 bakit:"Para maipon ang magkakaugnay na datos sa iisang unit, sa halip na hiwa-hiwalay na variables — mas organized at madaling ipasa sa functions.",
 code:`<span class="kw">const</span> user = {
  pangalan: <span class="str">"Juan"</span>,
  edad: <span class="num">25</span>,
  <span class="fn">bati</span>() {
    console.<span class="fn">log</span>(<span class="str">\`Kamusta, ako si \${this.pangalan}\`</span>);
  }
};

console.<span class="fn">log</span>(user.pangalan);   
console.<span class="fn">log</span>(user[<span class="str">"edad"</span>]);  
user.<span class="fn">bati</span>();               `},

{n:9, id:"dom", title:"DOM (Document Object Model)",
 saan:"Pag-interact ng JS sa HTML page — pagbabago ng text, pagdagdag ng elements, pag-validate ng forms.",
 kailan:"Kapag kailangan mong basahin o baguhin ang laman/estilo ng webpage nang dynamic, base sa user interaction o data.",
 bakit:"Ang DOM ang 'representasyon' ng HTML sa memory na kayang basahin/baguhin ng JavaScript — walang DOM, static lang ang webpage at hindi ito magiging interactive.",
 code:`
<span class="kw">const</span> title = document.<span class="fn">querySelector</span>(<span class="str">"#title"</span>);
<span class="kw">const</span> mgaItem = document.<span class="fn">querySelectorAll</span>(<span class="str">".item"</span>);


title.textContent = <span class="str">"Bagong Title"</span>;
title.style.color = <span class="str">"blue"</span>;
title.classList.<span class="fn">add</span>(<span class="str">"highlight"</span>);


<span class="kw">const</span> newDiv = document.<span class="fn">createElement</span>(<span class="str">"div"</span>);
newDiv.textContent = <span class="str">"Bago akong element"</span>;
document.body.<span class="fn">appendChild</span>(newDiv);`,
 table:{head:["Method","Ano ang Ginagawa"], rows:[
   ["<code>querySelector()</code>","Kunin ang UNANG element na tugma sa CSS selector"],
   ["<code>querySelectorAll()</code>","Kunin ANG LAHAT ng tugmang elements"],
   ["<code>createElement()</code>","Gumawa ng bagong HTML element"],
   ["<code>appendChild()</code>","Ilagay ang element sa DOM tree"]
 ]}},

{n:10, id:"events", title:"Events",
 saan:"Anumang user interaction — click ng button, pag-type sa input, pag-submit ng form, pag-scroll.",
 kailan:"Kapag gusto mong tumugon ang page sa ginagawa ng user, sa real-time, nang hindi kinakailangan i-refresh ang page.",
 bakit:"Ito ang paraan para gawing interactive ang webpage — nakikinig ang JS sa mga 'pangyayari' (events) at tumutugon dito gamit ang event handlers.",
 code:`<span class="kw">const</span> button = document.<span class="fn">querySelector</span>(<span class="str">"#myBtn"</span>);

button.<span class="fn">addEventListener</span>(<span class="str">"click"</span>, (event) => {
  console.<span class="fn">log</span>(<span class="str">"Na-click ang button!"</span>);
  console.<span class="fn">log</span>(event.target); 
});


form.<span class="fn">addEventListener</span>(<span class="str">"submit"</span>, (e) => {
  e.<span class="fn">preventDefault</span>(); 
  console.<span class="fn">log</span>(<span class="str">"Na-submit ang form"</span>);
});`,
 note:"<b>Event Bubbling:</b> kapag na-trigger ang event sa isang child element, umaakyat din ito sa mga parent elements maliban kung tinawag ang <code>e.stopPropagation()</code>."},

{n:11, id:"scope", title:"Scope (Global vs Local)",
 saan:"Sa lahat ng JS code — sa pagdedeklara ng variables, functions, at loops.",
 kailan:"Tuwing nagdedeklara ka ng variable — awtomatiko itong nasusunod sa Scope rules depende kung saan mo ito nilagay.",
 bakit:"Para maiwasan ang <b>naming conflicts</b> at para hindi basta-basta magbago ang value ng isang variable kahit saan sa program. Nagbibigay ito ng privacy at organisasyon sa data.",
 code:`<span class="kw">let</span> global = <span class="str">"makikita kahit saan"</span>;

<span class="kw">function</span> <span class="fn">test</span>() {
  <span class="kw">let</span> local = <span class="str">"makikita lang dito sa loob"</span>;
  console.<span class="fn">log</span>(global); 
}
console.<span class="fn">log</span>(local); `},

{n:12, id:"closure", title:"Closure",
 saan:"React Hooks (<code>useState</code>), event handlers, private counters, module patterns.",
 kailan:"Kapag gusto mong 'tandaan' ng isang function ang data kahit tapos na ang outer function na gumawa nito.",
 bakit:"Solusyon sa pangangailangan ng <b>state retention</b> at <b>data privacy</b> nang hindi gumagamit ng global variables.",
 code:`<span class="kw">function</span> <span class="fn">counter</span>() {
  <span class="kw">let</span> count = <span class="num">0</span>;
  <span class="kw">return function</span> () {
    count++;
    <span class="kw">return</span> count;
  };
}
<span class="kw">const</span> add = <span class="fn">counter</span>();
<span class="fn">add</span>(); 
<span class="fn">add</span>(); `},

{n:13, id:"hof", title:"Higher-Order Functions (HOF) & Callbacks",
 saan:"Array methods (<code>map</code>, <code>filter</code>), <code>setTimeout</code>, <code>fetch().then()</code>, event listeners.",
 kailan:"Kapag gusto mong i-customize ang behavior ng isang function nang hindi mo ito binabago — sa pamamagitan ng pagpasa ng ibang function bilang argument.",
 bakit:"Para maiwasan ang paulit-ulit na pagsulat ng parehong logic (reusability) — iisang HOF, iba-ibang gamit depende sa callback.",
 code:`<span class="kw">function</span> <span class="fn">filterItems</span>(list, condition) {
  <span class="kw">return</span> list.<span class="fn">filter</span>(condition);
}
<span class="kw">const</span> mura = <span class="fn">filterItems</span>([<span class="num">20</span>, <span class="num">150</span>, <span class="num">45</span>], p => p < <span class="num">50</span>); `},

{n:14, id:"array-methods", title:"Array Methods",
 saan:"Data manipulation — lists, tables, cart items, API responses.",
 kailan:`<code>push/pop/shift/unshift/splice</code> → magbago ng laman; <code>indexOf/includes/find/some/every</code> → maghanap/mag-check; <code>map/filter/reduce</code> → i-transform/i-summarize; <code>slice/concat/sort/reverse/join/flat</code> → i-format/ayusin.`,
 bakit:"Para hindi na kailangang manual na gumawa ng <code>for</code> loop sa bawat operasyon sa array — mas mabilis at mas malinis basahin.",
 code:`<span class="kw">let</span> presyo = [<span class="num">100</span>, <span class="num">200</span>, <span class="num">300</span>];
<span class="kw">let</span> doble = presyo.<span class="fn">map</span>(p => p * <span class="num">2</span>);        
<span class="kw">let</span> mahal = presyo.<span class="fn">filter</span>(p => p > <span class="num">150</span>);   
<span class="kw">let</span> total = presyo.<span class="fn">reduce</span>((t, p) => t+p);  `},

{n:15, id:"json", title:"JSON",
 saan:"Pagpapadala/pagtanggap ng data sa pagitan ng frontend at backend (APIs), localStorage.",
 kailan:"Kapag kailangan mong i-convert ang JS Object papuntang text (para maipadala sa internet) o kabaliktaran.",
 bakit:"Kailangan ng universal na language ng data na kayang basahin ng lahat ng programming languages — hindi pwedeng ipasa ang JS Object mismo sa network, kailangan itong maging plain text muna.",
 code:`<span class="kw">const</span> obj = { name: <span class="str">"Maria"</span>, age: <span class="num">22</span> };
<span class="kw">const</span> str = JSON.<span class="fn">stringify</span>(obj); 
<span class="kw">const</span> back = JSON.<span class="fn">parse</span>(str);    `},

{n:16, id:"localstorage", title:"LocalStorage",
 saan:"Pag-save ng shopping cart, user settings, dark mode preference, login state (non-sensitive).",
 kailan:"Kapag gusto mong magpersist ang data kahit i-refresh o isara ang browser.",
 bakit:"Solusyon sa pangangailangan ng data na hindi nawawala kahit walang server/database. <b>Rule:</b> lahat ng laman dito ay STRING kaya kailangan ng JSON.stringify/parse.",
 code:`localStorage.<span class="fn">setItem</span>(<span class="str">"cart"</span>, JSON.<span class="fn">stringify</span>([{id:<span class="num">1</span>, name:<span class="str">"Sapatos"</span>}]));
<span class="kw">const</span> cart = JSON.<span class="fn">parse</span>(localStorage.<span class="fn">getItem</span>(<span class="str">"cart"</span>));
localStorage.<span class="fn">removeItem</span>(<span class="str">"cart"</span>);
localStorage.<span class="fn">clear</span>();`},

{n:17, id:"timers", title:"JS Timers (setTimeout / setInterval)",
 saan:"Popups pagkatapos ng ilang segundo, countdown timers, auto-refresh ng data, animations.",
 kailan:"<code>setTimeout</code> → isang beses lang pagkatapos ng delay. <code>setInterval</code> → paulit-ulit bawat interval.",
 bakit:"Para makapagpatakbo ng code na naka-schedule sa hinaharap nang hindi ni-block ang ibang code (non-blocking).",
 code:`<span class="fn">setTimeout</span>(() => console.<span class="fn">log</span>(<span class="str">"3 sec na!"</span>), <span class="num">3000</span>);

<span class="kw">let</span> i = <span class="num">5</span>;
<span class="kw">const</span> id = <span class="fn">setInterval</span>(() => {
  console.<span class="fn">log</span>(i--);
  <span class="kw">if</span> (i < <span class="num">0</span>) <span class="fn">clearInterval</span>(id);
}, <span class="num">1000</span>);`},

{n:18, id:"promise", title:"Promise",
 saan:"<code>fetch()</code> calls, file loading, anumang async operation.",
 kailan:"Kapag may operation na tumatagal (e.g. pagkuha ng data sa server) at gusto mong asikasuhin ang resulta pagdating ng oras.",
 bakit:"Solusyon sa 'Callback Hell' — malinis na paraan para mag-chain ng sunod-sunod na asynchronous tasks.",
 code:`<span class="kw">function</span> <span class="fn">getOrder</span>() {
  <span class="kw">return new</span> Promise((resolve, reject) => {
    <span class="fn">setTimeout</span>(() => <span class="fn">resolve</span>({ item: <span class="str">"Laptop"</span> }), <span class="num">1000</span>);
  });
}
<span class="fn">getOrder</span>()
  .<span class="fn">then</span>(data => console.<span class="fn">log</span>(data.item))
  .<span class="fn">catch</span>(err => console.<span class="fn">error</span>(err))
  .<span class="fn">finally</span>(() => console.<span class="fn">log</span>(<span class="str">"tapos"</span>));`},

{n:19, id:"async-await", title:"Async / Await",
 saan:"Kapalit ng <code>.then()</code> chains — lalo na sa <code>fetch()</code>, database calls.",
 kailan:"Kapag gusto mong magmukhang synchronous (linya-linya, madaling basahin) ang asynchronous code.",
 bakit:"Mas readable at maintainable na alternative sa Promise chaining, gamit ang pamilyar na <code>try/catch</code> structure.",
 code:`<span class="kw">async function</span> <span class="fn">checkout</span>() {
  <span class="kw">try</span> {
    <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn">getUser</span>();
    <span class="kw">const</span> cart = <span class="kw">await</span> <span class="fn">getCart</span>(user.id);
    console.<span class="fn">log</span>(<span class="str">"Salamat!"</span>, cart);
  } <span class="kw">catch</span> (err) {
    console.<span class="fn">error</span>(err);
  }
}`},

{n:20, id:"rest-fetch", title:"REST API & Fetch",
 saan:"Anumang komunikasyon ng frontend sa backend/server.",
 kailan:"GET (kumuha), POST (magdagdag), PUT/PATCH (mag-update), DELETE (magbura) ng data mula sa server.",
 bakit:"Standardized na paraan (REST) at built-in na tool (fetch) para makapag-usap ang JS sa server nang hindi nire-refresh ang buong page.",
 code:`<span class="kw">async function</span> <span class="fn">getProducts</span>() {
  <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/products"</span>);
  <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();
  console.<span class="fn">log</span>(data);
}

<span class="kw">async function</span> <span class="fn">addProduct</span>() {
  <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">"https://api.example.com/products"</span>, {
    method: <span class="str">"POST"</span>,
    headers: { <span class="str">"Content-Type"</span>: <span class="str">"application/json"</span> },
    body: JSON.<span class="fn">stringify</span>({ name: <span class="str">"Mouse"</span>, price: <span class="num">500</span> })
  });
}`},

{n:21, id:"http-status", title:"HTTP Status Codes",
 saan:"Pag-check ng resulta ng bawat <code>fetch()</code> call.",
 kailan:"Palagi — dapat i-check bago mo gamitin ang response, dahil hindi awtomatikong nag-e-error ang fetch() sa 404/500.",
 bakit:"Para malaman kung tagumpay (2xx), na-redirect (3xx), mali sa client (4xx), o mali sa server (5xx) ang request.",
 code:`<span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(url);
<span class="kw">if</span> (!res.ok) {
  <span class="kw">throw new</span> Error(<span class="str">\`HTTP Error: \${res.status}\`</span>);
}`},

{n:22, id:"error-handling", title:"Error Handling (try/catch/finally, throw)",
 saan:"Sa lahat ng code na maaaring mag-fail — network calls, validation, parsing.",
 kailan:"Kapag may posibleng magka-error at ayaw mong mag-crash ang buong application.",
 bakit:"Para magbigay ng maayos na babala/fallback sa user sa halip na basta gumuho ang app.",
 code:`<span class="kw">function</span> <span class="fn">pay</span>(amount) {
  <span class="kw">if</span> (amount <= <span class="num">0</span>) <span class="kw">throw new</span> Error(<span class="str">"Invalid amount"</span>);
  <span class="kw">return</span> <span class="str">\`Paid: \${amount}\`</span>;
}

<span class="kw">try</span> {
  <span class="fn">pay</span>(-<span class="num">100</span>);
} <span class="kw">catch</span> (err) {
  console.<span class="fn">error</span>(err.message);
} <span class="kw">finally</span> {
  console.<span class="fn">log</span>(<span class="str">"Done"</span>);
}`},

{n:23, id:"oop", title:"Object-Oriented Programming (OOP)",
 saan:"Malalaking apps na may reusable blueprints — user accounts, game characters, UI components.",
 kailan:"Kapag maraming magkakatulad na 'bagay' (objects) na may parehong structure pero iba-ibang data.",
 bakit:"Para maorganisa ang data at behavior nang magkasama, at maiwasan ang duplicate code sa pamamagitan ng inheritance/reuse.",
 code:`<span class="kw">class</span> Animal {
  <span class="fn">constructor</span>(name) { <span class="kw">this</span>.name = name; }
  <span class="fn">speak</span>() { console.<span class="fn">log</span>(<span class="str">\`\${this.name} makes a sound\`</span>); }
}
<span class="kw">class</span> Dog <span class="kw">extends</span> Animal {
  <span class="fn">speak</span>() { console.<span class="fn">log</span>(<span class="str">\`\${this.name}: Woof!\`</span>); }
}
<span class="kw">const</span> d = <span class="kw">new</span> Dog(<span class="str">"Bantay"</span>);
d.<span class="fn">speak</span>();`,
 table:{head:["Pillar","Bakit","Halimbawa"], rows:[
   ["Encapsulation","Itago ang sensitive data","<code>#privateField</code>"],
   ["Inheritance","I-reuse ang code ng parent","<code>extends</code>, <code>super()</code>"],
   ["Polymorphism","Iisang method, magkaibang behavior","Method overriding"],
   ["Abstraction","Itago ang complexity","Public method → private helpers"]
 ]}},

{n:24, id:"es6", title:"ES6+ Features",
 saan:"Modernong JS codebases — mas maikli at malinis na syntax.",
 kailan:"Destructuring (kunin ang laman ng object/array), Spread/Rest (combine/copy o kolekta ng args), Set (unique values), Map (non-string keys), Modules (hatiin ang code).",
 bakit:"Para bawasan ang boilerplate code at gawing mas readable ang JS.",
 code:`<span class="kw">const</span> { name, age } = user;              
<span class="kw">const</span> combined = [...arr1, ...arr2];     
<span class="kw">function</span> <span class="fn">all</span>(first, ...rest) {}          
<span class="kw">const</span> unique = [...<span class="kw">new</span> Set([<span class="num">1</span>,<span class="num">1</span>,<span class="num">2</span>])];    
<span class="kw">export const</span> add = (a,b) => a+b;         
<span class="kw">import</span> { add } <span class="kw">from</span> <span class="str">'./utils.js'</span>;      `},

{n:25, id:"execution-context", title:"Execution Context",
 saan:"Nangyayari sa likod ng bawat script — mahalaga para maintindihan ang hoisting, this, at scope chain.",
 kailan:"Tuwing tumatakbo ang script (Global) o tuwing tinatawag ang isang function (Function Execution Context).",
 bakit:"Ito ang paraan ng JS engine para malaman kung anong variables/functions ang meron at ano ang tinutukoy ng this bago pa man mismong tumakbo ang code.",
 code:`
console.<span class="fn">log</span>(x); 
<span class="kw">var</span> x = <span class="num">10</span>;`},

{n:26, id:"event-loop", title:"Event Loop",
 saan:"Sa likod ng bawat async operation — setTimeout, fetch, Promises, event listeners.",
 kailan:"Palagi itong tumatakbo sa background habang may JS code na tumatakbo.",
 bakit:"Para magawang non-blocking ang JS kahit single-threaded lang ito — hindi na-fi-freeze ang page habang naghihintay ng async task.",
 code:`console.<span class="fn">log</span>(<span class="str">"1"</span>);
<span class="fn">setTimeout</span>(() => console.<span class="fn">log</span>(<span class="str">"2 (macrotask)"</span>), <span class="num">0</span>);
Promise.<span class="fn">resolve</span>().<span class="fn">then</span>(() => console.<span class="fn">log</span>(<span class="str">"3 (microtask)"</span>));
console.<span class="fn">log</span>(<span class="str">"4"</span>);
`,
 note:"<b>Priority order:</b> Sync code → LAHAT ng Microtasks → 1 Macrotask → ulit."},

{n:27, id:"micro-macro", title:"Microtasks vs Macrotasks",
 saan:"Nakakaapekto sa pagkakasunod-sunod ng async code execution.",
 kailan:"Awtomatiko — importante malaman kung anong queue napupunta ang isang task para maintindihan ang output ng code.",
 bakit:"Para bigyan ng priority ang mas urgent na tasks (Promises) kaysa sa mga regular na timers/events.",
 table:{head:["Uri","Galing sa","Priority"], rows:[
   ["Microtask","Promise, async/await, queueMicrotask","Mataas — inuubos muna lahat"],
   ["Macrotask","setTimeout, setInterval, DOM events","Mababa — isa-isa lang bawat ikot"]
 ]}},

{n:28, id:"recursion", title:"Recursion",
 saan:"Nested data (file trees, JSON hierarchies, DOM traversal), factorial/fibonacci.",
 kailan:"Kapag ang problema ay natural na self-similar — kailangan mong ulitin ang parehong logic sa mas maliit na bersyon.",
 bakit:"Solusyon para sa mga structures na hindi madaling i-loop gamit ang simpleng for/while (hal. nested folders).",
 code:`<span class="kw">function</span> <span class="fn">factorial</span>(n) {
  <span class="kw">if</span> (n === <span class="num">1</span>) <span class="kw">return</span> <span class="num">1</span>;       
  <span class="kw">return</span> n * <span class="fn">factorial</span>(n - <span class="num">1</span>); 
}
<span class="fn">factorial</span>(<span class="num">5</span>); `},

{n:29, id:"generators", title:"JS Generators",
 saan:"Infinite sequences (ID generators), lazy evaluation, custom iterators.",
 kailan:"Kapag gusto mong i-pause at i-resume ang isang function sa halip na patakbuhin ito nang buo agad.",
 bakit:"Para makagawa ng infinite streams o step-by-step processes nang hindi nag-o-overflow ang memory.",
 code:`<span class="kw">function</span>* <span class="fn">steps</span>() {
  <span class="kw">yield</span> <span class="str">"Step 1"</span>;
  <span class="kw">yield</span> <span class="str">"Step 2"</span>;
  <span class="kw">return</span> <span class="str">"Done"</span>;
}
<span class="kw">const</span> gen = <span class="fn">steps</span>();
gen.<span class="fn">next</span>(); 
gen.<span class="fn">next</span>(); 
gen.<span class="fn">next</span>(); `},

{n:30, id:"iterator", title:"JS Iterator",
 saan:"Sa likod ng for...of, spread operator, at destructuring.",
 kailan:"Kapag gusto mong i-traverse ang isang collection nang isa-isa, o gumawa ng custom na paraan para i-loop ang isang object.",
 bakit:"Standard protocol para malaman ng JS kung paano mag-loop sa iba't-ibang data structures nang pareho ang approach.",
 code:`<span class="kw">function</span> <span class="fn">makeIterator</span>(arr) {
  <span class="kw">let</span> i = <span class="num">0</span>;
  <span class="kw">return</span> {
    next: () => i < arr.length
      ? { value: arr[i++], done: <span class="kw">false</span> }
      : { value: <span class="kw">undefined</span>, done: <span class="kw">true</span> }
  };
}
<span class="kw">const</span> it = <span class="fn">makeIterator</span>([<span class="str">"A"</span>, <span class="str">"B"</span>]);
it.<span class="fn">next</span>(); `},

{n:31, id:"functional-programming", title:"Functional Programming (FP)",
 saan:"Data processing pipelines, React (Hooks/Redux), array transformations.",
 kailan:"Kapag gusto mong gawing predictable at reusable ang code sa pamamagitan ng pagpasa ng data sa mga functions, sa halip na i-store/i-mutate ito sa objects.",
 bakit:"Solusyon para sa bugs dulot ng shared/mutable state — pinapadali ang debugging dahil laging pareho ang output kapag pareho ang input (Pure Functions), at hindi na-mutate ang orihinal na data (Immutability).",
 code:`
<span class="kw">const</span> applyDiscount = (price, discount) => price - discount;
<span class="kw">const</span> bagongPrutas = [...[<span class="str">"Saging"</span>], <span class="str">"Mangga"</span>]; 


<span class="kw">const</span> doble = [<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>].<span class="fn">map</span>(n => n * <span class="num">2</span>); `,
 table:{head:["Prinsipyo","Bakit","Halimbawa"], rows:[
   ["Pure Functions","Predictable, walang side effects","<code>(price, discount) => price - discount</code>"],
   ["Immutability","Hindi binabago ang orihinal na data","<code>[...arr, newItem]</code> sa halip na <code>arr.push()</code>"],
   ["First-Class / HOF","Function bilang value na maipapasa","<code>map</code>, <code>filter</code>, <code>reduce</code>"],
   ["Declarative","Sabihin ang 'ano' hindi 'paano'","<code>map()</code> sa halip na manual <code>for</code> loop"],
   ["Function Composition","Pagsasama ng maliliit na functions","<code>format = str => lower(trim(str))</code>"]
 ]},
 note:"<b>OOP vs FP:</b> OOP → objects, mutable state, para sa UI/games/blueprints. FP → functions, immutable data, para sa data pipelines at React hooks/Redux."},

{n:32, id:"memory-management", title:"Memory Management (Stack, Heap, GC)",
 saan:"Nangyayari automatically sa likod ng bawat JS program — mahalaga sa long-running apps (SPAs, dashboards) para maiwasan ang memory leaks.",
 kailan:"Awtomatiko (allocate → use → release), pero mag-ingat tuwing gumagawa ng timers, event listeners, o closures na humahawak ng malaking data.",
 bakit:"Para awtomatikong ma-manage ang RAM nang hindi mo kailangang mag-manual allocate/deallocate, at para hindi bumagal/mag-crash ang app dahil sa datos na hindi na kailangan pero hindi pa nabubura.",
 code:`
<span class="kw">const</span> hugeData = <span class="fn">fetchLargeData</span>();
<span class="kw">const</span> id = <span class="fn">setInterval</span>(() => {
  console.<span class="fn">log</span>(hugeData); 
}, <span class="num">1000</span>);


<span class="fn">clearInterval</span>(id);`,
 table:{head:["","Stack","Heap"], rows:[
   ["Laman","Primitives (number, string, boolean)","Reference types (Object, Array, Function)"],
   ["Sukat","Fixed, maliit","Dynamic, malaki"],
   ["Access","Mabilis (LIFO)","Mas mabagal, pointer-based"]
 ]},
 note:"<b>Garbage Collection (Mark-and-Sweep):</b> nagsisimula sa Global Object (root) → nima-mark lahat ng reachable data → binubura ang hindi na-mark (unreachable)."},

{n:33, id:"performance", title:"Performance Optimization",
 saan:"Large-scale web apps, infinite scroll, search bars, animations, heavy computations.",
 kailan:"Kapag may jank/lag sa UI, mabagal na loading (TTI), o sobrang dalas ng function calls mula sa user input (scroll, resize, typing).",
 bakit:"Para mapanatili ang smooth 60 FPS na UI at maiwasan ang pag-waste ng CPU/memory sa hindi kinakailangang computation o DOM updates.",
 code:`
<span class="kw">function</span> <span class="fn">debounce</span>(func, delay) {
  <span class="kw">let</span> timer;
  <span class="kw">return function</span> (...args) {
    <span class="fn">clearTimeout</span>(timer);
    timer = <span class="fn">setTimeout</span>(() => func.<span class="fn">apply</span>(<span class="kw">this</span>, args), delay);
  };
}
<span class="kw">const</span> onSearch = <span class="fn">debounce</span>(e => console.<span class="fn">log</span>(<span class="str">"fetch:"</span>, e.target.value), <span class="num">300</span>);


<span class="kw">function</span> <span class="fn">animate</span>() {
  el.style.transform = <span class="str">\`translateX(\${pos}px)\`</span>;
  <span class="kw">if</span> (animating) <span class="fn">requestAnimationFrame</span>(animate);
}


<span class="kw">const</span> frag = document.<span class="fn">createDocumentFragment</span>();
<span class="kw">for</span> (<span class="kw">let</span> i = <span class="num">0</span>; i < <span class="num">100</span>; i++) frag.<span class="fn">appendChild</span>(document.<span class="fn">createElement</span>(<span class="str">"div"</span>));
document.body.<span class="fn">appendChild</span>(frag); 


<span class="kw">const</span> worker = <span class="kw">new</span> Worker(<span class="str">"worker.js"</span>);
worker.<span class="fn">postMessage</span>({ data: largeArray });
worker.onmessage = e => console.<span class="fn">log</span>(<span class="str">"resulta:"</span>, e.data);`,
 table:{head:["Metric","Sinusukat","Target"], rows:[
   ["LCP","Bilis ng pag-load ng pinakamalaking element","&lt; 2.5s"],
   ["INP","Bilis ng response sa user interaction","&lt; 200ms"],
   ["CLS","Visual stability (galaw ng layout)","&lt; 0.1"]
 ]}},
];
