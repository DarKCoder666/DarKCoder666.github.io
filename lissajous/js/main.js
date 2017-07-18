var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d'),
	width = canvas.width = document.documentElement.clientWidth,
	height = canvas.height = document.documentElement.clientHeight,

	centerX = width / 2,
	centerY = height / 2,

	radius = 250,
	speed = 0.00005,
	x, y,

	a = 450,
	b = 400,
	fi = (b - 1) * Math.PI / (2 * b),
	time = 0,

	stepsVisibility = true;

if(width > height) {
	radius = height * 0.8 / 2;
} else {
	radius = width * 0.8 / 2;
}

render();

function render() {
	if( !stepsVisibility ) {
		ctx.clearRect(0, 0, width, height);
	}

	x = centerX + Math.sin(a * time + fi) * radius;
	y = centerY + Math.sin(b * time) * radius;

	ctx.beginPath();
	ctx.arc(x, y, 7, 0, Math.PI * 2, false);
	ctx.fill();


	time += speed;

	requestAnimationFrame(render);
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
	//////////////////////////////////////////////////////////////////////
	// Options
	var lis1 = document.getElementById('lissajous1'),
		lis2 = document.getElementById('lissajous2'),
		lis3 = document.getElementById('lissajous3'),
		lis4 = document.getElementById('lissajous4'),
		lis5 = document.getElementById('lissajous5'),
		lis6 = document.getElementById('lissajous6'),

		speedUp = document.getElementById('speedUp'),
		speedDown = document.getElementById('speedDown'),

		hideSteps = document.getElementById('hideSteps'),
		showSteps = document.getElementById('showSteps');

	lis1.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);
		
		a = 450;
		b = 400;
		time = 0;
	});

	lis2.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);

		a = 250;
		b = 300;
		time = 0;
	});

	lis3.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);

		a = 250;
		b = 200;
		time = 0;
	});

	lis4.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);

		a = 150;
		b = 200;
		time = 0;
	});

	lis5.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);

		a = 150;
		b = 100;
		time = 0;
	});

	lis6.addEventListener('click', function() {
		ctx.clearRect(0, 0, width, height);

		a = 50;
		b = 100;
		time = 0;
	});

	speedUp.addEventListener('click', function() {
		speed += 0.00001;
	});

	speedDown.addEventListener('click', function() {
		if( !(speed < 0.00002) ) {
			speed -= 0.00001;
		}
	});

	hideSteps.addEventListener('click', function() {
		stepsVisibility = false;
	});

	showSteps.addEventListener('click', function() {
		stepsVisibility = true;
	});
}
menuConfs();