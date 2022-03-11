(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),n=document.getElementById("timer-seconds"),c=e=>e>=0&&e<10?`0${e}`:e,l=l=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t/60/60),n=Math.floor(t/60%60),c=Math.floor(t%60);return{timeRemaining:t,hours:o<0?0:o,minutes:n<0?0:n,seconds:c<0?0:c}})();t.textContent=c(r.hours),o.textContent=c(r.minutes),n.textContent=c(r.seconds),r.timeRemaining<1&&clearInterval(l)};l(setInterval(l,1e3))})("15 march 2022 22:16"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{(e.target.closest("ul>li>a")||e.target.closest(".close-btn"))&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),o=document.querySelector(".popup-content"),n=window.matchMedia("(max-width:768px)");let c,l=-50;const r=()=>{l++,c=requestAnimationFrame(r),l<11?(o.style.top=l+"%",e.style.display="block"):cancelAnimationFrame(c)},a=()=>{l--,c=requestAnimationFrame(a),l>-50?o.style.top=l+"%":(cancelAnimationFrame(c),e.style.display="none")};t.forEach((t=>{t.addEventListener("click",(()=>{n.matches?(o.style.top="10%",e.style.display="block"):n.matches?a():r()}))})),e.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||a()}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),n=document.querySelectorAll("form input[type=text]"),c=document.querySelectorAll("form input[type=email]"),l=document.querySelectorAll("form input[type=tel]");console.log(e.value),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")})),o.addEventListener("input",(()=>{o.value=o.value.replace(/\D/g,"")}));for(let e=0;e<n.length;e++)n[e].addEventListener("input",(()=>{n[e].value=n[e].value.replace(/[^а-яА-ЯЁё\-\s]/g,"")}));for(let e=0;e<c.length;e++)c[e].addEventListener("input",(()=>{c[e].value=c[e].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g,"")}));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>{l[e].value=l[e].value.replace(/[^0-9()\-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let n,c=0;const l=(e,t,o)=>{e[t].classList.remove(o)},r=(e,t,o)=>{e[t].classList.add(o)},a=()=>{l(t,c,"portfolio-item-active"),l(o,c,"dot-active"),c++,c>=t.length&&(c=0),r(t,c,"portfolio-item-active"),r(o,c,"dot-active")},s=(e=1500)=>{n=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(l(t,c,"portfolio-item-active"),l(o,c,"dot-active"),e.target.matches("#arrow-right")?c++:e.target.matches("#arrow-left")?c--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(c=o)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),r(t,c,"portfolio-item-active"),r(o,c,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(n)}),!0),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&s(2e3)}),!0),s(2e3)})()})();