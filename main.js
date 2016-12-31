function TheSlider(sliderSettings) {
	//Настройка слайдра по умолчанию
	var sliderWrapId = sliderSettings.sliderWrapId,
		widthInPercents = 50,
		widthInPix,
		slideHeight, //Значение по умолчанию объявляется ниже.
		autoplay = true,
		intervalTime = 3000,
		duration = 500,
		switches = true,
		switchesType = 'images',
		isWidthInPix, //Нужно для проверки, в чем заданна ширина.
		arrow = 'https://cdn4.iconfinder.com/data/icons/ui-icon-part-3/131/slider-512.png';

	//Настройка слайдера по параметрам, если они есть,
	//Иначе остаётся значение по умолчанию.
	(function() {
		//Если ширина заданна числовым типом, преобразуем его в строковой тип.
		if(!isNaN(sliderSettings.width)) {
			sliderSettings.width = sliderSettings.width + '';
	 	}

		if(sliderSettings.sliderWrapId == undefined) {
			return alert('id блока слайдера не введён');
		}

		//Если ширина задана и в переданном значении нету знака '%', то выполняется if(...),
		//Иначе, вырезаем значение ширины в процентах без знака '%'.
		if(sliderSettings.width !== undefined && sliderSettings.width.indexOf('%') == -1) {
			widthInPix = sliderSettings.width;
			isWidthInPix = true;
		} else if(sliderSettings.width.indexOf('%') !== -1){
			widthInPercents = sliderSettings.width.slice(0, -1);
			isWidthInPix = false;
		}

		if(sliderSettings.height !== undefined) {
			slideHeight = sliderSettings.height;
		}

		if(sliderSettings.autoplay !== undefined) {
			autoplay = sliderSettings.autoplay;
		}

		if(sliderSettings.intervalTime !== undefined) {
			intervalTime = sliderSettings.intervalTime;
		}

		if(sliderSettings.intervalTime !== undefined) {
			duration = sliderSettings.duration;
		}

		if(sliderSettings.switches !== undefined) {
			switches = sliderSettings.switches;

			if(sliderSettings.switchesType !== undefined) {
				switchesType = sliderSettings.switchesType;
			}
		}


		if(sliderSettings.arrow !== undefined) {
			arrow = sliderSettings.arrow;
		}
	})();
	///////////////////////////////////////////////////////
	//Перевод процентов в пиксели.
	var percentsInPix = Math.ceil(document.documentElement.clientWidth * (widthInPercents / 100));

	function setWidth(elem) {
		if(isWidthInPix){
			elem.style.width = widthInPix + 'px';
		} else {
			elem.style.width = percentsInPix + 'px';
		}		
	}

	function getWidth() {
		if(isWidthInPix){
			return widthInPix;
		} else {
			return percentsInPix;
		}	
	}

	slideHeight = getWidth() * 2/3;

	function setTransition() {
		slider.style.transition = 'all ' + (duration / 1000) + 's ease-in-out';
	}

	function clearTransition() {
		slider.style.transition = 'none';
	}

	var sliderWrap = document.getElementById(sliderWrapId),
		slides = sliderWrap.children,
		slidesCount = slides.length,
		slider = document.createElement('div'),
		controllersWrap = document.createElement('div');

	sliderWrap.style.margin = '0 auto';
	sliderWrap.style.position = 'relative';
	setWidth(sliderWrap);
	
	//Переносим все картинки в блок slider. А его, в главный блок.
	(function() {
		slider.style.width = getWidth() * slidesCount + 'px';
		setTransition();

		slider.id = 'slider-' + sliderWrapId;
		with(slider.style) {
			position = 'relative';
			display = 'flex';
			flexDirection = 'row';
			left = 0;
		}

		var slidesHeightsSum = 0;
		console.log(getWidth() * 2/3);

		//Задаём картинке нужную ширину и атрибут, затем передаём её объекту data
		for (var i = 0; i < slidesCount; i++) {
			var imgUrl = slides[0].getAttribute('data-image');
			if(i == 0) {
				slides[0].id = sliderWrapId + '-active';
			}
			setWidth(slides[0]);
			slides[0].setAttribute('img-num', i + 1);
			slides[0].setAttribute('slider-pos', -i);
			slides[0].setAttribute('img-id', i + 1);

			with(slides[0].style) {
				backgroundImage = 'url(' + imgUrl + ')';
				backgroundSize = 'cover';
				backgroundPosition = 'center';
				backgroundRepeat = 'no-repeat';
				height = slideHeight + 'px';
			}

			slider.appendChild(slides[0]);
		}

		sliderWrap.innerHTML = '';

		sliderWrap.style.overflow = 'hidden';
		sliderWrap.appendChild(slider);
	})();

	// Создание контроллеров и их настройка.
	(function() {
		if(!switches) {
			controllersWrap.style.display = 'none';	
		} else {
			with(controllersWrap.style) {
				width = '100%';
				display = 'flex';
				flexDirection = 'row';
				flexWrap = 'wrap';
				justifyContent = 'center';
			}
		}

		for (var i = 0; i < slidesCount; i++) {
			var controller = document.createElement('div');
	
			if(switchesType == 'images') {
				var controllerImg = document.createElement('img'),			
					imgSrc = slider.children[i].getAttribute('data-image');

				controllerImg.setAttribute('src', imgSrc);
				controllerImg.width = 30;

				controller.appendChild(controllerImg);
			} else {
				with(controller.style) {
					width = '15px';
					height = '15px';
					borderRadius = '50%';
					transition = 'all .5s ease';
				}
				controller.setAttribute('class', 'controller-of-' + sliderWrapId);
			}

			controller.setAttribute('pos', i + 1);
			if(controller.getAttribute('pos') == 1) {
				controller.id = 'activeController-' + sliderWrapId;
			}

			with(controller.style) {
				margin = '5px';
				cursor = 'pointer';
			}

			if(isWidthInPix){
				controller.setAttribute('img-pos', i * -widthInPix + 'px');	
			} else {
				controller.setAttribute('img-pos', i * -percentsInPix + 'px');
			}

			controller.setAttribute('img-pos', i + 1);

			controller.onclick = function() {
				clearInterval(beginSliding);
				beginSliding = sliderAutoplay();

				var needenImg = document.querySelector('#' + sliderWrapId + ' [img-id=\"' + this.getAttribute('img-pos') + '\"]'),
					imgPos = +needenImg.getAttribute('slider-pos') * getWidth();

				slider.style.left = imgPos + 'px';

				removingAllActiveControllersId();
				this.id = 'activeController-' + sliderWrapId;
				removingAllActiveElementsById();
				needenImg.id = sliderWrapId + '-active';
			}

			controllersWrap.appendChild(controller);
		}

		sliderWrap.appendChild(controllersWrap);
	})();

	//Создание стрелок и их настройка.
	(function() {
		var leftArrow = document.createElement('img');
		var rightArrow = document.createElement('img');
		
		leftArrow.setAttribute('src', arrow);
		rightArrow.setAttribute('src', arrow);

		leftArrow.id = sliderWrapId + '-leftArrow';
		rightArrow.id = sliderWrapId + '-rightArrow';

		with(leftArrow.style) {
			height = sliderWrap.offsetHeight / 5 + 'px';
			position = 'absolute';
			left = '5px';
			top = sliderWrap.offsetHeight/2 - sliderWrap.offsetHeight/10 + 'px';
			cursor = 'pointer';
			opacity = 0.4;
			transition = 'all .4s ease';
			filter = 'drop-shadow(0px 0px 5px #fff)';
		}
		with(rightArrow.style) {
			height = sliderWrap.offsetHeight / 5 + 'px';
			position = 'absolute';
			right = '5px';
			top = sliderWrap.offsetHeight/2 - sliderWrap.offsetHeight/10 + 'px';
			cursor = 'pointer';
			transform = 'rotate(180deg)';
			opacity = 0.4;
			transition = 'all .4s ease';
			filter = 'drop-shadow(0px 0px 5px #fff)';
		}

		rightArrow.onclick = function() {
			clearInterval(beginSliding);
			next();
			beginSliding = sliderAutoplay();
		};
		leftArrow.onclick = function() {
			clearInterval(beginSliding);
			prev();
			beginSliding = sliderAutoplay();
		};

		leftArrow.onmouseout = function() {
			this.style.opacity = '0.2';
		};
		rightArrow.onmouseout = function() {
			this.style.opacity = '0.2';
		};

		leftArrow.onmouseover = function(e) {
			this.style.opacity = '0.9';
		};
		rightArrow.onmouseover = function(e) {
			this.style.opacity = '0.9';
		};

		sliderWrap.appendChild(leftArrow);
		sliderWrap.appendChild(rightArrow);
	})();

	//Работа слайдера в автономном режиме.
	var sliderAutoplay = function() {
		if(!autoplay) {
			return;
		}
		var int = setInterval(next, intervalTime);
		return int;
	};

	var beginSliding = sliderAutoplay();

	function next() {
		var activeElement = document.getElementById(sliderWrapId + '-active'),
		activeElementNum = activeElement.getAttribute('img-num'),
		activeElementSliderPos = activeElement.getAttribute('slider-pos');

		var	nextElement = document.querySelector('#' + sliderWrapId + ' [img-num=\"' + (+activeElementNum + 1) + '\"]');

		removingAllActiveElementsById();
		if(nextElement == null) {
			clearTransition();
			slider.appendChild(slider.firstChild);
			slider.lastChild.id = sliderWrapId + '-active';
			setSliderPosToImages();
			setImgNum();
			slider.style.left = (+activeElementSliderPos + 1) * getWidth() + 'px';

			setTimeout(function() {
				setTransition();
				slider.style.left = +slider.lastChild.getAttribute('slider-pos') * getWidth() + 'px';
			}, 40);

			//Задаём нужному контроллеру id  active.
			var nextElemId = slider.lastChild.getAttribute('img-id');
			removingAllActiveControllersId();
			controllersWrap.children[+nextElemId - 1].id = 'activeController-' + sliderWrapId;
		} else {
			var nextElementSliderPos = nextElement.getAttribute('slider-pos');

			nextElement.id = sliderWrapId + '-active';
			slider.style.left = +nextElementSliderPos * getWidth() + 'px';	

			//Задаём нужному контроллеру id  active.
			var nextElemId = nextElement.getAttribute('img-id');
			removingAllActiveControllersId();
			controllersWrap.children[+nextElemId - 1].id = 'activeController-' + sliderWrapId;		
		}
	}

	function prev() {
		var activeElement = document.getElementById(sliderWrapId + '-active'),
		activeElementNum = activeElement.getAttribute('img-num'),
		activeElementSliderPos = activeElement.getAttribute('slider-pos');

		removingAllActiveElementsById();

		if(+activeElementNum == 1) {

			clearTransition();
			slider.lastChild.id = sliderWrapId + '-active';
			slider.insertBefore(slider.lastChild, slider.firstChild);
			setSliderPosToImages();
			setImgNum();
			slider.style.left = -1 * getWidth() + 'px';

			setTimeout(function() {
				setTransition();
				slider.style.left = 0;
			}, 5);

			//Задаём нужному контроллеру id  active.
			var nextElemId = slider.firstChild.getAttribute('img-id');
			removingAllActiveControllersId();
			controllersWrap.children[+nextElemId - 1].id = 'activeController-' + sliderWrapId;
		} else {
			var	prevElement = document.querySelector('#' + sliderWrapId + ' [img-num=\"' + (+activeElementNum - 1) + '\"]'),	
				prevElementSliderPos = prevElement.getAttribute('slider-pos');

			prevElement.id = sliderWrapId + '-active';

			slider.style.left = +prevElementSliderPos * getWidth() + 'px';

			//Задаём нужному контроллеру id  active.
			var prevElemId = prevElement.getAttribute('img-id');
			removingAllActiveControllersId();
			controllersWrap.children[+prevElemId - 1].id = 'activeController-' + sliderWrapId;		
		}
	}

	function setSliderPosToImages() {
		for (var i = 0; i < slidesCount; i++) {
			slider.children[i].setAttribute('slider-pos', -i);
		}
	}

	function setImgNum() {
		for (var i = 0; i < slidesCount; i++) {
			slider.children[i].setAttribute('img-num', i + 1);
		}
	}

	//Функция сбрасывания всех id="active" в рамках данного слайдера.
	function removingAllActiveControllersId() {
		var activeElems = document.querySelectorAll('#' + sliderWrapId + ' #' + 'activeController-' + sliderWrapId);
		for (var i = 0; i < activeElems.length; i++) {
			activeElems[i].id = '';
		}
	}
	function removingAllActiveElementsById() {
		var activeElems = document.querySelectorAll('#' + sliderWrapId + ' #' +  sliderWrapId +'-active');
		for (var i = 0; i < activeElems.length; i++) {
			activeElems[i].id = '';
		}
	}

	//Немного стилей.
	(function() {
		var styles = document.createElement('style');
		var theStyles = '#activeController-' + sliderWrapId + 
			'{ background-color: red}' +
			'.controller-of-' + sliderWrapId + 
			'{ background-color: #ccc}';
		styles.innerHTML = theStyles;
		document.body.appendChild(styles);
	})();
}

var slider1 = new TheSlider({
	sliderWrapId: 'sliderWrap',
	width: '50%',
	autoplay: true,
	duration: 400,
	intervalTime: 4000,
	switches: true,
	switchesType: 'imagess',
	arrow: 'arrow.png'
});