let colors = [];

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);

  colors = [
    color(0, 0, 0),
    color(190, 30, 45),
    color(255, 222, 23),
    color(33, 64, 154),
  ];
}

function draw() {
  const randomX = random(width);
  const randomY = random(height);
  const randomFigure = Math.round(random(2));
  const randomColor = Math.round(random(3));

  fill(colors[randomColor], 500);
  noStroke();

  if (randomFigure === 0) {
    square(randomX, randomY, random(100));
  }
}
