// change nav depending on the height from top
var distanceTop = function(){
    var h = $(document).scrollTop();
    if( h > 180) {
		$('.nav_overlap').css('color', '#ededed');
		$('.nav_menu_sign').css('borderColor', '#ededed');
		$('.nav_menu_sign').css('borderLeft', 'none');
	} else {
		$('.nav_overlap').css('color', '#706e79');
		$('.nav_overlap:hover').css('color', '#b5c374');
		$('.nav_menu_sign').css('borderColor', '#706e79');
	}
};

// update every 200ms
window.setInterval(distanceTop, 300);


/* https://stackoverflow.com/questions/14866775/detect-document-height-change */
/* https://api.jquery.com/scrollTop/ */
/* https://www.w3schools.com/jquery/jquery_css.asp */