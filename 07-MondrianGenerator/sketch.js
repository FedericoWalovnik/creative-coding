let rows;
let spaceLeft;
let startingPoint;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(234, 239, 233);

  rows = Math.round(random(3, 5));
  console.log(rows);
  spaceLeft = width;
  startingPoint = 0;

  stroke(5, 1, 3);
  strokeWeight(12);
}

function draw() {
  for (index = 0; index < rows; index++) {
    //determine the height of the current row
    const randomHeight = random(startingPoint + 40, height - 40);
    const rowHeight = Math.round(randomHeight);

    let squares = Math.round(random(2, 5));
    let squareStartingPoint = 0;

    console.log("horizontal " + index);
    for (a = 0; a < squares; a++) {
      let color = Math.random();
      if (color > 0 && color <= 0.2) {
        fill(231, 5, 3);
      } else if (color > 0.2 && color <= 0.4) {
        fill(253, 222, 6);
      } else if (color > 0.4 && color <= 0.5) {
        fill(3, 0, 173);
      } else if (color > 0.5 && color < 1) {
        fill(234, 239, 233);
      }
      console.log("vertical " + index);
      rect(squareStartingPoint, startingPoint, width / squares, rowHeight);
      squareStartingPoint = squareStartingPoint + width / squares;
    }

    startingPoint = startingPoint + (rowHeight - startingPoint);
    spaceLeft -= rowHeight;

    line(0, startingPoint, width, startingPoint);
  }
  noLoop();
}
