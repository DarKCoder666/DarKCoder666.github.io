var sliderId = 'slider',
	duration = '.6s',
	sliderIntervalTime = '2000';


var slider = document.getElementById(sliderId),
	sliderWrap = document.getElementById('slider-wrap'),
	sliderControllers = document.getElementById('slider-controllers'),
	slideLeftButton = document.getElementById('slideLeft'),
	slideRightButton = document.getElementById('slideRight');

var slides = sliderWrap.children,
	slidesCount = sliderWrap.children.length,
	controllers = sliderControllers.children;

var getWidth = (function() {
	var sliderWidth = slider.getAttribute('slider-width');
	if(sliderWidth.slice(-1) == '%') {
		return {
			number: sliderWidth.slice(0, -1),
			value: '%',
			fullValue: sliderWidth.slice(0, -1) + '%'
		} 
	} else {
		return {
			number: sliderWidth,
			value: 'px',
			fullValue: sliderWidth + 'px'
		};
	}
})();

//Задание изначальных значений элментам слайдера.
for (var i = 0; i < slidesCount; i++) {
	var el = slides[i];

	el.style.width = '0';
	el.style.overflow = 'hidden';
	el.style.transition = 'all ' + duration + " ease-in-out";
	el.setAttribute('posInSlider', i + 1);
}

slides[0].style.width = getWidth.fullValue;
slides[0].setAttribute('activeBlock', '');
////////////////////////////////////////////////


// Настройка работы слайдера в автономном режиме.
var sliderInterval = setInterval(slideRight, sliderIntervalTime);


//Настройка стрелок.
slideLeftButton.onclick = slideLeft;
slideRightButton.onclick = slideRight;

/////////////////////////////////
function slideRight() {
	clearInterval(sliderInterval);
	sliderInterval = setInterval(slideRight, sliderIntervalTime);

	var activeEl = document.querySelector('[activeBlock]'),
		activeElNum = +activeEl.getAttribute('posInSlider');

	if(activeElNum == slidesCount) {
		activeEl.style.width = 0;
		activeEl.removeAttribute('activeBlock');
		slides[0].style.width = getWidth.fullValue;
		slides[0].setAttribute('activeBlock', '');
		return;
	}

	var nextEl = slides[activeElNum];
	
	activeEl.style.width = 0;
	nextEl.style.width = getWidth.fullValue;
	activeEl.removeAttribute('activeBlock');
	nextEl.setAttribute('activeBlock', '');	
}

function slideLeft() {
	clearInterval(sliderInterval);
	sliderInterval = setInterval(slideRight, sliderIntervalTime);

	var activeEl = document.querySelector('[activeBlock]'),
		activeElNum = +activeEl.getAttribute('posInSlider');

	if(activeElNum == 1) {
		activeEl.style.width = 0;
		activeEl.removeAttribute('activeBlock');
		slides[slidesCount - 1].style.width = getWidth.fullValue;
		slides[slidesCount - 1].setAttribute('activeBlock', '');
		return;
	}

	var prevEl = slides[activeElNum - 2];

	activeEl.style.width = 0;
	activeEl.removeAttribute('activeBlock');
	prevEl.style.width = getWidth.fullValue;
	prevEl.setAttribute('activeBlock', '');
}
