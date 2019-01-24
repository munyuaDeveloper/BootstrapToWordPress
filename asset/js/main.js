$(function(){
  // cache the window object
  var $window=$(window);
  //parallax background effect
  $('section[data-type="background"]').each(function(){
    var $bgobj=$(this);//assigning the object
    $(window).scroll(function(){
      //scroll the background at var speed
      // the yPos is a negative value because we're scrolling up

      var yPos= -($window.scrollTop() / $bgobj.data('speed'));

      //pu together our final background position

      var coords='50% '+ yPos + 'px';

      //move the background

      $bgobj.css({backgroundPosition: coords});

    });
  });
});