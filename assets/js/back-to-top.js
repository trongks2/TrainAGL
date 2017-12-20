$(document).ready(function(){
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		}); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
// Scroll when click in the mouse

$(document).ready(function(){
	 $('#info').click(function(){
		$("html, body").animate({ scrollTop: 900 }, 600);
		return false;
	});
});
