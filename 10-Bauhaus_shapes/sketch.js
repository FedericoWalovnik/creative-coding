let Xlocation = 0;
let Ylocation = 0;

let sizeOfSquare = 100;

let colors = [];

function setup() {
  colors = [
    color(0, 0, 0),
    color(190, 30, 45),
    color(255, 222, 23),
    color(33, 64, 154),
  ];

  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);
}

function draw() {
  const randomFigure = Math.round(random(1));
  
  //get a random color from the array of colors
  const randomColor = random(colors);
  fill(randomColor);

  if (randomFigure === 0) {
    arc(Xlocation, Ylocation, sizeOfSquare * 2, sizeOfSquare * 2, 0, 90);
  } else if (randomFigure === 1) {
    square(Xlocation, Ylocation, sizeOfSquare);
  }

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}
