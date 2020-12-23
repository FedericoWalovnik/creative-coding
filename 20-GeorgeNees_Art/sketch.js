let Xlocation = 0;
let Ylocation = 0;

let sizeOfSquare = 25;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(400, 600);
  cnv.style("display", "block");
  background(255);
}

function draw() {
  stroke(0);
  strokeWeight(1);

  square(Xlocation, Ylocation, sizeOfSquare);

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}
