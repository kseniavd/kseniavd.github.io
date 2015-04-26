$(document).ready(function(){



	$("#owl-carousel").owlCarousel({
		        items:3,
		        navigation: true
	  });



//-------------------------fancybox--------
	$(".fancybox").fancybox();



//-------------------------tab---------
//Когда страница загружается...
	//$(".tab_content").hide(); //Скрыть весь контент
	//$("ul.tabs li:first").addClass("active").show(); //Активировать первую вкладку
	//$(".tab-content:first").show(); //Показать контент первой вкладки

	//Событие по клику
	//$("ul.tabs li").click(function() {

		//$("ul.tabs li").removeClass("active"); //Удаление любого "active" класса
		//$(this).addClass("active"); //Добавление "active" класса на активную вкладку
		//$(".tab-content").hide(); //Скрыть контент вкладок

		//var activeTab = $(this).find("a").attr("href"); //Найти href значение атрибута для выявления активной вкладки и контента
		//$(activeTab).fadeIn(); //Fade in контента с активным ID
		//return false;
	//});

//-------------------------map---------
	if (window.google){

			geocoder = new google.maps.Geocoder();

			var map;
		      var oz = new google.maps.LatLng(43.8664026,10.2533508);
		      //var oz = offsetCenter(markers[0].getPosition(),0,-50);
		      //var ozm = new google.maps.LatLng(48.45815,35.024436);

		      var MY_MAPTYPE_ID = 'РјРѕСЏ РєР°СЂС‚Р°';

		      function initialize() {

		        

		        var mapOptions = {
		          zoom: 15,
		          center: oz,
		          mapTypeControlOptions: {
		            mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		          },
		          mapTypeId: MY_MAPTYPE_ID,
		          disableDefaultUI: true,
		          scrollwheel: false
		        };

		        map = new google.maps.Map(document.getElementById('map-canvas'),
		            mapOptions);

		        var styledMapOptions = {
		          name: 'Custom Style'
		        };

		        var customMapType = new google.maps.StyledMapType(0, styledMapOptions);

		        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

		      }
				initialize();
				



		  function addMarker(address,zoom,el) {
		    
		    geocoder.geocode( { 'address': address}, function(results, status) {
		      if (status == google.maps.GeocoderStatus.OK) {
		        //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
		        //offsetCenter(results[0].geometry.location, 350);
		        var markerImage = new google.maps.MarkerImage('../img/marker.png',new google.maps.Size(46,64),new google.maps.Point(0,0),new google.maps.Point(23,64));
		        var marker = new google.maps.Marker({
		        	icon: markerImage,
		            map: map, 
		            position: results[0].geometry.location
		        });
		        if (zoom>0) map.setZoom(zoom);
		    	map.setCenter(marker.getPosition());
		        
		      } else {
		        alert("Geocode was not successful for the following reason: " + status);
		      }
		    });
		    	
		  }


		//adding markers from page

		addMarker($("[data-adress]").text(),15,$("[data-adress]"));


		

	$("[data-map-zoom-in]").click(function() {
	    	map.setZoom(map.getZoom() + 1);
	    map.setCenter(offsetCenter(markers[0].getPosition(), 0, -130));
	});

	$("[data-map-zoom-out]").click(function() {
	    map.setZoom(map.getZoom() - 1);
	    map.setCenter(offsetCenter(markers[0].getPosition(), 0, -130));
	});


		}

//-------------------------nav---------


	 $(".nav").on("click","a", function (event) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1500);
                });	

	 $('.b-nav ul li a').click(function(){
            	$('.b-nav ul li a').removeClass("active");
            	 $(this).addClass("active");
            })


//-------------------------lateral-nav---------
		$('body').progressTracker();


	// =================================================================
	

 //-------------------------fix menu--------

$(window).scroll(function() {
        if ($(".b-header").length > 0) {
            if ($(window).scrollTop() > $(".b-header").offset().top)
                $(".b-header").addClass("fixed")
            else
                $(".b-header").removeClass("fixed")
        }

    });


    $(window).scroll();


 

// Animation sctipt
	// =================================================================

  if (!isMobile) $(".animating").each(function () {
		var block = $(this);
		$(window).scroll(function() {
			var top = block.offset().top;
			var bottom = block.height()+top;
			top = top - $(window).height();
			var scroll_top = $(this).scrollTop();
			if ((scroll_top > top) && (scroll_top < bottom)) {
				if (!block.hasClass("animated")) {
					block.addClass("animated");
				}
			} else {
				//block.removeClass("animated");
			}
		});
	});

  $(window).scroll();



});


