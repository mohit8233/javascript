const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");
const icon = document.querySelector(".bar-icon");

hamburger.addEventListener("click", ()=>{
 icon.classList.toggle("fa-bars");
 hamburger.classList.toggle("fa-xmark");
  list.classList.toggle("navlist-active");
   
})