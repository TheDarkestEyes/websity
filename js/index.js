"use strict"
//add scroll button
$("#btnUpDown").click(function(){
    $("body , html").animate({scrollTop:'0'},(1000))
})

$(window).scroll(function(){
    
    var scrlTop = $(window).scrollTop();
        
    if(scrlTop >500)
            {
                $("#btnUpDown").fadeIn(200)
            }
    else
        {
            $("#btnUpDown").fadeOut(200)
        }
})
//add laoding screen
$("body , html").css("overflow","hidden");
$(document).ready(function(){
    $("#loading-screen div").fadeOut(1000,function(){
        $(this).parent().fadeOut(500,function(){
            $("body , html").css("overflow-y","auto")
        })  
    })
    
})
//sticky nav bar
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
          $(".bg-change").css("background" , "#09c");
      }
    else{
          $(".bg-change").css("background" , "transparent");
      }
  })
//add the owl carousel
//add animation to logo

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    animateIn:'fadeIn',
    autoplayTimeout:3000,
    touchDrag:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//add the slick slider			
 $('.center').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
     responsive: [
         {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
     ]
});

//add counter
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//add wow animation
new WOW().init();