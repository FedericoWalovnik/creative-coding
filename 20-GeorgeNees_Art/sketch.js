let Xlocation = 0;
let Ylocation = 0;

let locationMean = 0;
let locationSd = 0;
let randomXLocation;
let randomYLocation;

let rotationMean = 0;
let rotationSd = 0;
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

  randomXLocation = randomGaussian(locationMean, locationSd);
  randomYLocation = randomGaussian(locationMean, locationSd);
  randomRotation = randomGaussian(rotationMean, rotationSd);
  push();
  translate(Xlocation + sizeOfSquare / 2, Ylocation + sizeOfSquare / 2);
  rotate(randomRotation);
  square(
    randomXLocation - sizeOfSquare / 2,
    randomYLocation - sizeOfSquare / 2,
    sizeOfSquare,
  );
  pop();

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
    rotationSd += 2;
    locationSd += 0.2;
  }
}
