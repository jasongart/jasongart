//smoothscrolling code


$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".scrollLink").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


//checking for position to reveal UX nav

var heroSec = document.querySelectorAll(".hero");


$(window).scroll(function(){
  var heroPos = $(heroSec).offset().top;
  var heroBot = heroPos + $(heroSec).outerHeight(true);
  if ($(window).scrollTop() > heroBot){
    $(".uxNav").addClass("uxNavIn");
    // console.log("scroll is below 800");
  }
  else{
    $(".uxNav").removeClass("uxNavIn");
    // console.log("scroll is above 670");
  }
});

var uxNavButton = document.querySelectorAll(".uxNavItem");
var uxNavSection = document.querySelectorAll(".section");



//checking for position to turn UX nav button orange

$(uxNavSection).each(function(index){
  var navSec = uxNavSection[index];
  var navBut = uxNavButton[index];


  $(window).scroll(function(){
    var navPos = $(navSec).offset().top;
    var secBot = navPos + $(navSec).outerHeight(true);

    if ($(this).scrollTop() > navPos && $(this).scrollTop() < secBot){
      $(navBut).css("background-color", "#ef6c00");
    }

    else {
      $(navBut).css("background-color", "initial");
    }
  });


});

// hides CTA dot after scrolling halfway down the hero

$(window).scroll(function(){
  if ($(window).scrollTop() > 350){
    $(".workDotContain").css("opacity","0");
     // console.log("scroll is above 350");
  }
  else{
    $(".workDotContain").css("opacity","1");

  }
});


var lbImg = document.querySelectorAll(".lightboxThumb");
var searchBut = document.querySelectorAll(".fa-search-plus");

$(lbImg).each(function(index){
    var lbImgHov = lbImg[index];
    var searchButRev = searchBut[index];

    $(this).mouseenter(function(){
        $(searchButRev).css("opacity", "1" );
    // console.log("testing mag enter " + " " + index);
    });

    $(this).mouseleave(function(){
        $(searchButRev).css("opacity", "0" );
        // console.log("testing mag leave " + " " + index);
    });
});
