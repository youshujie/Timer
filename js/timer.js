var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var radius = 8;
var marginTop = 50;
var marginLeft = 30;

render(context);

function render(cxt) {
	var hours = 12;
	var minutes = 34;
	var seconds = 56;

	renderDigit(marginLeft, marginTop, parseInt(hours/10), cxt);
	renderDigit(marginLeft+15*(radius+1), marginTop, parseInt(hours%10), cxt);
	renderDigit(marginLeft+30*(radius+1), marginTop, 10, cxt);
	renderDigit(marginLeft+39*(radius+1), marginTop, parseInt(minutes/10), cxt);
	renderDigit(marginLeft+54*(radius+1), marginTop, parseInt(minutes%10), cxt);
	renderDigit(marginLeft+69*(radius+1), marginTop, 10, cxt);
	renderDigit(marginLeft+78*(radius+1), marginTop, parseInt(seconds/10), cxt);
	renderDigit(marginLeft+93*(radius+1), marginTop, parseInt(seconds%10), cxt);
}

function renderDigit(x, y, num, cxt) {
	cxt.fillStyle = "rgb(0, 102, 153)";

	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if (digit[num][i][j] == 1) {
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1), y+i*2*(radius+1)+(radius+1), radius, 0, 2*Math.PI);
				cxt.closePath();

				cxt.fill();
			}
		}
	}
}