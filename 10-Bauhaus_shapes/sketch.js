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

  var cnv = createCanvas(1200, 600);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);

  noStroke();
}

function draw() {
  const randomFigure = Math.round(random(4));

  //get a random color from the array of colors
  const randomColor = random(colors);
  fill(randomColor);

  if (randomFigure === 0) {
    arc(Xlocation, Ylocation, sizeOfSquare * 2, sizeOfSquare * 2, 0, 90);
  }
  // if it is a square
  else if (randomFigure === 1) {
    const randomTexture = Math.round(random(1));
    let innerSquareX = Xlocation;
    let innerSquareY = Ylocation;

    const stripWidth = sizeOfSquare / 16;

    let totalSpace = 0;
    let stripeColor = 0;

    if (randomTexture === 0) {
      while (totalSpace < sizeOfSquare) {
        if (stripeColor === 0) {
          fill(0);
          stripeColor = 255;
        } else {
          fill(255);
          stripeColor = 0;
        }
        rect(innerSquareX, innerSquareY, stripWidth, sizeOfSquare);
        innerSquareX += stripWidth;
        totalSpace += stripWidth;
      }

      innerSquareX += stripWidth;
    } else if (randomTexture === 1) {
      while (totalSpace < sizeOfSquare) {
        if (stripeColor === 0) {
          fill(0);
          stripeColor = 255;
        } else {
          fill(255);
          stripeColor = 0;
        }
        rect(innerSquareX, innerSquareY, sizeOfSquare, stripWidth);
        innerSquareY += stripWidth;
        totalSpace += stripWidth;
      }

      innerSquareX += stripWidth;
    }
  } else if (randomFigure === 2) {
    arc(
      Xlocation + sizeOfSquare,
      Ylocation,
      sizeOfSquare * 2,
      sizeOfSquare * 2,
      90,
      180,
    );
  } else if (randomFigure === 3) {
    arc(
      Xlocation,
      Ylocation + sizeOfSquare,
      sizeOfSquare * 2,
      sizeOfSquare * 2,
      270,
      360,
    );
  } else if (randomFigure === 4) {
    arc(
      Xlocation + sizeOfSquare,
      Ylocation + sizeOfSquare,
      sizeOfSquare * 2,
      sizeOfSquare * 2,
      180,
      270,
    );
  }

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}
