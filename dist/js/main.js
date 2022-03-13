(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),l=e=>e>=0&&e<10?`0${e}`:e,n=n=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60),c=Math.floor(t/60%60),l=Math.floor(t%60);return{timeRemaining:t,hours:o<0?0:o,minutes:c<0?0:c,seconds:l<0?0:l}})();t.textContent=l(a.hours),o.textContent=l(a.minutes),c.textContent=l(a.seconds),a.timeRemaining<1&&clearInterval(n)};n(setInterval(n,1e3))})("15 march 2022 22:16"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.closest("ul>li>a")||e.target.closest(".close-btn"))&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content"),c=window.matchMedia("(max-width:768px)"),l=function(e,t,o){let c;const l=()=>{c=requestAnimationFrame(l),++e<11?(o.style.top=e+"%",t.style.display="block"):cancelAnimationFrame(c)},n=()=>{c=requestAnimationFrame(n),--e>-50?o.style.top=e+"%":(cancelAnimationFrame(c),t.style.display="none")};return{open:l,close:n}}(-50,e,o);t.forEach((t=>{t.addEventListener("click",(()=>{c.matches?(o.style.top="10%",e.style.display="block"):c.matches?l.close():l.open()}))})),e.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||l.close()}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),c=document.querySelectorAll("form input[type=text]"),l=document.querySelectorAll("form input[type=email]"),n=document.querySelectorAll("form input[type=tel]");console.log(e.value),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/\D/g,"")}));for(let e=0;e<c.length;e++)c[e].addEventListener("input",(()=>{c[e].value=c[e].value.replace(/[^а-яА-ЯЁё\-\s]/g,"")}));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>{l[e].value=l[e].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g,"")}));for(let e=0;e<n.length;e++)n[e].addEventListener("input",(()=>{n[e].value=n[e].value.replace(/[^0-9()\-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");for(let e=0;e<t.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),o.append(t)}const c=document.querySelectorAll(".dot");let l,n=0;const a=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),n++,n>=t.length&&(n=0),r(t,n,"portfolio-item-active"),r(c,n,"dot-active")},i=(e=1500)=>{l=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(a(t,n,"portfolio-item-active"),a(c,n,"dot-active"),e.target.matches("#arrow-right")?n++:e.target.matches("#arrow-left")?n--:e.target.classList.contains("dot")&&c.forEach(((t,o)=>{e.target===t&&(n=o)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),r(t,n,"portfolio-item-active"),r(c,n,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(l)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),l=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),a=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==l&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,r=c.value;let s=0,i=1,u=1;l.value>1&&(i+=+l.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),s=o.value&&c.value?e*t*r*i*u:0,a.textContent=s})()}))})(100)})();