window.onload = function() {
	var wrapper = $('.wrapper'),
		first_slide = $('.first-slide'),
		greeting_text = $('.greeting_text'),
		greeting_block = $('.greeting_block'),
		logo = $('.logo'),
		logo_text1 = $('.logo_text1'),
		logo_text2 = $('.logo_text2');

	wrapper.style.height = document.documentElement.clientHeight + 'px';
 	////////////////////////////////

 	greeting_block.style.top = document.documentElement.clientHeight/2 - greeting_block.clientHeight/2 + 'px';
 	greeting_block.style.left = first_slide.clientWidth/2 - greeting_block.clientWidth/2 + 'px';

	logo.classList.add('flipInY');
	logo_text1.classList.add('fadeInRight');

	setTimeout(function() {
		logo_text2.classList.add('fadeInRight');
	}, 400);

	// First Step

	setTimeout(function() {
		first_slide.classList.add('first-slide_next');
		greeting_text.classList.add('greeting_text_next');
		logo.classList.add('logo_next');
		logo_text1.classList.add('logo_text1_next');
		logo_text2.classList.add('logo_text2_next');

	 	greeting_block.style.top = 10 + 'px';
	 	greeting_block.style.left = 20 + 'px';

	 	secondStep();
	}, 2100);

	// Second Slide
	var images = document.querySelectorAll('.img'),
		second_slide = $('.second-slide'),
		img1 = $('.img1'),
		img2 = $('.img2'),
		img3 = $('.img3'),
		img4 = $('.img4'),
		img5 = $('.img5'),
		img6 = $('.img6'),
		img7 = $('.img7');



	images.forEach = [].forEach;

	images.forEach(function(el) {
		el.style.height = document.documentElement.clientHeight * .75 + 'px';

		if(document.documentElement.clientWidth < 900) {
			el.style.left = second_slide.clientWidth/2 - el.clientWidth/2 + 'px';
		}
	});

	function secondStep() {
		setTimeout(function() {
			if(document.documentElement.clientWidth < 900) {
				img1.classList.add('fadeInDown');
				setTimeout(function() {
					img2.classList.add('fadeInLeft');
				}, 2400);
				setTimeout(function() {
					img3.classList.add('fadeInRight');
					
					thirdStep();
				}, 4600);
			} else {
				img1.classList.add('fadeInDown');
				setTimeout(function() {
					img2.classList.add('fadeInLeft');
				}, 600);
				setTimeout(function() {
					img3.classList.add('fadeInRight');
					
					thirdStep();
				}, 1300);
			}
		}, 400);
	}

	function thirdStep() {
		setTimeout(function() {
			img1.classList.add('fadeOutDown');
			img2.classList.add('fadeOutLeft');
			img3.classList.add('fadeOutRight');
			fourthStep();
		}, 2500);
	}
	
	function fourthStep() {
		setTimeout(function() {
			if(document.documentElement.clientWidth < 900) {
				img4.classList.add('bounceIn');
				img4.style.opacity = 1;
				setTimeout(function() {
					img5.classList.add('bounceIn');
					img5.style.opacity = 1;
				}, 2600);
				setTimeout(function() {
					img6.classList.add('bounceIn');
					img6.style.opacity = 1;
					
					fifthStep();
				}, 4700);
			} else {
				img4.classList.add('bounceIn');
				img4.style.opacity = 1;
				setTimeout(function() {
					img5.classList.add('bounceIn');
					img5.style.opacity = 1;
				}, 900);
				setTimeout(function() {
					img6.classList.add('bounceIn');
					img6.style.opacity = 1;
					
					fifthStep();
				}, 1800);
			}
		}, 400);
	}

	function fifthStep() {
		setTimeout(function() {
			img4.classList.add('bounceOut');
			img5.classList.add('bounceOut');
			img6.classList.add('bounceOut');
			sixthStep();
		}, 2500);
	}

	function sixthStep() {
		setTimeout(function() {
			if(document.documentElement.clientWidth < 900) {
				img7.style.height = document.documentElement.clientHeight * .8 + 'px';
			} else {
				img7.style.height = document.documentElement.clientHeight * .9 + 'px';
			}
			img7.classList.add('rotateIn');
		}, 700);
	}
}

function $(el) {
	return document.querySelector(el);
}