var menuButton = document.getElementById("hamburgerIcon");
var mobileMenu = document.getElementById("mobileMenu");
var mobileNav = document.getElementById("mobileNav");
var mmChoice = document.getElementsByClassName("mmChoice");
var menuVisible = mobileMenu.style.opacity;
// var scrollNext = document.getElementById("scrollNext");

menuButton.addEventListener("click", showMobileMenu);
// scrollNext.addEventListener("click", scrollToNext);

function showMobileMenu() {
    menuButton.classList.toggle("change");
    mobileMenu.classList.toggle("reveal");
    mobileNav.classList.toggle("moveIn");
    for (i=0; i<mmChoice.length; i++){
    mmChoice[i].classList.toggle("moveIn");
    }
    // mmChoice[0].classList.toggle("moveIn");
    // mmChoice[1].classList.toggle("moveIn");
    // mmChoice[2].classList.toggle("moveIn");
    console.log(mobileMenu.style.opacity);
  };

// function scrollToNext(){
//   document.querySelector('.bio').scrollIntoView({
//     behavior: 'smooth'
//   });
