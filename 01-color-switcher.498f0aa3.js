const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function e(a){o=setInterval((()=>{n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),500),e&&(t.disabled=!0)})),e.addEventListener("click",(function e(n){clearInterval(o),e&&(t.disabled=!1)}));let o=null;
//# sourceMappingURL=01-color-switcher.498f0aa3.js.map