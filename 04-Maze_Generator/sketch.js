let Xlocation = 0;
let Ylocation = 0;

const sizeOfSquare = 25;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  rectMode(CENTER);
}

function draw() {
  stroke(255);
  strokeWeight(2);

  const randomNumber = Math.round(Math.random() * 1);

  fill(255, 0, 0);
  //rect(0, 0, sizeOfSquare, sizeOfSquare);
  push();
  if (randomNumber === 0) {
    line(
      Xlocation,
      Ylocation,
      Xlocation + sizeOfSquare,
      Ylocation + sizeOfSquare,
    );
  } else if (randomNumber === 1) {
    line(
      Xlocation + sizeOfSquare,
      Ylocation,
      Xlocation,
      Ylocation + sizeOfSquare,
    );
  }
  pop();

  console.log(Xlocation, Ylocation);

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
  if (Ylocation > height) {
    noLoop();
  }
}
