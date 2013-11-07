$(document ).ready(function() {

	// Resize the header on scroll

	$(window).scroll(function(){

		if($(window).scrollTop() >= $('#heading').outerHeight()) {
			$( "#heading" ).addClass( "scrolldown" );
			$( "#heading h1 a" ).addClass( "scrolldown" );
			$( "#mobile-menu" ).addClass( "scrolldown" );
			$( "#login-header" ).addClass( "scrolldown" );
			
		}

		if($(window).scrollTop() < $('#heading').outerHeight()) {
			$( "#heading" ).removeClass( "scrolldown" );
			$( "#heading h1 a" ).removeClass( "scrolldown" );
			$( "#mobile-menu" ).removeClass( "scrolldown" );
			$( "#login-header" ).removeClass( "scrolldown" );
		}	
	
	});

	// Mobile Navigation

	$('#mobile-menu').click(function(){

		$('.header-menu').stop();
		$('.header-menu').slideToggle();
		$('#mobile-menu').toggleClass('mobile-menu-active');

	});	

 	$('#primary-menu .expanded').click(function(){

		$(this).toggleClass('expanded-active');
		$('ul',this).slideToggle();

                        
    });


});