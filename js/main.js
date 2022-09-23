const elLoader = document.querySelector(".lds-hourglass-wrapper");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function (){
    elLoader.classList.add("lds-hourglass-wrapper--none")
  }, 800);
});