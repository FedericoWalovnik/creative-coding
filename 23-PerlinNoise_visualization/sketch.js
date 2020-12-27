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
  let xoff = 0;
  loadPixels();
  
  for(let y = 0; y < height; y++){
    for(let x = 0; x < width; x++){
      let index = (x + y * width) * 4;
      let r = map(noise(xoff),0,1,0,255);
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = r;

      xoff+=0.005;
    }
  }
  updatePixels();
}

