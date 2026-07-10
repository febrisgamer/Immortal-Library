import{g as X,d as G,a as j,s as ee,b as I,c as Re,e as Se,f as Ne,p as Ae,o as He,h as Pe}from"./firebase-CNN4wZ5D.js";const C=document.getElementById("profileBtn"),U=document.getElementById("loginModal"),Y=document.getElementById("googleLogin"),qe=document.getElementById("closeModal"),ce=document.getElementById("errorModal"),De=document.getElementById("errorTitle"),Fe=document.getElementById("errorMessage"),Ue=document.getElementById("closeErrorModal"),We=document.getElementById("menuBtn"),de=document.getElementById("sidePanel"),te=document.getElementById("panelOverlay"),ze=document.getElementById("closePanel"),T=document.getElementById("panelLogin"),L=document.getElementById("searchContainer"),Oe=document.getElementById("searchBtn"),g=document.getElementById("searchInput"),v=document.getElementById("profileMenu"),Xe=document.getElementById("menuAvatar"),Ge=document.getElementById("menuName"),je=document.getElementById("menuRole"),Ve=document.getElementById("profilePageBtn"),Ye=document.getElementById("logoutBtn"),c=document.getElementById("bookTrack"),q=document.querySelector(".carousel-viewport"),R=document.getElementById("hallGrid"),S=document.getElementById("editorList"),ue=document.getElementById("hallPrev"),me=document.getElementById("hallNext"),he=document.getElementById("editorPrev"),fe=document.getElementById("editorNext");let N=[],pe=0,B=0;const _=8;let ge=[],u=null;const r=document.createElement("div");r.className="search-results";r.innerHTML=`
        <div class="search-results-inner">
        </div>
        `;document.body.appendChild(r);async function V(){if(u)return u;const e=await X(G(j,"epubs","metadata"));return e.exists()?(u=e.data(),localStorage.setItem("metadata",JSON.stringify(u)),u):(u={},localStorage.removeItem("metadata"),u)}function ve(){U.classList.remove("hidden")}T.onclick=()=>{A(),ve()};qe.onclick=()=>{U.classList.add("hidden")};function K(e,t){De.textContent=e,Fe.textContent=t,ce.classList.remove("hidden")}Ue.onclick=()=>{ce.classList.add("hidden")};async function Ze(e){const t=G(j,"userdata",e.uid),n=await X(t);if(n.exists())return n.data();const s=e.displayName??"";let o;/^[A-Za-z0-9\s]+$/.test(s)?(o=s.toLowerCase().replace(/[^a-z0-9]/g,""),o.length===0&&(o="user"+Math.floor(1e7+Math.random()*9e7))):o="user"+Math.floor(1e7+Math.random()*9e7);let i=e.photoURL;try{const y=await e.getIdToken(),b=new AbortController,m=setTimeout(()=>{b.abort()},3e5),k=await fetch("https://immortal-library-backend.onrender.com/upload-avatar",{method:"POST",headers:{Authorization:`Bearer ${y}`,"Content-Type":"application/json"},body:JSON.stringify({photoURL:e.photoURL,uid:e.uid}),signal:b.signal});if(clearTimeout(m),k.ok){const h=await k.json();h.success&&h.avatar&&(i=h.avatar)}else console.warn("Avatar upload failed:",k.status)}catch(y){console.warn("Avatar upload skipped:",y)}const p={uid:e.uid,username:o,displayName:s,avatar:i};return await Pe(t,p),p}async function _e(){await V(),ge=Object.values(u.browse??{})}function Ke(e,t){C.classList.remove("hidden"),C.innerHTML=`
                <img src="${e.avatar}" class="admin-avatar">
            `,Xe.src=e.avatar,Ge.textContent=e.displayName,je.textContent=t?"Owner":"Administrator"}let Z=!1;Y.onclick=async()=>{if(!Z){Z=!0,Y.disabled=!0;try{const t=s.user.email.toLowerCase();if(!(await X(G(j,"admins",t))).exists()){U.classList.add("hidden"),K("Access Denied","This Google account is not registered as an administrator of the Immortal Library"),await ee(I);return}await Re(I,Se);const s=await Ne(I,Ae);U.classList.add("hidden")}catch(e){e.code!=="auth/cancelled-popup-request"&&(console.error(e),K("Login Failed",e.message))}finally{Z=!1,Y.disabled=!1}}};We.onclick=()=>{de.classList.add("open"),te.classList.remove("hidden")};ze.onclick=A;te.onclick=A;function A(){de.classList.remove("open"),te.classList.add("hidden")}function Je(e,t){const n=r.firstElementChild;n.innerHTML=`
                <div class="search-results-title">
                    Results
                </div>
                ${e.length?`
                    <div class="search-list">
                        ${e.slice(0,5).map(s=>`
                            <a
                                class="search-book"
                                href="/book?id=${encodeURIComponent(s.bookId)}">
                                <img
                                    class="search-cover"
                                    src="${s.coverUrl}"
                                    loading="lazy">
                                <div class="search-info">
                                    <div class="search-name">
                                        ${s.bookName}
                                    </div>
                                    <div class="search-meta">
                                        ${s.category}
                                        •
                                        ${s.origin}
                                    </div>
                                </div>
                            </a>
                        `).join("")}
                    </div>
                    ${e.length>5?`
                        <a
                            class="search-more"
                            href="/browse?query=${encodeURIComponent(t)}">
                            See all ${e.length} Results
                        </a>
                        `:""}
                    `:`<div class="search-results-empty">
                        No Results
                    </div>`}
            `}function ne(){const e=L.getBoundingClientRect();r.style.width=`${e.width}px`,r.style.left=`${e.left}px`,window.innerWidth<=900?(r.style.top=`${e.bottom}px`,r.style.borderTopLeftRadius="0",r.style.borderTopRightRadius="0"):(r.style.top=`${e.bottom+16}px`,r.style.borderTopLeftRadius="20px",r.style.borderTopRightRadius="20px")}function Qe(){ne(),r.classList.add("open")}function D(){r.classList.remove("open")}window.addEventListener("resize",()=>{r.classList.contains("open")&&ne()});window.addEventListener("scroll",()=>{r.classList.contains("open")&&ne()},!0);document.addEventListener("pointerdown",e=>{r.contains(e.target)||L.contains(e.target)||D()});g.addEventListener("input",async()=>{const e=g.value.trim();if(!e){D();return}await _e();const t=e.toLowerCase(),n=[],s=[];ge.forEach(i=>{if((i.bookName||"").toLowerCase().includes(t)){n.push(i);return}(i.alternateTitles||[]).some(y=>(y||"").toLowerCase().includes(t))&&s.push(i)});const o=[...n,...s];Je(o,e),Qe()});g.addEventListener("keydown",e=>{if(e.key!=="Enter")return;const t=g.value.trim();t&&(window.location.href=`/browse?query=${encodeURIComponent(t)}`)});window.addEventListener("pageshow",()=>{g.value="",L.classList.remove("open"),D()});He(I,async e=>{try{if(!e){C.classList.add("hidden"),C.innerHTML="",v.classList.add("hidden"),T.textContent="ADMINISTRATOR LOGIN",T.onclick=()=>{A(),ve()};return}const t=await X(G(j,"admins",e.email.toLowerCase()));if(!t.exists()){await ee(I);return}const n=await Ze(e);Ke(n,t.data().owner===!0),T.textContent="UPLOAD FILE",T.onclick=()=>{A(),window.location.href="/upload"}}catch(t){console.error("Auth initialization failed:",t),K("Login Failed",t.message)}});Oe.onclick=()=>{L.classList.toggle("open"),L.classList.contains("open")?setTimeout(()=>{g.focus()},180):(g.value="",D())};document.addEventListener("click",e=>{L.contains(e.target)||(L.classList.remove("open"),g.value="",D())});C.onclick=e=>{e.stopPropagation();const t=()=>{pe=Date.now()+400,v.classList.remove("hidden")};if(window.scrollY>30){window.scrollTo({top:0,behavior:"smooth"});const n=()=>{window.scrollY<=5?t():requestAnimationFrame(n)};requestAnimationFrame(n)}else v.classList.toggle("hidden")};document.addEventListener("click",e=>{!v.contains(e.target)&&!C.contains(e.target)&&v.classList.add("hidden")});window.addEventListener("scroll",()=>{Date.now()<pe||v.classList.contains("hidden")||v.classList.add("hidden")});Ye.onclick=async()=>{v.classList.add("hidden"),await ee(I)};Ve.onclick=()=>{window.location.href="/profile"};const et=document.getElementById("supportSection"),tt=document.getElementById("closeSupport");tt.onclick=()=>{et.remove()};window.addEventListener("load",()=>{const t=document.querySelector(".alliance-track span").offsetWidth,s=t/180,o=document.createElement("style");o.textContent=`
                .alliance-track{
                    animation:supportScroll ${s}s linear infinite;
                }
                @keyframes supportScroll{
                    from{
                        transform:translateX(0);
                    }
                    to{
                        transform:translateX(-${t}px);
                    }
                }
            `,document.head.appendChild(o)});let d=[],l=[],a=0,E=0,f=0,J,we=0;function w(){return c.querySelector(".book-card.placeholder")!==null}function W(e){const t=e.dataset.fullTitle||e.textContent.trim(),n=getComputedStyle(e),o=(W.canvas||(W.canvas=document.createElement("canvas"))).getContext("2d");o.font=`${n.fontWeight} ${n.fontSize} ${n.fontFamily}`;const i=e.clientWidth,p="...",y=o.measureText(p).width;function b(ie,xe,Te){let re=0,F=xe;for(;F<ie.length;){const le=o.measureText(ie[F]).width;if(re+le+(Te?y:0)>i)break;re+=le,F++}return F}let m=b(t,0,!1);if(m>=t.length){e.textContent=t;return}for(;m>0&&t[m]!==" ";)m--;m<=0&&(m=b(t,0,!1));const k=t.slice(0,m).trim();let h=m;for(;t[h]===" ";)h++;let ae=b(t,h,!0);if(ae>=t.length){e.textContent=k+`
`+t.slice(h);return}e.textContent=k+`
`+t.slice(h,ae).trim()+p}function nt(){if(c.innerHTML="",window.innerWidth<=900){const t=document.createElement("div");t.className="book-card placeholder active",c.appendChild(t)}else for(let t=0;t<21;t++){const n=document.createElement("div");n.className="book-card placeholder",t===10&&n.classList.add("active"),c.appendChild(n)}l=[...c.children]}function st(){c.innerHTML="";const e=(t,n)=>{const s=document.createElement("div");s.className="book-card",s.dataset.bookId=t.bookId,s.dataset.index=n,s.innerHTML=`
                    <img
                        src="${t.coverUrl}"
                        draggable="false"
                        loading="lazy"
                        alt=""
                    >
                    <div class="book-title">
                        ${t.bookName}
                    </div>
                `,s.addEventListener("click",()=>{if($)return;H(1e4);const i=Number(s.dataset.index),p=a%d.length;if(i===p){window.location.href=`/book?id=${t.bookId}`;return}Le(i)}),c.appendChild(s);const o=s.querySelector(".book-title");o.dataset.fullTitle=t.bookName,W(o)};d.forEach(e),d.forEach(e),d.forEach(e),l=[...c.children]}function ot(){if(l=[...c.children],l.length===0)return;const e=getComputedStyle(c),t=parseFloat(e.gap);E=l[0].offsetWidth+t,d.length?(a=Math.floor(Math.random()*d.length),a+=d.length):a=Math.floor(l.length/2),M()}function at(){const e=d[a%d.length]?.coverUrl;e&&document.documentElement.style.setProperty("--main-bg-image",`url("${e}")`)}function M(){l.length!==0&&(l.forEach(e=>{e.classList.remove("active")}),l[a]&&l[a].classList.add("active"),at(),f=q.clientWidth/2-(a*E+l[0].offsetWidth/2),c.style.transform=`translate3d(${f}px,0,0)`,requestAnimationFrame(()=>{Ee(),ye()}))}function ye(){if(!Number.isFinite(window.lastMouseX)||!Number.isFinite(window.lastMouseY))return;l.forEach(n=>{n.classList.remove("force-hover")});const t=document.elementFromPoint(window.lastMouseX,window.lastMouseY)?.closest(".book-card");t&&t.classList.add("force-hover")}function Le(e){const t=d.length;e=(e%t+t)%t;const n=Math.floor(a/t);a=[e+(n-1)*t,e+n*t,e+(n+1)*t].reduce((o,i)=>Math.abs(i-a)<Math.abs(o-a)?i:o),c.style.transition="transform .35s cubic-bezier(.22,.8,.2,1)",M()}function Ee(){const e=d.length;if(e<=0){c.style.transition="none";return}for(;a<e;)a+=e,f-=e*E;for(;a>=e*2;)a-=e,f+=e*E;c.style.transition="none"}function be(){w()||(clearInterval(J),J=setInterval(()=>{Date.now()<we||(a++,M())},4e3))}function H(e=5e3){we=Date.now()+e}let z=!1,ke=0,Ie=0,$=!1;function Ce(e){H(1e4),z=!0,$=!1,ke=e,Ie=f,c.style.transition="none"}function Be(e){if(!z)return;const t=e-ke;Math.abs(t)>4&&($=!0),f=Ie+t;const n=q.clientWidth/2;a=Math.round((n-f-l[0].offsetWidth/2)/E),Ee(),c.style.transform=`translate3d(${f}px,0,0)`}function Me(){if(!z){$=!1;return}z=!1;let e=a,t=1/0;l.forEach((n,s)=>{const o=f+s*E+l[0].offsetWidth/2,i=Math.abs(o-q.clientWidth/2);i<t&&(t=i,e=s)}),Le(e),requestAnimationFrame(()=>{$=!1})}q.addEventListener("mousedown",e=>{w()||Ce(e.clientX)});window.addEventListener("mousemove",e=>{w()||Be(e.clientX)});window.addEventListener("mouseup",()=>{w()||Me()});q.addEventListener("touchstart",e=>{w()||Ce(e.touches[0].clientX)});window.addEventListener("touchmove",e=>{w()||Be(e.touches[0].clientX)});window.addEventListener("touchend",()=>{w()||(Me(),requestAnimationFrame(()=>{$=!1}))});window.addEventListener("resize",()=>{if(l.length){const e=getComputedStyle(c);E=l[0].offsetWidth+parseFloat(e.gap)}document.querySelectorAll(".book-title").forEach(W),M()});document.addEventListener("contextmenu",e=>{e.target instanceof Element&&e.target.closest(".book-card")&&e.preventDefault()});document.addEventListener("dragstart",e=>{e.target instanceof Element&&e.target.closest(".book-card")&&e.preventDefault()});document.addEventListener("selectstart",e=>{e.target instanceof Element&&e.target.closest(".book-card")&&e.preventDefault()});document.addEventListener("mousedown",e=>{e.button===1&&e.target.closest(".book-card")&&e.preventDefault()});document.addEventListener("click",e=>{e.target.closest(".book-card")&&(e.ctrlKey||e.shiftKey||e.metaKey)&&e.preventDefault()},!0);async function it(){await V();const e=u.featured;if(!e||!e.books){d=[];return}d=Object.values(e.books),st(),requestAnimationFrame(()=>{ot(),be()})}document.addEventListener("keydown",e=>{w()||(e.key==="ArrowRight"&&(H(1e4),a++,M()),e.key==="ArrowLeft"&&(H(1e4),a--,M()))});document.addEventListener("visibilitychange",()=>{document.hidden?clearInterval(J):(be(),H(1e3))});window.addEventListener("mousemove",e=>{window.lastMouseX=e.clientX,window.lastMouseY=e.clientY,ye()});function rt(){R.innerHTML="";for(let e=0;e<8;e++){const t=document.createElement("article");t.className="hall-card skeleton",t.innerHTML=`
                    <div class="hall-cover"></div>
                    <div class="hall-info">
                        <div class="ph title"></div>
                        <div class="ph short"></div>
                        <div class="ph medium"></div>
                        <div class="ph small"></div>
                        <div class="hall-tags">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                `,R.appendChild(t)}}function lt(e){const n={1:"#d7b56d",2:"#cfd3d8",3:"#b7773b"}[e]||"#525252",s=`
                <text
                    x="50"
                    y="34"
                    text-anchor="middle"
                    dominant-baseline="middle"
                    font-family="Cinzel, serif"
                    font-size="${e<10?24:20}"
                    font-weight="700"
                    fill="${e<=3?"#111":"#ececec"}"
                    style="
                        paint-order:stroke;
                        stroke:rgba(0,0,0,.55);
                        stroke-width:1.2;
                    ">
                    ${e}
                </text>
            `;return`
            <svg
                class="hall-trophy"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg">
                <g fill="${n}">
                    <path d="
                        M28 12
                        H72
                        V24
                        C72 38 64 48 56 53
                        V66
                        H69
                        V75
                        H31
                        V66
                        H44
                        V53
                        C36 48 28 38 28 24
                        Z
                    "/>
                    <path d="
                        M28 18
                        H14
                        C14 33 22 41 31 41
                        V34
                        C25 34 22 29 22 24
                        H28
                        Z
                    "/>
                    <path d="
                        M72 18
                        H86
                        C86 33 78 41 69 41
                        V34
                        C75 34 78 29 78 24
                        H72
                        Z
                    "/>
                    <rect
                        x="46"
                        y="66"
                        width="8"
                        height="12"
                        rx="2"
                    />
                    <rect
                        x="30"
                        y="78"
                        width="40"
                        height="10"
                        rx="4"
                    />
                </g>
                ${s}
            </svg>`}function O(e){return e.split(" ").map(t=>t&&t[0].toUpperCase()+t.slice(1).toLowerCase()).join(" ")}function $e(e){return e.includes(" - ")?e.split(" - ")[0]:e}function ct(e){const t=[...e.children];t.forEach(s=>{s.style.display=""});const n=e.getBoundingClientRect();for(const s of t)s.getBoundingClientRect().right>n.right&&(s.style.display="none")}function se(){R.innerHTML="";const e=B*_,t=e+_;N.slice(e,t).forEach(n=>{const s=Number(n.rank),o=document.createElement("article");o.className=`hall-card${s<=3?` top-${s}`:""}`,o.dataset.bookId=n.bookId,o.innerHTML=`
                    <div class="hall-cover">
                        <img
                            src="${n.coverUrl}"
                            alt=""
                            loading="lazy"
                            draggable="false">
                    </div>
                    <div class="hall-info">
                        <div class="hall-book-title">
                            ${n.bookName}
                        </div>
                        <div class="hall-meta">
                            <span class="hall-genre">
                                ${O(n.mainGenre)}
                            </span>
                            <span class="hall-divider">•</span>
                            <span class="hall-language">
                                ${$e(n.language)}
                            </span>
                        </div>
                        <div class="hall-description">
                            ${n.description}
                        </div>
                        <div class="hall-genres">
                            ${(n.genres||[]).slice(0,4).map(i=>`
                                        <span class="hall-chip">
                                            ${O(i)}
                                        </span>
                                    `).join("")}
                        </div>
                    </div>
                    ${lt(s)}
                `,o.addEventListener("click",()=>{window.location.href=`/book?id=${n.bookId}`}),R.appendChild(o),R.querySelectorAll(".hall-genres").forEach(ct)}),ue.disabled=B===0,me.disabled=t>=N.length}ue.onclick=()=>{B!==0&&(B--,se())};me.onclick=()=>{(B+1)*_>=N.length||(B++,se())};async function dt(){await V();const e=u.halloffame;if(!e){N=[];return}N=Object.values(e).sort((t,n)=>Number(t.rank)-Number(n.rank)),se()}let P=[],x=0;const Q=4;function ut(){S.innerHTML="";for(let e=0;e<4;e++){const t=document.createElement("article");t.className="editor-card skeleton",t.innerHTML=`
                    <div class="editor-cover"></div>
                    <div class="editor-info">
                        <div class="ph title"></div>
                        <div class="ph short"></div>
                        <div class="ph medium"></div>
                        <div class="ph small"></div>
                        <div class="hall-tags">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                `,S.appendChild(t)}}function mt(e){const t=[...e.children];t.forEach(s=>{s.style.display=""});const n=e.getBoundingClientRect();for(const s of t)s.getBoundingClientRect().right>n.right&&(s.style.display="none")}function oe(){S.innerHTML="";const e=x*Q,t=e+Q;P.slice(e,t).forEach(n=>{const s=document.createElement("article");s.className="editor-card",s.dataset.bookId=n.bookId,s.innerHTML=`
                        <div class="editor-cover">
                            <img
                                src="${n.coverUrl}"
                                alt=""
                                loading="lazy"
                                draggable="false">
                        </div>
                        <div class="editor-info">
                            <div class="editor-title">
                                ${n.bookName}
                            </div>
                            <div class="editor-meta">
                                <span class="editor-genre">
                                    ${O(n.mainGenre)}
                                </span>
                                <span class="editor-divider">•</span>
                                <span class="editor-language">
                                    ${$e(n.language)}
                                </span>
                            </div>
                            <div class="editor-description">
                                ${n.description}
                            </div>
                            <div class="editor-genres">
                                ${(n.genres||[]).slice(0,4).map(o=>`
                                            <span class="editor-chip">
                                                ${O(o)}
                                            </span>
                                        `).join("")}
                            </div>
                        </div>
                    `,s.onclick=()=>{window.location.href=`/book?id=${n.bookId}`},S.appendChild(s)}),S.querySelectorAll(".editor-genres").forEach(mt),he.disabled=x===0,fe.disabled=t>=P.length}async function ht(){await V();const e=u.editorspick;if(!e){P=[];return}P=Object.values(e).sort((t,n)=>Number(t.position)-Number(n.position)),oe()}he.onclick=()=>{x!==0&&(x--,oe())};fe.onclick=()=>{(x+1)*Q>=P.length||(x++,oe())};nt();rt();ut();await it();await dt();await ht();
