var letters = "abcdfghijklmnopqrstuvwxyz";
var curIndex = 0;
let randomLetter;

function setup() {
  createCanvas(400, 400);
  frameRate(5);
}
function draw() {
  background(50);
  fill(255);
  textSize(144);
  textAlign(CENTER, CENTER);

  randomLetter = Math.round(random(0, 26));
  console.log(randomLetter);

  text(
    letters.substring(randomLetter, randomLetter + 1),
    width / 2,
    height / 2,
  );
}
