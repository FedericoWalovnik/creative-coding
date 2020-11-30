let rows;
let spaceLeft;
let startingPoint;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);

  rows = Math.round(random(3, 5));
  console.log(rows);
  spaceLeft = width;
  startingPoint = 0;
}

function draw() {
  for (index = 0; index < rows; index++) {
    //determine the height of the current row
    const randomHeight = random(startingPoint + 40, height - 40);
    const rowHeight = Math.round(randomHeight);
    console.log(startingPoint + 60, height - 60);

    startingPoint = startingPoint + (rowHeight - startingPoint);
    spaceLeft -= rowHeight;
    stroke(0);
    strokeWeight(12);

    line(0, startingPoint, width, startingPoint);
  }
  noLoop();
}
