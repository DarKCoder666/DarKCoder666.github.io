window.onload = function() {
	var imagesBlock = $('.images');
	var images = document.querySelectorAll('.img');

	images.forEach = [].forEach;
	
	images.forEach(function(el) {
		el.style.width = document.documentElement.clientWidth + 'px';
		el.style.height = document.documentElement.clientHeight + 'px';		
	});

	//LastBlock config
	var img7_wrap = $('.img7_wrap');
	img7_wrap.style.top = (document.documentElement.clientHeight - img7_wrap.clientHeight) / 2 + 'px';


	// /FirstBlock
	images[0].classList.add('bounceIn');
	images[0].style.opacity = 1;
	
	setTimeout(function() {
		var img1Top = $('.img1_top'),
			img1Bottom = $('.img1_bottom');

		img1Top.classList.add('fadeInDown');
		img1Bottom.classList.add('fadeInUp');
	}, 400);
	
	setTimeout(function() {
		images[1].classList.add('bounceInDown');
		images[1].style.opacity = 1;

		setTimeout(function() {
			var img2Top = $('.img2_top'),
				img2Bottom = $('.img2_bottom');

			img2Top.classList.add('bounceInRight');
			img2Bottom.classList.add('bounceInLeft');

			img2Top.style.opacity = 1;
			img2Bottom.style.opacity = 1;
		}, 400);
	}, 3000);

	
	setTimeout(function() {
		images[2].classList.add('bounceInLeft');
		images[2].style.opacity = 1;

		setTimeout(function() {
			var img2Top = $('.img3_top'),
				img2Bottom = $('.img3_bottom');

			img2Top.classList.add('bounceInDown');
			img2Bottom.classList.add('bounceInUp');

			img2Top.style.opacity = 1;
			img2Bottom.style.opacity = 1;
		}, 400);
	}, 6000);

	
	setTimeout(function() {
		images[3].classList.add('bounceInUp');
		images[3].style.opacity = 1;
	}, 9000);

	
	setTimeout(function() {
		images[4].classList.add('bounceInRight');
		images[4].style.opacity = 1;
	}, 11000);

	
	setTimeout(function() {
		images[5].classList.add('bounceIn');
		images[5].style.opacity = 1;
	}, 14000);

	setTimeout(function() {
		images[6].classList.add('bounceInLeft');
		images[6].style.opacity = 1;

		var ourAddress = $('.ourAddress'),
			address1 = $('.address1'),
			address2 = $('.address2'),
			address3 = $('.address3'),
			img7Top = $('.img7_top');

		setTimeout(function() {
			img7Top.classList.add('fadeInDown');
		}, 500);
		setTimeout(function() {
			ourAddress.classList.add('fadeInLeft');
		}, 500);
		setTimeout(function() {
			address1.classList.add('fadeInLeft');
		}, 700);
		setTimeout(function() {
			address2.classList.add('fadeInLeft');
		}, 900);
		setTimeout(function() {
			address3.classList.add('fadeInLeft');
		}, 1100);

		setTimeout(function() {
			$('.address h1').classList.add('shake');
		}, 2500);
	}, 16000);

}

function $(el) {
	return document.querySelector(el);
}