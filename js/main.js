
/*
 * venum Theme js code
 */
(function ($) {
  "use strict";
	var $mainwindow=$(window);
     $mainwindow.on('load', function () {
	
$("#loader").fadeOut(1000);
	});
/*-------------------- SCROLL NAVIGATION ---------------------*/
	var	nav = $('ul.navbar-nav');	
	nav.find('a').on('click', function () {
	  	var $el = $(this);
	    var	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top -80
		}, 500);
	  return false;
	});
/*---------------------- coment-blog  ---------------------*/
// bootstrap tool tip initialization

		$('[data-toggle="tooltip"]').tooltip();
	if($(".reply").length>0){
		$(".reply").on('click',function(e){
			e.preventDefault();
			$("#comment-form").insertAfter($(this));
		});
	}	
/*-----------------	HEADER-TOP-SCROLL ----------------------*/
	$mainwindow.on('scroll', function() {
		var scroll = $mainwindow.scrollTop();

		if (scroll >= 50) {
			$('.logo-gym , .cons-logo , .corp-logo , .type-5 , .type-2 , .type-3 , .text-logo').addClass('fixed fixed-cons fixed-corp scroll-fixed cons corp text-fixed');
		} else {
			$('.logo-gym , .cons-logo , .corp-logo , .type-5, .type-2 , .type-3 , .text-logo').removeClass('fixed fixed-cons fixed-corp scroll-fixed cons corp text-fixed');
		}
	});	
/*------------------- Scroll-Down ------------------------*/

 // Add smooth scrolling to all links
  $(".mouse-container a").on('click', function(event) {

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
	
/*-----------------------------Main-Slider -------------------------*/
var $carousel_slider = $('#carousel-slider');
if ($carousel_slider.length > 0) {
$('#carousel-slider').carousel();
  $("#carousel-slider").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#carousel-slider").swipeleft(function() {
      $(this).carousel('next');
   });
  }


  $('.gallery-btn').on('click', function (event) {
    $(".gallery-btn").removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
/*------------------------------Counter-----------------------------*/
if($('#counter').length>0){
var a = 0;
$mainwindow.scroll(function() {
	
	  var oTop = $('#counter').offset().top - window.innerHeight;
	  if (a === 0 && $mainwindow.scrollTop() > oTop) {
		$('.count-number').each(function() {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			  countNum: countTo
			},
	
			{
	
			  duration: 3000,
			  easing: 'swing',
			  step: function() {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function() {
				$this.text(this.countNum);
				//alert('finished');
			  }
	
			});
		});
		a = 1;
	  }
	
});}
// scroll counter code ends
/*------------------------------carousel-----------------------------*/
    $(".team-slider").owlCarousel({
        items:4,
       loop:true,
       dots:false,
       nav:true,
        slideSpeed:1000,
        autoPlay:true,
        responsive: {
          0: {
              items: 1,
              nav: false,
              dots: true
          },
          600: {
              items: 2
          },
          992: {
              items: 3
          },
          1200: {
              items: 4
          }
      }
    });
	
 /*------- Gallery Masonry ------*/
    var $grid = $('.port-grid').isotope({
      itemSelector: '.grid-port',
      percentPosition: true,
      masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.grid-port'
      }
  });
  $('.fiter-gallary').on('click', '.gallery-btn', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
  });

 
/*----------------- Team-Slider two -----------------*/
$(function() {
  var owl_testi = $(".team-slides");
  owl_testi.owlCarousel({
    loop: true,
    dots:true,
    autoplay: true,
    responsiveClass: true,
    margin:30,
    nav:false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
});
/*------- Testimonial-Slider 2 ---------*/
 $(".testimonial-slider2").owlCarousel({
  margin: 0,
  loop: true,
  items:1,
  dots: false,
  autoplay: true,
  nav: true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   responsive: {
          0: {
              items: 1,
              nav: false,
              dots: true
          },
         
          768: {
                nav: true,
              dots: true
          },
          1200: {
          }
        }

    });
/*--------------------- Scrool Up ----------------*/ 	
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".type-4 li, .up-angle a[href='#home']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


/*------------ wow js code ---------------*/ 
 new WOW().init({
			mobile: true,
		});
				
})(jQuery);
/*------------------ Google-Map --------------------*/
	var iconmap=document.querySelectorAll('#map');
	var img_src=$("#map").attr('data-icon');
	
	 for (var i in iconmap) if (iconmap.hasOwnProperty(i)) {
	
		 function initMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 10,
		center: {
			lat: 40.7819502,
			lng: -74.7357194
		}
	});
	var map_icon = img_src;
	var marker = new google.maps.Marker({
		position: map.getCenter(),
		icon: map_icon,
		map: map
	});
	 }}