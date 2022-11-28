let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let button;
var bgcolor;

function preload() {
 img1 = loadImage('colour1.png');
 img2 = loadImage('colour2.png');
 img3 = loadImage('colour3.png');
 img4 = loadImage('colour4.png');
 img5 = loadImage('colour5.png');
 img6 = loadImage('colour6.png');
 img7 = loadImage('colour7.png');
 img8 = loadImage('colour8.png');
 img9 = loadImage('colour9.png');
 img10 = loadImage('colour10.png');
 img11 = loadImage('colour11.png');
 img12 = loadImage('colour11.png');
}

function setup() {
  createCanvas(200, 200);
  background(0);
  button = createButton('click me');
  image(img1);
  button.mousePressed(changeBG);

  r = random(255);
  g = random(255);
  b = random(255);
  createButton("change background");
  button.mousePressed(changeColor);
  button.position(0, 255);
}

function changeBG() {
  let val = random(255);
  background(val);
}

function draw() {
  background(r, g, b);
}


function changeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
}