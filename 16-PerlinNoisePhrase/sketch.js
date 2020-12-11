var phrase =
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
var curIndex = 0;
let randomLetter;

function setup() {
  createCanvas(400, 400);
  background(255);
  frameRate(5);
}

function draw() {
  fill(0);
  textAlign(CENTER, CENTER);

  let Xposition = 10;
  for (let index = 0; index < phrase.length; index++) {
    randomSize = Math.round(random(10, 60));
    textSize(randomSize);
    const letter = phrase.substring(index, index + 1);
    text(letter, Xposition, height / 2);
    Xposition += textWidth(letter);
  }
  noLoop();
}
