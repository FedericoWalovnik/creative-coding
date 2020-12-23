let Xlocation = 0;
let Ylocation = 0;

let mean = 0;
let sd = 0;
let randomRotation;

let sizeOfSquare = 25;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(400, 600);
  cnv.style("display", "block");
  background(255);
}

function draw() {
  stroke(0);
  fill(0, 0, 0, 0);
  strokeWeight(1);

  randomRotation = randomGaussian(mean, sd);
  push();
  translate(Xlocation + sizeOfSquare / 2, Ylocation + sizeOfSquare / 2);
  rotate(randomRotation);
  square(0 - sizeOfSquare / 2, 0 - sizeOfSquare / 2, sizeOfSquare);
  pop();

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
    sd += 2;
  }
}
