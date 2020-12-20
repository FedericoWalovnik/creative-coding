function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let r = 100;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}
