let Xlocation = 0;
let Ylocation = 0;

const color = [];

let sizeOfSquare = 100;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  angleMode(DEGREES);
}

function draw() {
  const randomNumber = Math.round(random(1));

  if (randomNumber === 0) {
    circle(
      Xlocation + sizeOfSquare / 2,
      Ylocation + sizeOfSquare / 2,
      sizeOfSquare,
    );
  } else if (randomNumber === 1) {
    square(Xlocation, Ylocation, sizeOfSquare);
  }

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}
