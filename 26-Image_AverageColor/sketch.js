let images = new Array(3);
let r = 0;
let g = 0;
let b = 0;
let a = 0;

let sizeOfSquare = 35;
let Xlocation = 0;
let Ylocation = 0;

function preload(){
  for (let i = 0; i < 2; i++) {
    images.push(loadImage(`${i}.jpg`));
  }
  //img = loadImage("sunflowers.jpg");
  //blueskyImg = loadImage("bluesky.jpg");

  //images = [img, blueskyImg]
}

function setup() {
  angleMode(DEGREES);
  var cnv = createCanvas(600,600);
  cnv.style("display", "block");
  background(255);
  frameRate(1);
}

function draw() {
  loadPixels();
  
  images.forEach(image => {
    image.loadPixels();
    for(let y = 0; y < height; y++){
      for(let x = 0; x < width; x++){
        let index = (x + y * width) * 4;
        r += image.pixels[index + 0];
        g += image.pixels[index + 1];
        b += image.pixels[index + 2];
        a += image.pixels[index + 3];
        
        
      }
    }
    r = r / (pixels.length / 4);
    g = g / (pixels.length / 4);
    b = b / (pixels.length / 4);
    a = a / (pixels.length / 4);
    
    noStroke();
    console.log(r,g,b);
    fill(r,g,b);
    square(Xlocation,Ylocation,sizeOfSquare);
    
    Xlocation += sizeOfSquare;
    if (Xlocation > width) {
      Xlocation = 0;
      Ylocation += sizeOfSquare;
    }
  } 
)


  //updatePixels();
  noLoop();
}
