var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("7Y9D8");const l=document.querySelector('[type="submit"]'),r=document.querySelector('[name="amount"]'),i=document.querySelector('[name="step"]'),u=document.querySelector('[name="delay"]');function d(e,o){return new Promise(((n,t)=>{Math.random()>.3?n(console.log({position:e,delay:o})):t(console.log({position:e,delay:o}))}))}l.addEventListener("click",(function(e){e.preventDefault();const o=r.value,n=Number(u.value),t=Number(i.value),l=[];for(let e=0;e<o;e+=1)l.push(e);console.log(l);l.map(((e,o)=>(d(o,0===o?n:t),e)))})),d(2,1500).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}));
//# sourceMappingURL=03-promises.e77c9064.js.map
