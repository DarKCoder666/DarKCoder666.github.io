var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');

var width = canvas.width = document.documentElement.clientWidth,
	height = canvas.height = document.documentElement.clientHeight;

var points = [],
	pointsCount = 25;

var userPos = {x: width/2, y: height/2},
	minDistance = 150;

function getX() {
	return Math.round(Math.random() * width);
}
function getY() {
	return Math.round(Math.random() * height);
}
function getRandNum(max) {
	return Math.round(Math.random() * max * 2) - max + 0.1;
}

function xSort(a, b) {
	return a.x - b.x;
}


for (var i = 0; i < pointsCount; i++) {
	var point = {
		x: getX(),
		y: getY(),
		speedX: getRandNum(2),
		speedY: getRandNum(2)
	};
	points.push(point);
}

document.body.addEventListener('mousemove', function(event) {
	userPos.x = event.clientX;
	userPos.y = event.clientY;
});

update();

function update() {
	ctx.clearRect(0, 0, width, height);
	ctx.fillRect(0,0, width, height);
	var nearlyPoints = [];

	for (var i = 0; i < pointsCount; i++) {
		var point = points[i],
			d = Math.sqrt((point.x - userPos.x)*(point.x - userPos.x) + (point.y - userPos.y)*(point.y - userPos.y));


		if(point.x < 0) {
			point.x = width;
		}
		if(point.x > width) {
			point.x = 0;
		}
		if(point.y > height) {
			point.y = 1;
		}
		if(point.y < 0) {
			point.y = height;
		}

		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = '#ffe';
		ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();

		if(d < minDistance) {
			nearlyPoints.push(point);
		}
		point.x += point.speedX;
		point.y += point.speedY;
	}

	nearlyPoints.sort(xSort);

	ctx.beginPath();
	ctx.strokeStyle = 'red';
	ctx.lineWidth = .1;
	for (var i = 1; i < nearlyPoints.length; i++) {
		for (var j = 0; j < nearlyPoints.length; j++) {
			ctx.moveTo(nearlyPoints[i].x, nearlyPoints[i].y);
			ctx.lineTo(nearlyPoints[j].x, nearlyPoints[j].y);
		}
	}
	ctx.stroke();

	requestAnimationFrame(update);
}