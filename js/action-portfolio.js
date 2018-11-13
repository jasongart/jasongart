var portfolioImg = document.getElementsByClassName("portfolioImg");
portfolioImg.addEventListener("hover", projectDetails);

// var scrollNext = document.getElementById("scrollNext");




  function projectDetails() {
      for (i=0; i<portfolioImg.length; i++){
      portfolioImg[i].classList.toggle("moveIn");
      }

    };

// function scrollToNext(){
//   document.querySelector('.bio').scrollIntoView({
//     behavior: 'smooth'
//   });
