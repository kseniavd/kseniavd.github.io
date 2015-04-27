$(document).ready(function(){
                    $('.owl-carousel').owlCarousel({
                        items:1, 
                        loop:false,
                        responsive:true
                    });

                    $('.owl-carousel-2').owlCarousel({
                        items:4, 
                        loop:true,
                        navigation : true,
                        pagination: false,
                        responsive: true
                    });



//-------------------------animating---------

                    $(".animating").each(function() {
                    var block = $(this);
                    $(window).scroll(function() {
                        var top = block.offset().top;
                        var bottom = block.height() + top;
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


//-------------------------fancybox---------


                $(".fancybox").fancybox();



//-------------------------nav(переход к секции  по меню)---------

               //$(".nav").on("click","a", function (event) {
                    //event.preventDefault();
                    //var id  = $(this).attr('href'),
                        //top = $(id).offset().top;
                   // $('body,html').animate({scrollTop: top}, 1500);
                //});

//-------------------------map---------
    // Google map control
  // =================================================================

  if (window.google){

    geocoder = new google.maps.Geocoder();

    var map;
        var oz = new google.maps.LatLng(42.69859,23.334044);
        //var oz = offsetCenter(markers[0].getPosition(),0,-50);
        //var ozm = new google.maps.LatLng(48.45815,35.024436);

        var MY_MAPTYPE_ID = 'моя карта';

        function initialize() {

          

          var mapOptions = {
            zoom: 16,
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
      //In this case it gets the address from an element on the page, but obviously you  could just pass it to the method instead
      //var address = "г. Днепропетровск, ул. Мандрыковская, 47";

      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
          //offsetCenter(results[0].geometry.location, 350);
          var markerImage = new google.maps.MarkerImage('./i/map-marker.png',new google.maps.Size(46,64),new google.maps.Point(0,0),new google.maps.Point(23,64));
          var marker = new google.maps.Marker({
            icon: markerImage,
              map: map, 
              position: results[0].geometry.location
          });
          if (zoom>0) map.setZoom(zoom);
          //markers.push(marker);
        //$(el).attr("marker",markers.length-1);
        //map.setCenter(offsetCenter(marker.getPosition(),0,0));
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

//-------------------------btn-top(переход вверх страницы)---------


                 $(window).scroll(function() {
                    if($(this).scrollTop() != 0) {
                        $('#toTop').fadeIn();
                    } else {
                        $('#toTop').fadeOut();
                    }
                });
                    $('#toTop').click(function() {
                        $('body,html').animate({scrollTop:0},800);
                        $('.nav li a').removeClass("active");
                        $(this).addClass("active");
                    });

                   

$(window).scroll();

//-------------------------nav {переход hover)---------


     $(".nav").on("click","a", function (event) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1500);
                }); 

     $('.nav li a').click(function(){
                $('.nav li a').removeClass("active");
                 $(this).addClass("active");
            })

$(window).scroll();
//-------------------------fix menu--------

$(window).scroll(function() {
        if ($("#header").length > 0) {
            if ($(window).scrollTop() > 57)
                $("#header").addClass("fixed")
            else
                $("#header").removeClass("fixed")
        }
        
	$($('.nav li a').get().reverse()).each(function(){
		console.log($($(this).attr("href")).offset().top,$(window).scrollTop())
		if ($(window).scrollTop()>=$($(this).attr("href")).offset().top-1)
			{
				$('.nav li a').removeClass("active");
				$(this).addClass("active");
				return false;
			}
	})

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

 if ($(window).scrollTop() >= $(this).offset().top - 1) {
                $("section").removeClass("hover");
                $(this).addClass("hover");
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




});