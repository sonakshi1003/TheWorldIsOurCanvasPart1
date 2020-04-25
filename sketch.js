var canvas;
var drawing = [];
var currentline;
var r,g,b;

function setup() {
  canvas = createCanvas(500,500);

  canvas.mousePressed(startLine);
}
function draw() {
  background(0); 
 
  r=map(mouseX, 0, width, 255, 0);
  g=map(mouseX, 0, width, 204, 255);
  b=map(mouseX, 0, width, 0,0);

  if(mouseIsPressed){
    var point = {
      x : mouseX,
      y : mouseY
    };
  
    currentline.push(point);
  }

  stroke(r,g,b);
  strokeWeight(4);
  noFill();
  for(var j = 0;j<drawing.length;j++){
    var line = drawing[j];
    
    beginShape();

    for(var i = 0;i<line.length;i++){
      vertex(line[i].x, line[i].y);
    }
    endShape();
  }
}

function startLine(){
  currentline = [];
  drawing.push(currentline);
}