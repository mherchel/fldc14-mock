$(document ).ready(function() {


	$(window).scroll(function(){

		// Resize the header on scroll

		if($(window).scrollTop() >= $('#site-title').outerHeight()) {
			$( "#site-title" ).addClass( "scroll-down" );
			$( "#header-menu" ).addClass( "scroll-down" );
			
		}

		if($(window).scrollTop() < $('#site-title').outerHeight()) {
			$( "#site-title" ).removeClass( "scroll-down" );
			$( "#header-menu" ).removeClass( "scroll-down" );
		}	

		// Slide in the location box on front page

		if($(window).scrollTop() >= $('#location-info').outerHeight()) {
			$( "#location-info" ).addClass( "scroll-down" );
		}	

		if($(window).scrollTop() < $('#location-info').outerHeight()) {
			$( "#location-info" ).removeClass( "scroll-down" );
		}				
	
	});

	// Show the mobile menu
	$('#mobile-menu').click(function(){

		$('#header-menu').toggleClass('header-menu-active');
		$('#mobile-menu').toggleClass('mobile-menu-active');

	});	

	// Expand sub-menus for mobile navigation
 	$('#primary-menu .expanded').click(function(){

		$(this).toggleClass('expanded-active');

		if( $(window).width() < 900 ) {
			$('ul',this).slideToggle();
		}
                 
    });


});