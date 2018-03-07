(function(){


$(window).scroll(function() {
	if($(window).scrollTop() >= 630){
		$('header').addClass('showHeader');
	}
	else{
		$('header').removeClass('showHeader');
	}
});



$('.homePageBannerSection').mousemove(function(e){
	

});


var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
  translate2 = 'translate(' + x + 2 + 'px, ' + y + 2 + 'px) scale(1.1)';
  translate3 = 'translate(' + x + 5 + 'px, ' + y + 5 + 'px) scale(1.1)';

  $('.homeBannerContentHolder ul').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  $('.homeBannerContentHolder h1').css({
    '-webit-transform': translate2,
    '-moz-transform': translate2,
    'transform': translate2
  });
  $('.homeBannerContentHolder h1 i').css({
    '-webit-transform': translate3,
    '-moz-transform': translate3,
    'transform': translate3
  });


  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();





})();