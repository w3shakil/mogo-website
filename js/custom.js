$(function(){

  // Active menu
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '.navbar',
    offset: 100,
  });

  //animation scroll js
  var html_body = $('html, body');
  $('nav a').on('click', function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              html_body.animate({
                  scrollTop: target.offset().top - 100
              }, 1500);
              return false;
          }
      }
  });

// counter up js

$('.counter').counterUp({
    delay: 10,
    time: 1000
});
//stricky menu js
$(window).scroll(function(){
   var scrolling= $(this).scrollTop();

   if(scrolling > 300){
   $('.navbar').addClass ('bg'); 
   }
   else{
    $('.navbar').removeClass ('bg'); 
   }
});

// slick slider
$('.feed-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '.left',
    nextArrow: '.right',
    fade: true,
    speed: 1500,
  });
$('.team-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
   // venobox jquerry
   $('.venobox').venobox({
    arrowsColor: 'red',
   }); 
  
  
   







})