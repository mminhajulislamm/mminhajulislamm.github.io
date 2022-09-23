(function($){
	'use strict'

// Smooth scrolling
 
    var scrollLink = $('.scroll');
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
      scrollTop: $(this.hash).offset().top
      });
    });	
	
	
// menu-list  

	$(".menu-list span").on('click', function(){
		$('.menu').slideToggle('slow');
	});

	

// topbutton 

	$('.top-button').on('click' , function(){
		$('html').animate({  scrollTop : 0 });
	});

//  sereen size 

	$(window).resize(function(){
		var screenSize = $(window).width();

		$('.box').text(screenSize);

		if ( screenSize > 767 ){
			$('.menu').removeAttr('style');
		}
	});


}) (jQuery);


