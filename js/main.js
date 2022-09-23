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
   // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
 
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top -50;
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active-menu');//drop this class in li tag
        $(this).parent().siblings().removeClass('active-menu');
      }
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


