(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),c=e=>e>=0&&e<10?`0${e}`:e,a=a=>{let n=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60),l=Math.floor(t/60%60),c=Math.floor(t%60);return{timeRemaining:t,hours:o<0?0:o,minutes:l<0?0:l,seconds:c<0?0:c}})();t.textContent=c(n.hours),o.textContent=c(n.minutes),l.textContent=c(n.seconds),n.timeRemaining<1&&clearInterval(a)};a(setInterval(a,1e3))})("15 march 2022 22:16"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.closest("ul>li>a")||e.target.closest(".close-btn"))&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content"),l=window.matchMedia("(max-width:768px)");let c,a=-50;const n=()=>{a++,c=requestAnimationFrame(n),a<11?(o.style.top=a+"%",e.style.display="block"):cancelAnimationFrame(c)},r=()=>{a--,c=requestAnimationFrame(r),a>-50?o.style.top=a+"%":(cancelAnimationFrame(c),e.style.display="none")};t.forEach((t=>{t.addEventListener("click",(()=>{l.matches?(o.style.top="10%",e.style.display="block"):l.matches?r():n()}))})),e.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||r()}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),l=document.querySelectorAll("form input[type=text]"),c=document.querySelectorAll("form input[type=email]"),a=document.querySelectorAll("form input[type=tel]");console.log(e.value),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/\D/g,"")}));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>{l[e].value=l[e].value.replace(/[^а-яА-ЯЁё\-\s]/g,"")}));for(let e=0;e<c.length;e++)c[e].addEventListener("input",(()=>{c[e].value=c[e].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g,"")}));for(let e=0;e<a.length;e++)a[e].addEventListener("input",(()=>{a[e].value=a[e].value.replace(/[^0-9()\-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");for(let e=0;e<t.length;e++){let t=document.createElement("li");t.classList.add("dot"),0===e&&t.classList.add("dot-active"),o.append(t)}const l=document.querySelectorAll(".dot");let c,a=0;const n=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},s=()=>{n(t,a,"portfolio-item-active"),n(l,a,"dot-active"),a++,a>=t.length&&(a=0),r(t,a,"portfolio-item-active"),r(l,a,"dot-active")},i=(e=1500)=>{c=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,a,"portfolio-item-active"),n(l,a,"dot-active"),e.target.matches("#arrow-right")?a++:e.target.matches("#arrow-left")?a--:e.target.classList.contains("dot")&&l.forEach(((t,o)=>{e.target===t&&(a=o)})),a>=t.length&&(a=0),a<0&&(a=t.length-1),r(t,a,"portfolio-item-active"),r(l,a,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),i(2e3)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),c=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),n=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==l&&t.target!==c&&t.target!==a||(()=>{const t=+o.options[o.selectedIndex].value,r=l.value;let s=0,i=1,u=1;c.value>1&&(i+=+c.value/10),a.value&&a.value<5?u=2:a.value&&a.value<10&&(u=1.5),s=o.value&&l.value?e*t*r*i*u:0,n.textContent=s})()}))})(100)})();