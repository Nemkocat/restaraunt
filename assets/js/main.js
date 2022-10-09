/* PARALLAX */

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);


(function ($)
  { "use strict"
  
/* 1. Preloder  */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    // Tabs

    $('.nav-item').on('click', function () {
      let currTab = $(this).index();

      $('.nav-item').removeClass('active');
      $(this).addClass('active');

      $('.tab-pane').removeClass('active');
      $('.tab-pane').removeClass('show');
      $('.tab-pane').eq(currTab).addClass('active');
      $('.tab-pane').eq(currTab).addClass('show');
    })

    // Mobile menu

    // $('.mobile_menu').on('click', function() {
    //   $('.popup').toggleClass('d-none');
    // })


    // PopUp

    // $(document).ready(function($) {   
     
    //   // Закрытие по клавише Esc.
    //   $(document).keydown(function(e) {
    //     if (e.keyCode === 27) {
    //       $('.popup').addClass('d-none');
    //     }
    //   });
      
      // Клик по фону, но не по окну.
    // });
})(jQuery);