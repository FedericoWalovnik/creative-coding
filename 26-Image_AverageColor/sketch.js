let img;
let r = 0;
let g = 0;
let b = 0;
let a = 0;

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

  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let index = (x + y * width) * 4;
      r += pixels[index + 0];
      g += pixels[index + 1];
      b += pixels[index + 2];
      a += pixels[index + 3];
    }
  }

  r = r / (pixels.length / 4);
  g = g / (pixels.length / 4);
  b = b / (pixels.length / 4);
  a = a / (pixels.length / 4);

  console.log(r,g,b,a);


  //updatePixels();
  noLoop();
}
