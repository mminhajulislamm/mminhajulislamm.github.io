(function($){
	'use strict'

// menu-list  //

	$(".menu-list span").on('click', function(){
		$('.menu').slideToggle('slow');
	});

	

// topbutton //

	$('.top-button').on('click' , function(){
		$('html').animate({  scrollTop : 0 });
	});

//  sereen size  //

	$(window).resize(function(){
		var screenSize = $(window).width();

		$('.box').text(screenSize);

		if ( screenSize > 767 ){
			$('.menu').removeAttr('style');
		}
	});


}) (jQuery);


