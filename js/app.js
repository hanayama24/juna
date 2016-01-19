$(document).ready(function(){

  var globalDebug = true;
/* --- NICESCROLL INIT--- */

function niceScrollInit() {
	if (globalDebug) {console.log("NiceScroll - Init");}

	var smoothScroll = $('body').data('smoothscrolling') !== undefined;

	if ($('.site-navigation').length) {
		var offset = $('.site-navigation').offset();
	}

	if (smoothScroll) {
		$('html').addClass('nicescroll');
		$('[data-smoothscrolling]').niceScroll({
			zindex: 9999,
			cursoropacitymin: 0.3,
			cursorwidth: 7,
			cursorborder: 0,
			mousescrollstep: 40,
			scrollspeed: 100,
			cursorcolor: '#000000'
		});
	}
}
  niceScrollInit();
});
