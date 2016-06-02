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

function initialize() {
    //получаем наш div куда будем карту добавлять
    var mapCanvas = document.getElementById('map_canvas');
    // задаем параметры карты
    var mapOptions = {
        //Это центр куда спозиционируется наша карта при загрузке
        center: new google.maps.LatLng(50.179119, 30.314610),
        //увеличение под которым будет карта, от 0 до 18
        // 0 - минимальное увеличение - карта мира
        // 18 - максимально детальный масштаб
        zoom: 14,
        //Тип карты - обычная дорожная карта
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    //Инициализируем карту
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Объявляем массив с нашими местами и маркерами
    var markers = [],
        myPlaces = [];
    //Добавляем места в массив
    myPlaces.push(new Place('Киев', 50.453242, 30.525513, 'Столица Украины'));
    myPlaces.push(new Place('Васильків', 50.179119, 30.314610, 'Десь тут живу я )) Julietta Photographer'));

    //Теперь добавим маркеры для каждого места
    for (var i = 0, n = myPlaces.length; i < n; i++) {
        var marker = new google.maps.Marker({
            //расположение на карте
            position: new google.maps.LatLng(myPlaces[i].latitude, myPlaces[i].longitude),
            map: map,
            //То что мы увидим при наведении мышкой на маркер
            title: myPlaces[i].name
        });
        //Добавим попап, который будет появляться при клике на маркер
        var infowindow = new google.maps.InfoWindow({
            content: '<h1 class="map-marker">' + myPlaces[i].name + '</h1><br/>' + myPlaces[i].description
        });
        //привязываем попап к маркеру на карте
        makeInfoWindowEvent(map, infowindow, marker);
        markers.push(marker);
    }
    infowindow.open(map, marker);
}
function makeInfoWindowEvent(map, infowindow, marker) {
    //Привязываем событие КЛИК к маркеру
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, myPlaces[2]);
    });
}
//Это класс для удобного манипулирования местами
function Place(name, latitude, longitude, description){
    this.name = name;  // название
    this.latitude = latitude;  // широта
    this.longitude = longitude;  // долгота
    this.description = description;  // описание места
}
//Когда документ загружен полностью - запускаем инициализацию карты.
google.maps.event.addDomListener(window, 'load', initialize);


});
