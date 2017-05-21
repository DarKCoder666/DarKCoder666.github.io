window.onload = function() {
	var canvas = document.getElementById('canvas');
	if(canvas && canvas.getContext) {
		ctx = canvas.getContext('2d');

		var width = canvas.width = document.documentElement.clientWidth,
			height = canvas.height = document.documentElement.clientHeight,
			fl = 300,
			numCards = 300,
			cards = [],
			centerZ = 3000,
			radius = 1200,
			speed = 0.01,
			baseAngle = 0,
			spiralType = 'pointer';

		canvas.addEventListener('mousemove', function(event) {
			speed = (event.clientX - width/2) * 0.0003;
		});

		window.addEventListener('scroll', function(event) {
			console.log(event);
		});

		for (var i = 0; i < numCards; i++) {
			var card = {
				y: 2000 - 4000 / numCards * i,
				angle: 0.1 * i
			}
			card.x = Math.cos(card.angle) * radius;
			card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
			cards.push(card);
		}

		ctx.translate(width/2, height/2);

		update();

		function update() {
			baseAngle += speed;
			ctx.clearRect(-width/2, -height/2, width, height);

			if(spiralType == 'linear') {
				ctx.beginPath();
			}

			for (var i = 0; i < numCards; i++) {
				var card = cards[i],
					perspective = fl / (fl + card.z);

				ctx.save();
				ctx.scale(perspective, perspective);
				ctx.translate(card.x, card.y);

				if(spiralType == 'linear') {
					if(i == 0) {
						ctx.moveTo(0,0);
					} else {
						ctx.lineTo(0,0);
					}
				} else if(spiralType == 'pointer') {
					ctx.beginPath();
					ctx.arc(-10, -10, 20, 0, Math.PI * 2);
					ctx.fill();					
				}


				ctx.restore();

				card.x = Math.cos(card.angle + baseAngle) * radius;
				card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
			}

			if(spiralType == 'linear') {
				ctx.stroke();
			}

			requestAnimationFrame(update);
		}
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
		//////////////////////////////////////////////////////////////////////
		// Options
		var linearType = document.getElementById('linear'),
			pointerType = document.getElementById('pointer');

		linearType.addEventListener('click', function() {
			spiralType = 'linear';
		});
		pointerType.addEventListener('click', function() {
			spiralType = 'pointer';
		});
	}
	menuConfs();


}