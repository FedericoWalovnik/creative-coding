const body = document.querySelector("body");

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(153);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
