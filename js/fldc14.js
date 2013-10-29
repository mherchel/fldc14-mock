$(document ).ready(function() {

	$(window).scroll(function(){
	if($(window).scrollTop() >= $('#heading').outerHeight()) {
		$( "#heading" ).addClass( "scrolldown" );
	}
	if($(window).scrollTop() < $('#heading').outerHeight()) {
		$( "#heading" ).removeClass( "scrolldown" );
	}	
	});

});