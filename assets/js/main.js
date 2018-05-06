(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        //responsive menu
        var $slickNav = $('#primary-menu');
        $slickNav.slicknav({
            prependTo: '.responsive-menu',
            label: ''
        });
        //magnific popup activation 
        $('.video-play-btn').magnificPopup({
            type: 'video'
        });
        //back to top 
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        //smoth achor effect
        $('#primary-menu li a').on('click', function (e) {
            e.preventDefault();
            var anchor = $(this).attr('href');
            var top = $(anchor).offset().top;
            $('html, body').animate({
                scrollTop: $(anchor).offset().top
            }, 1000);
            $(this).parent().addClass('active').siblings().removeClass('active');
        });
        //portfolio carousel
        var $portfolioCarousel = $('#portfolio-carousel');
        $portfolioCarousel.owlCarousel({
                loop: true,
                autoplay:true,
                autoPlayTimeout: 1000,
                margin:30,
                stagePadding:100,
                responsive: {
                    0: {
                        items: 1,
						stagePadding:10,
                    },
                    768: {
                        items: 2
                    },
                    960: {
                        items: 3
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        
    });
    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
        /*--sticky menu activation--*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){
        //preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(500);
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut(100);
    });

}(jQuery));	
