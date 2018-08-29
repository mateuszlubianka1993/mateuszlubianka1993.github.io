document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function(e) {
        e.stopPropagation();
        document.getElementById('left-nav').style.left = '0px';
    });
    
    document.body.addEventListener('click', function() {
        document.getElementById('left-nav').style.left = '-300px';
    });
    
    document.getElementById('left-nav').addEventListener('click', function(e) {
        e.stopPropagation();
    })
})


$(document).ready(function() {
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100/ slideCount;
    var slideIndex = 0;
    
    slideShow.css('width',slideCount * 100 + "%");
    
    slideShow.find('.single-slide').each(function(index) {
        $(this).css({
            "width": slideWidth + '%',
            "margin-left": slideWidth * index + '%'
        })
    });
    
    $('.prev-slide').click(function() {
        slide(slideIndex -1);
    });
    
    $('.next-slide').click(function() {
       slide(slideIndex +1); 
    });
    
    function slide(newSlideIndex) {
        if(newSlideIndex < 0 || newSlideIndex > slideCount - 1)
            {
                return;
            }
        var marginLeft = -(newSlideIndex * 100) + '%';
        
        
        slideShow.animate({
            "marginLeft": marginLeft,
            
        }, 800, function(){
            slideIndex = newSlideIndex;
        });
    }
    
    $('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
})