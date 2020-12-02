let distanceMiddle = 50;
let circleSize = 10;
let rotationAngle = 0;
let frames = 8;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  angleMode(DEGREES);
}

function draw() {
  frameRate(frames);
  frames++;

  translate(width / 2, height / 2);

  stroke(255);
  fill(0, 0, 0, 0);

  rotate(rotationAngle);
  circle(0, distanceMiddle, circleSize);
  rotationAngle += 20;
  circleSize += 10;
}
