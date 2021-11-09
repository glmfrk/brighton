
$(document).ready(function(){

  //=============================
    // Sticky Start
    //=============================

    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".fixed-menu").removeClass("sticky");
        } else {
            $(".fixed-menu").addClass("sticky");
        }
    });
        //=============================
    // MOBILE Nav
    //=============================

    $(".navbar-toggler").on("click", function () {
        $(".main-nav").slideToggle(500);
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                autoplay:true
            },
            600:{
                items:2,
                nav:false,
                autoplay:true
            },
            800:{
                items:3,
                nav:false,
                autoplay:true
            },
            1000:{
                items:5,
                nav:false,
                loop:true,
                autoplay:true
            }
        }
    })

    $(".search-icon-bar a").click(function(){
        $(".search-popup").toggle(500);
      });

  });
 