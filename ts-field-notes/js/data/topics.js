const PHASES = [
  { id: "phase0", label: "Phase 0 — Setup & Installation" },
  { id: "phase1", label: "Phase 1 — Type Foundations" },
  { id: "phase2", label: "Phase 2 — Functions & Structure" },
  { id: "phase3", label: "Phase 3 — OOP sa TS" },
  { id: "phase4", label: "Phase 4 — Advanced Type System" },
  { id: "phase5", label: "Phase 5 — Real-World Integration" },
];

const TOPICS = [

{n:1, phase:"phase0", id:"installation", title:"Pag-install ng TypeScript (Windows, Mac, Linux)",
 saan:"Unang hakbang bago kahit anong TypeScript project — kailangan mo ang Node.js at ang TypeScript compiler (tsc) na naka-install sa iyong makina.",
 kailan:"Isang beses lang, bago simulan ang unang TS project sa isang bagong computer. Kailangan mo lang ulitin kapag bagong makina o bagong environment (hal. Docker container).",
 bakit:"Ang TypeScript ay isang superset ng JavaScript — kailangan itong i-compile (ginagawang plain JS) bago ito maintindihan ng browser o Node.js, kaya kailangan mo ang compiler bago pa man makapagsulat ng gumaganang TS code.",
 code:`<span class="cm">// Hakbang 1: I-verify kung na-install na ang Node.js (kasama ang npm)</span>
node --version
npm --version`,
 table:{head:["OS","Hakbang-hakbang na Installation"], rows:[
  ["Windows","1. I-download ang Node.js installer mula sa <code>nodejs.org</code> (LTS version)<br>2. Patakbuhin ang <code>.msi</code> installer, sundin ang setup wizard<br>3. I-restart ang Command Prompt/PowerShell<br>4. I-verify: <code>node --version</code>"],
  ["macOS","1. I-install ang Homebrew kung wala pa: <code>/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"</code><br>2. <code>brew install node</code><br>3. I-verify: <code>node --version</code>"],
  ["Linux (Ubuntu/Debian)","1. <code>sudo apt update</code><br>2. <code>curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -</code><br>3. <code>sudo apt install -y nodejs</code><br>4. I-verify: <code>node --version</code>"]
 ]},
 note:"Pagkatapos ma-install ang Node.js, sunod na hakbang: i-install ang TypeScript compiler globally — <code>npm install -g typescript</code> — pareho na ito sa Windows, Mac, at Linux dahil dumadaan na sa npm."},

{n:2, phase:"phase0", id:"running-ts", title:"Paano Patakbuhin ang TypeScript Code",
 saan:"Bawat pagkakataon na gusto mong subukan/patakbuhin ang isang <code>.ts</code> file — development, testing, o production build.",
 kailan:"<code>tsc</code> → kapag gusto mong i-compile lang papuntang plain <code>.js</code> (tradisyunal na paraan). <code>ts-node</code> → kapag gusto mong direktang patakbuhin nang walang hiwalay na compile step (mabilis para sa development). <code>--watch</code> → kapag gustong awtomatikong mag-recompile tuwing may saved changes.",
 bakit:"Hindi tulad ng plain JavaScript na direktang naiintindihan ng Node.js/browser, ang <code>.ts</code> files ay kailangan munang i-compile (i-'transpile') papuntang <code>.js</code> bago talaga tumakbo — importante malaman ang iba't-ibang paraan para sa iba't-ibang sitwasyon (mabilis na testing vs production build).",
 code:`<span class="cm">// PARAAN 1: tsc — i-compile lang, tapos patakbuhin ang resultang .js</span>
tsc app.ts          <span class="cm">// gumagawa ng app.js</span>
node app.js          <span class="cm">// patakbuhin ang naka-compile na JS</span>

<span class="cm">// PARAAN 2: tsc --watch — awtomatikong nagre-recompile sa bawat save</span>
tsc app.ts --watch

<span class="cm">// PARAAN 3: ts-node — direktang patakbuhin ang .ts nang walang hiwalay na build step</span>
npm install -g ts-node
ts-node app.ts

<span class="cm">// PARAAN 4: gamit ang npm scripts (karaniwan sa totoong projects)</span>
<span class="cm">// package.json:</span>
{
  <span class="str">"scripts"</span>: {
    <span class="str">"dev"</span>: <span class="str">"ts-node src/index.ts"</span>,
    <span class="str">"build"</span>: <span class="str">"tsc"</span>,
    <span class="str">"start"</span>: <span class="str">"node dist/index.js"</span>
  }
}
<span class="cm">// tapos: npm run dev</span>`,
 table:{head:["Paraan","Pinaka-Gamit Kailan"], rows:[
   ["<code>tsc file.ts</code>","One-time compile, production builds"],
   ["<code>tsc --watch</code>","Active development, awtomatikong nag-rerecompile"],
   ["<code>ts-node file.ts</code>","Mabilisang testing/scripts nang walang build step"],
   ["<code>npm run dev/build</code>","Totoong projects na may consistent na workflow"]
 ]}},

{n:3, phase:"phase1", id:"basic-types", title:"Basic Types (string, number, boolean, array, tuple)",
 saan:"Bawat variable, parameter, at return value sa TypeScript code — ito ang pundasyon ng buong type system.",
 kailan:"Palagi — sa TS, dapat malaman mo (o hayaang ma-infer) kung anong type ang hawak ng bawat variable bago pa man ito gamitin.",
 bakit:"Ito ang core value proposition ng TypeScript — sinusuri ng compiler ang mga types BAGO pa man tumakbo ang code (compile-time checking), kaya maraming bugs ang nahuhuli bago pa maabot ng end-user.",
 code:`<span class="kw">let</span> pangalan: <span class="fn">string</span> = <span class="str">"Juan"</span>;
<span class="kw">let</span> edad: <span class="fn">number</span> = <span class="num">25</span>;
<span class="kw">let</span> tama: <span class="fn">boolean</span> = <span class="kw">true</span>;

<span class="cm">// Array — pareho lang ang type ng lahat ng laman</span>
<span class="kw">let</span> mgaNumero: <span class="fn">number</span>[] = [<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>];

<span class="cm">// Tuple — fixed length, tiyak ang type bawat posisyon</span>
<span class="kw">let</span> user: [<span class="fn">string</span>, <span class="fn">number</span>] = [<span class="str">"Juan"</span>, <span class="num">25</span>];
<span class="cm">// user[0] = "Maria";  dapat string</span>
<span class="cm">// user[1] = "25";     Error: dapat number</span>`,
 table:{head:["Type","Halimbawa","Paalala"], rows:[
   ["<code>string</code>","<code>\"hello\"</code>","Pareho ng single/double quotes"],
   ["<code>number</code>","<code>25</code>, <code>3.14</code>","Walang hiwalay na int/float"],
   ["<code>boolean</code>","<code>true</code> / <code>false</code>",""],
   ["<code>Array</code>","<code>number[]</code> o <code>Array&lt;number&gt;</code>","Parehong syntax, magkatulad"],
   ["<code>Tuple</code>","<code>[string, number]</code>","Fixed length at order ng types"]
 ]}},

{n:4, phase:"phase1", id:"any-vs-unknown", title:"any vs unknown (bakit masama ang any)",
 saan:"Kapag hindi mo alam (o ayaw mo munang i-type) ang klase ng datos — third-party libraries, dynamic JSON, migration mula JS.",
 kailan:"Iwasan ang <code>any</code> hangga't maaari. Gamitin ang <code>unknown</code> kapag talagang hindi mo alam ang type habang nagsusulat, pero gusto mo pa ring i-check ito bago gamitin.",
 bakit:"Ang <code>any</code> ay 'nagpapatay' sa type safety — parang sinasabi mo sa compiler na 'huwag ka nang mag-check dito', kaya nawawala ang buong benepisyo ng TypeScript. Ang <code>unknown</code> ay type-safe na alternative — pinipilit kang mag-check muna (narrowing) bago gamitin ang value.",
 code:`<span class="cm">// MASAMA: any — walang checking, pwedeng anumang operation</span>
<span class="kw">let</span> dataAny: <span class="kw">any</span> = <span class="str">"hello"</span>;
dataAny.<span class="fn">toUpperCase</span>();   <span class="cm">// OK, kahit mali sa runtime</span>
dataAny.mabibigatFunction(); <span class="cm">// walang warning, pero pwedeng mag-crash</span>

<span class="cm">// MAS MABUTI: unknown — pinipilit kang mag-check muna</span>
<span class="kw">let</span> dataUnknown: <span class="kw">unknown</span> = <span class="str">"hello"</span>;
<span class="cm">// dataUnknown.toUpperCase(); Error: kailangan i-narrow muna</span>

<span class="kw">if</span> (<span class="kw">typeof</span> dataUnknown === <span class="str">"string"</span>) {
  dataUnknown.<span class="fn">toUpperCase</span>(); <span class="cm">// OK na, na-verify na string</span>
}`,
 note:"<b>Rule of thumb:</b> kung sasagutin mo ng 'any', baka <code>unknown</code> ang gusto mong sabihin."},

{n:5, phase:"phase1", id:"inference-vs-explicit", title:"Type Inference vs Explicit Typing",
 saan:"Bawat pagdedeklara ng variable, function return, at parameters.",
 kailan:"Hayaan ang TS mag-infer (auto-detect) kapag halata naman ang type mula sa value. Mag-explicit ka kapag walang initial value, o kapag function parameter (hindi kayang i-infer ng TS ang parameters).",
 bakit:"Binabawasan ng inference ang boilerplate code (hindi mo na kailangang isulat ang type sa lahat ng lugar), pero minsan kailangan ng explicit typing para sa clarity o kapag hindi sapat ang context para mag-infer nang tama.",
 code:`<span class="cm">// Inference — awtomatikong nalalaman ng TS na 'string' ito</span>
<span class="kw">let</span> pangalan = <span class="str">"Juan"</span>; <span class="cm">// TS: string</span>

<span class="cm">// Explicit — kailangan mo dahil walang value pa</span>
<span class="kw">let</span> edad: <span class="fn">number</span>;
edad = <span class="num">25</span>;

<span class="cm">// Function parameters — DAPAT explicit, hindi kayang i-infer</span>
<span class="kw">function</span> <span class="fn">add</span>(a: <span class="fn">number</span>, b: <span class="fn">number</span>): <span class="fn">number</span> {
  <span class="kw">return</span> a + b;
}`},

{n:6, phase:"phase1", id:"interfaces-vs-types", title:"Interfaces vs Type Aliases",
 saan:"Pag-describe ng shape ng objects, function signatures, at complex data structures.",
 kailan:"<code>interface</code> → kapag nagde-describe ng object shape na baka i-extend pa (lalo na sa classes/OOP). <code>type</code> → kapag kailangan mo ng unions, intersections, o mapping ng primitives/tuples.",
 bakit:"Parehong ginagawa ang core na trabaho (i-describe ang shape ng data), pero magkaiba ang flexibility — mahalagang malaman kung kailan gagamit ng alin para maiwasan ang confusion sa malalaking codebase.",
 code:`<span class="cm">// Interface — extendable, madalas gamitin sa OOP</span>
<span class="kw">interface</span> User {
  name: <span class="fn">string</span>;
  age: <span class="fn">number</span>;
}
<span class="kw">interface</span> Admin <span class="kw">extends</span> User {
  role: <span class="fn">string</span>;
}

<span class="cm">// Type Alias — pwede ring gawin pero gamit ang intersection (&)</span>
<span class="kw">type</span> UserType = { name: <span class="fn">string</span>; age: <span class="fn">number</span> };
<span class="kw">type</span> AdminType = UserType & { role: <span class="fn">string</span> };

<span class="cm">// Type lang ang pwedeng gumawa ng union</span>
<span class="kw">type</span> ID = <span class="fn">string</span> | <span class="fn">number</span>;`,
 table:{head:["Feature","interface","type"], rows:[
   ["Pwede bang i-extend?","Oo (<code>extends</code>)","Oo (<code>&</code> intersection)"],
  ["Union types","Hindi","Oo"],
  ["Declaration merging","Oo (auto-merge)","Hindi"],
   ["Pinaka-gamit sa","Object shapes, class contracts","Unions, primitives, tuples"]
 ]}},

{n:7, phase:"phase1", id:"union-intersection", title:"Union & Intersection Types",
 saan:"Function parameters na tumatanggap ng maraming posibleng type, o pagsasama ng maraming interfaces/types.",
 kailan:"<b>Union (|)</b> → kapag pwedeng isa sa maraming types ang value (OR). <b>Intersection (&)</b> → kapag kailangan ng LAHAT ng properties mula sa maraming types (AND).",
 bakit:"Nagbibigay ito ng flexibility sa type system nang hindi sinasakripisyo ang type safety — mas accurate na representasyon ng totoong shape ng data kumpara sa basta paggamit ng any.",
 code:`<span class="cm">// UNION — pwedeng string O number</span>
<span class="kw">function</span> <span class="fn">printId</span>(id: <span class="fn">string</span> | <span class="fn">number</span>) {
  console.<span class="fn">log</span>(<span class="str">\`ID: \${id}\`</span>);
}
<span class="fn">printId</span>(<span class="num">101</span>);      <span class="cm">// OK</span>
<span class="fn">printId</span>(<span class="str">"ABC101"</span>); <span class="cm">// OK din</span>

<span class="cm">// INTERSECTION — kailangan LAHAT ng properties</span>
<span class="kw">type</span> Nameable = { name: <span class="fn">string</span> };
<span class="kw">type</span> Ageable = { age: <span class="fn">number</span> };
<span class="kw">type</span> Person = Nameable & Ageable;

<span class="kw">const</span> p: Person = { name: <span class="str">"Ana"</span>, age: <span class="num">30</span> }; <span class="cm">// dapat pareho</span>`},

{n:8, phase:"phase1", id:"literal-types", title:"Literal Types",
 saan:"Function parameters na dapat limitado lang sa ilang specific na values — status codes, direction, mode settings.",
 kailan:"Kapag gusto mong higpitan ang isang value sa mga eksaktong literal (hindi lang basta string o number kundi mismong specific na value).",
 bakit:"Mas mahigpit at safe kaysa sa plain string/number — nahuhuli agad ng compiler ang typo o maling value bago pa man tumakbo ang code.",
 code:`<span class="cm">// Literal type — dapat isa lang sa mga eksaktong values na ito</span>
<span class="kw">type</span> Direction = <span class="str">"up"</span> | <span class="str">"down"</span> | <span class="str">"left"</span> | <span class="str">"right"</span>;

<span class="kw">function</span> <span class="fn">move</span>(dir: Direction) {
  console.<span class="fn">log</span>(<span class="str">\`Gumagalaw pa-\${dir}\`</span>);
}

<span class="fn">move</span>(<span class="str">"up"</span>);    <span class="cm">// OK</span>
<span class="cm">// move("upward"); Error: hindi valid na literal</span>

<span class="cm">// Kadalasang ginagamit kasama ng union para sa "mode" settings</span>
<span class="kw">type</span> Status = <span class="str">"pending"</span> | <span class="str">"active"</span> | <span class="str">"done"</span>;`},


{n:9, phase:"phase2", id:"typing-functions", title:"Typing Function Params/Return",
 saan:"Lahat ng functions sa TS codebase — mula simpleng helpers hanggang complex business logic.",
 kailan:"Palagi — dapat laging naka-type ang parameters (required ng compiler), at maganda ring i-type ang return value kahit optional (para sa clarity at documentation).",
 bakit:"Sinisigurado nito na tama ang binibigay na argumento sa tuwing tinatawag ang function, at malinaw kung anong klaseng value ang aasahang ibabalik nito — nahuhuli agad ang mismatch sa compile time.",
 code:`<span class="kw">function</span> <span class="fn">calculateTotal</span>(price: <span class="fn">number</span>, qty: <span class="fn">number</span>): <span class="fn">number</span> {
  <span class="kw">return</span> price * qty;
}

<span class="cm">// Arrow function na naka-type</span>
<span class="kw">const</span> greet = (name: <span class="fn">string</span>): <span class="fn">string</span> => <span class="str">\`Kamusta, \${name}!\`</span>;

<span class="cm">// void — kapag walang ibinabalik ang function</span>
<span class="kw">function</span> <span class="fn">logMessage</span>(msg: <span class="fn">string</span>): <span class="kw">void</span> {
  console.<span class="fn">log</span>(msg);
}`},

{n:10, phase:"phase2", id:"optional-default-params", title:"Optional & Default Params",
 saan:"Functions na may parameters na hindi laging kailangang ibigay ng caller.",
 kailan:"<code>?</code> (optional) → kapag pwedeng hindi ibigay ang parameter. <code>= value</code> (default) → kapag may fallback value kung walang ibinigay.",
 bakit:"Nagbibigay ito ng flexibility sa function signatures nang hindi sinasakripisyo ang type safety — malinaw pa rin sa compiler kung ano ang pwede at hindi pwedeng maging undefined.",
 code:`<span class="cm">// Optional param — pwedeng walang value (dapat huling parameter)</span>
<span class="kw">function</span> <span class="fn">greet</span>(name: <span class="fn">string</span>, greeting?: <span class="fn">string</span>): <span class="fn">string</span> {
  <span class="kw">return</span> <span class="str">\`\${greeting ?? "Kamusta"}, \${name}!\`</span>;
}
<span class="fn">greet</span>(<span class="str">"Ana"</span>);              <span class="cm">// "Kamusta, Ana!"</span>
<span class="fn">greet</span>(<span class="str">"Ana"</span>, <span class="str">"Hoy"</span>);       <span class="cm">// "Hoy, Ana!"</span>

<span class="cm">// Default param — may fallback value</span>
<span class="kw">function</span> <span class="fn">createUser</span>(name: <span class="fn">string</span>, role: <span class="fn">string</span> = <span class="str">"member"</span>): <span class="fn">void</span> {
  console.<span class="fn">log</span>(<span class="str">\`\${name} - \${role}\`</span>);
}
<span class="fn">createUser</span>(<span class="str">"Juan"</span>); <span class="cm">// "Juan - member"</span>`},

{n:11, phase:"phase2", id:"function-overloads", title:"Function Overloads",
 saan:"Functions na dapat magkaroon ng magkaibang behavior/return type depende sa uri ng ibinigay na argumento.",
 kailan:"Kapag ang isang function ay tumatanggap ng iba't-ibang combinations ng argument types, at magkaiba ang gustong resultang type depende dito.",
 bakit:"Nagbibigay ito ng mas precise na type checking kaysa sa basta paggamit ng union types sa lahat ng lugar — malinaw kung anong specific na return type ang aasahan base sa ibinigay na input.",
 code:`<span class="cm">// Overload signatures — iba't ibang combinations</span>
<span class="kw">function</span> <span class="fn">makeDate</span>(timestamp: <span class="fn">number</span>): Date;
<span class="kw">function</span> <span class="fn">makeDate</span>(month: <span class="fn">number</span>, day: <span class="fn">number</span>, year: <span class="fn">number</span>): Date;

<span class="cm">// Implementation — dapat kayang hawakan LAHAT ng overloads</span>
<span class="kw">function</span> <span class="fn">makeDate</span>(a: <span class="fn">number</span>, b?: <span class="fn">number</span>, c?: <span class="fn">number</span>): Date {
  <span class="kw">if</span> (b !== <span class="kw">undefined</span> && c !== <span class="kw">undefined</span>) {
    <span class="kw">return new</span> Date(c, a, b);
  }
  <span class="kw">return new</span> Date(a);
}

<span class="fn">makeDate</span>(<span class="num">12345678</span>);        <span class="cm">// matches 1st overload</span>
<span class="fn">makeDate</span>(<span class="num">1</span>, <span class="num">15</span>, <span class="num">2024</span>);   <span class="cm">// matches 2nd overload</span>`},

{n:12, phase:"phase2", id:"enums", title:"Enums",
 saan:"Fixed set ng related constants — status values, roles, days of week, direction codes.",
 kailan:"Kapag may grupo ng named constants na palaging magkakasama at may kahulugan bilang isang set (hal. UserRole.Admin, UserRole.Member).",
 bakit:"Mas readable at self-documenting kaysa sa basta magic strings/numbers — pinapadali din ang autocomplete at pagre-refactor sa editor.",
 code:`<span class="kw">enum</span> UserRole {
  Admin = <span class="str">"ADMIN"</span>,
  Member = <span class="str">"MEMBER"</span>,
  Guest = <span class="str">"GUEST"</span>,
}

<span class="kw">function</span> <span class="fn">checkAccess</span>(role: UserRole) {
  <span class="kw">if</span> (role === UserRole.Admin) {
    console.<span class="fn">log</span>(<span class="str">"Full access"</span>);
  }
}

<span class="fn">checkAccess</span>(UserRole.Admin); <span class="cm">// "Full access"</span>

<span class="cm">// Numeric enum — awtomatikong nag-a-auto-increment</span>
<span class="kw">enum</span> Direction { Up, Down, Left, Right } <span class="cm">// 0, 1, 2, 3</span>`,
 note:"Sa maraming modernong TS codebases, mas pinipili na ngayon ang <b>union ng literal types</b> (<code>\"ADMIN\" | \"MEMBER\"</code>) kaysa enum, dahil mas simple at walang extra runtime code."},

{n:13, phase:"phase2", id:"object-typing", title:"Object Typing Patterns",
 saan:"Pag-describe ng shape ng mas kumplikadong objects — nested data, optional fields, readonly properties.",
 kailan:"Kapag nagpapasa ng structured data sa pagitan ng functions/components, lalo na kung may mga optional o nested na fields.",
 bakit:"Pinapanatili ang consistency at safety ng shape ng data sa buong application — nahuhuli agad kung may kulang o maling property.",
 code:`<span class="kw">interface</span> Product {
  id: <span class="fn">number</span>;
  name: <span class="fn">string</span>;
  price: <span class="fn">number</span>;
  description?: <span class="fn">string</span>;       <span class="cm">// optional field</span>
  <span class="kw">readonly</span> sku: <span class="fn">string</span>;      <span class="cm">// hindi na pwedeng baguhin</span>
  tags: <span class="fn">string</span>[];
  metadata: { createdBy: <span class="fn">string</span> }; <span class="cm">// nested object</span>
}

<span class="kw">const</span> item: Product = {
  id: <span class="num">1</span>,
  name: <span class="str">"Mouse"</span>,
  price: <span class="num">500</span>,
  sku: <span class="str">"SKU-001"</span>,
  tags: [<span class="str">"electronics"</span>],
  metadata: { createdBy: <span class="str">"admin"</span> }
};
  <span class="cm">// item.sku = "SKU-002"; Error: readonly</span>`},

{n:14, phase:"phase3", id:"access-modifiers", title:"Classes with Access Modifiers (public/private/protected)",
 saan:"Class-based architecture — services, models, controllers sa OOP-style na TypeScript projects.",
 kailan:"<code>public</code> (default) → accessible kahit saan. <code>private</code> → sa loob lang ng class na iyon. <code>protected</code> → sa class at mga subclass nito.",
 bakit:"Nagbibigay ito ng tunay na encapsulation sa compile-time — pinoprotektahan ang internal state ng class mula sa hindi sinasadyang pagbabago mula sa labas.",
 code:`<span class="kw">class</span> BankAccount {
  <span class="kw">public</span> owner: <span class="fn">string</span>;
  <span class="kw">private</span> balance: <span class="fn">number</span>;
  <span class="kw">protected</span> accountType: <span class="fn">string</span> = <span class="str">"savings"</span>;

  <span class="fn">constructor</span>(owner: <span class="fn">string</span>, initialBalance: <span class="fn">number</span>) {
    <span class="kw">this</span>.owner = owner;
    <span class="kw">this</span>.balance = initialBalance;
  }

  <span class="kw">public</span> <span class="fn">deposit</span>(amount: <span class="fn">number</span>): <span class="fn">void</span> {
    <span class="kw">this</span>.balance += amount;
  }

  <span class="kw">public</span> <span class="fn">getBalance</span>(): <span class="fn">number</span> {
    <span class="kw">return this</span>.balance;
  }
}

<span class="kw">const</span> acc = <span class="kw">new</span> BankAccount(<span class="str">"Juan"</span>, <span class="num">1000</span>);
acc.<span class="fn">deposit</span>(<span class="num">500</span>);
  <span class="cm">// acc.balance;  Error: private property</span>`},

{n:15, phase:"phase3", id:"interfaces-implementing", title:"Interfaces Implementing Classes",
 saan:"Pagdedefine ng 'contract' na dapat sundin ng maraming classes — plugins, strategies, services na may parehong API.",
 kailan:"Kapag gusto mong tiyakin na maraming classes ay may parehong set ng methods/properties, kahit magkaiba ang internal implementation nila.",
 bakit:"Nagbibigay ito ng consistent na structure/contract sa maraming classes, kaya interchangeable sila sa mga function na umaasa sa interface na iyon (polymorphism).",
 code:`<span class="kw">interface</span> Shape {
  <span class="fn">calculateArea</span>(): <span class="fn">number</span>;
}

<span class="kw">class</span> Circle <span class="kw">implements</span> Shape {
  <span class="fn">constructor</span>(<span class="kw">private</span> radius: <span class="fn">number</span>) {}
  <span class="fn">calculateArea</span>(): <span class="fn">number</span> {
    <span class="kw">return</span> Math.PI * <span class="kw">this</span>.radius ** <span class="num">2</span>;
  }
}

<span class="kw">class</span> Rectangle <span class="kw">implements</span> Shape {
  <span class="fn">constructor</span>(<span class="kw">private</span> w: <span class="fn">number</span>, <span class="kw">private</span> h: <span class="fn">number</span>) {}
  <span class="fn">calculateArea</span>(): <span class="fn">number</span> {
    <span class="kw">return this</span>.w * <span class="kw">this</span>.h;
  }
}

<span class="kw">const</span> shapes: Shape[] = [<span class="kw">new</span> Circle(<span class="num">5</span>), <span class="kw">new</span> Rectangle(<span class="num">4</span>, <span class="num">6</span>)];
shapes.<span class="fn">forEach</span>(s => console.<span class="fn">log</span>(s.<span class="fn">calculateArea</span>()));`},

{n:16, phase:"phase3", id:"abstract-classes", title:"Abstract Classes",
 saan:"Base classes na dapat i-extend, hindi direktang gamitin — templates para sa mga related classes.",
 kailan:"Kapag may shared na logic sa maraming classes, pero may ilang methods na dapat iba-iba ang implementation depende sa subclass.",
 bakit:"Pinipilit nito ang mga subclass na mag-implement ng specific na methods, habang nagbibigay pa rin ng shared/reusable na logic — hindi tulad ng interface na walang implementation.",
 code:`<span class="kw">abstract class</span> Employee {
  <span class="fn">constructor</span>(<span class="kw">protected</span> name: <span class="fn">string</span>) {}

  <span class="cm">// Shared method — meron nang implementation</span>
  <span class="fn">describe</span>(): <span class="fn">void</span> {
    console.<span class="fn">log</span>(<span class="str">\`\${this.name} - \${this.getSalary()}\`</span>);
  }

  <span class="cm">// Abstract method — WALANG implementation, dapat i-override</span>
  <span class="kw">abstract</span> <span class="fn">getSalary</span>(): <span class="fn">number</span>;
}

<span class="kw">class</span> Manager <span class="kw">extends</span> Employee {
  <span class="fn">getSalary</span>(): <span class="fn">number</span> { <span class="kw">return</span> <span class="num">50000</span>; }
}

<span class="cm">// const e = new Employee("Test"); Error: hindi pwedeng i-instantiate</span>
<span class="kw">const</span> m = <span class="kw">new</span> Manager(<span class="str">"Ana"</span>);
m.<span class="fn">describe</span>();`},

{n:17, phase:"phase3", id:"readonly-properties", title:"Readonly Properties",
 saan:"Properties na dapat lang ma-set nang isang beses (sa constructor) at hindi na dapat magbago pagkatapos.",
 kailan:"Kapag may data na dapat immutable pagkatapos ma-initialize — IDs, timestamps, configuration values.",
 bakit:"Compile-time na proteksyon laban sa hindi sinasadyang pagbabago ng values na dapat hindi na dapat baguhin — kaparehong konsepto ng <code>const</code> pero para sa object properties.",
 code:`<span class="kw">class</span> User {
  <span class="kw">readonly</span> id: <span class="fn">number</span>;
  name: <span class="fn">string</span>;

  <span class="fn">constructor</span>(id: <span class="fn">number</span>, name: <span class="fn">string</span>) {
    <span class="kw">this</span>.id = id;     <span class="cm">// OK sa loob ng constructor</span>
    <span class="kw">this</span>.name = name;
  }
}

<span class="kw">const</span> u = <span class="kw">new</span> User(<span class="num">1</span>, <span class="str">"Juan"</span>);
u.name = <span class="str">"Ana"</span>;     <span class="cm">// OK, pwede pang baguhin</span>
<span class="cm">// u.id = 2;      Error: readonly property</span>

<span class="cm">// Pwede rin sa interfaces</span>
<span class="kw">interface</span> Config {
  <span class="kw">readonly</span> apiUrl: <span class="fn">string</span>;
}`},

{n:18, phase:"phase4", id:"generics", title:"Generics (yung pinaka-core na skill)",
 saan:"Reusable functions, classes, at interfaces na dapat gumana sa MARAMING types nang hindi nawawala ang type safety — data structures, API wrappers, utility functions.",
 kailan:"Kapag ang isang function/class ay dapat gumana sa iba't-ibang types, pero gusto mong panatilihin ang koneksyon sa pagitan ng input at output types (type safety).",
 bakit:"Ito ang core skill na naghihiwalay sa 'nakakaalam lang ng basic TS syntax' sa 'marunong mag-architect ng type-safe systems' — nagbibigay ito ng reusability nang hindi kinakailangang gumamit ng <code>any</code>.",
 code:`<span class="cm">// Walang generics — kailangan ng hiwalay na function bawat type</span>
<span class="kw">function</span> <span class="fn">firstString</span>(arr: <span class="fn">string</span>[]): <span class="fn">string</span> { <span class="kw">return</span> arr[<span class="num">0</span>]; }
<span class="kw">function</span> <span class="fn">firstNumber</span>(arr: <span class="fn">number</span>[]): <span class="fn">number</span> { <span class="kw">return</span> arr[<span class="num">0</span>]; }

<span class="cm">// GAMIT ANG GENERICS — iisang function, anumang type</span>
<span class="kw">function</span> <span class="fn">first</span>&lt;T&gt;(arr: T[]): T {
  <span class="kw">return</span> arr[<span class="num">0</span>];
}

<span class="fn">first</span>&lt;<span class="fn">string</span>&gt;([<span class="str">"a"</span>, <span class="str">"b"</span>]); <span class="cm">// T = string</span>
<span class="fn">first</span>([<span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>]);       <span class="cm">// T = number (na-infer)</span>

<span class="cm">// Generic sa isang class — reusable container</span>
<span class="kw">class</span> Box&lt;T&gt; {
  <span class="fn">constructor</span>(<span class="kw">private</span> content: T) {}
  <span class="fn">getContent</span>(): T { <span class="kw">return this</span>.content; }
}
<span class="kw">const</span> stringBox = <span class="kw">new</span> Box&lt;<span class="fn">string</span>&gt;(<span class="str">"hello"</span>);`,
 note:"<b>Generic constraints:</b> pwede mong higpitan ang T gamit ang <code>extends</code>, hal. <code>&lt;T extends {length: number}&gt;</code> para tiyakin na may <code>.length</code> property ang T."},

{n:19, phase:"phase4", id:"utility-types", title:"Utility Types (Partial, Pick, Omit, Record, etc.)",
 saan:"Pagbuo ng bagong types mula sa existing na types — form updates, API responses, filtered views ng data.",
 kailan:"<code>Partial</code> → gawing optional lahat ng fields. <code>Pick</code> → kumuha lang ng ilang fields. <code>Omit</code> → tanggalin ang ilang fields. <code>Record</code> → gumawa ng object type na may consistent key-value shape.",
 bakit:"Iniiwasan nito ang duplicate type definitions — sa halip na muling isulat ang buong interface, dine-derive mo na lang ito mula sa existing na type.",
 code:`<span class="kw">interface</span> User {
  id: <span class="fn">number</span>;
  name: <span class="fn">string</span>;
  email: <span class="fn">string</span>;
  password: <span class="fn">string</span>;
}

<span class="cm">// Partial — lahat ng fields optional (para sa update forms)</span>
<span class="kw">type</span> UserUpdate = Partial&lt;User&gt;;
<span class="cm">// { id?: number; name?: string; email?: string; password?: string }</span>

<span class="cm">// Pick — piliin lang ang ilang fields</span>
<span class="kw">type</span> UserPreview = Pick&lt;User, <span class="str">"id"</span> | <span class="str">"name"</span>&gt;;
<span class="cm">// { id: number; name: string }</span>

<span class="cm">// Omit — tanggalin ang isang field (hal. password bago i-send sa frontend)</span>
<span class="kw">type</span> SafeUser = Omit&lt;User, <span class="str">"password"</span>&gt;;

<span class="cm">// Record — gumawa ng object type na may consistent shape</span>
<span class="kw">type</span> RolePermissions = Record&lt;<span class="str">"admin"</span> | <span class="str">"member"</span>, <span class="fn">string</span>[]&gt;;
<span class="cm">// { admin: string[]; member: string[] }</span>`,
 table:{head:["Utility","Ginagawa"], rows:[
   ["<code>Partial&lt;T&gt;</code>","Gawing optional lahat ng properties"],
   ["<code>Required&lt;T&gt;</code>","Gawing required lahat ng properties"],
   ["<code>Pick&lt;T, K&gt;</code>","Kumuha lang ng specific na properties"],
   ["<code>Omit&lt;T, K&gt;</code>","Tanggalin ang specific na properties"],
   ["<code>Record&lt;K, V&gt;</code>","Gumawa ng object type na may consistent shape"]
 ]}},

{n:20, phase:"phase4", id:"type-guards-narrowing", title:"Type Guards & Narrowing",
 saan:"Sa loob ng conditional blocks kapag humahawak ng union types o <code>unknown</code> values.",
 kailan:"Kapag kailangan mong tiyakin (sa runtime) kung anong specific na type ang hawak ng isang variable bago mo ito gamitin sa paraang partikular lang sa type na iyon.",
 bakit:"Pinapayagan nitong 'i-narrow' ng TypeScript ang isang mas malawak na type (union o unknown) papuntang mas specific na type sa loob ng isang code block, base sa runtime checks.",
 code:`<span class="kw">function</span> <span class="fn">printValue</span>(value: <span class="fn">string</span> | <span class="fn">number</span>) {
  <span class="cm">// typeof guard</span>
  <span class="kw">if</span> (<span class="kw">typeof</span> value === <span class="str">"string"</span>) {
    console.<span class="fn">log</span>(value.<span class="fn">toUpperCase</span>()); <span class="cm">// TS alam na: string dito</span>
  } <span class="kw">else</span> {
    console.<span class="fn">log</span>(value.<span class="fn">toFixed</span>(<span class="num">2</span>));    <span class="cm">// TS alam na: number dito</span>
  }
}

<span class="cm">// instanceof guard — para sa classes</span>
<span class="kw">class</span> Dog { <span class="fn">bark</span>() {} }
<span class="kw">class</span> Cat { <span class="fn">meow</span>() {} }

<span class="kw">function</span> <span class="fn">makeSound</span>(animal: Dog | Cat) {
  <span class="kw">if</span> (animal <span class="kw">instanceof</span> Dog) {
    animal.<span class="fn">bark</span>();
  } <span class="kw">else</span> {
    animal.<span class="fn">meow</span>();
  }
}

<span class="cm">// Custom type guard function</span>
<span class="kw">function</span> <span class="fn">isString</span>(val: <span class="kw">unknown</span>): val <span class="kw">is</span> <span class="fn">string</span> {
  <span class="kw">return typeof</span> val === <span class="str">"string"</span>;
}`},

{n:21, phase:"phase4", id:"mapped-conditional-types", title:"Mapped & Conditional Types",
 saan:"Advanced na type transformations — pagbuo ng bagong types base sa structure ng ibang types, gamit ang logic.",
 kailan:"<b>Mapped types</b> → kapag gusto mong i-transform ang LAHAT ng properties ng isang type sa parehong paraan. <b>Conditional types</b> → kapag ang resulta ng type ay depende sa isang condition (parang ternary, pero sa type level).",
 bakit:"Ito ang mga building blocks sa likod ng maraming utility types (Partial, Readonly, atbp.) — pagkatuto nito ay nagbibigay-daan na gumawa ng sarili mong reusable type utilities.",
 code:`<span class="cm">// MAPPED TYPE — i-apply ang parehong transformation sa lahat ng props</span>
<span class="kw">type</span> MyReadonly&lt;T&gt; = {
  <span class="kw">readonly</span> [K <span class="kw">in keyof</span> T]: T[K];
};

<span class="kw">interface</span> User { name: <span class="fn">string</span>; age: <span class="fn">number</span>; }
<span class="kw">type</span> ReadonlyUser = MyReadonly&lt;User&gt;;
<span class="cm">// { readonly name: string; readonly age: number }</span>

<span class="cm">// CONDITIONAL TYPE — parang ternary, pero sa type level</span>
<span class="kw">type</span> IsString&lt;T&gt; = T <span class="kw">extends</span> <span class="fn">string</span> ? <span class="str">"yes"</span> : <span class="str">"no"</span>;

<span class="kw">type</span> A = IsString&lt;<span class="fn">string</span>&gt;; <span class="cm">// "yes"</span>
<span class="kw">type</span> B = IsString&lt;<span class="fn">number</span>&gt;; <span class="cm">// "no"</span>

<span class="cm">// Halimbawa: kunin ang return type ng isang function</span>
<span class="kw">type</span> MyReturnType&lt;T&gt; = T <span class="kw">extends</span> (...args: <span class="kw">any</span>[]) => <span class="kw">infer</span> R ? R : <span class="kw">never</span>;`},

{n:22, phase:"phase4", id:"keyof-typeof-indexed", title:"keyof, typeof, Indexed Access Types",
 saan:"Pagbuo ng types na direktang nag-de-derive mula sa structure ng ibang types o existing values — nakakatulong maiwasan ang duplication.",
 kailan:"<code>keyof</code> → kapag gusto mong kunin ang lahat ng property names ng isang type bilang union. <code>typeof</code> → kapag gusto mong i-derive ang type mula sa isang existing na value/variable. <code>T[K]</code> (indexed access) → kapag gusto mong kunin ang type ng isang specific na property.",
 bakit:"Pinapanatili nito ang 'single source of truth' — sa halip na duplicate ang parehong impormasyon sa maraming lugar, dine-derive na lang ito galing sa isang pinagmulan.",
 code:`<span class="kw">interface</span> User {
  id: <span class="fn">number</span>;
  name: <span class="fn">string</span>;
  email: <span class="fn">string</span>;
}

<span class="cm">// keyof — union ng lahat ng property names</span>
<span class="kw">type</span> UserKeys = <span class="kw">keyof</span> User; <span class="cm">// "id" | "name" | "email"</span>

<span class="cm">// typeof — kunin ang type mula sa isang existing value</span>
<span class="kw">const</span> config = { apiUrl: <span class="str">"https://api.com"</span>, timeout: <span class="num">5000</span> };
<span class="kw">type</span> Config = <span class="kw">typeof</span> config;
<span class="cm">// { apiUrl: string; timeout: number }</span>

<span class="cm">// Indexed Access Type — kunin ang type ng isang specific property</span>
<span class="kw">type</span> UserId = User[<span class="str">"id"</span>]; <span class="cm">// number</span>
<span class="kw">type</span> UserName = User[<span class="str">"name"</span>]; <span class="cm">// string</span>`},

{n:23, phase:"phase5", id:"tsconfig-deep-dive", title:"tsconfig.json Deep Dive (strict mode flags)",
 saan:"Root ng bawat TypeScript project — sinasabi nito sa compiler kung paano i-compile ang code at gaano kahigpit ang type checking.",
 kailan:"Sa simula ng bawat project (setup), at kapag kailangan mong i-adjust ang strictness o compilation target habang lumalaki ang project.",
 bakit:"Ang tsconfig ang 'central control panel' ng TypeScript — kontrolado nito kung gaano kahigpit ang checking, saan ilalabas ang compiled files, at anong JS features ang pwedeng gamitin.",
 code:`<span class="cm">// tsconfig.json</span>
{
  <span class="str">"compilerOptions"</span>: {
    <span class="str">"target"</span>: <span class="str">"ES2020"</span>,
    <span class="str">"module"</span>: <span class="str">"ESNext"</span>,
    <span class="str">"strict"</span>: <span class="kw">true</span>,           <span class="cm">// i-on LAHAT ng strict flags</span>
    <span class="str">"noImplicitAny"</span>: <span class="kw">true</span>,   <span class="cm">// bawal ang unintentional 'any'</span>
    <span class="str">"strictNullChecks"</span>: <span class="kw">true</span>, <span class="cm">// null/undefined ay hiwalay na types</span>
    <span class="str">"noUnusedLocals"</span>: <span class="kw">true</span>,  <span class="cm">// warning sa unused variables</span>
    <span class="str">"esModuleInterop"</span>: <span class="kw">true</span>,
    <span class="str">"outDir"</span>: <span class="str">"./dist"</span>,
    <span class="str">"rootDir"</span>: <span class="str">"./src"</span>
  },
  <span class="str">"include"</span>: [<span class="str">"src/**/*"</span>]
}`,
 table:{head:["Flag","Bakit Importante"], rows:[
   ["<code>strict</code>","Master switch — inirerekomendang laging naka-on"],
   ["<code>noImplicitAny</code>","Pinipilit ka mag-type, hindi tinatago sa 'any'"],
   ["<code>strictNullChecks</code>","Pinipigilan ang 'undefined is not a function' errors"],
   ["<code>noUnusedLocals</code>","Nililinis ang code, hinuhuli ang dead code"]
 ]}},

{n:24, phase:"phase5", id:"typing-react-node", title:"Typing React/Node Projects",
 saan:"Full-stack TypeScript projects — React components sa frontend, Express/Node APIs sa backend.",
 kailan:"Kapag nagsusulat ng components (React) na may props/state, o kapag gumagawa ng request handlers (Node/Express) na may req/res objects.",
 bakit:"Ang React at Node ay may sariling specific na patterns para sa typing — pagkakaalam nito ay kritikal dahil karamihan ng totoong TS projects ay ginagamit ito sa alinman sa dalawang environment na ito.",
 code:`<span class="cm">// REACT — typing ng props at useState</span>
<span class="kw">interface</span> ButtonProps {
  label: <span class="fn">string</span>;
  onClick: () => <span class="kw">void</span>;
  disabled?: <span class="fn">boolean</span>;
}

<span class="kw">function</span> <span class="fn">Button</span>({ label, onClick, disabled }: ButtonProps) {
  <span class="kw">return</span> &lt;button onClick={onClick} disabled={disabled}&gt;{label}&lt;/button&gt;;
}

<span class="kw">const</span> [count, setCount] = useState&lt;<span class="fn">number</span>&gt;(<span class="num">0</span>);

<span class="cm">// NODE/EXPRESS — typing ng request handlers</span>
<span class="kw">import</span> { Request, Response } <span class="kw">from</span> <span class="str">"express"</span>;

app.<span class="fn">get</span>(<span class="str">"/users/:id"</span>, (req: Request, res: Response) => {
  <span class="kw">const</span> userId = req.params.id; <span class="cm">// naka-type na</span>
  res.<span class="fn">json</span>({ id: userId });
});`},

{n:25, phase:"phase5", id:"typing-api-responses", title:"Typing API Responses (fetch/axios)",
 saan:"Anumang komunikasyon sa external API — pagkuha ng data mula sa backend o third-party services.",
 kailan:"Palagi kapag kumukuha ng data mula sa <code>fetch</code> o <code>axios</code> — dahil hindi awtomatikong naka-type ang response, dapat mo itong tukuyin.",
 bakit:"Ang mga API responses ay nasa labas ng kontrol ng TypeScript compiler (galing sa network), kaya kailangan mong i-declare ang inaasahang shape para makuha ang type safety sa buong app.",
 code:`<span class="kw">interface</span> ApiUser {
  id: <span class="fn">number</span>;
  name: <span class="fn">string</span>;
  email: <span class="fn">string</span>;
}

<span class="cm">// Gamit ang fetch — generic sa .json()</span>
<span class="kw">async function</span> <span class="fn">getUser</span>(id: <span class="fn">number</span>): Promise&lt;ApiUser&gt; {
  <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">\`/api/users/\${id}\`</span>);
  <span class="kw">const</span> data: ApiUser = <span class="kw">await</span> res.<span class="fn">json</span>();
  <span class="kw">return</span> data;
}

<span class="cm">// Gamit ang axios — generic sa axios.get</span>
<span class="kw">import</span> axios <span class="kw">from</span> <span class="str">"axios"</span>;

<span class="kw">async function</span> <span class="fn">getUserAxios</span>(id: <span class="fn">number</span>): Promise&lt;ApiUser&gt; {
  <span class="kw">const</span> response = <span class="kw">await</span> axios.<span class="fn">get</span>&lt;ApiUser&gt;(<span class="str">\`/api/users/\${id}\`</span>);
  <span class="kw">return</span> response.data; <span class="cm">// naka-type na bilang ApiUser</span>
}`,
 note:"<b>Paalala:</b> hindi talaga sinusuri ng TypeScript ang actual na runtime shape ng response — kung mali ang assumption mo sa shape, gamitin ang library tulad ng Zod para sa runtime validation."},

{n:26, phase:"phase5", id:"third-party-types", title:"Third-party Types (@types packages, .d.ts files)",
 saan:"Kapag gumagamit ng JavaScript libraries (na walang built-in na TypeScript types) sa isang TS project.",
 kailan:"Kapag nag-i-install ng isang npm package na walang kasamang types, at may error na 'Could not find a declaration file'.",
 bakit:"Maraming libraries ay nakasulat sa plain JavaScript — kailangan ng hiwalay na type declarations (<code>.d.ts</code> files) para malaman ng TypeScript compiler ang shape ng mga functions/objects nito.",
 code:`<span class="cm">// Karamihan sa mga popular libraries ay may community types sa DefinitelyTyped</span>
<span class="cm">// I-install gamit ang @types/ prefix:</span>
npm install --save-dev @types/lodash
npm install --save-dev @types/express

<span class="cm">// Pagkatapos, normal na lang ang pag-import — naka-type na agad</span>
<span class="kw">import</span> _ <span class="kw">from</span> <span class="str">"lodash"</span>;
_.<span class="fn">chunk</span>([<span class="num">1</span>,<span class="num">2</span>,<span class="num">3</span>,<span class="num">4</span>], <span class="num">2</span>); <span class="cm">// naka-type na ang parameters at return</span>

<span class="cm">// Kung walang @types package, gumawa ng sarili mong declaration file:</span>
<span class="cm">// my-library.d.ts</span>
<span class="kw">declare module</span> <span class="str">"my-untyped-library"</span> {
  <span class="kw">export function</span> <span class="fn">doSomething</span>(input: <span class="fn">string</span>): <span class="fn">number</span>;
}`},

{n:27, phase:"phase5", id:"migrating-js-to-ts", title:"Migrating a JS Project to TS",
 saan:"Existing JavaScript codebases na gustong ma-convert papuntang TypeScript nang hindi kinakailangang isulat ulit lahat mula sa zero.",
 kailan:"Kapag lumalaki na ang isang JS project at nagiging mahirap nang i-maintain nang walang type safety — karaniwang gagawin nang incremental, hindi lahat nang sabay-sabay.",
 bakit:"Ang buong pag-rewrite ng project ay masyadong mapanganib/matagal — pinapayagan ng TypeScript ang gradual migration kung saan magkasabay na tumatakbo ang .js at .ts files habang unti-unting kina-convert.",
 code:`<span class="cm">// HAKBANG 1: I-install ang TypeScript at gumawa ng tsconfig.json</span>
npm install --save-dev typescript
npx tsc --init

<span class="cm">// HAKBANG 2: I-set ang allowJs para tumakbo pa rin ang existing .js files</span>
{
  <span class="str">"compilerOptions"</span>: {
    <span class="str">"allowJs"</span>: <span class="kw">true</span>,
    <span class="str">"checkJs"</span>: <span class="kw">false</span>,   <span class="cm">// huwag muna i-check ang .js files</span>
    <span class="str">"strict"</span>: <span class="kw">false</span>      <span class="cm">// simulan sa loose mode, i-strict unti-unti</span>
  }
}

<span class="cm">// HAKBANG 3: Palitan ang extension ng files nang paisa-isa (.js → .ts)</span>
<span class="cm">// mula sa pinakamababang dependency papunta sa pinakamataas</span>

<span class="cm">// HAKBANG 4: Unti-unting i-on ang strict flags habang natatapos ang migration</span>`,
 note:"<b>Best practice:</b> simulan sa mga utility/helper files (walang dependencies) bago pumunta sa mas complex na components — mas kaunting cascading errors."},

];
