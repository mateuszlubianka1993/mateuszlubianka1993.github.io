$(document).ready(function() { 
    
//    płynne przewijanie do wybranego elementu z menu
    $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});

//  zmiana koloru menu podczas scrollowania
$(window).scroll(function() {
    addScrolled();
});

function addScrolled() {
    if($(window).scrollTop()>$('#main-nav').outerHeight()) {
        $('#main-nav').addClass('change-color');
    } else {
        $('#main-nav').removeClass('change-color');
    };
    
    
    
};