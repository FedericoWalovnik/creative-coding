//This sketch was inspired by this video: https://www.youtube.com/watch?v=rqecAdEGW6I&list=PLRqwX-V7Uu6YVljJvFRCyRM6mmF5wMPeE&index=2

let Xposition = 0;
let Yposition = 0;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(0);
}

function draw() {
  translate(height / 2, width / 2);

  stroke(random(255));
  strokeWeight(5);

  point(Xposition, Yposition);

  chooseNextStep();
}

const checkIfHitsWall = () => {
  let hitTheWall = false;

  if (Xposition <= -(width - width / 2)) {
    hitTheWall = true;
    Xposition += 10;
  } else if (Xposition >= width + width / 2) {
    Xposition += 10;
    hitTheWall = true;
  } else if (Yposition >= height - height / 2) {
    Yposition -= 10;
    hitTheWall = true;
  } else if (Yposition >= height + height / 2) {
    Yposition += 10;
    hitTheWall = true;
  }
  return hitTheWall;
};

const chooseNextStep = () => {
  const randomNumber = Math.round(Math.random() * 3);

  console.log(checkIfHitsWall());
  if (!checkIfHitsWall()) {
    if (randomNumber === 0) {
      Xposition += 5;
    } else if (randomNumber === 1) {
      Yposition += 5;
    } else if (randomNumber === 2) {
      Xposition -= 5;
    } else {
      Yposition -= 5;
    }
  }
};
