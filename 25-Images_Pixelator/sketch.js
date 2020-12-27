let img;

function preload(){
  img = loadImage("sunflowers.jpg");
}

function setup() {
  angleMode(DEGREES);
  img.resize(650, 0);
  var cnv = createCanvas(img.width, img.height);
  cnv.style("display", "block");
  background(255);

}

function draw() {
  loadPixels();
  image(img, 0, 0);

  const cr = pixels[0];
  const cg = pixels[1];
  const cb = pixels[2];
  const ca = pixels[3];

  fill(cr,cg,cb,ca);
  console.log(pixels);
  noStroke();
  square(1,1,50);


  //updatePixels();
}

