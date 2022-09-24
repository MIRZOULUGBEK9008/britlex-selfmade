const elLoader = document.querySelector(".lds-hourglass-wrapper"),
elToggler = document.querySelector(".js-toggler"),
elSitenav = document.querySelector(".js-sitenav");

// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function (){
    elLoader.classList.add("lds-hourglass-wrapper--none")
  }, 800);
});


// TOGGLER
if (elToggler) {
  elToggler.addEventListener("click", function () {
    elToggler.classList.toggle("toggler--open");
    elSitenav.classList.toggle("site-header__sitenav--open");
  });
}