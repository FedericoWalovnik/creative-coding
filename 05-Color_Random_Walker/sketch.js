//This sketch was inspired by this video: https://www.youtube.com/watch?v=rqecAdEGW6I&list=PLRqwX-V7Uu6YVljJvFRCyRM6mmF5wMPeE&index=2

let Xposition = 0;
let Yposition = 0;

let stepSize = 50;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
  frameRate(8);
  colorMode(HSB);
}

function draw() {
  translate(height / 2, width / 2);

  console.log(Xposition);
  mappedX = map(mouseX, width - width / 2, width + width / 2, 0, 255);
  stroke(mappedX, 50, 100, 0.5);
  strokeWeight(random(150));

  point(Xposition, Yposition);

  chooseNextStep();
}

const checkIfHitsWall = () => {
  let hitTheWall = false;

  if (Xposition <= -(width - width / 2)) {
    hitTheWall = true;
    Xposition += stepSize * 2;
  } else if (Xposition >= width + width / 2) {
    Xposition -= stepSize * 2;
    hitTheWall = true;
  } else if (Yposition <= -(height - height / 2)) {
    Yposition += stepSize * 2;
    hitTheWall = true;
  } else if (Yposition >= height + height / 2) {
    Yposition -= stepSize * 2;
    hitTheWall = true;
  }
  return hitTheWall;
};

let zero = 0;
let one = 0;
let two = 0;
let three = 0;

const chooseNextStep = () => {
  const randomNumber = Math.floor(Math.random() * 4);

  if (!checkIfHitsWall()) {
    if (randomNumber === 0) {
      Xposition += stepSize;
      zero++;
    } else if (randomNumber === 1) {
      Yposition += stepSize;
      one++;
    } else if (randomNumber === 2) {
      Xposition -= stepSize;
      two++;
    } else {
      Yposition -= stepSize;
      three++;
    }
  }
};
