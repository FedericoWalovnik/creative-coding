let Xlocation = 0;
let Ylocation = 0;
let time = 0;
let spaceBetweenLines = 10;
let randomVariation = 70;

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600, 600);
  cnv.style("display", "block");
  background(255);

}

function draw() {
  stroke(0);
  noFill();
  beginShape();
  for(let i=0; i < height+100; i+=10){
    randomXline = noise(time);
    vertex(map(randomXline,0,1,Xlocation-randomVariation,Xlocation),i);
    time+=0.1;
  }
  endShape();
  Xlocation+=spaceBetweenLines;
}

