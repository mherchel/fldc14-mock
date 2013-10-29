$(document ).ready(function() {

	$(window).scroll(function(){
	if($(window).scrollTop() >= $('#heading').outerHeight()) {
		$( "#heading" ).addClass( "scrolldown" );
		$( "#heading h1 a" ).addClass( "scrolldown" );
		$( "#mobile-menu" ).addClass( "scrolldown" );
	}
	if($(window).scrollTop() < $('#heading').outerHeight()) {
		$( "#heading" ).removeClass( "scrolldown" );
		$( "#heading h1 a" ).removeClass( "scrolldown" );
		$( "#mobile-menu" ).removeClass( "scrolldown" );
	}	
	});

});