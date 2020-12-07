/*
EXPLANATION:
Also known as normal distribution, the Gaussian Distribution is a way of distributing numbers more similar to nature.
this distribution of "random" numbers have a mean that its the point of higher chances,
there is a very low probability that values far from the mean will be returned
and a higher probability that numbers near the mean will be returned.

SYNTAX:
randomGaussian(mean, sd)
sd -> standard deviation, this control how spread is the numbers and how likely differs from the average
more on: https://p5js.org/reference/#/p5/randomGaussian
coding train video: https://www.youtube.com/watch?v=8uyR-YU_0dg&list=PLRqwX-V7Uu6YVljJvFRCyRM6mmF5wMPeE
*/

let Xposition;
let mean;
let sd = 100;

function setup() {
  var cnv = createCanvas(900, 300);
  cnv.style("display", "block");
  background(255);
  angleMode(DEGREES);

  mean = width / 2;

  noStroke();
}

function draw() {
  fill(0, 0, 0, 5);
  noStroke();

  Xposition = randomGaussian(mean, sd);
  console.log(Xposition);

  circle(Xposition, height / 2, 50);
}
