(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),m=document.getElementById("timer-seconds"),o=()=>{let e=(()=>{let e=(new Date("04 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=e.minutes,m.textContent=e.seconds,e.timeRemaining>0&&setTimeout(o,1e3)};o()})()})();