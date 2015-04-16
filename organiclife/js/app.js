/*----Скрипт для сравнения фото-------*/

function drags(dragElement, resizeElement, container) {
    
  // Initialize the dragging event on mousedown.
  dragElement.on('mousedown touchstart', function(e) {
    
    dragElement.addClass('ba-draggable');
    resizeElement.addClass('ba-resizable');
    
    // Check if it's a mouse or touch event and pass along the correct value
    var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
    
    // Get the initial position
    var dragWidth = dragElement.outerWidth(),
        posX = dragElement.offset().left + dragWidth - startX,
        containerOffset = container.offset().left,
        containerWidth = container.outerWidth();
 
    // Set limits
    minLeft = containerOffset + 10;
    maxLeft = containerOffset + containerWidth - dragWidth - 10;
    
    // Calculate the dragging distance on mousemove.
    dragElement.parents().on("mousemove touchmove", function(e) {
        
      // Check if it's a mouse or touch event and pass along the correct value
      var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
      
      leftValue = moveX + posX - dragWidth;
      
      // Prevent going off limits
      if ( leftValue < minLeft) {
        leftValue = minLeft;
      } else if (leftValue > maxLeft) {
        leftValue = maxLeft;
      }
      
      // Translate the handle's left value to masked divs width.
      widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
            
      // Set the new values for the slider and the handle. 
      // Bind mouseup events to stop dragging.
      $('.ba-draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
        $(this).removeClass('ba-draggable');
        resizeElement.removeClass('ba-resizable');
      });
      $('.ba-resizable').css('width', widthValue);
    }).on('mouseup touchend touchcancel', function(){
      dragElement.removeClass('ba-draggable');
      resizeElement.removeClass('ba-resizable');
    });
    e.preventDefault();
  }).on('mouseup touchend touchcancel', function(e){
    dragElement.removeClass('ba-draggable');
    resizeElement.removeClass('ba-resizable');
  });
}

/*----Слайдер-------*/

$(document).ready(function(){
      $('.b-slides').slick({
          arrows:true,
          dots:true
        });



/*----Скрипт драг для фото-сравнения-------*/


        $('.ba-slider').each(function(){
        var cur = $(this);
        // Adjust the slider
        var width = cur.width()+'px';
        cur.find('.resize img').css('width', width);
        // Bind dragging events
        drags(cur.find('.handle'), cur.find('.resize'), cur);
      });
    });
     
    // Update sliders on resize.
    // We all do it: i.imgur.com/YkbaV.gif
    $(window).resize(function(){
      $('.ba-slider').each(function(){
        var cur = $(this);
        var width = cur.width()+'px';
        cur.find('.resize img').css('width', width);
      });


    });

/*--------------Скрипт для карты----------------*/

$(function() {
                if (window.google) {

                    geocoder = new google.maps.Geocoder();

                    var map;
                    var oz = new google.maps.LatLng(48.465533, 35.0522887);

                    var MY_MAPTYPE_ID = 'моя карта';

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




                    function addMarker(address, zoom, el) {

                        geocoder.geocode({'address': address}, function(results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                var markerImage = new google.maps.MarkerImage('i/marker-mup.png', new google.maps.Size(81, 104), new google.maps.Point(0, 0), new google.maps.Point(40, 104));
                                var marker = new google.maps.Marker({
                                    icon: markerImage,
                                    map: map,
                                    position: results[0].geometry.location
                                });
                                if (zoom > 0)
                                    map.setZoom(zoom);
                                markers.push(marker);
                                $(el).attr("marker", markers.length - 1);
                                map.setCenter(offsetCenter(marker.getPosition(), 0, -130));

                            } else {
                                alert("Geocode was not successful for the following reason: " + status);
                            }
                        });

                    }


                    function offsetCenter(latlng, offsetx, offsety) {


                        var scale = Math.pow(2, map.getZoom());
                        var nw = new google.maps.LatLng(
                                map.getBounds().getNorthEast().lat(),
                                map.getBounds().getSouthWest().lng()
                                );

                        var worldCoordinateCenter = map.getProjection().fromLatLngToPoint(latlng);
                        var pixelOffset = new google.maps.Point((offsetx / scale) || 0, (offsety / scale) || 0)

                        var worldCoordinateNewCenter = new google.maps.Point(
                                worldCoordinateCenter.x - pixelOffset.x,
                                worldCoordinateCenter.y + pixelOffset.y
                                );

                        var newCenter = map.getProjection().fromPointToLatLng(worldCoordinateNewCenter);

                        return newCenter;

                    }

                    $("[data-map-zoom-in]").click(function() {
                        map.setZoom(map.getZoom() + 1);
                        map.setCenter(offsetCenter(markers[0].getPosition(), 0, -130));
                    });

                    $("[data-map-zoom-out]").click(function() {
                        map.setZoom(map.getZoom() - 1);
                        map.setCenter(offsetCenter(markers[0].getPosition(), 0, -130));
                    });


                }






            })

/*--------------Скрипт для page-nav----------------*/

$.fn.scrollView = function () {
    return this.each(function () {
        var self = this,
        top = $(self).data('top') || $(self).offset().top;
        $(self).data('top',top);
        $('html, body').animate({
            scrollTop: top
        }, 1000);
    })
};
$(document).ready(function(){
         $('.pager-nav ul li a').click(function(){
            $('.pager-nav ul li a').removeClass('active');
            $(this).addClass('active');
            var scrollDiv = $(this).attr('href');
            $(scrollDiv).scrollView();
            return false;
         }); 

})