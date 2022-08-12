(()=>{"use strict";function t(e){if(null==e||!1===e)return document.createTextNode("");if("string"==typeof e||"number"==typeof e||!0===e)return document.createTextNode(e);if(Array.isArray(e)){const n=document.createDocumentFragment();return e.forEach((e=>{n.appendChild(t(e))})),n}const n=document.createElement(e.tag);return n.appendChild(t(e.content)),e.cls&&[].concat(e.cls).forEach((t=>{n.classList.add(t)})),e.attrs&&Object.keys(e.attrs).forEach((t=>{n.setAttribute(t,e.attrs[t])})),n}function e(e){const n=["♠","♣","♦","♥"],c=[6,7,8,9,10,"Q","K","J","A"],r=document.querySelector(".block-with-cards");function o(t){const e=[];for(let n=0;n<3;n++)e.push(t[Math.floor(Math.random()*t.length)]);const n=[...new Set(e)];return 3===n.length?(n.pop(),n):n.length<2?void o(t):n}!function(){const a=[],s=[];!function(t,e,n){let c=0;for(let r of t)for(let t of e)c++,n[`card${c}`]={suit:r,value:t}}(o(n),function t(n){if("1"===e){for(let t=0;t<4;t++)a.push(n[Math.floor(Math.random()*n.length)]);let e=[...new Set(a)];if(4===e.length)return e.pop(),e;if(!(e.length<3))return e;t(n)}if("2"===e){for(;a.length<7;)a.push(n[Math.floor(Math.random()*n.length)]);let t=[...new Set(a)];if(6===t.length)return t;for(;t.length<6;)t.push(n[Math.floor(Math.random()*n.length)]),t=[...new Set(t)];return t}return n}(c),s);const d=Object.values(s).sort((()=>Math.random()-.5));r.appendChild(t(d.map((t=>{return{tag:"div",cls:"card",content:[{tag:"img",cls:["card-shirt"],attrs:{src:"./static/card_face_down.png"}},{tag:"div",cls:["card-face-hidden"],content:[{tag:"div",cls:"card-face-value",content:`${(e=t).value}`},{tag:"div",cls:"card-face-suit",content:`${e.suit}`},{tag:"p",cls:"card-face-centered-suit",content:`${e.suit}`},{tag:"div",cls:["card-face-value","upside-down-value"],content:`${e.value}`},{tag:"div",cls:["card-face-suit","upside-down-suit"],content:`${e.suit}`}]}]};var e}))))}(),function t(e){for(;e;)"♦"!==e.textContent&&"♥"!==e.textContent||(e.style.color="red"),t(e.firstElementChild),e=e.nextElementSibling}(r)}function n(){document.body.firstElementChild.remove(),e(localStorage.getItem("level"));const t=document.querySelectorAll(".card-shirt"),n=document.querySelectorAll(".card-face-hidden");setTimeout((()=>{for(let e of t)e.classList.remove("card-shirt"),e.classList.add("card-shirt-hidden");for(let t of n)t.classList.remove("card-face-hidden"),t.classList.add("card-face")}),1e3),setTimeout((()=>{for(let e of t)e.classList.remove("card-shirt-hidden"),e.classList.add("card-shirt");for(let t of n)t.classList.remove("card-face"),t.classList.add("card-face-hidden");!function(){const t=document.querySelector(".timer-minutes"),e=document.querySelector(".timer-seconds");let n=+t.textContent,c=0;setInterval((function(){c++,e.textContent=c,c>59&&(n++,t.textContent=n,e.textContent=0,c=0)}),1e3)}()}),5e3);const c=document.querySelector(".game-timer-button-hidden");c.classList.remove("game-timer-button-hidden"),c.classList.add("game-timer-button"),document.querySelector(".block-with-cards").addEventListener("click",(function t(e){const n=e.target;if(n.classList.contains("card-shirt")){const t=n.nextElementSibling.closest(".card-face-hidden");n.classList.remove("card-shirt"),n.classList.add("card-shirt-hidden"),t.classList.remove("card-face-hidden"),t.classList.add("card-face"),t.classList.add("clicked")}n.classList.contains("card-face")&&document.querySelector(".card-face").removeEventListener("click",t);const c=document.querySelectorAll(".clicked");for(let t=0;t<c.length;t++)if(!(c.length<2)){if(c[t].firstElementChild.textContent===c[t+1].firstElementChild.textContent){alert("Поздравляем! Вы выиграли!");break}alert("Вы проиграли!");break}}))}const c=document.querySelector(".buttons-difficulty"),r=document.querySelector(".button-start");document.addEventListener("DOMContentLoaded",(function(){c.addEventListener("click",(function(t){localStorage.setItem("level",`${t.target.textContent}`)})),r.addEventListener("click",n)}))})();