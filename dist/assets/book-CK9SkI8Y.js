import{o as f,g as n,d as r,a as c,s as h,b as p}from"./firebase-CNN4wZ5D.js";const y=new URLSearchParams(window.location.search),g=y.get("id")?.trim(),d=document.getElementById("profileBtn");document.getElementById("errorModal");document.getElementById("errorTitle");document.getElementById("errorMessage");document.getElementById("closeErrorModal");const L=document.getElementById("menuBtn"),i=document.getElementById("profileMenu"),k=document.getElementById("menuAvatar"),b=document.getElementById("menuName"),B=document.getElementById("menuRole"),$=document.getElementById("profilePageBtn"),x=document.getElementById("logoutBtn"),o=document.getElementById("bookContainer");g||window.location.replace("/browse");let u=0;function E(e,s){d.classList.remove("hidden"),d.innerHTML=`
            <img src="${e.avatar}" class="admin-avatar">
        `,k.src=e.avatar,b.textContent=e.displayName,B.textContent=s?"Owner":"Administrator"}f(p,async e=>{try{if(!e){d.classList.add("hidden"),d.innerHTML="",i.classList.add("hidden");return}const s=await n(r(c,"admins",e.email.toLowerCase()));if(!s.exists()){await h(p),d.classList.add("hidden"),d.innerHTML="",i.classList.add("hidden");return}const a=await n(r(c,"userdata",e.uid));if(!a.exists())throw new Error("User profile not found.");E(a.data(),s.data().owner===!0)}catch(s){console.error(s)}});d.onclick=e=>{e.stopPropagation();const s=()=>{u=Date.now()+400,i.classList.remove("hidden")};if(window.scrollY>30){window.scrollTo({top:0,behavior:"smooth"});const a=()=>{window.scrollY<=5?s():requestAnimationFrame(a)};requestAnimationFrame(a)}else i.classList.toggle("hidden")};document.addEventListener("click",e=>{!i.contains(e.target)&&!d.contains(e.target)&&i.classList.add("hidden")});window.addEventListener("scroll",()=>{Date.now()<u||i.classList.contains("hidden")||i.classList.add("hidden")});x.onclick=async()=>{i.classList.add("hidden"),await h(p)};$.onclick=()=>{window.location.href="/profile"};L.onclick=()=>{window.location.href="/index"};function C(){o.innerHTML=`
            <div class="book-page">
                <div class="book-cover placeholder"></div>
                <div class="book-info">
                    <div class="book-title placeholder"></div>
                    <div class="alternate-titles">
                        <div class="alternate-line long placeholder"></div>
                        <div class="alternate-line medium placeholder"></div>
                    </div>
                    <div class="book-tags">
                        <div class="tag placeholder"></div>
                        <div class="tag placeholder"></div>
                    </div>
                    <div class="extra-tags">
                        <div class="small-tag placeholder"></div>
                        <div class="small-tag placeholder"></div>
                        <div class="small-tag placeholder"></div>
                        <div class="small-tag placeholder"></div>
                        <div class="small-tag placeholder"></div>
                    </div>
                    <div class="book-meta">
                        <div class="meta-row">
                            <span>Author</span>
                            <div class="meta-value placeholder"></div>
                        </div>
                        <div class="meta-row">
                            <span>Category</span>
                            <div class="meta-value placeholder"></div>
                        </div>
                        <div class="meta-row">
                            <span>Origin</span>
                            <div class="meta-value placeholder"></div>
                        </div>
                        <div class="meta-row">
                            <span>Chapters</span>
                            <div class="meta-value small placeholder"></div>
                        </div>
                        <div class="meta-row">
                            <span>Status</span>
                            <div class="meta-value small placeholder"></div>
                        </div>
                        <div class="meta-row">
                            <span>Uploaded By</span>
                            <div class="meta-value placeholder"></div>
                        </div>
                    </div>
                    <div class="book-tag-list">
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                        <div class="book-tag placeholder"></div>
                    </div>
                    <div class="book-description">
                        <div class="desc-line long placeholder"></div>
                        <div class="desc-line long placeholder"></div>
                        <div class="desc-line medium placeholder"></div>
                        <div class="desc-line long placeholder"></div>
                        <div class="desc-line short placeholder"></div>
                    </div>
                    <div class="download-placeholder-wrapper">
                        <div class="download-placeholder placeholder"></div>
                    </div>
                </div>
            </div>
        `}function m(e){const s=new Set(["and","or","of","the","to","in","on","at","for","with"]);return e.toLowerCase().split(" ").map((a,l)=>l!==0&&s.has(a)?a:a.charAt(0).toUpperCase()+a.slice(1)).join(" ")}function I(e){return e.split(" - ")[0]}function U(e){return e.map(m)}async function M(e){let s="Unknown";try{const t=await n(r(c,"userdata",e.uploaderUid));t.exists()&&(s=t.data().displayName)}catch(t){console.error(t)}o.innerHTML=`
            <div class="book-page">
                <img
                    class="book-cover"
                    src="${e.coverUrl}"
                    alt="${e.bookName}"
                >
                <div class="book-info">
                    <h1 class="book-title-text">
                        ${e.bookName}
                    </h1>
                    ${e.alternateTitles?.length?`
                        <div class="alternate-titles-text">
                            ${e.alternateTitles.join(" • ")}
                        </div>
                        `:""}
                    <div class="book-tags">
                        <div class="tag">
                            ${m(e.mainGenre)}
                        </div>
                        <div class="genre-divider">
                            •
                        </div>
                        <div class="tag language-tag">
                            ${I(e.language)}
                        </div>
                    </div>
                    ${e.genres?.length?`
                        <div class="extra-tags">
                            ${U(e.genres).map(t=>`
                                    <div class="small-tag">${t}</div>
                                `).join("")}
                        </div>
                        `:""}
                    <div class="book-meta">
                        <div class="meta-row">
                            <span>Author</span>
                        <div>
                            <a
                                class="author-link"
                                href="https://www.google.com/search?q=${encodeURIComponent(`${e.category.toLowerCase()} author ${e.authorName}`)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ${e.authorName}
                            </a>
                        </div>
                        </div>
                        <div class="meta-row">
                            <span>Category</span>
                            <div>${e.category}</div>
                        </div>
                        <div class="meta-row">
                            <span>Origin</span>
                            <div>${e.origin}</div>
                        </div>
                        <div class="meta-row">
                            <span>Chapters</span>
                            <div>${e.chapterNumber.toLocaleString()}</div>
                        </div>
                        <div class="meta-row">
                            <span>Status</span>
                            <div>${e.status}</div>
                        </div>
                        <div class="meta-row">
                            <span>Uploaded By</span>
                            <div>
                                <a
                                    class="author-link"
                                    href="/profile?id=${e.uploaderUid}"
                                >
                                    ${s}
                                </a>
                            </div>
                        </div>
                    </div>
                    ${e.tags?.length?`
                        <div class="book-tag-list">
                            ${e.tags.map(t=>`
                                    <div class="book-tag">
                                        ${m(t)}
                                    </div>
                                `).join("")}
                        </div>
                        `:""}
                    <div class="description-section">
                        <div class="book-description collapsed"><div class="book-description-content">${e.description}</div></div>
                        <button
                            class="description-toggle"
                            aria-label="Expand Description"
                        >
                            <svg
                                class="toggle-arrow"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M6 9L12 15L18 9"
                                    stroke="currentColor"
                                    stroke-width="2.6"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div class="download-placeholder-wrapper">
                        <a
                            class="download-epub-btn"
                            href="${e.epubDownloadUrl}"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download EPUB
                        </a>
                    </div>
                </div>
            </div>
        `;const a=o.querySelector(".book-description"),l=o.querySelector(".description-toggle");if(a.scrollHeight<=250){l.remove(),a.classList.remove("collapsed"),a.classList.add("expanded"),a.style.maxHeight="none";return}const w=a.scrollHeight;l.onclick=()=>{l.classList.toggle("expanded")?(a.classList.remove("collapsed"),a.style.maxHeight=w+"px"):(a.classList.add("collapsed"),a.style.maxHeight="250px")}}let v=null;async function H(){try{console.log("Loading:",g);const e=await n(r(c,"epubs",g));if(!e.exists()){window.location.replace("/browse");return}v=e.data(),document.title=v.bookName||"Untitled",await M(v)}catch(e){console.error(e)}}C();H();
