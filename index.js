 var iconMenu = document.querySelector(".icon-menu");
 var body = document.querySelector("body");
 var menuBody = document.querySelector(".menu__body");
 iconMenu.addEventListener('click', function(){
   iconMenu.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   body.classList.toggle('lock');
 })