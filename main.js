(()=>{"use strict";var e={192:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'*{box-sizing:border-box;margin:0}body{font-family:"Franklin Gothic Medium","Arial Narrow",Arial,sans-serif}nav .nav-trigger{position:absolute;width:60px;height:30px;border:5px solid salmon;background-color:#8b4513;cursor:pointer;top:30px;left:-10px;border-radius:10px}nav .nav-trigger.animate{animation:blink 600ms 1 cubic-bezier(0, 0.61, 1, 0.13)}nav ul{z-index:9999;padding:50px 0;width:0;height:0;position:absolute;top:0;bottom:0;right:0;left:0;background-color:violet;line-height:50px;background:#864af2;background:radial-gradient(farthest-corner at 40px 40px, #07a0c3 0%, #07a0c3 50%, #0ad3ff 50%, #0ad3ff 55%, rgba(255, 255, 255, 0) 55%, rgba(21, 209, 255, 0) 100%)}nav ul li{padding-left:50px;list-style-type:none;font-size:1.5rem;padding-top:20px;opacity:0}nav ul li.ani-top-down{transform:translateY(-15px);opacity:1}nav ul li a{text-decoration:none;color:#fff}nav ul.menu-open{animation:open-menu 1s 1 ease-in-out}.overlay{position:absolute;top:0;bottom:0;right:0;left:0;z-index:100;background-color:rgba(255,255,255,.5);pointer-events:none;opacity:0;transition:opacity 500ms ease-out}.overlay.active{opacity:1}.btn-menu-close{width:50px;height:50px;border-radius:50%;display:flex;justify-content:center;align-items:center;background-color:#111d4a;color:#fff;position:absolute;bottom:0;left:50%;right:50%;cursor:pointer;opacity:0;z-index:99999}.btn-menu-close.active{opacity:1;bottom:40px}@keyframes open-menu{from{height:0;width:0}to{height:100%;width:100%}}@keyframes blink{0%{transform:scale(1)}50%{transform:scale(0.8)}100%{transform:scale(1)}}@keyframes menupoints{from{transform:translateY(-15px)}to{opacity:1;transform:translateY(0px)}}',""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:d,updater:o(f,r),references:1}),i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),i=n.n(a),s=n(565),c=n.n(s),l=n(216),u=n.n(l),d=n(589),p=n.n(d),f=n(192),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=document.querySelector(".btn-menu-close");let h=1;const y=document.querySelectorAll(".nav-menu > li"),b=document.querySelector(".overlay"),g=document.querySelector(".nav-trigger"),x=document.querySelector(".nav-menu");g.addEventListener("click",(()=>{g.classList.add("animate"),x.style.opacity="1",x.classList.add("menu-open"),x.style.width="100%",x.style.height="100%",y.forEach((e=>{setTimeout((()=>{!function(e){e.classList.add("ani-top-down"),e.style.transition="all 1.5s ease-in-out"}(e)}),300*h),h++})),b.classList.add("active"),v.classList.add("active"),v.style.transition="all 500ms ease-in-out"})),v.addEventListener("click",(()=>{b.classList.remove("active"),v.classList.remove("active"),g.classList.remove("animate"),y.forEach((e=>{e.classList.remove("ani-top-down")})),x.classList.remove("menu-open"),x.style.opacity="0",x.style.width="0px",x.style.height="0px",h=1}))})()})();