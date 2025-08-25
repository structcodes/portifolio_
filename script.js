// Menu Hamburguer
const btnMenu = document.getElementById('btnMenu');
 const navList = document.querySelector('.nav-menu');

 btnMenu.addEventListener('click', () => {
   navList.classList.toggle('active');
 })

// Efeito cortina

  window.addEventListener("load", () => {
    setTimeout(() => {
    document.querySelector(".cortina").style.display = "none";
    document.querySelector("header").style.opacity = "1";
    document.querySelector("main").style.opacity = "1";
   }, 1500); // tempo da animação
      });