import{S as a,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const u=document.querySelector(".gallery"),d=t=>`
        <li class="gallery-item">
        <a class="gallery-link" href=${t.largeImageURL}>
            <img
            class="gallery-image"
            src="${t.previewURL}"
            alt="${t.tags}"
            title="Likes 
 ${t.likes} Views 
 ${t.views} Comments 
 ${t.comments} Downloads 
 ${t.downloads}"
            />
        </a>
        </li>
        `;function f(t){const e=t.map(n=>d(n)).join("");u.innerHTML=e,new a(".gallery a",{captionsData:"title",captionDelay:250})}function m(t){const e={baseUrl:"https://pixabay.com/api/",apiKey:"50902999-34d3d718e1412684e61a556a9",query:t,imageType:"photo",orientation:"hohorizontal",safesearch:!0},n=new URL(e.baseUrl);return n.search=new URLSearchParams({key:e.apiKey,q:e.query,imageType:e.imageType,orientation:e.orientation,safesearch:e.safesearch}).toString(),n}const s={formEl:document.querySelector(".form"),formInputEl:document.querySelector(".form-input-key-word"),formBtnEl:document.querySelector(".search-btn"),galleryListEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")};function y(t){t.preventDefault();const e=t.target.elements.keyword.value;if(console.log(e),e===""){c.warning({title:"Caution",message:"No keyword to start search",position:"topRight"});return}s.loaderEl.classList.remove("hidden");const n=m(e);fetch(n).then(l=>l.json()).then(l=>{console.log(l),s.loaderEl.classList.add("hidden"),f(l.hits.slice(0,9))}).catch(l=>{console.log(l)}),s.formEl.reset()}s.formEl.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
