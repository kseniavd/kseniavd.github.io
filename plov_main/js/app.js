$(this).on('mousemove', function(e) {
  var w = $(this).width();
  var h = $(this).height();
  var offsetX = 0.1 - e.pageX / w;
  var offsetY = 0.1 - e.pageY / h;

  $(".parallax").each(function(i, el) {
    var offset = parseInt($(el).data('offset'));
    var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

    $(el).css({
    '-webkit-transform': translate,
    'transform': translate,
    'moz-transform': translate
    });
  });
});
           


$(document).ready(function(){
      $('.slider').slick({
      	dots: true,
  		  arrows: false,
      });

      $('.slider-dishes').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
      });

      $('.slider-event').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
      });


$('.demo').spinner()


});




 