let distanceMiddle = 5;
let circleSize = 10;
let rotationAngle = 0;
let frames = 10;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  frameRate(frames);

  translate(width / 2, height / 2);

  strokeWeight(random(150));
  stroke(Math.round(random(255)), 50, 100);
  fill(0, 0, 0, 0);

  rotate(rotationAngle);
  line(0, 0, distanceMiddle, distanceMiddle);
  rotationAngle += 10;
  distanceMiddle += 1;
}
