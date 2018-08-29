$(document).ready(function() {
   
    
    $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
    
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        
        if(wScroll > $('.skills-row').offset().top - ($(window).height() / 1.2)) {
            
            $('.skills-row .skill-squares').each(function(i) {
                
               setTimeout(function() {
                      
                   $('.skills-row .skill-squares').eq(i).addClass('showing');
                   
               }, 150 * (i+1));
                    
            });
        }
        
        if(wScroll > $('.certificate-container').offset().top - $(window).height()) {
            
            var offset = Math.min(0, wScroll - $('.certificate-container').offset().top + $(window).height() - 500);
            
            $('#img1').css({'transform': 'translate('+ offset + 'px, ' +Math.abs(offset * 0.7) +'px)'});
            
            $('#img3').css({'transform': 'translate('+ Math.abs(offset) + 'px, '+Math.abs(offset * 0.7) +'px)'});
        }
        else if(wScroll <= $('.certificate-container').offset().top - $(window).height()) {
            
            $('#img1').css({'transform': 'translate(0px, 0px)'});
            
            $('#img3').css({'transform': 'translate(0px, 0px)'});
            
        }
    })
    
    
});