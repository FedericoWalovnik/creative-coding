let img;
let r = 0;
let g = 0;
let b = 0;
let a = 0;

function preload(){
  img = loadImage("sunflowers.jpg");
  blueskyImg = loadImage("bluesky.jpg");
}

function setup() {
  angleMode(DEGREES);
  blueskyImg.resize(650, 0);
  var cnv = createCanvas(blueskyImg.width, blueskyImg.height);
  cnv.style("display", "block");
  background(255);

}

function draw() {
  loadPixels();
  image(blueskyImg, 0, 0);
  blueskyImg.loadPixels();

  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let index = (x + y * width) * 4;
      r += blueskyImg.pixels[index + 0];
      g += blueskyImg.pixels[index + 1];
      b += blueskyImg.pixels[index + 2];
      a += blueskyImg.pixels[index + 3];

    }
  }

  r = r / (pixels.length / 4);
  g = g / (pixels.length / 4);
  b = b / (pixels.length / 4);
  a = a / (pixels.length / 4);

  noStroke();
  fill(r,g,b);
  console.log(r,g,b)
  square(100,100,100);



  //updatePixels();
  noLoop();
}
