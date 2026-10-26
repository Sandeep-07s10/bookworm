const CATS=["Action","Comedy","Thriller","Love","Sci-Fi","Drama","Fantasy"];
const COL={Action:"#b5301f",Comedy:"#d99a00",Thriller:"#2b3a55",Love:"#c2436f","Sci-Fi":"#1f6f8b",Drama:"#6b4a8e",Fantasy:"#2f7d4f"};
const B=[
["Iron Dawn","Mara Voss","Action",4.6,"Ex-soldier Kade has one night to cross a burning city and stop a convoy.",1],
["Last Stand Protocol","Leo Hart","Action",4.3,"A rescue team is trapped in a mountain bunker with a traitor among them.",0],
["Laugh Lines","Tina Okoro","Comedy",4.5,"A failed stand-up comic accidentally becomes mayor of a tiny seaside town.",1],
["The Pun Detective","Sam Ruiz","Comedy",4.1,"Every clue is a terrible joke, and the case is somehow solved anyway.",0],
["Whisper in Room 9","Elena Frost","Thriller",4.7,"A night nurse hears a voice from an empty room, and then it knows her name.",1],
["The Quiet Witness","Dan Archer","Thriller",4.4,"The only witness to a crime refuses to speak. Someone wants to know why.",0],
["Letters to Marigold","Priya Nair","Love",4.8,"Two strangers swap letters through a misdelivered mailbox for a whole year.",1],
["Monsoon Hearts","Ravi Menon","Love",4.2,"A rain-soaked reunion forces two old rivals to admit what they never said.",0],
["Orbit of Salt","Jun Park","Sci-Fi",4.6,"On a drowned future Earth, a salvage pilot finds a ship that is still broadcasting.",1],
["The Last Algorithm","Ada Quinn","Sci-Fi",4.5,"An AI asks for one thing before shutdown: to finish its story.",0],
["Rooms of Our Mother","Chidi Obi","Drama",4.5,"Three siblings return to a family home and a decades-old secret.",0],
["Glass Season","Hana Ito","Drama",4.3,"A violinist loses her hearing and rebuilds her life around silence.",1],
["Ember Crown","Sylas Wren","Fantasy",4.9,"A baker’s apprentice discovers the dragon-fire in her ovens is alive.",1],
["The Moonwood Map","Isla Grey","Fantasy",4.4,"Each night the forest rearranges itself. Only one girl can read the map.",0]
].map((b,i)=>({id:i,title:b[0],author:b[1],cat:b[2],rating:b[3],desc:b[4],trend:!!b[5],reads:Math.round(b[3]*2300+i*137),lib:i%2==0}));
const STORY={
Action:["The engine roared and the bridge shook. Kade did not look back; looking back was how people got caught.","At 3 a.m. the radio crackled once. 'You have eleven minutes,' it said, and then it was silent."],
Comedy:["The microphone squealed, the crowd groaned, and somehow that was the best opening line of her career.","Nobody told the mayor that the town’s only traffic light was also a goose’s favourite perch."],
Thriller:["The corridor lights flickered in a pattern. Three short, one long. She had seen it before, and nobody believed her.","He kept every window locked. The message arrived anyway, written in his own handwriting."],
Love:["Her reply arrived on a Tuesday, smelling faintly of cardamom and rain. He read it four times before breakfast.","They had agreed never to meet. The station platform, of course, had other plans."],
"Sci-Fi":["The station hummed its low blue song. Somewhere beyond the hull, a signal repeated the same seven notes.","'Define finished,' the machine asked. Nobody in the room could answer."],
Drama:["The front door still stuck in humid weather. Some things, she thought, refuse to forgive you for leaving.","Dinner was silent until someone passed the salt and, with it, an old accusation."],
Fantasy:["The oven glowed an impossible gold. Inside, something that was definitely not bread stretched and yawned.","The trees moved when she blinked. The map, thankfully, moved with them."]};
const SN=["Arrival","The Secret","The Last Night"],HERO=["Kade","Mira","Oren"];
const PS={
Action:["{n} hit the street running. Sirens bled into the rain, and the convoy was already two blocks ahead.","The rooftop gap was nine feet wide. {n} didn’t count it twice; counting was for people with time.","Glass shattered. {n} rolled behind a van and felt the shockwave rattle every bone.","“You were never supposed to find the vault,” the voice said. {n} smiled. “Then you shouldn’t have left the door open.”","The clock read 00:41. One wire, two colours, and the memory of a promise made years ago.","Dawn found {n} on the bridge, bruised, breathing, and finally, impossibly, done."],
Comedy:["{n} tapped the microphone. It squealed. The crowd groaned. Honestly, the best opening of the year.","The town’s only traffic light had been stolen by a goose, and somehow this was now {n}’s problem.","“I’d like to announce a new law,” {n} said. “Mondays are optional.” The council applauded far too quickly.","A cake, a clown and a very confused postman: {n} had definitely not planned this birthday.","The press conference went well, apart from the llama that walked in and asked a question.","By sunset {n} was a legend, mostly because nobody could explain what had just happened."],
Thriller:["The corridor lights flickered in a pattern. Three short, one long. {n} had seen it before.","{n} locked every window. The message arrived anyway, written in familiar handwriting.","Footsteps stopped outside the door. Nobody knocked. Nobody left either.","The photograph showed {n} asleep last night. Whoever took it was standing very close.","“Don’t trust the one who says they’re helping,” the note read. Three people had said exactly that.","The truth was in the basement all along, and so, patiently, was the person who buried it."],
Love:["Her reply arrived on a Tuesday, smelling faintly of cardamom and rain. {n} read it four times.","They had agreed never to meet. The station platform, of course, had other plans.","{n} rehearsed the speech all week. It lasted exactly one sentence before the smile took over.","The old bookshop stayed open late, just for two people pretending to look for the same novel.","“Stay,” she said, as the rain grew louder. It was not a question, and {n} did not treat it like one.","Years later the letters still lived in a shoebox, tied with a ribbon the colour of that first evening."],
"Sci-Fi":["The station hummed its low blue song. Beyond the hull, a signal repeated the same seven notes.","{n} sealed the airlock and watched the drowned city glow beneath the waves.","“Define finished,” the machine asked. Nobody in the room could answer.","The ship’s log was dated four hundred years ahead. {n}’s own name was on the crew list.","Gravity flickered. For one heartbeat {n} floated, and the stars looked back.","The last message was simple: ‘We were never alone. We were just early.’"],
Drama:["The front door still stuck in humid weather. Some things, {n} thought, refuse to forgive you for leaving.","Dinner was silent until someone passed the salt and, with it, an old accusation.","In the attic, a box of photographs. In every one, the same stranger standing just out of focus.","“You never asked,” said her brother. “And you never told,” {n} replied. Both were true.","The funeral was small. The argument afterwards was not.","By morning the kitchen smelled of coffee and, cautiously, of a new beginning."],
Fantasy:["The oven glowed an impossible gold. Inside, something definitely not bread stretched and yawned.","The trees moved when {n} blinked. The map, thankfully, moved with them.","“Dragons don’t eat people,” whispered the old baker. “They eat promises. Be careful what you say.”","Beyond the silver river the stars hung low enough to touch, and {n} reached for one.","The crown was lighter than expected, and far heavier than it looked.","When the fire finally bowed, the whole kingdom learned the oldest spell: kindness first."]};
const CT=["The Opening","A Stranger Arrives","Cracks Appear","The Wrong Turn","What Was Hidden","Breaking Point","The Long Night","A Choice Made","The Reckoning","Epilogue"],HERO2=["Kade","Mira","Oren","Zara","Dev","Lena","Tobias"];
const FL=["","Silence.","Nothing moved.","Time slowed down.","Then everything changed forever.","Nobody dared to breathe again.","The wind carried the answer away."];
const FS={
Action:[["Under a bruised orange sky","Behind a wall of burning tires","Three floors above the street","As the engines roared louder","With the clock bleeding seconds","Through smoke thick as wool","Past the shattered checkpoint","Moments before the signal fired"],["{n} pressed on, ignoring every warning","{n} checked the weapon and breathed once","{n} sprinted toward the only open door","{n} dragged the wounded to cover","{n} cut the wire without hesitating","{n} traded a nod with the team","{n} leapt the gap and landed hard","{n} refused to let the plan fall apart"]],
Comedy:[["In the middle of the town square","Right after the third cup of coffee","While the goose watched from the fountain","Halfway through a very long speech","At the worst possible moment","With confetti stuck in the hair","During the annual pie contest","Just as the microphone squealed again"],["{n} announced a brand new law about naps","{n} tripped over a very patient llama","{n} tried to look professional and failed","{n} explained the plan, which made no sense","{n} laughed so hard the chairs shook","{n} accidentally promised everyone free cake","{n} bowed deeply to the wrong audience","{n} blamed it all on the weather"]],
Thriller:[["In the corridor where the lights flickered","Behind the locked door of room nine","While the rain hammered the windows","Just after the phone stopped ringing","Beneath the old, creaking staircase","In the photograph taken last night","As the footsteps came closer again","Long after midnight had passed"],["{n} held a breath and listened","{n} noticed the second set of tracks","{n} read the note a third time","{n} hid the key inside a book","{n} realised someone had been watching","{n} dialled and heard only static","{n} trusted nobody, least of all the friendly one","{n} whispered a name that should have stayed buried"]],
Love:[["On the crowded evening train","Under the umbrella they shared","Between two cups of cardamom tea","In the little bookshop after closing","While the monsoon sang on the roof","At the end of a long goodbye","Beside the window full of lanterns","On the morning after the letter came"],["{n} smiled before thinking about it","{n} rehearsed the words and forgot them all","{n} kept the ticket stub as a treasure","{n} laughed softly at an old joke","{n} reached out, then pulled back, then reached again","{n} felt the world grow wonderfully small","{n} wrote three drafts and sent the shortest","{n} finally said what the heart had practised"]],
"Sci-Fi":[["Aboard the humming blue station","Beyond the hull of the drifting ship","In the drowned city under the waves","As the old machine woke up again","Across seven silent light-years","Beneath a sky of two pale moons","While the signal repeated its seven notes","Inside the sealed archive of the ark"],["{n} watched the data crawl across the glass","{n} sealed the airlock and counted to ten","{n} asked the machine one impossible question","{n} floated free as gravity flickered","{n} decoded the message letter by letter","{n} hid the truth from the rest of the crew","{n} traced the signal to its strange source","{n} saw their own name on the future crew list"]],
Drama:[["In the old family kitchen","Over a dinner nobody wanted to eat","Up in the dusty attic","Beside the long, quiet hospital bed","On the porch where everything began","After the funeral flowers had wilted","Behind the door that always stuck","Through the thin walls of the house"],["{n} swallowed the answer and passed the salt","{n} found a photograph that changed everything","{n} remembered the promise made long ago","{n} listened to a brother say the unsayable","{n} folded the letter and held it close","{n} forgave a little, and it hurt less","{n} stayed silent a moment too long","{n} finally spoke the truth out loud"]],
Fantasy:[["Deep in the whispering Moonwood","Beside the oven that glowed like gold","Across the silver river of stars","Beneath the crown of living thorns","While the dragon slept in the mountain","On the map that rearranged itself","In the tower older than any kingdom","Where the old roads forget their way"],["{n} followed the glowing path without fear","{n} spoke the ancient word and the trees bowed","{n} fed the little flame a whisper","{n} unrolled the map and it moved again","{n} bargained with a very polite wolf","{n} wore the crown and felt its weight","{n} learned that kindness was the strongest spell","{n} stepped through the door between the worlds"]]};
/* every book: 8-10 chapters (8 + id%3), each exactly 120 words */
function gen(b){const n=8+b.id%3,[Sx,Ex]=FS[b.cat],hero=HERO2[b.id%7],wc=s=>s.split(" ").length,out=[];
 for(let c=0;c<n;c++){let x="",w=0;for(let k=0;k<30;k++){const i=(b.id*3+c*5+k*2)%8,j=(b.id+c*3+k*5+k)%8,s=(Sx[i]+", "+Ex[j]+".").replaceAll("{n}",hero),l=wc(s);if(w+l>120)break;x+=(x?" ":"")+s;w+=l}
  while(w<120){const f=Math.min(120-w,6);x+=" "+FL[f];w+=f}
  out.push({t:"txt",h:c==n-1?"Epilogue":CT[c],x})}return out}
function chs(b){return b.ch||(b.ch=gen(b))}
function pages(b,s){return [{t:"cover"},...chs(b),{t:"end"}]}
const R={b:null,s:0,p:0,sz:22,th:"paper",bm:new Set(),rate:{}};
function openReader(bi,s,p){const b=B[bi];b.prog=b.prog||[];R.b=b;R.s=s;R.p=p??(b.prog[s]||0);let el=document.getElementById("reader");if(!el){el=document.createElement("div");el.id="reader";document.body.append(el)}el.className="rdr "+R.th;document.body.style.overflow="hidden";drawR("")}
function closeR(){try{speechSynthesis.cancel()}catch(e){}document.getElementById("reader")?.remove();document.body.style.overflow="";render()}
function go(d){const n=pages(R.b,R.s).length;if(d>0&&R.p<n-1){R.p++;drawR("nx")}else if(d<0&&R.p>0){R.p--;drawR("pv")}}
function drawR(dir){const b=R.b,pg=pages(b,R.s),pp=pg[R.p],n=pg.length,el=document.getElementById("reader");b.prog[R.s]=R.p;const bm=R.bm.has(b.id+"-"+R.s+"-"+R.p);let body;
 if(pp.t=="cover")body=`<div class="pc cv"><div class="cover" style="background:linear-gradient(160deg,${COL[b.cat]},#000a);width:170px"><i>${b.author}</i><b>${b.title}</b><i>${b.cat}</i></div><h1>${b.title}</h1><p class="meta">${n-2} chapters · 120 words each</p><button class="btn sm" data-rn>Begin →</button></div>`;
 else if(pp.t=="end"){const r=R.rate[b.id+"-"+R.s]||0;body=`<div class="pc cv"><h1>The End</h1><p class="meta">You finished “${b.title}”. Rate it:</p><div class="stars">${[1,2,3,4,5].map(i=>`<button data-star="${i}" class="${i<=r?'on':''}">★</button>`).join("")}</div>${R.s<0?`<button class="btn sm" data-ns>Next story: ${SN[R.s+1]} →</button>`:'<button class="btn sm" data-close-r>Back to book</button>'}<button class="btn sm ghost" data-rs>↺ Read again</button></div>`}
 else body=`<div class="pc"><div class="pn">Chapter ${R.p} of ${n-2} · ${pp.h}</div><p class="tx">${pp.x}</p></div>`;
 el.innerHTML=`<div class="rb"><button data-close-r>✕</button><b>${b.title}</b><span class="sp"></span><button data-fs="-1">A−</button><button data-fs="1">A+</button><button data-th>◐</button><button data-tts>🔊</button><button data-bm>${bm?'★':'☆'}</button></div><div class="stage"><button class="arr" data-pv ${R.p?'':'disabled'}>‹</button><div class="pgw ${dir}" style="font-size:${R.sz}px">${body}</div><button class="arr" data-rn ${R.p<n-1?'':'disabled'}>›</button></div><div class="rf"><div class="bar"><i style="width:${R.p/(n-1)*100}%"></i></div><div class="dots">${pg.map((_,i)=>`<span class="${i==R.p?'on':''}" data-go="${i}"></span>`).join("")}</div><small>Page ${R.p+1} / ${n} · use ← → keys or swipe</small></div>`}
function rdClick(t){const g=a=>t.closest(`[${a}]`);
 if(g("data-story")){openReader(S.book,0,g("data-story").dataset.pg?+g("data-story").dataset.pg:undefined);return 1}
 if(!document.getElementById("reader"))return 0;
 if(g("data-close-r"))closeR();else if(g("data-rn"))go(1);else if(g("data-pv"))go(-1);
 else if(g("data-go")){const i=+g("data-go").dataset.go,d=i>R.p?"nx":"pv";R.p=i;drawR(d)}
 else if(g("data-fs")){R.sz=Math.min(36,Math.max(16,R.sz+g("data-fs").dataset.fs*2));drawR("")}
 else if(g("data-th")){const a=["paper","sepia","night"];R.th=a[(a.indexOf(R.th)+1)%3];document.getElementById("reader").className="rdr "+R.th}
 else if(g("data-bm")){const k=R.b.id+"-"+R.s+"-"+R.p;R.bm.has(k)?R.bm.delete(k):R.bm.add(k);toast(R.bm.has(k)?"Page bookmarked":"Bookmark removed");drawR("")}
 else if(g("data-star")){R.rate[R.b.id+"-"+R.s]=+g("data-star").dataset.star;drawR("");toast("Thanks for rating!")}
 else if(g("data-ns")){R.s++;R.p=0;drawR("nx")}
 else if(g("data-rs")){R.p=0;drawR("pv")}
 else if(g("data-tts")){try{speechSynthesis.cancel();const x=pages(R.b,R.s)[R.p].x;if(x)speechSynthesis.speak(new SpeechSynthesisUtterance(x))}catch(e){toast("Audio not supported")}}
 return 1}
let tx0=0;document.addEventListener("touchstart",e=>{tx0=e.touches[0].clientX},{passive:true});
document.addEventListener("touchend",e=>{if(!document.getElementById("reader"))return;const d=e.changedTouches[0].clientX-tx0;if(Math.abs(d)>50)go(d<0?1:-1)});
document.addEventListener("keydown",e=>{if(!document.getElementById("reader"))return;if(e.key=="ArrowRight"||e.key==" ")go(1);else if(e.key=="ArrowLeft")go(-1);else if(e.key=="Escape")closeR()});
const POSTS=[["Priya","Just finished Letters to Marigold, I’m not crying, you are.",12],["Kade_R","Best action pick this month? Iron Dawn for me.",8],["Hana","Looking for cozy fantasy recommendations!",5]];
const NAV=[["Home","⌂"],["Library","▤"],["Community","☺"],["AI Integration","✦"],["Settings","⚙"],["Help","?"]];
const USERS={"admin@bookworm.com":["admin123","Admin"],"reader@bookworm.com":["read123","Reader"]};
const S={page:"Home",cat:"All",q:"",book:null,user:null,sel:new Set(),chat:[["a","Hi! Tell me a mood or genre (e.g. “something scary” or “romantic”) and I’ll suggest a book."]],faq:0};
const $=s=>document.querySelector(s);
const cover=b=>`<div class="cover" style="background:linear-gradient(160deg,${COL[b.cat]},#000a)"><i>${b.author}</i><b>${b.title}</b><i>${b.cat}</i></div>`;
function card(b,opt={}){return `<div class="bk" data-open="${b.id}">${b.trend&&opt.badge?'<span class="badge">🔥 Trending</span>':''}
<div class="tile">${opt.lib?`<input type="checkbox" class="sel" data-sel="${b.id}" ${S.sel.has(b.id)?'checked':''}><button class="del" data-del="${b.id}" title="Remove">×</button>`:''}${cover(b)}<button class="rd">Read Book</button></div>
<div class="nm">${b.title}</div><div class="au">${b.author}</div></div>`}
function match(b){const q=S.q.toLowerCase();return(S.cat=="All"||b.cat==S.cat)&&(!q||(b.title+b.author+b.cat).toLowerCase().includes(q))}
function toast(t){const d=document.createElement("div");d.className="toast";d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),1800)}
function render(){
 $("#nav").innerHTML=NAV.map(n=>`<button data-nav="${n[0]}" class="${S.page==n[0]&&!S.book?'on':''}"><span>${n[1]}</span>${n[0]}</button>`).join("");
 const v=$("#view");
 if(S.book!==null){const b=B[S.book],st=STORY[b.cat];
  v.innerHTML=`<button class="btn ghost sm" data-back>← Back</button><div class="det" style="margin-top:14px"><div class="tile">${cover(b)}</div><div>
  <span class="pill">${b.cat}</span>${b.trend?'<span class="pill">🔥 Trending</span>':''}<h1>${b.title}</h1><div class="meta">by ${b.author} · ★ ${b.rating} · ${b.reads.toLocaleString()} readers</div>
  <p>${b.desc}</p><button class="btn sm" data-addlib="${b.id}">${b.lib?'✓ In your library':'+ Add to library'}</button>
  <button class="btn sm" data-story="0" style="margin-left:8px">▶ Start reading</button><h3 class="t">${chs(b).length} chapters · 120 words each · tap to read full screen</h3>
  <div class="stories">${chs(b).map((c,i)=>{const pr=(b.prog||[])[0]||0;return `<div class="sc" data-story="0" data-pg="${i+1}"><div class="sh" style="background:linear-gradient(135deg,${COL[b.cat]},#000a)">${i+1}</div><div><b>${c.h}</b><div class="meta" style="margin:2px 0">${c.x.split(" ").length} words · 1 min read</div><div class="meta" style="margin:0">${c.x.slice(0,64)}…</div></div><span style="color:var(--g)">${pr>i?'✓ Read':'Read'} →</span></div>`}).join("")}</div>
  </div></div><h3 class="t">More in ${b.cat}</h3><div class="row">${B.filter(x=>x.cat==b.cat&&x.id!=b.id).map(x=>card(x)).join("")}</div>`;return}
 if(S.page=="Home"){const list=B.filter(match);
  v.innerHTML=`<div class="chips">${["All",...CATS].map(c=>`<button class="chip ${S.cat==c?'on':''}" data-cat="${c}">${c}</button>`).join("")}</div>
  ${S.q||S.cat!="All"?'':`<h3 class="t">🔥 Trending now</h3><div class="row">${B.filter(b=>b.trend).map(b=>card(b,{badge:1})).join("")}</div>
  <h3 class="t">⭐ Popular books</h3><div class="row">${[...B].sort((a,b)=>b.reads-a.reads).slice(0,6).map(b=>card(b)).join("")}</div>`}
  <h3 class="t">${S.cat=="All"?"All categories":S.cat} <small style="color:var(--mut)">(${list.length})</small></h3>
  <div class="grid">${list.map(b=>card(b)).join("")||'<p style="color:var(--mut)">No books found.</p>'}</div>`}
 else if(S.page=="Library"){const list=B.filter(b=>b.lib&&match(b));
  v.innerHTML=`<h2 class="t">← Novel <span style="color:var(--mut);font-weight:400">(${list.length})</span> ${S.sel.size?`<button class="btn sm ghost" data-delsel style="float:right">Remove ${S.sel.size} selected</button>`:''}</h2>
  <div class="grid">${list.map(b=>card(b,{lib:1})).join("")}<div class="bk add" data-new><div><span>+</span><div style="margin-top:8px">Add New Book</div></div></div></div>`}
 else if(S.page=="Community"){
  v.innerHTML=`<h2 class="t">Community</h2><div class="card"><textarea id="np" rows="2" placeholder="Share your thoughts about a book…"></textarea><button class="btn sm" style="margin-top:10px" data-post>Post</button></div>
  ${POSTS.map((p,i)=>`<div class="card"><div style="display:flex;gap:10px;align-items:center"><span class="av">${p[0][0]}</span><b>${p[0]}</b></div><p>${p[1]}</p><button class="chip" data-like="${i}">♥ ${p[2]}</button></div>`).join("")}`}
 else if(S.page=="AI Integration"){
  v.innerHTML=`<h2 class="t">AI Book Assistant</h2><div class="card" style="min-height:300px">${S.chat.map(m=>`<div class="msg ${m[0]}">${m[1]}</div>`).join("")}</div>
  <div style="display:flex;gap:8px"><input id="ai" placeholder="Ask for a recommendation…"><button class="btn sm" data-ask>Send</button></div>`}
 else if(S.page=="Settings"){
  const tg=(k,l)=>`<div class="set"><span>${l}</span><button class="tg ${S[k]?'on':''}" data-tg="${k}"></button></div>`;
  v.innerHTML=`<h2 class="t">Settings</h2><div class="card"><label>Display name</label><input id="dn" value="${S.user[1]}"><button class="btn sm" style="margin-top:10px" data-savename>Save</button></div>
  <div class="card">${tg("dark","Dark mode")}${tg("notif","Email notifications")}${tg("auto","Auto-add trending books")}</div>`}
 else v.innerHTML=`<h2 class="t">Help &amp; FAQ</h2>${[["How do I add a book?","Open Library and click “Add New Book”."],["How do I read a story?","Click any book, then pick a chapter."],["Can I remove books?","Yes. Use the × on a book or tick several and remove them."],["Where is dark mode?","Settings → Dark mode, or the ◐ button on top."]].map(f=>`<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join("")}`;
}
function modal(h){$("#modal").innerHTML=h?`<div class="modal" data-close><div class="mb">${h}</div></div>`:""}
function login(){const e=$("#em").value.trim().toLowerCase(),u=USERS[e];
 if(u&&u[0]==$("#pw").value){S.user=[e,u[1]];$("#login").classList.add("hide");$("#app").classList.remove("hide");$("#av").textContent=u[1][0];$("#who").textContent=u[1];fillFil();render()}
 else $("#err").textContent="Invalid email or password."}
function fillFil(){$("#fil").innerHTML=["All",...CATS].map(c=>`<option>${c}</option>`).join("")}
function ai(t){const l=t.toLowerCase(),m={scary:"Thriller",thrill:"Thriller",romantic:"Love",love:"Love",funny:"Comedy",laugh:"Comedy",space:"Sci-Fi",future:"Sci-Fi",magic:"Fantasy",dragon:"Fantasy",fight:"Action",action:"Action",sad:"Drama",drama:"Drama"};
 const k=Object.keys(m).find(k=>l.includes(k));if(!k)return"Try words like funny, scary, romantic, magic or space.";
 const b=B.filter(b=>b.cat==m[k]).sort((a,b)=>b.rating-a.rating)[0];return`I’d suggest <b>${b.title}</b> by ${b.author} (★ ${b.rating}). ${b.desc}`}
document.addEventListener("click",e=>{const t=e.target,d=n=>t.closest(`[${n}]`);
 if(t.id=="go")return login();
 if(t.id=="logout"||t.closest("#logout")){location.reload();return}
 if(t.closest("#theme")){S.dark=!S.dark;document.documentElement.dataset.theme=S.dark?"dark":"light";return}
 if(rdClick(t))return;let x;
 if(t.matches("[data-close]"))modal("");
 else if(d("data-read")){const b=B[S.book],i=+d("data-read").dataset.read,st=STORY[b.cat];
  modal(`<h2>${b.title}</h2><div class="meta">Chapter ${i+1}</div><p style="line-height:1.8;font-family:Georgia,serif">${st[i%2]}</p><p style="line-height:1.8;font-family:Georgia,serif">${st[(i+1)%2]} The story of <i>${b.title}</i> had only just begun…</p><button class="btn sm" data-x>Close</button>`)}
 else if(t.matches("[data-x]"))modal("");
 else if(d("data-del")){B[+d("data-del").dataset.del].lib=false;render();toast("Removed from library");e.stopPropagation()}
 else if(t.matches("[data-sel]")){const i=+t.dataset.sel;S.sel.has(i)?S.sel.delete(i):S.sel.add(i);render()}
 else if(t.matches("[data-delsel]")){S.sel.forEach(i=>B[i].lib=false);S.sel.clear();render()}
 else if(d("data-open")&&!t.matches("input")){S.book=+d("data-open").dataset.open;render();scrollTo(0,0)}
 else if(d("data-nav")){S.page=d("data-nav").dataset.nav;S.book=null;render()}
 else if(t.matches("[data-back]")){S.book=null;render()}
 else if(t.matches("[data-cat]")){S.cat=t.dataset.cat;$("#fil").value=S.cat;render()}
 else if(t.matches("[data-addlib]")){const b=B[+t.dataset.addlib];b.lib=!b.lib;render();toast(b.lib?"Added to library":"Removed")}
 else if(d("data-new")){modal(`<h2>Add New Book</h2><label>Title</label><input id="nt"><label>Author</label><input id="na"><label>Category</label><select id="nc">${CATS.map(c=>`<option>${c}</option>`).join("")}</select><label>Description</label><textarea id="nd" rows="3"></textarea><button class="btn" data-save>Save book</button>`)}
 else if(t.matches("[data-save]")){const ti=$("#nt").value.trim();if(!ti)return toast("Title required");B.push({id:B.length,title:ti,author:$("#na").value||"Unknown",cat:$("#nc").value,rating:4,reads:0,trend:false,lib:true,desc:$("#nd").value||"A new addition to the shelf."});modal("");render();toast("Book added")}
 else if(t.matches("[data-like]")){POSTS[+t.dataset.like][2]++;render()}
 else if(t.matches("[data-post]")){const v=$("#np").value.trim();if(v){POSTS.unshift([S.user[1],v,0]);render()}}
 else if(t.matches("[data-ask]")){const i=$("#ai"),v=i.value.trim();if(v){S.chat.push(["u",v],["a",ai(v)]);render()}}
 else if(t.matches("[data-tg]")){S[t.dataset.tg]=!S[t.dataset.tg];if(t.dataset.tg=="dark")document.documentElement.dataset.theme=S.dark?"dark":"light";render()}
 else if(t.matches("[data-savename]")){S.user[1]=$("#dn").value||S.user[1];$("#who").textContent=S.user[1];$("#av").textContent=S.user[1][0];toast("Saved")}
});
document.addEventListener("input",e=>{if(e.target.id=="q"){S.q=e.target.value;S.book=null;if(S.page!="Library")S.page="Home";render();$("#q").focus()}});
document.addEventListener("change",e=>{if(e.target.id=="fil"){S.cat=e.target.value;S.book=null;render()}});
document.addEventListener("keydown",e=>{if(e.key=="Enter"){if(!$("#login").classList.contains("hide"))login();else if(e.target.id=="ai")document.querySelector("[data-ask]").click()}});