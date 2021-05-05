const canvas_chart = document.getElementById('canvas_chart');
const ctx_chart = canvas_chart.getContext('2d');


function drawcircle(x, y, radius, color){
  ctx_chart.beginPath();
  ctx_chart.arc(x, y, radius, 0, Math.PI*2);
  ctx_chart.fillStyle = color;
  ctx_chart.fill();
}

function drawrect(x, y, length, width, color){
  ctx_chart.fillStyle = color;
  ctx_chart.fillRect(x, y, length, width);
}

function drawtext(text, font, color, x, y){

  ctx_chart.font = font;
  ctx_chart.fillStyle= color;
  ctx_chart.textAlign = "center";
  ctx_chart.fillText(text, x, y);
  
}

function drawgrid(boolean){
  var w = (canvas_chart.width/100);
  var h = (canvas_chart.height/100);

  if(boolean === true)
  {
    for(var a = 1; a < w ; a++)
    {
      var x = a*100;
      for (var b= 1; b < h ; b++)
      {
        var y = b*100;
        drawcircle(x, y, 5, 'black');
      }
    }
  }
}

//Array of fruits
var fruits = {

  "name":["Apple","Orange", "Banana", "Kiwi", "Blueberry", "Grapes"],
  "quantity":[20,10,15,3,5,8],
  "color":['red','orange','yellow','green','skyblue','purple']
  
};

function findchartfit(){
  var fit = 0;
  for (var i in fruits.quantity) {
   if(fruits.quantity[i] > fit){
     fit = fruits.quantity[i];
   }
    var chartfit = -(canvas_chart.height/fit);
   return chartfit;
  }
}


var fitnum = findchartfit();
for(var f = 0; f < canvas_chart.height/100; f++)
  {
    drawrect(f*100, 600, 100, (fruits.quantity[f])*fitnum, fruits.color[f]);
    drawtext(fruits.name[f],'18px Century Gothic','black',(f*100)+50,550);
    drawtext(fruits.quantity[f],'20px Century Gothic','black',((f*100) + 50),575);
  }