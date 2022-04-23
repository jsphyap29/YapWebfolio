$(document).ready(function() {

  var $top = $('#toTop');
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $top.addClass('visible');
    } else {
      $top.removeClass('visible');
    }
  });


  $top.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 800);
  });


  $(window).scroll(function() {
    //Method 1: Using addClass and removeClass
    //if ($(document).scrollTop() > 50) {
    //    $('.navbar-default').addClass('navbar-shrink');
    //} else {
    //    $('.navbar-default').removeClass('navbar-shrink');
    //}
    //Method 2: Using toggleClass
    $(".navbar").toggleClass("navbar-shrink", $(this).scrollTop() > 500)
  });


  var $meters = $(".meter > span");
  var $section = $('#second');
  var $queue = $({});

  function loadDaBars() {
    $meters.each(function() {
      var $el = $(this);
      var origWidth = $el.width();
      $el.width(0);
      $queue.queue(function(next) {
        $el.animate({
          width: origWidth
        }, 800, next);
      });
    });
  }

  $(document).bind('scroll', function(ev) {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $section.offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
      loadDaBars();
      // unbind event not to load scrolsl again
      $(document).unbind('scroll');
    }
  });


  AOS.init();


});