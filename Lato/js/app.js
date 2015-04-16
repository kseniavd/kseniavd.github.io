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


                $(".fancybox").fancybox();

                $(".nav").on("click","a", function (event) {
                    event.preventDefault();
                    var id  = $(this).attr('href'),
                        top = $(id).offset().top;
                    $('body,html').animate({scrollTop: top}, 1500);
                });


                 $(window).scroll(function() {
                    if($(this).scrollTop() != 0) {
                        $('#toTop').fadeIn();
                    } else {
                        $('#toTop').fadeOut();
                    }
                });
                    $('#toTop').click(function() {
                        $('body,html').animate({scrollTop:0},800);
                    });

    });