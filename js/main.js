window.onload = function() {
	var canvas = document.getElementById('podcards'),
		step = 15,
		numShapes = 100,
		direction = 'toMyself',
		itemsType = 'image',
		imagesSrc = [
			'img/images.jpg',
			'img/images2.jpg',
			'img/images3.jpg',
			'img/images4.jpg',
			'img/images5.jpg',
			'img/images6.jpg',
			'img/images7.jpg',
			'img/images8.jpg',
			'img/images9.jpg',
			'img/images10.jpg'
		];

	if(canvas && canvas.getContext) {
		canvas.width = 10000;
		canvas.height = 10000;

		var ctx = canvas.getContext('2d'),
			fl = 400,
			shapes = [],
			width = canvas.width = document.documentElement.clientWidth,
			height = canvas.height = document.documentElement.clientHeight;

		for (var i = 0; i < imagesSrc.length; i++) {
			var img = new Image();
			img.src = imagesSrc[i];
			imagesSrc[i] = img;
		}

		for (var i = 0; i < numShapes; i++) {
			shapes[i] = {
				x: randomInteger(-1000, 1000),
				y: randomInteger(-1000, 1000),
				z: randomInteger(0, 10000),
				letter: String.fromCharCode(randomInteger(65, 90)),
				img: imagesSrc[randomInteger(0,9)]
			};
		}


		ctx.translate(width / 2, height / 2);

		function update() {

			ctx.clearRect(-width / 2, -height / 2, width, height);
			shapes.sort(zsort);
			for (var i = 0; i < numShapes; i++) {
	
				var shape = shapes[i],
					perspective = fl / (fl + shape.z);

				ctx.save();
				ctx.scale(perspective, perspective);
				ctx.translate(shape.x, shape.y);
				switch(itemsType) {
					case 'circle': 
						ctx.beginPath();
						ctx.arc(-100,-100, 100, 0, Math.PI * 2);
						ctx.fill();
						break;
					case 'square':
						ctx.fillRect(-100, -100, 200, 200);
						break;
					case 'letter':
						var theLetter = shape.letter;
						ctx.font = "55pt PT Sans";
						ctx.fillText(theLetter, -100, -100);
						break;
					case 'image':
						ctx.drawImage(shape.img, -100, -100, 240, 150);
				}
				
				ctx.restore();

				if(direction == 'toMyself') {
					shape.z -= step;
					if(shape.z < 0) {
						shape.z = 10000;
					}
				} else {
					shape.z += step;
					if(shape.z > 10000) {
						shape.z = 0;
					}
				}
			}

			requestAnimationFrame(update);
		}

		function init() {
			menuConfs();
			update();
		}
		init();
	}
	
	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	}

	function menuConfs() {
		var menu = document.querySelector('.menu'),
			humburger = document.querySelector('.humburger'),
			humburgerInner = document.querySelector('.humburgerInner'),
			isMenuActive = false;

		humburger.addEventListener('click', function() {
			if(isMenuActive) {
				menu.style.left = "-250px";
				isMenuActive = false;
				humburgerInner.classList.remove('activeHumburger');
			} else {
				menu.style.left = 0;
				isMenuActive = true;
				humburgerInner.className += ' activeHumburger';
			}
		})

		menu.style.height = document.documentElement.clientHeight + "px";
	}

	function zsort(cardA, cardB) {
		return cardB.z - cardA.z;
	}

	var	faster = document.getElementById('faster'),
		slower = document.getElementById('slower'),
		standart = document.getElementById('standart'),
		toMyself = document.getElementById('toMyself'),
		outMyself = document.getElementById('outMyself'),
		circle = document.getElementById('circle'),
		square = document.getElementById('square'),
		letter = document.getElementById('letter'),
		image = document.getElementById('image');
	
	//Speed
	faster.addEventListener('click', function() {
		step += 10;
	});
	slower.addEventListener('click', function() {
		if(!(step < 20)) {
			step -= 10;
		} else if(step < 20 && step > 5) {
			step -= 2;
		}
	});
	standart.addEventListener('click', function() {
		step = 15;
	});

	//Items Type
	circle.addEventListener('click', function() {
		itemsType = 'circle';
	});
	square.addEventListener('click', function() {
		itemsType = 'square';
	});
	letter.addEventListener('click', function() {
		itemsType = 'letter';
	});
	image.addEventListener('click', function() {
		itemsType = 'image';
	});

	//Directions
	toMyself.addEventListener('click', function() {
		direction = 'toMyself';
	});
	outMyself.addEventListener('click', function() {
		direction = 'outMyself';
	});
}