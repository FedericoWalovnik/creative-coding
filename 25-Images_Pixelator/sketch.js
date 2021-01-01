let img;

function preload() {
  img = loadImage("sunflowers.jpg");
}

function setup() {
  angleMode(DEGREES);
  img.resize(650, 0);
  var cnv = createCanvas(img.width, img.height);
  cnv.style("display", "block");
  background(255);
  pixelDensity(1);
}

function draw() {
  img.loadPixels();
  image(img, 0, 0);

  let size = floor(map(mouseX, 0, width, 7, 40)); // maps mouseX value to element size

  for (let y = 0; y <= img.height; y++) {
    for (let x = 0; x <= img.width; x++) {
      let index = (x + y * width) * 4;
      r += blueskyImg.pixels[index + 0];
      g += blueskyImg.pixels[index + 1];
      b += blueskyImg.pixels[index + 2];
      a += blueskyImg.pixels[index + 3];

      fill(r, g, b);

      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }

  updatePixels();
}
