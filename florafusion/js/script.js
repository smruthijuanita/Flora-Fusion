(function($) {

    "use strict";

    // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

    var initScrollNav = function() {
    	var scroll = $(window).scrollTop();

        if (scroll >= 200) {
          $('#header-wrap').addClass("bg-white");
        }else{
          $('#header-wrap').removeClass("bg-white");
        }
	}
	
	// init jarallax parallax
	var initJarallax = function() {
	    jarallax(document.querySelectorAll(".jarallax"));

	    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
	      keepImg: true,
	    });
	}



	$(window).scroll(function() {    
	    initScrollNav();
	}); 

    $(document).ready(function() {
		

			// product single page
			var thumb_slider = new Swiper(".product-thumbnail-slider", {
				slidesPerView: 3,
				autoplay: true,
				direction: "vertical",
				spaceBetween: 30,

				pagination: {
				  el: ".swiper-pagination",
				  clickable: true,
				},
			});
	
			var large_slider = new Swiper(".product-large-slider", {
				slidesPerView: 1,
				autoplay: true,
				effect: 'fade',
				thumbs: {
				  swiper: thumb_slider,
				},
			});
	
    	initChocolat();
    	initScrollNav();
    	initJarallax();
    }); // End of a document

})(jQuery);