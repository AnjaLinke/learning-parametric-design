function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400, SVG); 
}

function draw() {
  background ("#ffd1dc");

  mybackground ()
  mysquare ()

  stroke ('red');

  fill (100, 0, 50);
  circle (200, 200, 100);
  line (200, 150, 200, 250);
  fill (240);
  ellipse (200, 200, 100, 50);
  fill (60, 10, 90)
  circle (200, 200, 50);
  fill (100, 0, 150);
  circle (200, 200, 30);
  fill (0);
  circle (200, 200, 10);
  fill (255);
  
  strokeWeight (2)
  stroke (255);

  line (400, 0, 350, 200);
  line (350, 200, 400, 400);
  line (400, 400, 200, 350);
  line (200, 350, 0, 400);
  line (0, 400, 50, 200);
  line (50, 200, 0, 0);
  line (0, 0, 200, 50);
  line (200, 50, 400, 0);

  point (200, 25);
  point (375, 200);
  point (200, 375);
  point (25, 200);
  
  line (200, 0, 400, 200);
  line (400, 200, 200, 400);
  line (200, 400, 0, 200);
  line (0, 200, 200, 0);
  line (230, 0, 400, 170);
  line (400, 230, 230, 400);
  line (170, 400, 0, 230);
  line (0, 170, 170, 0);
  
}

function mysquare (){
  stroke ('blue')

  fill (150, 0, 50, 100);
  square (50, 50, 300);
  circle (200, 200, 300);
  
  fill (5, 6, 13);
  circle (200, 200, 200);

  fill (80, 0, 40, 100)
  rect (75, 150, 250, 100)
  
}

function mybackground (){
  strokeWeight (1)
  stroke ('black');
  for (x=0;x<400;x+=4) {
    line (0, 0, x, 400);
    line (400, 0, x, 400);
    line (0, 400, x, 0);
    line (400, 400, x, 0);
  }
}
