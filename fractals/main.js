window.onload = function() {
	var canvas = document.getElementById('canvas');
	if(canvas && canvas.getContext) {
		var width = canvas.width = document.documentElement.clientWidth,
			height = canvas.height = document.documentElement.clientHeight,
			ctx = canvas.getContext('2d'),
			mode = "first";

		var p0 = {
			x:0,
			y: -321
		},
		p1 = {
			x: 278,
			y: 160
		},
		p2 = {
			x: -278,
			y: 160
		},
		tx = 1, ty = 1,
		counter = 0, dir = 'down',
		rotateAngle = 0;

		ctx.translate(width / 2, height / 2);

		menuConfs();
		draw();

		function draw() {
			ctx.clearRect(-width, -height, width*2, height*2);

			if(mode !== 'second') {
				ctx.save();
			}

			ctx.rotate(rotateAngle += 0.009);

			if(dir == 'up') {
				tx += 0.01;
				ty += 0.01;
				counter++;
			} else {
				tx -= 0.01;
				ty -= 0.01;
				counter--;
			}

			if(dir == 'down' && counter == -100) {
				dir = 'up';
			} else if(dir == 'up' && counter == 30) {
				dir = 'down';
			}


			sirepinski(p0, p1, p2, 4);
			requestAnimationFrame(draw);
			
			if(mode !== 'second') {
				ctx.restore();
			}
		}

		function sirepinski(p0, p1, p2, limit) {
			var pA = {
				x: (p0.x + p1.x) / 2 * tx,
				y: (p0.y + p1.y) / 2 * ty
			},
			pB = {
				x: (p1.x + p2.x) / 2 * tx,
				y: (p1.y + p2.y) / 2 * ty
			},
			pC = {
				x: (p0.x + p2.x) / 2 * tx,
				y: (p0.y + p2.y) / 2 * ty
			};

			if(mode == 'third') {
				if(limit > 0) {
					sirepinski(pA, pB, p1, limit - 1);
					sirepinski(pA, pC, p0, limit - 1);
					sirepinski(pB, pC, p2, limit - 1);
				} else {
					ctx.beginPath();
					ctx.moveTo(p0.x, p0.y);
					ctx.lineTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);
					ctx.lineTo(p0.x, p0.y);
					ctx.stroke();
				}
			} else {
				if(limit > 0) {
					sirepinski(pA, pB, p1, limit - 1);
					sirepinski(pA, pC, p0, limit - 1);
					sirepinski(pB, pC, p2, limit - 1);

					ctx.beginPath();
					ctx.moveTo(p0.x, p0.y);
					ctx.lineTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);
					ctx.lineTo(p0.x, p0.y);
					ctx.stroke();
				}
			}
		}

		function menuConfs() {
			var menu = document.querySelector('.menu'),
				humburger = document.querySelector('.humburger'),
				humburgerInner = document.querySelector('.humburgerInner'),
				isMenuActive = false;

			var first = document.getElementById("first"),
				second = document.getElementById("second"),
				third = document.getElementById("third");

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

			// //////////////////////////////////////////////////////////////

			first.onclick = function() {
				mode = 'first';
			};
			second.onclick = function() {
				mode = 'second';
			};
			third.onclick = function() {
				mode = 'third';
			};
		}
	}
}