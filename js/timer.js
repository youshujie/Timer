var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
var radius = 8;
var marginTop = 50;
var marginLeft = 30;

const endTime = new Date(2017,0,21,1,1,1);
var curShowTimeSeconds = 0;

curShowTimeSeconds = getCurrentShowTimeSeconds();
render(context);

function render(cxt) {
	var hours = parseInt(curShowTimeSeconds / 3600);
	var minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60);
	var seconds = parseInt(curShowTimeSeconds % 60);

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

function getCurrentShowTimeSeconds() {
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret / 1000);
	console.log(ret);
	return ret >= 0 ? ret : 0;
}