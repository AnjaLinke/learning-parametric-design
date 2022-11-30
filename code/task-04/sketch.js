function preload(){
  // preload assets
}

let branches;
let zoom;


function setup() {
  createCanvas(601, 600); 
  angleMode (DEGREES);

  countingslider = createSlider (1, 8, 4);
  countingslider.position(130, 570)

}

function draw() {
  background (250)
  stroke (0)
  strokeWeight (2)
  for (let x=0; x<8; x+=1) {
    push()
    translate(75 * x, 0)
    rect (0, 20, 75, 40)
    pop ()

    drawTree ()
  }
}

//slider to scale the trees down?
function drawTree (level) {
  line (200, 550, 375, 250)
  //drawing the first branch shelf thingy
  line ()
  //new branches
  
}
