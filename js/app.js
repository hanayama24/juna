$(document).ready(function(){

  var globalDebug = true;
/* --- NICESCROLL INIT--- */

if(globalDebug) {
  $('.image-container .image-hover .div-hover').each(function() {
    $(this).hoverdir();
  });
}

if(globalDebug) {
  $('.image-container .image-hover .div-hover-bottom').each(function() {
    $(this).hoverdir();
  });
}

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

  /* --- DROPDOWN MENU--- */

  $("#dropdownMenu").on("click", function(){
      $(".list-galleries").toggle();
      $(".nav-list__dropdown-menu").toggleClass("dropdown-menu_active");
  });

  /* --- gallery --- */

//   $('#open-popup').magnificPopup({
//     items: [
//       {
//         src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
//         title: 'Peter & Paul fortress in SPB'
//       },
//       {
//         src: 'img/030531.jpg',
//         title: 'Katharina'
//       },
//       {
//         src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
//         type: 'inline'
//       },
//       {
//         src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
//         type: 'inline'
//       },
//       {
//         src: '#my-popup', // CSS selector of an element on page that should be used as a popup
//         type: 'inline'
//       }
//     ],
//     gallery: {
//       enabled: true
//     },
//     type: 'image' // this is a default type
// });

$('.content-gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.image-container a', // the selector for gallery item
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        easing: 'ease-in-out',
        gallery:{
    				enabled:true,
    				navigateByImgClick: true,
    				tPrev: 'Previous (Left arrow key)', // title for left button
    				tNext: 'Next (Right arrow key)', // title for right button
    				tCounter: '<div class="gallery-control gallery-control--popup"><a href="#" class="control-item arrow-button arrow-button--left js-arrow-popup-prev"></a><div class="control-item count js-gallery-current-slide"><span class="js-unit">%curr%</span><sup class="js-gallery-slides-total">%total%</sup></div><a href="#" class="control-item arrow-button arrow-button--right js-arrow-popup-next"></a></div>'
    			}
    });
});


});
