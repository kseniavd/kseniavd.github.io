$(document).ready(function() {
    $("#content").find("[id^='tab']").hide(); // Hide all content
    $("#tabs li:first").attr("id","current"); // Activate the first tab
    $("#content #tab1").fadeIn(); // Show first tab's content
    
    $('#tabs a').click(function(e) {
        e.preventDefault();
        if ($(this).closest("li").attr("id") == "current"){ //detection for current tab
         return;       
        }
        else{             
          $("#content").find("[id^='tab']").hide(); // Hide all content
          $("#tabs li").attr("id",""); //Reset id's
          $(this).parent().attr("id","current"); // Activate this
          $('#' + $(this).attr('name')).fadeIn(); // Show content for the current tab
        }

    });

    $("[name='tab2']").click()

    $(window).load(function () {
        $("#rotator").rotator({
        starting: 0,
        ending: 37,
        percentage: true,
        color: '#ffa352',
        lineWidth: 20,
        timer: 15,
        radius: 35,
        fontStyle: 'Calibri',
        fontSize: '14pt',
        fontColor: '#4e4e4e',
        backgroundColor: '#e7e8e8',
        callback: function () {
        }
        });       
    });






    $("#drag").noUiSlider({
  start: [ 38, 60 ],
  behaviour: 'drag',
  connect: true,
  range: {
    'min':  20,
    'max':  80
  }
});




 $(".cb-enable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-disable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', true);
    });
    $(".cb-disable").click(function(){
        var parent = $(this).parents('.switch');
        $('.cb-enable',parent).removeClass('selected');
        $(this).addClass('selected');
        $('.checkbox',parent).attr('checked', false);
    });
   

});


$(document).ready(function(){
      $('.gallery-slider').slick({
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
      });


      $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});