(()=>{"use strict";function t(e){if(null==e||!1===e)return document.createTextNode("");if("string"==typeof e||"number"==typeof e||!0===e)return document.createTextNode(String(e));if(Array.isArray(e)){const n=document.createDocumentFragment();return e.forEach((e=>{n.appendChild(t(e))})),n}const n=document.createElement(e.tag);return n.appendChild(t(e.content)),e.cls&&[].concat(e.cls).forEach((t=>{n.classList.add(t)})),e.attrs&&Object.keys(e.attrs).forEach((t=>{n.setAttribute(t,e.attrs[t])})),n}function e(e){const n=["♠","♣","♦","♥"],c=[6,7,8,9,10,"Q","K","J","A"];let l=document.querySelector(".block-with-cards-main");function o(t){const e=[];for(let n=0;n<3;n++)e.push(t[Math.floor(Math.random()*t.length)]);const n=[...new Set(e)];return 3===n.length?(n.pop(),n):n.length<2?o(t):n}null!==l&&l.classList.contains("block-with-cards")&&(l=document.querySelector(".block-with-cards")),null!==l&&(l.classList.contains("block-with-cards-hidden")&&(l=document.querySelector(".block-with-cards-hidden")),null!==l&&(l.innerHTML="",l.classList.remove("block-with-cards-hidden"),l.classList.add("block-with-cards"))),function(){const s=[];let r=[];!function(t,e,n){for(const c of t)for(const t of e)n.push({suit:c,value:t})}(o(n),function t(n){if("1"===e){for(let t=0;t<4;t++)s.push(n[Math.floor(Math.random()*n.length)]);const e=[...new Set(s)];return 4===e.length?(e.pop(),e):e.length<3?t(n):e}if("2"===e){for(;s.length<7;)s.push(n[Math.floor(Math.random()*n.length)]);let t=[...new Set(s)];if(6===t.length)return t;for(;t.length<6;)t.push(n[Math.floor(Math.random()*n.length)]),t=[...new Set(t)];return t}return n}(c),r),r=r.sort((()=>Math.random()-.5)),null!==l&&l.appendChild(t(r.map((t=>{return{tag:"div",cls:"card",content:[{tag:"img",cls:["card-shirt"],attrs:{src:"./static/card_face_down.png"}},{tag:"div",cls:["card-face-hidden"],content:[{tag:"div",cls:"card-face-value",content:`${(e=t).value}`},{tag:"div",cls:"card-face-suit",content:`${e.suit}`},{tag:"p",cls:"card-face-centered-suit",content:`${e.suit}`},{tag:"div",cls:["card-face-value","upside-down-value"],content:`${e.value}`},{tag:"div",cls:["card-face-suit","upside-down-suit"],content:`${e.suit}`}]}]};var e}))))}(),null!==l&&function t(e){for(;e;)"♦"!==e.textContent&&"♥"!==e.textContent||e.setAttribute("style","color: red"),t(e.firstElementChild),e=e.nextElementSibling}(l)}const n=document.querySelector(".timer-minutes"),c=document.querySelector(".timer-seconds");let l,o,s,r,i;const a=document.querySelector(".block-choose-difficulty");s=document.querySelector(".game-timer-button-hidden");const d=document.querySelector(".block-with-cards");function u(){null!==a&&a.classList.add("block-choose-difficulty-hidden"),e(localStorage.getItem("level"));const t=document.querySelectorAll(".card-shirt"),d=document.querySelectorAll(".card-face-hidden");null!==r&&r.setAttribute("disabled","disabled"),setTimeout((()=>{for(const e of t)e.classList.remove("card-shirt"),e.classList.add("card-shirt-hidden");for(const t of d)t.classList.remove("card-face-hidden"),t.classList.add("card-face")}),1e3),setTimeout((()=>{for(const e of t)e.classList.remove("card-shirt-hidden"),e.classList.add("card-shirt");for(const t of d)t.classList.remove("card-face"),t.classList.add("card-face-hidden");null!==r&&r.removeAttribute("disabled"),function(){if(!(n instanceof HTMLElement))return;let t;null!==n&&(t=Number(n.textContent));let e=0;l=setInterval((function(){e++,null!==c&&(c.textContent=String(e)),e>59&&(null!==t&&t++,null!==n&&(n.textContent=String(t)),null!==c&&(c.textContent=String(0),e=0))}),1e3)}()}),5e3),null!==s&&(s.classList.remove("game-timer-button-hidden"),s.classList.add("game-timer-button")),function(){const t=document.querySelector(".block-with-cards"),e=[];null!==t&&t.addEventListener("click",(function a(d){const u=d.target;if(!(u instanceof HTMLElement))return;if(u.classList.contains("card-shirt")){const t=u.nextElementSibling.closest(".card-face-hidden");if(u.classList.remove("card-shirt"),u.classList.add("card-shirt-hidden"),null!==t){t.classList.remove("card-face-hidden"),t.classList.add("card-face"),t.classList.add("clicked");let n="";n=t.firstElementChild.textContent,null!==n&&e.push(n)}if(u.classList.contains("card-face")){const t=document.querySelector(".card-face");null!==t&&t.removeEventListener("click",a)}}let f=!0;const m=document.querySelectorAll(".card");function h(e,d){null!==t&&t.removeEventListener("click",a),null!==r&&r.setAttribute("disabled","true"),o=document.querySelector(".block-final-screen"),null!==o&&(o.classList.remove("block-final-screen-hidden"),o.firstElementChild.setAttribute("src",`${e}`));const u=document.querySelector(".block-final-screen__heading");null!==u&&(u.textContent=d),null!==s&&(s.style.opacity="0.7"),null!==t&&t.setAttribute("opacity","0.7"),clearInterval(l);const f=document.querySelector(".block-final-screen__time-content");null!==f&&null!==n&&null!==c&&(f.textContent=`${n.textContent}.${c.textContent}`);const m=document.querySelector(".block-final-screen_button");null!==m&&m.addEventListener("click",(()=>i()))}let b=0;!function t(e){e.length<2||!e||!e[b+1]||(e[b]===e[b+1]?(function(){let t;for(t of m)if(null!==t){const e=t.lastElementChild;if(null!==e&&!e.classList.contains("clicked")){f=!1;break}}}(),f?h("./static/icon_celebration.png","Вы выиграли!"):(b+=2,t(e))):h("./static/icon_dead.png","Вы проиграли!"))}(e)}))}()}r=document.querySelector(".button-start-again"),null!==r&&r.addEventListener("click",i=()=>{null!==a&&a.classList.remove("block-choose-difficulty-hidden"),null!==s&&(s.classList.add("game-timer-button-hidden"),s.classList.remove("game-timer-button")),null!==d&&(d.classList.remove("block-with-cards"),d.classList.add("block-with-cards-hidden"));const t=document.querySelector(".block-final-screen");null!==t&&(t.classList.contains("block-final-screen-hidden")||t.classList.add("block-final-screen-hidden")),null!==s&&(s.style.opacity="initial"),null!==d&&d.setAttribute("opacity","initial"),null!==n&&(n.textContent="00"),null!==c&&(c.textContent="00"),clearInterval(l)});const f=document.querySelector(".buttons-difficulty"),m=document.querySelector(".button-start"),h=document.querySelectorAll(".buttons-difficulty button");document.addEventListener("DOMContentLoaded",(function(){null!==f&&null!==m&&(f.addEventListener("click",(function(t){t.target instanceof HTMLElement&&(localStorage.setItem("level",`${t.target.textContent}`),t.target instanceof HTMLElement&&h&&function(t,e){for(let n of t)n===e?n.classList.add("clicked-button"):n.classList.remove("clicked-button")}(h,t.target))})),m.addEventListener("click",u))}))})();
//# sourceMappingURL=bundle.js.map