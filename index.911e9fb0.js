!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();var e=document.querySelectorAll("[call--modal__open]"),t=document.querySelector(".call--modal"),n=document.querySelector(".call--modal__close");e.forEach((function(e){e.addEventListener("click",(function(){t.style.display="block"}))})),n.addEventListener("click",(function(){t.style.display="none"})),document.querySelectorAll(".questions--content").forEach((function(e){var t=e.querySelector("b"),n=e.querySelector("span");t.addEventListener("click",(function(){n.classList.contains("hidden")?n.classList.remove("hidden"):n.classList.add("hidden")}))})),window.onscroll=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?document.getElementById("scroll-to-top").style.display="block":document.getElementById("scroll-to-top").style.display="none"},document.getElementById("scroll-to-top").onclick=function(){document.body.scrollTop=0,document.documentElement.scrollTop=0},document.addEventListener("scroll",(function e(){var t=document.getElementById("bike"),n=t.getBoundingClientRect(),o=Math.max(document.documentElement.clientHeight,window.innerHeight);n.top+n.height/2<o&&(t.parentElement.parentElement.classList.add("appear"),document.removeEventListener("scroll",e))})),window.addEventListener("scroll",(function(){for(var e=document.querySelectorAll(".prices-list__item"),t=window.innerHeight,n=0;n<e.length;n++){e[n].getBoundingClientRect().top<t-50&&(e[n].style.opacity=1,e[n].style.transform="translateY(0)")}}));new Swiper(".mySwiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}();
//# sourceMappingURL=index.911e9fb0.js.map
