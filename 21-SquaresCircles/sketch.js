let Xlocation = 0;
let Ylocation = 0;

let sizeOfSquare;
let borderRadius = 0;
var slider;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);

  slider = createSlider(1, 10, 1);
  slider.position(width + 50, height/5);
  slider.changed(rerender);

}

function draw() {
  sizeOfSquare = width/slider.value();
  stroke(0);
  fill(0, 0, 0, 0);
  strokeWeight(1);  

  for (let index = 0; index < Math.round(sizeOfSquare/15); index++) {
    push();
    translate(Xlocation + sizeOfSquare / 2, Ylocation + sizeOfSquare / 2);
    square(
      0 - sizeOfSquare / 2,
      0 - sizeOfSquare / 2,
      sizeOfSquare,
      borderRadius,
    );
    pop();
    borderRadius+=10;
  }

  borderRadius=0;

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}

function rerender(){
  background(255);
  Xlocation = 0;
  Ylocation = 0;
  console.log("rerender");
  redraw();
}