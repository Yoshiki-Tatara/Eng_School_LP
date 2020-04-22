$(function() {

  $('#header-info').click(function() {
    $('#header-info-modal').fadeIn();
  });

  $('.close-modal').click(function(){
    $('#header-info-modal').fadeOut();
  });


  var $slider_container = $('.main-wrapper4-content3-container2');
  var $slider = $('.slide-item');

  $slider.on('init', function(){
    $slider_container.addClass('initialized');
  });

  $slider.slick({
    appendArrows: $slider_container,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    waitForAnimate: false
  });

  


});