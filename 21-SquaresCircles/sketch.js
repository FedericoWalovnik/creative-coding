let Xlocation = 0;
let Ylocation = 0;

const sizeOfSquare = 100;
let borderRadius = 0;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);
}

function draw() {
  stroke(0);
  fill(0, 0, 0, 0);
  strokeWeight(1);  

  for (let index = 0; index < 5; index++) {
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
