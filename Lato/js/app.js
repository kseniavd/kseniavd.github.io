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

});