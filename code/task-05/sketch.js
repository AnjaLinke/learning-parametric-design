function preload(){
  // preload assets
}

const canvasWidth = 600;
const canvasHeight = 600;

let rad; //radius
let i = 0;
let speedCentral = 0.005; //central circle speed
let multiplier = 1; //how much faster are the other circles?

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  background (240)
}

let increase = true

function draw () {
  stroke (0)
  strokeWeight (5)
  circle (canvasWidth / 2, canvasHeight / 2, i)
  if (increase) {
    i = i+1
  } else {i = i-1}
  if (i > canvasHeight) {
    increase = false
  }

 //stroke (0);
 //strokeWeight (5);
 //noFill();
 //circle (50)
 ////circles
 //radius = canvasHeight / 4
 //push();
 //translate (canvasWidth / 2, canvasHeight /2); //move to centre

 //circle (canvasWidth / 2, canvasHeight / 2);
 //for (let i = 0; i < circles.length; i ++); {
 // 
 //}
 //
 //radius = rad / (i + 1); //big circle radius
 //rotate(circle[i]); //circle go spin
 //if (!trace) ellipse(0, 0, radius * 2, radius * 2);
 //push ();
 //translate (0, radius) //go to the edge?
 //pop ();
 //translate (0, radius); //get ready for the next circle?
 //circles[i] = (circles[i])
}