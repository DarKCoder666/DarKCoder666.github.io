	if($(window).width() <= 992){
		$('.textContent').css({
			'marginTop' : 0
		});
	}


$(window).scroll(function(){
	if($(window).width() <= 992){
		$('.textContent').css({
			'marginTop' : 0
		});
		return;
	}
	var st = $(this).scrollTop();

	$(".theArticle__header-text").css({
		"transform" : "translate(0," + st/2 + "%)"
	});
	$(".textContent").css({
		"transform" : "translate(0," + st/20 + "%)"
	})
});