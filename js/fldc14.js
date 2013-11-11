$(document ).ready(function() {

	// Resize the header on scroll

	$(window).scroll(function(){

		if($(window).scrollTop() >= $('#site-title').outerHeight()) {
			$( "#site-title" ).addClass( "scroll-down" );
			$( "#header-menu" ).addClass( "scroll-down" );
			
		}

		if($(window).scrollTop() < $('#site-title').outerHeight()) {
			$( "#site-title" ).removeClass( "scroll-down" );
			$( "#header-menu" ).removeClass( "scroll-down" );
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