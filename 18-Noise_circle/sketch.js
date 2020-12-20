function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  frameRate(10);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  beginShape();
  console.log(TWO_PI);
  for (let a = 0; a < TWO_PI + 100; a += 0.1) {
    let r = random(60, 260);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
}
