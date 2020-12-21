let maxNoise = 10;
let phase = 0;

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  noFill();

  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let xoff = map(cos(a + phase), -1, 1, 0, maxNoise);
    let yoff = map(sin(a), -1, 1, 0, maxNoise);
    let r = map(noise(xoff, yoff), 0, 1, 100, 300);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
  phase += 0.01;
}
