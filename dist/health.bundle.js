(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t.p+"images/4793480a828c7f153f0d.jpg",r=new Date,n=`${r.getFullYear()}-${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`,o="bc0c5c54ba5f46279fceac6301227d04";function a(t,e){return t.filter(((t,r,n)=>r===n.findIndex((r=>r[e]===t[e]))))}function c(t){const e=document.getElementById("news-container");function r(t,e,...r){const n=document.createElement(t);for(const[t,r]of Object.entries(e))"text"===t?n.textContent=r:"html"===t?n.innerHTML=r:n.setAttribute(t,r);return r.forEach((t=>{"string"==typeof t?n.appendChild(document.createTextNode(t)):n.appendChild(t)})),n}e.innerHTML="",t.forEach((t=>{const n=r("div",{class:"card"},r("h2",{class:"raleway",text:t.title}),r("img",{src:t.urlToImage,alt:"Article Image"}),r("p",{class:"raleway",text:t.description}));n.addEventListener("click",(()=>{return e=t.url,void window.open(e,"_blank");var e})),e.appendChild(n)}))}document.getElementById("search-form").addEventListener("submit",(function(t){t.preventDefault(),async function(t){const e=`https://newsapi.org/v2/top-headlines?q=${document.getElementById("search-input").value.replace(/\s+/g,"_")}&from=${n}&sortBy=publishedAt&apiKey=${o}`;try{const t=await fetch(e);if(!t.ok)throw new Error("Network response was not ok "+t.statusText);c(a((await t.json()).articles,"title").filter((t=>"[Removed]"!==t.title&&t.urlToImage)))}catch(t){console.error("There has been a problem with your fetch operation:",t)}}()})),async function(t){const e=`https://newsapi.org/v2/top-headlines?country=us&category=Health&apiKey=${o}`;try{const t=await fetch(e);if(!t.ok)throw new Error("Network response was not ok "+t.statusText);c(a((await t.json()).articles,"title").filter((t=>"[Removed]"!==t.title&&t.urlToImage)))}catch(t){console.error("There has been a problem with your fetch operation:",t)}}(),document.querySelector(".logo img").src=e})();