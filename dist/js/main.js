(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),c=e=>e>=0&&e<10?`0${e}`:e,o=o=>{let r=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3,n=Math.floor(t/60/60),l=Math.floor(t/60%60),c=Math.floor(t%60);return{timeRemaining:t,hours:n<0?0:n,minutes:l<0?0:l,seconds:c<0?0:c}})();t.textContent=c(r.hours),n.textContent=c(r.minutes),l.textContent=c(r.seconds),r.timeRemaining<1&&clearInterval(o)};o(setInterval(o,1e3))})("08 march 2022 22:16"),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),l.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),l=document.querySelector(".popup-content"),c=document.documentElement.clientWidth;let o,r=-50;const u=()=>{r++,o=requestAnimationFrame(u),r<11?(l.style.top=r+"%",e.style.display="block"):cancelAnimationFrame(o)},a=()=>{r--,o=requestAnimationFrame(a),r>-50?l.style.top=r+"%":(cancelAnimationFrame(o),e.style.display="none")};t.forEach((t=>{t.addEventListener("click",(()=>{c<768?e.style.display="block":c>768?u():a()}))})),n.addEventListener("click",(()=>{a()}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),l=document.querySelectorAll("form input[type=text]"),c=document.querySelectorAll("form input[type=email]"),o=document.querySelectorAll("form input[type=tel]");console.log(e.value),e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")})),t.addEventListener("input",(()=>{t.value=t.value.replace(/\D/g,"")})),n.addEventListener("input",(()=>{n.value=n.value.replace(/\D/g,"")}));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>{l[e].value=l[e].value.replace(/[^а-яА-ЯЁё\-\s]/g,"")}));for(let e=0;e<c.length;e++)c[e].addEventListener("input",(()=>{c[e].value=c[e].value.replace(/[^a-zA-Z0-9@_.!~*'\-]/g,"")}));for(let e=0;e<o.length;e++)o[e].addEventListener("input",(()=>{o[e].value=o[e].value.replace(/[^0-9()\-]/,"")}))})()})();