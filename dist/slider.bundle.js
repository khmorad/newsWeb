(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){fetch("https://newsapi.org/v2/top-headlines?country=us&category=Technology&apiKey=bc0c5c54ba5f46279fceac6301227d04").then((e=>e.json())).then((e=>{const t=e.articles.filter((e=>"[Removed]"!==e.title&&e.urlToImage)),n=document.querySelector(".slideshow-container"),c=document.querySelector('.introduction > div[style="text-align: center"]');c.innerHTML="",t.forEach(((e,o)=>{const d=document.createElement("div");d.classList.add("mySlides","fade"),d.innerHTML=`\n          <div class="numbertext">${o+1} / ${t.length}</div>\n          <img src="${e.urlToImage}" style="max-width:700px; height:400px; object-fit:cover; " >\n          <div class="text" style="background-color: rgba(73, 72, 72, 0.7);  height: 5px; max-width: 700px; padding-bottom:30px;">${e.title}</div>\n        `,n.appendChild(d);const i=document.createElement("span");i.classList.add("dot"),i.setAttribute("data-index",o+1),c.appendChild(i)}));let o=1;function d(e){i(o+=e)}function i(e){let t,n=document.getElementsByClassName("mySlides"),c=document.getElementsByClassName("dot");for(e>n.length&&(o=1),e<1&&(o=n.length),t=0;t<n.length;t++)n[t].style.display="none";for(t=0;t<c.length;t++)c[t].classList.remove("active");n[o-1].style.display="block",c[o-1].classList.add("active")}i(o),document.querySelector(".prev").addEventListener("click",(function(){d(-1)})),document.querySelector(".next").addEventListener("click",(function(){d(1)})),document.querySelectorAll(".dot").forEach((e=>{e.addEventListener("click",(function(){var t;t=parseInt(e.getAttribute("data-index")),i(o=t)}))}))})).catch((e=>console.error("Error fetching the news:",e)))}))})();