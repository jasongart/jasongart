var menuButton = document.getElementById("hamburgerIcon");
var mobileMenu = document.getElementById("mobileMenu");
var mobileNav = document.getElementById("mobileNav");
var mmChoice = document.getElementsByClassName("mmChoice");
var menuVisible = false;
// var scrollNext = document.getElementById("scrollNext");

menuButton.addEventListener("click", showMobileMenu);
window.addEventListener("scroll", hideMobileMenu);
// scrollNext.addEventListener("click", scrollToNext);

function showMobileMenu() {
    menuButton.classList.toggle("change");
    mobileMenu.classList.toggle("reveal");
    mobileNav.classList.toggle("moveIn");
    for (i=0; i<mmChoice.length; i++){
    mmChoice[i].classList.toggle("moveIn");
    }
    menuVisible = true;
    // mmChoice[0].classList.toggle("moveIn");
    // mmChoice[1].classList.toggle("moveIn");
    // mmChoice[2].classList.toggle("moveIn");
  };

  function hideMobileMenu(){
    if (menuVisible=true){
      menuButton.classList.remove("change");
      mobileMenu.classList.remove("reveal");
      mobileNav.classList.remove("moveIn");
      for (i=0; i<mmChoice.length; i++){
      mmChoice[i].classList.remove("moveIn");
      }
      menuVisible = false;
    }
  }
