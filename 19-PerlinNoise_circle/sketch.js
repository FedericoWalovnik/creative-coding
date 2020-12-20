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

  let time = 0;
  beginShape();
  console.log(TWO_PI);
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let r = map(noise(time) * 100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    time += 0.1;
  }
  endShape(CLOSE);
}
