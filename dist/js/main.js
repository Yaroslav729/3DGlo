(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),l=e=>e>=0&&e<10?`0${e}`:e,a=a=>{let o=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t/60/60),c=Math.floor(t/60%60),l=Math.floor(t%60);return{timeRemaining:t,hours:n<0?0:n,minutes:c<0?0:c,seconds:l<0?0:l}})();t.textContent=l(o.hours),n.textContent=l(o.minutes),c.textContent=l(o.seconds),o.timeRemaining<1&&clearInterval(a)};a(setInterval(a,1e3))})("15 march 2022 22:16"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",n),t.addEventListener("click",(e=>{e.target.matches("menu")||n()}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content"),c=window.matchMedia("(max-width:768px)");let l,a=-50;const o=()=>{a++,l=requestAnimationFrame(o),a<11?(n.style.top=a+"%",e.style.display="block"):cancelAnimationFrame(l)},r=()=>{a--,l=requestAnimationFrame(r),a>-50?n.style.top=a+"%":(cancelAnimationFrame(l),e.style.display="none")};t.forEach((t=>{t.addEventListener("click",(()=>{c.matches?(n.style.top="10%",e.style.display="block"):c.matches?r():o()}))})),e.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||r()}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),c=document.querySelectorAll("form input[type=text]"),l=document.querySelectorAll("form input[type=email]"),a=document.querySelectorAll("form input[type=tel]");console.log(e.value),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/\D/g,"")}));for(let e=0;e<c.length;e++)c[e].addEventListener("input",(()=>{c[e].value=c[e].value.replace(/[^а-яА-ЯЁё\-\s]/g,"")}));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>{l[e].value=l[e].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g,"")}));for(let e=0;e<a.length;e++)a[e].addEventListener("input",(()=>{a[e].value=a[e].value.replace(/[^0-9()\-]/,"")}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})()})();