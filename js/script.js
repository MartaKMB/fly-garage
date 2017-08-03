// change nav depending on the height from top
var distanceTop = function(){
    var h = $(document).scrollTop();
	// console.log('warosc:' + h);
    if( h > 920 ) {
		$('.nav_overlap').css('color', '#ededed');
		$('.fb_overlap').css('color', '#ededed');
		$('.nav_overlap').css('backgroundColor', '#b5c374');
		$('.fb_overlap').css('backgroundColor', '#b5c374');
		$('.nav_menu_sign').css('borderColor', '#ededed');
		$('.fb_overlap').css('borderColor', '#ededed');
		$('.nav_menu_sign').css('borderLeft', 'none');
		$('.fb_overlap').css('borderLeft', 'none');
		$('.fb_overlap:hover').css('color', '#b5c374');
		$('.fb_overlap:hover').css('backgroundColor', '#ededed');
	} else if( h > 180) {
		$('.nav_overlap').css('color', '#ededed');
		$('.fb_overlap').css('color', '#ededed');
		$('.nav_overlap').css('backgroundColor', '#706e79');
		$('.fb_overlap').css('backgroundColor', '#706e79');
		$('.nav_menu_sign').css('borderColor', '#ededed');
		$('.fb_overlap').css('borderColor', '#ededed');
		$('.nav_menu_sign').css('borderLeft', 'none');
		$('.fb_overlap').css('borderLeft', 'none');
		$('.fb_overlap:hover').css('color', '#706e79');
		$('.fb_overlap:hover').css('backgroundColor', '#ededed');
	} else {
		$('.nav_overlap').css('color', '#706e79');
		$('.fb_overlap').css('color', '#706e79');
		$('.nav_overlap').css('backgroundColor', '#b5c374');
		$('.fb_overlap').css('backgroundColor', '#b5c374');
		$('.nav_menu_sign').css('borderColor', '#706e79');
		$('.fb_overlap').css('borderColor', '#706e79');
		$('.fb_overlap').css('borderLeft', 'none');
		$('.nav_overlap:hover').css('color', '#b5c374');
		$('.fb_overlap:hover').css('color', '#b5c374');
		$('.nav_overlap:hover').css('backgroundColor', '#706e79');
		$('.fb_overlap:hover').css('backgroundColor', '#706e79');
	}
};

// update every 200ms
window.setInterval(distanceTop, 300);


/* https://stackoverflow.com/questions/14866775/detect-document-height-change */
/* https://api.jquery.com/scrollTop/ */
/* https://www.w3schools.com/jquery/jquery_css.asp */