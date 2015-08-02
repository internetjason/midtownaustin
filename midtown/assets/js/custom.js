/**
    * @package Stability Responsive HTML5 Template
    *
    * Template Scripts
    * Created by Dan Fisher

    Init JS

    1. Main Navigation
    2. Isotope
    3. Magnific Popup
    4. Flickr
    5. Carousel (based on owl carousel plugin)
    6. Content Slider (based on owl carousel plugin)
    7. FitVid (responsive video)
    8. Sticky Header
    9. Shape Boxes
    10. SelfHosted Audio & Video
    11. Parallax Background
    12. Circle Counter
    13. Header Transparent
    14. Personal Email Checker
*/

;(function($){
  "use strict";


  /* ----------------------------------------------------------- */
  /*  1. Main Navigation
  /* ----------------------------------------------------------- */


  // Menu drop down effect
  $('.dropdown-toggle').dropdownHover().dropdown();
  $(document).on('click', '.fhmm .dropdown-menu', function(e) {
      e.stopPropagation()
  });

  $('.navbar-toggle').on('click', function () {
    $('.navbar-collapse').collapse('toggle');
  });




  /* ----------------------------------------------------------- */
  /*  5. Carousel (based on owl carousel plugin)
  /* ----------------------------------------------------------- */
  var owl = $("#owl-carousel");

  owl.owlCarousel({
      items : 4, //4 items above 1000px browser width
      itemsDesktop : [1000,4], //4 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // 4 items betweem 900px and 601px
      itemsTablet: [600,2], //2 items between 600 and 0;
      itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
      pagination : false,
      scrollPerPage: false
  });

  // Custom Navigation Events
  $("#carousel-next").click(function(){
      owl.trigger('owl.next');
  });
  $("#carousel-prev").click(function(){
      owl.trigger('owl.prev');
  });


  // carousel with 3 elements
  (function($) {
      var owl = $(".owl-carousel-3");

      owl.owlCarousel({
          items : 3, //3 items above 1000px browser width
          itemsDesktop : [1000,2], //4 items between 1000px and 901px
          itemsDesktopSmall : [900,2], // 4 items betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0;
          itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
          pagination : false
      });

      // Custom Navigation Events
      $("#carousel-next-alt").click(function(){
          owl.trigger('owl.next');
      });
      $("#carousel-prev-alt").click(function(){
          owl.trigger('owl.prev');
  });
  })(jQuery);



  /* ----------------------------------------------------------- */
  /*  6. Content Slider (based on owl carousel plugin)
  /* ----------------------------------------------------------- */
  $(".owl-slider").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
      pagination: true,
      autoPlay : false

  });



  /* ----------------------------------------------------------- */
  /*  7. FitVid (responsive video)
  /* ----------------------------------------------------------- */
//  $(".video-holder, .audio-holder").fitVids();


  /* ----------------------------------------------------------- */
  /*  -- Misc
  /* ----------------------------------------------------------- */

  $('.title-accent > h3').each(function(){
      var me = $(this);
      me.html(me.html().replace(/^(\w+)/, '<span>$1</span>'));
  });

  // Back to Top
  $("#back-top").hide();

  if($(window).width() > 991) {
      $('body').append('<div id="back-top"><a href="#top"><i class="fa fa-chevron-up"></i></a></div>')
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
          }
      });

      // scroll body to 0px on click
      $('#back-top a').click(function(e) {
          e.preventDefault();
          $('body,html').animate({
              scrollTop: 0
          }, 400);
          return false;
      });
  };

  // Animation on scroll
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (isMobile == false) {

      $("[data-animation]").each(function() {

      var $this = $(this);

      $this.addClass("animation");

      if(!$("html").hasClass("no-csstransitions") && $(window).width() > 767) {

          $this.appear(function() {

              var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

              if(delay > 1) $this.css("animation-delay", delay + "ms");
              $this.addClass($this.attr("data-animation"));

              setTimeout(function() {
                  $this.addClass("animation-visible");
              }, delay);

          }, {accX: 0, accY: -170});

      } else {

          $this.addClass("animation-visible");

      }

  });
  }


  /* ----------------------------------------------------------- */
  /*  8. Sticky Header
  /* ----------------------------------------------------------- */

  // Set options
  var headerSticky = $('header.header');
  // Check for sticky header
  if ( headerSticky.hasClass('header-default') || headerSticky.hasClass('header-transparent') || headerSticky.hasClass('menu-colored') || headerSticky.hasClass('menu-pills') ) {
    var options = {

      offset: 400, // OR — offset: '.classToActivateAt',

      // Callbacks
      onInit: function() {
        // Menu drop down effect
        $('.dropdown-toggle').dropdownHover().dropdown();
        $(document).on('click', '.fhmm .dropdown-menu', function(e) {
            e.stopPropagation()
        });
      },

      throttle: 200,

      onStick: function() {},
      onUnstick: function() {},
      onDestroy: function() {},

    };
    // Create a new instance of Headhesive
    var headhesive = new Headhesive('header.header', options);
  }



  /* ----------------------------------------------------------- */
  /*  9. Shape Boxes
  /* ----------------------------------------------------------- */
//  function init() {
//    var speed = 250,
//        easing = mina.easeinout;
//
//    [].slice.call ( document.querySelectorAll( '.shape-item' ) ).forEach( function( el ) {
//        var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
//            pathConfig = {
//                from : path.attr( 'd' ),
//                to : el.getAttribute( 'data-path-hover' )
//            };
//
//        el.addEventListener( 'mouseenter', function() {
//            path.animate( { 'path' : pathConfig.to }, speed, easing );
//        } );
//
//        el.addEventListener( 'mouseleave', function() {
//            path.animate( { 'path' : pathConfig.from }, speed, easing );
//        } );
//    } );
//  }
//  init();



  /* ----------------------------------------------------------- */
  /*  10. SelfHosted Audio & Video
  /* ----------------------------------------------------------- */
//  $('audio,video').mediaelementplayer({
//      videoWidth: '100%',
//      videoHeight: '100%',
//      audioWidth: '100%',
//      features: ['playpause','progress','tracks','volume'],
//      videoVolume: 'horizontal'
//  });



  /* ----------------------------------------------------------- */
  /*  11. Parallax Background
  /* ----------------------------------------------------------- */
//  if($(".parallax-bg").get(0) && $(window).width() > 991) {
//      if(!Modernizr.touch) {
//          $(window).stellar({
//              responsive:true,
//              scrollProperty: 'scroll',
//              parallaxElements: false,
//              horizontalScrolling: false,
//              horizontalOffset: 0,
//              verticalOffset: 0
//          });
//      } else {
//          $(".parallax-bg").addClass("disabled");
//      }
//  }


  /* ----------------------------------------------------------- */
  /*  12. Circle Counter
  /* ----------------------------------------------------------- */

  $(".circled-counter").each(function() {
    var $this = $(this);
    $this.appear(function() {
      $this.circliful();
    }, {accX: 0, accY: 100});
  });



  /* ----------------------------------------------------------- */
  /*  13. Header Transparent
  /* ----------------------------------------------------------- */
//  if($('.header').hasClass('header-transparent') || $('.header').hasClass('header-fixed')) {
//    $(window).scroll(function() {
//      var scroll = $(window).scrollTop();
//
//      if (scroll >= 400) {
//          $(".header:not(.headhesive)").addClass("hidden");
//      } else {
//          $(".header:not(.headhesive)").removeClass("hidden");
//      }
//    });
    //  };

  /* ----------------------------------------------------------- */
  /*  14. Personal Email Checker
  /* ----------------------------------------------------------- */
    $('#free-quote-form #email').blur(function() {
	champNet.verifyPersonalEmail($(this).val());
    });
})(jQuery);
