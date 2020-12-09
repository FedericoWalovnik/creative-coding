let Xposition;
let time = 0;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);

  noStroke();
}

function draw() {
  background(255);
  fill(0);

  Xposition = noise(time);
  Xposition = map(Xposition, 0, 1, 0, width);

  circle(Xposition, height / 2, 40);

  time += 0.01;
  console.log(time);
}
