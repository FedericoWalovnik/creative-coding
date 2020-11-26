let Xlocation = 0;
let Ylocation = 0;

const sizeOfSquare = 30;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
}

function draw() {
  stroke(255);
  strokeWeight(2);
  for (let i = 0; i < 100; i++) {
    const randomNumber = Math.round(Math.random() * 1);
    console.log(i);
    if (randomNumber === 0) {
      translate(width / 2, height / 2);
      rotate(PI / 4);
    } else if (randomNumber === 1) {
      translate(width / 2, height / 2);
      rotate(PI / 8);
    }
    line(
      Xlocation + sizeOfSquare / 2,
      Ylocation,
      Xlocation + sizeOfSquare / 2,
      Ylocation + sizeOfSquare,
    );

    Xlocation += sizeOfSquare;
    if (Xlocation > canvas.width) {
      Xlocation = 0;
      Ylocation += sizeOfSquare;
    }
  }
  noLoop();
}
