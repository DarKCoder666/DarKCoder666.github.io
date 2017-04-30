function c14() {
	var theCanvas = document.getElementById('canvas14');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 300;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			// var img = new Image();
			// img.src = "img.jpg";
			var img = document.getElementById('img');
			ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);


			var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
			var pixels = imgData.data;
			var curRow = 0, maxRow = ctx.canvas.height;

			while(curRow < maxRow) {
				for (var i = 0; i < 5; i++) {
					var thisRowBytes = (curRow + i) * ctx.canvas.width * 3 * 4;
					for (var j = 0; j < ctx.canvas.width * 3; j += 4) {
						pixels[thisRowBytes + j] = 255 - pixels[thisRowBytes + j];
						pixels[thisRowBytes + j + 1] = 255 - pixels[thisRowBytes + j + 1];
						pixels[thisRowBytes + j + 2] = 255 - pixels[thisRowBytes + j + 2];
					}
				}
				curRow += 4;
			}

			ctx.putImageData(imgData, 0, 0);
		}
	}
}
 
function c13() {
	var theCanvas = document.getElementById('canvas13');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 300;
		var ctx = theCanvas.getContext("2d");
		if(ctx) {
			var squares = [
				{x: 10, y: 10, width: 50, height: 50, color: 'blue'},
				{x: 35, y: 35, width: 50, height: 50, color: 'red'},
				{x: 100, y: 10, width: 50, height: 50, color: 'blue'},
				{x: 125, y: 35, width: 50, height: 50, color: 'red'},
				{x: 190, y: 10, width: 50, height: 50, color: 'blue'},
				{x: 215, y: 35, width: 50, height: 50, color: 'red'},
				{x: 280, y: 10, width: 50, height: 50, color: 'blue'},
				{x: 305, y: 35, width: 50, height: 50, color: 'red'}
			];

			ctx.globalAlpha = 1.0;

			for (var i = 0; i < squares.length; i+=2) {
				
				ctx.fillStyle = squares[i].color;
				ctx.fillRect(squares[i].x, squares[i].y, squares[i].width, squares[i].height);
				ctx.fill();

				ctx.fillStyle = squares[i+1].color;
				ctx.fillRect(squares[i+1].x, squares[i+1].y, squares[i+1].width, squares[i+1].height);
				ctx.fill();

				ctx.globalAlpha -= 0.3;
			}
		}
	}
}

function c12() {
	var theCanvas = document.getElementById('canvas12');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 300;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.translate(theCanvas.width/2, theCanvas.height/2);

			ctx.beginPath();
			ctx.strokeStyle = "#444";
			ctx.arc(0, 0, 130, 0, Math.PI * 2);
			ctx.shadowColor = "#222";
			ctx.shadowOffsetX = 0;
			ctx.shadowOffsetY = 0;
			ctx.shadowBlur = 25;
			ctx.fill();

			var radian = (Math.PI / 180) * 1.5;
			ctx.strokeStyle = "#fff";
			for (var degrees = 0; degrees < 360; degrees += 1.5) {
				ctx.rotate(radian);
				ctx.beginPath();
				ctx.moveTo(-130, 0);
				ctx.lineTo(130, 0);
				ctx.stroke();
			}
		}
	}
}

function c11() {
	var theCanvas = document.getElementById('canvas11');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 750;
		theCanvas.height = 300;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.fillStyle = 'lightBlue';
			ctx.fillRect(20, 20, 200, 120);

			ctx.save();
			ctx.scale(2, 2);
			ctx.fillRect(120, 10, 200, 120);
			ctx.restore();

			ctx.fillRect(20, 150, 200, 120);
		}
	}
}

function c10() {
	var theCanvas = document.getElementById('canvas10');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 320;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			var img = new Image();
			img.src = "img.jpg";

			ctx.arc(theCanvas.width/2, theCanvas.height/2, 155, 0, Math.PI * 2);
			ctx.clip();

			img.onload = function() {
				ctx.drawImage(img, 0, 0, theCanvas.width, theCanvas.height);
			}
		}
	}
}

function c9() {
	var theCanvas = document.getElementById('canvas9');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			var linGrd = ctx.createLinearGradient(20,20, 20, 200);
			linGrd.addColorStop(0, "#f04");
			linGrd.addColorStop(0.5, "#1ff");
			linGrd.addColorStop(1, "#00f");

			ctx.fillStyle = linGrd;
			ctx.fillRect(20, 20, 260, 200);

			ctx.lineWidth = 3;
			ctx.strokeRect(20, 20, 260, 200);


			var radGrd = ctx.createRadialGradient(440, 120, 20, 400, 120, 100);
			radGrd.addColorStop(0, "#0f0");
			radGrd.addColorStop(0.5, "#00f");
			radGrd.addColorStop(1, "#f00");

			ctx.fillStyle = radGrd;
			ctx.beginPath();
			ctx.arc(400, 120, 100, 0, Math.PI * 2);
			ctx.fill();
			ctx.lineWidth = 3;
			ctx.stroke();
		}
	}
}

function c8() {
	var theCanvas = document.getElementById('canvas8');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			var theText = "Hello Canvas!";
			ctx.fillText(theText, 20, 20);

			ctx.font = "Italic 25pt Georgia";
			ctx.fillStyle = "orange";
			ctx.fillText(theText, 20, 60);

			ctx.font = "Bold 30pt Tahoma";
			ctx.strokeStyle = "lightGreen";
			ctx.textAlign = "";
			ctx.strokeText(theText, 20, 110);

			/////////////////////////////////////
			ctx.shadowColor = "rgba(0,0,0, .8)";
			ctx.shadowOffsetX = 10;
			ctx.shadowOffsetY = 5;
			ctx.shadowBlur = 10;

			ctx.fillStyle = 'blue';
			ctx.fillRect(400, 50, 100, 75);

		}
	}
}

function c7() {
	var theCanvas = document.getElementById('canvas7');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;
		var ctx = theCanvas.getContext('2d');

		var degrees = 197;
		var radians = (Math.PI / 180) * degrees;
		
		if(ctx) {
			ctx.strokeStyle = 'lightBlue';
			ctx.fillStyle = 'orange';
			ctx.lineWidth = 5;

			ctx.beginPath();
			ctx.arc(100, 125, 75, 0, Math.PI, true);
			ctx.arc(250, 125, 75, 0, Math.PI);
			ctx.fill();

			ctx.beginPath();
			ctx.arc(175, 125, 25, 0, Math.PI * 2);
			ctx.fill();

		}
	}
}

function c6() {
	var theCanvas = document.getElementById('canvas6');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;
		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.fillStyle = 'red';
			ctx.strokeStyle = 'blue';
			ctx.lineWidth = 5;

			ctx.beginPath();
			ctx.moveTo(20, 200);
			ctx.lineTo(40, 50);
			ctx.lineTo(80, 70);
			ctx.lineTo(100, 200);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(140, 200);
			ctx.lineTo(160, 50);
			ctx.lineTo(200, 70);
			ctx.lineTo(220, 200);
			ctx.closePath();
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(260, 200);
			ctx.lineTo(280, 50);
			ctx.lineTo(320, 70);
			ctx.lineTo(340, 200);
			ctx.fill();
			ctx.stroke()
		}
	}
}

function c5() {
	var theCanvas = document.getElementById('canvas5');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;

		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.strokeStyle = 'orange';
			ctx.fillStyle = 'blue';
			ctx.lineWidth = 15;

			ctx.fillRect(50, 50, 70, 120);
			ctx.strokeRect(50, 50, 70, 120);
		
			ctx.save();

			ctx.strokeStyle = 'yellow';
			ctx.fillStyle = 'pink';
			ctx.lineWidth = 5;
			
			ctx.fillRect(150, 50, 70, 120);
			ctx.strokeRect(150, 50, 70, 120);

			ctx.restore();

			ctx.fillRect(250, 50, 70, 120);
			ctx.strokeRect(250, 50, 70, 120);
		}
	}
}

function c4() {
	var theCanvas = document.getElementById('canvas4');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;

		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.lineWidth = 15;
			ctx.strokeStyle = 'Black';

			ctx.lineJoin = 'round';
			ctx.beginPath();
			ctx.moveTo(25, 200);
			ctx.lineTo(75, 100);
			ctx.lineTo(125, 200);
			ctx.stroke();
			
			ctx.lineJoin = 'bevel';
			ctx.beginPath();
			ctx.moveTo(150, 200);
			ctx.lineTo(200, 100);
			ctx.lineTo(250, 200);
			ctx.stroke();

			ctx.lineJoin = 'miter';
			ctx.beginPath();
			ctx.moveTo(275, 200);
			ctx.lineTo(325, 100);
			ctx.lineTo(375, 200);
			ctx.stroke();
		}
	}
}

function c3() {
	var theCanvas = document.getElementById('canvas3');
	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;

		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.strokeStyle = 'cyan';
			ctx.lineWidth = 1;
			ctx.beginPath();
			ctx.moveTo(30, 40);
			ctx.lineTo(30, 210);
			ctx.moveTo(520, 40);
			ctx.lineTo(520, 210);
			ctx.stroke();

			ctx.strokeStyle = 'black';
			ctx.lineWidth = 25;
			ctx.lineCap ="butt";
			ctx.beginPath();
			ctx.moveTo(30, 60);
			ctx.lineTo(520, 60);
			ctx.stroke();
			ctx.lineCap = 'round';
			ctx.beginPath();
			ctx.moveTo(30, 130);
			ctx.lineTo(520, 130);
			ctx.stroke();
			ctx.lineCap = "square";
			ctx.beginPath();
			ctx.moveTo(30, 200);
			ctx.lineTo(520, 200);
			ctx.stroke();
		}
	}
}

function c2() {
	var theCanvas = document.getElementById('canvas2');

	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;

		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			for (var i = 0; i <= 10; i++) {
				ctx.beginPath();
				ctx.lineWidth = i+1;
				ctx.moveTo(25, 25 + i * 20);
				ctx.lineTo(525, 25 + i * 20);
				ctx.stroke();
			}
		}
	}
}

function c1() {
	var theCanvas = document.getElementById('canvas1');

	if(theCanvas && theCanvas.getContext) {
		theCanvas.width = 550;
		theCanvas.height = 250;

		var ctx = theCanvas.getContext('2d');
		if(ctx) {
			ctx.fillStyle = "lightGreen";
			ctx.fillRect(50, 50, 75, 125);

			ctx.lineWidth = 2;
			ctx.strokeStyle = "rgba(0,0,255, 0.4)";
			ctx.strokeRect(150,50, 75, 125);
		
			ctx.strokeStyle = 'orange';
			ctx.fillStyle = 'lightBlue';
			ctx.lineWidth = 7;
			ctx.strokeRect(250, 50, 75, 125);
			ctx.fillRect(250, 50, 75, 125);
		
			ctx.clearRect(15, 100, 320, 30);
		}
	}
}

window.onload = function() {
	c1();
	c2();
	c3();
	c4();
	c5();
	c6();
	c7();
	c8();
	c9();
	c10();
	c11();
	c12();
	c13();
	c14();
}

Number.prototype.degree = function() {
	return this * Math.PI / 180;
}




// var canvas = document.getElementById('canvas'),
//     ctx = canvas.getContext('2d');

// canvas.width = 640;
// canvas.height = 480;
////////////////////////////////////////////////
// ctx.strokeRect(16, 16, 264, 260);
// ctx.fillRect(20, 20, 256, 256);

// for (var i = 0; i < 8; i += 2) {
//   for (var j = 0; j < 8; j += 2) {
//     ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
//     ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//   }
// }
////////////////////////////////////////////////

// ctx.beginPath();

// ctx.arc(130, 120, 100, Math.PI * 1.5, Math.PI, true);

// ctx.moveTo(25, 30);
// ctx.lineTo(100, 33);
// ctx.lineTo(200, 2);
// ctx.lineTo(150, 200);
// ctx.stroke();
// ctx.closePath();
////////////////////////////////////////////////

// ctx.beginPath();

// ctx.quadraticCurveTo(22, 100, 100, 22);
// ctx.quadraticCurveTo(33, 120, 110, 265);
// ctx.quadraticCurveTo(100, 22, 445, 265);
// ctx.stroke();

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

