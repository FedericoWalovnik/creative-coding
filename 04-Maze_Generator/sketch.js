//HTML ELEMENTS
const currentSize = document.getElementById("size");
const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const speedRange = document.getElementById("speed");

let fr = 35;
let Xlocation = 0;
let Ylocation = 0;

let sizeOfSquare = 35;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  console.log(fr);
  frameRate(fr);
}

function draw() {
  stroke(255);
  strokeWeight(2);

  //Get a random number between 0 and 1 to determine the direction of the line
  const randomNumber = Math.round(Math.random() * 1);

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

  Xlocation += sizeOfSquare;
  if (Xlocation > width) {
    Xlocation = 0;
    Ylocation += sizeOfSquare;
  }
}

const resetDraw = () => {
  Xlocation = 0;
  Ylocation = 0;
  background(0);
};

const handleCurrentSizeChange = () => {
  currentSize.innerHTML = sizeOfSquare;
};

const modifySize = (operation) => {
  console.log(operation);

  if (operation === "plus" && sizeOfSquare < width / 2) {
    sizeOfSquare += 5;
  } else if (operation === "minus" && sizeOfSquare > 5) {
    sizeOfSquare -= 5;
  }
  handleCurrentSizeChange();
  resetDraw();
};

const handleSpeedChange = () => {
  console.log("changing speed");
  fr = speedRange.value;
  console.log(fr);
};

console.log(speedRange.value);
window.addEventListener("load", handleCurrentSizeChange);
minusButton.addEventListener("click", modifySize.bind(Event, "minus"));
plusButton.addEventListener("click", modifySize.bind(Event, "plus"));
speedRange.addEventListener("change", handleSpeedChange);
