let Xlocation = 0;
let Ylocation = 0;
let mean = 50;
let sd = 20;

let sizeOfSquare = 100;

let colors = [];

function setup() {
  colors = [
    color(255, 129, 25),
    color(219, 100, 0),
    color(219, 46, 1),
    color(0, 187, 219),
  ];

  var cnv = createCanvas(1200, 600);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);

  noStroke();
}

function draw() {
  const gaussianColor = randomGaussian(mean, sd);
  let circleSize;

  //primary color
  if (gaussianColor > 30 && gaussianColor < 70) {
    fill(colors[0]);
    circleSize = randomGaussian(50, 10);
  } else if (gaussianColor > 20 && gaussianColor < 80) {
    fill(colors[1]);
    circleSize = randomGaussian(85, 20);
  } else if (gaussianColor > 10 && gaussianColor < 90) {
    fill(colors[2]);
    circleSize = randomGaussian(105, 30);
  } else if (gaussianColor > 0 && gaussianColor < 100) {
    fill(colors[3]);
    circleSize = randomGaussian(145, 50);
  }

  circle(
    Xlocation + sizeOfSquare / 2,
    Ylocation + sizeOfSquare / 2,
    circleSize,
  );

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}
