var c = document.getElementById("canvas");
var ctx = c.getContext("2d");


/***** Curver Text *****/
function drawTextAlongArc(context, str, centerX, centerY, radius, angle){
                context.save();
                context.translate(centerX, centerY);
                context.rotate(-1 * angle / 2);
                context.rotate(-1 * (angle / str.length) / 2);
                for (var n = 0; n < str.length; n++) {
                    context.rotate(angle / str.length);
                    context.save();
                    context.translate(0, -1 * radius);
                    var char = str[n];
                    context.fillText(char, 0, 0);
                    context.restore();
                }
                context.restore();
}
            
window.onload = function(){
  
  ctx.font = "37px Comic Sans MS";
  ctx.textAlign = "center";
  ctx.fillStyle = "red";
  
  var centerX = canvas.width / 2;
  var centerY = 295;
  var angle = Math.PI * 0.5; //radians
  var radius = 250;
  drawTextAlongArc(ctx, "Let's Travel", centerX, centerY, radius, angle);
};

/***** Sky *****/
ctx.beginPath();
ctx.arc(250,250,225,0,7);
ctx.fillStyle = '#68c3d9';
ctx.fill();
ctx.lineWidth = 50;
ctx.strokeStyle = '#86cfe0';
ctx.stroke();
ctx.closePath();



/***** Sun *****/
ctx.beginPath();
ctx.arc(320,80,40,0,7);
ctx.fillStyle = 'rgba(240,216,76,0.8)';
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(242,222,102,0.3)';
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.arc(320,80,25,0,7);
ctx.fillStyle = 'rgba(234,200,0,0.8)';
ctx.fill();
ctx.lineWidth = 10;
ctx.strokeStyle = 'rgba(238,211,50,0.5)';
ctx.stroke();
ctx.closePath();



/***** Hill *****/
ctx.beginPath();
ctx.lineJoin = 'round';
ctx.arc(250,250,250,0.3,2.8);
ctx.fillStyle = '#51b432';
ctx.fill();
ctx.quadraticCurveTo(250, 100, 350, 200);
ctx.fill();
ctx.closePath();

/***** Ground *****/
ctx.beginPath();
ctx.arc(250,250,235,0.5,2.6);
ctx.fillStyle = '#834715';
ctx.fill();
ctx.lineWidth = 30;
ctx.strokeStyle = '#5b310e';
ctx.stroke();
ctx.closePath();

/***** Grass *****/
ctx.beginPath();
ctx.moveTo(36,360);
ctx.lineTo(469,350);
ctx.lineWidth = 40;
ctx.strokeStyle='#51b432';
ctx.stroke();
ctx.closePath();

/***** Tree *****/
ctx.beginPath();
ctx.lineWidth = 4;
ctx.lineJoin = 'round';
ctx.strokeStyle = '#80cf4b';
ctx.fillStyle = '#92cf4b';
ctx.moveTo(200,30);
ctx.moveTo(20,280);
ctx.lineTo(50,260);
ctx.lineTo(30,260);
ctx.lineTo(60,240);
ctx.lineTo(40,240);
ctx.lineTo(70,220);
ctx.lineTo(100,240);
ctx.lineTo(80,240);
ctx.lineTo(110,260);
ctx.lineTo(90,260);
ctx.lineTo(120,280);
ctx.fill();
ctx.fillStyle = '#9d7c42';
ctx.fillRect(60,280,20,40);
ctx.restore();

var trunkGradient = ctx.createLinearGradient(60,280,80,280);
  trunkGradient.addColorStop(0,'#663300');
  trunkGradient.addColorStop(0.4,'#996600');
  trunkGradient.addColorStop(1,'#552200');
  ctx.fillStyle = trunkGradient;
  ctx.fillRect(60,280,20,40);

var carnopyShadow = ctx.createLinearGradient(60,280,70,320);
  carnopyShadow.addColorStop(0,'rgba(0,0,0,0.4)');
  carnopyShadow.addColorStop(0.4,'rgba(0,0,0,0)');
  ctx.fillStyle = carnopyShadow;
  ctx.fillRect(60,280,20,40);
ctx.stroke();
ctx.closePath();

/***** Bike *****/
//Wheel back
ctx.beginPath();
ctx.arc(200,170,15,0,7);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FFF';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(200,170,18,0,7);
ctx.lineWidth = 2;
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.closePath();

//Wheel front
ctx.beginPath();
ctx.arc(265,152,15,0,7);
ctx.lineWidth = 3;
ctx.strokeStyle = '#FFF';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(265,152,18,0,7);
ctx.lineWidth = 2;
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.closePath();

//Frame
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle='#e52b0a';

ctx.moveTo(200,170);
ctx.lineTo(205,140);
ctx.stroke();
ctx.moveTo(200,170);
ctx.lineTo(230,163);
ctx.stroke();
ctx.moveTo(205,140);
ctx.lineTo(230,163);
ctx.stroke();

ctx.moveTo(205,140);
ctx.lineTo(250,130);
ctx.stroke();

ctx.moveTo(230,163);
ctx.lineTo(250,130);
ctx.stroke();
ctx.moveTo(250,130);
ctx.lineTo(265,152);
ctx.stroke();

ctx.closePath();

//Pedal
ctx.beginPath();
ctx.arc(230,163,7,0,7);
ctx.lineWidth = 2;
ctx.strokeStyle = '#FFF';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(230,163,2,0,7);
ctx.fillStyle = '#FFF';
ctx.fill();
ctx.closePath();

//Saddle
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle='#c5c5c5';
ctx.moveTo(205,140);
ctx.lineTo(200,130);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 7;
ctx.strokeStyle='#96450e';
ctx.moveTo(195,135);
ctx.lineTo(210,125);
ctx.stroke();
ctx.closePath();

//Handlebar
ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle='#c5c5c5';
ctx.moveTo(250,130);
ctx.lineTo(245,120);
ctx.stroke();
ctx.moveTo(245,120);
ctx.lineTo(235,115);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.strokeStyle='#96450e';
ctx.moveTo(235,115);
ctx.lineTo(220,115);
ctx.stroke();
ctx.closePath();




