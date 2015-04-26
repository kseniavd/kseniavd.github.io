$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var btn 	= $('.touch-menu');
	var menu 	= $('.nav');
	var tabs 	= $('.tabs');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(btn).on('click', function(e) {
		e.preventDefault();
		tabs.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 900 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 799 && tabs.is(':hidden')) {
			tabs.removeAttr('style');
		}
	});
	
});