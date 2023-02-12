var xmotion = 2;  // Default: 8.8;
var ymotion = 1;  // Default: 2.2;

var frameCountBaseline = 0;

var drawFlag = 0;

var rectEdgeLength = 0;

var boundaryWidth = 0;
var boundaryHeight = 0;


var clEraser;

function setup() {
  createCanvas(600, 600);

  background(0);
}


function draw() {
  print("frameCount = " + frameCount);  //////////

  switch(drawFlag) {
  case 0:
    {
      clEraser = color(255, 255, 255);
      clEraser.setAlpha(2);
      noStroke();
      fill(clEraser);
      rect(width/2-boundaryWidth/2, height/2-boundaryHeight/2, boundaryWidth, boundaryHeight);
      boundaryWidth++;
      boundaryHeight++;
      break;
    }
  case 1:
    {
      noFill();
      strokeWeight(0.2);
      stroke(255, 255, 255, 128);
      drawBezierLines(rectEdgeLength, rectEdgeLength, 13);
      rectEdgeLength++;
      break;
    }
  } // switch

  if (frameCount - frameCountBaseline > 100) {
    drawFlag = floor(random(2));
    print("drawFlag = " + drawFlag);   //////////
    //boundaryWidth = random(width);
    //boundaryHeight = random(height);

    if (rectEdgeLength > width*2) {
      rectEdgeLength = 0;
    }

    frameCountBaseline = frameCount;
  } // if
}

function drawBezierLines(boundaryWidth, boundaryHeight, iterNums) {

  print("drawBezierLines");     ///////////
  print("boundaryWidth = " + boundaryWidth + "; boundaryHeight = " + boundaryHeight);     ///////////

  for (var i = 0; i < iterNums; i ++) {
    var boundX1 = width/2 - boundaryWidth/2;
    var boundX2 = width/2 + boundaryWidth/2;
    var boundY1 = height/2 - boundaryHeight/2;
    var boundY2 = height/2 + boundaryHeight/2;
    bezier(random(boundX1, boundX2), random(boundY1, boundY2),
      random(boundX1, boundX2), random(boundY1, boundY2),
      random(boundX1, boundX2), random(boundY1, boundY2),
      random(boundX1, boundX2), random(boundY1, boundY2));
  }
}