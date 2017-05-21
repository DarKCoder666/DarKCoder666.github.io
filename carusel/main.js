window.onload = function() {
	var canvas = document.getElementById('canvas');
	if(canvas && canvas.getContext) {
		ctx = canvas.getContext('2d');

		var width = canvas.width = document.documentElement.clientWidth,
			height = canvas.height = document.documentElement.clientHeight,
			fl = 300,
			numCards = 10,
			radius = 1000,
			cards = [],
			centerZ = 1000,
			speed = 0.01,
			yPos = 0;
			baseAngle = 0;

		document.body.addEventListener('mousemove', function(event) {
			speed = (event.clientX - width/2) * 0.0001;
		});
		document.body.addEventListener('mousemove', function(event) {
			yPos = -(event.clientY - height/2);
		});

		for (var i = 0; i < numCards; i++) {
			var card = {
				y: 0,
				angle: Math.PI * 2 / numCards * i,
				img: document.createElement('img')
			}
			card.x = Math.cos(card.angle) * radius;
			card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
			card.img.src = 'img/images' + (i+1 + '.jpg');
			cards.push(card);
		}

		ctx.translate(width/2, height/2);

		update();

		function update() {
			baseAngle += speed;
			cards.sort(zSort);
			ctx.clearRect(-width/2, -height/2, width, height);

			for (var i = 0; i < numCards; i++) {
				var card = cards[i],
					perspective = fl / (fl + card.z);

				if(+(card.y - yPos) < 10 && +(card.y - yPos) > -10) {
					card.y = yPos;
				} else if(card.y !== yPos && card.y > yPos) {
					card.y -= 10;
				} else if(card.y !== yPos && card.y < yPos) {
					card.y += 10;
				}

				ctx.save();
				ctx.scale(perspective, perspective);
				ctx.translate(card.x, card.y);

				ctx.translate(-card.img.width / 2, -card.img.height / 2);
				ctx.drawImage(card.img, 0, 0);

				ctx.restore();

				card.x = Math.cos(card.angle + baseAngle) * radius;
				card.z = centerZ + Math.sin(card.angle + baseAngle) * radius;
			}
			requestAnimationFrame(update);
		}
	}

	function zSort(a, b) {
		return b.z - a.z;
	}
	
	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	}
}

