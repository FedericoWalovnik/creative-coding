let Xposition;
let Yposition;
let mean = 300;
let sd = 70;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
}

function draw() {
  stroke(255);

  Xposition = randomGaussian(mean, sd);
  Yposition = randomGaussian(mean, sd);

  point(Xposition, Yposition);
}
