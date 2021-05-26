var spritesheet = 
{
	"frames": [
		{
			"frame": {
				"x": 1,
				"y": 1,
				"w": 83,
				"h": 144
			},
			"sourceSize": {
				"w": 83,
				"h": 144
			}
		},
		{
			"frame": {
				"x": 86,
				"y": 1,
				"w": 55,
				"h": 141
			},
			"sourceSize": {
				"w": 55,
				"h": 141
			}
		},
		{
			"frame": {
				"x": 143,
				"y": 1,
				"w": 81,
				"h": 142
			},
			"sourceSize": {
				"w": 81,
				"h": 142
			}
		},
		{
			"frame": {
				"x": 226,
				"y": 1,
				"w": 77,
				"h": 143
			},
			"sourceSize": {
				"w": 77,
				"h": 143
			}
		},
		{
			"frame": {
				"x": 305,
				"y": 1,
				"w": 82,
				"h": 141
			},
			"sourceSize": {
				"w": 82,
				"h": 141
			}
		},
		{
			"frame": {
				"x": 389,
				"y": 1,
				"w": 79,
				"h": 143
			},
			"sourceSize": {
				"w": 79,
				"h": 143
			}
		},
		{
			"frame": {
				"x": 470,
				"y": 1,
				"w": 80,
				"h": 141
			},
			"sourceSize": {
				"w": 80,
				"h": 141
			}
		},
		{
			"frame": {
				"x": 552,
				"y": 1,
				"w": 80,
				"h": 140
			},
			"sourceSize": {
				"w": 80,
				"h": 140
			}
		},
		{
			"frame": {
				"x": 634,
				"y": 1,
				"w": 80,
				"h": 142
			},
			"sourceSize": {
				"w": 80,
				"h": 142
			}
		},
		{
			"frame": {
				"x": 716,
				"y": 1,
				"w": 80,
				"h": 144
			},
			"sourceSize": {
				"w": 80,
				"h": 144
			}
		},
		{
			"frame": {
				"x": 798,
				"y": 1,
				"w": 83,
				"h": 144
			},
			"sourceSize": {
				"w": 83,
				"h": 144
			}
		}
	]
}
    

let numbers_img = new Image();
numbers_img.src = '../assets/img/spritesheet.png';
document.body.appendChild(numbers_img);

const canvas_count = document.getElementById('canvas_count');
const ctx_count = canvas_count.getContext('2d');

function drawNumber(i){
  ctx_count.drawImage(numbers_img, spritesheet.frames[i].frame.x,
    spritesheet.frames[i].frame.y,
    spritesheet.frames[i].frame.w,
    spritesheet.frames[i].frame.h, 55, 0,
    spritesheet.frames[i].sourceSize.w,
    spritesheet.frames[i].sourceSize.h);
}

function drawNumberDouble(ten, num){
  ctx_count.drawImage(numbers_img, spritesheet.frames[ten].frame.x,
		spritesheet.frames[ten].frame.y,
		spritesheet.frames[ten].frame.w,
		spritesheet.frames[ten].frame.h, 30, 0,
		spritesheet.frames[ten].sourceSize.w,
		spritesheet.frames[ten].sourceSize.h);

	ctx_count.drawImage(numbers_img, spritesheet.frames[num].frame.x,
		spritesheet.frames[num].frame.y,
		spritesheet.frames[num].frame.w,
		spritesheet.frames[num].frame.h, 80, 0,
		spritesheet.frames[num].sourceSize.w,
		spritesheet.frames[num].sourceSize.h);
}

const button = document.getElementById('startButton');
button.onclick = function() {
	animateCount();
	button.disabled = "disabled";
};

const cycleLoop = [0,1,2,3,4,5,6,7,8,9,10];
let currentLoopIndex = 0;
let delay = 500;n 

function animateCount() {

	if (currentLoopIndex > cycleLoop.length - 1) {
		return;//Stops the loop
	}
	else if(currentLoopIndex >= 10)
	{
		ctx_count.clearRect(0, 0, canvas_count.width, canvas_count.height);
		drawNumberDouble(1,0);
	}
	else
	{
		ctx_count.clearRect(0, 0, canvas_count.width, canvas_count.height);
		drawNumber(cycleLoop[currentLoopIndex]);
	}
	currentLoopIndex++;
	setTimeout(animateCount, delay);
}